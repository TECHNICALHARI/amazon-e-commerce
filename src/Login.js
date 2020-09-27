import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Login() {
    return (
        <div className="login">
        <Link to="/" className="Login_Link">
        <h1>TechnicalHari</h1>
        </Link>
        <div className="form_start">
            <form className="form">
                        <div className="form-group">
                            <label for="username">Username:</label>
                            <input type="text" name="username" placeholder="Enter Your Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="Email">Email:</label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="number">Mobile Number:</label>
                            <input type="number" name="number" placeholder="Enter Your Number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="conpass">Confirm Password:</label>
                            <input type="password" name="conpass" placeholder="Confirm Password" className="form-control" />
                        </div>
                        <Button class="text-primary button_style">Submit</Button>
            </form>
            </div>
        </div>
    )
}

export default Login;
