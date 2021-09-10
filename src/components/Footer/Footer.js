import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <div className='footer bg-dark'>
                <div> &copy; {new Date().getFullYear()} Copyright: <Link style={{ textDecoration: 'none', color: 'white' }} to="https://www.mdbootstrap.com"> I.A. </Link></div>
            </div>
    );

}

export default Footer;