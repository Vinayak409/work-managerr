"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600">
      <div className="flex p-5 justify-between">
        <div className="text-center flex-col justify-center">
          <h1 className="text-2xl">Welcome to work manager</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            dignissimos?
          </p>
        </div>
        <div className="text-center">
          <h1>Important Links</h1>
          <ul>
            <li>
              <a href="#!">Facebook</a>
            </li>
            <li>
              <a href="#!">Linkedin</a>
            </li>
            <li>
              <a href="#!">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
