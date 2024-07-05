
import { auth } from "@/config/firebase";
import { getFromStorage } from "@/utils/getUserStorage";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const userLogged = getFromStorage("user");
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

    // Limpieza del efecto
    return () => unsubscribe();
  }, []);

  return {
    user,
  }

};

export default useAuth;
