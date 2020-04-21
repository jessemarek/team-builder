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

  }

  const onSubmit = evt => {

  }

  return (
    <div className="container">
      <header><h1>Members App</h1></header>
      {
        memberList.map(member => {
          return <Member key={member.id} details={member} />
        })
      }
      
    </div>
  );
}

export default App;
