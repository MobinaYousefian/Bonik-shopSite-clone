import {ProductData} from "@/library/ProductData";
import SearchCategoryPage from "@/components/SearchCategoryPage";
import {Suspense} from "react";

export default function SearchCategory({params}) {
    const category = params.category;
    const categoryData = ProductData.filter(p => p.category === category);

    return (
        <Suspense fallback={"loading"}>
            <SearchCategoryPage categoryData={categoryData}/>
        </Suspense>
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