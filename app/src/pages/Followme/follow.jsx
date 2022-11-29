import React from 'react';
import Post1 from '../../media/image/instaimg1.png';
import Post2 from '../../media/image/instaimg2.png';
import Post3 from '../../media/image/instaimg3.png';
import Post4 from '../../media/image/instaimg4.png';
import Post5 from '../../media/image/instaimg5.png';

// import css
import './follow.css';

const Followme = () => {
  return (
    <div className='bg-color'>
        <div className="max_w2">
            <div className="insta_blog">
                  <img src={Post1} />
                  <img src={Post2} />
                  <img className='insta_logo' src={Post3}  />
                  <img src={Post4} />
                  <img src={Post5} />
            </div>
        </div>
    </div>
  )
}

export default Followme