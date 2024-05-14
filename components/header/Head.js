import "./header-mediaQuery.css"
import {Header} from "@/components/header/Header";
import Appbar from "@/components/header/Appbar";
import MenuBar from "@/components/header/MenuBar";
import ButtonBar from "@/components/header/ButtonBar";

export const Head = () => {
    return (
        <>
            <Header/>
            <Appbar/>
            <div className={"tabletBreakPoint"}>
                <MenuBar/>
            </div>
            <div className={"mobileBreakPoint"}>
                <ButtonBar/>
            </div>
        </>
    )
}