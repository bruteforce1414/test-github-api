import React from 'react';
import {useLocation} from "react-router-dom";




function WithListLoading(Component) {
 // console.log("Component is", Component)
  const location = useLocation();
 //console.log("location.state", location.state);

  return function WihLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithListLoading;