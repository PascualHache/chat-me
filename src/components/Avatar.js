import React from 'react';
import carles from '../assets/carles.jpg'


export default function Avatar({ user, showName }) {
    return (
        <div className="avatar-component">
            <img
                className="avatar"
                src={carles}
                // src={user.avatar}
                alt=""
            />
            {/* { showName && <h3 className="avatar-title">{user.name}</h3>}*/}    
            { showName && <h3 className="avatar-title">Carles Martínez</h3>}   
        </div>
    )
}
