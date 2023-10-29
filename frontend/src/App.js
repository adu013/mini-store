import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import AdminHome from './pages/admin/home/AdminHome';
import AdminProductDetailPage from './pages/admin/product/AdminProductDetailPage';
import AdminProductUpdatePage from './pages/admin/product/AdminProductUpdatePage';
import AdminProductAddPage from './pages/admin/product/AdminProductAddPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/accounts/loginSignup/LoginSignup';
import PrivateRoute from './components/route/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />

          <Route path="/admin" element={
            <PrivateRoute>
              <AdminHome />
            </PrivateRoute>
          } />

          <Route path="/admin/product/add" element={
            <PrivateRoute>
              <AdminProductAddPage />
            </PrivateRoute>
          } />

          <Route path="/admin/product/:id" element={
            <PrivateRoute>
              <AdminProductDetailPage />
            </PrivateRoute>
          }/>

          <Route path="/admin/product/:id/update" element={
            <PrivateRoute>
              <AdminProductUpdatePage />
            </PrivateRoute>
          }/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
