import ProductItem from './ProductItem.jsx';

const products = [
    {id: 1 , name: 'Laptop' , price: 1000},
    {id: 2 , name: 'Phone' , price: 500},
    {id: 3 , name: 'Headphones' , price: 100},
];

const Products = () => {
    return (
        <div>
            <h2>Products list</h2>
            {products.map((item) => (
                <ProductItem key = {item.id} item = {item}/>
            ))}
        </div>
    )
}

export default Products