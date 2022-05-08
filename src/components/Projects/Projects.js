import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Folder2 } from 'react-bootstrap-icons';
import './Projects.css';

function Projects() {
    return (
        <Container id="projects" className='projects'>
            <Row>
                <h1 className='projects-title'>projects</h1>
                <Col xs={12} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            <Folder2 className="icon" />
                            <Card.Text as="h5">
                                v2
                            </Card.Text>
                            <Card.Text>
                                The second interation of my porfolio website. Used React, React-Bootstrap, JS, jQuery, HTML & CSS 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            <Folder2 className="icon" />
                            <Card.Text as="h5">
                                v1
                            </Card.Text>
                            <Card.Text>
                                The first interation of my porfolio website. Used JS, jQuery, HTML & CSS, Bootstrap
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            <Folder2 className="icon" />
                            <Card.Text as="h5">
                                Foxpad
                            </Card.Text>
                            <Card.Text>
                                Conceptualized and built an online calendar for Graceland University. It contained daily, weekly, & monthly events.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;