import React from 'react';
import TaskGroup from './taskgroup/TaskGroup';
import './TaskList.css';

class TaskList extends React.Component {

    componentDidMount() {
        // ukljucimo loading spiner
        // poslati zahtev ka apiju 
        // dobijemo moje taskove i grupne taskove
        // iskljucimo loading spinner
        // dve liste
        // prikazujemo naslov MyTasks ispod toga moji taskovi, i isto za Group Tasks
        // ako je jedna od listi prazna ne prikazujemo ni naslov
        // ako su obe prazne prikazuje se poruka da nema taskova
    }

    render() {
        return (
            <div className="TaskList">
                <TaskGroup />
                <TaskGroup />
            </div>
        );
    }
}

export default TaskList;