import React, { useState, useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import useSelectedUser from "../../hook/useSelectedUser";

import ENV from "../../../ENV.js";
import Select from "react-select";

export default function Selector({selectedUser, setSelectedUser, optionsList}) {
  const BACK_HOST = ENV.BACK_HOST
  const FRONT_HOST = ENV.FRONT_HOST
  const [token, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});

  const [selected, setSelected] = useState({
    label: "",
    value: "",
  });

  const options = optionsList.map((option) => {
    return {
      value: option.id,
      label: `${option.firstname} ${option.name}`,
    };
  });

  const handleChange = (selectedOption) => {
    console.log(selectedOption)
    setSelected({... selectedOption});
    console.log(optionsList)
  };

  useEffect(() => {
    console.log("selected",selected)
    setSelectedUser(selected.value);
  }, [selected.value]);

  useEffect(() => {
    console.log("selected User",selectedUser)
  }, [selectedUser.id]);

  useEffect(() => {
    setSelected({
      label: `${user['firstname']} ${user['name']}`,
      value: user['id'],
    });
  }, [user["id"]]);



  return (
    <section className="bloc-card">
     <Select
            options={options}
            placeholder={selected.label}
            onChange={handleChange}
            value={selected.value}
          />

        <p>{selectedUser.id} {selectedUser.name}</p>
    </section>
  );
}
