import { ADD_USER, DELETE_USER, UPDATE_USER } from '../Action/ActionTypes'

const initialState = [{
    id: 1,
    fname: 'Pavan Kumar',
    lname: 'Shukla',
    gender: 'Male',
    dob: '1990-12-25',
    email: 'pavan.shukla90@gmail.com',
    update: false
}];

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                action.payload
            ]
        case DELETE_USER:
            const newState = state.filter((item) => {
                return item.id !== action.id
            })
            return newState
        case UPDATE_USER:
            const updatedState = state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        update: true
                    }  
                }else return item
            })
            return updatedState
        default:
            return state
    }
}