import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth,  onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup,getIdToken, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database 
                saveUser(email, name, 'POST');

                //  send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                setAuthError('');
                history.replace('/');

            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // redirect
                const destination = location.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                // call saveUser with put
                saveUser(user.email, user.displayName, 'PUT');

                setAuthError('');

                // redirect
                const destination = location.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state//for all the tab
    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(user)
                getIdToken(user)
                    .then(idToken =>
                        setToken(idToken))
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    // observe user admin or not
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAdmin(data.isAdmin)
                setIsLoading(false);
            })
    }, [user.email])


    // logout function
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setAuthError('');

        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: `${method}`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,

    }


}

export default useFirebase;