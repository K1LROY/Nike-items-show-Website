/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/productHero.css";

export default function ProductHero() {
  return (
    <div class="slideshow-container" id="first">
      <div class="myslides">
        <h2>
          Air <br /> Jordon <br />
          <span>5 Retro</span>
        </h2>
        <img src="images/slider-1.png" class="p_img" alt="" />
        <div class="p_detail">
          <h3>
            Nike
            <i class="fa fa-star rate"></i>
            <i class="fa fa-star rate"></i>
            <i class="fa fa-star rate"></i>
            <i class="fa fa-star rate"></i>
            <i class="fa fa-star"></i>
          </h3>
          <h4>Air Jordon 5 Retro</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
            ducimus.
          </p>
          <ul>
            <li>
              <i class="fa fa-angle-right"></i>
              Lorem ipsum dolor sit amet
            </li>

            <li>
              <i class="fa fa-angle-right"></i>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <select>
            <option value="volvo">Size</option>
            <option value="saab">M</option>
            <option value="opel">L</option>
            <option value="audi">XL</option>
            <option value="audi">XXL</option>
          </select>

          <Link to="">Add to Cart</Link>
          <span>$190</span>
        </div>
      </div>

      <a class="prev" onclick="plusSlides(-1)">
        &#10094;
      </a>
      <a class="next" onclick="plusSlides(1)">
        &#10095;
      </a>
    </div>
  );
}
