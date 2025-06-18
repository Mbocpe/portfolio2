import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Home = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">YourName</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {/* <HiOutlineMenuAlt3 className="mobile-menu-icon" /> */}
    </header>
  );
};
export default Home;