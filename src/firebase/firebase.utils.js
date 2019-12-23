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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch(err) {
            console.log(err)
        }
    }

    return userRef
}

/* export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(item => {
        const newItemRef = collectionRef.doc()
        batch.set(newItemRef, item)
    })
    return await batch.commit()
} */

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id, 
            title, 
            items,
        }
    })
    return transformedCollection
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
