import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section bg="/images/backgrounds/bg-hero.jpg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white">Hi, I'm Alex</h1>
          <p className="mt-6 text-xl text-gray-300">Frontend Developer</p>

          <div className="flex gap-4 justify-center mt-8">
            <button className="px-6 py-3 bg-amber-700 rounded-lg text-white">
              View Projects
            </button>
            <button className="px-6 py-3 bg-gray-700 rounded-lg text-white">
              Contact
            </button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}