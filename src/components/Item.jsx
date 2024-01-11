import { useState } from "react"

export default function Item({ id, title, status }) {

    const [checked, setChecked] = useState(status);
    const [vsible, setVisible] = useState(true);
    // const [edit, setEdit] = useState(false);

    // const editTodo = () => {
    //     setEdit(true);
    //     if (edit) {
    //         <div>
    //             <input type="text" />
    //             <button>Edit</button>
    //         </div>
    //         return {title};
    //     } 
    // }


    const removeElement = () => {
        setVisible(prev => !prev);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        let removeTodos = storedTodos.filter(item => {
            if (item.id !== id) {
                return true;
            } else {
                return false;
            }
        })
        localStorage.setItem('tasks', JSON.stringify(removeTodos));

    }


    const classes = ['todo'];


    if (checked) {
        classes.push('status');
    }

    

    const updateStatus = () => {
        setChecked(!checked);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        storedTodos.map(item => {
            if (item.id === id) {
                item.status = !checked;
            }
            return true;
        })
        localStorage.setItem('tasks', JSON.stringify(storedTodos))
    }

    return (
        <>
            {vsible && (
                <li className={classes.join(' ')}>
                    <label>
                        <input type="checkbox" checked={checked} onChange={updateStatus} />
                        <span>{title}</span>
                        <button onClick={editTodo}>Edit</button>
                        <i onClick={removeElement} className="material-icon red-text">X</i>
                    </label>
                </li>
            )}
        </>

    )
}