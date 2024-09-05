import style from './SearchedWord.module.scss'
export function SearchedWord({action, word}){

    return(
        <div className={style.searchedWordStyling}>
            <div>
            <img src="../src/assets/Audio.svg" alt="" onClick={action}/>
            </div>
            <h1>{word}</h1>
        </div>
    )
}