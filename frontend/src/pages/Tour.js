
import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import '../styles/tour.css';
import { Container, Row, Col } from "reactstrap";
import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from "../utils/config.js";
import Footer from "../components/Footer/Footer.js";


function Tour()
{

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() =>
  {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0)
  }, [page, tourCount, tours]);

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          {/* <Row>
            <SearchBar />
          </Row> */}
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {
            loading && <h4 className="text-center pt-5">Loading......</h4>
          }
          {
            error && <h4 className="text-center pt-5">{error}</h4>
          }
          {
            !loading && !error && <Row>
              {
                tours?.map(tour => (
                  <Col lg='3' md='6' sm='6' key={tour._id} className="mb-4">
                    <TourCard tour={tour} />
                  </Col>
                ))
              }

              <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {
                    [...Array(pageCount).keys()].map(number => (
                      <span key={number} onClick={() => setPage(number)}
                        className={page === number ? 'active_page' : ''}
                      >
                        {number + 1}
                      </span>
                    ))
                  }
                </div>
              </Col>
            </Row>
          }
        </Container>
      </section>


      <section className="promotional-text-container">
        <div className="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 custom-height">
              <span class="great-deals">
                <i class="fa fa-child"></i>
                <i>Handpicked Activities</i>
              </span>
              <span class="promotional-text">
                Explore the best experiences in your favourite cities
              </span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 custom-height">
              <span class="over-many-activities">
                <i class="fa fa-money"></i>
                <i>Lowest Prices</i>
              </span>
              <span class="promotional-text">
                Guaranteed lowest prices. Anyday, everyday.
                {/* <span>No Strings attached</span>  */}
              </span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 custom-height">
              <span class="designed-for-you">
                <i class="fa fa-shield"></i>
                <i>100% Secure</i>
              </span>
              <span class="promotional-text">
                Every transaction is secure. <span>Your money is safe</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="tours-activites conatiner">
        <div class="additional-info">
          <center><i class="fa fa-angle-double-down"></i>
            <div class="additional-info-content">
              <h2 className="queries">What is TravelWorld Tours and Activities?</h2>
              <p>Are you one of those who want to see it all and do it all on your vacation? Here’s something that can help you to make most of your vacation!</p>
              <p>However thoroughly you research about your destination, there are some local experiences that you totally overlook just because you weren’t aware of them.</p>
              <p>TravelWorld brings to you, handpicked tours and activities for across 1200 cities around the world, that will totally elevate your experience! </p>
              <p>Right from local transfers, sightseeing tours, hop on hop off tours, excursions, guided tours to special activities like hot air ballooning and SCUBA, TravelWorld tours satiates the need of any traveller in any part of the world. </p>
              <h2 className="queries">Why Book Tours and Activities on Travel?</h2>
              <p>It’s fairly simple; to get acquainted to a destination to the fullest, to explore a city like a local, to get the quirkiest experiences offered in the place or simply just to save time! While our speciality tours and adventure tours cater to travellers who want to explore more on their trip, the skip-the-line tickets and guided tours are for anyone who wants to simply save their precious vacation time. </p>
              <h2 className="queries">What Makes Us Special?</h2>
              <p>Unlike other tour providing websites, we handpick our tours and collaborate with local tour operators in the nook and corners of the world to make sure you get 100% authentic experience on your travels. We offer transparent pricing and the lowest rates available without comprising on the experience. </p>
              <p>With TravelWorld, you leave the hassle of finding a trustworthy tour operator in a totally foreign land. With TravelWorld, you can book a DIY tour online! Choose from the city tours, day tours, comprehensive holiday tours, special access tickets and passes and adrenaline pumping activities and adventure tours in any top destinations in the world.</p>
              <p>Not just that, you can also read the real reviews by travellers all across the world. </p>
            </div>
          </center>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="toures-activites-heading-wrapper">
                <h2 className="top-tours">Trending Tour Locations</h2>
              </div>
              <div class="top-dest-list">
                <div class="pop-dest-continent">
                  <ul class="pull-left continent-title">
                    <li >Asia <i class="fa fa-caret-down"></i></li>
                    <li >Europe <i class="fa fa-caret-down"></i></li>
                    <li >South America <i class="fa fa-caret-down"></i></li>
                    <li >Oceania <i class="fa fa-caret-down"></i></li>
                    <li >North America <i class="fa fa-caret-down"></i></li>
                    <li >Africa <i class="fa fa-caret-down"></i></li>
                  </ul>
                </div>

                <div class="activities-view-wrapper">
                  <ul class="activity-lisitng">
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="Paris Tours" href="https://www.TravelWorld.com/tours/paris-france" className="tour">
                            <img loading="lazy" nopin="nopin" src="https://ak.jogurucdn.com/media/image/p25/place-2016-05-2-7-Paris1416d482fe9b6a703bae74cea9b8dd4e.jpg" alt="Paris Tours" onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';" class="tour-dest-cover" width="40%" height="40%" />
                            <span class="dest-tour-count no-underline">
                              <span>2449  </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Paris Tours" href="https://www.TravelWorld.com/tours/paris-france">
                          <label class="tour-dest-name">
                            Paris										</label>
                        </a>
                      </div>
                    </li>
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="Berlin Tours" href="https://www.TravelWorld.com/tours/berlin-germany" className="tour">
                            <img loading="lazy" nopin="nopin" src="https://ak.jogurucdn.com/media/image/p25/place-2017-04-13-10-Berlin71f342a9303828d17e2df3a89ca731eb.jpg" alt="Berlin Tours" onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';" class="tour-dest-cover" width="40%" height="40%" />
                            <span class="dest-tour-count">
                              <span>604  </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Berlin Tours" href="https://www.TravelWorld.com/tours/berlin-germany">
                          <label class="tour-dest-name">
                            Berlin										</label>
                        </a>
                      </div>
                    </li>
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="Tokyo Tours" href="https://www.TravelWorld.com/tours/tokyo-japan" className="tour">
                            <img loading="lazy"
                              nopin="nopin"
                              src="https://ak.jogurucdn.com/media/image/p25/place-2014-12-16-11-tokyo30efd83e32956b742b89cf7e01016a5c.jpg"
                              alt="Tokyo Tours"
                              onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';"
                              class="tour-dest-cover"
                              width="40%"
                              height="40%"
                            />
                            <span class="dest-tour-count">
                              <span>671  </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Paris Tours" href="https://www.TravelWorld.com/tours/tokyo-japan">
                          <label class="tour-dest-name">
                            Tokyo									</label>
                        </a>
                      </div>
                    </li>
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="Rome Tours" href="https://www.TravelWorld.com/tours/rome-italy" className="tour">
                            <img loading="lazy" nopin="nopin" src="https://ak.jogurucdn.com/media/image/p25/place-2016-05-2-7-Rome9d0e24f9716aa0860f90b64e954609a8.jpg" alt="Rome Tours" onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';" class="tour-dest-cover" width="40%" height="40%" />
                            <span class="dest-tour-count">
                              <span>4926 </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Paris Tours" href="https://www.TravelWorld.com/tours/rome-italy">
                          <label class="tour-dest-name">
                            Rome								</label>
                        </a>
                      </div>
                    </li>
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="Miami Tours" href="https://www.TravelWorld.com/tours/miami-united-states" className="tour">
                            <img loading="lazy" nopin="nopin" src="https://ak.jogurucdn.com/media/image/p25/place-2014-10-01-14-cd09e809b793ba2908a63d6c72731a39.jpg" alt="Miami Tours" onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';" class="tour-dest-cover" width="40%" height="40%" />
                            <span class="dest-tour-count">
                              <span>728 </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Miami Tours" href="https://www.TravelWorld.com/tours/miami-united-states">
                          <label class="tour-dest-name">
                            Miami								</label>
                        </a>
                      </div>
                    </li>
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="Washington D. C. Tours" href="https://www.TravelWorld.com/tours/washington-d-c-united-states" className="tour">
                            <img loading="lazy" nopin="nopin" src="https://ak.jogurucdn.com/media/image/p25/place-2014-10-21-10-washingtondce819623ba5153fe9075ec4f4059e5bbc.jpg" alt="Washington D. C. Tours" onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';" class="tour-dest-cover" width="40%" height="40%" />
                            <span class="dest-tour-count">
                              <span>452 </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Paris Tours" href="https://www.TravelWorld.com/tours/washington-d-c-united-state">
                          <label class="tour-dest-name">
                            Washington D. C.								</label>
                        </a>
                      </div>
                    </li>
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="London Tours" href="https://www.TravelWorld.com/tours/london-united-kingdom" className="tour">
                            <img loading="lazy" nopin="nopin" src="https://ak.jogurucdn.com/media/image/p25/place-2016-05-2-7-Londond7d6228ac289d1730b68aeaa656713fd.jpg" alt="London Tours" onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';" class="tour-dest-cover" width="40%" height="40%" />
                            <span class="dest-tour-count">
                              <span>2667 </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Paris Tours" href="https://www.TravelWorld.com/tours/london-united-kingdom">
                          <label class="tour-dest-name">
                            London								</label>
                        </a>
                      </div>
                    </li>
                    <li class="activity-lisitng-item">
                      <div class="tours-dest-cont">
                        <div class="tour-dest-img-wrap">
                          <a title="Seattle Tours" href="https://www.TravelWorld.com/tours/seattle-united-states" className="tour">
                            <img loading="lazy" nopin="nopin" src="https://ak.jogurucdn.com/media/image/p25/place-2014-10-21-11-seattle16794a1ebbb442d52b2b454f4e8c42bb.jpg" alt="Seattle Tours" onerror="this.src='https://ak.jogurucdn.com/resource_new/img/tours/tours-default.webp';" class="tour-dest-cover" width="40%" height="40%" />
                            <span class="dest-tour-count">
                              <span>299 </span>
                              <small>Tours &amp; Activities</small>
                            </span>
                          </a>
                        </div>
                        <a class="tour-dest-details" title="Paris Tours" href="https://www.TravelWorld.com/tours/seattle-united-states">
                          <label class="tour-dest-name">
                            Seattle									</label>
                        </a>
                      </div>
                    </li>

                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section >


      <Footer />
      

    </>
  );
}

export default Tour;