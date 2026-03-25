interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className={`page-header ${image ? 'page-header-premium' : ''}`}>
      <div className="container">
        <div className="page-header-content">
          <div className="page-header-text">
            <h1>{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
          {image && (
            <div className="page-header-image">
              <div className="image-wrapper glass-card">
                <img src={image} alt={title} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
