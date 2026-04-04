import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { motion } from "framer-motion";
import Button from "../components/ui/Button"

export default function Hero() {
  return (
    <Section bg="/images/backgrounds/bg-hero.jpg" id="hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Frontend Developer <br />
            with a <span className="text-purple-400">Game Mindset</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-gray-300"
          >
            I build interactive web experiences using React, TypeScript
            and a bit of imagination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button variant="primary">
              View Projects
            </Button>

            <Button variant="secondary">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}