import React, { Component } from 'react'

export default (props) => {

  return(
    <footer className="footer">
       <div className="container-fluid">
           <nav className="pull-left">
               <ul>

                   <li>
                       <a href=" http://www.webkits-tech.com">
                           Creative Mac
                       </a>
                   </li>
                   <li>
                       <a href="http://blog.webkits-tech.com">
                          Blog
                       </a>
                   </li>
                   <li>
                       <a href=" http://www.webkits-tech.com/license">
                           Licenses
                       </a>
                   </li>
               </ul>
           </nav>
           <div className="copyright pull-right">
               &copy; 2018, made with <i className="fa fa-heart heart"></i> by <a href=" http://www.webkits-tech.com">Creative Mac</a>
           </div>
       </div>
   </footer>
  )
}
