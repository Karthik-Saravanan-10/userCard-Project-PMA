import Userview from "../pages/Userview";
import dataContainer from "../helperFiles/data";
import "./header.css";
import { useEffect, useState } from "react";

function Userlist() {
  let [remove, setremove] = useState(false);

  useEffect(() => {
    setremove(false);
  }, [remove]);

  let notify;

  if (!dataContainer.length) {
    notify = (
      <>
        <div className="notify">
          <h2>None Users</h2>
          <p>Not Yet Added</p>
        </div>
      </>
    );
  } else {
    notify = (
      <section className="card-section">
        {dataContainer.map((elem) => (
          <Userview element={elem} setremove={setremove} />
        ))}
      </section>
    );
  }
  return (
    <>
      <h1 className="header-h1">User List</h1>
      {notify}
    </>
  );
}

export default Userlist;
