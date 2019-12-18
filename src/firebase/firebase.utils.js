import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAwSY4Eqfn8Zsc5ug2srexscyvTPBZKgao",
    authDomain: "crown-clothing-c632c.firebaseapp.com",
    databaseURL: "https://crown-clothing-c632c.firebaseio.com",
    projectId: "crown-clothing-c632c",
    storageBucket: "crown-clothing-c632c.appspot.com",
    messagingSenderId: "313299289243",
    appId: "1:313299289243:web:be8f0a37479ec1501a323e"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
