import Card from "../ui/Card"
import Button from "../ui/Button"

type Props = {
  title: string
  description: string
}

export default function ProjectCard({ title, description }: Props) {
  return (
    <Card>
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-gray-400 mt-2">
        {description}
      </p>

      <div className="mt-4">
        <Button>View Project</Button>
      </div>
    </Card>
  )
}