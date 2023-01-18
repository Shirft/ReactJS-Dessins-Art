import ItemDetail from "../../../components/ItemDetail/ItemDetail"
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
    const ListaProductos=[
        {id:'1', title:'Mate de wolverine', description:'Mate con tematica de anime', price:1400, pictureUrl:'./images/vasologan.png'},
        {id:'2', title:'Mate gojo', description:'Mate con tematica de anime', price:1400, pictureUrl:'./images/vasogojo1.png'},
        {id:'3', title:'Mate kakashi', description:'Mate con tematica de anime', price:1400, pictureUrl:'./images/vasokakashi.png'},
        {id:'4', title:'Mate spiderman', description:'Mate con tematica de anime', price:1400, pictureUrl:'./images/spiderman.png'},
        {id:'5', title:'Mate madre', description:'Mate con tematica de anime', price:1200, pictureUrl:'./images/madre.png'}, 
        {id:'6', title:'Cuadro naruto', description:'Cuadro con tematica de anime', price:600, pictureUrl:'./images/cuadronaruto1.png'},
        {id:'7', title:'Cuadro shoto', description:'Cuadro con tematica de anime', price:600, pictureUrl:'./images/cuadroshoto1.png'},
        {id:'8', title:'Cuadro kakashi', description:'Cuadro con tematica de anime', price:1200, pictureUrl:'./images/cuadrokakashiygai.png'},
        {id:'9', title:'Cuadro promo 1', description:'Cuadro con tematica de anime', price:1400, pictureUrl:'./images/levi.png'},
        {id:'10', title:'Cuadro promo 2', description:'Cuadro con tematica de anime', price:2100, pictureUrl:'./images/megumi.png'},
        ];
    let UnProducto=ListaProductos.find(prod=>prod.id==2)
    const[oneproduct, setOneproduct]=useState({});

    const Producto=new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(UnProducto)
        }, 2000)
      });
    
      useEffect(()=>{
        Producto
        .then((result)=>
          setOneproduct(result)
        )
        .catch((error)=>
          console.log(error)
        )
      }, [])
  return (
    <div>
        <ItemDetail objeto={oneproduct}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer