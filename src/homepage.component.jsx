import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
  <div className='directory-menu'>

    <div className='menu-item'>
      <div className='content'>
        <h3 className='title'>
          Hats
        </h3>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>

    <div className='menu-item'>
      <div className='content'>
        <h3 className='title'>
          Jackets
        </h3>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
    
    <div className='menu-item'>
      <div className='content'>
        <h3 className='title'>
          Shoes
        </h3>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
    
    <div className='menu-item'>
      <div className='content'>
        <h3 className='title'>
          Womens
        </h3>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>

    <div className='menu-item'>
      <div className='content'>
        <h3 className='title'>
          Mans
        </h3>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>

  </div>
</div>
)



export default HomePage;