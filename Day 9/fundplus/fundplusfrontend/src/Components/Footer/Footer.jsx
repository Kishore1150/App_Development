import React from "react";
import logo from "../../Assets/Images/logo.svg";
import expresscard from "../../Assets/Images/Footer/expresscard.svg";
import mastercard from "../../Assets/Images/Footer/mastercard.svg";
import paypal from "../../Assets/Images/Footer/paypal.svg";
import visa from "../../Assets/Images/Footer/visa.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className=" bg-darkteal h-full max-w-[100%]  bottom-0  text-white ">
        <section className="grid xl:grid-cols-4 lg:grid-rows-4 items-center gap-10  p-10  ">
          <div className="">
            <ul className="text-white flex flex-col gap-5  ">
              <li className="">
                <button className="flex items-center gap-3">
                  <img width="35" src={logo} alt="" />
                </button>
              </li>
              <li>
                <span>
                  We appreciate your enthusiastic support for our cause, even
                  amidst unforeseen challenges.
                </span>
              </li>
              <li>
                <button href="">
                  <i class="fa-solid fa-phone"></i> +91 9626209856
                </button>
              </li>
              <li>
                <button href="">
                  <i class="fa-solid fa-envelope"></i> fundplus2023@gmail.com
                </button>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl">Page</h1>
              <li>
                <button onClick={() => navigate("/about")}>About us</button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")}>Contact us</button>
              </li>
              <li>
                <button>News and Blog</button>
              </li>
              <li>
                <button>Meet a team</button>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-1.5">
              <h1 className="font-bold text-2xl ">Link</h1>
              <li>
                <button>Sign up</button>
              </li>
              <li>
                <button>Sign in</button>
              </li>
              <li>
                <button onClick={() => navigate("/privacypolicy")}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button>Terms</button>
              </li>
              <li>
                <button>Cookie</button>
              </li>
              <li>
                <button>Support</button>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl">Global Site</h1>
              <li>
                <button>India</button>
              </li>
              <li>
                <button>California</button>
              </li>
              <li>
                <button>Indonesia</button>
              </li>
              <li>
                <button>Canada</button>
              </li>
              <li>
                <button>Malaysia</button>
              </li>
            </ul>
          </div>
        </section>

        <section className="xl:flex lg:flex lg:flex-col lg:p-5 xl:items-center justify-between ">
          <div className="flex flex-col gap-5 mt-5 xl:ml-10">
            <div>
              <h1 className="font-bold text-2xl">Payment & Security</h1>
            </div>
            <div className="flex gap-4">
              <img src={paypal} width="90" alt="" />
              <img src={visa} width="50" alt="" />
              <img src={mastercard} width="50" alt="" />
              <img src={expresscard} width="50" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5  xl:mr-20">
            <div>
              <h1 className="font-bold text-2xl">Follow us on</h1>
            </div>
            <div className="flex gap-4 text-3xl text-white">
              <a
                href="https://www.facebook.com/profile.php?id=61551700172033&mibextid=ZbWKwL"
                target="_blank">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/fundplus15/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/Fundplus380205" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kishore-kumar-530504225/"
                target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="flex mt-10 items-center border-t-2  border-bordergray divide-x-10 p-8 justify-between ">
          <div className="">
            <p>Copyrights ©2023 Fundraiser. Build by Fundplus.</p>
          </div>
          <div className="flex cursor-pointer gap-3 mr-10">
            <p onClick={() => navigate("/privacypolicy")}>Privacy policy</p>
            <p onClick={() => navigate("/termsandconditions")}>
              Terms and conditions
            </p>
            <p>Refund policy</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
