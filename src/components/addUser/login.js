import React, { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''

    })


    const [errors, setErrors] = useState({

        emailError: '',
        passwordError: ''

    })

    const handleChange = (evt) => {


        if (evt.target.name == "email") {
            // const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{3,})$/i;
            const reg = /^\w+([\.-]?\w+)*@(\w{4})+([\.-]?\w+)*(\.\w{3})+$/;
            setUser({ ...user, email: evt.target.value })

            setErrors({
                ...errors, emailError: (evt.target.value.length == 0) ? 'Email is Required' :
                    !(reg.test(evt.target.value)) ? 'Email not valid'
                        : ''
            })

        }
        else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value })
            setErrors({
                ...errors, passwordError: (evt.target.value.length == 0) ? 'Password is Required' :
                    (evt.target.value.length < 8) ? 'password must be at least 8 characters'
                        : ''
            })

        }



    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };


    return (
        <>
            <div className='formlog'>
                <form onSubmit={(e) => { handleSubmit(e) }}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"
                            aria-describedby="emailHelp" value={user.email}
                            onChange={(e) => { handleChange(e) }} name="email" required />

                        <p className="text-danger">{errors.emailError}</p>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>


                        <input type={passwordShown ? "text" : "password"}
                            className={`form-control ${(errors.passwordError != '') ? 'border-danger' : ''}`}
                            value={user.password}
                            onChange={(e) => { handleChange(e) }} name="password" required />
                        <input type="checkbox" name="showpassword" value={user.Checkbox}
                            onChange={togglePassword}
                        />
                        <label className='mx-3'>show password</label>
                        <p className='text-danger'>{errors.passwordError}</p>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );

}

export default Login;
