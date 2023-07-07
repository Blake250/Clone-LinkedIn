import { auth } from "..firebase"
import { setUser } from "./index"
import { onAuthStateChanged } from "firebase/auth"

export function getUserAuth() {
    return (dispatch) => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                dispatch(user)
            }
        })
    }
}