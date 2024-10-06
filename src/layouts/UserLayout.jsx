import { Outlet } from "react-router-dom";
import Header from "../pages/Header";





const UserLayout = () => {
    return (
        <div className="min-h-screen bg-slate-100 text-primaryWhite">

               <Header />
                 <main className="p-2 min-h-[85vh] bg-inherit">
                    <Outlet />
                </main>
               {/* <Footer/> */}
            {/* <Sidebar /> */}
         
        </div>
    )
};

export default UserLayout;