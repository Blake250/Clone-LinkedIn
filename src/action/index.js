import { auth, provider } from "../firebase";

import { SET_USER } from "./actionType";
import { setCurrentUser, setIsLoading, setError } from "../reducers/userReducer";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";




/*export default function signInApI() {
  //  const navigate = useNavigate();
 //const dispatch = useDispatch()
 
 return(dispatch)=>{


 
   
 
 
         signInWithPopup(auth,provider).then((payload) => {
            console.log(payload.user)
       
           let user = payload.user
 
 
            
             dispatch(setCurrentUser({
              name: user.displayName,
              email:user.email,
              photo:user.photoURL
             }))
           
           //  navigate("/home")
         
         }).catch((error) =>dispatch(setError(error)))
 
 }
 }
 



















//import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
/*import { signInWithPopup } from "firebase/auth";
import { Navigate,useNavigate } from "react-router-dom";


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload

})

*/


/*export default function SignInApI() {
   const navigate = useNavigate();
    return (dispatch) => {


        signInWithPopup(auth,provider).then((payload) => {
         
      
           const user = payload.user


            console.log(payload.user)
            dispatch(setUser(payload.user))
          
            navigate("/home")
          
        }).catch((error) => console.log(error))

    }
}*/




 /*(const SignInApI = async () => {
    const navigate = useNavigate();
    try {
     // const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        navigate.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };


  export default SignInApI*/