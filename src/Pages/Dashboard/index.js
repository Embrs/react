import React from 'react';
import RouteHander from 'Route';

function Dashboard({ routes }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {RouteHander(routes)}
    </div>
  );
}

export default Dashboard;
