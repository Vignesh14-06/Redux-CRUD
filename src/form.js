import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as addUser from "./store/action/user";
// import { Navigate, useNavigate } from "react-router";

const Form = () => {
  const [input, setInput] = useState({
    // id:"",
    username: "",
    email: "",
    password: "",
    // cpassword:"",
  });
  const id = Math.floor(Math.random()*100)
  // const navigate = useNavigate()
  const [inputError, setInputError] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value,id });
  };
  // console.log(input,"handle")

  const onSubmit = (e) => {
    e.preventDefault();
    setInputError(errorValidate(input));
    dispatch(addUser.addUser(input));
  //  window.location.replace('https://www.facebook.com/');
  // navigate("https://www.facebook.com")
    setInput({
      // id:"",
      username: "",
      email: "",
      password: "",
      // cpassword:""
    });
  };

  const errorValidate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is mandatory . please enter your name";
    }
    if (!values.email) {
      errors.email = "Email Id is mandatory. Please enter your Email id";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "password is mandatory . please enter your password";
    }
     else if (values.password.length < 5) {
      errors.password = "Please enter more than 5 character";
    } else if (values.password.length > 15) {
      errors.password = "Please enter less than 10 character";
    }
    // if (!values.cpassword) {
    //   errors.cpassword = "password is mandatory . please enter your password";
    // } 
    // else if (values.password.length < 5) {
    //   errors.password = "Please enter more than 5 character";
    // } else if (values.password.length > 15) {
    //   errors.password = "Please enter less than 10 character";
    // }
    //  else if (!values.cpassword.includes(values.password)){
    //   errors.cpassword = "password does not match"
    // }
    return errors;
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmit}
      >
        {/* <div>
          <label>Id:</label>
          <input
            type="number"
            name="id"
            placeholder="id"
            value={input.id}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <label>UserName:</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={input.username}
            onChange={handleChange}
          />
          <p>{inputError.username}</p>
        </div>
        <div>
          <label>EmailId:</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={input.email}
            onChange={handleChange}
          />
          <p>{inputError.email}</p>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={input.password}
            onChange={handleChange}
          />
          <p>{inputError.password}</p>
        </div>
        {/* <div>
          <label>CPassword:</label>
          <input
            type="password"
            name="cpassword"
            placeholder="Cpassword"
            value={input.cpassword}
            onChange={handleChange}
          />
          <p>{inputError.cpassword}</p>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
