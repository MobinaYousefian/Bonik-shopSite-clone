import AddIcon from "@mui/icons-material/Add";
import {PMButton} from "@/style/style";

const ProductCartAdd = ({product,padding='2px', onAdd}) => {
    return(
        <PMButton sx={{padding:padding}} onClick={onAdd}>
            <AddIcon/>
        </PMButton>
    )
}

export default ProductCartAdd