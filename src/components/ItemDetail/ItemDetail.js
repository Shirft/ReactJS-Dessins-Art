
const ItemDetail = ({objeto}) => {
  return (
    <div>
        <img alt={objeto.description} src={objeto.pictureUrl}/>
        <div>
            {objeto.title}
            <div>
                Precio: {objeto.price}
            </div>
            <p>
                Descripción del producto:
                <br/>
                {objeto.description}
            </p>
        </div>
    </div>
  )
}

export default ItemDetail