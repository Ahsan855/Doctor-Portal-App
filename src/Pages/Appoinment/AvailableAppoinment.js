import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from 'react-query'
import Loading from "../Shared/Loading";



const AvailableAppoinment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment , setTreatment] =useState(null)
  const formattedDate = format(date, 'PP')
  const {data: services , isLoading , refetch} = useQuery(['available', formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )

   if(isLoading){
     return <Loading/>
   }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formatedDate]);
  return (
    <div>
      <h2 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
              services?.map(service => <Service service={service} key={service._id} setTreatment={setTreatment}></Service>)
          }
      </div>
      {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment}  date={date} refetch={refetch}></BookingModal>}
    </div>
  );
};

export default AvailableAppoinment;
