import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Research.css'

function ResearchCard(props) {
    return (
        <Col xs={12} lg={6} xxl={4}>
            <Card className="Research-card" key={props.researchId} >
                <Card.Body>
                    <Card.Title>{props.researchTitle}</Card.Title>
                    <Card.Text>{Truncate(props.researchDescription, 185)}</Card.Text>
                </Card.Body>
                <Button variant="primary" href={"Onderzoeken/" + props.researchId}>go somewhere</Button>
            </Card>
        </Col>
    )
}

function Truncate(str, maxlength) {
    return str.length > maxlength ? str.substring(0,maxlength - 3) + "..." : str;
}

export default ResearchCard;