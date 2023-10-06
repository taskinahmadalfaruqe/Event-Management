import {  useNavigate } from "react-router-dom";
import cry from '../../assets/cry.png'


const ErrorPage = () => {
    const navigate =useNavigate();
    const handelNavigate=()=>{
        navigate('/')
    }
    return (
        <div className="w-full h-[100vh] flex justify-center items-center flex-col space-y-4">
            <div className="text-2xl font-semibold text-red-500 text-center space-y-5">
                <p>Ooops...!!</p>
                <img className="w-28 h-28 mx-auto" src={cry} alt="Imoje" />
                <p>Something Wrong. Please Try Some Time Later</p>
            </div>
            
            <button onClick={handelNavigate} className="font-Roboto text-xl p-1 px-5 bg-purple-700 uppercase text-white rounded-md">Go To Home</button>
        </div>
    );
};

export default ErrorPage;