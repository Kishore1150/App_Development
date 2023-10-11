import React, { useState, useRef, useEffect } from "react";
import profile from "../../../Assets/Images/Dashboard/h2.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ImageCompressor from "image-compressor.js";
import { login } from "../../../Redux/userSlice";
import Services from "../../../Service/Services";
import { selectUser } from "../../../Redux/userSlice";
import { logout } from "../../../Redux/userSlice";

const Adminsidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(localStorage.getItem("userid") || null);

  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState("");
  const handlelogout = () => {
    dispatch(logout());
    navigate("/home");
  };

  const fileRef = useRef(null);
  const handleImageChange = async (event) => {
    const selectedImage = event.target.files[0];
    setIsLoading(true);

    if (selectedImage) {
      try {
        setIsLoading(true);

        const compressedImage = await compressImage(selectedImage);
        const imageData = new FormData();
        imageData.append("file", compressedImage);
        imageData.append("upload_preset", "t516gx5k");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dalynypf0/image/upload`,
          {
            method: "POST",
            body: imageData,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        await Services.userUpdateProfileImage(user.email, data.secure_url)
          .then((res) => {
            console.log(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
        if (userId) {
          Services.getUser(userId)
            .then((res) => {
              dispatch(login(res.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        setIsLoading(false);
      }
    }
  };

  const compressImage = async (image) => {
    return new Promise((resolve, reject) => {
      new ImageCompressor(image, {
        quality: 0.3,
        success(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    });
  };
  return (
    <>
      <aside className="xl:pl-24 xl:pb-12  h-full lg:w-full xl:w-fit ">
        <div className="flex lg:pl-12   pt-6 items-center gap-3 text-sm text-darkteal">
          <span>
            <i class="fa-solid fa-house-chimney"></i>
          </span>
          <span className="text-lightgray">
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <p>Profile settings</p>
        </div>

        <div
          className=" xl:w-fit lg:p-5  h-full
          ">
          <figure className="xl:h-64 mt-5 relative xl:w-64">
            {!isLoading && (
              <button className="absolute top-0 flex items-center gap-2 right-0 px-3 py-1.5 font-bold text-bordergray text-sm bg-[#fbf8ef]  ">
                <input
                  type="file"
                  onChange={handleImageChange}
                  ref={fileRef}
                  className="fileInput hidden"
                  name="myfile"
                  id="fileInput"
                />

                <label
                  className="flex items-center gap-2"
                  for="fileInput"
                  id="fileInputLabel">
                  <span>
                    <i class="fa-solid fa-pen"></i>
                  </span>
                  <span>Change</span>
                </label>
              </button>
            )}
            {user?.profileImage ? (
              <>
                {isLoading ? (
                  <div class="flex xl:h-64 lg:h-72   xl:w-64 lg:w-full rounded-lg object-cover border-[1px] justify-center border-dashed bg-white    items-center gap-2 text-lightgray">
                    <div className="relative justify-center   flex flex-col gap-2 items-center">
                      <div class="flex justify-center items-center h-full">
                        <img
                          class="h-5 w-5"
                          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                          alt=""
                        />
                      </div>

                      <span className="text-sm"> Loading...</span>
                    </div>
                  </div>
                ) : (
                  <img
                    className="xl:h-64   xl:w-64 lg:w-full rounded-lg object-cover"
                    src={user?.profileImage}
                    alt=""
                  />
                )}
              </>
            ) : (
              <>
                <img
                  className="xl:h-64 xl:w-64 lg:w-full rounded-lg object-cover"
                  src={profile}
                  alt=""
                />
              </>
            )}
          </figure>

          <div className="flex flex-col gap-2 mt-3 text-darkteal ">
            <button
              onClick={() => navigate("/admindashboard")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Dashboard</span>
              <span>
                <i class="fa-solid fa-compass"></i>
              </span>
            </button>
            <button
              onClick={() => navigate("/admineditprofile")}
              className="flex items-center bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Edit Profile</span>
              <span>
                <i class="fa-solid fa-user"></i>
              </span>
            </button>
            <button className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Preferences</span>
              <span>
                <i class="fa-solid fa-toggle-on"></i>
              </span>
            </button>
            <button
              onClick={() => navigate("/admineditpassword")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Change Password</span>
              <span>
                <i class="fa-solid fa-lock"></i>
              </span>
            </button>
            {/* <button
              onClick={() => navigate("/usercardpaymentdetails")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Payment Methods</span>
              <span>
                <i class="fa-solid fa-credit-card"></i>
              </span>
            </button> */}
            <button
              onClick={handlelogout}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Logout</span>
              <span>
                <i class="fa-solid fa-right-from-bracket"></i>
              </span>
            </button>
            <button
              onClick={() => navigate("/admindeleteprofile")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Delete profile</span>
              <span>
                <i class="fa-solid fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Adminsidebar;
