import { auth, provider } from "../firebase";

import { SET_USER } from "./actionType";

//import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload

})




export default function signInApI() {
    return (dispatch) => {


        auth.signInWithPopup(provider).then((payload) => {

            //console.log(payload.user)
            dispatch(setUser(payload.user))
        }).catch((error) => alert(error.message))

    }
}