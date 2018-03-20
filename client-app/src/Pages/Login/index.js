import React, { Component } from "react";
import { format } from "util";

class Login extends Component {
    render() {
        return (
            <form className="signUp">
                <h1 /> Sign In
        <div className="signIn">
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
                    <div>
                        <input type="submit" />
                    </div>
                    <hr />
                </div>
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
                        <label for="Male">Male</label>
                        <input id="Male" type="radio" name="Gender" value="male" />

                        <label for="Female">Female</label>
                        <input id="Female" type="radio" name="Gender" value="female" />

                        <label for="Other">Other</label>
                        <input id="Other" type="radio" name="Gender" value="other" />
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
                        <label for="Birthday">Birthday:</label>
                        <select id="Birthday">
                            <option>Month</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                        </select>
                        <select>
                            <option>Day</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                        </select>
                        <select>
                            <option>Year</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                        </select>
                    </div>
                    <div>
                        <label for="agree"> I agree to the terms and conditions:</label>
                        <input type="checkbox" id="agree" name="agreed" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </div>
            </form>
        );
    }
}
export default Login;