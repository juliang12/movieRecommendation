import { auth } from "@/config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setuser] = useState<User | null>(null);

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
