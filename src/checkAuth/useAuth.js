import {useState, useEffect} from "react";

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";


export function useAuth(){
 const [getStateProps, setGateStateProps] = useState("")

 useEffect(()=>{
  const unSubscribed = onAuthStateChanged(auth, ((user)=>{
    setGateStateProps(user)
  }))
       return unSubscribed
 },[auth])
   return getStateProps
}



export default useAuth