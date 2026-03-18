import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

export default function Contact() {
  return (
    <Section>
      <Container>
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-300">You can reach me via email or social links.</p>
      </Container>
    </Section>
  );
}