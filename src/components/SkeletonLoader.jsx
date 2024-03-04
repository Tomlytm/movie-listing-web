import React from 'react';
// import './SkeletonLoader.css'; // Import CSS file for styling

const SkeletonLoader = () => {
  return (
    <div className="row">
      {[...Array(6)].map((_, index) => (
        
        <div key={index} className="col-lg-2 col-md-6 "><div className='skeleton-item'></div></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
