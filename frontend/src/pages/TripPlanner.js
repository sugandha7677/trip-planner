import React from "react";
import SearchBar from "../shared/SearchBar";
import Footer from "../components/Footer/Footer";


function TripPlanner() {
    return (
        <>
         <div className="trip_planner"><SearchBar /> </div>
         <Footer />
        </>
    )
}


export default TripPlanner;