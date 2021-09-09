import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className='footer'>
                <Row className="mb-4">
                    <Col className='ml-5'>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/episodes'> Episodes </Link>
                    </Col >
                    <Col  >
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/locations'> Locations </Link>
                    </Col>
                    <Col>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/characters'> Characters </Link>
                    </Col>
                </Row>
                <div> &copy; {new Date().getFullYear()} Copyright: <Link style={{ textDecoration: 'none', color: 'white' }} to="https://www.mdbootstrap.com"> I.A. </Link></div>
            </div>
        </footer>
    );

}

export default Footer;