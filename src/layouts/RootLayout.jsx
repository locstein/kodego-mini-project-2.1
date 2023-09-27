// import Sidebar from "./Sidebar";

const RootLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className=" flex-1 mx-auto bg-[#fbf3f0] dark:bg-black duration-100 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
