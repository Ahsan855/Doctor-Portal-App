import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooing = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Congratulations Booking For : {name}
          </h3>
          <form
            onSubmit={handleBooing}
            className="grid grid-cols-1 gap-4 justify-center mt-4"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submite"
              value="Submite"
              placeholder="Type here"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
