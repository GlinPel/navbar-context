import React, { useContext } from 'react'
import MyContext from './Context';

const FormWrapper = () => {
    const {setNombre, nombre} = useContext(MyContext);
    return (
        <div className="form">
            <label>Your name: </label>
            <input type="text" onChange={e => setNombre(e.target.value)} value={nombre}/>
        </div>
    )
}

export default FormWrapper