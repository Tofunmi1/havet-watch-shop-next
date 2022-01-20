import React, { useEffect,useState } from 'react';
//import { firestore, storage } from '../firebase/config'
import * as firebase from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getFirestore, onSnapshot, snapshotEqual } from "firebase/firestore";
mport { getStorage, ref, uploadBytes,getDownloadURL } from 'firebase/storage';
//import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId } from '../firebase/config';
import style from '../styles/watchCatalouge.module.css';
import Image from 'next/image'

const firebaseConfig = {
  apiKey: "AIzaSyDUYyKP_VDq2-4-ZohhHV1-MP2dfltaLgY",
  authDomain: "watch-shop-e7ec3.firebaseapp.com",
  databaseURL: "https://watch-shop-e7ec3-default-rtdb.firebaseio.com",
  projectId: "watch-shop-e7ec3",
  storageBucket: "watch-shop-e7ec3.appspot.com",
  messagingSenderId: "136548381220",
  appId: "1:136548381220:web:dfcf1f02ec783758d05eb1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const storage = getStorage();
const storageRef = ref(storage)

const ForMenPage = ({ }) => {
  const [x, setX] = useState([{name:'Loading', id:'initial', url:''}])

  useEffect(()=> {
    onSnapshot(collection(db, 'men-watch'), (snapshot) =>
      //snapshot.docs.map(doc =>{ storageRef.child })
      setX(snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id})))
    )
  },[x])
  const getImage = async (name) => {
    const url = await getDownloadURL(ref(storage, `men-watch/${name}`))
    console.log(url)
    //return url

  }
  getImage('51LfzeHygcL._AC_UL320_.jpg')
 return (
    <div id={style.watchShop}>
      <div className={style.watchesTopBanner}>
        <h1>Watches</h1>
      </div>
      <div className={style.watchCatalougeArea}>
        {x.map((x)=>{
          console.log(x)  
        })} 
      </div>
    </div>
  )
}

export default ForMenPage
