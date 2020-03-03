import React, { useEffect } from 'react';
import RouteHander from 'Route';

const Mount = () => {
  useEffect(() => {
    console.log('aa');
    return UnMount;
  });
};

const UnMount = () => {
  console.log('bb');
};

const Dashboard = ({ routes }) => {
  Mount();
  return (
    <div>
      <h1>Dashboard</h1>
      {RouteHander(routes)}
    </div>
  );
};

export default Dashboard;
