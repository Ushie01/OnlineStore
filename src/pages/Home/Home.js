import React, {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Female from '../../assets/female.svg'
import Male from '../../assets/male.svg'
import Transgender from '../../assets/transgender.svg'
import NewOne from '../../assets/new1.png'
import EurSix from '../../assets/eur6.jpeg'
import Eur45 from '../../assets/eur45.jpg'
import ProducContext from '../../context/products/productContext'

function Home() {
  const style = {
    color: '#000'
  }

  return (
    <>
      
      <div className="container-fluid">
        <div className="row brand">
          <marquee className="marquee" behavior="scroll" direction="right" scrollamount="12" width="100%"><h1>UNLEASH RADICALITY</h1></marquee>
          <marquee className="marquee1" behavior="scroll" direction="left" scrollamount="12" width="100%"><h3>ME AND MY FRIENDS ARE SOUL FOOD, WE AREN'T EYE CANDY</h3></marquee>
        </div>
      </div>
      
      <div className="container-fluid cont">
        <div className="row firstRow">
          <div className="firstChild">
            <div className="row1 er">
              <button className="button">Shop Now <img src={Male} className="female img-fluid" alt={Male} /></button>
            </div>
            <hr />
            <h3 className="Euph">Euphorya</h3>
            <p className="Euph_p">At Euphorya, theres something for everyone at the BEST price without 
              compromising on quaity.</p>
          </div>
          <div className="firstChild">
            <div className="row1 er1">
              <button className="button"> Shop Now <img src={Female} className="female" alt={Female} />
              </button>
            </div>
            <hr />
            <h3 className="Euph1">Fury</h3>
            <p className="Euph_p">At Euphorya, theres something for everyone at the BEST price without 
              compromising on quaity.</p>
          </div>
          <div className="firstChild">
            <div className="row1 er2">
              <button className="button"> Shop Now <img src={Transgender} className="female" alt={Transgender} />
              </button>
            </div>
            <hr />
            <h3 className="Euph2">Ecstasy</h3>
            <p className="Euph_p">At Euphorya, theres something for everyone at the BEST price without 
              compromising on quaity.</p>
          </div>
        </div>
      </div>
      
      
      <div className="container-fluid">
        <div className="row roWW">
          <div className="rowOne secondChild">
              <img className="new1 img-fluid" src={NewOne} alt="" />
            <h2 className="everything">Radical street</h2>
            <p className="p" style={style} >fashion and urban clothings at it's best</p>
            <button className="shop"> Shop Now = </button>
          </div>
          <div className="rowTwo secondChild"><img src={EurSix} className="img-fluid" alt="" /></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div id="drop">
            <p className="it">Euphorya brand is inspired</p>
            <p className="to">With clear vision</p>
            <p className="line">___</p>
            <p className="put"> for social consciousness and to make a statement with unique street clothings</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row Party">
          <div className="left esc"><img src={Eur45} className="img-fluid" alt="" /></div>
          <div className="left">
            <div className="season">
              <p id="it" style={style}>Radical street</p>
              <p id="to" style={style}>fashion</p>
              <p id="line" style={style}>___</p>
              <p id="put" >and urban Clothing at it's best</p>
              <button className="nowS"> Shop Now </button>
            </div>
          </div>
        </div>
      </div>
    

      {/* <!-- What people are saying --> */}
      
    </>
  )
}

export default Home
