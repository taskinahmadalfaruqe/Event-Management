import { useContext } from "react";
import {Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { AuthContext } from "../Provider/Provider";

const PrivetRouts = ({children}) => {
    const {user,isLoading}=useContext(AuthContext);
    const location =useLocation();

    if(isLoading){
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate  state={location.pathname} to={"/login"}></Navigate>
    
}

PrivetRouts.propTypes = {
    children: PropTypes.object,
}

export default PrivetRouts