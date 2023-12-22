import 'bootstrap/dist/css/bootstrap.css';
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="d-flex  gap-3">
        <li>
          <a href="/about.html" className=''>Home</a>
        </li>
        <li>
          <a href="/about.html">About us</a>
        </li>
        <li>
          <a href="/contact.html">How it works</a>
        </li>
        <li>
          <a href="/login.html">For Freelancer</a>
        </li>
        <button className='btn btn-primary my-3'>Get Started</button>
      </ul>
    </nav>
  );
}

export default Nav;
