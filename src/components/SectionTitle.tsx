interface SectionTitleProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  dark?: boolean;
}

export default function SectionTitle({ badge, title, description, dark = false }: SectionTitleProps) {
  return (
    <div className="section-title">
      {badge && <span className="badge">{badge}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
