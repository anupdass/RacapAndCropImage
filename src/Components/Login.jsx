import { Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Recapta } from './Recapta'
import ReCAPTCHA from 'react-google-recaptcha'


const Login = () => {
    const [loginInfo, setLoginInfo] = useState()
    const [captcha, setCaptcha] = useState(true)

    const handleOnchange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value,
        })
    }

    const onChange = (e) => {
        if (e) {
            setCaptcha(false)
        }
    }

    const onCall = (e) => {
        console.log(e)
    }

    return (
        <div>
            <Stack spacing={4}>
                <TextField label='User Name' name='user' required onChange={handleOnchange} />
                <TextField label='password' type='password' name='password' required onChange={handleOnchange} />
                {/* <Recapta /> */}

                <ReCAPTCHA
                    sitekey='6LeP5ZAnAAAAAJv8lyIB8EA2mPpjTWZigAKDxrK3'
                    onChange={onChange}
                    asyncScriptOnLoad={onCall}
                />
                <Button disabled={captcha} variant='contained'>Login</Button>
            </Stack>
        </div>
    )
}

export default Login