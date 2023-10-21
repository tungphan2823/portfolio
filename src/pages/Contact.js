import "./Contact.css";
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    <div className="wrapperContainer">
      <div className="WapCon">
        <h1 className="wapConH1">Contact</h1>
        <p>thanhtungphanvu@gmail.com</p>
        <Link to='https://github.com/tungphan2823'>
          <div class="wrapper">
            <div class="image-wrapper">
              <img src="https://www.hubspot.com/hubfs/github-flow.png" />
            </div>
            <div class="header-wrapper">
              <h1>Github</h1>
            </div>
          </div>
        </Link>
        <Link to='https://www.linkedin.com/in/tung-phan-279163214/'>
          <div class="wrapper">
            <div class="image-wrapper">
              <img
                class="book-design-image"
                src="https://media.sproutsocial.com/uploads/2023/05/Best-Time-To-Post-on-Linkedin.svg"
              />
            </div>
            <div class="header-wrapper">
              <h1>LinkedIn</h1>
            </div>
          </div>
        </Link>
        <Link to='https://www.figma.com/@tungphan2823'>
          <div class="wrapper">
            <div class="image-wrapper">
              <img
                class="book-design-image"
                src="https://getstream.io/blog/static/35efdbc44eb1933ec25149afd73bc01e/61d8b/intro.png"
              />
            </div>
            <div class="header-wrapper">
              <h1>Figma</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ContactPage;
