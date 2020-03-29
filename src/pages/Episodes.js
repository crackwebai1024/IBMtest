import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazyload';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import AudioPlayer from "react-h5-audio-player";
import EpisodeTable from '../components/EpisodeTable';
import data from "../data/en_US.json";


const Episodes = () => (

    <div>
        <Section backgroundColor="#e0ebe8">
            <Grid>
                <Row center="xs">
                    <Col xs={12}>
                        <Title color="#4ab19a"></Title>

                        <EpisodeTable />
                    </Col>
                </Row>
                <Row bottom="xs" center="xs">
                    <Col xs={12}>

                    </Col>
                </Row>
            </Grid>
        </Section>
        <Grid>
            <Row center="xs">
                <Img sizeX="152px" sizeY="200px" />
                <Col xs={12}>
                    <SubTitle></SubTitle>
                </Col>
                <Col xs={12} lg={6}>
                    <Paragraph>

                    </Paragraph>
                    <Paragraph>

                    </Paragraph>
                </Col>
            </Row>
            <Row center="xs">
                <Col xs={2} md={1}>
                    <Divider />
                </Col>
            </Row>
            <LazyLoad height={200} offset={-250}>
                <Row center="xs">
                    <Col xs={12}>
                        <SubTitle></SubTitle>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Paragraph></Paragraph>

                        <Paragraph></Paragraph>

                        <Paragraph></Paragraph>


                        <Paragraph></Paragraph>

                    </Col>
                    <Col xs={12} lg={6}>
                        <Paragraph style={{ display: "none" }}> </Paragraph>

                    </Col>
                </Row>
            </LazyLoad>
            <Row center="xs">
                <Col xs={2} md={1}>
                    <Divider />
                </Col>
            </Row>
            <LazyLoad height={400} offset={-250}>
                <Row center="xs">
                    <Col xs={12}>
                        <SubTitle></SubTitle>
                    </Col>
                    <Col xs={12} >
                        <Img sizeX="100%" sizeY="100%" max="600px" />
                    </Col>
                </Row>
            </LazyLoad>
            <Row center="xs">
                <Col xs={2} md={1}>
                    <Divider />
                </Col>
            </Row>
            {/* <LazyLoad height={400} offset={-250}>
                    <Row center="xs">
                        <Col xs={12}>
                            <SubTitle>Companies I have work for</SubTitle>
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <Img src={Hilti} sizeX="100%" sizeY="100%" />
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <Img src={BankOfAmerica} sizeX="100%" sizeY="100%" />
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <Img src={Jpmorgan} sizeX="100%" sizeY="100%" />
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <Img src={IBM} sizeX="100%" sizeY="100%" />
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <Img src={CapitalOne} sizeX="100%" sizeY="100%" />
                        </Col>
                    </Row>
                </LazyLoad> */}
        </Grid>
    </div>
);

export default Episodes;
