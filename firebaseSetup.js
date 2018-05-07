/*
go to console.firebase.google.com
add new project..
set up auth method email/pass

npm install --save firebase

in firebase console click WEB SETUP, copy config

import firebase from 'firebase'

componentWillMount() {
  firebase.initializeApp({...config})
}

- auth:
firebase.auth().signInWithEmailAndPassword(email, password)

*/
