import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import product from './product';


function Item({}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="card-info">
                <p className="text-title">{product.name}</p>
                <p className="text-body">{product.description}</p>
            </div>
            <div className="card-footer">
                <span className="text-price">${product.price}</span>
                <Link to={"/producto/" + product.id}>
                    <InfoIcon className="button-icon" />
                </Link>
            </div>
        </div>
    )
}

export default Item;