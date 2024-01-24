import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";





const Home = () => {

    return (
        <Container>
            <Card className="shadow-lg">
            <Card.Body >
                <Card.Title className="text-center">
                    Studio Ghibli Routing Lab!
                </Card.Title>
                <Card.Text>
                    Welcome to my Studio Ghibli API Routing Lab! I have created a React app that uses the power of routing with the amazing API Covalence has created. You will be able to navigate to see the different movies and people from the films across Studio Ghibli's catalog. Go ahead and explore!
                </Card.Text>
            </Card.Body>
            <Card.Img src='https://www.fathomevents.com/wp-content/uploads/blog-studio-ghibli-artistry-studio-ghibli-logo-082223.jpg' />
            </Card>
        </Container>
    )
}

export default Home;