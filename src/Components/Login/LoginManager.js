import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import jwt_decode from 'jwt-decode';
import "firebase/auth"

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()

// Google Sign In Handler
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then( (res) =>{
      const { displayName, email } = res.user;
      const signedInUser = { name: displayName, email: email, success:true };
      return signedInUser;
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// Sign Out handler:
export const handleSignOut = () => {
  return firebase.auth().signOut()
  .then(res => {
    const signedOutUser = {
      isSignedIn: false,
      name: '',
      email: '',
      error: '',
      success: false
    }
    return signedOutUser;
  }).catch(err => {
    const errorMessage = err.message;
    console.log(errorMessage);
  });
}


// Update user name
// const updateUserName = name =>{
//   const user = firebase.auth().currentUser;

//   user.updateProfile({
//     displayName: name
//   })
// };


// Bearer Token for checking individual orders

export const isLoggedIn = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return false;
  }
  const decodedToken = jwt_decode(token);
  const currentTime = new Date().getTime() / 1000;
  return decodedToken.exp > currentTime;
};

export const loggedInInfo = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return false;
  }
  const decodedToken = jwt_decode(token);
  return decodedToken;
};