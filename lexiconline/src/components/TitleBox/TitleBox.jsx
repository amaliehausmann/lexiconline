import style from './TitleBox.module.scss'

export function TitleBox({title, children, styling}){

    return(
        <div className={`${style[styling]}`}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}