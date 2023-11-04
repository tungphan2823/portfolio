import "./Contact.css";
import { Link } from "react-router-dom";
import AnimatedPage from "../transition";
import github from '../img/github.png';
import linkedin from '../img/link.png';
import figma from '../img/figma.png';
const ContactPage = () => {
  return (
    <AnimatedPage>
      <div className="wrapperContainer">
        <div className="WapCon">
          <h1 className="wapConH1">Contact</h1>
          <p>thanhtungphanvu@gmail.com</p>
          <Link to="https://github.com/tungphan2823">
            <div class="wrapper">
              <div class="image-wrapper">
                <img
                  src={github}
                  alt="git"
                />
              </div>
              <div class="header-wrapper">
                <h1>Github</h1>
              </div>
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/tung-phan-279163214/">
            <div class="wrapper">
              <div class="image-wrapper">
                <img
                  class="book-design-image"
                  src={linkedin}
                  alt="lkn"
                />
              </div>
              <div class="header-wrapper">
                <h1>LinkedIn</h1>
              </div>
            </div>
          </Link>
          <Link to="https://www.figma.com/@tungphan2823">
            <div class="wrapper">
              <div class="image-wrapper">
                <img
                  class="book-design-image"
                  src={figma}
                  alt="figma"
                />
              </div>
              <div class="header-wrapper">
                <h1>Figma</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
};
export default ContactPage;
