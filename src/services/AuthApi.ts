import { auth, db } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const ref = collection(db, "users");

export const AuthApi = () => ({
  loginAuth: async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  registerAuth: async (email: string, password: string, username: string) => {
    const newData = {
      email,
      username,
    };
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await addDoc(ref, newData);
      await updateDoc(user, { docId: user.id, userId: result.user.uid });
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  getCurrentUser: async (userId: string) => {
    const refDoc = query(
      collection(db, "users"),
      where("userId", "==", userId)
    );

    return new Promise<any[] | null>((resolve, reject) => {
      const unsubscribe = onSnapshot(
        refDoc,
        (snapshot) => {
          const users = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          resolve(users);
        },
        (error) => {
          reject(error);
        }
      );

      return () => unsubscribe();
    });
  },
});
