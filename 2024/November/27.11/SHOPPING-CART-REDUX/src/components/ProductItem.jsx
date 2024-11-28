import { addItem } from "../store/slices/cartSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

const ProductItem = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    
    const dispatch = useDispatch();

    function handleAddItem(item) {
        const itemData = {
            ...item,
            quantity,
            totalItemPrice: item.price * quantity,
        };
        dispatch(addItem(itemData));
    }
    return (
        <div>
            <span>
                {item.name}  -  {item.price}$
            </span>
            <div>
                <button onClick={() =>  setQuantity((state) => state + 1)}>+</button>
                <span>{quantity}</span>
                <button onClick={() =>  setQuantity((state) => state - 1)}>-</button>
            </div>
            <button onClick={() => handleAddItem(item)}>Add to Cart</button>
                
        </div>
    )
};

export default ProductItem