import Container from "../components/layout/Container"
import Section from "../components/layout/Section"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <Section>
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold">
            Hi, I'm Alex
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Frontend Developer
          </p>

        </motion.div>

      </Container>
    </Section>
  )
}