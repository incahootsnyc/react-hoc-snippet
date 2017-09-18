import { types } from '../actions';

const initialState = {
    ratings: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_RATINGS: 
            return {
                ...state
            };
        default: 
            return state
    }
        
}
