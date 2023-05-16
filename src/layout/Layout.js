import { Outlet } from "react-router-dom";
import Header from "./Header";


function Layout() {
    return (
     <main className="flex flex-col">

         <Header/>

         <Outlet/>
        

     </main>
    );
};

export default Layout;