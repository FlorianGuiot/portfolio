import ProjectHeader from "@/components/projects/ProjectHeader";



export default function Home() {
  return (
    <div>
        <ProjectHeader
          title="CVN-UP - Site communautaire"
          description="Réalisation d'un site pour une association organisant des événements festifs."
          imgUrl="/img/projects/cvnup/cvnup1.png"
          tags={['Symfony 6', 'MySQL', 'SEO', 'RGPD']}
        />
    </div>
  );
}
