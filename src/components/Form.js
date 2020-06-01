import React from 'react'

const Form = props =>{
    
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return(
        <form className="member container" onSubmit={onSubmit}>
            {/* Member Name Input on Form */}
            <label>
                Name:&nbsp;
                <input 
                    name="name"
                    type="text"
                    placeholder="Enter Full Name"
                    value={values.name}
                    onChange={onInputChange}
                 />
            </label>

            {/* Member Email Input on Form */}
            <label>
                Email:&nbsp;
                <input 
                    name="email"
                    type="text"
                    placeholder="member@example.com"
                    value={values.email}
                    onChange={onInputChange}
                 />
            </label>

            {/* Member Role Dropdown Input on Form */}
            <label>
                Role:&nbsp;
                <select
                    name="role"
                    value={values.role}
                    onChange={onInputChange}
                >
                <option disabled value="">-- Select a Role --</option>
                <option value="full">Full Stack Dev</option>
                <option value="front">Front End Dev</option>
                <option value="back">Back End Dev</option>
                <option value="ops">Dev Ops</option>
                <option value="data">Data Science</option>
                </select>
            </label>

            {/* Form Submit Button */}
            <button type="submit">submit</button>

        </form>
    )
}

export default Form