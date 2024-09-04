import { Navbar } from "../Navbar/Navbar";
import style from './Header.module.scss';

export function Header(){

    return(
        <header className={style.headerStyling}>
            <Navbar></Navbar>
            <div className={style.backdrop}>
                <h1>Lexiconline</h1>
            </div>
        </header>
    )
}