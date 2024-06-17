import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";
import notImg from "../assets/imgs/logo/image-outline-icon.png";
import { urlImage } from "../common/utils/utils";
import { useRef } from "react";
import { toast } from "react-toastify";

const options = [
  { value: "user", label: "user" },
  { value: "admin", label: "admin" },
];

export default function FormUser() {
  const imgRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    toast.success("send data success");
  };

  const handleUploadImg = (e) => {
    const file = e.target.files[0];

    const urlFile = urlImage(file);

    imgRef.current.src = urlFile;
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[6%] rounded-t-sm flex justify-between">
        <div className="h-full flex items-center"></div>
        <div className="w-8 h-full rounded-tr-sm cursor-pointer flex justify-center items-center">
          <AiOutlineClose />
        </div>
      </div>
      <div className="w-full h-[94%]">
        <form
          method="post"
          className="px-4 h-full relative"
          onSubmit={handleOnSubmit}
        >
          <div className="groups-input mb-4">
            <div className="member-input">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="member-input">
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="phonenumber"> Phone number </label>
            </div>
          </div>
          <div className="input-alone mb-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="email"> Email </label>
          </div>
          <div className="input-alone mb-4">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="password"> Password </label>
          </div>
          <div className="py-[15px] text-sm">
            <Select
              options={options}
              defaultValue={options[0]}
              className="capitalize"
              classNames={{
                container: (state) => {
                  const theme = state.theme;
                  const colors = theme.colors;
                  colors.primary = "#00ADB5";
                },
              }}
            />
          </div>
          <div className="py-[15px] flex gap-4">
            <label className="custum-file-upload" htmlFor="file">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill=""
                      d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="text">
                <span>Click to upload image</span>
              </div>
              <input type="file" id="file" onChange={handleUploadImg} />
            </label>
            <div className="w-[100px] h-[100px] overflow-hidden">
              <img
                ref={imgRef}
                src={""}
                alt="not img"
                className="w-full h-full object-cover"
                onError={({ currentTarget }) => {
                  currentTarget.src = notImg;
                  currentTarget.onerror = null;
                }}
              />
            </div>
          </div>
          <div className="py-[15px] absolute w-full bottom-8 left-0 px-4">
            <button
              className="w-[100%] h-10 text-sm bg-[#00ADB5] text-[#EEEEEE] rounded-sm"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
