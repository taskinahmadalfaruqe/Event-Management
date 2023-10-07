import { useLoaderData } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import LodeProgram from "../../Component/LodeProgram/LodeProgram";
import Footer from "../../Component/Footer/Footer";

const Services = () => {
    const useData = useLoaderData();
    return (
        <div>
            <NavBar></NavBar>
            <div className="grid gap-5">
                {
                    useData.map(singleData=><LodeProgram key={singleData.id} singleData={singleData} ></LodeProgram>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;