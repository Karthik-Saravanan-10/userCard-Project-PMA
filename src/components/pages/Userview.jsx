import { Button } from "@mui/material";
import "./userview.css";
import dataContainer from "../helperFiles/data";
import { useEffect, useState } from "react";
import Alert from "./Alert";

function Userview({ element, setremove }) {
  let [removeClick, setremoveClick] = useState(false);

  useEffect(() => {}, [removeClick]);

  function removeHandler() {
    setremoveClick(true);
    console.log(dataContainer);
  }

  function redirectHandler(data) {
    console.log(data);
    if (data) {
      let index = dataContainer.indexOf(element);
      dataContainer.splice(index, 1);
      setremove(true);
      console.log(dataContainer);
    }
    console.log(dataContainer);
  }
  return (
    <>
      <main className="card-main">
        <div className="card-container" key={element.id}>
          <h2>{element.name}</h2>
          <h3>{element.job}</h3>
          <h4>{element.email}</h4>
          <p>{element.gender}</p>
          <p>{element.dob}</p>
          <p>{element.age}</p>
          <p>Experience</p>
          <p>{element.detail}</p>
          <div className="userview-btn">
            <Button variant="contained" sx={{ width: "100px" }}>
              Edit
            </Button>
            <Button variant="outlined" onClick={removeHandler}>
              Remove
            </Button>
          </div>
        </div>
        <div className="Alert-div">
          {removeClick ? (
            <Alert
              setremoveClick={setremoveClick}
              redirectHandler={redirectHandler}
            />
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

export default Userview;
