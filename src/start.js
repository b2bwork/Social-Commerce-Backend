import { MongoClient, ObjectId } from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors'
import { schema } from './graphql/index';
import {
  EXPRESS_PORT, MONGO_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CALLBACK_URL,
  GOOGLE_SECRET_KEY,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_KEY,
  FACEBOOK_CALLBACK_URL,
} from './config';
import mongoose from 'mongoose';
import userProfile from './models/users/usersProfile'
var passportjs = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var facebookAuth = require('passport-facebook');
var froala = require('../node_modules/wysiwyg-editor-node-sdk/lib/froalaEditor');

export const start = async () => {
  try {
    passportjs.use(new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET_KEY,
      callbackURL: GOOGLE_CALLBACK_URL,
    }, async (accessToken, refreshToken, profile, done) => {
      let profileImage = profile.photos[0].value.replace('sz=50', 'sz=200');
      let checkToken = await userProfile.find({
        provider: "Google",
        providerUserID: profile.id
      }).then(async (data) => {
        if (data.length == 0) {
          let insert = await userProfile.insertMany(
            {
              provider: "Google",
              providerUserID: profile.id,
              fullName: profile.displayName,
              profileImage: profileImage,
            });
          return 'registered';
        } else if (data.length > 0) {
          return 'Loged';
        }
      }).catch((err) => {
        console.log("error: ", err);
      });

      done(null, { UserID: profile.id, Username: profile.displayName, ProfileImage: profileImage });
    }))

    passportjs.use(new facebookAuth({
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_KEY,
      callbackURL: FACEBOOK_CALLBACK_URL,
      profileFields: ['id', 'displayName', 'picture.type(large)', 'email']
    }, async (accessToken, refreshToken, profile, done) => {
      let checkToken = await userProfile.find({
        provider: "Facebook",
        providerUserID: profile.id
      }).then(async (data) => {
        if (data.length == 0) {
          let insert = await userProfile.insertMany(
            {
              provider: "Facebook",
              providerUserID: profile.id,
              fullName: profile.displayName,
              profileImage: profile.photos[0].value,
            });
          return 'registered';
        } else if (data.length > 0) {
          return 'Loged';
        }
      }).catch((err) => {
        console.log("error: ", err);
      });
      done(null, { UserID: profile.id, Username: profile.displayName, ProfileImage: profile.photos[0].value });
    }));

    const app = express()
    app.use('/products', express.static('productsImages'));
    app.use(cors())

    mongoose.connect(MONGO_URL, {
      useMongoClient: true,
    });
    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql'
    }))
    app.use(passportjs.initialize())
    app.get('/auth/google', passportjs.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
    app.get('/auth/google/callback', passportjs.authenticate('google', { session: false }),
      function (req, res) {
        res.redirect(`http://localhost:4200/#/authed/Google/${req.user.UserID}`);
      });
    app.get('/auth/facebook', passportjs.authenticate('facebook', { scope: ['public_profile', 'email'] }));
    app.get('/auth/facebook/callback', passportjs.authenticate('facebook', { session: false }),
      function (req, res) {
        res.redirect(`http://localhost:4200/#/authed/Facebook/${req.user.UserID}`);
      });
    app.post('/upload_image', function (req, res) {

      froala.Image.upload(req, '../productsImages/', function (err, data) {
        if (err) {
          console.log(err)
          return res.send(JSON.stringify(err));
        }
        let url = data;
        let real = url.link.replace('../froala_images/', 'http://localhost:3001/image/');
        console.log(real)
        res.send({ link: real });
      });
    });


    app.listen(EXPRESS_PORT, () => {
      console.log(`Visit localhost:${EXPRESS_PORT}`)
    })

  } catch (e) {
    console.log(e)
  }

}