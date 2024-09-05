import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import style from './MainLayout.module.scss'

export function MainLayout(){

    return(
        <>
        <Header></Header>
        <main className={style.mainLayoutStyling}>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </>

    )
}