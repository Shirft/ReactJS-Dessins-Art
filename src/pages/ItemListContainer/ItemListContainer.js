import './ItemListContainer.css'
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const ListaProductos=[
    {id:'1', title:'Mate de wolverine', description:'Mate con tematica de anime', price:1400, pictureUrl:'../../../images/vasologan.png', category:'Mates'},
    {id:'2', title:'Mate gojo', description:'Mate con tematica de anime', price:1400, pictureUrl:'../../../images/vasogojo1.png', category:'Mates'},
    {id:'3', title:'Mate kakashi', description:'Mate con tematica de anime', price:1400, pictureUrl:'../../../images/vasokakashi.png', category:'Mates'},
    {id:'4', title:'Mate spiderman', description:'Mate con tematica de anime', price:1400, pictureUrl:'../../../images/spiderman.png', category:'Mates'},
    {id:'5', title:'Mate madre', description:'Mate con tematica de anime', price:1200, pictureUrl:'../../../images/madre.png', category:'Mates'}, 
    {id:'6', title:'Cuadro naruto', description:'Cuadro con tematica de anime', price:600, pictureUrl:'../../../images/cuadronaruto1.png', category:'Cuadro'},
    {id:'7', title:'Cuadro shoto', description:'Cuadro con tematica de anime', price:600, pictureUrl:'../../../images/cuadroshoto1.png', category:'Cuadro'},
    {id:'8', title:'Cuadro kakashi', description:'Cuadro con tematica de anime', price:1200, pictureUrl:'../../../images/cuadrokakashiygai1.png', category:'Cuadro'},
    {id:'9', title:'Cuadro promo 1', description:'Cuadro con tematica de anime', price:1400, pictureUrl:'../../../images/levi.png', category:'Cuadro'},
    {id:'10', title:'Cuadro promo 2', description:'Cuadro con tematica de anime', price:2100, pictureUrl:'../../../images/megumi.png', category:'Cuadro'},
    ];
  
  const {category}=useParams();
  const[product, setProduct]=useState([]);
  //const[filtraje, setFiltraje]=useState([]);

  const Productos=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(ListaProductos)
    }, 2000)
  });

  useEffect(()=>{
    Productos
    .then((result)=>{
      if(category){
        setProduct(result.filter((cat)=> cat.category===category))
      }else{
        setProduct(result)
      } 
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [category]);
/*
  useEffect(()=>{
    if(category){
      let filtro=product.filter((cat)=>{ return cat.category==category});
      setFiltraje(filtro);
    }
  }, [category])
*/
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount></ItemCount>
        <ItemList productos={product}></ItemList>
    </div>
  );
};

export default ItemListContainer