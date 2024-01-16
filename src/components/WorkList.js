import "./WorkList.css";
import { Link } from "react-router-dom";
const WorkList = ({ event }) => {
  return (
    <div className="WorkList">
      <h1 className="workTitle">{event.title}</h1>
      <div className="Title">
        <div className="timeline">
          <h3>Timeline</h3>
          <p>{event.timeline}</p>
        </div>
        <div className="team">
          <h3>Team</h3>
          <p>{event.team}</p>
        </div>
        <div className="role">
          <h3>Role</h3>
          <p>{event.role}</p>
        </div>
        <div className="role">
          <h3>Language</h3>
          <p>{event.language}</p>
        </div>
      </div>
      <img src={event.img} alt="mainImg" className="mainImg" />
      <h1 className="overviewTitle">Overview </h1>

      <p className="overview">{event.overview}</p>

      {event.img1 && <img src={event.img1} alt="mainImg" className="mainImg" />}
      {event.text && <h1 className="overviewTitle">Key Feature </h1>}
      {event.text && <p className="overview">{event.text}</p>}
      {event.img2 && <img src={event.img2} alt="mainImg" className="mainImg" />}
      {event.img3 && <img src={event.img3} alt="mainImg3" className="mainImg" />}
      {event.img4 && <img src={event.img4} alt="mainImg4" className="mainImg" />}
      {event.img5 && <img src={event.img5} alt="mainImg5" className="mainImg" />}
      <br></br>
      <h1 className="direct">
        {" "}
        <Link to={event.link}>Direct To The Project</Link>{" "}
      </h1>
    </div>
  );
};
export default WorkList;
