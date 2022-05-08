import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import './Home.css';

function Home() {
  return (
    <Container className="Home">
        <Row>
            <Col sm={12} lg={6} className="border">
                <h1 className="home-title">dylan fox</h1>
            </Col>
            <Col sm={12} lg={6} className="border">
                <h1>dylan-fox</h1>    
            </Col>
        </Row>
    </Container>
  );
}

export default Home;