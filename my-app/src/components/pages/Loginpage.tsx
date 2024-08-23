import {login} from "../../service/AuthService.ts";
import {useState} from "react";
import {Field, Form, Formik} from "formik";
import {Button} from "@mui/material";
import Header from "./elements/Header.tsx";

function Loginpage() {
    const [loginError, setLoginError] = useState(false);

    return (
        <><Header/>
            <div className="font">
                <div className="login-container">
                    <div className="login-box">
                        <h2>Login</h2>
                        <Formik
                            initialValues={{firstName: "", password: ""}}
                            onSubmit={async (values, {setSubmitting}) => {
                                try {
                                    await login(values.firstName, values.password);
                                    console.log("Login successful");
                                } catch (error) {
                                    console.error(error);
                                    setLoginError(true);
                                }
                                setSubmitting(false);
                            }}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">Username:</label>
                                        <Field
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Enter your Username"
                                            type="text"
                                            className="form-control"
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            required/>
                                    </div>
                                    <Button
                                        className="btn-login"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Login
                                    </Button>
                                    {loginError && <div className="error-message">Login failed. Please check your
                                        credentials.</div>}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loginpage;
