import style from './TitleBox.module.scss'

export function TitleBox({title, children}){

    return(
        <div className={style.titleBoxStyle}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}