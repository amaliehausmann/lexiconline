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
        {definitions.length > 0 && (
          <section>
            <ol>
              {definitions.map((def, index) => (
                <li key={index}>"{def.definition}"</li>
              ))}
            </ol>
          </section>
        )}

        {examples.filter((example) => example !== "").length > 0 && (
          <section>
            <h3>Example:</h3>
            <ul>
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
