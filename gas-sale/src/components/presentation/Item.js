import React, { Component } from 'react'

export default (props) => {
 //  {id:3, key:'3', defaultAnimation:2, label:'NNPC Gas Filling Station', position:{lat:6.6090813, lng:3.2843326}},
const item = props.item

  return (
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
                              <p>{item.label}</p>
                              ${item.price}
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
  )
}
