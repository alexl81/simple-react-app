import {getAuthUserData} from "./auth_reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
}

const app_reducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    // debugger;
    // dispatch(somethingElse());
    // dispatch(somethingElse());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });





}



export default app_reducer;