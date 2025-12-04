import { Card } from "../../../components/Card/Card";
import "./WorkCard.css";

export interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  url: string;
  githubUrl: string;
}

interface WorkCardProps {
  work: Work;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Card>
      <img src={work.imageUrl} alt={work.title} className="work-image" />
      <div className="work-content">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
        <div className="work-tech">
          {work.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="work-links">
          {work.githubUrl !== "#" && (
            <a href={work.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
