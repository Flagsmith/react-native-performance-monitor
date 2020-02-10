// import React, { Component } from 'react';
//
// const COOKIE_POLICY = 'show-cookie-policy';
// const TheComponent = class extends Component {
//     static displayName = 'CookiePolicy';
//
//     constructor(props, context) {
//         super(props, context);
//
//         this.state = {
//             showCookiePolicy: !Cookies.get(COOKIE_POLICY),
//         };
//     }
//
//     dismissCookies = () => {
//         this.setState({ showCookiePolicy: false });
//         Cookies.set(COOKIE_POLICY, 'true');
//     }
//
//     render() {
//         const { dismissCookies, state: { showCookiePolicy } } = this;
//         return showCookiePolicy && (
//         <div className="cookie-alert">
//             <div className="alert alert-dismissible show" role="alert">
//                     Cookies enable you to personalize your experience on Purely Capital, tell us which parts of our
//                     websites people have visited and give us insights into user behaviour so we can improve our
//                     platform. For more information on our policy, please
//                 {' '}
//                 <a className="underline" href="/cookie-policy">read here</a>
//                     .
//                 <button
//                   onClick={dismissCookies} type="button" className="close"
//                   data-dismiss="alert" aria-label="Close"
//                 >
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//         </div>
//         );
//     }
// };
//
// TheComponent.propTypes = {};
//
// module.exports = TheComponent;
