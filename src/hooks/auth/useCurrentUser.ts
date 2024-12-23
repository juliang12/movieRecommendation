import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { type } from "@/store/actions";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import useAuth from "./useAuth";

const ref = collection(db, "users");
const useCurrentUser = () => {
  const { user } = useAuth();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.uid) {
      const refDoc = query(ref, where("userId", "==", user?.uid));
      onSnapshot(refDoc, (snapshot) => {
        dispatch({
          type: type.setCurrentUser,
          payload: snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))[0],
        });
      });
    }
  }, [dispatch, user?.uid]);

  return { currentUser };
};

export default useCurrentUser;
