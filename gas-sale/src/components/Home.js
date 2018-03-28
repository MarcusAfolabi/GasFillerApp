import React, { Component } from 'react'
import { Nav, Footer, Item, Map } from './presentation'


class Home extends Component {
  constructor(){
    super()
    this.state = {
      map: null
    }
  }

  render(){
      const markers = [
          {id:1, key:'1', defaultAnimation:2, label:'Total Gas Filling Station', position:{lat:6.5291228, lng:3.2507272}},
          {id:2, key:'2', defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.5134438, lng:3.2475515}},
          {id:3, key:'3', defaultAnimation:2, label:'NNPC Gas Filling Station', position:{lat:6.6090813, lng:3.2843326}},
          {id:4, key:'4', defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.5307347, lng:3.2828577}},
          {id:5, key:'5', defaultAnimation:2, label:'MRS Gas Filling Station', position:{lat:6.5124631, lng:3.2787711}},
          {id:6, key:'6', defaultAnimation:2, label:'MRS Gas Filling Station', position:{lat:6.5101126, lng:3.291358}},
          {id:7, key:'7', defaultAnimation:2, label:'Conoil Gas Filling Station', position:{lat:6.5075298, lng:3.2930413}},
          {id:8, key:'8', defaultAnimation:2, label:'MRS Gas Filling Station', position:{lat:6.5062752, lng:3.3074624}},
          {id:9, key:'9', defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.613641, lng:3.2583028}},
          {id:10, key:'10', defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.5120571, lng:3.2892032}},
          {id:11, key:'11', defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.4429131, lng:3.3516216}},
          {id:12, key:'12', defaultAnimation:2, label:'Oando Gas Filling Station', position:{lat:6.5134438, lng:3.2475515}},
          {id:13, key:'13', defaultAnimation:2, label:'Forte Gas Filling Station', position:{lat:6.4438992, lng:3.3566779}},
          {id:14, key:'14', defaultAnimation:2, label:'NPPC Gas Filling Station Isheri', position:{lat:6.534994, lng:3.2353529}},
          {id:15, key:'15', defaultAnimation:2, label:'Total Gas Filling Station', position:{lat:6.4538655, lng:3.3331237}},
          {id:16, key:'16', defaultAnimation:2, label:'Mobile Gas Filling Station Apapa', position:{lat:6.5386857, lng:3.2847987}},

          ]

    return (
        <div className="wrapper">
            <div className="sidebar" data-background-color="white" data-active-color="danger">
            <div className="sidebar-wrapper" style={{height:960}}>
                <Map
                    onMapReady={ (map) => {
                        if (this.state.map !=null)
                            return

                            //console.log('onMapReady: '+JSON.stringify(map.getCenter()))
                            this.setState({
                              map: map
                            })
                          }}
                          markers={markers}
                          zoom={14}
                          center={{lat:6.5291228, lng:3.2507272}}
                          containerElement={<div style={{height:100+'%'}} />}
                          mapElement={<div style={{height:100+'%'}} />} />

                        </div>
                    </div>

            <div className="main-panel">
                <Nav />

                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <Item />
                            <Item />
                            <Item />
                            <Item />
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
