import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FilmDetails = () => {

    const { filmid } = useParams()

    const [filmDetails, setFilmDetails] = useState()

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setFilmDetails(data))
    }, [filmid])

    if (!filmDetails) return <></>

    return (
        <>
            <Container>
                <Row className="justify-content-md-center" md={2}>
                    <Col >
                        <Card key={`${filmDetails.id}-details`} className="rounded-3 mb-3 text-center shadow">
                            <Card.Img variant='top' src={filmDetails.image} />
                            <Card.Body>
                                <Card.Title >{filmDetails.title}</Card.Title>
                                <Card.Text>Original Title: {filmDetails.original_title}/{filmDetails.original_title_romanised}</Card.Text>
                                <Card.Text>Director: {filmDetails.director}</Card.Text>
                                <Card.Text>Producer: {filmDetails.producer}</Card.Text>
                                <Card.Text>Release Date: {filmDetails.release_date}</Card.Text>
                                <Card.Text>Run Time: {filmDetails.running_time}</Card.Text>
                                <Card.Text>Rot Tom Score: {filmDetails.rt_score}</Card.Text>
                                <Card.Text >Description: {filmDetails.description}</Card.Text>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FilmDetails