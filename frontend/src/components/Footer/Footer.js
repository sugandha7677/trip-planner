import './../../styles/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.png';


const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/trip-planner',
    display: 'Trip Planner'
  },
  // {
  //   path: '/how-it-works',
  //   display: 'How it works'
  // },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]

function Footer()
{
  const year = new Date().getFullYear();
  return (

    <footer className='footer'>

      <Container>
        <Row>

          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div className='footer_detail'>Navigational tour guide in your pocket.. </div>
              <p>Plan Your Trip for Free,
                Explore the world!!!</p>
              <div className='social_links d-flex align-items-center gap-4'>


                <span>
                  <Link to='https://www.instagram.com' target='_blank'><i class='ri-instagram-line' /></Link>
                </span>

                <span>
                  <Link to='https://www.youtube.com'><i class='ri-youtube-line' /></Link>
                </span>

                <span>
                  <Link to='https://www.facebook.com'><i class='ri-facebook-circle-line' /></Link>
                </span>
              </div>
            </div>
          </Col >
          <Col lg='3'>
            <h5 className='footer_link-title'>
              Discover
            </h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>
              Quick Links
            </h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>
              Contacts
            </h5>
            <ListGroup className='footer_quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Bhopal, India</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>travelworld@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  Phone :
                </h6>
                <p className='mb-0'>+91 1111110001</p>
              </ListGroupItem>
            </ListGroup>
          </Col>


          <Col lg='12' className='text-center'>
            <p className='copyright'>Copyright {year}, designed and developed by travelworlds.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;