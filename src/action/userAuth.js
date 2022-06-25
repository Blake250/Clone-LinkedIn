import { auth } from "..firebase"
import { setUser } from "./index"

export default function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async(user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}