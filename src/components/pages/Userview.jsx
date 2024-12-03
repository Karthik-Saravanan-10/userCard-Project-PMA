import { Button } from "@mui/material";
import "./userview.css";

function Userview({ element }) {
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
            <Button variant="contained" sx={{width:'100px'}}>Edit</Button>
            <Button variant="outlined">Remove</Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Userview;
