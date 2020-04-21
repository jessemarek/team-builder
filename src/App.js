import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'

//Components
import Member from './components/Member'
import Form from './components/Form'

//Styles
import './App.css';

//Shape of the data that would be pulled from an API
const initialMemberList = [{
  id: uuid(),
  name: 'Jesse',
  email: 'jesse@email.com',
  role: 'Front End Dev'

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

  //Callbacks
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

  const onSubmit = evt => {
    //Prevent page reload
    evt.preventDefault()

    //create new member object from the values in the form fields
    const newMmeber = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role:formValues.role
    }

    //Set a new state with the newMember added
    setMemberList([...memberList, newMmeber])

    //Clear the form values
    setFormValues(initialFormValues)
  }

  return (
    <div className="container">
      <header><h1>Members App</h1></header>
      {
        memberList.map(member => {
          return <Member key={member.id} details={member} />
        })
      }

      <Form 
        values={formValues} 
        onInputChange={onInputChange} 
        onSubmit={onSubmit} 
      />
      
    </div>
  );
}

export default App;
