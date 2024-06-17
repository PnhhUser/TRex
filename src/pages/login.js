import { ModalLogin } from "../components/modal";
import bg from "../assets/imgs/background/bglogin.png";
import { FormLogin } from "../components/formLogin";
import { ToastContainer } from "react-toastify";

export async function action() {
  return null;
}

export default function Login() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <ModalLogin className={"opacity-[.8] bg-[#EEEEEE]"}>
        <FormLogin />
      </ModalLogin>
      <ToastContainer />
    </div>
  );
}
