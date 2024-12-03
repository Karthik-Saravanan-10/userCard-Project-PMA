import Userview from "../pages/Userview";
import dataContainer from "../helperFiles/data";
import './header.css'

function Userlist() {
  return (
    <>
      <h1 className="header-h1">User List</h1>
      <section className="card-section">{dataContainer.map((elem)=> <Userview element={elem}/>)}</section>
    </>
  );
}

export default Userlist;
