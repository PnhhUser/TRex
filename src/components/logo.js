// import logo from "../assets/imgs/logo/logo.svg";

export default function Logo() {
  return (
    <div className="ms-2 flex items-center">
      <div className="h-10 w-10 overflow-hidden bg-slate-500 rounded-sm"></div>
      <div className="ms-2">
        <p className="text-4xl font-extrabold text-[#393E46]">
          <span className="text-[#00ADB5]">T</span>Rex
        </p>
      </div>
    </div>
  );
}
