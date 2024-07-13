import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Box,
  Paper,
  Checkbox
} from '@mui/material';


import './App.css';

function App() {

  const [activeStep, setActiveStep] = useState(0);
  const [showSubmissionMessage, setShowSubmissionMessage] = useState(false); // State for submission message
  //ethe eak
  const [data,setData]=useState({
    prno:'', misid:'', emailid:'', phoneno:'', photo:'', selectclass:'', selectdiv:'', isDSEStudent:'', sem1Attendance:'', sem2Attendance:'', sem3Attendance:'', sem4Attendance:'', sem5Attendance:'', sem6Attendance:'', isDSEStudent2:'', sem1SGPA:'', sem2SGPA:'', sem3SGPA:'', sem4SGPA:'', sem5SGPA:'', sem6SGPA:'', sem7SGPA:'',marksheet:'', higherstud:'', exam:'', score:'', percentile:'', areuplaced:'', LPA:'', paperpublished:'', papercost:'', timelinepaper:'', patentspublished:'', patentspublishedcost:'', patentptime:'', scopous:'', ugc:'', ieee:'', web:'', spring:'', extra:'', db:'', none:'', otheer:'', ipin:'', hackathons:'', ipin1:'', round:'', travelOutState:'', placespecify:'', clubs:'', bscr:'', bestposi:'', arts:'', where:'', rank:'',sportscertificate:'', who:'', upaid:'', pue:'',internshipcertificate:'', ccertify:'', platformm:'',certificationcertificate:'', amcat:'', firstexam:'', examsec:'', examthi:'', examth:'', pictt:'', coepp:'',amcatcertificate:''



             
              
  });
//ethe eak 
  const{firstName, lastName, rollNo, prno, misid, emailid, phoneno, photo, selectclass, selectdiv, isDSEStudent, sem1Attendance, sem2Attendance, sem3Attendance, sem4Attendance, sem5Attendance, sem6Attendance, isDSEStudent2, sem1SGPA, sem2SGPA, sem3SGPA, sem4SGPA, sem5SGPA, sem6SGPA, sem7SGPA,marksheet, higherstud, exam, score, percentile, areuplaced, LPA, paperpublished, papercost, timelinepaper, patentspublished, patentspublishedcost, patentptime, scopous, ugc, ieee, web, spring, extra, db, none, otheer, ipin, hackathons, ipin1, round, travelOutState, placespecify, clubs, bscr, bestposi, arts, where, rank,sportscertificate, who, upaid, pue,internshipcertificate, no, ccertify, platformm,certificationcertificate, amcat, firstexam, examsec, examthi, examth, pictt, coepp,amcatcertificate


    
  }=data;

  const [formData, setFormData] = useState({
    prno:'', misid:'', emailid:'', phoneno:'', photo:'', selectclass:'', selectdiv:'', isDSEStudent:'', sem1Attendance:'', sem2Attendance:'', sem3Attendance:'', sem4Attendance:'', sem5Attendance:'', sem6Attendance:'', isDSEStudent2:'', sem1SGPA:'', sem2SGPA:'', sem3SGPA:'', sem4SGPA:'', sem5SGPA:'', sem6SGPA:'', sem7SGPA:'',marksheet:'', higherstud:'', exam:'', score:'', percentile:'', areuplaced:'', LPA:'', paperpublished:'', papercost:'', timelinepaper:'', patentspublished:'', patentspublishedcost:'', patentptime:'', scopous:'', ugc:'', ieee:'', web:'', spring:'', extra:'', db:'', none:'', otheer:'', ipin:'', hackathons:'', ipin1:'', round:'', travelOutState:'', placespecify:'', clubs:'', bscr:'', bestposi:'', arts:'', where:'', rank:'',sportscertificate:'', who:'', upaid:'', pue:'',internshipcertificate:'', ccertify:'', platformm:'',certificationcertificate:'', amcat:'', firstexam:'', examsec:'', examthi:'', examth:'', pictt:'', coepp:'',amcatcertificate:''



  });
  const [submitted,setSubmitted] = useState(false); // State to track form submission
  // Assuming you have useState imported
const [firstNameError, setFirstNameError] = useState(false);
const [lastNameError, setLastNameError] = useState(false);
const [phoneNoError, setPhoneNoError] = useState(false);


  const isNumeric = (value) => /^\d*\.?\d*$/.test(value);

    
  const handleNext = () => {
    if (activeStep === steps.length - 2) { // Check if on the 11th step
      // Handle anything specific needed before going to the last step
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  


  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data,[e.target.name]:e.target.value});


    setFormData({
      ...formData,
      [name]: value // Update the corresponding field in formData based on the input's name attribute
    });

    // Assuming formData is an object and setFormData is its setter from useState
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));

    // Validate first name and last name to only contain letters
  if (name === "firstName" || name === "lastName") {
    const isValid = /^[A-Za-z]+$/.test(value);
    if (!isValid && value !== "") {
      name === "firstName" ? setFirstNameError(true) : setLastNameError(true);
    } else {
      name === "firstName" ? setFirstNameError(false) : setLastNameError(false);
    }
  }

    

  // Validation for phone number
if (name === 'phoneno') {
  const trimmedValue = value.trim(); // Trimmed value to remove leading and trailing spaces
  if (/^\d{10}$/.test(trimmedValue) || trimmedValue === '') {
    // Clear any existing error message for phone number
    setPhoneNoError(false);
  } else {
    // Set error message for invalid phone number
    setPhoneNoError(true);
  }
}

   
if (name === 'gotPlacement') {
  if (value === 'YES') {
    // If user got the placement, display the CTC text field
    setFormData(prevFormData => ({
      ...prevFormData,
      LPA: '' // Reset CTC field when user selects YES
    }));
  } else {
    // If user didn't get the placement, hide the CTC text field
    setFormData(prevFormData => ({
      ...prevFormData,
      LPA: '' // Reset CTC field when user selects NO
    }));
  }
}

//Validation for place specify 


// Enable/disable SPECIFY THE PLACE field based on user selection for travel
if (name === 'travelOutState') {
  if (value === 'YES') {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pptime: '', // Clear the value when enabling the field
    }));
  }
}

  };
{/*------------------------------------------------------------------------------------------------------------------------------------ */}




    const handleSubmit = async (e) => {
      e.preventDefault();  
      
      if (validateForm()) {
        // Assuming you have an API endpoint to submit the form data
        console.log("Form data submitted", data);
        // Reset form or set submis sion state here
        setSubmitted(true);
      } else {
        console.log("Validation errors");
      }

      try {
         const response=await fetch(
           "https://v1.nocodeapi.com/ashutoxh/google_sheets/jBoJQLkPESJnYqHO?tabId=Sheet1",{
             method:'POST',
             headers:{
               'Content-Type':'application/json'
             },

             body:JSON.stringify([[
              firstName, lastName, rollNo, prno, misid, emailid, phoneno, photo, selectclass, selectdiv, isDSEStudent, sem1Attendance, sem2Attendance, sem3Attendance, sem4Attendance, sem5Attendance, sem6Attendance, isDSEStudent2, sem1SGPA, sem2SGPA, sem3SGPA, sem4SGPA, sem5SGPA, sem6SGPA, sem7SGPA,marksheet, higherstud, exam, score, percentile, areuplaced, LPA, paperpublished, papercost, timelinepaper, patentspublished, patentspublishedcost, patentptime, scopous, ugc, ieee, web, spring, extra, db, none, otheer, ipin, hackathons, ipin1, round, travelOutState, placespecify, clubs, bscr, bestposi, arts, where, rank,sportscertificate, who, upaid, pue,internshipcertificate, no, ccertify, platformm,certificationcertificate, amcat, firstexam, examsec, examthi, examth, pictt, coepp,amcatcertificate

           
           ]])
           }
           );

           await response.json()
           setData({...data,prno:'', misid:'', emailid:'', phoneno:'', photo:'', selectclass:'', selectdiv:'', isDSEStudent:'', sem1Attendance:'', sem2Attendance:'', sem3Attendance:'', sem4Attendance:'', sem5Attendance:'', sem6Attendance:'', isDSEStudent2:'', sem1SGPA:'', sem2SGPA:'', sem3SGPA:'', sem4SGPA:'', sem5SGPA:'', sem6SGPA:'', sem7SGPA:'',marksheet:'', higherstud:'', exam:'', score:'', percentile:'', areuplaced:'', LPA:'', paperpublished:'', papercost:'', timelinepaper:'', patentspublished:'', patentspublishedcost:'', patentptime:'', scopous:'', ugc:'', ieee:'', web:'', spring:'', extra:'', db:'', none:'', otheer:'', ipin:'', hackathons:'', ipin1:'', round:'', travelOutState:'', placespecify:'', clubs:'', bscr:'', bestposi:'', arts:'', where:'', rank:'',sportscertificate:'', who:'', upaid:'', pue:'',internshipcertificate:'', ccertify:'', platformm:'',certificationcertificate:'', amcat:'', firstexam:'', examsec:'', examthi:'', examth:'', pictt:'', coepp:'',amcatcertificate:''



          });

          // Reset form state after successful submission
      setData({});
      setActiveStep(0); // Reset active step to initial step

      // Show submission message with animation
      setShowSubmissionMessage(true);
      setTimeout(() => setShowSubmissionMessage(false), 1000); // Hide after 3 seconds

      }
      catch (err){
       console.log(err)
      }
 };

 // Form validation functions here
 const validateInput = (name, value) => {
  // Validate specific inputs
};

const validateForm = () => {
  // Validate the entire form and return true if valid
  return true; // Placeholder
};

  const steps = [
    "Guidelines",
    "Personal Informations",
    "Attendance",
    "Acacdemics",
    "Higher Studies",
    "Patents & Publications",
    "Hackathons",
    "Orgainizations",
    "Sports-Artists",
    "Internship",
    "Certify",
    "AMCAT",
  ];

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {

      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <div className="marquee-container">
      <div className="marquee-text">
      <h3><b>Instructions for Form Submission</b>******
        <b>Instructions for Form Submission</b></h3>
       
      </div>
    </div>
    <br></br>
    <div style={{ marginTop: '20px' }}>
        <h3>Please ensure that you have the following documents ready to fill out the form</h3>
        <ol>
          <li><h3><b>Documents :</b></h3>
          <b>
            <ul type="none">
              <h4><li>a) Student passport size Photo</li>
              <li>b) Exam mark sheets from sem 1st to 7th sem</li>
              <li>c) Sports Certificate</li>
              <li>d)Internship offer Letter</li>
              <li>e) Any certifications done</li>
              <li>f) AMCAT Test Result Marksheet</li></h4>
            </ul>
           </b>
          </li>
          <br></br>
          <h3>
          <li>Percentage of Attendance of sem 1st to 6th semester</li>
          <li>The files should be Uploaded to the given link only with minimum size</li><br></br>
          <li>
            The format for the files are as follows :<br></br>
           <h5> a) Passport size photo : Students PRN number <br></br>
            b) Marksheets of 1st sem to 7th sem : Students Roll no & Name(Ex: 33305_Joseph_Mathews)<br></br>
            c) Sports Certifications : Students Roll no & Name(Ex: 33305_Joseph_Mathews)<br></br>
            d) Internship Offer Letter / Certficate : Students PRN no & name <br></br>
            e) Course Certifications : Students Name and roll no<br></br>
            f) AMCAT Report : Students PRN no and name <br></br></h5>
          </li><br></br>
          <li>Try to include only numeric values wherever necessary</li></h3>
          <li>
            <b><h3>Name, cost, and timeline of the:</h3></b>
            <ul type="none">
             <h4> <li>a) Published Patents</li>
              <li>b) Published papers</li></h4>
            </ul>
          </li>
          <h3><li>Scores of External Exams you attempted</li></h3>
          <h3><li>Scores of AMCAT for all years</li></h3>
          
        </ol>
      </div>
<br></br>
      <div style={{ marginTop: '20px' }}>
        <h3><label>
          <input type="checkbox" required /> 
          I acknowledge and accept the instructions provided above.
        </label></h3>
      </div>
            </Grid>
          </Grid>
          
        );


      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField 
                id="First-name"
                label="First Name"
                variant="outlined"
                name="firstName"
                placeholder="Enter Your First Name (Ex. Joseph)"
                style={{ width: '100%' }}
                margin="normal"
                value={firstName}
                onChange={handleChange}
                error={firstNameError} // Show error state if firstNameError is true
                helperText={firstNameError ? "Only letters are allowed" : ""} // Show helper text if there's an error
              />
          </Grid>
            <Grid item xs={6}>
            <TextField 
  id="Last-Name"
  label="Last Name"
  variant="outlined"
  name="lastName"
  placeholder="Enter Your Last Name (Ex. Benjamin)"
  style={{ width: '100%' }}
  margin="normal"
  value={lastName}
  onChange={handleChange}
  error={lastNameError} // Show error state if lastNameError is true
  helperText={lastNameError ? "Only letters are allowed" : ""} // Show helper text if there's an error
/>
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="Roll no"
                label="Roll no"
                variant="outlined"
                name="rollNo" 
                placeholder="Enter Your Roll no  (Ex. 33302)"
                value={rollNo} 
                onChange={handleChange} 
                style={{ width: '100%' }}
                margin="normal"
                
              />
            
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="Prn no"
                label="PRN number "
                variant="outlined"
                name="prno" 
                placeholder="Enter Your PRN number (Ex. 72178615K)"
                style={{ width: '100%' }}
                margin="normal"
                value={prno} 
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="MIS ID"
                label="MIS ID"
                variant="outlined"
                name="misid" 
                placeholder="Enter Your MIS ID (Ex. I2K20103077(Not for DSE))"
                style={{ width: '100%' }}
                margin="normal"
                value={misid} 
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="email ID"
                label="Email ID"
                variant="outlined"
                name="emailid" 
                placeholder="Enter Your Email ID (Ex. josephbenjamin2002@gmail.com)"
                style={{ width: '100%' }}
                margin="normal"
                value={emailid} 
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12}>
            <TextField 
  id="phoneno"
  label="Phone number"
  variant="outlined"
  name="phoneno" 
  placeholder="Enter Your Phone number (Ex. 9653287417)"
  style={{ width: '100%' }}
  margin="normal"
  value={phoneno} 
  onChange={handleChange} 
  error={phoneNoError}
  helperText={phoneNoError ? "Only 10 digits are allowed" : ""}
/>
              </Grid>


            
{/*--------------------------------------------------------------------------------------------------------------- */}
            
            

{/*--------------------------------------------------------------------------------------------------------------- */}
            <Grid item xs={6}>
              <Typography variant="subtitle1">Select your class:</Typography>
              <RadioGroup aria-label="class" name="selectclass" value={selectclass} onChange={handleChange}>
                <FormControlLabel value="SE" control={<Radio />} label="SE" />
                <FormControlLabel value="TE" control={<Radio />} label="TE" />
                <FormControlLabel value="BE" control={<Radio />} label="BE" />
              </RadioGroup>
            </Grid>
{/*--------------------------------------------------------------------------------------------------------------- */}
<Grid item xs={6}>
              <Typography variant="subtitle1">Select your Division:</Typography>
              <RadioGroup aria-label="div" name="selectdiv" value={selectdiv} onChange={handleChange}>
                <FormControlLabel value="IX" control={<Radio />} label="IX" />
                <FormControlLabel value="X" control={<Radio />} label="X" />
                <FormControlLabel value="XI" control={<Radio />} label="XI" />
              </RadioGroup>
            </Grid>
       
       <Grid item xs={6}>
              <TextField 
                id="photo"
                label="Photo Link"
                variant="outlined"
                name="photo" 
                placeholder="Enter Your drive link for Photo"
                style={{ width: '100%' }}
                margin="normal"
                value={photo} 
                onChange={handleChange} 
              />
            </Grid>
              {/*--------------------------------------------------------------------------------------------------------------- */}
          </Grid>
        );
      
        case 2:
          return (
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="subtitle1">Are you a DSE student?</Typography>
            <RadioGroup aria-label="DSE Student" name="isDSEStudent" value={formData.isDSEStudent} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
          
          <React.Fragment>
        {formData.isDSEStudent === "no" && (
          <Grid item xs={6}>
            <TextField 
              id="fattend"
              label="1st sem attendance"
              variant="outlined"
              placeholder="Enter your 1st semester attendance(Ex.85%)"
              name="sem1Attendance" 
              value={formData.sem1Attendance}
              error={!isNumeric(formData.sem1Attendance)}
              helperText={!isNumeric(formData.sem1Attendance) ? "Only numbers are allowed." : ""}
              style={{ width: '100%' }}
              margin="normal"
              onChange={handleChange}
              
            />
          </Grid>
        )}
  
        {formData.isDSEStudent === "no" && (
          <Grid item xs={6}>
            <TextField 
              id="sattend"
              label="2nd sem attendance"
              variant="outlined"
              placeholder="Enter your 2nd semester attendance(Ex.85%)"
              name="sem2Attendance" 
              value={formData.sem2Attendance}
              error={!isNumeric(formData.sem2Attendance)}
              helperText={!isNumeric(formData.sem2Attendance) ? "Only numbers are allowed." : ""}
              style={{ width: '100%' }}
              margin="normal"
              onChange={handleChange}
               
            />
          </Grid>
        )}
  
        {/* Repeat for other semesters as needed, changing the conditions and names as appropriate */}
        
        {/* For demonstration, here is the setup for the 3rd semester, follow similar patterns for others */}
        <Grid item xs={6}>
          <TextField 
            id="tattend"
            label="3rd sem attendance"
            variant="outlined"
            placeholder="Enter your 3rd semester attendance(Ex.85%)"
            name="sem3Attendance" 
            value={formData.sem3Attendance}
            error={!isNumeric(formData.sem3Attendance)}
            helperText={!isNumeric(formData.sem3Attendance) ? "Only numbers are allowed." : ""}
            style={{ width: '100%' }}
            margin="normal"
            onChange={handleChange}
            
          />
        </Grid>
        
        {/* Continue for semesters 4, 5, and 6 */}
        <Grid item xs={6}>
          <TextField 
            id="tfoattend"
            label="4th sem attendance"
            variant="outlined"
            placeholder="Enter your 4th semester attendance(Ex.85%)"
            name="sem4Attendance" 
            value={formData.sem4Attendance}
            error={!isNumeric(formData.sem4Attendance)}
            helperText={!isNumeric(formData.sem4Attendance) ? "Only numbers are allowed." : ""}
            style={{ width: '100%' }}
            margin="normal"
            onChange={handleChange}
            
          />
        </Grid>
  
        <Grid item xs={6}>
          <TextField 
            id="fifthattend"
            label="5th sem attendance"
            variant="outlined"
            placeholder="Enter your 5th semester attendance(Ex.85%)"
            name="sem5Attendance" 
            value={formData.sem5Attendance}
            error={!isNumeric(formData.sem5Attendance)}
            helperText={!isNumeric(formData.sem5Attendance) ? "Only numbers are allowed." : ""}
            style={{ width: '100%' }}
            margin="normal"
            onChange={handleChange}
            
          />
        </Grid>
  
        <Grid item xs={6}>
          <TextField 
            id="sixattend"
            label="6th sem attendance"
            variant="outlined"
            placeholder="Enter your 6th semester attendance(Ex.85%)"
            name="sem6Attendance" 
            value={formData.sem6Attendance}
            error={!isNumeric(formData.sem6Attendance)}
            helperText={!isNumeric(formData.sem6Attendance) ? "Only numbers are allowed." : ""}
            style={{ width: '100%' }}
            margin="normal"
            onChange={handleChange}
            
          />
        </Grid>
      </React.Fragment>
            </Grid>
          );
  
          
case 3:
  return (
    <Grid container spacing={2}>
  
  <Grid item xs={12}>
  <Typography variant="subtitle1">Are you a DSE student?</Typography>
  <RadioGroup aria-label="DSE Student" name="isDSEStudent2" value={formData.isDSEStudent2} onChange={(e) => {
  const { value } = e.target;
  setFormData({
  ...formData,
  
  isDSEStudent2: value,
  // Reset SGPA fields if user selects 'yes'
  sem1SGPA: value === 'yes' ? '' : formData.sem1SGPA,
  sem2SGPA: value === 'yes' ? '' : formData.sem2SGPA
  });
  }}>
  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
  <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  </Grid>
  
  {formData.isDSEStudent2 === 'no' && (
  <>
  <Grid item xs={6}>
          <TextField 
          id="fattend"
          label="1st sem SGPA"
          variant="outlined"
          placeholder="Enter your 1st semester SGPA (Ex. 85%)"
          name="sem1SGPA" 
          value={formData.sem1SGPA}
          error={!isNumeric(formData.sem1SGPA)}
          helperText={!isNumeric(formData.sem1SGPA) ? "Only numbers are allowed." : ""}
          style={{ width: '100%' }}
          margin="normal"
          onChange={(e) => setFormData({ ...formData, sem1SGPA: e.target.value })}
          />
  </Grid>
  
  <Grid item xs={6}>
      <TextField 
      id="sSGPA"
      label="2nd sem SGPA"
      variant="outlined"
      placeholder="Enter your 2nd semester SGPA (Ex. 85%)"
      name="sem2SGPA" 
      value={formData.sem2SGPA}
      error={!isNumeric(formData.sem2SGPA)}
      helperText={!isNumeric(formData.sem2SGPA) ? "Only numbers are allowed." : ""}
      style={{ width: '100%' }}
      margin="normal"
      onChange={(e) => setFormData({ ...formData, sem2SGPA: e.target.value })}
      />
  </Grid>
  </>
  )}
  
  {/* For demonstration, here is the setup for the 3rd semester, follow similar patterns for others */}
    <Grid item xs={6}>
      <TextField 
        id="tSGPA"
        label="3rd sem SGPA"
        variant="outlined"
        placeholder="Enter your 3rd semester SGPA(Ex.85%)"
        name="sem3SGPA" 
        value={formData.sem3SGPA}
        error={!isNumeric(formData.sem3SGPA)}
        helperText={!isNumeric(formData.sem3SGPA) ? "Only numbers are allowed." : ""}
        style={{ width: '100%' }}
        margin="normal"
        onChange={handleChange}
      />
    </Grid>
  
  {/* Continue for semesters 4, 5, and 6 */}
    <Grid item xs={6}>
      <TextField 
        id="tfoSGPA"
        label="4th sem SGPA"
        variant="outlined"
        placeholder="Enter your 4th semester SGPA(Ex.85%)"
        name="sem4SGPA" 
        value={formData.sem4SGPA}
        error={!isNumeric(formData.sem4SGPA)}
         helperText={!isNumeric(formData.sem4SGPA) ? "Only numbers are allowed." : ""}
        style={{ width: '100%' }}
        margin="normal"
        onChange={handleChange}
      />
     </Grid>
  
    <Grid item xs={6}>
      <TextField 
        id="fifthaSGPA"
        label="5th sem SGPA"
        variant="outlined"
        placeholder="Enter your 5th semester SGPA(Ex.85%)"
        name="sem5SGPA" 
        value={formData.sem5SGPA}
        error={!isNumeric(formData.sem5SGPA)}
         helperText={!isNumeric(formData.sem5SGPA) ? "Only numbers are allowed." : ""}
        style={{ width: '100%' }}
        margin="normal"
        onChange={handleChange}
      />
    </Grid>
  
  <Grid item xs={6}>
  <TextField 
    id="sixSGPA"
    label="6th sem SGPA"
    variant="outlined"
    placeholder="Enter your 6th semester SGPA(Ex.85%)"
    name="sem6SGPA" 
    value={formData.sem6SGPA}
    error={!isNumeric(formData.sem6SGPA)}
  helperText={!isNumeric(formData.sem6SGPA) ? "Only numbers are allowed." : ""}
    style={{ width: '100%' }}
    margin="normal"
    onChange={handleChange}
  />
  </Grid>
  
  <Grid item xs={6}>
    <TextField 
      id="sevenSGPA"
      label="7th sem SGPA"
      variant="outlined"
      placeholder="Enter your 7th semester SGPA(Ex.85%)"
      name="sem7SGPA" 
      value={formData.sem7SGPA}
      error={!isNumeric(formData.sem7SGPA)}
      helperText={!isNumeric(formData.sem7SGPA) ? "Only numbers are allowed." : ""}
      style={{ width: '100%' }}
      margin="normal"
      onChange={handleChange}
    />
  </Grid><br></br>
        <Grid item xs={6}>
              <TextField 
                id="marksheet"
                label="Marksheet"
                variant="outlined"
                name="marksheet" 
                placeholder="Enter Your drive link for marksheet"
                style={{ width: '100%' }}
                margin="normal"
                value={marksheet} 
                onChange={handleChange} 
              />
            </Grid>
  </Grid>
  );

  case 4:
    return(
      <Grid container spacing={2}>
      <Grid item xs={12}>
      <Typography variant="subtitle1">Are You Primarily intrested in persuing higher Studies or seeking a job ?</Typography>
      <RadioGroup aria-label="what" name="higherstud" value={formData.higherstud} onChange={handleChange}>
        <FormControlLabel value="Higher Studies" control={<Radio />} label="Higher Studies" />
        <FormControlLabel value="Job" control={<Radio />} label="Job" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </Grid>
  
  
  
    <Grid item xs={12}>
      <Typography variant="subtitle1"> Which Exams are you intrested for appearing for higher studies ?</Typography>
      <RadioGroup aria-label="exam" name="exam" value={formData.exam} onChange={handleChange}>
        <FormControlLabel value="CAT" control={<Radio />} label="CAT" />
        <FormControlLabel value="GATE" control={<Radio />} label="GATE" />
        <FormControlLabel value="GRE" control={<Radio />} label="GRE" />
        <FormControlLabel value="GMAT" control={<Radio />} label="GMAT" />
        <FormControlLabel value="Appearing for Placements" control={<Radio />} label="Appearing for Placements" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </Grid>
  
    <Grid item xs={6}>
    <TextField 
  id="scorexam"
  label="Exam Score"
  variant="outlined"
  name="score" 
  placeholder="Enter the Score in above selected Exam"
  style={{ width: '100%' }}
  margin="normal"
  value={formData.score} 
  onChange={(event) => {
  const { value } = event.target;
  
  // Validation for numeric input
  if (/^\d*\.?\d*$/.test(value)) {
  // Update form data state if input is numeric
  setFormData({
  ...formData,
  score: value
  });
  } else {
  // Display warning for non-numeric input
  console.log("Only numbers are allowed for Exam Score");
  }
  }} 
  />
  </Grid>
  
  
    <Grid item xs={6}>
            <TextField 
                id="percentileexam"
                label="Rank"
                variant="outlined"
                name="percentile" 
                placeholder="Enter your Rank score in selected Exam (Ex.8569)"
                style={{ width: '100%' }}
                margin="normal"
                value={formData.percentile} 
                onChange={handleChange} 
                
                />
            </Grid>
  
            <Grid item xs={12}>
            <Typography variant="subtitle1">Have you got the Placement ?</Typography>
            <RadioGroup aria-label="gopt" name="areuplaced" value={formData.areuplaced} onChange={handleChange}>
              <FormControlLabel value="YES" control={<Radio />} label="YES" />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </Grid>
  
          {formData.areuplaced === 'YES' && (
            <Grid item xs={6}>
              <TextField 
                id="lpa"
                label="CTC in number"
                variant="outlined"
                name="LPA" 
                placeholder="Enter your CTC/Package recieved in LPA (Ex. 12 or 12.5)"
                style={{ width: '100%' }}
                margin="normal"
                value={formData.LPA} 
                error={!isNumeric(formData.LPA)}
                 helperText={!isNumeric(formData.LPA) ? "Only numbers are allowed." : ""}
                onChange={handleChange} 
              />
            </Grid>
          )}
      </Grid>
    );
  
  
    case 5:
      return(
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField 
            id="published"
            label="Papers Published"
            variant="outlined"
            name="paperpublished" 
            placeholder="How many Reasearch papers have you published"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.paperpublished} 
            error={!isNumeric(formData.paperpublished)}
        helperText={!isNumeric(formData.paperpublished) ? "Only numbers are allowed." : ""} 
            onChange={handleChange} 
            
            />
        </Grid>
  
  
        <Grid item xs={6}>
        <TextField 
            id="cost"
            label="Published Cost"
            variant="outlined"
            name="papercost" 
            placeholder="Enter the Cost of Publishing the research Paper(Ex:20000)"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.papercost}
            error={!isNumeric(formData.papercost)}
        helperText={!isNumeric(formData.papercost) ? "Only numbers are allowed." : ""} 
            onChange={handleChange} 
            
            />
        </Grid>
  
        <Grid item xs={6}>
        <TextField 
            id="timeline"
            label="Published Timeline"
            variant="outlined"
            name="timelinepaper" 
            placeholder="Timeline of the Paper Publication in Months (Ex: 5)"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.timelinepaper}
            error={!isNumeric(formData.timelinepaper)}
        helperText={!isNumeric(formData.timelinepaper) ? "Only numbers are allowed." : ""} 
            onChange={handleChange} 
            
            />
        </Grid>
  
        <Grid item xs={6}>
        <TextField 
            id="patents"
            label="Patents Published"
            variant="outlined"
            name="patentspublished" 
            placeholder="How many Patents have you published"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.patentspublished} 
            error={!isNumeric(formData.patentspublished)}
        helperText={!isNumeric(formData.patentspublished) ? "Only numbers are allowed." : ""} 
            onChange={handleChange} 
            
            />
        </Grid>
  
        <Grid item xs={6}>
        <TextField 
            id="publishedcost"
            label="Patents Published cost"
            variant="outlined"
            name="patentspublishedcost" 
            placeholder="Enter the Cost of Publishing the Patent(Ex:20000)"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.patentspublishedcost} 
            error={!isNumeric(formData.patentspublishedcost)}
             helperText={!isNumeric(formData.patentspublishedcost) ? "Only numbers are allowed." : ""}
            onChange={handleChange} 
            
            />
        </Grid>
  
        <Grid item xs={6}>
        <TextField 
            id="ptime"
            label="Patents Published Timeline"
            variant="outlined"
            name="patentptime" 
            placeholder="Timeline of the Patent Publication in Months (Ex: 2)"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.patentptime}
            error={!isNumeric(formData.patentptime)}
        helperText={!isNumeric(formData.patentptime) ? "Only numbers are allowed." : ""} 
            onChange={handleChange} 
            
            />
        </Grid>
  
    <Grid item xs={12}>
      <Typography variant="subtitle1">Where were the research papers published ?</Typography>
    </Grid>
    
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.scopous} onChange={handleChange} name="scopous" />}
          label="Scopus Indexed journals"
        />
      </Grid>
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.ugc} onChange={handleChange} name="ugc" />}
          label="UGC carelist"
        />
      </Grid>
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.ieee} onChange={handleChange} name="ieee" />}
          label="IEEE xplore"
        />
      </Grid>
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.web} onChange={handleChange} name="web" />}
          label="Web of Science SCI"
        />
      </Grid>
  
     
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.spring} onChange={handleChange} name="spring" />}
          label="Springer"
        />
      </Grid>
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.extra} onChange={handleChange} name="extra" />}
          label="Inspec"
        />
      </Grid>
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.db} onChange={handleChange} name="db" />}
          label="DBLP"
        />
      </Grid>
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.none} onChange={handleChange} name="none" />}
          label="None of these"
        />
      </Grid>
  
      <Grid item xs={6}>
        <FormControlLabel
          control={<Checkbox checked={formData.otheer} onChange={handleChange} name="otheer" />}
          label="Other"
        />
      </Grid>
  
      
  
      <Grid item xs={12}>
            <Typography variant="subtitle1">Have you applied for the Patents through (ipindia.gov.in) ?</Typography>
            <RadioGroup aria-label="ipinida" name="ipin" value={formData.ipin} onChange={handleChange}>
              <FormControlLabel value="YES" control={<Radio />} label="YES" />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
              <FormControlLabel value="MAY BE" control={<Radio />} label="MAY BE" />
            </RadioGroup>
          </Grid>
      </Grid>
    );
  
    case 6:
      return (
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField 
            id="hacka"
            label="Total Hackathons Done"
            variant="outlined"
            name="hackathons" 
            placeholder="How many hackathons have you participated in ? (Ex .5 or 2)"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.hackathons} 
            onChange={handleChange} 
            
            />
        </Grid>
  
        <Grid item xs={12}>
            <Typography variant="subtitle1">Which type of hackathon did you attended? (SIH counts as National)</Typography>
            <RadioGroup aria-label="ipinida" name="ipin1" value={formData.ipin1} onChange={handleChange}>
              <FormControlLabel value="National" control={<Radio />} label="National" />
              <FormControlLabel value="Inter-National" control={<Radio />} label="Inter-National" />
            
            </RadioGroup>
          </Grid>
  
          <Grid item xs={12}>
            <Typography variant="subtitle1">Which round did you reach?</Typography>
            <RadioGroup aria-label="runds" name="round" value={formData.round} onChange={handleChange}>
              <FormControlLabel value="1st Round" control={<Radio />} label="1st Round" />
              <FormControlLabel value="2nd Round" control={<Radio />} label="2nd Round" />
              <FormControlLabel value="3rd Round" control={<Radio />} label="3rd Round" />
              <FormControlLabel value="None of the above" control={<Radio />} label="None of the above" />
            </RadioGroup>
          </Grid>
  
          <Grid item xs={12}>
  <Typography variant="subtitle1">
  Did you physically travel out of state for Hackathon?
  </Typography>
  <RadioGroup
  aria-label="runds"
  name="travelOutState"
  value={formData.travelOutState}
  onChange={handleChange}
  >
  <FormControlLabel value="YES" control={<Radio />} label="YES" />
  <FormControlLabel value="NO" control={<Radio />} label="NO" />
  </RadioGroup>
  </Grid>
  
  
  {formData.travelOutState === 'YES' && (
  <Grid item xs={12}>
  <TextField
    id="ptime"
    label="Specify the Place"
    variant="outlined"
    name="placespecify"
    placeholder="If you have travelled Physically the Specify the Place"
    style={{ width: '100%' }}
    margin="normal"
    value={formData.placespecify}
    onChange={handleChange}
  />
  </Grid>
  )}
        </Grid>
      );
      

      case 7:
        return(
          <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography variant="subtitle1">How many clubs have you been a part of?</Typography>
          <RadioGroup aria-label="clbs" name="clubs" value={formData.clubs} onChange={handleChange}>
            <FormControlLabel value="PASC" control={<Radio />} label="PASC" />
            <FormControlLabel value="MUN" control={<Radio />} label="MUN" />
            <FormControlLabel value="IEEE" control={<Radio />} label="IEEE" />
            <FormControlLabel value="CSI" control={<Radio />} label="CSI" />
            <FormControlLabel value="EDC" control={<Radio />} label="EDC" />
            <FormControlLabel value="TEDx" control={<Radio />} label="TEDx" />
            <FormControlLabel value="Debsoc" control={<Radio />} label="Debsoc" />
            <FormControlLabel value="Pictoreal" control={<Radio />} label="Pictoreal" />
            <FormControlLabel value="PISB" control={<Radio />} label="PISB" />
            <FormControlLabel value="Arts Circle" control={<Radio />} label="Arts Circle" />
            <FormControlLabel value="NSS" control={<Radio />} label="NSS" />
            <FormControlLabel value="PCSB" control={<Radio />} label="PCSB" />
            <FormControlLabel value="None of the above" control={<Radio />} label="None of the above" />
          </RadioGroup>
        </Grid>
  
  
  
        <Grid item xs={12}>
          <Typography variant="subtitle1">What was your role in the club?</Typography>
          <RadioGroup aria-label="clbs" name="bscr" value={formData.bscr} onChange={handleChange}>
            <FormControlLabel value="Main Head" control={<Radio />} label="Main Head" />
            <FormControlLabel value="Team Head" control={<Radio />} label="Team Head" />
            <FormControlLabel value="Volunteer" control={<Radio />} label="Volunteer" />
            <FormControlLabel value="None of these" control={<Radio />} label="None of these" />
          </RadioGroup>
        </Grid>
        
        <Grid item xs={12}>
        <TextField 
            id="position"
            label="Best position of Clubs"
            variant="outlined"
            name="bestposi" 
            placeholder="Mention the best position for a Club Member you are (Ex: Head)"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.bestposi} 
            onChange={handleChange} 
            
            />
        </Grid>
  
          </Grid>
        );
  
  
      case 8:
        return (
          <Grid container spacing={2}>
  
          <Grid item xs={12}>
          <Typography variant="subtitle1">Have you participated any art/sport competition during your time at PICT?</Typography>
          <RadioGroup aria-label="art" name="arts" value={formData.arts} onChange={handleChange}>
            <FormControlLabel value="YES" control={<Radio />} label="YES" />
            <FormControlLabel value="NO" control={<Radio />} label="NO" />
            
          </RadioGroup>
        </Grid>
  
  
        <Grid item xs={12}>
          <Typography variant="subtitle1">Have you participated in any of these sports categories ?</Typography>
          <RadioGroup aria-label="have" name="where" value={formData.where} onChange={handleChange}>
            <FormControlLabel value="Inter-College" control={<Radio />} label="Inter-College" />
            <FormControlLabel value="District Level" control={<Radio />} label="District Level" />
            <FormControlLabel value="National Level" control={<Radio />} label="National Level" />
            <FormControlLabel value="International Level" control={<Radio />} label="International Level" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
  
        <Grid item xs={12}>
          <Typography variant="subtitle1">Select Your Rank</Typography>
          <RadioGroup aria-label="clbs" name="rank" value={formData.rank} onChange={handleChange}>
            <FormControlLabel value="1st Rank" control={<Radio />} label="1st Rank" />
            <FormControlLabel value="2nd Rank" control={<Radio />} label="2nd Rank" />
            <FormControlLabel value="3rd Rank" control={<Radio />} label="3rd Rank" />
            <FormControlLabel value="Participated" control={<Radio />} label="Participated" />
            <FormControlLabel value="Not-Participated" control={<Radio />} label="Not-Participated" />
          </RadioGroup>
        </Grid>
        

        <Grid item xs={12}>
      `      <TextField
              id="kkr"
              label="Sports  Certification"
              variant="outlined"
              name="sportscertificate"
              placeholder="Enter your drive link for Sports Certifications"
              style={{ width: '100%' }}
              margin="normal"
              value={sportscertificate}
              onChange={handleChange}
            />
            </Grid>`

          </Grid>
        );
  
        case 9:
          return (
            <Grid container spacing={2}>
  
  <Grid item xs={12}>
  <Typography variant="subtitle1">Have you done an internship?</Typography>
  <RadioGroup aria-label="intern" name="who" value={formData.who} onChange={handleChange}>
  <FormControlLabel value="YES" control={<Radio />} label="YES" />
  <FormControlLabel value="NO" control={<Radio />} label="NO" />
  </RadioGroup>
  </Grid>
  
  {/* Conditionally render the next question based on the user's response */}
  {formData.who === 'YES' && (
  <Grid item xs={12}>
  <Typography variant="subtitle1">Is the internship paid or unpaid?</Typography>
  <RadioGroup aria-label="paid" name="upaid" value={formData.upaid} onChange={handleChange}>
    <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
    <FormControlLabel value="Un-Paid" control={<Radio />} label="Un-Paid" />
  </RadioGroup>
  </Grid>
  )}
  
          <Grid item xs={12}>
            <Typography variant="subtitle1">Specify the Best internship  & stipend offered per month.</Typography>
            <RadioGroup aria-label="internship" name="pue" value={formData.pue} onChange={handleChange}>
            <FormControlLabel value="50,000+" control={<Radio />} label="50,000+" />
            <FormControlLabel value="20k to 50k" control={<Radio />} label="20k to 50k" />
            <FormControlLabel value="5k to 20k" control={<Radio />} label="5k to 20k" />
            <FormControlLabel value="PICT(In-House)" control={<Radio />} label="PICT(In-House)" />
            <FormControlLabel value="None of these" control={<Radio />} label="None of these" />
            </RadioGroup>
          </Grid>


          <Grid item xs={12}>
      `      <TextField
              id="kk"
              label="Internship  Certification"
              variant="outlined"
              name="internshipcertificate"
              placeholder="Enter your drive link for Internship Certifications"
              style={{ width: '100%' }}
              margin="normal"
              value={internshipcertificate}
              onChange={handleChange}
            />
            </Grid>

            </Grid>
          );

          case 10:
            return (
              <Grid container spacing={2}>
    
    <Grid item xs={12}>
    <Typography variant="subtitle1">Have you done any Certified Courses?</Typography>
    <RadioGroup aria-label="yes" name="no" value={formData.no} onChange={handleChange}>
    <FormControlLabel value="YES" control={<Radio />} label="YES" />
    <FormControlLabel value="NO" control={<Radio />} label="NO" />
    </RadioGroup>
    </Grid>
    
    {/* Conditionally render the text fields based on the user's response */}
    {formData.no === 'YES' && (
    <>
    <Grid item xs={6}>
      <TextField 
        id="certify"
        label="Total Certifications Completed"
        variant="outlined"
        name="ccertify" 
        placeholder="How many Certificate Courses have you Completed (Ex.2)"
        style={{ width: '100%' }}
        margin="normal"
        value={formData.ccertify} 
        onChange={handleChange} 
      />
    </Grid>
    
    <Grid item xs={6}>
      <TextField 
        id="plat"
        label="Certification Completed Platform"
        variant="outlined"
        name="platformm" 
        placeholder="Specify the Platform (Ex.NPTEL , Udemy)"
        style={{ width: '100%' }}
        margin="normal"
        value={formData.platformm} 
        onChange={handleChange} 
      />
    </Grid>
    </>
    )}

          <Grid item xs={12}>
      `      <TextField
              id="kk"
              label="Certification Link"
              variant="outlined"
              name="certificationcertificate"
              placeholder="Enter your drive link for  Certifications"
              style={{ width: '100%' }}
              margin="normal"
              value={certificationcertificate}
              onChange={handleChange}
            />
            </Grid>

              </Grid>
            );
    
     case 11:
              return (
                <Grid container spacing={2}>
    
                <Grid item xs={12}>
                <Typography variant="subtitle1">Have you attempted AMCAT</Typography>
                <RadioGroup aria-label="am" name="amcat" value={formData.amcat} onChange={handleChange}>
                  <FormControlLabel value="YES" control={<Radio />} label="YES" />
                  <FormControlLabel value="NO" control={<Radio />} label="NO" />
                  
                </RadioGroup>
              </Grid>
    
              <Grid item xs={12}>
              <Typography variant="subtitle1">How many AMCAT exam have you attempted?</Typography>
            </Grid>
            
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox checked={formData.firstexam} onChange={handleChange} name="firstexam" />}
                  label="2nd Year 1st Semester AMCAT"
                />
              </Grid>
    
              <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={formData.examsec} onChange={handleChange} name="examsec" />}
                label="2nd Year 2nd Semester AMCAT"
              />
            </Grid>
            <Grid item xs={6}>
            <FormControlLabel
              control={<Checkbox checked={formData.examthi} onChange={handleChange} name="examthi" />}
              label="3rd Year 1st Semester AMCAT"
            />
          </Grid>
          <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox checked={formData.examth} onChange={handleChange} name="examth" />}
            label="3rd Year 2nd Semester AMCAT"
          />
        </Grid>
    
        <Grid item xs={6}>
        <TextField 
            id="plat"
            label="Best of 2nd year Score"
            variant="outlined"
            name="pictt" 
            placeholder="Enter the best of your second year AMCAT score"
            style={{ width: '100%' }}
            margin="normal"
            value={formData.pictt} 
            onChange={handleChange} 
            
            />
        </Grid>
    
        <Grid item xs={6}>
              <TextField 
                  id="coep"
                  label="Best of 3rd year Score"
                  variant="outlined"
                  name="coepp" 
                  placeholder="Enter the best of your third year AMCAT score"
                  style={{ width: '100%' }}
                  margin="normal"
                  value={formData.coepp} 
                  onChange={handleChange} 
                  
                  />
              </Grid>
              
    <Grid item xs={12}>
      `      <TextField
              id="kk"
              label="AMCAT Result Certification"
              variant="outlined"
              name="amcatcertificate"
              placeholder="Enter your drive link for AMCAT Result Certifications"
              style={{ width: '100%' }}
              margin="normal"
              value={amcatcertificate}
              onChange={handleChange}
            />
            </Grid>
                </Grid>
              );
  
  
  
        
      default:
        return 'THANKU';
    }
  };



  
   
  

  
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="800px"
        minHeight="100vh"
        sx={{
          padding: '20px',
          width: '100%',
        }}
      >
        <Grid container spacing={2} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #ccc', overflowY: 'auto' }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #ccc', overflowY: 'auto' }}>
              <Box>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {getStepContent(activeStep)}
                    </Grid>
                    <Grid item xs={12}>
                      {activeStep === steps.length - 1 ? (
                        <div>
                          <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Finish
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Button variant="contained" color="primary" disabled={activeStep === 0} onClick={handleBack}>
                            Back
                          </Button>
                          <span style={{ margin: '0 20px' }} />
                          <Button variant="contained" color="primary" onClick={handleNext}>
                            Continue
                          </Button>
                        </div>
                      )}
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Submission message with animation */}
      {showSubmissionMessage && (
        <div className="submission-message">
          <Typography variant="body1">Form submitted successfully!</Typography>
        </div>
      )}
    </Container>
  );
}
export default App;  