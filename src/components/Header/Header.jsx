import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {useModeSwitchStore} from '../../store/dark-mode-store';


function Header(){

    const headerList = [
        {name: 'ГЛАВНАЯ', link: '/'},
        {name: 'ПРО МЕНЯ', link: '/about-me'},
        {name: 'КОНТАКТЫ', link: '/contacts'},
    ]

    const colorMode = useModeSwitchStore((state) => state.mode)
    const switchColorMode = useModeSwitchStore((state) => state.setMode)
    console.log(colorMode)

    return (
        <header className={styles.header}>
            <ul className={styles.list}>
                {
                    headerList.map(function (el, index){
                        return(
                            <li className={styles.points} key={index}><Link className={styles.links} to={el.link}>{el.name}</Link></li>
                        )
                    })
                }
            </ul>
            <button onClick={switchColorMode}>{colorMode? 'Светлая':'Темная'}</button>
        </header>
    )
}

export default Header