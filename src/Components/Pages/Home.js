import { React, useEffect } from 'react';
import '../../App.css';
import './Home.css';

//Home Page
function Home() {

  //automatically scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='home-container'>
      <h1>Drink Up! </h1>
    </div>
  );
}
export default Home; 