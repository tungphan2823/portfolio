import { useParams } from "react-router-dom";
import { PROJECTS } from "../components/WorkData";
import { INPROGRESS } from "../components/WorkData";
import AnimatedPage from "../transition";
import WorkList from "../components/WorkList";
const BigData = PROJECTS.concat(INPROGRESS);
const ProductDetailPage = () => {
  const params = useParams();
  const data = BigData.find((project) => project.id === params.productId);
  return (
    <AnimatedPage>
      <WorkList event={data.events} />
    </AnimatedPage>
  );
};
export default ProductDetailPage;
