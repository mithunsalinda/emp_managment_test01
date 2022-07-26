import actionTypes from "../action/index"
import createReducer from "../../lib/createReducer";
const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
}

const addNewEmpReducer = createReducer(initialState, {
    [actionTypes.ADD_NEW_EMP](state, actions) {
        let object = {}
        switch (actions.payload.type) {
            case 'id':
                object = { id: actions.payload.id };
                break;
            case 'firstName':
                object = { firstName: actions.payload.firstName };
                break;
            case 'lastName':
                object = { lastName: actions.payload.lastName };
                break;
            case 'email':
                object = { email: actions.payload.email };
                break;
            case 'phoneNumber':
                object = { phoneNumber: actions.payload.phoneNumber };
                break;
            case 'gender':
                object = { gender: actions.payload.gender };
                break;
            default:
                break;
        }
        return {
            ...state,
            ...object
        };
    },
});

export default addNewEmpReducer;