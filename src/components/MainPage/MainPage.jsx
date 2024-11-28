import styles from './MainPage.module.scss'
import {useToDoStore} from '../../store/todo-store'
import {useModeSwitchStore} from '../../store/dark-mode-store'

function MainPage(){
    const todos = useToDoStore((state) => state.todos);
    const colorMode = useModeSwitchStore((state) => state.mode);

    return (
        <div className={styles.mainPage} style={colorMode ? {backgroundColor: "white"} : {backgroundColor: "black"}}>
            <h4>TODOS:</h4>
            <ul className={styles.mainList}>
                {todos.map( (el, index) => {
                    return(
                        <li key={index}>{el.task}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MainPage