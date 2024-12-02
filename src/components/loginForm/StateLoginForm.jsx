import { useState } from "react";
import { useEffect, useRef } from "react";
import Input from "../Input/Input";
import {isEmail,isNoEmpty,isAPassword} from "../../util/validation";


const StateLoginForm = () => {

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });
   
    const [formInvalid, setFormInvalid] = useState({
         email: false,
        password: false
    })

    const handleChange = (e) => {
        const {name, value} = e.target; //destructuring delle proprieta {e.target.name/e.target.value}
                console.log(e.target.name + " " + e.target.value);
        setFormValue((prevValue)=>{
                //console.log(prevValue)
            return {
                ...prevValue,
                [name]: value
            }
         })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const payload = {
            email: formValue.email,
            password: formValue.password,
          };

          setFormInvalid({
            email: false,
            password: false
          })

          if (!isEmail(formValue.email) || !isAPassword(formValue.password)) {
            if (!isEmail(formValue.email)) {
                setFormInvalid((prevValue) =>(
                    {
                    ...prevValue,
                    email: true
                }))
            }
            if (!isAPassword(formValue.password)) {
                setFormInvalid((prevValue) =>(
                    {
                    ...prevValue,
                    password: true
                }))
            }
            return
          }

      
          try {
            const response = await fetch("http://localhost:8000/user/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            });
            if (response.ok) {
                console.log(await response.json());
                //TODO NAVIGATE TO AUTHENTICATED PAGE
            } else{
                console.log("Response: Status: " + response.status + " - " + response.statusText)
                console.log(response)
            }
        } catch (error) {
            console.error("Error during fetch:", error);
            
          }

        //TODO API CALL
    }
   
    return (
        <form onSubmit={submitHandler}>
            <h2>Login utente</h2>
            <Input label="email" id="email" error={formInvalid.email} type="text" name="email"  value={formValue.email} onChange={(e)=> handleChange(e)}/>
            <Input label="password" id="password" error={formInvalid.password} type="password" name="password"  value={formValue.password} onChange={(e)=> handleChange(e)}/>


            <button type="submit">Login</button>
        </form>
    )

}

export default StateLoginForm;
