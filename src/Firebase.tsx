import firebase from 'firebase';


const config = {
	apiKey: "AIzaSyDV6Rp79YtC-_fa9qeAQLtFGTU0Is01umo",
    authDomain: "thursday-6e1f3.firebaseapp.com",
    databaseURL: "https://thursday-6e1f3-default-rtdb.firebaseio.com",
    projectId: "thursday-6e1f3",
    storageBucket: "thursday-6e1f3.appspot.com",
    messagingSenderId: "1088691863113",
    appId: "1:1088691863113:web:17e9c88591cf782abb4998",
    measurementId: "G-DSQD8PBXCH"
};

firebase.initializeApp(config);

export default firebase;