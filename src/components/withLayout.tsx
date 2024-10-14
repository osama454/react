
// components/withLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const withLayout = (WrappedComponent) => {
  const LayoutComponent = (props) => {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="container mx-auto py-8 px-8">
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </div>
    );
  };
  LayoutComponent.displayName = `withLayout(${WrappedComponent.displayName || WrappedComponent.name})`;
  return LayoutComponent;
};

export default withLayout;