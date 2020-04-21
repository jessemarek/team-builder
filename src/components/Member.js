import React from 'react'

const Member = props =>{
    const { name, email, role } = props.details
    const setEditMember = props.toEdit
    
    //Inject current member details into the editMember state
    const toEdit = () =>{
        setEditMember(props.details)
    }

    //Return a loading message while we wait for data to return
    if (!props.details) {
        return <h3>Fetching member details...</h3>
      }

    return(
        <div className="member container">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role:&nbsp; 
                {role === 'full' ? 'Full Stack Dev' : null}
                {role === 'front' ? 'Front End Dev' : null}
                {role === 'back' ? 'Back End Dev' : null}
                {role === 'ops' ? 'Dev Ops' : null}
                {role === 'data' ? 'Data Science' : null}
            </p>
            <button type="button" onClick={toEdit}>edit</button>
        </div>
    )
}

export default Member