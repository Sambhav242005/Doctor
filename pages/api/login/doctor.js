import app from "@/db";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useRouter } from "next/router";

async function readUserData(userId, email, password) {
  const db = getDatabase(app);
  await set(ref(db, "users/" + userId), {
    email: email,
    password: password,
  });
}
function generateRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default async function LoginDoctor(req, res) {
  const { email, password } = req.body;
  await readUserData(generateRandomString(15), email, password);
  res.status(201).send("hello")
}
export const config = {
  api: {
    externalResolver: true,
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
