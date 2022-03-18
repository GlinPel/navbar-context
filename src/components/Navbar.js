import React, { useContext } from 'react'
import MyContext from './Context';

const Navbar = () => {
    const context = useContext(MyContext);
    return (
        <div className="navbar">
            <h2>Hi {context.nombre}</h2>
        </div>
    )
}

export default Navbar