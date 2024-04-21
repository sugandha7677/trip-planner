import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, FormGroup } from 'reactstrap';
import '../styles/search-bar.css';
import Myselect from './Myselect.js';
import Select from 'react-select';
import MakePlanButton from './MakePlanButton.js';

import { BASE_URL } from './../utils/config.js';
import { useNavigate } from 'react-router-dom';


const customStyles = {
    option: provided => ({
        ...provided,
        // color: 'red',
        // height:'30px',
        // fontSize: 14,
        // borderRadius: '2px',
        // color: '#172B4D',
        // backgroundColor: state.isSelected ? 'blue' : 'white',
    })
}

const currencies = [
    {value:"Arab Emirates Dirham", label: "AED"},
    { value: "Australian Dollar", label: "AUD" },
    { value: "Canadian Dollar", label: "CAD" },
    {value: "Euro", label: "EUR"},
    {value: "Japanese Yen", label:"JPY"},
    {value: "Korean Won", label:"KRW"},
    { value: "New Zealand Dollar", label: "NZD" },
    {value:"Pound Sterling", label:"GBP"}, 
    { value: "Russian Ruble", label: "RUB" },
    {value:"Singapore Dollar", label: "SGD"},
    { value: "US Dollar", label: "USD" },

]

const options = [
    { value: "Adventure", label: "Adventure" },
    { value: "Nature", label: "Nature" },
    { value: "Religious Places", label: "Religious Places" },
    { value: "Relaxing", label: "Relaxing" },
    { value: "Hermitage", label: "Hermitage" },
    { value: "City Tour", label: "City Tour" },

]

function SearchBar()
{

    // function changeInputType(type) {
    //     document.getElementById('date').type = type;
    // }



    const [inputType, setInputType] = useState('text')


    const handleFocus = () =>
    {
        setInputType('date');
    }
    // useEffect(() =>
    // {
    //     const input = document.getElementById('startDateInput');
    //     input.removeAttribute('placeholder');
    // }, []);

    const handleBlur = () =>
    {
        setInputType('text');
    }


    const locationRef = useRef('');
    const activityRef = useRef('');
    const startDateRef = useRef('');
    const endDateRef = useRef('');
    const budgetRef = useRef(0);
    const navigate = useNavigate();

    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleCurrencyChange = (selectedOption) =>
    {
        setSelectedCurrency(selectedOption);
    };

    const handleActivityChange = (selectedOption) =>
    {
        setSelectedActivity(selectedOption);
    };


    const searchHandler = async (e) =>
    {
        e.preventDefault();
        const location = locationRef.current.valueOf;
        const startDate = startDateRef.current.valueOf;
        const endDate = endDateRef.current.valueOf;
        const budget =  budgetRef.current.valueOf;
        const activity = activityRef.current.valueOf;

        if (location === '' || budget === '' || activity === '' || startDate === '' || endDate === '')
        {
            return alert("All fields are required ! ");
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&budget=${budget}&activity=${activity}`)
        if (!res.ok) alert('something went wrong')

        const result = await res.json();

        navigate(`/tours/search?city=${location}&budget=${budget}&activity=${activity}`, { state: result.data });
    }
    return (
        <center>
            <Col lg="12" className='tourPlan'>
                <div className='screen-title pt-5'>
                    Build Your Own Customized Trip Plan
                </div>

                <div className='screen-caption'>
                    Create your travel itinerary. Book your accommodation, tours & flights as a package online.
                </div>
                <div className='search_bar'>

                    <Form className='d-block align-items-center gap-10'>
                        <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                            <div>
                                <input className="location" type='text' placeholder='Where do you want to go?' ref={locationRef} />
                            </div>
                        </FormGroup>

                        <FormGroup className='d-flex gap-3 form_group form_group-fast'>

                            <div>
                                <input className="textbox-n" type={inputType} id="startDateInput"
                                    placeholder='Start Date'
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    ref={startDateRef} required
                                />
                                <span>       </span>
                                <input className="textbox-n" placeholder="End Date" type={inputType}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    ref={endDateRef} required
                                />
                            </div>
                        </FormGroup>

                        <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                            <div lg='3' md='6' sm='12' className="mb-1 ">

                                <Select
                                    className='currency'
                                    options={currencies}
                                    placeholder="INR"
                                    value = {selectedCurrency}
                                    onChange={handleCurrencyChange}
                                    //clearable={false}
                                    styles={customStyles}

                                />
                            </div>
                            <div lg='3' md='6' sm='12' className="mb-1">
                            {/* <span>  </span> */}
                            <input className="budget" type="number" placeholder='Your maximum budget ?'
                                ref={budgetRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <div className='activities'>

                            <Select
                                options={options}
                                placeholder="Attractions"
                                value={selectedActivity}
                                onChange={handleActivityChange}
                                //clearable={false}
                                styles={customStyles}

                            />
                        </div>
                    </FormGroup>
                    {/* 
                        <div> 
                            <button className="startPlan d-block" type="submit" onClick={searchHandler}>Start Planning</button>
                        </div> */}
                    <MakePlanButton  onClick = {searchHandler} />

                </Form>
            </div>
        </Col>
        </center >
    );
}

export default SearchBar;