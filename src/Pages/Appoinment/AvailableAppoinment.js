import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const AvailableAppoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl text-secondary text-center">
        Available Appointments on {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
              services.map(service => <Service service={service} key={service._id}></Service>)
          }
      </div>
    </div>
  );
};

export default AvailableAppoinment;
