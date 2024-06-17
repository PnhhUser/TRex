import { FORM_ADD, FORM_EDIT, OPEN_MODAL } from "../common/constants/constants";
import { useModalDispatch } from "../contexts/modalContext";

const initUsers = [
  {
    id: 1,
    name: "admin",
    email: "admin@gmai.com",
  },
];

export default function Users() {
  const dispatchModal = useModalDispatch();

  const openAdd = () => {
    dispatchModal({
      type: OPEN_MODAL,
      open: true,
      formType: FORM_ADD,
    });
  };

  const openEdit = (id) => {
    dispatchModal({
      type: OPEN_MODAL,
      open: true,
      formType: FORM_EDIT,
    });
  };

  const tableUsersData = initUsers.map((user) => {
    return (
      <tr
        className="border-b-[1px] border-[#e1e3e7] cursor-pointer"
        key={user.id}
        onClick={() => openEdit(user.id)}
      >
        <td className="py-1 px-4">
          <p className="text-gray-500">{user.name}</p>
        </td>
        <td className="py-1 flex justify-center">
          <div className="h-10 w-10 overflow-hidden bg-slate-500 rounded-sm"></div>
        </td>
        <td className="py-1 px-4">
          <p className="text-gray-500">{user.email}</p>
        </td>

        <td className="py-1 px-4">
          <div>
            <p className="text-xs text-gray-500">
              <span className="px-1">11/06/2024</span>
              <span className="px-1">20:30</span>
            </p>
          </div>
        </td>
        <td className="py-1 px-4">
          <div>
            <p className="text-xs text-gray-500">
              <span className="px-1">11/06/2024</span>
              <span className="px-1">20:30</span>
            </p>
          </div>
        </td>
        <td className="py-1 px-4">
          <div>
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-[10px] font-bold text-[#00ADB5] ring-1 ring-inset ring-gray-500/10">
              ADMIN
            </span>
          </div>
        </td>
        <td className="py-1 px-4">
          <div>
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-[10px] font-bold text-green-500 ring-1 ring-inset ring-gray-500/10">
              ONLINE
            </span>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="grid grid-cols-12 gap-1 p-1">
      <div className="col-span-12 bg-[#EEEEEE] w-full h-screen shadow rounded-sm">
        <div className="w-full h-14">
          <button
            onClick={openAdd}
            type="button"
            className="text-xs uppercase bg-[#00ADB5] text-white px-8 py-2 font-medium active:scale-90 transition-transform duration-[.3] rounded-sm"
          >
            Add user
          </button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="text-sm w-full rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="uppercase bg-[#393E46]">
              <tr>
                <th className="text-[#EEEEEE] py-3 px-2">Name</th>
                <th className="text-[#EEEEEE] py-3 px-2">image</th>
                <th className="text-[#EEEEEE] py-3 px-2">email</th>
                <th className="text-[#EEEEEE] py-3 px-2">Day create</th>
                <th className="text-[#EEEEEE] py-3 px-2">Day update</th>
                <th className="text-[#EEEEEE] py-3 px-2">Role</th>
                <th className="text-[#EEEEEE] py-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white text-center">{tableUsersData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
