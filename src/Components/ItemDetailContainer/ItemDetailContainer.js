import { useEffect, useState } from "react";
import { data } from "../../data/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import PageDetail from "../PageDetail/PageDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
  useEffect(() => {
    getData.then((response) => {
      setProduct(response[0]);
    });
  }, []);
  return <div>{product && <ItemDetail product={product} />}</div>;
};
<PageDetail />;
export default ItemDetailContainer;
