import style from "./Searchbar.module.scss";

export function Searchbar({ input, action }) {
  return (
    <div className={style.searchbarStyling}>
      <input
        type="search"
        name="searchbar"
        onChange={input}
        placeholder="Search for a word"
      />
      <button onClick={action}>Search</button>
    </div>
  );
}
