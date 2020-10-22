import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCzAcmL971bApw0_yvAIXFrApEJA0gy3rY",
  authDomain: "fir-photo-8d94a.firebaseapp.com",
  databaseURL: "https://fir-photo-8d94a.firebaseio.com",
  projectId: "fir-photo-8d94a",
  storageBucket: "fir-photo-8d94a.appspot.com",
  messagingSenderId: "312521110742",
  appId: "1:312521110742:web:db25c0dbaa9d3daf2d0577"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectStore = firebase.firestore()

export{projectStorage, projectStore}