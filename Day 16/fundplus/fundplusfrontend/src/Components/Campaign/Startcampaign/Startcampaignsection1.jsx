import { Collapse } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import ImageCompressor from "image-compressor.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import photodrop from "../../../Assets/Images/Createcampaign/imagedrop.svg";
import Services from "../../../Service/Services";
import { useNavigate } from "react-router-dom";

export const Startcampaignsection1 = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [open, setOpen] = useState(true);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imageurl, setImageurl] = useState("");
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    place: "",
    content: "",
    topics: "",
    campaignimage: "",
    goalamount: "",
    goalformat: "",
    amountoflevel: "",
    levelname: "",
    description: "",
    minimumgoal: "",
    buttonlabel: "",
    goalmet: "",
  });

  const fileRef = useRef(null);
  const handleImageChange = async (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);


    if (selectedImage) {
      const compressedImage = await compressImage(selectedImage);
      const imageData = new FormData();
      imageData.append("file", compressedImage);
      imageData.append("upload_preset", "t516gx5k");
      try {
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
        formData.campaignimage = data.secure_url;
        console.log(formData);
        setCurrentSection(4);
        console.log(data.secure_url);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  const compressImage = async (image) => {
    return new Promise((resolve, reject) => {
      new ImageCompressor(image, {
        quality: 0.1,
        success(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    });
  };


  const handleContentChange = (value) => {
    setContent(value);
    formData.content = content;
  };

  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  const toggleOpen = () => {
    if (currentSection !== 1) setCurrentSection(1);
    setOpen((cur) => !cur);
  };

  const toggleOpen2 = () => {
    if (currentSection !== 2 && isFormValid) setCurrentSection(2);
    setOpen(true);
  };

  const toggleOpen3 = () => {
    if (currentSection !== 3) setCurrentSection(3);
    setOpen(true);
  };

  const toggleOpen4 = () => {
    if (currentSection !== 4) setCurrentSection(4);
    setOpen(true);
  };

  const handleDeleteImage = () => {
    setImage(null);
  };
  const handleSubmit=async()=>{
    console.log(formData);
    await Services.Usercreatecampaign(localStorage.getItem("userid"),formData).then((res)=>{
        console.log(res.data);
        navigate("/dashboard");

    }).catch((err)=>{
      console.log(err);
    });

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTopicsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return (
      formData.title.trim() !== "" &&
      formData.category.trim() !== "" &&
      formData.place.trim() !== ""
    );
  };

  const handleNext = () => {
    if (currentSection === 1) {
      if (isFormValid()) {
        setCurrentSection(2);
        console.log(formData);
      } else {
        // Show an error message or prevent moving to the next section
      }
    } else if (currentSection === 2) {
      if (formData.content.trim() !== "" && formData.topics.trim() !== "") {
        console.log(formData);
        setCurrentSection(3); // Move to the "Photo" section
      } // Move to the "Photo" section
    } else if (currentSection === 3) {
      // setCurrentSection(4);
      // Move to the "Fundraising" section
      console.log(formData);
    } else if (currentSection === 4) {

    }
  };

  const handlePrev = () => {
    if (currentSection === 2) {
      setCurrentSection(1); // Move back to the "Title" section
    } else if (currentSection === 3) {
      setCurrentSection(2); // Move back to the "Problem" section
    } else if (currentSection === 4) {
      setCurrentSection(3); // Move back to the "Photo" section
    }
  };

  return (
    <>
      <main className="min-h-screen xl:p-32">
        <section>
          <p
            className="xl:text-4xl text-center text-darkteal font-productsansb
         font-bold ">
            Start a Campaign
          </p>
        </section>
        <div className="flex mt-12 justify-center items-center">
          <button
            onClick={toggleOpen}
            className={`border-2 ${
              currentSection === 1 ? "bg-[#f4fbf9]" : ""
            } border-r-0 border-[#eeeeee] rounded-l-lg text-darkteal xl:px-20 py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold text-4xl">1</span>
            <span>Title</span>
          </button>


          <button
            onClick={toggleOpen2}
            className={`border-2 ${
              currentSection === 2 ? "bg-[#f4fbf9]" : ""
            } border-r-0 border-[#eeeeee] text-darkteal px-20 py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold text-4xl">2</span>
            <span>Problem</span>
          </button>
          <button
            onClick={toggleOpen3}
            className={`border-2 ${
              currentSection === 3 ? "bg-[#f4fbf9]" : ""
            } border-r-0 border-[#eeeeee] text-darkteal px-20 py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold text-4xl">3</span>
            <span>Photo</span>
          </button>
          <button
            onClick={toggleOpen4}
            className={`border-2 ${
              currentSection === 4 ? "bg-[#f4fbf9]" : ""
            } rounded-r-lg border-[#eeeeee] text-darkteal px-20 py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold text-4xl">4</span>
            <span>Fundraising</span>
          </button>
        </div>
        {currentSection === 1 && (
          <Collapse
            className="flex items-center justify-center mt-4 lg:text-sm lg:px-5"
            open={open}>
            <div className="flex flex-col items-start justify-center gap-5 px-48">
              <div className="flex flex-col justify-center pt-12">
                <p className="font-bold text-darkteal text-2xl">
                  Write your campaign's title
                </p>
                <p className="text-[#838f8c]">
                  This is the first thing people will see about your campaign.
                  Get their attention with a short title that focuses on the
                  change you’d like them to support.
                </p>
              </div>
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-bold text-sm">Title</span>
                    <span className="text-red">*</span>
                  </p>
                  <input
                    placeholder="What do you want to achieve?"
                    type="text"
                    className="border-2 p-2.5 rounded-lg border-[#cccccc] w-[45em]"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-bold text-sm">Category</span>
                    <span className="text-red">*</span>
                  </p>
                  <input
                    placeholder="What do you want to achieve?"
                    type="text"
                    className="border-2 p-2.5 rounded-lg border-[#cccccc] w-[45em]"
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-bold text-sm">Add a place</span>
                    <span className="text-red">*</span>
                  </p>
                  <input
                    placeholder="Add a neighborhood, state, city, or country"
                    type="text"
                    className="border-2 p-2.5 rounded-lg border-[#cccccc] w-[45em]"
                    name="place"
                    id="place"
                    value={formData.place}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
          </Collapse>
        )}
        {currentSection === 2 && (
          <Collapse open={open}>
            <div className="flex flex-col items-start justify-center gap-5 px-48">
              <div className="flex flex-col justify-center pt-12">
                <p className="font-bold text-darkteal text-2xl">
                  Explain the problem
                </p>
                <p className="text-[#838f8c]">
                  People are more likely to support your campaign if it’s clear
                  why you care. Explain how this change will impact you, your
                  family, or your community.
                </p>
              </div>
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-3">
                  <div>
                    <button>
                      <span className="font-bold text-darkteal">content</span>
                      <span className="text-red">*</span>
                    </button>
                  </div>
                  <div className="h-[20em]">
                    <ReactQuill
                      className="w-[45em] h-full"
                      onChange={handleContentChange}
                      id="content"
                      name="content"
                      placeholder="Start typing here..."
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <button>
                      <span className="font-bold text-darkteal">
                        Add topics
                      </span>
                      <span className="text-red">*</span>
                    </button>
                  </div>
                  <div className="">
                    <input
                      placeholder="What do you want to achieve?"
                      type="text"
                      className="border-2 p-2.5 rounded-lg border-[#cccccc] w-[45em]"
                      name="topics"
                      id="topics"
                      value={formData.topics}
                      onChange={handleTopicsChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        )}
        {currentSection === 3 && (
          <Collapse open={open}>
            <div className="flex flex-col items-start justify-center gap-5 px-48">
              <div className="flex flex-col justify-center pt-12">
                <p className="font-bold text-darkteal text-2xl">Add a photo</p>
                <p className="text-[#838f8c]">
                  Fundraiser with a photo or video receive six times more
                  donations than those without. Include one that captures the
                  emotion of your story.
                </p>
              </div>
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-3">
                  <div>
                    <button>
                      <span className="font-bold text-darkteal">Image</span>
                      {/* <span className="text-red">*</span> */}
                    </button>
                  </div>
                  <div className="h-full relative w-[45em]">
                    {image ? (
                      // <img
                      //   className="object-cover rounded-xl"
                      //   ref={fileRef}
                      //   alt=""
                      // />
                      <div className="relative">
                        <img
                          className="h-[27em] w-full rounded-xl object-cover"
                          src={URL.createObjectURL(image)}
                          alt=""
                        />
                        <button
                          onClick={handleDeleteImage}
                          className="absolute top-0 flex items-center gap-2 right-0 px-3 py-1.5 font-bold text-bordergray text-sm bg-[#fbf8ef]  ">
                          <span>
                            <i class="fa-solid fa-trash"></i>
                          </span>
                          <span>Delete</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center  border-[#cccccc] border-2 border-dashed rounded-2xl px-48 py-28 flex-col gap-5">
                        <>
                          <figure>
                            <img className="w-52" src={photodrop} alt="" />
                          </figure>
                          <button className="border-[1px] px-5 py-2  border-[#cccccc] text-bordergray rounded-lg">
                            <span>
                              <i class="fa-regular fa-folder-open"></i>
                            </span>
                            <button
                              title=""
                              className=" text-sm  font-semibold rounded-md ">
                              <input
                                type="file"
                                onChange={handleImageChange}
                                ref={fileRef}
                                className="fileInput hidden"
                                name="myfile"
                                id="fileInput"
                              />
                              <label
                                className=" inline-block py-[0.5rem] px-3 rounded-md w-cursor-pointer transition-all duration-700 delay-150 ease-in-out"
                                for="fileInput"
                                id="fileInputLabel">
                                Browser Image
                              </label>
                            </button>
                          </button>
                        </>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        )}
        {currentSection === 4 && (
          <Collapse open={open}>
            <div className="flex flex-col items-start justify-center  gap-5 px-48">
              <div className="flex flex-col  justify-center pt-12">
                <p className="font-bold text-darkteal text-2xl">
                  Create the donation package
                </p>
                <p className="text-[#838f8c]">
                  Perks are incentives offered to backers in exchange for their
                  support. You may edit your perk details until the perk is
                  claimed.
                </p>
              </div>
              <form className="flex flex-col gap-5  w-screen">
                <div className="flex gap-10 items-center ">
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Goal</span>
                      <span className="text-red">*</span>
                    </p>
                    <div>
                      <span className="bg-[#fcf9f1] p-3.5 rounded-l-lg">
                        <i class="fa-solid text-[#838f8c] fa-indian-rupee-sign"></i>
                      </span>
                      <input
                        placeholder="Amount of Goal"
                        type="text"
                        className="border-[1px] w-[20em] p-2.5 rounded-r-lg border-[#cccccc]"
                        name="goalamount"
                        id="goalamount"
                        value={formData.goalamount}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Goal format</span>
                    </p>
                    <div>
                      <select
                        className="border-[1px] w-[20em]  p-2.5 rounded-lg border-[#cccccc]"
                        value={formData.goalformat}
                        onChange={handleInputChange}
                        name="goalformat"
                        id="goalformat">
                        <option value="Amount">Amount</option>
                        <option value="Percentage">Percentage</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 items-center ">
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Amount</span>
                      <span className="text-red">*</span>
                    </p>
                    <div>
                      <span className="bg-[#fcf9f1] p-3.5 rounded-l-lg">
                        <i class="fa-solid text-[#838f8c] fa-indian-rupee-sign"></i>
                      </span>
                      <input
                        placeholder="Amount of level"
                        type="text"
                        className="border-[1px] w-[20em] p-2.5 rounded-r-lg border-[#cccccc]"
                        name="amountoflevel"
                        id="amountoflevel"
                        value={formData.amountoflevel}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-bold text-sm">Title</span>
                      <span className="text-red">*</span>
                    </p>
                    <div>
                      <input
                        placeholder="Level name"
                        type="text"
                        className="border-[1px] w-[20em]  p-2.5 rounded-lg border-[#cccccc]"
                        name="levelname"
                        id="levelname"
                        value={formData.levelname}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 items-center ">
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-bold text-sm">Description</span>
                    </p>
                    <div>
                      <textarea
                        placeholder="Description of level"
                        className="border-[1px] resize-none w-[45em] p-2.5 rounded-lg text-black border-[#cccccc]"
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 items-center ">
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-bold text-sm">Minimum</span>
                      <span className="text-red">*</span>
                    </p>
                    <div>
                      <span className="bg-[#fcf9f1] p-3.5 rounded-l-lg">
                        <i class="fa-solid text-[#838f8c] fa-indian-rupee-sign"></i>
                      </span>
                      <input
                        className="border-[1px] w-[42.5em] p-2.5 rounded-r-lg border-[#cccccc]"
                        name="minimumgoal"
                        id="minimumgoal"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 items-center ">
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Button label</span>
                    </p>
                    <div>
                      <select
                        className="border-[1px] w-[21.5em]  p-2.5 rounded-lg border-[#cccccc]"
                        name="buttonlabel"
                        id="buttonlabel"
                        value={formData.buttonlabel}
                        onChange={handleInputChange}>
                        <option value="Contribute">Contribute</option>
                        <option value="Donate">Donate</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">
                        Close when goal met
                      </span>
                    </p>
                    <div>
                      <select
                        className="border-[1px] w-[21.5em]  p-2.5 rounded-lg border-[#cccccc]"
                        name="goalmet"
                        id="goalmet"
                        onChange={handleInputChange}>
                        <option value="Enable">Enable</option>
                        <option value="Disable">Disable</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Collapse>
        )}
        <div className="flex justify-end px-44 py-6 w-full">
          {/* <button
            onClick={handlePrev}
            className={`bg-lightteal px-4 rounded-lg py-2 text-white flex items-center  gap-12 ${
              currentSection === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            <span className="font-bold"> Previous </span>
            <span>
              <i className="fa-solid fa-arrow-left"></i>
            </span>
          </button> */}
          {currentSection <= 3 ? (
            <button
              onClick={handleNext}
              className="bg-lightteal px-4 rounded-lg py-2 text-white flex items-center  gap-12 ">
              <span className="font-bold"> Next </span>
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-lightteal px-4 rounded-lg py-2 text-white flex items-center  gap-12 ">
              <span className="font-bold"> Finish </span>
              <span>
                <i class="fa-solid fa-paper-plane"></i>{" "}
              </span>
            </button>
          )}
        </div>
      </main>
    </>
  );
};
