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

- auth example:
firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
      
*/
