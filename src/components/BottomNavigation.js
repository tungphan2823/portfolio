import "./BottomNavigation.css";
import {Link} from 'react-router-dom';
const BottomNavigation = () => {
  return (
    <div className="bottomNav">
      <p>© 2023 Tung Phan</p>
      <div className="bottom">
        
        <ul>
          <li className="title">Elsewhere</li>
          <li><Link >Figma</Link></li>
          <li><Link to='https://github.com/tungphan2823'>Github</Link></li>
          <li><Link>CV</Link></li>
          <li><Link to='https://www.linkedin.com/in/tung-phan-279163214/'>LinkedIn</Link></li>
        </ul>
        
        <ul>
          <li className="title">Contact</li>
          <li><Link>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default BottomNavigation;
