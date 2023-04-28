import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftStde = () => {
    const [cetagorise , setCetagorise] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCetagorise(data))
    },[])
    return (
        <div>
            {
                cetagorise.map(ca => <p key={ca.id} className='mb-2'> <NavLink to={`/category/${ca.id}`}>{ca.name}</NavLink></p>)
            }
        </div>
    );
};

export default LeftStde;