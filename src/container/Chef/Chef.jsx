import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'>What We Believe In</h1>

    <div className='app__chef-content'>
       <div className='app__chef-content_quote'>
       <img src={images.quote} alt='quote'/>
       <p className='p__opensans'>A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.</p>
       </div>
       <p className='p__opensans'>A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
    </div>

    <div className='app__chef-sign'>
     <p>Kevin Luo</p>
     <p className='p__opensans'>Chef & Founder</p>
     <img src={images.sign} alt="sign"/>
    </div>
    </div>
  </div>
);

export default Chef;
