import { createContext, useState } from "react";

const DataCtx = createContext({
  data: [],
  addHandler: (secId) => {},
});

export function DataContainer({ children }) {
  const [List, setList] = useState([]);

  function addHandler(secId) {
    setList((prevList) => [...prevList, secId]);
  }

  const contextData = {
    data: List,
    addHandler: addHandler,
  };

  return (
    <>
      <DataCtx.Provider value={contextData}>{children}</DataCtx.Provider>
    </>
  );
}

export default DataCtx;