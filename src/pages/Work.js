import WorkSpace from "../components/WorkSpace";
const WorkPage = () => {
  return (
    <div className="HomeContainer">
      <h1 className="HomeTitle">My Workspace</h1>

      <div className="BodyTitle">
        <div className="Introduction">
          <h2>All The Project</h2>
        </div>
        
      </div>
      <WorkSpace />
    </div>
  );
};
export default WorkPage;
