// import React, { useEffect } from 'react';

// import './MenuItem.css';

// const MenuItem = (title="",price="",tags="") => {
//   useEffect(()=>{
//     console.log(title,price,tags)
//   },[])
//   return(
//   <div className='app__menuitem'>
//     {/* MenuItem */}
//     <div className='app__menuitem-head'>
//       <div className='app__menuitem-name'>
//         <p className='p__cormorant' style={{color:'#DCCA87'}}>{title.title}</p>
//         <p className='p__cormorant' style={{color:'#DCCA87'}}>{price.price}</p>
//         <p className='p__cormorant' style={{color:'#DCCA87'}}>{tags.tags}</p>
//       </div>
//     </div>
//   </div>
// );
//  }
// export default MenuItem;


import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
