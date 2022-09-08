import TaskBoard from "./TaskBoard";

const Main = ({projectData,projectPending,projectOngoing,projectCompleted
                ,setprojectCompleted,setprojectOngoing,setprojectPending}) => {
   
    return (
        <div className="appMain">
            <TaskBoard projectPending = {projectPending} 
      projectOngoing = {projectOngoing} projectCompleted = {projectCompleted}
      setprojectPending = {setprojectPending} setprojectOngoing = {setprojectOngoing}
      setprojectCompleted = {setprojectCompleted}
      />
        </div>
        
    )
}
export default Main;