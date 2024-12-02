import { useState } from "react";
import { isEmail,isAPassword,isNoEmpty } from "../../util/validation";
import Input from "../Input/Input";
const RegistrationForm = () => {

    const [formValue, setFormValue] = useState({
        displayName: '',
        email: '',
        password: ''
    });
   
    const [formInvalid, setFormInvalid] = useState({
        displayName: false,
        email: false,
        password: false
    })

    const handleChange = (e) => {
        const {name, value} = e.target; //destructuring delle proprieta name e value da e.target = e.target.name/e.target.value
                console.log(e.target.name + " " + e.target.value);
        setFormValue((prevValue)=>{
            return {
                ...prevValue,
                [name]: value
            }
         })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const payload = {
            displayName: formValue.displayName,
            email: formValue.email,
            password: formValue.password,
          };

          setFormInvalid({
            displayName: false,
            email: false,
            password: false
          })

          if (!isNoEmpty(formValue.displayName) || !isEmail(formValue.email) || !isAPassword(formValue.password)) {
            
            if (!isNoEmpty(formValue.displayName)) {
                setFormInvalid((prevValue) =>(
                    {
                    ...prevValue,
                    displayName: true
                }))
            }
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
            const response = await fetch("http://localhost:8000/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            });
            if (response.ok) {
                console.log(await response.json());
                //TODO NAVIGATE TO AUTHENMTICATED PAGE
            }
        } catch (error) {
            console.error("Error during fetch:", error);
            
          }

        //TODO API CALL
    }
   
    return (
        <form onSubmit={submitHandler}>
            <h2>Registrazione utente</h2>
            <h2>Login utente</h2>

            <Input label="Nome " id="displayName" error={formInvalid.displayName} type="text" name="displayName"  value={formValue.displayName} onChange={(e)=> handleChange(e)}/>
            <Input label="Email " id="email" error={formInvalid.email} type="text" name="email"  value={formValue.email} onChange={(e)=> handleChange(e)}/>
            <Input label="Password " id="password" error={formInvalid.password} type="password" name="password"  value={formValue.password} onChange={(e)=> handleChange(e)}/>
            <button type="submit">Register</button>
        </form>
    )

}

export default RegistrationForm;
