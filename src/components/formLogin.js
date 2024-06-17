import { Form, Link } from "react-router-dom";

export const FormLogin = () => {
  return (
    <Form method="post">
      <div className="py-6 ms-4">
        <p className="text-4xl font-extrabold ms-2 text-[#111]">TRex Login</p>
      </div>
      <div className="px-6 mb-4">
        <div className="w-full h-10">
          <input
            type="email"
            name="email"
            className="border-[1px] border-[#8b8989] outline-none w-full h-full indent-2 rounded-sm color-[#111] text-sm"
            autoComplete="off"
            placeholder="TRex001@gmail.com"
          />
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="w-full h-10">
          <input
            type="password"
            name="password"
            className="border-[1px] border-[#8b8989] outline-none w-full h-full indent-2 rounded-sm color-[#111] text-sm"
            autoComplete="off"
            placeholder="********"
          />
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="w-full h-10">
          <button
            type="submit"
            className="bg-[#222831] w-full h-12 text-white rounded-sm text-sm"
          >
            Login
          </button>
        </div>
      </div>
      <div className="px-6 mt-10">
        <div className="w-full h-10">
          <p className="w-full text-center text-slate-500 text-xs">By Login</p>
          <Link
            to={""}
            className="bg-[#393E46] w-full h-12 text-center leading-[3rem] text-white mt-4 rounded-sm inline-block text-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </Form>
  );
};
