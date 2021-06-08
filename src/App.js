import './App.css';
import TextField from '@material-ui/core/TextField';
import { Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useState } from 'react';
import validator from 'validator';

function App() {

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [buttonColor, setButtonColor] = useState(false)


  const handleChangeEmail = (e) =>{
    setEmail(e.target.value)
    
    if(validator.isEmail(e.target.value))
    {
      setEmail(e.target.value)
      setEmailError(false)
    }
    else{
      setEmailError(true)
    }
  }
  

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    
    if(event.target.value.length>8)
    {
      setPasswordError(false)
      setButtonColor(true)
    }
    else{
      setPasswordError(true)
      setButtonColor(false)
    }
  };
  return (
    <div className="App">
      <div className="signup__left">
        <div className="signup__box">
          <h1>Let's set up your account</h1>
          <div className="signin_linkBox">
            <h3>Already have a account?</h3>
            <a href="">Sign In</a>
          </div>
          <form className="signup__form">
            <TextField className="form_field" id="outlined-basic" label="Your Name" type="text" variant="outlined" size="small" autoComplete="true" />
            <TextField error={emailError} helperText={emailError && "Please enter a valid email address"} type="email" className="form_field" id="outlined-basic" value={email} onChange={handleChangeEmail} label="Email Address" variant="outlined" size="small" />
            <FormControl className="form_field" variant="outlined" size="small" >
              <InputLabel id="demo-simple-select-outlined-label">I would describe my user type as</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="I would describe my user type as"
              >
                <MenuItem value="None">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Developer" >Developer</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
              </Select>
            </FormControl>
            <FormControl error={passwordError} id="helper-text" className="form_field" size="small" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handlePasswordChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {values.showPassword ? <Visibility style={{width:"15px"}} /> : <VisibilityOff style={{width:"15px"}} />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
                
              />
              <FormHelperText id="helper-text">{passwordError ? "Minimum 8 Character":"Minimum 8 Character"}</FormHelperText>
            </FormControl>

            <button className={`form_fieldButton ${buttonColor && "ready_button"}`}>Next</button>

            <p className="form_field_p">By clicking "Next" button, you agree to creating a free account, and to <a className="form_field_a" href="">Terms of service</a> and <a className="form_field_a" href="">Privacy Policy</a>.</p>



          </form>

        </div>
      </div>
      <div className="signup__right">
        <h1>Dummy Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit, temporibus perspiciatis inventore et voluptates ducimus mollitia harum fuga assumenda tempora aspernatur vitae recusandae quaerat nihil minima laboriosam facilis accusamus.</p>
      </div>
    </div>
  );
}

export default App;
