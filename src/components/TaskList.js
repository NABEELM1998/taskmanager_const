import TaskItem from "./TaskItem";
const TaskList = ({pending,task,projectPending,projectOngoing,projectCompleted,
    setprojectCompleted,setprojectOngoing,setprojectPending}) => {
    return (
        <div className="taskColumn">
        <div className="taskHeader">
            <h2>{task}</h2>
            <div className={`taskCount ${task}`} >{pending.length}</div>
        </div>
        <div className="taskList">
            {pending.map((item) => {
                return (<TaskItem {...item} key = {item.id} task={task} 
                    projectCompleted = {projectCompleted}
                    projectPending = {projectPending} 
                    projectOngoing = {projectOngoing}
                    setprojectPending = {setprojectPending} 
                    setprojectOngoing = {setprojectOngoing}
                    setprojectCompleted = {setprojectCompleted}
                /> )
               
            })}
           
        </div>
    </div>
    )
}
export default TaskList;