import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
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
import actions from '../redux/action/add.emp.action';
import { Link } from 'react-router-dom';
/**
* @author
* @function AddNewEmployee
**/

export const AddNewEmployee = (props) => {
    const dispatch = useDispatch();
    const [addEmp, setAddEmp] = useState([]);

    // const {
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber,
    //     gender } = useSelector((state) => state.addNewEmpReducer)


    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: 'Mithunwewe',
            lastName: 'Jayanwewe',
            email: 'mithun@sds.lk',
            phoneNumber: '+6582858586',
            gender: 'female'

        },
        resolver: yupResolver(nameFormSchema)
    });
    const onSubmit = (data) => {
        // dispatch(actions.addNewEmp({ type: 'firstName', firstName: data.firstName }))
        // dispatch(actions.addNewEmp({ type: 'lastName', lastName: data.lastName }))
        // dispatch(actions.addNewEmp({ type: 'email', email: data.email }))
        // dispatch(actions.addNewEmp({ type: 'phoneNumber', phoneNumber: data.phoneNumber }))
        // dispatch(actions.addNewEmp({ type: 'gender', gender: data.gender }))
        //localStorage.setItem("addNewEmpReducer", JSON.stringify(addEmp));
        dispatch(actions.addNewEmp(data))
        // addEmp.push(data)
        // const profile = {
        //     //...JSON.parse(localStorage.getItem('addNewEmpReducer')),
        //     addEmp
        // };
        //localStorage.setItem('addNewEmpReducer', JSON.stringify(addEmp));
    };
    return (

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
                                value={value}
                                error={errors.firstName?.message}
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
                                value={value}
                                error={errors.lastName?.message}
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
                    <InputButton variant="contained" buttonName='Save' onPress={handleSubmit(onSubmit)} />
                </div>
            </div>
            <Link to="/employee/list">
                <InputButton variant="contained" buttonName='Back' />
            </Link>
        </div >

    )
}