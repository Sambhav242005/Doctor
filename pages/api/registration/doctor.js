import app from "@/db";
import { getDatabase, ref, set } from "firebase/database";

async function writeUserData(userId,username, email, password) {
  const db = getDatabase(app);
  await set(ref(db, "users/" + userId), {
    username: username,
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
  const { username, email, password } = req.body;
  await writeUserData(generateRandomString(15),username, email, password);
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
