import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";


// import contact from "../../Assets/images/contact/contact.svg";

const ContactSection2 = () => {

    function sendEmail(e)
    {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_cwyco8v",
          "template_c7jnu0d",
          e.target,
          "Kdtzo2HAJyNk2AcFa"
        )
        .then((res) => {
          // console.log(res);
          toast.success("Email Sent Successfully");
        });
    }


  return (
    <>
      <main className="xl:h-[42rem]">
        <section className="flex lg:flex-col bg-backgroundwhite gap-5 items-end justify-center ">
          <figure className="h-full">
            <img
              src="https://res.cloudinary.com/dalynypf0/image/upload/v1695494200/contact_u6lpdi.svg"
              width="600"
              alt="ready for vacation?"
            />
          </figure>
          <form
            onSubmit={sendEmail}
            className="xl:w-[35rem] lg:p-5 bg-white xl:drop-shadow-xl  text-black xl:p-8 rounded-3xl">
            <div className="flex flex-col gap-7">
              <h1 className="font-bold  font-poppins text-left   text-4xl">
                Send us message
              </h1>
              <div className="flex lg:flex-col gap-8 ">
                <div className="flex flex-col gap-1">
                  <p className="text-lightgray">
                    Your name <span>*</span>
                  </p>
                  <input
                    className=" form-input rounded-md
                     border-bordergray text-black xl:w-[14rem]"
                    type="text"
                    name="user_name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lightgray">
                    Email address <span>*</span>
                  </p>
                  <input
                    className=" form-input rounded-md border-bordergray xl:w-[14rem]"
                    type="email"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lightgray">
                  Mobile Number <span>*</span>
                </p>
                <input
                  type="text"
                  maxLength="10"
                  name="user_mobilenumber"
                  className=" form-input rounded-md border-bordergray xl:w-[30rem]"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lightgray">
                  Message <span>*</span>
                </p>
                <textarea
                  className="form-textarea resize-none rounded-md border-bordergray lg:h-[5em] xl:h-[5.5rem] xl:w-[30rem]"
                  type=""
                  name="message"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  className="form-checkbox rounded-[5px] bg-lightgray1 border-none "
                  type="checkbox"
                  name=""
                  value=""
                  required
                />
                <p className="text-lightgray text-sm">
                  By submitting this form you agree to our terms and conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-black text-white  mt-5 px-4 py-2 font-semibold  rounded-lg">
                Send Message
              </button>
              <input
                type="reset"
                value="Clear"
                className="bg-black text-white  mt-5 px-4 py-2 font-semibold  rounded-lg"
              />
            </div>
          </form>
          <Toaster />
        </section>
      </main>
    </>
  );
};

export default ContactSection2;
