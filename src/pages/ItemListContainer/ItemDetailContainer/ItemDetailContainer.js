import ItemDetail from "../../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = ({props}) => {

  return (
    <div>
        <ItemDetail objeto={props}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer