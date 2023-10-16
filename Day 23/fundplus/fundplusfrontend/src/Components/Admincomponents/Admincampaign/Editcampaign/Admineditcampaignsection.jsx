import { Collapse } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import ImageCompressor from "image-compressor.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import photodrop from "../../../../Assets/Images/Createcampaign/imagedrop.svg";
import Services from "../../../../Service/Services";
import { useNavigate } from "react-router-dom";
import { useEditCampaign } from "../../../../States/UseStates";
export const Admineditcampaignsection = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [open, setOpen] = useState(true);
  const [image, setImage] = useState("");
  const [imageurl, setImageurl] = useState("");
  const { editcampaign, updateCampaign } = useEditCampaign();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("");
  const [content, setContent] = useState("");
  const [topics, setTopics] = useState("");
  const [campaignimage, setCampaignimage] = useState("");
  const [goalamount, setGoalamount] = useState(0);
  const [goalformat, setGoalformat] = useState("");
  const [amountoflevel, setAmountoflevel] = useState(0);
  const [levelname, setLevelname] = useState("");
  const [description, setDescription] = useState("");
  const [minimumgoal, setMinimumgoal] = useState(0);
  const [buttonlabel, setButtonlabel] = useState("");
  const [goalmet, setGoalmet] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (editcampaign) {
      setTitle(editcampaign?.title);
      setCategory(editcampaign?.category);
      setPlace(editcampaign?.place);
      setContent(editcampaign?.content);
      setTopics(editcampaign?.topics);
      setCampaignimage(editcampaign?.campaignimage);
      setGoalformat(editcampaign?.goalformat);
      setGoalamount(editcampaign?.goalamount);
      setAmountoflevel(editcampaign?.amountoflevel);
      setLevelname(editcampaign?.levelname);
      setDescription(editcampaign?.description);
      setMinimumgoal(editcampaign?.minimumgoal);
      setButtonlabel(editcampaign?.buttonlabel);
      setGoalmet(editcampaign?.goalmet);
    }
  }, []);

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
        setCampaignimage(data.secure_url);
        editcampaign.campaignimage = data.secure_url;
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
    setCampaignimage(null);
    editcampaign.campaignimage = null;
  };
  const handleSubmit = async () => {
    const formData = {
      title: title,
      category: category,
      place: place,
      content: content,
      topics: topics,
      campaignimage: campaignimage,
      goalamount: goalamount,
      goalformat: goalformat,
      amountoflevel: amountoflevel,
      levelname: levelname,
      description: description,
      minimumgoal: minimumgoal,
      buttonlabel: buttonlabel,
      goalmet: goalmet,
    };
    await Services.adminupdateCampaign(editcampaign?.id, formData)
      .then((res) => {
        console.log(res.data);
        navigate("/admindashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isFormValid = () => {
    return title.trim() !== "" && category.trim() !== "" && place.trim() !== "";
  };

  const handleNext = () => {
    if (currentSection === 1) {
      if (isFormValid()) {
        setCurrentSection(2);
      } else {
        // Show an error message or prevent moving to the next section
      }
    } else if (currentSection === 2) {
      if (content.trim() !== "" && topics.trim() !== "") {
        setCurrentSection(3); // Move to the "Photo" section
      } // Move to the "Photo" section
    } else if (currentSection === 3) {
      // setCurrentSection(4);
      // Move to the "Fundraising" section
    } else if (currentSection === 4) {
    }
  };
    const handleContentChange = (value) => {

      setContent(value);
      console.log(content);
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
      <main className="xl:h-screen xl:p-32 lg:relative lg:top-24">
        <section>
          <p
            className="xl:text-4xl text-center text-darkteal font-productsansb
         font-bold ">
            Edit the Campaign
          </p>
        </section>
        <div className="flex lg:flex-col lg:mt-16 xl:mt-12 justify-center xl:items-center">
          <button
            onClick={toggleOpen}
            className={`xl:border-2 ${
              currentSection === 1 ? "bg-[#f4fbf9]" : ""
            } xl:border-r-0 xl:border-[#eeeeee] xl:rounded-l-lg text-darkteal lg:px-10 lg:py-2 xl:px-20 xl:py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold lg:text-xl xl:text-4xl">1</span>
            <span>Title</span>
          </button>

          <button
            onClick={toggleOpen2}
            className={`xl:border-2 ${
              currentSection === 2 ? "bg-[#f4fbf9]" : ""
            } xl:border-r-0 xl:border-[#eeeeee] text-darkteal lg:px-10 lg:py-2  xl:px-20 xl:py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold lg:text-xl xl:text-4xl">2</span>
            <span>Problem</span>
          </button>
          <button
            onClick={toggleOpen3}
            className={`xl:border-2 ${
              currentSection === 3 ? "bg-[#f4fbf9]" : ""
            } xl:border-r-0 xl:border-[#eeeeee] text-darkteal lg:px-10 lg:py-2  xl:px-20 xl:py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold lg:text-xl xl:text-4xl">3</span>
            <span>Photo</span>
          </button>
          <button
            onClick={toggleOpen4}
            className={`xl:border-2 ${
              currentSection === 4 ? "bg-[#f4fbf9]" : ""
            } xl:rounded-r-lg xl:border-[#eeeeee] lg:px-10 lg:py-2   text-darkteal xl:px-20 xl:py-2 font-bold flex items-center gap-3`}>
            <span className="font-bold lg:text-xl xl:text-4xl">4</span>
            <span>Fundraising</span>
          </button>
        </div>
        {currentSection === 1 && (
          // <Collapse
          //   className="flex items-center justify-center mt-4 lg:text-sm lg:px-5"
          //   open={open}>
          //   <div className="flex flex-col items-start justify-center gap-5 xl:px-48">
          //     <div className="flex flex-col justify-center pt-12">
          //       <p className="font-bold text-darkteal text-2xl">
          //         Write your campaign's title
          //       </p>
          //       <p className="text-[#838f8c]">
          //         This is the first thing people will see about your campaign.
          //         Get their attention with a short title that focuses on the
          //         change you’d like them to support.
          //       </p>
          //     </div>
          //     <form className="flex flex-col gap-5">
          //       <div className="flex flex-col gap-1">
          //         <p>
          //           <span className="font-bold text-sm">Title</span>
          //           <span className="text-red">*</span>
          //         </p>
          //         <input
          //           placeholder="What do you want to achieve?"
          //           type="text"
          //           className="border-2 p-2.5 rounded-lg border-[#cccccc] w-[45em]"
          //           name="title"
          //           id="title"
          //           value={title}
          //           onChange={(e) => setTitle(e.target.value)}
          //         />
          //       </div>
          //       <div className="flex flex-col gap-1">
          //         <p>
          //           <span className="font-bold text-sm">Category</span>
          //           <span className="text-red">*</span>
          //         </p>
          //         <input
          //           placeholder="What do you want to achieve?"
          //           type="text"
          //           className="border-2 p-2.5 rounded-lg border-[#cccccc] w-[45em]"
          //           name="category"
          //           id="category"
          //           value={category}
          //           onChange={(e) => setCategory(e.target.value)}
          //         />
          //       </div>
          //       <div className="flex flex-col gap-1">
          //         <p>
          //           <span className="font-bold text-sm">Add a place</span>
          //           <span className="text-red">*</span>
          //         </p>
          //         <input
          //           placeholder="Add a neighborhood, state, city, or country"
          //           type="text"
          //           className="border-2 p-2.5 rounded-lg border-[#cccccc] w-[45em]"
          //           name="place"
          //           id="place"
          //           value={place}
          //           onChange={(e) => setPlace(e.target.value)}
          //         />
          //       </div>
          //     </form>
          //   </div>
          // </Collapse>
          <Collapse
            className="flex items-center  xl:justify-center mt-4 lg:text-sm "
            open={open}>
            <div className="flex flex-col  xl:items-start xl:justify-center gap-5 lg:px-3 xl:px-48">
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
                    className="border-2 p-2.5 rounded-lg  border-[#cccccc] xl:w-[45em]"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    className="border-2 p-2.5 rounded-lg  border-[#cccccc] xl:w-[45em]"
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    className="border-2 p-2.5 rounded-lg  border-[#cccccc] xl:w-[45em]"
                    name="place"
                    id="place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </Collapse>
        )}
        {currentSection === 2 && (
          <Collapse open={open}>
            <div className="flex flex-col lg:px-5 xl:items-start justify-center gap-5 xl:px-48">
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
                  <div className="xl:h-[20em]">
                    <ReactQuill
                      className="xl:w-[45em] h-full"
                      value={content}
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
                      className="border-2 p-2.5 rounded-lg lg:w-full border-[#cccccc] xl:w-[45em]"
                      name="topics"
                      id="topics"
                      value={topics}
                      onChange={(e) => setTopics(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        )}
        {currentSection === 3 && (
          <Collapse open={open}>
            <div className="flex flex-col lg:px-5 xl:items-start justify-center gap-5 xl:px-48">
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
                  <div className="h-full relative xl:w-[45em]">
                    {editcampaign?.campaignimage ? (
                      // <img
                      //   className="object-cover rounded-xl"
                      //   ref={fileRef}
                      //   alt=""
                      // />
                      <div className="relative">
                        <img
                          className="xl:h-[27em] w-full rounded-xl object-cover"
                          src={campaignimage}
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
                      <div className="flex items-center  border-[#cccccc] border-2 border-dashed rounded-2xl xl:px-48 lg:w-full lg:px-5 lg:py-16 xl:py-28 flex-col gap-5">
                        <>
                          <figure>
                            <img
                              className="xl:w-52 lg:w-32"
                              src={photodrop}
                              alt=""
                            />
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
            <div className="flex flex-col lg:w-full xl:items-start xl:justify-center  gap-5 xl:px-48 lg:px-5">
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
              <form className="flex flex-col gap-5 lg:w-full  w-screen">
                <div className="flex lg:flex-col lg:gap-5 xl:gap-10 xl:items-center ">
                  <div className="flex lg:w-full flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Goal</span>
                      <span className="text-red">*</span>
                    </p>
                    <div className="lg:flex lg:items-center">
                      <span className="bg-[#fcf9f1]  p-3.5 rounded-l-lg">
                        <i class="fa-solid text-[#838f8c] fa-indian-rupee-sign"></i>
                      </span>
                      <input
                        placeholder="Amount of Goal"
                        type="text"
                        className="border-[1px] lg:w-full xl:w-[20em] p-2.5 rounded-r-lg border-[#cccccc]"
                        name="goalamount"
                        id="goalamount"
                        value={goalamount}
                        onChange={(e) => setGoalamount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Goal format</span>
                    </p>
                    <div>
                      <select
                        className="border-[1px] xl:w-[20em] lg:w-full  p-2.5 rounded-lg border-[#cccccc]"
                        value={goalformat}
                        onChange={(e) => setGoalformat(e.target.value)}
                        name="goalformat"
                        id="goalformat">
                        <option value="Amount">Amount</option>
                        <option value="Percentage">Percentage</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-col lg:gap-5 xl:gap-10 xl:items-center ">
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Amount</span>
                      <span className="text-red">*</span>
                    </p>
                    <div className="lg:flex lg:items-center">
                      <span className="bg-[#fcf9f1] p-3.5 rounded-l-lg">
                        <i class="fa-solid text-[#838f8c] fa-indian-rupee-sign"></i>
                      </span>
                      <input
                        placeholder="Amount of level"
                        type="text"
                        className="border-[1px] lg:w-full xl:w-[20em] p-2.5 rounded-r-lg border-[#cccccc]"
                        name="amountoflevel"
                        id="amountoflevel"
                        value={amountoflevel}
                        onChange={(e) => setAmountoflevel(e.target.value)}
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
                        className="border-[1px] lg:w-full xl:w-[20em]  p-2.5 rounded-lg border-[#cccccc]"
                        name="levelname"
                        id="levelname"
                        value={levelname}
                        onChange={(e) => setLevelname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-10   xl:items-center ">
                  <div className="flex lg:w-full flex-col gap-1">
                    <p>
                      <span className="font-bold text-sm">Description</span>
                    </p>
                    <div className="">
                      <textarea
                        placeholder="Description of level"
                        className="border-[1px] resize-none lg:w-full xl:w-[45em] p-2.5 rounded-lg text-black border-[#cccccc]"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-10  items-center ">
                  <div className="flex lg:w-full flex-col gap-1">
                    <p>
                      <span className="font-bold text-sm">Minimum</span>
                      <span className="text-red">*</span>
                    </p>
                    <div className=" lg:flex lg:items-center">
                      <span className="bg-[#fcf9f1] p-3.5 rounded-l-lg">
                        <i class="fa-solid text-[#838f8c] fa-indian-rupee-sign"></i>
                      </span>
                      <input
                        className="border-[1px] lg:w-full xl:w-[42.5em] p-2.5 rounded-r-lg border-[#cccccc]"
                        name="minimumgoal"
                        id="minimumgoal"
                        value={minimumgoal}
                        onChange={(e) => setMinimumgoal(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-col  lg:w-full  lg:justify-center  gap-10 xl:items-center ">
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-bold text-sm">Button label</span>
                    </p>
                    <div>
                      <select
                        className="border-[1px] xl:w-[21.5em] lg:w-full  p-2.5 rounded-lg border-[#cccccc]"
                        name="buttonlabel"
                        id="buttonlabel"
                        value={buttonlabel}
                        onChange={(e) => setButtonlabel(e.target.value)}>
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
                        className="border-[1px] xl:w-[21.5em] lg:w-full  p-2.5 rounded-lg border-[#cccccc]"
                        name="goalmet"
                        id="goalmet"
                        value={goalmet}
                        onChange={(e) => setGoalmet(e.target.value)}>
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
        <div className="flex xl:justify-end lg:w-full lg:px-3 lg:justify-center xl:px-44 py-6  xl:w-full">
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
              className="bg-lightteal lg:w-full px-4 rounded-lg py-2 text-white flex xl:items-center justify-center gap-12 ">
              <span className="font-bold"> Next </span>
              <span className="lg:hidden">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-lightteal lg:w-full px-4 rounded-lg py-2 text-white flex xl:items-center justify-center  gap-12 ">
              <span className="font-bold"> Finish </span>
              <span className="lg:hidden">
                <i class="fa-solid fa-paper-plane"></i>
              </span>
            </button>
          )}
        </div>
      </main>
    </>
  );
};
