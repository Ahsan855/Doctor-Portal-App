import React, { useState } from "react";
import AppoinmentBannar from "./AppoinmentBannar";
import AvailableAppoinment from "./AvailableAppoinment";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppoinmentBannar date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
    </div>
  );
};

export default Appoinment;
