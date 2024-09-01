import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

//utils
import { BASE_URL_server } from "../../constant/BASE_URL";

export default function ForgetPassword() {
    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false);
    const [userData, setUserData] = useState({
      email: "",
    });
  
    const handleVerify = async (e) => {
      e.preventDefault();
  
      //if loading is true then don't allow to submit the form
      if (loading) return;
  
      if (userData.email === "") {
        alert("Please email is required");
        return;
      }

      try{
        setLoading(true);
        const result = await axios.post(
            `${BASE_URL_server}/api/user/forgetPassword`,
            userData,
            { withCredentials: true }
          );
    
          if (result.data.success) {
            alert(result.data.message);
            navigate("/");
          } else {
            alert(result.data.message);
          }
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
  
      
    };

  return (
    <>
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Forget Password
          </h1>
          <form className="mt-6" onSubmit={handleVerify}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus=""
                autoComplete=""
                required=""
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
           
         
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
      px-4 py-3 mt-6"
            >
              {loading ? "Loading.." : "Verfy"}
            </button>
          </form>
       
          <p className="mt-8">
            Need an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Create an account
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  </>
  )
}
