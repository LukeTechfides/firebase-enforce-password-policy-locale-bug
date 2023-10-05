import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const config = {
  apiKey: '',
  authDomain: '',

  userEmailToReset: '',
  languageCode: ''
}

let auth;

const app = initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
});

auth = getAuth(app);
auth.languageCode = config.languageCode;

sendPasswordResetEmail(auth, config.userEmailToReset)
  .then(() => {
    console.log('Email sent')
  })
