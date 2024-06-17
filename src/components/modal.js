import { CLOSE_MODAL } from "../common/constants/constants";
import { useModalDispatch } from "../contexts/modalContext";
import { IoMdClose } from "react-icons/io";

export const ModalSM = ({ children, className }) => {
  return (
    <div className="relative">
      <div className="bg-[#222831] opacity-[0.6] w-full h-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-80 sm:w-96h-40 bg-white rounded-md shadow ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const ModalLogin = ({ children, className }) => {
  return (
    <div className="relative">
      <div className="bg-[#222831] opacity-[.6] w-full  h-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`h-96 w-80 sm:w-96 bg-white rounded-md shadow ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const FormModal = ({ children, className }) => {
  const dispatchModal = useModalDispatch();
  const closeModal = () => {
    dispatchModal({
      type: CLOSE_MODAL,
      close: false,
    });
  };
  return (
    <div className="relative">
      <div
        className="bg-[#222831] opacity-[0.6] w-screen h-screen"
        onClick={closeModal}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-80 sm:w-96 h-[542px] bg-white rounded-md shadow ${className}`}
        >
          <div className="h-8 bg-[#EEEEEE] rounded-t-md grid grid-cols-12">
            <div className="col-start-12 flex items-center justify-center">
              <IoMdClose className="text-[#222831]" onClick={closeModal} />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
