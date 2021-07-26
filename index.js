const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");

const data = require("./data.json");
const collectionKey = "exercises"; //collection name

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-uka02@mrt-app-52ba3.iam.gserviceaccount.com"
});

const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

if (data && (typeof data === "object")) {
  // console.log(data)
  Object.keys(data).forEach(docKey => {
    console.log(data[docKey])
    // // firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => { //uncomment to set docId yourself
    firestore
      .collection(collectionKey)
      .doc()
      .set(data[docKey])
      .then((res) => {
        console.log("Document " + docKey + " successfully written!");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
  });
}