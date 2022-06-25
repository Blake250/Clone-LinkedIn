import { setUser } from "./index"
import { auth } from "../firebase"

export default function SignOutAPI() {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null))



        }).catch((error) => {
            console.log(error.message)
        })


    }


}