import style from "./WordMeaning.module.scss";

export function WordMeaning({
  wordClass,
  definitions = [],
  synonyms = [],
  antonyms = [],
  synonymClick,
  antonymClick,
}) {
  // trækker alle 'example' ud af definitions arrayet, flatmap mapper hver definition til et array med 'example' og returnerer et enkelt array
  const examples = definitions.flatMap((def) =>
    def.example ? [def.example] : [""]
  );

  return (
    <section className={style.sectionStyling}>
      <h2>{wordClass}:</h2>
      <section className={style.classSection}>
        {/* Tjekker om der er nogle definitioner og viser dem i en ol */}
        {definitions.length > 0 && (
          <section>
            <ol>
              {/* Viser hver definition */}
              {definitions.map((def, index) => (
                <li key={index}>"{def.definition}"</li>
              ))}
            </ol>
          </section>
        )}
        {/* Tjekker om der er nogle eksempler og filtrerer de tomme eksempler fra og viser dem i en ul */}
        {examples.filter((example) => example !== "").length > 0 && (
          <section>
            <h3>Example:</h3>
            <ul>
              {/* Viser hvert eksempel hvis det findes og ikke er tomt */}
              {examples.map((example, index) =>
                example !== "" ? (
                  <li key={index}>
                    {index + 1}. "{example}"
                  </li>
                ) : null
              )}
            </ul>
          </section>
        )}

        {/* Tjekker om der er nogle synonymer og viser dem i en ul */}
        {synonyms.length > 0 && (
          <section>
            <h3>Synonyms:</h3>
            <ul>
              {synonyms.map((synonym, index) => (
                <li key={index} onClick={() => synonymClick(synonym)}>
                  <span>"{synonym}"</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tjekker om der er nogle antonymer og viser dem i en ul */}
        {antonyms.length > 0 && (
          <section>
            <h3>Antonyms:</h3>
            <ul>
              {antonyms.map((antonym, index) => (
                <li key={index} onClick={() => antonymClick(antonym)}>
                  <span>"{antonym}"</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </section>
  );
}
