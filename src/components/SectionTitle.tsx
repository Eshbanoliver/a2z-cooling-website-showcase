interface SectionTitleProps {
  badge?: string;
  badgeClass?: string;
  title: string | React.ReactNode;
  description?: string;
  dark?: boolean;
}

export default function SectionTitle({ badge, badgeClass = '', title, description, dark = false }: SectionTitleProps) {
  return (
    <div className="section-title">
      {badge && <span className={`badge ${badgeClass}`}>{badge}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
