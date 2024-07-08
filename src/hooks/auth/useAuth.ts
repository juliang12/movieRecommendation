
import { auth } from "@/config/firebase";
import { getFromStorage } from "@/utils/getUserStorage";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const userLogged = getFromStorage("user");
  const [loading, setLoading] = useState(true)
  const [user, setuser] = useState<User | null>(userLogged ? JSON.parse(userLogged) : null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setuser(authUser)
        localStorage.setItem("user", JSON.stringify(authUser.uid))
      } else {
        setuser(null);
        localStorage.removeItem("user");
      }
    });
    setLoading(false)

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading
  }

};

export default useAuth;
