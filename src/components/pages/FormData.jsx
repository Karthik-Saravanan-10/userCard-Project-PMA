import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import "./formpage.css";
import { useEffect, useId, useState } from "react";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import {
  checkAge,
  checkDetail,
  checkDob,
  checkEmail,
  checkName,
} from "../helperFiles/validation.js";
import dataContainer from '../helperFiles/data.js'
import { useNavigate } from "react-router-dom";

function Formdata() {
  let userId = useId();
  const navigate=useNavigate();

  let [getName, setName] = useState("");
  let [getNamevalid, setNameValid] = useState(false);

  let [getJob, setJob] = useState("");
  let [getJobvalid, setJobValid] = useState(false);

  let [getEmail, setEmail] = useState("");
  let [getEmailvalid, setEmailValid] = useState(false);

  let [getDob, setDob] = useState("");
  let [getDobvalid, setDobValid] = useState(false);

  let [getDetail, setDetail] = useState("");
  let [getDetailvalid, setDetailValid] = useState(false);

  let [getAge, setAge] = useState("");
  let [getAgevalid, setAgeValid] = useState(false);

  let [getgender, setgender] = useState("");

  let [formChange, setForm] = useState(false);

  useEffect(() => {
    if (formChange) {
      validation();
    }
  });

  async function submitHandler(e) {
    e.preventDefault();
    let age=checkAge(getDob);
    //console.log("out",validation())
    if (!validation()) {
      console.log("err");
      setForm(true);
      console.log(validation());
    } else {
      console.log("sucess");
      let actionData = await {
        id: userId,
        name: getName,
        job: getJob,
        email: getEmail,
        dob: getDob,
        age: age,
        gender: getgender,
        detail: getDetail,
      };

      await dataContainer.push(actionData);
      navigate('/')
      console.log(actionData);
      
    }
  }

  function validation() {
    //let array = [getName, getJob, getEmail, getDob, getAge, getDetail];
    let array = [
      checkName(getName, setNameValid),
      checkName(getJob, setJobValid),
      checkEmail(getEmail, setEmailValid),
      checkDob(getDob, setDobValid),
      checkDetail(getDetail, setDetailValid),
    ];
    let valid;
    for (let i of array) {
      if (!i) {
        valid = false;
        break;
      } else {
        setAge(checkAge(getDob));
        valid = true;
      }
    }
    return valid;
  }

  return (
    <main className="container">
      <form
        onSubmit={submitHandler}
        onClick={(e) => console.log(e.target.value)}
      >
        <section>
          <div className="form-input">
            <Box>
              <TextField
                id="name"
                name="nameData"
                label="Name"
                variant="outlined"
                value={getName}
                onChange={(e) => setName(e.target.value)}
                helperText={
                  getNamevalid ? "Enter Valid Name/Only Alphabates" : false
                }
                error={getNamevalid}
              />
            </Box>
            <Box>
              <TextField
                id="dob"
                name="dobData"
                label="Date of Birth"
                variant="outlined"
                type="date"
                InputLabelProps={{ shrink: true, required: true }}
                sx={{ width: "223px" }}
                value={getDob}
                onChange={(e) => setDob(e.target.value)}
                helperText={getDobvalid ? "Enter Date of Birth" : false}
                error={getDobvalid}
              />
            </Box>
            <Box sx={{ ml: "10px", mr: "30px" }}>
              <FormLabel id="radio-buttons">Gender</FormLabel>
              <RadioGroup row name="row-radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  onClick={(e) => setgender("Female")}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onClick={(e) => setgender("Male")}
                />
              </RadioGroup>
              {formChange && !getgender ? (
                <p className="alert-p">Please click Gender</p>
              ) : (
                ""
              )}
            </Box>
          </div>

          <div className="form-input">
            <Box>
              <TextField
                id="role"
                name="roleData"
                label="Profession"
                variant="outlined"
                onChange={(e) => setJob(e.target.value)}
                value={getJob}
                helperText={
                  getJobvalid ? "Enter Valid Pattern/Only Alphabets" : false
                }
                error={getJobvalid}
              />
            </Box>
            <Box>
              <TextField
                id="age"
                name="ageData"
                label="Age"
                variant="outlined"
                value={getDob ? checkAge(getDob) : ""}
                helperText={getAgevalid ? "please enter Age" : false}
                error={getAgevalid}
              />
            </Box>
            <Box>
              <FormControl sx={{ width: "223px" }}>
                <InputLabel id="experience">Experience</InputLabel>
                <Select
                  labelId="experience"
                  id="select"
                  label="experience"
                  defaultValue={""}
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={30}>4+</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="form-input">
            <Box>
              <TextField
                id="email"
                name="emailData"
                label="Email"
                variant="outlined"
                type="email"
                sx={{ width: "223px" }}
                onChange={(e) => setEmail(e.target.value)}
                value={getEmail}
                helperText={getEmailvalid ? "Enter Valid Email" : false}
                error={getEmailvalid}
              />
            </Box>
            <Box>
              <TextField
                id="textarea"
                name="textarea"
                label="Enter Details"
                multiline
                rows={5}
                sx={{ width: "225px" }}
                onChange={(e) => setDetail(e.target.value)}
                value={getDetail}
                helperText={
                  getDetailvalid
                    ? "should be more than 10 words and less than 200 words"
                    : false
                }
                error={getDetailvalid}
              />
            </Box>
          </div>
        </section>

        <div className="form-input action-div">
          <Button
            variant="contained"
            type="submit"
            startIcon={<TurnedInNotRoundedIcon />}
            sx={{ padding: "10px 20px" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
}

export default Formdata;
