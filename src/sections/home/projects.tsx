import ProjectCard from "../../components/ProjectCard";


export default async function Projects() {

    async function fetchProjects() {
        // Simuler un chargement réseau
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return [
            { id: 1, title: "Projet A", description: "", imgUrl: "", url: ""},
            { id: 2, title: "Projet B", description: "", imgUrl: "", url: ""},
            { id: 3, title: "Projet C", description: "", imgUrl: "", url: ""},
            { id: 4, title: "Projet D", description: "", imgUrl: "", url: ""},
        ];
    }

    const projects = await fetchProjects();

    return (
        <section id="projects"  className="pt-12">
            <div className="container mx-auto px-6 h-full">
                <div className="flex justify-center">
                    <h2>Mes derniers projets</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 p-8">
                    {projects.map((project: any) => (
                        <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} url={project.url} />
                    ))}
                </div>
            </div>
        </section>
    );
}
