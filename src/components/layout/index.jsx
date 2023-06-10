import Sidebar from "components/layout/sidebar";
import Content from "components/layout/content";
import { useLocation } from "react-router-dom";

const index = () => {

  const location = useLocation()
  const blackList = ["/pages/create-page"]

  return (
    <div className="h-screen overflow-y-hidden fazogram">
      {
          blackList.some((item)=>location.pathname.includes(item))?null :
          <Sidebar />
      }
      <Content />
    </div>
  );
};

export default index;
