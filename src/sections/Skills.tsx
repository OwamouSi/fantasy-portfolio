import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

export default function Skills() {
  return (
    <Section>
      <Container>
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300">React, TypeScript, Tailwind, Framer Motion, Git</p>
      </Container>
    </Section>
  );
}