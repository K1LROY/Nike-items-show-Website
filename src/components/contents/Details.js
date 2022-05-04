import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/contents/details.css";
import WOW from "wowjs";

export default function Details() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div>
      <div id="details" class="basic-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 wow bounceInLeft" data-wow-duration="2.2s">
              <img src="images/details-1-iphone.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 wow ">
              <div class="text-container">
                <h3>RETINA DISPLAY</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus et voluptatem laborum hic, similique minima maxime,
                  sit ipsa quidem praesentium consectetur accusamus quisquam.
                  Vitae aspernatur delectus nihil a placeat ipsa distinctio,
                  quibusdam tenetur dolores eius sunt dolor possimus recusandae
                  iure numquam labore maxime id earum adipisci rerum, commodi
                  quo natus! Aperiam dolore, corporis consectetur ut
                  exercitationem, laborum blanditiis sed assumenda soluta
                  aliquid natus. Quibusdam autem mollitia delectus? Omnis,
                  accusamus saepe.
                </p>

                <Link to="#" class="btn-solid-reg  mt-4">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="basic-3" id="fifth">
        <div class="second">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 wow">
                <div class="text-container">
                  <h3>RESPONSIVE MATTERS</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus et voluptatem laborum hic, similique minima maxime,
                    sit ipsa quidem praesentium consectetur accusamus quisquam.
                    Vitae aspernatur delectus nihil a placeat ipsa distinctio,
                    quibusdam tenetur dolores eius sunt dolor possimus
                    recusandae iure numquam labore maxime id earum adipisci
                    rerum, commodi quo natus! Aperiam dolore, corporis
                    consectetur ut exercitationem, laborum blanditiis sed
                    assumenda soluta aliquid natus. Quibusdam autem mollitia
                    delectus? Omnis, accusamus saepe.
                  </p>

                  <Link to="#" class="btn-solid-reg  mt-4">
                    Read more
                  </Link>
                </div>
              </div>
              <div class="col-lg-6 wow bounceInRight" data-wow-duration="2.2s">
                <img
                  src="images/details-2-iphone.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-setting" id="para">
        <div class="container">
          <div class="row wow fadeInLeft">
            <div class="col-lg-12 text-center">
              <p class="color-white font-18">
                Unleash your creative potential with theme
              </p>
              <h2>LOOKING FOR EXCLUSIVE DIGITAL SERVICES ?</h2>
              <Link to="#" class="text-white btn">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
