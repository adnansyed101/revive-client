import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import app from "../config/firebase";
import { toast } from "react-toastify";
import AOS from "aos";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import axios from "axios";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const [theme, setTheme] = useState("winter");

  const toggleTheme = () => {
    setTheme(theme === "winter" ? "dim" : "winter");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        axios.post(
          `${import.meta.env.VITE_SERVERURL}/jwt`,
          { email: currentUser?.email },
          { withCredentials: true }
        );
      } else {
        setUser(currentUser);
        axios
          .get(`${import.meta.env.VITE_SERVERURL}/jwt/logout`, {
            withCredentials: true,
          })
          .then((data) => console.log(data.data));
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const changePassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    toast.warn("Logged out.");
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    user,
    loading,
    theme,
    setUser,
    setLoading,
    createNewUser,
    logOut,
    login,
    updateUserProfile,
    createUserWithGoogle,
    changePassword,
    toggleTheme,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.array,
};

export default AuthProvider;
