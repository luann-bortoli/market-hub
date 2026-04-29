import s from './Header.module.css'

type navItems = {
    title: string,
    href?: string
}

const navItemsList: navItems[] = 
[
    {
        title: "Mercearia",
        href: "#"
    },{
        title: "Bebidas",
        href: "#"
    },{
        title: "Congelados",
        href: "#"
    },{
        title: "Laticíneos",
        href: "#"
    }
]

const NavItems = () => {
    return(
        <>
            {navItemsList.map((item, index) => {
                return(
                    <div className={s.navItem} key={index}>
                        <a href={item.href}>{item.title}</a>
                    </div>
                )
            })}
        </>
    )
}

export default function Header(){
    return(
        <>
            <div className={s.mainContainer}>
                <div className={s.contentWrapper}>

                    <div className={s.startWrapper}>
                        <div className={s.logoWrapper}>
                            <svg fill="#F3F3F4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"></path></g></svg>
                            <p className={s.logoTitle}>MARKET HUB</p>
                        </div>
                    </div>

                    <div className={s.centerWrapper}>
                        <div className={s.searchWrapper}>
                            <input type="text" className={s.searchInput} placeholder='Buscar por produtos, marcas e muito mais...'/>
                            <div className={s.searchButton}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </div>
                    </div>

                    <div className={s.endWrapper}>
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#F3F3F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </a>
                    </div>

                </div>
            </div>
            <div className={s.navContainer}>
                <div className={s.navWrapper}>

                    <div className={s.catWrapper}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#F3F3F4" stroke-width="2" stroke-linecap="round"></path> <path d="M5 17H20" stroke="#F3F3F4" stroke-width="2" stroke-linecap="round"></path> <path d="M5 7H20" stroke="#F3F3F4" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                        <div className={s.catTitle}>Todas as categorias</div>
                    </div>

                    <div className={s.itemsWrapper}>
                        <NavItems />
                    </div>

                </div>
            </div>
        </>
    )
}