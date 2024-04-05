'use client'

import './register.css'
import React, { Component } from 'react';
import { useRouter } from "next/navigation";

class Register extends Component{


  addClick = async (event) => {
    event.preventDefault();
    const router = useRouter();
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    // Prepare data to send to the backend
    var formData = {
      fname: fname,
      lname: lname,
      email: email,
      username: username,
      password: password
    };

    try {
      // Send POST request to backend to check if the username already exists
      const response = await fetch("http://localhost:5038/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username })
      });

      const data = await response.json();

      if (data.exists) {
        alert("Username already exists. Please choose a different username.");
      } else {
        // If username is unique, proceed with registration
        const registrationResponse = await fetch("http://localhost:5038/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const registrationData = await registrationResponse.json();

        if (registrationData.Status === "successful") {
          router.push("/components/login");
        } else {
          alert(registrationData.error); // Display error message if registration fails
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request. Please try again later."); // Display generic error message
    }
  };
  
  render() {
    return (
        <div className="wrapper">
          <div className="login_box">
            <form onSubmit={this.addClick}>
              <div className="login-header">
                <span>Register</span>
              </div>


              <div className="input_box">
                <input type="text" id="fname" className="input-field" required />&nbsp;
                <label htmlFor="fname" className="label">Fname</label>
                <i className="bx bx-user icon"></i>
              </div>

              <div className="input_box">
                <input type="text" id="lname" className="input-field" required />&nbsp;
                <label htmlFor="lname" className="label">Lname</label>
                <i className="bx bx-user icon"></i>
              </div>

              <div className="input_box">
                <input type="text" id="email" className="input-field" required />&nbsp;
                <label htmlFor="email" className="label">Email</label>
                <i className="bx bx-user icon"></i>
              </div>
      
              <div className="input_box">
                <input type="text" id="user" className="input-field" required />&nbsp;
                <label htmlFor="user" className="label">Username</label>
                <i className="bx bx-user icon"></i>
              </div>
      
              <div className="input_box">
                <input type="password" id="pass" className="input-field" required />&nbsp;
                <label htmlFor="pass" className="label">Password</label>
                <i className="bx bx-lock-alt icon"></i>
              </div>
      
      
              <div className="input_box">
                  <button type="submit" className="input-submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      );
}
}

export default Register;