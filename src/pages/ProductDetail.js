import { useParams } from "react-router-dom";
import { PROJECTS } from "../components/WorkData";
import { INPROGRESS } from "../components/WorkData";
import WorkList from "../components/WorkList";
const BigData = PROJECTS.concat(INPROGRESS);
const ProductDetailPage = () => {
  const params = useParams();
  const data = BigData.find((project) => project.id === params.productId);
  return <WorkList event={data.events} />;
};
export default ProductDetailPage;
