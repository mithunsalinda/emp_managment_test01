import { TextField } from '@mui/material'
import React from 'react'

/**
* @author
* @function TextInput
**/

export const TextInput = (props) => {
    const { label, onBlur, onChangeText, error, defauts, defaultVal } = props
    return (
        <>
            <TextField error={error ? true : false} id="filled-basic"
                {...defauts}
                label={label}
                variant="filled"
                onBlur={onBlur}
                onChange={onChangeText}
                helperText={error}
                defaultValue={defaultVal}
            />
        </>
    )

}