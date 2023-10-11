import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Services from '../../../Service/Services';
import toast, { Toaster } from "react-hot-toast";

import { logout } from "../../../Redux/userSlice";
import { useDispatch } from 'react-redux';

export const Admindeleteprofilesection = () => {
  const [checkbox, setCheckbox] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const deleteUser=async(e)=>{
    e.preventDefault();

    const userId=localStorage.getItem('userid');
    await Services.deleteUser(userId).then((res)=>{

      toast.success("Account deleted successfully");
     localStorage.removeItem("userid");
     localStorage.removeItem("token");

     setTimeout(()=>{
        dispatch(logout());
        navigate("/home");
      },4000)
    }).catch((err)=>{

      toast.error(err);

    })

  }

  return (
    <div>
      <section className="xl:h-[45rem] lg:h-[30em] lg:p-5 lg:w-full">
        <div className="relative  top-[60px] rounded-xl  border-[1px] xl:w-[800px] h-[310px] border-lightgray1 ">
          <div className="border-b-[1px] border-lightgray1 p-5">
            <p className="text-darkteal font-bold font-productsansr text-2xl">
              Delete account
            </p>
          </div>
          <div className="ml-5 text-darkteal mt-4 mb-2">
            <p className="font-bold text-lg">Before you go...</p>
          </div>
          <div className=" flex flex-col ml-10 items-left">
            <p className="text-lightgray">
              <span className="text-[20px] mr-3 align-middle">&#8226;</span>Take
              a backup of your data <span className="text-lightteal">Here</span>
            </p>
            <p className="text-lightgray">
              <span className="text-[20px] mr-3 align-middle">&#8226;</span>If
              you delete your account,you will lose your all data.
            </p>
          </div>
          <form onSubmit={deleteUser}>
            <div className="flex items-center gap-3 ml-6 mt-5">
              <input
                className=" form-checkbox bg-white w-4 h-4 rounded-[3px]"
                type="checkbox"
                checked={checkbox}
                onChange={() => setCheckbox(!checkbox)}
                required
              />
              <p className="text-lightgray ">
                Yes, I'd like to delete my account
              </p>
            </div>
            <div className="flex gap-1 ml-5 mt-5">
              <button
                onClick={() => navigate("/dashboard")}
                type="submit"
                disabled={checkbox}
                className="bg-lightteal text-white rounded-lg hover:bg-brightgreen
           hover:text-lightgreen transition ease-in-out duration-500 font-bold px-4 py-2 text-sm">
                Keep my account
              </button>
              <button
                type="submit"
                disabled={!checkbox}
                className="bg-red   rounded-lg font-bold text-white px-4 py-2 text-sm">
                Delete my account
              </button>
            </div>
          </form>
        </div>
      </section>
      <Toaster position="top-center" />;
    </div>
  );

}
