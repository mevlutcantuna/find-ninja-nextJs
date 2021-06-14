import {GETDATA} from "./constant";

const initialState = {
    ninjas:[]
};

const reducer = (state=initialState,action) => {
    switch (action.type){
        case GETDATA.GET_DATA_SUCCESS:
            console.log(action.payload)
            return {...state,ninjas:action.payload};
        default:
            return state;
    }
}

export default reducer;