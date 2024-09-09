import { PageTitle } from "../components/Pagetitle/Pagetitle";
import { TitleBox } from "../components/TitleBox/TitleBox";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { SearchedWord } from "../components/WordSearch/SearchedWord/SearchedWord";
import { WordMeaning } from "../components/WordSearch/WordMeaning/WordMeaning";

export function Home() {
  const [wordData, setWordData] = useState(null);
  const [searchedWord, setSearchedWord] = useState("hello");

  // Asynkron funktion der kalder API'et med det søgte ord fra dictionary API
  async function SearchWord() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    // Tager det første objekt i arrayet
    setWordData(data[0]);
    console.log(data[0]);
  }

  // Useeffect der sørger for at SearchWord funktionen bliver kaldet med ordet hello ved load
  useEffect(() => {
    SearchWord("hello");
  }, []);

  // Funktion der afspiller lydfil når kaldet
  function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    console.log(audioPath);
    audio.play();
  }

  // Funktion der ændrer det søgte ord og kalder SearchWord funktion når kaldet
  function searchRelatedWord(word) {
    setSearchedWord(word);
    SearchWord(word);
  }

  return (
    <div>
      <PageTitle pageTitle="Home"></PageTitle>
      <TitleBox title="Enter a word to search for" styling="titleBoxStyle">
        {/* action: kalder SearchWord funktionen når searchknappen bliver klikket */}
        {/* input: Setter searched word til at være inputfeltets værdi */}
        <Searchbar
          action={() => SearchWord()}
          input={(e) => setSearchedWord(e.target.value)}
        ></Searchbar>
      </TitleBox>
      <PageWrapper>
        {/* Hvis der er data fra ordet bliver det vist med en lydknap og en header der viser det søgte ord */}
        {/* Når man trykker på lydknappen kaldes playAudio funktionen med lyden fra det første objekt i phonetics arrayet */}
        {wordData && (
          <SearchedWord
            word={wordData.word}
            action={() => playAudio(wordData.phonetics[0].audio)}
          ></SearchedWord>
        )}
        {/* Mapper igennem alle betydninger af det søgte ord og viser dem */}
        {wordData?.meanings.map((meaning, index) => (
          <WordMeaning
            key={index}
            wordClass={meaning.partOfSpeech}
            definitions={meaning.definitions.map((def) => ({
              definition: def.definition || [],
              example: def.example || "",
            }))}
            synonyms={meaning.synonyms || []}
            antonyms={meaning.antonyms || []}
            // Søger efter antonymer og synonymer når man klikker på ordet
            synonymClick={searchRelatedWord}
            antonymClick={searchRelatedWord}
          />
        ))}
      </PageWrapper>
    </div>
  );
}
