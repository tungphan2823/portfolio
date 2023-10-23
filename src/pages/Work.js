import WorkSpace from "../components/WorkSpace";
import AnimatedPage from "../transition";
const WorkPage = () => {
  return (
    <AnimatedPage>
      <div className="HomeContainer">
        <h1 className="HomeTitle">My Workspace</h1>

        <div className="BodyTitle">
          <div className="Introduction">
            <h2>All The Project</h2>
          </div>
        </div>
        <WorkSpace />
      </div>
    </AnimatedPage>
  );
};
export default WorkPage;
