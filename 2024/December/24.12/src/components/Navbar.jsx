import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <nav style={{ background: '#333', padding: '10px' }}>
        <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: '#fff' }}>About</Link>
        <Link to="/html" style={{ margin: '0 10px', color: '#fff' }}>HTML</Link>
        <Link to="/css" style={{ margin: '0 10px', color: '#fff' }}>CSS</Link>
        <Link to="/js" style={{ margin: '0 10px', color: '#fff' }}>JavaScript</Link>
        <Link to="/python" style={{ margin: '0 10px', color: '#fff' }}>Python</Link>
    </nav>
);
};

export default Navbar;