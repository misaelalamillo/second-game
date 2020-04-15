import React from "react"
import { Col, Row, Container } from "../components/Grid";
import HomeHero from "../components/HomeHero"
import HomeExtra from "../components/HomeExtra"

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-1" />
                <Col size="md-6">

                    <HomeHero />
                </Col>
                <Col size="md-4">
                    <Row>
                        <Col size="md-12">
                            <HomeExtra>
                            <p>endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.</p>
                            </HomeExtra>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <HomeExtra>
                                <p>endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.endless stuff and things to do stuff and things with.</p>
                            </HomeExtra>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;