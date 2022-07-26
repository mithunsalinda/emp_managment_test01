import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { TextInput, InputButton } from '../components/inputeFields/'
import { Button } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useForm, Controller } from "react-hook-form";
import { nameFormSchema, } from "../lib/schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import actions from '../redux/action/add.emp.action';
/**
* @author
* @function EditEmpDetails
**/

export const EditEmpDetails = (props) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const [editedData, setEditedData] = useState({})
    useEffect(() => {
        empDetailsLoad()
    }, [editedData])

    const empDetailsLoad = () => {
        console.log(location.state.rowID);
    }

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: `${location.state.rowID.firstName}`,
            lastName: `${location.state.rowID.lastName}`,
            email: `${location.state.rowID.email}`,
            phoneNumber: `${location.state.rowID.phoneNumber}`,
            gender: `${location.state.rowID.gender}`

        },
        reValidateMode: 'onChange',
        resolver: yupResolver(nameFormSchema)
    });
    const onSubmit = (data) => {
        //console.log(data);
        setEditedData(data)
        dispatch(actions.editEmp(data))
        // const A2 = Object.assign({}, data);
        // addEmp.push(Object.assign({}, data))
        // console.log('A2', A2)
        // const profile = {
        //     ...JSON.parse(localStorage.getItem('addNewEmpReducer')),
        //     ...Object.assign({}, data)
        // };
        // localStorage.setItem('addNewEmpReducer', JSON.stringify(profile));
    };

    return (
        // <div>EditEmpDetails {location.state.rowID.firstName}</div>
        <div>
            <div className="custome__style">

                <div className="custome__style_col">
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='First Name'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={location.state.rowID.firstName}
                                error={errors.firstName?.message}
                                defaultVal={location.state.rowID.firstName}
                            />
                        )}

                    />
                </div>
                <div className="custome__style_col">
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='Last Name'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={location.state.rowID.lastName}
                                error={errors.lastName?.message}
                                defaultVal={location.state.rowID.lastName}
                            />
                        )}

                    />
                </div>
            </div>

            <div className="custome__style">
                <div className="custome__style_col">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='Email'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.email?.message}
                                defaultVal={location.state.rowID.email}
                            />
                        )}

                    />
                </div>
                <div className="custome__style_col">
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='Phone Number'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.phoneNumber?.message}
                                defaultVal={location.state.rowID.phoneNumber}
                            />
                        )}

                    />
                </div>
            </div>
            <div className="custome__style">
                <div className="custome__style_col">
                    <div className="custome__style">
                        <div className="custome__style_col">
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            //defaultValue={"female"}
                                            name="radio-buttons-group"
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            error={errors.gender?.message}
                                        //defaultValue={`${location.state.rowID.gender}`}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="custome__style">
                <div className="custome__style_col">
                    <InputButton variant="contained" buttonName='Edit' onPress={handleSubmit(onSubmit)} />
                </div>
            </div>
            <Link to="/employee/list">
                <InputButton variant="contained" buttonName='Back' />
            </Link>
        </div >
    )

}