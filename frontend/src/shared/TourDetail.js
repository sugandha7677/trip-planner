 import React, { useRef } from 'react';
import { Col, Form, FormGroup } from 'reactstrap';
import '../styles/TourDetail.css'


function TourDetail() {
    return(
        <>  <div>

            <header className='screen-header'>
                 <div className='screen-title'>
                    Build Your Own Customized Trip Plan
                 </div>

                 <div className='screen-caption'>
                    "Create your travel itinerary. Book your accommodation, tours & flights as a package online."
                 </div>
            </header>

            <section className='screen-content'>
                <ul className='added-list js_ul_added_cities'></ul>
                <div className='autocomplete-box as-autocomplete'>
                    <div className='drop-card as-dropdown'>

                    </div>

                </div>
            </section>

        </div>
        </>
    );
}