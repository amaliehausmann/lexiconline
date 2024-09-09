import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={style.navStyling}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
            to={"/"}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
            to={"/about"}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <a href="https://dictionaryapi.dev" target="_blank">
            API
          </a>
        </li>
      </ul>
      <div className={style.bigCircle}>
        <div>
          <img src="../src/assets/Book.svg" alt="" />
        </div>
      </div>
    </nav>
  );
}
