import React from 'react'

const Member = props =>{
    const { name, email, role } = props.details

    if (!props.details) {
        return <h3>Fetching member details...</h3>
      }

    return(
        <div className="member container">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role:&nbsp; 
                {role === 'front' ? 'Front End Dev' : null}
                {role === 'back' ? 'Back End Dev' : null}
                {role === 'ops' ? 'Dev Ops' : null}
                {role === 'full' ? 'Full Stack Dev' : null}
            </p>

        </div>
    )
}

export default Member