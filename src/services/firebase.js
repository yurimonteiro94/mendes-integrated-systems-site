import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAkMQNc_l5z_usq5lQhj_odAAKecg1iJz8",
  authDomain: "mendes-integrated-systems-site.firebaseapp.com",
  databaseURL: "https://mendes-integrated-systems-site-default-rtdb.firebaseio.com",
  projectId: "mendes-integrated-systems-site",
  storageBucket: "mendes-integrated-systems-site.firebasestorage.app",
  messagingSenderId: "886520014216",
  appId: "1:886520014216:web:087761c83f6cc96dee463d",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const database = getDatabase(firebaseApp)