import {ProductData} from "@/library/ProductData";
import SearchCategoryPage from "@/components/SearchCategoryPage";

export default function SearchCategory({params}) {
    const category = params.category;
    const categoryData = ProductData.filter(p => p.category === category);

    return (
        <SearchCategoryPage categoryData={categoryData}/>
     )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: {category: '1'} }
        ],
        fallback: 'blocking'
    };
}