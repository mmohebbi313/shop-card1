import React , {useContext, useEffect} from "react";
import './asidBar.css'
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProductsCont from "../contex/contex";


export default function AsideBar({ show, handleClose }){
  
  const {dataShopCard} = useContext(ProductsCont)
  const {setDataShopCard} = useContext(ProductsCont)

  const deletin = (uu)=>{
    let newData = dataShopCard.filter( rr => rr.name !== uu)
    setDataShopCard(newData)
  }

  const deletAll = ()=> {
    setDataShopCard([])
  }

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>سبد خرید</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <div className="mainDiv">
            {dataShopCard.map( tt => (
              
               <div className="div">
               <p style={{marginLeft:'-1vw'}}>{tt.name}</p>
               <p style={{marginLeft:'5vw'}}>{tt.price}$</p>
               <p style={{marginLeft:'5vw'}}>cont: {tt.cont}</p>
               <p onClick={() => deletin(tt.name)} style={{padding:'1.5px',marginLeft:'36px' , cursor:'pointer', backgroundColor:'white', borderRadius:'5px', color:'black'}}>delet</p>
               <hr  className="hr"/>
               </div>
               
            ))}
            </div>
            <button onClick={()=> deletAll()} style={{marginLeft:'13vw' , cursor:'pointer', backgroundColor:'red', borderRadius:'0.3vw', alignItems:'center', marginTop:'2vw'}}>delet All</button>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose} >close</button>
          </Modal.Footer>
        </Modal>
      );
    
}