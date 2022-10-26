import { TapDragZoomHandler } from "maplibre-gl";
import React, {createContext, useContext, useReducer, useRef} from "react";

const initialValues = [
    {
        order: 0,
        url: '',
        done: true,
        text: 'OSM'
    },
    {
        order: 1,
        url: '',
        done: false,
        text: '위성영상'
    }
];

const ButtonStateContext = createContext();
const ButtonDispatchContext = createContext();

export function ButtonProvider({children}){
    const [state, dispatch] = useReducer(ButtonReducer, initialValues);
    const ButtonId = useRef(1);

    return (
        <ButtonStateContext.Provider value={state}>
            <ButtonDispatchContext value={dispatch}>
                {children}
            </ButtonDispatchContext>
        </ButtonStateContext.Provider>
    );
}

function ButtonReducer(state, action){
    switch(action.type){
        case "TOGGLE":
            let isCheck = state.map(item => (item.id === action.id && item.done) ? true : false);
            if(isCheck)
                return state;
            else
                state.map(item => (item.done = false));
            return (
                state.map(
                    item => 
                        item.id ===action.id ? {...item,  done: !item.done} : item
                )
            );
        deafult:
        throw new Error(`Error${action.type}`);
    }
}

export function useButtonState(){
    const context = useContext(ButtonContext);
    if(!context)
        return new Error("ERROR NOT FOUND ButtonContext");
    
    return context;
}

export function useButtonDispatch(){
    const context = useContext(ButtonDispatchContext);
    if(!context)
        return new Error("ERROR NOT FOUND ButtonDispatchContext");
    
    return context;
}