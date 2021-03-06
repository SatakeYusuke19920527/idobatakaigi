import firebase from 'firebase/app'
import "firebase/firestore"
import { MessageListType } from './types/MessageListType'

const {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_DATABASEURL,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_APPID
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASEURL,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
export const messagesRef = db.collection('messages')

//message送信
export const sendMessage = async (name: string, message: string) => {
  await db.collection("messages").add({
    name,
    message,
    createAt: new Date()
  })
    .then(function (docRef) {
      console.log("send message ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

// click時 message取得
export const readMessage = async () => {
  const messageList: MessageListType[] = []
  await db.collection("messages").orderBy('createAt', 'asc').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const temp = { id: doc.id, name: doc.data().name, message: doc.data().message, createAt: doc.data().createAt }
      messageList.push(temp)
    });
  });
  return messageList
}

// realTime listen
export const readMessageRealTimeUpdate = async () => {
  const messageList: MessageListType[] = []
  await db.collection("messages")
    .onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(doc => {
        const temp = { id: doc.id, name: doc.data().name, message: doc.data().message, createAt: doc.data().createAt }
        messageList.push(temp)
      })
    });
  return messageList
}