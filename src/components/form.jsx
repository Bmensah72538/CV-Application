// Think about how to structure your application into components. Your application should include:
// A section to add general information like name, email and phone number.
// A section to add your educational experience (school name, title of study and date of study)
// A section to add practical experience (company name, position title, main responsibilities of your jobs, 
// date from and until when you worked for that company)

import { useState } from 'react'

const GeneralForm = function(props) {

    const [nameState, setName] = useState('John Doe');
    const [emailState, setEmail] = useState('johndoe@gmail.com');
    const [phoneState, setPhone] = useState('888 888 8888')


    const handleSubmit = function(event) {
        console.log(event)
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setPhone(event.target[2].value);
    }

return (
    <>
    <form action="" id="general" onSubmit={handleSubmit}>
        <label htmlFor="name">*Name</label>
        <input type="text" id="name" placeholder={nameState} required/>
        
        <label htmlFor="email">*Email</label>
        <input type="text" id="email" placeholder={emailState} required/>

        <label htmlFor="phone">*Phone</label>
        <input type="text" id="phone" placeholder={phoneState} pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>

        {/* <label htmlFor="schoolName">School name</label>
        <input type="text" id="schoolName" required/>

        <label htmlFor="title" >Degree</label>
        <input type="text" id='title' required/>

        <label htmlFor="studyDate">Date of study</label>
        <input type="text" id='studyDate' required/> */}

        <button>Submit</button>
    </form>

    <div className='CV'>
        <p>{nameState}</p>
        <p>{emailState}</p>
        <p>{phoneState}</p>
    </div>
</>
)}
export default GeneralForm

