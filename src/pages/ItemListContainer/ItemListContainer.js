import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {

  const saludo = "Lista de Productos";
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const Productos = () => {
    const db = getFirestore();
    const queryBase=collection(db, "items");
    const querySnapshot = category ? query(queryBase, where("categoryId", "==", category)) : queryBase; 
    
    getDocs(querySnapshot)
        .then((response) => {
          const datos = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLoading(false);
          setProduct(datos);
        })
        .catch((error) => console.log(error));
/*
    if (category) {
      const newConfiguration = query(
        querySnapshot,
        where("categoryId", "==", category)
      );
      getDocs(newConfiguration)
        .then((response) => {
          const datos = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLoading(false);
          setProduct(datos);
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const datos = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLoading(false);
          setProduct(datos);
        })
        .catch((error) => console.log(error));
    }*/
  };

  useEffect(() => {
    Productos();
  }, [category]);

  return (
    <div>
      {loading == true ? (
        <Loading />
      ) : (
        <ItemList productos={product} greeting={saludo} />
      )}
    </div>
  );
};

export default ItemListContainer;
