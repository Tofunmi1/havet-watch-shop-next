import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUYyKP_VDq2-4-ZohhHV1-MP2dfltaLgY",
  authDomain: "watch-shop-e7ec3.firebaseapp.com",
  databaseURL: "https://watch-shop-e7ec3-default-rtdb.firebaseio.com",
  projectId: "watch-shop-e7ec3",
  storageBucket: "watch-shop-e7ec3.appspot.com",
  messagingSenderId: "136548381220",
  appId: "1:136548381220:web:dfcf1f02ec783758d05eb1"
};

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const storage = firebase.storage()

export { firestore, storage }
