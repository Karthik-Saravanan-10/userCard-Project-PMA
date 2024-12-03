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
import "./formpage.css";
import { useContext, useEffect, useId, useState } from "react";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import {
  checkAge,
  checkDetail,
  checkDob,
  checkEmail,
  checkName,
} from "../helperFiles/validation.js";
import dataContainer from "../helperFiles/data.js";
import { useNavigate } from "react-router-dom";
import DataCtx from "../store/dataContainer.jsx";
import Alert from './Alert.jsx'

function Formdata(props) {
  let userId = useId();
  const navigate = useNavigate();
  console.log(props);
  let dataArrCtx = useContext(DataCtx);

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

  let [selectBox, setSelect] = useState("");

  let [formChange, setForm] = useState(false);

  useEffect(() => {
    if (formChange) {
      console.log(formChange);
      validation();
    }
  });

  async function submitHandler(e) {
    e.preventDefault();
    let age = checkAge(getDob);
    //console.log("out",selectBox);
    if (!validation()) {
      console.log("err");
      setForm(true);
      console.log(validation());
    } else {
      console.log("sucess", dataArrCtx);
      let age = checkAge(getDob || props.dob);
      dataArrCtx.data.splice(0, 2);
      let actionData = await {
        id: userId,
        name: getName || props.name,
        job: getJob || props.job,
        email: getEmail || props.email,
        dob: getDob || props.dob,
        age: age,
        gender: getgender || props.gender,
        experience: selectBox || props.experience,
        detail: getDetail || props.detail,
      };

      await dataContainer.push(actionData);
      navigate("/");
      console.log(actionData);
    }
  }

  function validation() {
    //let array = [getName, getJob, getEmail, getDob, getAge, getDetail];
    let array = [
      checkName(getName || props.name, setNameValid),
      checkName(getJob || props.job, setJobValid),
      checkEmail(getEmail || props.email, setEmailValid),
      checkDetail(getDetail || props.detail, setDetailValid),
      checkDob(getDob || props.dob, setDobValid),
      getgender || props.gender,
    ];
    let valid;
    for (let i of array) {
      if (!i) {
        valid = false;
        break;
      } else {
        valid = true;
      }
    }
    return valid;
  }

  return (
    <>
      <h1 className="userlist-h1">Add Users</h1>
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
                  defaultValue={getName || props.name}
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
                  value={getDob || props.dob}
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
                    checked={"Female" === (getgender || props.gender)}
                    onChange={(e) => setgender("Female")}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    checked={"Male" === (getgender || props.gender)}
                    label="Male"
                    onChange={(e) => setgender("Male")}
                  />
                </RadioGroup>
                {formChange && !(getgender || props.gender) ? (
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
                  value={getJob || props.job}
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
                  label={!(getDob || props.age) ? "Age" : ""}
                  variant="outlined"
                  value={getDob ? checkAge(getDob) : props.age}
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
                    value={selectBox}
                    onChange={(e) => setSelect(e.target.value)}
                    defaultValue={!selectBox ? props.experience : ""}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={"Above 4"}>4+</MenuItem>
                  </Select>
                </FormControl>
                {formChange && !(selectBox || props.experience) ? (
                  <p className="alert-p">Please click Gender</p>
                ) : (
                  ""
                )}
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
                  value={getEmail || props.email}
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
                  value={getDetail || props.detail}
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
              {props.name ? "Update" : "Submit"}
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Formdata;
