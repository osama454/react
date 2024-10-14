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
  { path: '/', component: Container1, exact: true, auth: false },
  { path: '/component1', component: Component1, auth: true },
  { path: '/component2', component: Component2, auth: true },
  { path: '/component3', component: Component3, auth: false },
  { path: '/component/:id', component: DynamicComponent, auth: true },
];

const PrivateRoute = ({ children, authRequired }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authRequired && !isAuthenticated) {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, authRequired, navigate]);

  return authRequired && !isAuthenticated ? null : children;
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual authentication logic

  const authContextValue = {
    isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute authRequired={route.auth}>
                  <route.component />
                </PrivateRoute>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default App;