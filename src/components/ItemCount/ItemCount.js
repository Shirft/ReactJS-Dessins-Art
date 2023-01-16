import Button from 'react-bootstrap/Button';

const ItemCount = () => {
  return (
    <div>
        <div>
        <Button variant="primary">-</Button>
            0
            <button>+</button>
        </div>
        <div>
            <button>Agregar al carrito</button>
        </div>
        
    </div>
  )
}

export default ItemCount