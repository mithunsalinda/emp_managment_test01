import { object } from "yup";
import actionTypes from "./index"

const addNewEmp = (payload) => (dispatch, getState) => {
    const empDate = getState().addNewEmpReducer.empDate;
    //const empDate = getState()
    console.log('ss', empDate);
    empDate.push(payload);
    //localStorage.setItem("addNewEmpReducer", JSON.stringify(empDate));
    dispatch({
        type: actionTypes.ADD_NEW_EMP,
        payload: empDate,
    });
    // localStorage.setItem("addNewEmpReducer", JSON.stringify(empDate));

};
const loadEmpList = () => (dispatch, getState) => {
    const empDate = getState().addNewEmpReducer.empDate;
    dispatch({
        type: actionTypes.LOAD_LIST,
        payload: empDate,
    });
    // localStorage.setItem("addNewEmpReducer", JSON.stringify(empDate));

};
const editEmp = (payload) => (dispatch, getState) => {
    const editedDate = Object.assign([payload]);
    const empDate = getState().addNewEmpReducer.empDate;
    console.log('dddddd', { ...empDate, ...editedDate });
    //const mergeObj = { ...empDate, ...editedDate }
    let mergeObj = Object.assign(...empDate, ...editedDate);
    dispatch({
        type: actionTypes.EDIT_EMP,
        payload: mergeObj,
    });
    //localStorage.setItem("addNewEmpReducer", JSON.stringify(mergeObj));
}
// const editEmp = (payload) => (dispatch, getState) => {

//     const empDate = getState().addNewEmpReducer.empDate;
//     console.log('empDate', empDate);
//     Object.entries(empDate).map(e => {
//         return console.log(e);
//     })
//     dispatch({
//         type: actionTypes.EDIT_EMP,
//         payload: payload,
//     });

// }


// const editEmp = (payload) => (dispatch, getState) => {
//     const editedDate = Object.assign({ payload });
//     const empDate = getState().addNewEmpReducer.empDate;
//     console.log('dddddd', { ...empDate, ...editedDate });
//     //const mergeObj = { ...empDate, ...editedDate }
//     let mergeObj = Object.assign(...empDate, ...editedDate);
//     dispatch({
//         type: actionTypes.EDIT_EMP,
//         payload: mergeObj,
//     });
//     localStorage.setItem("addNewEmpReducer", JSON.stringify(mergeObj));
// }
// const editEmp = (data) => (dispatch, getState) => {
//     const empDate = getState().addNewEmpReducer.empDate;
//     const storage = JSON.parse(localStorage.getItem('addNewEmpReducer'))
//     const dataObj = Object.assign([data]);
//     //const empDate = getState()
//     let employee = Object.assign(...storage, ...dataObj);
//     const profile = {
//         ...empDate,
//         ...data
//     };
//     // empDate.push(payload);
//     console.log('data', data);
//     console.log('storage', storage);
//     console.log('dataObj', dataObj);
//     console.log('profile', profile);
//     console.log('employee', employee);
//     // console.log('sss', Object.assign({}, data));
//     localStorage.setItem("addNewEmpReducer", JSON.stringify(employee));
//     // dispatch({
//     //     type: actionTypes.EDIT_EMP,
//     //     payload: payload,
//     // });
//     // localStorage.setItem("addNewEmpReducer", JSON.stringify(empDate));


//     // const A2 = Object.assign({}, data);
//     // addEmp.push(Object.assign({}, data))
//     // console.log('A2', A2)
//     // const profile = {
//     //     ...JSON.parse(localStorage.getItem('addNewEmpReducer')),
//     //     ...addEmp
//     // };
//     // localStorage.setItem('addNewEmpReducer', JSON.stringify(profile));

// };
export default {
    addNewEmp,
    editEmp,
    loadEmpList
};