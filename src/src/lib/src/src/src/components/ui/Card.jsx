// filepath: src/components/ui/Card.jsx
export function Card({ children, className = '' }) {
  return (
    <div className={`glass-card p-6 ${className}`}>
      {children}
    </div>
  );
}
