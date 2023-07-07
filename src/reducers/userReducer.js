
import { createSlice } from '@reduxjs/toolkit';




const authSlice = createSlice({
    name: 'user',
    initialState: {
      
        Name: "",
        email: "",
        photo: "",

      isLoading: false,
      logOut:true,
      error: false,
    
    
  
    },
    reducers: {
      setCurrentUser: (state, action) => {

      state.Name= action.payload.Name;
      state.email= action.payload.email;
      state.photo= action.payload.photo;
   
     

       
   /*   return {

          ...state,
        user : [action.payload, ...state.user]
      }*/

      
      },

      setError: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      },
    
    
   
      
      setLogOut: (state) => {
        state.currentUser = null;
        state.isLoading = false;
        state.logOut = true

      },
    },
  });

  export  const {setCurrentUser, setError,setLogOut} =  authSlice.actions




  export const  selectUserName = ((state)=> state.user.Name )
  export const selectUserEmail = ((state)=> state.user.email)
  export const selectUserPhoto = ((state)=> state.user.photo)


  
  export default authSlice.reducer

  

























/*const INITIAL_STATE = {
    user: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {

                ...state,
                user: action.user,
            };


        default:

            return state;
    }
}


export default userReducer*/