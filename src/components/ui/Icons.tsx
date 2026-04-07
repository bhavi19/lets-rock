// ============================================================
// Icons — lightweight SVG icon components
// All icons are 20x20 viewBox, stroke-based
// ============================================================

interface IconProps {
  active?: boolean;
  size?: number;
  className?: string;
}

const strokeProps = (active: boolean) => ({
  stroke: 'currentColor',
  strokeWidth: active ? 2 : 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
});

export function NewspaperIcon({ active = false, size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <rect x="2" y="3" width="16" height="14" rx="2" {...strokeProps(active)} />
      <line x1="6" y1="7" x2="14" y2="7" {...strokeProps(active)} />
      <line x1="6" y1="10" x2="14" y2="10" {...strokeProps(active)} />
      <line x1="6" y1="13" x2="10" y2="13" {...strokeProps(active)} />
    </svg>
  );
}

export function BookmarkIcon({ active = false, size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        d="M5 3h10a1 1 0 011 1v12l-6-3-6 3V4a1 1 0 011-1z"
        {...strokeProps(active)}
        fill={active ? 'currentColor' : 'none'}
      />
    </svg>
  );
}

export function GridIcon({ active = false, size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <rect x="3" y="3" width="6" height="6" rx="1" {...strokeProps(active)} />
      <rect x="11" y="3" width="6" height="6" rx="1" {...strokeProps(active)} />
      <rect x="3" y="11" width="6" height="6" rx="1" {...strokeProps(active)} />
      <rect x="11" y="11" width="6" height="6" rx="1" {...strokeProps(active)} />
    </svg>
  );
}

export function UserIcon({ active = false, size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <circle cx="10" cy="7" r="3" {...strokeProps(active)} />
      <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" {...strokeProps(active)} />
    </svg>
  );
}

export function ShareIcon({ size = 16, className }: Omit<IconProps, 'active'>) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M12 2a2 2 0 110 4 2 2 0 010-4zM4 6a2 2 0 110 4A2 2 0 014 6zm8 4a2 2 0 110 4 2 2 0 010-4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5.8" y1="7.2" x2="10.2" y2="4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5.8" y1="8.8" x2="10.2" y2="11.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SaveIcon({ size = 16, filled = false, className }: Omit<IconProps, 'active'> & { filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M4 2h8a1 1 0 011 1v10l-5-2.5L3 13V3a1 1 0 011-1z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 16, className }: Omit<IconProps, 'active'>) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M10 2h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="14" y1="2" x2="7" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 16, className }: Omit<IconProps, 'active'>) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function CheckIcon({ size = 16, className }: Omit<IconProps, 'active'>) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
