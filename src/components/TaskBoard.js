import TaskList from "./TaskList";
const TaskBoard = ({projectPending,projectOngoing,projectCompleted,
    setprojectCompleted,setprojectOngoing,setprojectPending}) => {
    return (
        <div className="taskBoard">
            <TaskList pending = {projectPending} task = "pending" projectPending = {projectPending}
            projectOngoing = {projectOngoing} projectCompleted = {projectCompleted}
            setprojectPending = {setprojectPending} setprojectOngoing = {setprojectOngoing}
            setprojectCompleted = {setprojectCompleted}
            />

            <TaskList pending = {projectOngoing} task = "ongoing" projectOngoing = {projectOngoing}
            projectCompleted = {projectCompleted} projectPending = {projectPending}
            setprojectPending = {setprojectPending} setprojectOngoing = {setprojectOngoing}
            setprojectCompleted = {setprojectCompleted}/>

            <TaskList pending = {projectCompleted} task = "completed"
            projectCompleted = {projectCompleted}
            projectPending = {projectPending} projectOngoing = {projectOngoing}
            setprojectPending = {setprojectPending} setprojectOngoing = {setprojectOngoing}
            setprojectCompleted = {setprojectCompleted}
            />

        </div>
    )
}
export default TaskBoard;