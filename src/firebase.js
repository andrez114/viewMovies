// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtrAJE1TTdduVD-Qmoi42_1Fv2UPSK3ss",
    authDomain: "viewmovies-ccb60.firebaseapp.com",
    projectId: "viewmovies-ccb60",
    storageBucket: "viewmovies-ccb60.appspot.com",
    messagingSenderId: "883749873008",
    appId: "1:883749873008:web:13d603fd4bb75bbb2f9bb5",
    measurementId: "G-V252L5XENZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//
export const storage = getStorage(app)

export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url

}


export const db = getFirestore();
export const auth = getAuth(app)
const analytics = getAnalytics(app);