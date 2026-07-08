export function PricingCard({ name, price, period = "/mo", features = [], action, highlight = false, className = "", children }) {
  return (
    <div className={`bd-card bd-pricing-card ${highlight ? "bd-pricing-highlight" : ""} ${className}`.trim()}>
      <div className="bd-pricing-name">{name}</div>
      <div className="bd-pricing-amount">{price}<span>{period}</span></div>
      <ul className="bd-pricing-list">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      {action}
      {children}
    </div>
  );
}
