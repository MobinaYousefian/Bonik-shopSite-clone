'use client'
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const status = ['On Sale', 'In Stock', 'Featured'];

const SearchInput = ({option}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    const queriesArray = Array.from(searchParams.values());


    const handleRatingQuery = (id) => {
        if (searchParams.has("q")) {
            if (searchParams.has("rating")) {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.delete("rating");
                urlSearchParams.append("rating", id);
                router.push(`${pathName}?${urlSearchParams}`);
            }else {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.append("rating", id);
                router.push(`${pathName}?${urlSearchParams}`);
            }
        }else {
            const urlSearchParams = new URLSearchParams(searchParams);
            urlSearchParams.set("rating", id);
            router.push(`${pathName}?${urlSearchParams}`);
        }
    };

    const handleStringQuery = (title) => {
        const hasStatus = status.includes(title);

        if (  hasStatus || (hasStatus && searchParams.has("status")) ) {
            const urlSearchParams = new URLSearchParams(searchParams);
            urlSearchParams.set("status", title);
            router.push(`${pathName}?${urlSearchParams}`);
        }else if ( hasStatus && searchParams.has("q") ) {
            const urlSearchParams = new URLSearchParams(searchParams);
            urlSearchParams.append("status", title);
            router.push(`${pathName}?${urlSearchParams}`);
        }else {
            const urlSearchParams = new URLSearchParams(searchParams);
            urlSearchParams.set("q", title);
            router.push(`${pathName}?${urlSearchParams}`);
        }
    };

    const handleQueryParam = (title, id) => {
        if (typeof title === "object") {
            handleRatingQuery(id)
        }else {
            handleStringQuery(title)
        }
    };

    return(
        <>
            {option.map(o => (
                <label onClick={() => handleQueryParam(o.title, o.id)} key={o.id} className="container">
                    {o.title}
                    <input type="checkbox" checked={queriesArray.includes(o.title) || queriesArray.includes(`${o.id}`)} name="radio" readOnly />
                    <span className="checkmark"> </span>
                </label>
            ))}
        </>
    )
}

export default SearchInput