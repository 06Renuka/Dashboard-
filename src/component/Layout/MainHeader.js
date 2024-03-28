import React, { useState, useEffect } from 'react';
import bag from '../../Assets/bag.svg'
import P1 from '../../Assets/P1.jpeg'
import './Report.css'
//import LightDarkSwtichBtn from './LightDarkSwtichBtn';

const MainHeader = () => {

  const [isSticky, setIsSticky] = useState(false);
  const handleAccount = (event) => {
    
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsSticky(scrollPos >= 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={isSticky ? 'sticky' : ''}
      id="header"
      style={{border:'1px solid grey',backgroundColor:'black'}}
    >
      <div className="container" style={{display:'flex', flexDirection:'row' ,justifyContent:'space-between'}}>
        <div className="row" >
          
            <h2 style={{color:'white',marginLeft:"20px", float:'left'}}>Report</h2>
          
        </div>
        <div style={{display:'flex' , flexDirection:'row'}}>  
       
          <div className="" style={{padding:'10px',justifyContent:'space-between'}}>
           
           <img src={bag } alt='' style={{margin:'5px'}}/>
           <img src={P1} alt='' style={{height:'30px', width:'30px',borderRadius:'50%', margin:'5px'}}/>
          </div>
       
        <select className="designforusername"  onChange={handleAccount}>
            <option value="default">Username</option>
            <option value="last7days">1</option>
            
            
          </select>
          </div>
      </div>
     
    </header>
  );
};

export default MainHeader;
