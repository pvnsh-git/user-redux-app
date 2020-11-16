import {ADD_USER, DELETE_USER, UPDATE_USER} from './ActionTypes'

let Id = 2;
export const userAction = function(userData){
    return {
        type: ADD_USER,
        payload: {
            ...userData,id:Id++
        }
    }
}
export const deleteUser = function(id){
    return {
        type: DELETE_USER,
        id
    }
}
export const updateUser = function(id){
    return {
        type: UPDATE_USER,
        id
    }
}