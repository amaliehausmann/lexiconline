import style from './PageWrapper.module.scss'
export function PageWrapper({children}){

    return(
        <section className={style.pageStyling}>
            {children}
        </section>
    )
}