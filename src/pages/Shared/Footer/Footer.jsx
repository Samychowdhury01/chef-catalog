import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-orange-100 text-base-content">
        <div>
          <p className="text-2xl font-extrabold">
            <span className="text-orange-500 mr-2">Chef's</span>
            <span>Catalog</span>
          </p>
          <p>
            Unleash your inner chef with Chef's Catalog - <br /> the ultimate
            destination for kitchen inspiration and <br /> top-quality cookware
          </p>
          <div>
            <p>Copyright © 2023 - All right reserved by CHEF'S CATALOG</p>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn-solid absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
