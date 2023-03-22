import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoAjx1FX3MrvzPkV0XEO5wcx_dly4eke8",
    authDomain: "vtex-app-97390.firebaseapp.com",
    projectId: "vtex-app-97390",
    storageBucket: "vtex-app-97390.appspot.com",
    messagingSenderId: "1062340662055",
    appId: "1:1062340662055:web:c2257c62ad1569c6f7cf02"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const mapUserFromFirebaseAuthToUser = (user) => {
    const { displayName, email, photoURL, uid } = user;

    return {
        avatar: photoURL,
        username: displayName,
        email,
        uid,
    };
};

export const onAuthStateChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged((user) => {
        const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
        onChange(normalizedUser);
    });
};

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithRedirect(googleProvider)
        .then(mapUserFromFirebaseAuthToUser);
};
