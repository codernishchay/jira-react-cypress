import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const appData = AppData();
  return (
    <DataContext.Provider value={appData}>{children}</DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

const AppData = () => {
  const [isCreating, setisCreating] = useState(false);
  const [isCreatingIssue, setisCreatingIssue] = useState(false);
  const [project, setproject] = useState(undefined);
  const [issuelist, setissuelist] = useState([]);
  const [searchlist, setsearchlist] = useState();
  const appendIssuelist = (data) => setissuelist((pre) => [...pre, data]);
  return {
    appendIssuelist,
    issuelist,
    searchlist,
    setsearchlist,
    project,
    setproject,
    isCreating,
    setisCreating,
    isCreatingIssue,
    setisCreatingIssue,
    setissuelist,
  };
};

export default AppData;
