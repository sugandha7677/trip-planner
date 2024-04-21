import './../styles/common-section.css';
import React, { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../utils/config.js';
import { Link, useNavigate } from 'react-router-dom';


import { Container, Row, Col } from 'reactstrap';

function CommonSection()
{

  const locationRef = useRef('');
  // const startDateRef = useRef('');
  // const endDateRef = useRef('');
  
  const navigate = useNavigate();

  const searchHandler = async () =>
  {
    const location = locationRef.current.valueOf;
    // const startDate = startDateRef.current.valueOf;
    // const endDate = endDateRef.current.valueOf;
    

    if (location === '')
    {
      return alert("All fields are required ! ");
    }

    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}`)
    if (!res.ok) alert('something went wrong')

    const result = await res.json();

    navigate(`/tours/search?city=${location}`, { state: result.data });
  }
  return (

      <>
      <section className='common_section'>
        <Container>
          <Row>
            <Col lg='12'>
              <div class="js-hotel-spl-autocomplete-box">
                <div class="search-box for-tours">
                    <h1 >Book Tours and Activities for your next trip!</h1>
                    <h2 class="sub-hd">TripHobo - Trips, Tales &amp; Trust</h2>
                    <form class="activity-form form-inline" id="js-spl-autocomplete-form">
                      <center><input id="spl-autocomplete-search" 
                      autocomplete="off" 
                      type="search" 
                      class="form-control search-activity"
                      placeholder="Search for cities, attractions and things to do"
                      ref={locationRef}
                    /></center>
                      <ul></ul>
                      </form>
                  </div>
                    
                    <button class="search_button" type ="submit" onClick={searchHandler}>
                  <Link to='/tours'>Search</Link></button>

                  </div>
                    {/* <h1>{title}</h1> */}

                  </Col>
                  </Row>
                </Container>
              </section>
            </>
            );
}

export default CommonSection;