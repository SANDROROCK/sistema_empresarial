import React from 'react';
import {createStore}  from 'redux';


function reducer(state = 0 ,action){
    switch(action.type){
        case 'INCREMENTAR':
            return state + 1
        case 'DECREMENTAR':
            return state -1 
        default:
            return state

    }
}


const store = createStore(reducer);