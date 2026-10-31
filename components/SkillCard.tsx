interface SkillCardProps {
  skill: string;
  level: string;
  description: string;
}

export default function SkillCard({ skill, level, description }: SkillCardProps) {
  return (
    <div className="p-6 rounded-lg border border-slate-700 bg-slate-900 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-slate-100">{skill}</h3>
        <span className="text-xs font-medium bg-sky-400/10 text-sky-400 px-2 py-1 rounded-full">
          {level}
        </span>
      </div>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}