import "./WorkSpace.css";
const PROJECTS = [
  {
    id: "storage",
    from: "VAMK",
    title: "Web Storage",
    img: require("../img/webStorage.png"),
  },
  {
    id: "game",
    from: "VAMK",
    title: "Dungeon Game",
    img: require("../img/2dGame.png"),
  },
  {
    id: "elevens",
    from: "Practice",
    title: "ElevenS",
    img: require("../img/elevens.png"),
    
  },
  
];
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
            <div className="WorkCard">
              <p>{project.from}</p>
              <h1>{project.title}</h1>
              <img src={project.img} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkSpace;
