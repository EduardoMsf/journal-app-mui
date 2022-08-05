import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider

export const signInWithGoogle = async() => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    //const credentials = GoogleAuthProvider.credentialFromResult( result )
    const { displayName, photoURL, uid, email} = result.user
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  } catch( error ){
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    return {
      ok: false,
      errorMessage
    }
  }    
}

export const registerUserEmailPassword = async({ email, password, displayName}) => {

  try{
    const resp =  await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const {uid, photoURL} = resp.user
    await updateProfile( FirebaseAuth.currentUser, { displayName } )
    
    return {
      ok: true,
      uid, 
      photoURL,
      email,
      displayName
    }

  }catch( error ){
    return{
      ok: false,
      errorMessage: error.message
    }
  }
}