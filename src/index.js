// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

//       <Router>
//       <div>
   

//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/sign-up">
//             <SignUp />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>




//   //            <ul>
//   //         <li>
//   //           <Link to="/">Home</Link>
//   //         </li>
//   //         <li>
//   //           <Link to="/login" onClick={()=>{
//   //             axios.get('https://api.github.com/users/mapbox')
//   // .then((response) => {
//   //   console.log(response.data);
//   //   console.log(response.status);
//   //   console.log(response.statusText);
//   //   console.log(response.headers);
//   //   console.log(response.config);
//   // });
//   //           }}>Login</Link>
//   //         </li>
//   //         <li>
//   //           <Link to="/sign-up">Sign UP</Link>
//   //         </li>
//   //       </ul>
//       </div>
//     </Router>

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';



ReactDOM.render(
<App/>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA