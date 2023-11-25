import Item from './Item';
import product from './product';
import products from '../../items/productos';

function ItemList({products}) {
    return (
        <article className="itemList">
            {
                products.map((product) =>
                    <Item key={product.id} product={product} />
                )
            }
        </article>
    )
}

export default ItemList