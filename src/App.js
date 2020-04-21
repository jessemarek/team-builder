import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'

//Components
import Member from './components/Member'
import Form from './components/Form'

//Styles
import './App.css';

//Shape of the data that would be pulled from an API
const initialMemberList = [{
  id: uuid(),
  name: 'Jesse Marek',
  email: 'jesse.marek@email.com',
  role: 'full'

}]

//Shape of initial form object
const initialFormValues = {
  //Text inputs
  name: '',
  email: '',
  //Dropdown input
  role: ''
}

function App() {

  //State for the Member List
  const [memberList, setMemberList] = useState(initialMemberList)

  //State for the Form
  const [formValues, setFormValues] = useState(initialFormValues)

  //State for editing member entries
  const [memberToEdit, setMemberToEdit] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  //Callbacks

  //Update values from inputs when they change
  const onInputChange = evt =>{
    //Name of the Input that caused event
    const name = evt.target.name
    //Value of the Input 
    const value = evt.target.value

    //Set the new value into state
    setFormValues({
      ...formValues, [name]: value
    })
  }

  //Add new members to list when form is submitted
  const onSubmit = evt => {
    //Prevent page reload
    evt.preventDefault()

    if(isEdit){
      console.log('This is an Edit')
    }
    else{
      //create new member object from the values in the form fields
      const newMember = {
        id: uuid(),
        name: formValues.name,
        email: formValues.email,
        role:formValues.role
      }

      //Set a new state with the newMember added
      setMemberList([...memberList, newMember])
    }

    //Clear the form values
    setFormValues(initialFormValues)
    
  }

  //Whenever the memberToEdit
  useEffect(() =>{
    if(memberToEdit){
      setIsEdit(true)
      setFormValues(memberToEdit)
    }
    
  }, [memberToEdit])

  return (
    <div className="container">
      <header><h1>Members App</h1></header>
      {
        memberList.map(member => {
          return <Member key={member.id} details={member} editMember={setMemberToEdit} />
        })
      }

      <Form 
        values={formValues} 
        onInputChange={onInputChange} 
        onSubmit={onSubmit}
        isEdit={isEdit}
      />
      
    </div>
  );
}

export default App;
