import { useState } from 'react';

function useForm(inputValues) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
        alert()
    };
    return { values, handleChange, setValues };
}
 export default useForm;