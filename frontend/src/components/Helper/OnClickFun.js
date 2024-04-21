import React, { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../utils/config.js';
import { useNavigate } from 'react-router-dom';



const locationRef = useRef('');
const startDateRef = useRef('');
const endDateRef = useRef('');
//const maxGroupSizeRef = useRef(0);
const navigate = useNavigate();

const searchHandler = async () =>
{
    const location = locationRef.current.valueOf;
    const startDate = startDateRef.current.valueOf;
    const endDate = endDateRef.current.valueOf;
    //const maxGroupSize = maxGroupSizeRef.current.valueOf

    if (location === '' || startDate === '' || endDate === '')
    {
        return alert("All fields are required ! ");
    }

    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}`)
    if (!res.ok) alert('something went wrong')

    const result = await res.json();

    navigate(`/tours/search?city=${location}`, { state: result.data });
}

export default searchHandler;

