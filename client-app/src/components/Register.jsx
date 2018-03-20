import React, { Component } from "react";


class Register extends Component {
    render() {
        return (
            <form className="signUp">
                <div className="register">
                    <h1 /> Register
          <div>
                        <label for="First Name">First Name:</label>
                        <input
                            name="First"
                            placeholder="John"
                            id="First Name"
                            type="text"
                            required
                        />

                        <label for="Last Name">Last Name:</label>
                        <input
                            name="Last"
                            placeholder="Smith"
                            id="Last Name"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <label for="Email">Email:</label>
                        <input
                            placeholder="your email"
                            id="Email"
                            type="Email"
                            name="email"
                            required
                        />

                        <label for="Password">Password</label>
                        <input
                            placeholder="your password"
                            id="Password"
                            type="Password"
                            maxlength="10"
                            minlength="5"
                            name="password"
                            required
                        />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </div>
            </form>
        );
    }
}
export default Register;