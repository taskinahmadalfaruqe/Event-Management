import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='font-Quicksand container max-w-[1240px]'>
            <Outlet/>
        </div>
    );
};

export default MainLayout;