import React from 'react'

const Member = props =>{
    const { name, email, role } = props.details
    const setMemberToEdit = props.editMember
    
    //Inject current member details into the memberToEdit state
    const editMember = () =>{
        setMemberToEdit(props.details)
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
            <button type="button" onClick={editMember}>edit</button>
        </div>
    )
}

export default Member