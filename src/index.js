import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./store"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


/*root.render(
  <React.StrictMode>

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <App />
    </PersistGate>
    
   
    </Provider>
  </React.StrictMode>
);*/



let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( 
    <React.StrictMode >




    < Provider store = { store } >
     <PersistGate loading={null} persistor={persistor}>
   

    
   <App />
    </PersistGate>


    </Provider>
  




    </React.StrictMode>,
    
)

;


















/*const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( <
    React.StrictMode >




    <
    Provider store = { store } >

    <
    App / >


    <
    /Provider>




    <
    /React.StrictMode>,
)

;*/