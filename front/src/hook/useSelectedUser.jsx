import { useState } from "react";

const useSelectedUser = () => {
  const [selectedUser, setSelectedUser] = useState({id:"", login:"", name:"", firstname:"", status:""});

  return [selectedUser, setSelectedUser];
};

export default useSelectedUser;