import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { MATERIAL_CHANGE,
     CREATE_REQUEST_SUCCESS,
     CREATE_REQUEST,
     MATERIAL_LIST_DATA_SUCCESS,
     UPDATE_REQUEST_SUCCESS,
     UPDATE_REQUEST,
     DELETE_REQUEST_SUCCESS,
     DELETE_REQUEST } from './types';


export const materialChange = ({ props, value }) => {
    return(dispatch) => {
        dispatch({
            type: MATERIAL_CHANGE,
            payload: { props, value }
        });
    };
};

export const materialCreate = ({ name, count, room, cabinet, shelf, lab }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/materials`)
        .push({ name, count, room, cabinet, shelf, lab })
        .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};

export const materialUpdate = ({ name, count, room, cabinet, shelf, lab, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: UPDATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/materials/${uid}`)
        .set({ name, count, room, cabinet, shelf, lab })
        .then(() => {
            dispatch({ type: UPDATE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};
export const materialDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: DELETE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/materials/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: DELETE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};

export const materialListData = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/materials`)
        .on('value', snapshot => {
            dispatch({ type: MATERIAL_LIST_DATA_SUCCESS, payload: snapshot.val() });
        });
    };
};