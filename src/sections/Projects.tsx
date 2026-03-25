import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"

export default function Projects() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}