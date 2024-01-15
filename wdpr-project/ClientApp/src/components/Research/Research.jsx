import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ResearchCard from "./ResearchCard";

const Research = () => {
    
    const [researches, setResearches] = useState([]);
    useEffect(() => {
        fetch('https://stichingaccessebility.azurewebsites.net:7276/Research')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResearches(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
        return (
            <Container className="Research-container">
                <Row>
                    {researches.map((research => {
                        return (
                            <ResearchCard key={research.id} researchId={research.id} researchTitle={research.title} researchDescription={research.description}></ResearchCard>
                        )
                    }))}
                </Row>
            </Container>
        )
}

export default Research;