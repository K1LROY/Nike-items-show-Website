import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/contents/service.css";
import WOW from "wowjs";

export default function Service() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div class="service_section" id="second">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h4 class="dark wow slideInDown" data-wow-duration="2s">
              SERVICE
            </h4>
            <h2 class="sec_title wow bounceInLeft" data-wow-duration="2.2s">
              WE DESIGN DIGITAL PRODUCTS THAT HELP GROW BUSINESSES.
            </h2>

            <p class="color_aaa">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              distinctio vero fugit pariatur atque sequi odit accusantium
              suscipit voluptatibus, doloremque.
            </p>
          </div>
        </div>

        <div
          class="row custom_column wow slideInRight"
          data-wow-duration="2.5s"
        >
          <div class="col-lg-3 col-sm-4 col-md-3">
            <Link to="#" class="box text-center">
              <div class="flipper">
                <div class="front">
                  <i class="fa fa-check-square-o"></i>
                  <h3>Website Devlopment</h3>
                </div>

                <div class="back">
                  <i class="fa fa-check-square-o"></i>
                  <h3>Website Devlopment</h3>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-lg-3 col-sm-4 col-md-3">
            <Link to="#" class="box text-center">
              <div class="flipper">
                <div class="front">
                  <i class="fa fa-diamond"></i>
                  <h3>Graphic Designing</h3>
                </div>

                <div class="back">
                  <i class="fa fa-diamond"></i>
                  <h3>Graphic Designing</h3>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-lg-3 col-sm-4 col-md-3">
            <Link to="#" class="box text-center">
              <div class="flipper">
                <div class="front">
                  <i class="fa fa-clock-o"></i>
                  <h3>Digital Marketing</h3>
                </div>

                <div class="back">
                  <i class="fa fa-clock-o"></i>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-lg-3 col-sm-4 col-md-3">
            <Link to="#" class="box text-center">
              <div class="flipper">
                <div class="front">
                  <i class="fa fa-paper-plane"></i>
                  <h3>Seo &amp; Content Writing</h3>
                </div>

                <div class="back">
                  <i class="fa fa-paper-plane"></i>
                  <h3>Seo &amp; Content Writing</h3>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-lg-3 col-sm-4 col-md-3">
            <Link to="#" class="box text-center">
              <div class="flipper">
                <div class="front">
                  <i class="fa fa-podcast"></i>
                  <h3>App Development</h3>
                </div>

                <div class="back">
                  <i class="fa fa-podcast"></i>
                  <h3>App Development</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
