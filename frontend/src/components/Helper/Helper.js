import ServiceCard from "../../services/ServiceCard";
import { Col } from "reactstrap";
import HelperCard from "./HelperCard";



import accommodation from "../../assets/images/accommodation.png"
import calculator from "../../assets/images/calculator.png"
import globe from "../../assets/images/globe.png"
import setting from "../../assets/images/setting.png"


const helperData = [
    {
        imgUrl: globe,
        title: "1. Select Your Destination",
        desc: "from 1M+ New & popular Tourist Attractions"
    },
    {
        imgUrl: accommodation,
        title: "2. Select Your Accommodation  ",
        desc: " from 1M+ Accommodations around the Globe"
    },
    {
        imgUrl: calculator,
        title: "3. Select Your Budget",
        desc: "with In-Built Trip Budget Calculator in Multiple Currencies"
    },

    {
        imgUrl: setting,
        title: "4. Finish Your Itinerary",
        desc: "with our Free online Vacation Planner in few minutes"
    }
]
function Helper()
{
    return (
        <>
            
            {
                helperData.map((item, index) => (
                    <Col lg='3' md='6' sm='12' className="mb-4 helper_div" key={index}>
                        <HelperCard item={item}></HelperCard>
                    </Col>
                ))
            }
            
        </>
    )
}

export default Helper;