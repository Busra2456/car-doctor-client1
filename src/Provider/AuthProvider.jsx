
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading , setLoading] = useState(true);

      const createUser = ( email,password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password)
      } 

      const signIn = (email,password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut = () =>{
            setLoading(true);
            return signOut(auth);
      }

      useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth,currenUser =>{
                  const userEmail = currenUser?.email || user?.email;
                  const loggedUser = {email: userEmail};
                  setUser(currenUser);
                  console.log('current user', currenUser);
                  setLoading(false)
                  if (currenUser){
                       
                       
                        axios.post('http://localhost:13000/jwt',loggedUser,{
                              withCredentials:true})
                        .then(res =>{
                              console.log('token response',res.data);
                        });
                  }
                  // //////////////////////////
                  else{
                        axios.post('http://localhost:13000/logout',loggedUser,{withCredentials:true})
                        .then(res =>{
                              console.log('token response',res.data);
                        });

                  }


                  /////////////////////////////
            });
                
            return () =>{
                  return unsubscribe();
            }
      },[])
     
     
      const authInfo = {

            user,
            loading,
            createUser,
            signIn,
            logOut,

      }
      return (
            <AuthContext.Provider value={authInfo}>
               {children}   
            </AuthContext.Provider>
      );
};

export default AuthProvider;