import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import projectData from './data.json'

function App() {
  const [projectPending,setprojectPending] = useState(projectData.pending)
  const [projectOngoing,setprojectOngoing] = useState(projectData.ongoing)
  const [projectCompleted,setprojectCompleted] = useState(projectData.completed)
  return (
    <div className="App">
      <Header/>
      <Main projectData = {projectData} projectPending = {projectPending} 
      projectOngoing = {projectOngoing} projectCompleted = {projectCompleted}
      setprojectPending = {setprojectPending} setprojectOngoing = {setprojectOngoing}
      setprojectCompleted = {setprojectCompleted}
      />
      <Footer/>
    </div>
  );
}

export default App;
