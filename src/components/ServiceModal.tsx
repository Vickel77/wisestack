import React from "react";
import { MdClose } from "react-icons/md";
import { ServiceData } from "./Services";

export default function ServiceModal({
  showModal,
  setShowModal,
  selectedService,
}: {
  showModal: boolean;
  setShowModal: any;
  selectedService: ServiceData;
}) {
  if (!showModal) return <></>;

  const { icon, title, text } = selectedService;

  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed top-0 right-0 bg-[#00000055] w-full h-screen flex justify-center items-center"
    >
      <div className="p-10 bg-white md:w-[40%] w-[80%] relative shadow-xl rounded-lg">
        <div className="w-full flex justify-end p-5 hover:opacity-50 cursor-pointer absolute top-2 right-2">
          <MdClose size={20} />
        </div>

        <div className="mb-5 flex justify-center">
          <div className="bg-primaryAccent absolute -top-[20px] rounded-full p-3 flex justify-center items-center">
            {icon}
          </div>
        </div>
        <div>
          <p className="font-bold mb-5 text-xl">{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
