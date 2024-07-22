import { FetchProjects } from "./FetchProjects"
export default function Projects(){
  const {
    projects,isLoading
  }  = FetchProjects();
  console.log(projects);
  if(isLoading){
    return <section className="projects">
      <h2>loading...</h2>
    </section>
  }
  return <section className="projects">
    <div className="title">
      <h2>projects</h2>
      <div className="title-underline"></div>
    </div>
    <div className="projects-center">
      {projects.map(item=>{
        const {id,img,title,url} = item
        return <a href={url} key={id} className="project" target="_blank" rel="noreferrer">
          <img src={img} alt={title} className="img" />
          <h5>{title}</h5>
        </a>
      })}
    </div>
  </section>
}