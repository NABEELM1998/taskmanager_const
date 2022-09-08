const TaskItem = ({id,title,description,task,projectPending,projectOngoing,projectCompleted,
    setprojectCompleted,setprojectOngoing,setprojectPending}) => {
        const moveHandler = (_id,_taskName) => {
            if (_taskName ==="pending"){
                const toAdd = projectPending.find((item) => item.id === _id)
                setprojectPending((prevState) => {
                    return prevState.filter((item) => item.id!==_id )
                })
                
                setprojectOngoing((prevState) => {
                    return [...prevState,toAdd]
                })
            }
            else if (_taskName === "ongoing"){
                const toAdd = projectOngoing.find((item) => item.id === _id)
                setprojectOngoing((prevState) => {
                    return prevState.filter((item) => item.id!==_id )
                })
                
                setprojectCompleted((prevState) => {
                    return [...prevState,toAdd]
                })
            }
        }

    return(
        <div className="taskItem">
        <div className="itemHeader">
            <h3>{title}</h3>
                {
                (task !== "completed")?
                (<button className="taskMover" onClick={() => moveHandler(id,task)}>Move</button>):null
                }
            
        </div>
            <p> {description}</p>
        </div>
    )
}
export default TaskItem;