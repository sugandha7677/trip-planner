import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SubTitle from "../shared/SubTitle";
import MasonryImagesGallery from "./MasonryImagesGallery";

function Gallery () {
    return (
        <>
            <Container>
                <Row>
                    <Col lg='12'>
                        <SubTitle subtitle={'Gallery'} />
                        <h2 className='gallery_title'>
                            Visit our customers tour gallery
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Gallery