import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function MainLayout(){

    return(
        <>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
        </>

    )
}