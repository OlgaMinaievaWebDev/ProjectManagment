import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else {
    content = <NoProjectSelected onStartAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
