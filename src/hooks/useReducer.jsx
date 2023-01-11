import React from 'react';
import { isRouteErrorResponse } from 'react-router-dom';

const initialState = {
    value : '',
    error : false,
    loading : false,
};

const actionTypes = {
    confirm : 'LOADED',
    error: 'ERROR',
};

function useReducer({name}){
    const [state, dispatch] = React.useReducer(reducer, initialState)
    
    //Defining each state
    const onLoaded = () => {
        dispatch({type:actionTypes.loaded})
    }

    const onError = () => {
        dispatch({type:actionTypes.error});
    }

    if (!state.loading ){
        return(
            <div>
                <p>Cargando...</p>
            </div>
        )
    }else if(!state.error ){
        return(
            <div>
                <p>Error...</p>
            </div>
        )
    }
};

const reducerObject = (state, payload) => ({
    [actionTypes.loaded]:{
        ...state,
        loaded:true,
        error:false,
    },
    [actionTypes.error]:{
        ...state,
        loaded:false,
        error:true,
    },
})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type];
    }else{
        return state;
    }
}

export {useReducer};