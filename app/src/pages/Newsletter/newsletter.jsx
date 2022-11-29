import React from 'react';

// import css
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='bg-color'>
        <div className="max_w2">
            <div className="newhead">
                <h1>Subscribe to Atelier <br /> Newsletter</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h4>
            </div>
            <div className="beebloc">
                <div className="bloc1"></div>
                <div className="bloc1 bgcol"></div>

                <h4>* By clicking button, you agree to our Terms and that you have <br /> read our</h4>
            </div>
            <div className="metaicon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>

            
        </div>
    </div>
  )
}

export default Newsletter