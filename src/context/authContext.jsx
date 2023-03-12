import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("no esta en auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Firestore

  const [movies, setMovie] = useState([]);
  const movieCollectionRef = collection(db, "peliculas");
  const queryMovie = query(movieCollectionRef, orderBy("titulo"), limit(20));

  useEffect(() => {
    const getMovies = async () => {
      onSnapshot(queryMovie, (snapshot) => {
        setMovie(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getMovies();
  }, []);

  //createMovie

  const createMovie = async (obj) => {
    const data = await addDoc(movieCollectionRef, obj);
    return data.id;
  };

  //delete movie
  const storage = getStorage();

  const deleteMovie = async (id, MovieImage) => {
    await deleteDoc(doc(movieCollectionRef, id));
    const desertRef = ref(storage, MovieImage);
    deleteObject(desertRef)
      .then(() => {
        alert("pelicula eleminada");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  //update
  const updateMovie = async (id, obj) => {
    await updateDoc(doc(colRef, id), obj);
  };

  //auth

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);
  return (
    <authContext.Provider
      value={{
        movies,
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        createMovie,
        deleteMovie,
        updateMovie,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
