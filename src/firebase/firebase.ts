import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
import firebaseConfig from "./config"

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export default app

export {
    analytics,
    firestore,
    storage,
    auth,
}