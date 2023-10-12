
// import Test from "./Test";
import Form from "./form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as addUser from "./store/action/user";
import UpdateUser from "./updateUser";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [show,setShow]=useState(false);
  const users = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();


  const deleteButton = (data) => {
    dispatch(addUser.deleteUser(data));
  };
  const updateList =(data)=>{
    setShow(true)
    dispatch(addUser.selectedUser(data))
  }
  return (
    <div className="App">
      <Form />
      {/* <div style={{paddingRight:'50px'}}>
       <Test/>
      </div> */}
      {users.map((x) => {
        return (
          <>
            {x.username !== "" && x.email !== "" && x.password !== "" && (
              <><ul>
                <li>
                  <h4>{x.username}</h4>
                  <h5>{x.email}</h5>
                  <h6>{x.password}</h6>
                  <button onClick={()=>deleteButton(x.id)}>delete</button>
                  <button onClick={()=>updateList(x)}>update</button>
                </li>
              </ul>
              <hr /></>
            )}
          </>
        );
      })}
     <UpdateUser show={show} onHide={()=>setShow(false)}/>
    </div>
  );
}

export default App;
