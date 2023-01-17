import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) => {
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
  const[product, setProduct]=useState([]);
  const[oneproduct, setOneproduct]=useState({});

  const Productos=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(ListaProductos)
    }, 2000)
  });

  useEffect(()=>{
    Productos
    .then((result)=>{
      setProduct(result)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

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
        <h1>{greeting}</h1>
        <ItemCount></ItemCount>
        <ItemList productos={product}></ItemList>
        <ItemDetailContainer props={oneproduct}></ItemDetailContainer>
    </div>
  );
};

export default ItemListContainer