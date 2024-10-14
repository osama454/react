import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { createContext, useContext } from 'react';

const Component1 = () => <div>Component 1 Content</div>;
const Component2 = () => <div>Component 2 Content</div>;
const Component3 = () => <div>Component 3 Content</div>;
const DynamicComponent = () => {
  const { id } = useParams();
  return <div>Dynamic Component Content with ID: {id}</div>;
};
const Container1 = () => <div>Container 1 Content</div>;
const Header = () => <header>Header Content</header>;


const AuthContext = createContext(null);

const routesConfig = [
  { path: "/", component: Container1, auth: false },
  { path: "/component1", component: Component1, auth: true },
  { path: "/component2", component: Component2, auth: true },
  { path: "/component3", component: Component3, auth: false },
  { path: "/component/:id", component: DynamicComponent, auth: true },
];

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    // Check authentication status (e.g., from local storage)
    const storedAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(storedAuth === 'true');
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute = ({ element, auth }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && !isAuthenticated) {
      navigate('/'); // Redirect to home if not authenticated
    }
  }, [auth, isAuthenticated, navigate]);

  if (!auth || isAuthenticated) {
    return element;
  }

  return null;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Routes>
            {routesConfig.map(route => (
              <Route 
                key={route.path} 
                path={route.path} 
                element={
                  <ProtectedRoute auth={route.auth} element={<route.component />} />
                } 
              />
            ))}
          </Routes>
        </Router>
    </Suspense>
  );
};



const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
};


export default App;
