import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import WOW from "wowjs";

export default function Footer() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div class="footer theme-bg-primary wow rollIn" id="foot">
      <div class="container py-5 mb-3 col-md-offset-2">
        <div class="row" style={{ marginLeft: "50px" }}>
          <div class="footer-col col-lg-3">
            <h4 class="col-heading">Highlights</h4>
            <ul>
              <li>
                <Link to="">Our Story</Link>
              </li>
              <li>
                <Link to="">Pricing</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
              <li>
                <Link to="">Jobs</Link>
              </li>
            </ul>
          </div>

          <div class="footer-col col-lg-3">
            <h4 class="col-heading">Resources</h4>
            <ul>
              <li>
                <Link to="">FAQs</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Support</Link>
              </li>
              <li>
                <Link to="">Developer APIs</Link>
              </li>
            </ul>
          </div>

          <div class="footer-col col-lg-3">
            <h4 class="col-heading">legal</h4>
            <ul>
              <li>
                <Link to="">Privacy</Link>
              </li>
              <li>
                <Link to="">Terms of Services</Link>
              </li>
              <li>
                <Link to="">Security</Link>
              </li>
            </ul>
          </div>

          <div class="footer-col col-lg-3">
            <h4 class="col-heading">Stay Connected</h4>
            <ul class="social-list">
              <li class="list-inline-item">
                <Link to="">
                  <i class="fa fa-instagram fa-fw"></i>
                </Link>
              </li>

              <li class="list-inline-item">
                <Link to="">
                  <i class="fa fa-twitter fa-fw"></i>
                </Link>
              </li>
              <li class="list-inline-item">
                <Link to="">
                  <i class="fa fa-facebook fa-fw"></i>
                </Link>
              </li>
            </ul>

            <div class="mb-2">Bankok Thailand</div>
            <div>
              <Link to="">Kwandee1992@gmail.com</Link>
            </div>
          </div>
        </div>
      </div>

      <div class="f">
        <div class="container text-center">
          <h3 class="mb-3">GET THE APP</h3>
          <div class="section-intro mb-4 mx-auto">
            Download our apps now. lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis.
          </div>

          <ul class="d-inline-block">
            <li class="list-inline-item mr-3">
              <Link to="">
                <img class="ios" src="images/appstore-android.svg" alt="" />
              </Link>
            </li>

            <li class="list-inline-item">
              <Link to="">
                <img class="android" src="images/appstore-apple.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom text-center pb-5">
        <small class="copyright">
          Designed with
          <i class="fa fa-heart" style={{ color: "red" }}></i>
          by
          <Link to="">Supatarachai Kwandee </Link>
          for developers
        </small>
      </div>
    </div>
  );
}
