import React, { useState } from "react";
import AppointmentBannar from "./AppointmentBannar";
import AvailableAppoinment from "./AvailableAppoinment";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppointmentBannar date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
    </div>
  );
};

export default Appoinment;
