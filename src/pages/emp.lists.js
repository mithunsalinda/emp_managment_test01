import React, { useEffect, useState } from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { InputButton } from '../components/inputeFields';
import { useDispatch, useSelector } from 'react-redux';
import addNewEmpReducer from '../redux/reducer/add.emp.reducer';
import addEmpAction from '../redux/action/add.emp.action';
import action from '../redux/action';

/**
* @author
* @function EmployeeList
**/

export const EmployeeList = (props) => {
    const [items, setItems] = useState({});
    const { empDate } = useSelector((state) => state.addNewEmpReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        console.log('empDate', empDate);
        //dispatch(action.loadEmpList(empDate))
    }, [])
    // useEffect(() => {
    //     // const parsedArrayFromLocalStorage = JSON.parse(localStorage.getItem('addNewEmpReducer'));

    //     // const mappedArray = parsedArrayFromLocalStorage.map((item, key) => {
    //     //     return item;

    //     // }, [items]);

    //     // console.log("log", mappedArray);
    //     // if (items) {
    //     //     setItems(items);
    //     //    }
    //     // setItems(mappedArray);
    //     const items = JSON.parse(localStorage.getItem('addNewEmpReducer'));
    //     console.log(items)
    //     if (items) {
    //         setItems(items);
    //     }

    // }, [])



    // const rows = empDate?.map((item, index) => ({
    //     id: index,
    //     firstName: item.firstName,
    //     lastName: item.lastName,
    //     email: item.email,
    //     phoneNumber: item.phoneNumber,
    //     gender: item.gender,
    // }));
    const rows = empDate.map((item, index) => ({
        id: index,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        phoneNumber: item.phoneNumber,
        gender: item.gender,
    }));

    const columns = [

        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
        { field: 'gender', headerName: 'Gender', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 250,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api = params.api;
                    const thisRow = {};

                    api
                        .getAllColumns()
                        .filter((c) => c.field !== '__check__' && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                        );

                    //return alert(JSON.stringify(thisRow, null, 4));
                    //navigate('/employee/edit',{state:{id:1,name:'sabaoon'}});

                    return navigate('/employee/edit', { state: { rowID: thisRow } });
                };

                return <><Button onClick={onClick} className='mrg-right' variant="outlined">Edit</Button><Button onClick={onClick} className='' variant="outlined">Delete</Button></>;
            },
        },
    ];

    return (
        <div style={{ height: '500vh', width: '100%' }}>
            <Link to="/employee/add">
                <InputButton variant="contained" buttonName='Add' />
            </Link>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )

}