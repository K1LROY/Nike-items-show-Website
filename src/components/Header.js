import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import $ from "jquery";

$(window).scroll(function () {
  var scrl = $(window).scrollTop();
  if (scrl < 60) {
    $(".header-1").removeClass("fixedbar");
  } else {
    $(".header-1").addClass("fixedbar");
  }
});

export default function Header() {
  return (
    <div class="header-1" id="header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2 col-sm-3 col-md-3">
            <div class="logo">
              <Link to="">
                <img src="images/logo.png" alt="" />
              </Link>
            </div>
          </div>

          <div class="col-lg-8 col-sm-7 col-md-7 top">
            <nav class="navbar navbar-expand-lg mainmenu text-center">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#cool"
              >
                <span class="navbar-toggler-icon">
                  <i class="fa fa-bars"></i>
                </span>
              </button>

              <div class="collapse navbar-collapse" id="cool">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="#first" class="nav-link smooth-scroll">
                      HOME
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="#second" class="nav-link smooth-scroll">
                      ABOUT
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="#third" class="nav-link smooth-scroll">
                      SERVICES
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="#details" class="nav-link smooth-scroll">
                      PORTFOLIO
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="#fifth" class="nav-link smooth-scroll">
                      BLOG
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="#para" class="nav-link smooth-scroll">
                      DOWNLOAD
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="#quote" class="nav-link smooth-scroll">
                      TEAM
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="#foot" class="nav-link smooth-scroll">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="col-lg-2 col-sm-2 col-md-2 right-search">
            <div class="navigator text-right">
              <Link to="" class="search">
                <i class="fa fa-search"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
