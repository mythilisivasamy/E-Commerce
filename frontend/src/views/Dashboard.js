import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h5 className="text-center">Dashboard</h5>
      <Row>
        <Col sm={12} md={3}>
          <Stack gap={3}>
            <div className="px-5 py-3">
              <Link to="./">Product List</Link>
            </div>

            <div className="px-5 py-3">
              <Link to="userList">User List</Link>
            </div>
            <div className="px-5 py-3">
              <Link to="orderList">Order List</Link>
            </div>
            <div className="px-5 py-3">
              <Link to="./">Sales</Link>
            </div>
            <div className="px-5 py-3">
              <Link to="./">Recent Reviews</Link>
            </div>
            <div className="px-5 py-3">
              <Link to="./">Data Visualization</Link>
            </div>
          </Stack>
        </Col>
        <Col sm={12} md={9}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
