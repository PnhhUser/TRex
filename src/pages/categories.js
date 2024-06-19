const initCategories = [
  {
    id: 1,
    name: "Book",
  },
  {
    id: 2,
    name: "Pencil",
  },
  {
    id: 3,
    name: "Pen",
  },
];

export default function Categories() {
  const openEdit = (id) => {};

  const rowData = initCategories.map((user) => {
    return (
      <tr
        className="border-b-[1px] border-[#e1e3e7] cursor-pointer"
        key={user.id}
        onClick={() => openEdit(user.id)}
      >
        <td className="py-3 px-4">
          <p className="text-gray-500">{user.name}</p>
        </td>
        <td className="py-3 px-4">
          <div>
            <p className="text-xs text-gray-500">
              <span className="px-1">11/06/2024</span>
              <span className="px-1">20:30</span>
            </p>
          </div>
        </td>
        <td className="py-3 px-4">
          <div>
            <p className="text-xs text-gray-500">
              <span className="px-1">11/06/2024</span>
              <span className="px-1">20:30</span>
            </p>
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
            type="button"
            className="text-xs uppercase bg-[#00ADB5] text-white px-8 py-2 font-medium active:scale-90 transition-transform duration-[.3] rounded-sm"
          >
            Add category
          </button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="text-sm w-full rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="uppercase bg-[#393E46]">
              <tr>
                <th className="text-[#EEEEEE] py-3 px-2">
                  <p className="w-40">Category name</p>
                </th>
                <th className="text-[#EEEEEE] py-3 px-2">
                  <p className="w-34">Day Create</p>
                </th>
                <th className="text-[#EEEEEE] py-3 px-2">
                  <p className="w-34">Day Update</p>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-center">{rowData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
