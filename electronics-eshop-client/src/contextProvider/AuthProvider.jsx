/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    //Sign in with user email pass
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Sign in with gmail pass
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Obeserve crnt use: ", currentUser)
            if (currentUser){
                const email = currentUser.email
                const cart = []
                const addUser = {email ,cart}
                fetch('https://electronics-eshop-server.vercel.app/users')
                .then((res) => res.json())
                .then((data) => {
                    const findemail = data.filter((item) => item.email === email)
                    if (findemail.length>0){
                        console.log("Email is in database")
                    } else{
                        fetch('https://electronics-eshop-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(addUser) 
                        })
                            .then(res => res.json())
                            .then(data =>{
                                    console.log(data)
                                    if (data.insertedId) {
                                        Swal.fire(
                                            'Welcome to Our E-shop',
                                            'Your account has been successfully added to our eshop Database.Feel free to explore our offerings and enjoy your shopping experience!',
                                            'success'
                                        )
                                    }})
                        
                    }})
            }  
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;