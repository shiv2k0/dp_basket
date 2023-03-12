import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC22bmnkjmcLvsSzUrwHEnwfrWVLdmDuGE",
  authDomain: "basketfrontend.firebaseapp.com",
  projectId: "basketfrontend",
  storageBucket: "basketfrontend.appspot.com",
  messagingSenderId: "907251830698",
  appId: "1:907251830698:web:3230a93c476d5dd81fa5d3",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export {app, db, storage,auth}