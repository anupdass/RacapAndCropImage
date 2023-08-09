import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export const Recapta = () => {

    const onChange = (e) => {
        console.log(e)
    }
    return (
        <div>
            <ReCAPTCHA
                sitekey='6LeP5ZAnAAAAAJv8lyIB8EA2mPpjTWZigAKDxrK3'
                onChange={onChange}
            />
        </div>
    )
}
