import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import * as addUser from "./store/action/user";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UpdateUser = (props) => {
    const [input, setInput] = useState({
        id:"",
        username: "",
        email: "",
        password: "",
        // cpassword:"",
      });
      const [id,setId]=useState(0);
      // const navigate = useNavigate()
    //   const [inputError, setInputError] = useState({});
      const dispatch = useDispatch();
      const user = useSelector((state) => {
        return state.selectedUser;
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };
      
      useEffect (()=>{
        if(Object.keys(user).length !== 0){
         setInput({
            username:user.username,
            email:user.email,
            password:user.password
         })
         setId(user.id)
        }
      },[user])

      const Update = ()=>{
         props.onHide()
        dispatch(addUser.UpdatedUser({id:id,username:input.username,email:input.email,password:input.password}))
      }
      // console.log(input,"handle")
    
    //   const onSubmit = (e) => {
    //     e.preventDefault();
    //     // setInputError(errorValidate(input));
    //     dispatch(addUser.UpdatedUser(input));
    //   //  window.location.replace('https://www.facebook.com/');
    //   // navigate("https://www.facebook.com")
    //     setInput({
    //       id:"",
    //       username: "",
    //       email: "",
    //       password: "",
    //       // cpassword:""
    //     });
    //   };
    
    //   const errorValidate = (values) => {
    //     let errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if (!values.username) {
    //       errors.username = "Username is mandatory . please enter your name";
    //     }
    //     if (!values.email) {
    //       errors.email = "Email Id is mandatory. Please enter your Email id";
    //     } else if (!regex.test(values.email)) {
    //       errors.email = "Please enter a valid email";
    //     }
    //     if (!values.password) {
    //       errors.password = "password is mandatory . please enter your password";
    //     }
    //      else if (values.password.length < 5) {
    //       errors.password = "Please enter more than 5 character";
    //     } else if (values.password.length > 15) {
    //       errors.password = "Please enter less than 10 character";
    //     }
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
    //     return errors;
    //   };
    
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form
        style={{ display: "flex", flexDirection: "column" }}
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
      </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>Update()}>Update</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default UpdateUser
