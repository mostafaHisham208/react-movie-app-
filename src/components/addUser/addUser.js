import React, { useState } from 'react';
import "./adduser.css"

const AddUser = () => {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: '',

    })


    const [errors, setErrors] = useState({
        nameError: '',
        usernameError: '',
        emailError: '',
        passwordError: '',
        confirmpasswordError: ''
    })

    const handleChange = (evt) => {

        if (evt.target.name == "name") {
            setUser({ ...user, name: evt.target.value })

            setErrors({
                ...errors, nameError: (evt.target.value.length == 0) ? 'Name is Required' :
                    (evt.target.value.length < 3) ? 'name must be at least 3 characters'
                        : ''
            })
        }
        else if (evt.target.name == "username") {
            setUser({ ...user, username: evt.target.value })

            setErrors({
                ...errors, usernameError: (evt.target.value.length == 0) ? 'username is Required' :
                    (evt.target.value.includes(' ')) || (evt.target.value.length < 5) ? 'username must be at least 5 characters and not contain spaces'
                        : ''

            })
        }
        else if (evt.target.name == "email") {
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
        else if (evt.target.name == "confirmpassword") {
            setUser({ ...user, confirmpassword: evt.target.value })
            setErrors({
                ...errors, confirmpasswordError: (evt.target.value.length == 0) ? 'confirmpassword is Required' :
                    (evt.target.value != user.password) ? 'confirmpassword  must be match the password  '
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
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control"
                            aria-describedby="nameHelp" value={user.name}
                            onChange={(e) => { handleChange(e) }} name="name" required />

                        <p className="text-danger">{errors.nameError}</p>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" className="form-control"
                            aria-describedby="nameHelp" value={user.username}
                            onChange={(e) => { handleChange(e) }} name="username" required />

                        <p className="text-danger">{errors.usernameError}</p>

                    </div>
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
                       <div className='shawpass'>
                        <input type="checkbox" name="showpassword" value={user.Checkbox}
                            onChange={togglePassword}
                        />
                        <label >show password</label>
                        </div>
                        <p className='text-danger'>{errors.passwordError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">confirm password</label>


                        <input type={passwordShown ? "text" : "password"}
                            className={`form-control ${(errors.confirmpasswordError != '') ? 'border-danger' : ''}`}
                            value={user.confirmpassword}
                            onChange={(e) => { handleChange(e) }} name="confirmpassword" required
                        />


                        <p className='text-danger'>{errors.confirmpasswordError}</p>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );

}

export default AddUser;
