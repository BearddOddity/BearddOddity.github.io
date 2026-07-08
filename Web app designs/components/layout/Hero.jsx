export function Hero({ kicker, title, description, actions, className = "" }) {
  return (
    <section className={`bd-hero ${className}`.trim()}>
      <div className="bd-hero-glow" />
      <div className="bd-container">
        {kicker && <div className="bd-hero-kicker">{kicker}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {actions && <div className="bd-hero-actions">{actions}</div>}
      </div>
    </section>
  );
}
