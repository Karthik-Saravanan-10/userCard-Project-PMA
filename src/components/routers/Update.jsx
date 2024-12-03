import { useContext, useEffect } from "react";
import DataCtx from "../store/dataContainer";
import Formdata from "../pages/Formdata";

function Update() {
  let updateCtx = useContext(DataCtx);
  let updateData = updateCtx.data;
  useEffect(()=>{},[updateData])
  console.log(updateData);
  return (
    <>
      {updateData.map((elem) => (
        <Formdata
          name={elem.name}
          job={elem.job}
          age={elem.age}
          dob={elem.dob}
          gender={elem.gender}
          email={elem.email}
          detail={elem.detail}
          experience={elem.experience}
        />
      ))}
    </>
  );
}

export default Update;
