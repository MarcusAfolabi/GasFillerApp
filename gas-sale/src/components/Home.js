import React, { Component } from 'react'
import { Nav, Footer } from './presentation'


class Home extends Component {

  render(){
    return (

      <div className="wrapper">
          <div className="sidebar" data-background-color="white" data-active-color="danger">
              <div className="sidebar-wrapper">

            </div>
          </div>

          <div className="main-panel">
              <Nav />

              <div className="content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-lg-3 col-sm-6">
                              <div className="card">
                                  <div className="content">
                                      <div className="row">
                                          <div className="col-xs-5">
                                              <div className="icon-big icon-warning text-center">
                                                  <i className="ti-server"></i>
                                              </div>
                                          </div>
                                          <div className="col-xs-7">
                                              <div className="numbers">
                                                  <p>Capacity</p>
                                                  105GB
                                              </div>
                                          </div>
                                      </div>
                                      <div className="footer">
                                          <hr />
                                          <div className="stats">
                                              <i className="ti-reload"></i> Updated now
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                              <div className="card">
                                  <div className="content">
                                      <div className="row">
                                          <div className="col-xs-5">
                                              <div className="icon-big icon-success text-center">
                                                  <i className="ti-wallet"></i>
                                              </div>
                                          </div>
                                          <div className="col-xs-7">
                                              <div className="numbers">
                                                  <p>Revenue</p>
                                                  $1,345
                                              </div>
                                          </div>
                                      </div>
                                      <div className="footer">
                                          <hr />
                                          <div className="stats">
                                              <i className="ti-calendar"></i> Last day
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                              <div className="card">
                                  <div className="content">
                                      <div className="row">
                                          <div className="col-xs-5">
                                              <div className="icon-big icon-danger text-center">
                                                  <i className="ti-pulse"></i>
                                              </div>
                                          </div>
                                          <div className="col-xs-7">
                                              <div className="numbers">
                                                  <p>Errors</p>
                                                  23
                                              </div>
                                          </div>
                                      </div>
                                      <div className="footer">
                                          <hr />
                                          <div className="stats">
                                              <i className="ti-timer"></i> In the last hour
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                              <div className="card">
                                  <div className="content">
                                      <div className="row">
                                          <div className="col-xs-5">
                                              <div className="icon-big icon-info text-center">
                                                  <i className="ti-twitter-alt"></i>
                                              </div>
                                          </div>
                                          <div className="col-xs-7">
                                              <div className="numbers">
                                                  <p>Followers</p>
                                                  +45
                                              </div>
                                          </div>
                                      </div>
                                      <div className="footer">
                                          <hr />
                                          <div className="stats">
                                              <i className="ti-reload"></i> Updated now
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

            <Footer />

         </div>
     </div>



    )
  }


}

export default Home
