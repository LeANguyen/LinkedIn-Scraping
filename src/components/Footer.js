import React from "react";
// import "./Footer.css";
import SocialMediaButton from "./SocialMediaButton";
const Footer = () => {
  return (
    <footer className="page-footer py-4 bg-dark text-white">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <h1 className="text-uppercase">Help</h1>

            <ul className="list-unstyled">
              <li>
                <a className="text-white" href="#!">
                  Delivery Information
                </a>
              </li>
              <li>
                <a className="text-white" href="#!">
                  Refunds & Returns
                </a>
              </li>
              <li>
                <a className="text-white" href="#!">
                  Exchanges
                </a>
              </li>
              <li>
                <a className="text-white" href="#!">
                  Discount
                </a>
              </li>
              <li>
                <a className="text-white" href="#!">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-white" href="#!">
                  Terms Of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-12">
                <h1 className="text-uppercase">Business</h1>
                <li className="d-flex justify-content-between">
                  <strong className="text-white">
                    <i className="fa fa-fw fa-clock-o"></i>Business Hour:
                  </strong>
                  <p>09:00 AM - 09:00 PM</p>
                </li>
                <li className="d-flex justify-content-between">
                  <strong className="text-white">
                    <i className="fa fa-fw  fa-phone"></i>Contact Number:
                  </strong>
                  <p>{"(08)730898996"}</p>
                </li>
                <li className="d-flex justify-content-between">
                  <strong className="text-white">
                    <i className="fa fa-fw fa-map-marker"></i>Shop Address:
                  </strong>
                  <p>702 Nguyễn Văn Linh, Tân Hưng, Quận 7, TP.HCM</p>
                </li>
                <strong className="text-white">
                  Follow us on social media:
                </strong>
              </div>

              <div className="col-12">
                <SocialMediaButton
                  _iconName={"facebook"}
                  _href="https://www.facebook.com/profile.php?id=100013080886155"
                ></SocialMediaButton>
                <SocialMediaButton _iconName={"twitter"}></SocialMediaButton>
                <SocialMediaButton _iconName={"instagram"}></SocialMediaButton>
                <SocialMediaButton _iconName={"pinterest"}></SocialMediaButton>
                <SocialMediaButton _iconName={"youtube"}></SocialMediaButton>
              </div>
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
