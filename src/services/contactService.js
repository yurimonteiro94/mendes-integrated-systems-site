import { get, ref } from "firebase/database"
import { database } from "./firebase"

const CONTACT_PATH = "public/contact"

export async function getContactInfo() {
  const contactRef = ref(database, CONTACT_PATH)
  const snapshot = await get(contactRef)

  if (!snapshot.exists()) {
    throw new Error("Contact information was not found.")
  }

  return snapshot.val()
}