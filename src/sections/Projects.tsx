import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

export default function Projects() {
  return (
    <Section>
      <Container>
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-300">Here will be my portfolio projects (chess trainer, fantasy book tracker, etc.)</p>
      </Container>
    </Section>
  );
}