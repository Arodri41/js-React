import Item from "./Item";
import { Box } from "@mui/material";

const ItemList = ({ products }) => {
  return (
    <Box className="d-flex row justify-content-center m-3">
      {products.map((product) => {
        return <Item key={product.id} item={product} />;
      })}
    </Box>
  );
};

export default ItemList;