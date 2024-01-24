import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

const PeopleDetails = () => {

    const { peopleid } = useParams()

    const [peopleDetails, setPeopleDetails] = useState()

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(data => setPeopleDetails(data))
    }, [peopleid])
    

    if (!peopleDetails) return <></>

    return (
        <>
            <Container>
                <Row className="justify-content-md-center" md={2}>
                    <Col >
                        <Card key={`${peopleDetails.id}-details`} className="rounded-3 mb-3 text-center shadow-lg">
                            <Card.Img variant='top' src={peopleDetails.image} />
                            <Card.Body>
                                <Card.Title >{peopleDetails.name}</Card.Title>
                                <Card.Text>Gender: {peopleDetails.gender}</Card.Text>
                                <Card.Text>Age: {peopleDetails.age}</Card.Text>
                                <Card.Text>Eye color: {peopleDetails.eye_color}</Card.Text>
                                <Card.Text>Hair color: {peopleDetails.hair_color}</Card.Text>
                                <Card.Subtitle>Films:</Card.Subtitle>
                                <Card.Text><Link>{peopleDetails.films}</Link></Card.Text>                              
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PeopleDetails;