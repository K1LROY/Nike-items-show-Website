import React, { useEffect } from "react";
import "../../styles/contents/features.css";
import WOW from "wowjs";

export default function Features() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div class="tabs" id="third">
      <div class="container wow slideInUp ">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">FEATURES</h2>

            <div class="p-heading p-large">
              Theme was designed based on input from personal development
              coaches and popular trainers so it offers all
            </div>
          </div>
        </div>
        <div class="row">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="nav-tab-1"
                data-toggle="tab"
                href="#tab-1"
              >
                <i class="fa fa-cog"></i>
                CONFIGURING
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="nav-tab-2"
                data-toggle="tab"
                href="#tab-2"
              >
                <i class="fa fa-binoculars"></i>
                TRACKING
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="nav-tab-3"
                data-toggle="tab"
                href="#tab-3"
              >
                <i class="fa fa-search"></i>
                MONITORING
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane fade show active" id="tab-1">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="card left-pane first">
                      <div class="card-body">
                        <div class="text-wrapper">
                          <h4 class="card-title">Goal Setting</h4>
                          <p>
                            Like any self improving process, everything starts
                            with setting your goals and committing to them
                          </p>
                        </div>
                        <div class="card-icon">
                          <i class="fa fa-diamond"></i>
                        </div>
                      </div>
                    </div>

                    <div class="card left-pane">
                      <div class="card-body">
                        <div class="text-wrapper">
                          <h4 class="card-title">Visual Editor</h4>
                          <p>
                            Theme provides a well designed and ergonomic visual
                            editor for you to edit your notes and input data
                          </p>
                        </div>
                        <div class="card-icon">
                          <i class="fa fa-check-square-o"></i>
                        </div>
                      </div>
                    </div>

                    <div class="card left-pane">
                      <div class="card-body">
                        <div class="text-wrapper">
                          <h4 class="card-title">Refined Options</h4>
                          <p>
                            Each option packaged in the app's menus is provided
                            in order to improve your personal development status
                          </p>
                        </div>
                        <div class="card-icon">
                          <i class="fa fa-clock-o"></i>
                        </div>
                      </div>
                    </div>

                    <div class="card left-pane">
                      <div class="card-body">
                        <div class="text-wrapper">
                          <h4 class="card-title">Retina Ready</h4>
                          <p>
                            Each option packaged in the app's menus is provided
                            in order to improve your personal
                          </p>
                        </div>
                        <div class="card-icon">
                          <i class="fa fa-podcast"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <img
                      src="images/product-600x1200-2.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="col-lg-4">
                    <div class="card right-pane first">
                      <div class="card-body">
                        <div class="card-icon">
                          <i class="fa fa-calendar"></i>
                        </div>
                        <div class="text-wrapper">
                          <h4 class="card-title">Calendar Input</h4>
                          <p>
                            Schedule your appointments, meetings and periodical
                            evaluations using the provided in-app calendar
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="card right-pane">
                      <div class="card-body">
                        <div class="card-icon">
                          <i class="fa fa-bookmark"></i>
                        </div>
                        <div class="text-wrapper">
                          <h4 class="card-title">Easy Reading</h4>
                          <p>
                            Reading focus mode for long form articles, ebooks
                            and other materials which involve large text areas
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="card right-pane">
                      <div class="card-body">
                        <div class="card-icon">
                          <i class="fa fa-podcast"></i>
                        </div>
                        <div class="text-wrapper">
                          <h4 class="card-title">Good Foundation</h4>
                          <p>
                            Get a solid foundation for your self development
                            efforts. Try Theme mobile app for any mobile
                            platform
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="card right-pane">
                      <div class="card-body">
                        <div class="card-icon">
                          <i class="fa fa-heart"></i>
                        </div>
                        <div class="text-wrapper">
                          <h4 class="card-title">Responsive</h4>
                          <p>
                            Get a solid foundation for your self development
                            efforts. Try Theme mobile app
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="tab-2">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <img
                      src="images/product-600x1200-3.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>

                  <div class="col-md-8">
                    <div class="text-area">
                      <h3>Track Result Based on your</h3>

                      <p>
                        After you've configured the app and settled on the data
                        gathering techniques you can not start the information
                        trackers and start collecting those interesting details.
                        You can always change them.
                      </p>
                    </div>

                    <div class="icon-cards-area">
                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-cube"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Good Foundation</h4>
                          <p>
                            Get a solid foundation for your self development
                            efforts. Try Theme mobile app for any mobile
                            platform
                          </p>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-bookmark"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Easy Reading</h4>
                          <p>
                            Get a solid foundation for your self development
                            efforts. Try Theme mobile app for any mobile
                            platform
                          </p>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-calendar"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Calendar Input</h4>
                          <p>
                            Get a solid foundation for your self development
                            efforts. Try Theme mobile app for any mobile
                            platform
                          </p>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-heart"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Responsive</h4>
                          <p>
                            Get a solid foundation for your self development
                            efforts. Try Theme mobile app for any mobile
                            platform
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="tab-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-8">
                    <div class="icon-cards-area">
                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-calendar"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Calendar Input</h4>
                          <p>
                            Schedule your appointments, meetings and periodical
                            evaluations using the provided in-app calendar
                            option
                          </p>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-file"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Visual Editor</h4>
                          <p>
                            Schedule your appointments, meetings and periodical
                            evaluations using the provided in-app calendar
                            option
                          </p>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-cube"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Good Foundation</h4>
                          <p>
                            Schedule your appointments, meetings and periodical
                            evaluations using the provided in-app calendar
                            option
                          </p>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-icon">
                          <i class="fa fa-bookmark"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Easy Reading</h4>
                          <p>
                            Schedule your appointments, meetings and periodical
                            evaluations using the provided in-app calendar
                            option
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="text-area">
                      <h3>Montioring Tool Evaluation</h3>
                      <p>
                        Monitor the evolution of your finances and health state
                        using tools integrated in Theme. The generated real time
                        reports can be filtered based on any desired criteria.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <img
                      src="images/product-600x1200-4.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
