import React from "react";
import { useEffect,useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const People = () => {

    const [gPeeps, setGPeeps] = useState([])
    
    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then((res) => res.json())
            .then((data) => setGPeeps(data))

    }, [])

    const peopleCards = gPeeps.map(people => {
        return (
            <Card key={`${people.id}-card`} className="rounded-3 mb-3 shadow">
            <Card.Body>
                <Card.Title >{people.name}</Card.Title>
                <Card.Text>
                <Link to={`/people/${people.id}`}>Person Details</Link>
                </Card.Text>
            </Card.Body>
        </Card>
        )
        })

    return (
        <>
           {peopleCards}
        </>
    )
}


export default People;