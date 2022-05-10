import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from '../../assets/images/appointment.png'
import MainButton from "../Shared/MainButton";
const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="flex justify-center items-center">
      <div className="fexl-1 hidden lg:block">
        <img className="mt-[-110px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-blod">Appointment</h3>
        <h2 className="text-3xl text-white pt-2">Make an Appointment Today</h2>
        <p className="text-white py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid
          dolorum similique. Iusto id, quod repellat neque dignissimos optio
          veniam eveniet assumenda eius sed est eligendi ab, numquam tempore,
          odit error consectetur placeat velit voluptatum labore doloribus?
          Voluptatem voluptatibus minima dolorem. Nisi sapiente dolorum
          reprehenderit ipsam, doloremque ex dicta optio!
        </p>
        <MainButton>Get Started</MainButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
