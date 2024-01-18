import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from "react-bootstrap/Stack";

const ResearchPage = () => {
    
    const { researchId } = useParams();

    const [research, setResearch] = useState([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/Research/Details/' + researchId)
            .then((response) => response.json())
            .then((data) => {
                setResearch(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <Stack>
            <Row>
                <Col xs={6} md={4} xl={2}><h1>{research.title}</h1></Col>
            </Row>
            <Row>
                <Col xs={6} md={4} xl={2}><h2>Opdrachtgever</h2></Col>
                <Col>niet in object</Col>
            </Row>
            <Row>
                <Col xs={6} md={4} xl={2}><h2>Datum</h2></Col>
                <Col>niet in object</Col>
            </Row>
            <Row>
                <Col xs={6} md={4} xl={2}><h2>Locatie</h2></Col>
                <Col>waar vandaan halen?</Col>
            </Row>
            <Row>
                <Col xs={6} md={4} xl={2}><h2>Vergoeding</h2></Col>
                <Col>€{research.reward}</Col>
            </Row>
            <Row>
                <Col xs={6} md={4} xl={2}><h2>Aangemeld</h2></Col>
                <Col>todo</Col>
            </Row>
            <Row>
                <Col xs={6} md={4} xl={2}><h2>Soort onderzoek</h2></Col>
                <Col>niet in object</Col>
            </Row>
            <Row>
                <Col xs={6} md={4} xl={2}><h2>Beschrijving</h2></Col>
                <Col>{research.description}</Col>
            </Row>
        </Stack>
    )
}

export default ResearchPage;