import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { AiOutlineMore } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { ToastContainer } from "react-toastify";
import { FormModal } from "../components/modal";
import { ModalProvider, useModal } from "../contexts/modalContext";
import { FORM_ADD, FORM_EDIT } from "../common/constants/constants";

const ModalForm = ({ children }) => {
  const modal = useModal();

  if (modal.formType === FORM_ADD) {
    return (
      <div className="absolute top-0 left-0">
        {modal.isOpen && <FormModal>{children}</FormModal>}
      </div>
    );
  }

  if (modal.formType === FORM_EDIT) {
    return (
      <div className="absolute top-0 left-0">
        {modal.isOpen && <FormModal>{children}</FormModal>}
      </div>
    );
  }
};

export default function Layout() {
  return (
    <ModalProvider>
      <div className="grid grid-cols-12 z-0 relative">
        {/* navbar */}
        <div className={`col-span-2 bg-[#222831] w-full h-screen relative`}>
          <div className="w-full h-16 bg-[#393E46]">
            <div className="flex items-center justify-center h-full md:justify-start md:ps-2">
              <div className="h-10 w-10 overflow-hidden bg-[#EEEEEE] rounded-full"></div>
              <div className="flex-1 ms-2 hidden md:block">
                <p className="text-sm font-bold capitalize text-[#EEEEEE]">
                  hoang
                </p>
                <p className="text-[10px] font-bold capitalize text-[#00ADB5]">
                  admin
                </p>
              </div>
              <div className="bg-[#00ADB5] h-full w-6 overflow-hidden cursor-pointer hidden lg:block">
                <AiOutlineMore
                  className="text-white text-3xl w-full h-full"
                  strokeWidth={50}
                />
              </div>
            </div>
          </div>
          <Navbar />
          <div className="h-14 w-full flex justify-center lg:justify-start lg:ps-2 items-center absolute bottom-0">
            <CiLogout className="text-[#EEEEEE] text-3xl" strokeWidth={1.2} />
            <p className="text-[#EEEEEE] ps-2 hidden lg:block text-sm cursor-pointer">
              Logout
            </p>
          </div>
        </div>

        {/* content  */}
        <div
          className={`col-span-10 bg-[#EEEEEE] w-full h-screen overflow-y-auto`}
        >
          <div className="grid grid-cols-10 p-1">
            <div className="col-span-10 bg-[#EEEEEE] w-full h-14 shadow">
              <Header />
            </div>
          </div>
          <Outlet />
        </div>
      </div>

      {/* Modal  */}
      <ModalForm />

      {/* toast  */}
      <ToastContainer />
    </ModalProvider>
  );
}
