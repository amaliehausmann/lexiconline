import { PageTitle } from "../components/Pagetitle/Pagetitle";
import { TitleBox } from "../components/TitleBox/TitleBox";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { useState } from "react";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { SearchedWord } from "../components/WordSearch/SearchedWord/SearchedWord";
import { WordMeaning } from "../components/WordSearch/WordMeaning/WordMeaning";

export function Home() {
  const [wordData, setWordData] = useState(null);
  const [searchedWord, setSearchedWord] = useState('');

  async function SearchWord() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    setWordData(data[0]);
    console.log(data[0]);
  }

  return (
    <div>
      <PageTitle pageTitle="Home"></PageTitle>
      <TitleBox title='Enter a word to search for'>
        <Searchbar
          action={() => SearchWord()}
          input={(e) => setSearchedWord(e.target.value)}
        ></Searchbar>
      </TitleBox>
      <PageWrapper>
        {wordData && <SearchedWord word={wordData.word}></SearchedWord>}
        {wordData?.meanings.map((meaning, index) => (
          <WordMeaning
            key={index}
            wordClass={meaning.partOfSpeech}
            definitions={meaning.definitions.map(def => ({
              definition: def.definition || [],
              example: def.example || '',
            }))}
            synonyms={meaning.synonyms || []}
            antonyms={meaning.antonyms || []}
          />
        ))}
      </PageWrapper>
    </div>
  );
}
