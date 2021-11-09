import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// instantiate the global state object
const StoreContext = createContext();
// The Provider is a special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop available to all other components.
const { Provider } = StoreContext;
// ( The Consumer is our means of grabbing and using the data that the Provider holds for us.)

const StoreProvider = ({ value = [], ...props }) => {
    //dispatch is the method we execute to update our state. It is specifically going to look for an action object passed in as its argumen
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };