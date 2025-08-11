// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
function App() {
  return (
    <BrowserRouter>
      {/* User Routes */}
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
