import ProjectCard from "../../components/ProjectCard";


export default async function Projects() {

    async function fetchProjects() {
        // Simuler un chargement réseau
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return [
            { id: 1, title: "MaPetiteAgence - CRM", description: "test", imgUrl: "./img/projects/cvnup/cvnup1.png", url: "/projects/mpa", tags: ['Symfony 7', 'Stimulus', 'PostgreSQL', 'RabbitMQ']},
            { id: 2, title: "CVN-UP - Site communautaire", description: "", imgUrl: "./img/projects/cvnup/cvnup1.png", url: "/projects/cvnup", tags: ['Symfony 6', 'MySQL', 'SEO', 'RGPD']},
            { id: 3, title: "CVN-UP - Application mobile", description: "", imgUrl: "./img/projects/cvnup-mobile/cvnup1.png", url: "/projects/cvnup-mobile", tags: ['React Native', 'Symfony 6', 'API REST']},
            { id: 4, title: "Bastide Diffusion - Gestion des photos", description: "", imgUrl: "", url: "/projects/bastide", tags: ['Symfony 6', 'jQuery']},
        ];
    }

    const projects = await fetchProjects();

    return (
        <section id="projects"  className="pt-12">
            <div className="container mx-auto px-6 h-full">
                <div className="flex justify-center">
                    <h2>Mes derniers projets</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-4 p-8">
                    {projects.map((project: any) => (
                        <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} url={project.url} tags={project.tags} />
                    ))}
                </div>
            </div>
        </section>
    );
}
