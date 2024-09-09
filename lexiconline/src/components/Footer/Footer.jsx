import style from "./Footer.module.scss";
export function Footer() {
  return (
    <footer className={style.footerStyling}>
      <section>
        <p>Address:</p>
        <p>Somestreet 232</p>
        <p>Luxemborg</p>
      </section>
      <section>
        <p>Contact:</p>
        <p>Email: somemail@mail.com</p>
        <p>Phone: 44332343</p>
      </section>
      <section>
        <p>With special thanks to</p>
        <p>
          <a href="https://dictionaryapi.dev" target="_blank">
            https://dictionaryapi.dev
          </a>
        </p>
        <p>For the awesome API</p>
      </section>
      <section className={style.logoStyling}>
        <div>
          <img src="../src/assets/Book.svg" alt="" />
        </div>
        <h6>Lexiconline</h6>
      </section>
    </footer>
  );
}
