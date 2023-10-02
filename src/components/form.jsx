// Think about how to structure your application into components. Your application should include:
// A section to add general information like name, email and phone number.
// A section to add your educational experience (school name, title of study and date of study)
// A section to add practical experience (company name, position title, main responsibilities of your jobs, 
// date from and until when you worked for that company)


const GeneralForm = function() {
return <>
    <form action="" id="general">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required/>
        
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required/>

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>

        <label htmlFor="schoolName">School name</label>
        <input type="text" id="schoolName" required/>

        <label htmlFor="title" >Degree</label>
        <input type="text" id='title' required/>

        <label htmlFor="studyDate">Date of study</label>
        <input type="text" id='studyDate' required/>
    </form>
</>
}
export default GeneralForm

