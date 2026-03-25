import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          I am a frontend developer with 2 years of experience, passionate about chess and fantasy worlds.
        </p>
      </Container>
    </Section>
  );
}