import "./ItemDetailContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const {id}=useParams();
    const[oneproduct, setOneproduct]=useState({});

    const Producto = () =>{
      const db= getFirestore();
      const querySnapshot= doc(db, "items", id);

      getDoc(querySnapshot)
      .then((response)=>{ 
        setOneproduct({id: response.id, ...response.data()})
      })
      .catch(error=> console.log(error))
    };

    useEffect(()=>{
      Producto();
    }, []);

  return (
    <div className="seleccionado">
        <ItemDetail objeto={oneproduct}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer