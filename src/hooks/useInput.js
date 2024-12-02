import { useState } from "react"

const useInput = (initialvalue) => {
    const [value, setValue] = useState(initialvalue);

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    return{
        value: value,
        handleChange,
    }
}

export default useInput;