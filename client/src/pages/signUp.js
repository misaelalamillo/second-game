import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Input, FormBtn } from "../components/Form"
import Jumbotron from "../components/Jumbotron"
import API from "../utils/API"
import { Col, Row, Container } from "../components/Grid";

function SignUp() {

    const [user, setUser] = useState([])

    useEffect(() => {

    }, [])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (user.name && user.userName && user.password) {
            API.addUser({
                name: user.name,
                username: user.username,
                password: user.password
            })
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col size="md-2">

                </Col>
                <Col size="md-8">
                    <Jumbotron>
                        <h2>Sign Up</h2>
                        <br></br>
                        <Input
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="username"
                            placeholder="username (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Password (required)"
                        />
                        <FormBtn
                            disabled={!(user.name && user.userName && user.password)}
                            onClick={handleFormSubmit}
                        >
                            <Router>
                                <Link to="/">Submit</Link>
                            </Router>
                        </FormBtn>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}
export default SignUp;