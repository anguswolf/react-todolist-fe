import { useState } from "react";
import { useEffect, useRef } from "react";

const LoginForm = () => {

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
        etarget: ''
    });
   

    const handleChange = (e) => {
        const {name, value} = e.target; //destructuring delle proprieta name e value da e.target = e.target.name/e.target.value
                console.log(e.target.name + " " + e.target.value);
        setFormValue((prevValue)=>{
                //console.log(prevValue)
            return {
                ...prevValue,
                [name]: value
            }
         })
    }
 

    return (
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={formValue.email} onChange={(e)=> handleChange(e)}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password"  id="password" value={formValue.password} onChange={(e)=> handleChange(e)}/>

            <label htmlFor="etarget">e.target</label>
            <input type="text" name="etarget" id="etarget" value={formValue.etarget} onChange={(e)=> handleChange(e)} />

            <button type="submit">Log In</button>
        </form>
    )

}

export default LoginForm;
