import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {PMButton} from "@/style/style";

const ProductCartDec = ({product,items,padding='2px', onDelete}) => {
    return(
        <PMButton sx={{padding:padding,display:items.filter(i => i.id === product.id).length === 0 ? 'none' : 'flex'}}  onClick={onDelete}>
            <HorizontalRuleIcon/>
        </PMButton>
    )
}

export default ProductCartDec