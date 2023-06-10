import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default index;
