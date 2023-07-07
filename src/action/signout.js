import { setUser } from "./index"
import { auth } from "../firebase"
import { signOut } from "firebase/auth"
import { setError } from "../reducers/userReducer"

export default function SignOutAPI() {
    return (dispatch) => {
        signOut(auth).then(() => {
            dispatch(setError(null))



        }).catch((error) => {
            console.log(error.message)
        })


    }


}