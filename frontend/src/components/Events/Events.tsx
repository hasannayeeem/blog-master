import React, { useState } from "react";
import useEvents from "../../hooks/useEvents";
import Event from "./Event";
import Topbar from "../shared/Topbar";
import BaseModal from "../../modules/Modal";

const Events = () => {
  const [events] = useEvents();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="flex mt-2">
      <div className="">
        <Topbar actionTitle={`add event`} showModal={showModal} title={`discover events`}/>
        <hr className="my-2" />
        <div className="flex justify-center items-center py-12 md:px-4 max-w-">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 space-y-4 md:space-y-0">
            {events?.map((event) => (
              <Event event={event} key={event.id}></Event>
            ))}
          </div>
        </div>
      </div>
      <BaseModal title="Add A Event" modalType={"createEvent"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
    </div>
  );
};

export default Events;
