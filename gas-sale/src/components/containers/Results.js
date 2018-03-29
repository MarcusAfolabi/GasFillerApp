import React, { Component } from 'react'
import { Item } from '../presentation'

class Results extends Component {
    constructor(){
      super()
      this.state = {

      }
    }
    render(){

      const items = [
          {id:1, key:'1', price:10, defaultAnimation:2, label:'Total Gas Filling Station', position:{lat:6.5291228, lng:3.2507272}},
          {id:2, key:'2', price:10, defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.5134438, lng:3.2475515}},
          {id:3, key:'3', price:10, defaultAnimation:2, label:'NNPC Gas Filling Station', position:{lat:6.6090813, lng:3.2843326}},
          {id:4, key:'4', price:10, defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.5307347, lng:3.2828577}},
          {id:5, key:'5', price:10, defaultAnimation:2, label:'MRS Gas Filling Station', position:{lat:6.5124631, lng:3.2787711}},
          {id:6, key:'6', price:10, defaultAnimation:2, label:'MRS Gas Filling Station', position:{lat:6.5101126, lng:3.291358}},
          {id:7, key:'7', price:10, defaultAnimation:2, label:'Conoil Gas Filling Station', position:{lat:6.5075298, lng:3.2930413}},
          {id:8, key:'8', price:10, defaultAnimation:2, label:'MRS Gas Filling Station', position:{lat:6.5062752, lng:3.3074624}},
          {id:9, key:'9', price:10, defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.613641, lng:3.2583028}},
          {id:10, key:'10', price:10, defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.5120571, lng:3.2892032}},
          ]

      return(
        <div className="container-fluid">
            <div className="row">
            { items.map((item, i) => {
                  return <Item key={item.id} item={item} />
                })
            }
            </div>
        </div>
      )
    }

}

export default Results
