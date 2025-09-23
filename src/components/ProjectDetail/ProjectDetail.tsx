import Image from "next/image";
import { Badge } from "../Badge/Badge";

interface Project {
  title: string;
  subtitle: string;
  gif?: string;
  challenges: string[];
  goals: string[];
  results: string[];
  technologies: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        {project.gif && (
          <Image
            src={project.gif}
            width={400}
            height={225}
            alt={`Demonstração do projeto ${project.title}`}
            className="rounded-sm shadow-md w-full"
            unoptimized={true}
          />
        )}
      </div>

      {/* Subtítulo */}
      <p className="font-body text-sm text-justify">{project.subtitle}</p>

      {/* Grid de Informações */}
      <div className="grid gap-4">
        {/* Tecnologias */}
        <div>
          <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
            Tecnologias utilizadas
          </h3>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                className="bg-[#0d1220] text-[#99a2a4] px-2 py-1 rounded text-xs border border-white/5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Desafios */}
        <div>
          <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
            Desafios
          </h3>
          <ul className="space-y-1">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="font-body text-xs text-[#99a2a4]">
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Metas & Resultados */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
              Metas
            </h3>
            <ul className="space-y-1">
              {project.goals.map((goal, index) => (
                <li key={index} className="font-body text-xs text-[#99a2a4]">
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
              Resultados
            </h3>
            <ul className="space-y-1">
              {project.results.map((result, index) => (
                <li key={index} className="font-body text-xs text-[#99a2a4]">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
