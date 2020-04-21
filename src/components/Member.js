import React from 'react'

const Member = props =>{
    const { name, email, role } = props.details

    return(
        <div className="member container">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            
        </div>
    )
}

export default Member