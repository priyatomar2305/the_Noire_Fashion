import { Link } from 'react-router-dom';
export default function Button({ children, to, onClick, variant = 'dark', className = '', type = 'button' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[.98]';
  const styles = variant === 'light' ? 'bg-white text-neutral-900 hover:bg-neutral-100' : variant === 'outline' ? 'border border-neutral-300 bg-transparent text-neutral-900 hover:border-neutral-900' : 'bg-neutral-900 text-white hover:bg-neutral-700';
  if (to) return <Link to={to} className={`${base} ${styles} ${className}`}>{children}</Link>;
  return <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>;
}
