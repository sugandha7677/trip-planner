import './../styles/news-letter.css';
import { Container , Row, Col } from 'reactstrap';
import maleTourist from './../assets/images/male-tourist.png';


function NewsLetter(){
    return(
      <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6 pb-3">
                  <div className='newsletter_content'>
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className='newsletter_input'>
                        <input type='email' placeholder='example@gmail.com'/>
                        <button className='btn newsletter_btn'>
                            Subscribe
                        </button>
                    </div>
                    <p></p>
                  </div>
                </Col>

                <Col lg='6'>
                   <div className='newsletter_img'>
                     <img src={maleTourist} alt='a'/>
                   </div>
                </Col>
            </Row>
        </Container>
      </section>
    );
}

export default NewsLetter;