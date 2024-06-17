export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-1 p-1">
      <div className="col-span-12 lg:col-span-4 bg-[#EEEEEE] w-full h-[15vh] lg:h-screen shadow rounded-sm"></div>

      <div className="col-span-12 lg:col-span-8 w-full h-screen">
        <div className="grid grid-rows-2 gap-1">
          <div className="row-span-6">
            <div className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-1">
              <div className="row-span-1 lg:col-start-1 bg-[#EEEEEE] rounded-sm shadow h-[50vh]"></div>
              <div className="row-span-1 lg:col-start-2 bg-[#EEEEEE] rounded-sm shadow"></div>
            </div>
          </div>

          <div className="row-span-6 bg-[#EEEEEE] h-[49.5vh] shadow rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}
