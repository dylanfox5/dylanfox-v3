import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import './Home.css';

function Home() {
  return (
    <Container className="Home">
        <Row>
            <Col sm={12} lg={8}>
                <h3 className="home-title">Hi, I'm <span>Dylan</span> -- an analytics focused developer who enjoys innovating solutions for complex problems.</h3>
            </Col>
            <Col sm={12} lg={4}>
            </Col>
        </Row>
    </Container>
  );
}

export default Home;