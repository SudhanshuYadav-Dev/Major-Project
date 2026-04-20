import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            MetaBlog is your ultimate digital canvas. Experience seamless storytelling with a sleek, high-performance platform designed to turn your boldest ideas into captivating global narratives.
          </p>
          <p>
            <span>Emails:</span>shudhanshuyadav48@gmail.com - suhani25006@gmail.com
          </p>
         
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="logo">META <span>BLOG</span></div>
        <div className="links">
          <Link to={"https://www.linkedin.com/in/sudhanshu-yadav-248676344/"} target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link to={"https://www.linkedin.com/in/suhani-6b745928b/"} target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link to={"https://www.instagram.com/aura.coding/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/Suhani-2006"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://github.com/SudhanshuYadav-Dev"} target="_blank">
            <FaGitSquare />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
