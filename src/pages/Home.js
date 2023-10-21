import "./Home.css";
import ava from "../img/me.jpg";
import left from '../img/IMG_3717.jpg'
import right from '../img/IMG_3974.jpg'
import TimeLine from "../components/TimeLine";
const HomePage = () => {
  return (
    <div className="HomeContainer">
      <h1 className="HomeTitle">Hi. I'm Tung.</h1>

      <div className="BodyTitle">
        <img src={ava} alt="myface" />
        <div className="Introduction">
          <h1>I'm a Frontend Developer. </h1>
          <h2>Currently Studying at Vaasa University of Applied Sciences</h2>
          <p>
            Creating and designing websites from scratch is my passion.<br></br>{" "}
            I enjoy crafting visually appealing and functional pages.<br></br>{" "}
            Excited to keep learning and pushing boundaries in this
            ever-evolving field
          </p>
        </div>
      </div>
      <TimeLine />
      <div className="HomeStory">
        
        <h1> A little about me and how my coding journal start </h1>
        <div className="HomeStoryText">
          <p>
            Before I stepped into the world of web developing, I was a computer
            science high school student. Me and two more friends of my, we start
            build a coffee review website. The aim of the project is to make a
            website that can show to the viewer where have the best coffee in
            town.
          </p>
          <p>
            Coding it forced me to understand how HTML and CSS play together, a
            skill set I've carried and kept fresh in the years since. My side
            project work is just an excuse to satisfy my curiosity about new
            technologies and understand how the web is moving forward.
          </p>
          <p>
            Outside work, I enjoy going to the gym, listening
            to and playing music,  and
            playing pool with my friends.
          </p>
        </div>
      </div>
      <div className="bottomImg">
        <img  className='leftImg'src={left} alt="czech" />
        <img className='rightImg'src={right} alt="czech" />
      </div>
    </div>
  );
};
export default HomePage;
