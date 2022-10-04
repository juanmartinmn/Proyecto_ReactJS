import Item from "./Item";

const ItemList = ({products}) => {

    return (
        <>
        <h3>ItemList</h3>
            {products.map((product)=>(
                <Item key={product.id} product ={product}/>))
            }
        </>
    )
}

export default ItemList;