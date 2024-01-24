import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Films = () => {
    const [gFilms, setGFilms] = useState([])

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then((res) => res.json())
            .then((data) => setGFilms(data))
    }, [])

    const filmCards = gFilms.map(films => {
        return (
            <Card key={`${films.id}-card`} className="rounded-3 mb-3 shadow">
            <Card.Body>
                <Card.Title >{films.title}</Card.Title>
                <Card.Text >{films.description}</Card.Text>
                <Card.Text>
                <Link to={`/films/${films.id}`}>Film Details</Link>
                </Card.Text>
            </Card.Body>
        </Card>
        )
        })

    return (
        <>
           {filmCards}
        </>
    )
}

export default Films;

