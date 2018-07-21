import React, { Component } from 'react';
import LandingCarousel from './LandingCarousel';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Landing.css';

/* 
 *  This is the stateless presentational component version of Landing
*/
// const AddTenant = () => {
//   return <div>Hello add tenant</div>;
// };

// const Landing = () => {
//   return (
//     <div>
//       <LandingCarousel />
//       <div className="ui center aligned middle aligned grid">
//         <Button primary>
//           Buy Now
//         </Button>
//         <Button secondary>
//           <Link to="/login">
//             Sign in
//           </Link>
//         </Button>
//       </div>
//       <div className="ui center aligned middle aligned grid">
//         <p className="desc--text">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//           dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//           mollit anim id est laborum.
//         </p>
//       </div>
//     </div>
//   )
// }

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };
  }

  /*
  * <Link to="/login">
            <Button secondary>Sign in</Button>
          </Link>
  * 
  */

  render() {
    return (
      <div>
        <LandingCarousel />
        <div className="ui center aligned middle aligned grid">
          {/* Link "Buy Now!" button to signup page */}
          <Link to="#">
            <Button primary>Buy Now</Button>
          </Link>
          {/* Link "Log In" button to login page */}
          <Link to="/login">
            <Button secondary>Log In</Button>
          </Link>
        </div>
        <div className="ui center aligned middle aligned grid">
          <p className="desc--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }

  linkToLogin = () => {};
}

// export default Landing;
