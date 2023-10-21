import "./WorkSpace.css";
import { Link } from "react-router-dom";
import { PROJECTS } from "../components/WorkData";
import { INPROGRESS } from "../components/WorkData";

const WorkSpace = () => {
  return (
    <div>
      <div className="ProjectsContainer">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="ProjectCard"
            style={{
              backgroundColor: project.backgroundColor,
            }}
          >
            <Link to={project.id} relative="path">
              <div className="WorkCard">
                <p>{project.from}</p>
                <h1>{project.title}</h1>

                <img
                  src={project.img}
                  alt={project.title}
                  class="book-design-image"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <h1 className="InprogressTitle"> In Progress. </h1>
      <div className="Inprogress">
        {INPROGRESS.map((project) => (
          <div
            key={project.id}
            className="ProjectCard"
            style={{
              backgroundColor: project.backgroundColor,
            }}
          >
            <Link to={project.id} relative="path">
              <div className="InprogressCard">
                <p>{project.from}</p>
                <h1>{project.title}</h1>

                <img
                  src={project.img}
                  alt={project.title}
                  class="book-design-image"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkSpace;
