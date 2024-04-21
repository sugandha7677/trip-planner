import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';


function Testimonials()
{

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className='testimonial py-4 px-3'>
        <p>Great Experience and Well Worth The Money</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} alt='av' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className='testimonial py-4 px-3'>
        <p>Interesting way to walk the city with a personal guide.Love the website, super easy, and fun with a great solution for anyone</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} alt='av' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> Lara</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>We loved the tour. The tour guide knew so much and all the information slipped out of his mouth so easily.
          We had the best time and would absolutely recommend this tour to anyone who is visiting Vancouver.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} alt='av' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Marcus</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>I got a recommendation About a site from a friend. I have created a personalized trip itinerary super quickly for free.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} alt='av' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
export default Testimonials;