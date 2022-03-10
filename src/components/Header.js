import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>
        Header <Button />
      </h1>
    </div>
  );
};

export default Header;
