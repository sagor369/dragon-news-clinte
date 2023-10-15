import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftStde = () => {
    const [cetagorise , setCetagorise] = useState([])
    useEffect(()=>{
        fetch('https://dragon-news-server-sagor369.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCetagorise(data))
    },[])
    return (
        <div className='pl-4'>
            {
                cetagorise.map(ca => <p key={ca.id} className='mb-2'> <NavLink to={`/category/${ca.id}`}>{ca.name}</NavLink></p>)
            }
        </div>
    );
};

export default LeftStde;