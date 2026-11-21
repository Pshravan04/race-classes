interface ToolLogoProps {
  name: string;
  className?: string;
}

export function ToolLogo({ name, className = 'w-5 h-5' }: ToolLogoProps) {
  const n = name.toLowerCase().trim();

  // Windows 11 / Windows OS
  if (n.includes('windows') || n.includes('win11') || n.includes('win 11')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9.4" height="9.4" rx="1" fill="#0078D4" />
        <rect x="12.6" y="2" width="9.4" height="9.4" rx="1" fill="#0078D4" />
        <rect x="2" y="12.6" width="9.4" height="9.4" rx="1" fill="#0078D4" />
        <rect x="12.6" y="12.6" width="9.4" height="9.4" rx="1" fill="#0078D4" />
      </svg>
    );
  }

  // MS Paint
  if (n.includes('paint') || n.includes('mspaint')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 3.31 1.61 6.24 4.1 8.04.53.39 1.25.13 1.44-.48.24-.76.71-2.28 1.96-2.28h1.5c2.76 0 5-2.24 5-5 0-.46-.07-.9-.19-1.32.74-.26 1.44-.68 2.05-1.24 2.52-2.34 2.37-6.04-.3-8.18C15.93 2.58 14.03 2 12 2z"
          fill="#FAF8F5"
          stroke="#CBD5E1"
          strokeWidth="0.8"
        />
        <circle cx="6.5" cy="8" r="1.5" fill="#EF4444" />
        <circle cx="10" cy="5.5" r="1.5" fill="#F59E0B" />
        <circle cx="14.5" cy="6" r="1.5" fill="#10B981" />
        <circle cx="6" cy="12.5" r="1.5" fill="#3B82F6" />
        <circle cx="9.5" cy="14" r="1.4" fill="#8B5CF6" />
        <ellipse cx="14" cy="13.5" rx="1.5" ry="1.2" fill="#E2E8F0" />
        <path d="M19.5 4.5l-4 4 1.5 1.5 4-4a1 1 0 000-1.4l-.1-.1a1 1 0 00-1.4 0z" fill="#C2410C" />
        <path d="M15.5 8.5l-1 1 .5.5 1-1-.5-.5z" fill="#94A3B8" />
        <path d="M14.5 9.5c-.5.5-1.2 1.5-1 2 .5.2 1.5-.5 2-1l-1-1z" fill="#3B82F6" />
      </svg>
    );
  }

  // Typing / Typing Master / GCC-TBC / Speed / Accuracy
  if (n.includes('typing') || n.includes('tbc') || n.includes('wpm') || n.includes('accuracy') || n.includes('keyboard')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#001752" />
        {/* Row 1 */}
        <rect x="4" y="6" width="2.2" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="7.2" y="6" width="2.2" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="10.4" y="6" width="2.2" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="13.6" y="6" width="2.2" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="16.8" y="6" width="3.2" height="2.2" rx="0.5" fill="#C41E1E" />
        {/* Row 2 - Home Row */}
        <rect x="4" y="9.5" width="2.5" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="7.5" y="9.5" width="2.2" height="2.2" rx="0.5" fill="#38BDF8" />
        <rect x="10.7" y="9.5" width="2.2" height="2.2" rx="0.5" fill="#38BDF8" />
        <rect x="13.9" y="9.5" width="2.2" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="17.1" y="9.5" width="2.9" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        {/* Row 3 - Spacebar */}
        <rect x="4" y="13" width="3.2" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="8.2" y="13" width="7.6" height="2.2" rx="0.5" fill="#F59E0B" />
        <rect x="16.8" y="13" width="3.2" height="2.2" rx="0.5" fill="#FFFFFF" fillOpacity="0.85" />
        {/* Base border */}
        <path d="M4 17.5h16" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  // Internet / Chrome / Browser
  if (n.includes('internet') || n.includes('chrome') || n.includes('browser')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FFFFFF" />
        <path d="M12 2A10 10 0 0 0 3.34 7.03L7.67 14.5A5 5 0 0 1 12 7h9.54A10 10 0 0 0 12 2z" fill="#EA4335" />
        <path d="M3.34 7.03A10 10 0 0 0 12 22l4.33-7.5A5 5 0 0 1 7.67 14.5L3.34 7.03z" fill="#34A853" />
        <path d="M21.54 7H12a5 5 0 0 1 4.33 7.5L12 22a10 10 0 0 0 9.54-15z" fill="#FBBC05" />
        <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="3.8" fill="#4285F4" />
      </svg>
    );
  }

  // Gmail / Email
  if (n.includes('gmail') || n.includes('email') || n.includes('mail')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 19V7.8a1.5 1.5 0 0 1 2.4-1.2L12 11l5.6-4.4A1.5 1.5 0 0 1 20 7.8V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19z" fill="#FFFFFF" />
        <path d="M4 19V8l5 4v7.5H5.5A1.5 1.5 0 0 1 4 19z" fill="#4285F4" />
        <path d="M20 19V8l-5 4v7.5h3.5a1.5 1.5 0 0 0 1.5-1.5z" fill="#34A853" />
        <path d="M4 8l8 6 8-6v-1a1.5 1.5 0 0 0-2.4-1.2L12 10.2 6.4 5.8A1.5 1.5 0 0 0 4 7v1z" fill="#EA4335" />
        <path d="M17.6 5.8l-5.6 4.4L6.4 5.8A1.5 1.5 0 0 1 8.5 4.5l3.5 2.8 3.5-2.8a1.5 1.5 0 0 1 2.1 1.3z" fill="#FBBC05" />
      </svg>
    );
  }

  // Python
  if (n.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2C8.6 2 8.7 3.4 8.7 3.4V5H12V5.5H5.4S2 5.1 2 8.4c0 3.3 2.9 3.2 2.9 3.2h1.7V9.7s-.1-2.2 2.2-2.2h4.5s2.1.1 2.1-2.1V3.4S15.6 2 11.9 2zm-1.8 1.4a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#387EB8" />
        <path d="M12.1 22c3.3 0 3.2-1.4 3.2-1.4V19H12v-.5h6.6s3.4.4 3.4-2.9c0-3.3-2.9-3.2-2.9-3.2h-1.7v1.9s.1 2.2-2.2 2.2h-4.5s-2.1-.1-2.1 2.1v2S8.4 22 12.1 22zm1.8-1.4a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFE052" />
      </svg>
    );
  }

  // Tableau
  if (n.includes('tableau')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect x="11" y="2" width="2" height="4" fill="#E8762D" rx="0.5" />
        <rect x="11" y="18" width="2" height="4" fill="#E8762D" rx="0.5" />
        <rect x="2" y="11" width="4" height="2" fill="#E8762D" rx="0.5" />
        <rect x="18" y="11" width="4" height="2" fill="#E8762D" rx="0.5" />
        <rect x="10.5" y="9" width="3" height="6" fill="#1F4570" rx="0.5" />
        <rect x="9" y="10.5" width="6" height="3" fill="#1F4570" rx="0.5" />
        <rect x="5.5" y="5.5" width="2" height="2" fill="#2B5B84" rx="0.4" />
        <rect x="16.5" y="5.5" width="2" height="2" fill="#5A8FBA" rx="0.4" />
        <rect x="5.5" y="16.5" width="2" height="2" fill="#D33D2A" rx="0.4" />
        <rect x="16.5" y="16.5" width="2" height="2" fill="#E8762D" rx="0.4" />
      </svg>
    );
  }

  // NumPy
  if (n.includes('numpy')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#4DABCF" />
        <path d="M12 2l9 5-9 5-9-5 9-5z" fill="#4D77CF" opacity="0.8" />
        <path d="M12 12l9-5v10l-9 5V12z" fill="#013243" opacity="0.3" />
        <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">N</text>
      </svg>
    );
  }

  // TensorFlow
  if (n.includes('tensorflow') || n.includes('tensor')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6F00">
        <path d="M1.5 6.7L12 0l10.5 6.7v3.9L12 4.2 4.9 8.7v10.9L1.5 17.8V6.7zm17.6 2.9l3.4-2v10.2l-3.4 1.9V9.6zM12 6.5l6.5 4.1v7.6L12 22l-6.5-3.8v-7.6L12 6.5z" />
      </svg>
    );
  }

  // Excel / Advanced Excel
  if (n.includes('excel')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
        <path d="M7 7l4.5 5L7 17h2.5l3.2-3.8L16 17h2.5l-4.5-5 4.5-5H16l-3.3 3.8L9.5 7H7z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Word / MS Word
  if (n.includes('word')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3" fill="#2B579A" />
        <path d="M6 6.5l3 11 3-9 3 9 3-11h-2.2l-1.9 8-2.9-8h-2l-2.9 8-1.9-8H6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // PowerPoint
  if (n.includes('powerpoint') || n.includes('ppt')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3" fill="#D24726" />
        <path d="M8 6h5c2.5 0 4 1.5 4 3.5s-1.5 3.5-4 3.5h-2.5V18H8V6zm2.5 5h2c1.2 0 1.8-.6 1.8-1.5s-.6-1.5-1.8-1.5h-2V11z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Outlook
  if (n.includes('outlook')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#0078D4" />
        <path d="M2 7l10 7 10-7" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="12" r="4.5" fill="#004C8C" />
        <text x="8" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">O</text>
      </svg>
    );
  }

  // OneDrive
  if (n.includes('onedrive') || n.includes('drive')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#0078D4" />
      </svg>
    );
  }

  // Power BI
  if (n.includes('power bi') || n.includes('powerbi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="4.5" height="8" rx="1.5" fill="#F2C811" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="1.5" fill="#E8B20B" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" fill="#D39700" />
      </svg>
    );
  }

  // Pandas
  if (n.includes('pandas')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#150458" />
        <rect x="5" y="7" width="3" height="10" rx="1" fill="#FF4D5A" />
        <rect x="10.5" y="5" width="3" height="14" rx="1" fill="#FFDE59" />
        <rect x="16" y="9" width="3" height="8" rx="1" fill="#00D2B4" />
      </svg>
    );
  }

  // AWS
  if (n.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M4 14.5c4 2.8 11.5 2.8 15.5 0" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M19.5 14.5l-2-1m2 1l-.5-2.2" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <text x="12" y="11" textAnchor="middle" fill="#232F3E" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">aws</text>
      </svg>
    );
  }

  // Java
  if (n.includes('java') && !n.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#5382A1">
        <path d="M8.8 17.5s-1.8.3-.9 1.2c1.1 1 3.5.9 5.8.3 1.8-.4 3.7-.3 3.7-.3s-1.3 1.1-4 1.5c-3.7.6-6.4-.3-6.9-1.3-.4-.8.7-1.3 2.3-1.4z" />
        <path d="M10 14.3s-2.1.4-1.2 1.4c1.1 1.2 3.8 1 6.5.3 2-.5 4.1-.3 4.1-.3s-1.5 1.2-4.5 1.7c-4.1.6-7.2-.3-7.7-1.4-.5-1.1.8-1.5 2.8-1.7z" fill="#E76F00" />
        <path d="M14.6 9.8c.8 1-.3 2.2-1.7 3.2-1.8 1.3-4.5 2-4.5 2s1.4-.6 3.1-1.4c1.4-.7 2.3-1.4 2.1-2.1-.2-.7-.7-1-1.3-1.2.6-.4 1.7-.1 2.3-.5z" fill="#5382A1" />
      </svg>
    );
  }

  // JavaScript
  if (n.includes('javascript') || n === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7 17.5c.8.6 1.8.9 2.7.9 1.5 0 2.4-.7 2.4-2.1v-6.7H10v6.7c0 .7-.3 1-1 1-.5 0-1.1-.2-1.6-.5l-.4 1.2zm7.6-.2c1.1.6 2.3 1 3.6 1 2.4 0 3.7-1.2 3.7-3 0-1.7-1.1-2.4-2.6-3.1-.9-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.3-.9.9 0 1.7.3 2.3.7l.6-1.3c-.7-.4-1.7-.7-2.9-.7-2.2 0-3.5 1.3-3.5 2.9 0 1.6 1.1 2.4 2.5 3 .9.4 1.6.8 1.6 1.4 0 .6-.5 1-1.5 1-1.1 0-2.1-.4-2.7-.9l-.4 1.3z" fill="#000000" />
      </svg>
    );
  }

  // React
  if (n.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#00D8FF">
        <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" fill="none" stroke="#00D8FF" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" fill="none" stroke="#00D8FF" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" fill="none" stroke="#00D8FF" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
      </svg>
    );
  }

  // Node.js
  if (n.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
      </svg>
    );
  }

  // CSS
  if (n.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M3 2l1.8 18.5L12 23l7.2-2.5L21 2H3z" fill="#1572B6" />
        <path d="M12 3.7v17.4l5.6-1.9L19.2 3.7H12z" fill="#33A9DC" />
        <path d="M6.8 6.5h10.4l-.3 3.2H12v2.8h4.6l-.4 4.3-4.2 1.2v-2.9l2.2-.6.2-2H8.3l-.3-3.2h4V6.5H6.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // HTML
  if (n.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M3 2l1.8 18.5L12 23l7.2-2.5L21 2H3z" fill="#E44D26" />
        <path d="M12 3.7v17.4l5.6-1.9L19.2 3.7H12z" fill="#F16529" />
        <path d="M7 6.5h10l-.9 10.2-4.1 1.2-4.1-1.2-.3-3.5h2.2l.1 1.7 2.1.6 2.1-.6.3-3.7H7.4L7 6.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // SQL / Database / MongoDB / PostgreSQL / MySQL
  if (n.includes('sql') || n.includes('database') || n.includes('postgres') || n.includes('mysql') || n.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="#336791" />
        <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#1D4060" strokeWidth="1.2" fill="#336791" fillOpacity="0.85" />
        <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#1D4060" strokeWidth="1.2" fill="#336791" fillOpacity="0.9" />
        <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke="#1D4060" strokeWidth="1.2" fill="#336791" />
      </svg>
    );
  }

  // Git / GitHub
  if (n.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.6L13.4 2.4a1.8 1.8 0 00-2.6 0L8.7 4.5l3.3 3.3a2.1 2.1 0 012.7 2.7l3.2 3.2a2.1 2.1 0 012-1.3c.7 0 1.4.3 1.9.8.9.9.9 2.5 0 3.4a2.4 2.4 0 01-3.4 0 2.4 2.4 0 01-.6-2.5l-3-3v4.6a2.1 2.1 0 01.6 1.5c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-.6.3-1.2.7-1.6V8.9a2.1 2.1 0 01-.7-1.6c0-.8.4-1.5 1-1.9L8.4 2.1 2.4 8.1a1.8 1.8 0 000 2.6l8.2 8.2a1.8 1.8 0 002.6 0l8.4-8.3a1.8 1.8 0 000-2.6z" />
      </svg>
    );
  }

  // Docker
  if (n.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M22.5 10.5c-.3-.2-1.3-.4-2-.2-.5-1.1-1.3-1.6-1.4-1.7l-.4.3c.5.8.5 2 .4 2.4-1.2.8-3 .7-4.4.7H2.8C2 13.3 2 15 3.3 16.8c2 2.6 5.3 3.2 8.7 3.2 5.5 0 9.7-2.6 10.7-7.4v-.3c0-.9-.2-1.5-.2-1.8zm-9.3-4.8h1.8v1.8h-1.8V5.7zm-2.4 0h1.8v1.8h-1.8V5.7zm-2.4 0h1.8v1.8H8.4V5.7zm4.8 2.4h1.8v1.8h-1.8V8.1zm-2.4 0h1.8v1.8h-1.8V8.1zm-2.4 0h1.8v1.8H8.4V8.1zm-2.4 0H8v1.8H6V8.1z" />
      </svg>
    );
  }

  // Kubernetes
  if (n.includes('k8s') || n.includes('kubernetes')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#326CE5">
        <circle cx="12" cy="12" r="10" fill="#326CE5" />
        <path d="M12 5l5 3v6l-5 3-5-3V8l5-3zm0 2.2L8.5 9.2v4.6l3.5 2 3.5-2V9.2L12 7.2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Grafana
  if (n.includes('grafana')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F46800">
        <circle cx="12" cy="12" r="9" fill="#F46800" opacity="0.2" />
        <path d="M12 4a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 116-6 6 6 0 01-6 6zm0-9a3 3 0 103 3 3 3 0 00-3-3z" />
      </svg>
    );
  }

  // Prometheus
  if (n.includes('prometheus')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E6522C">
        <path d="M12 2a9 9 0 00-9 9c0 4.1 2.8 7.6 6.6 8.7V17a4.5 4.5 0 01-2.1-3.8c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.6-.8 3-2.1 3.8v2.7c3.8-1.1 6.6-4.6 6.6-8.7a9 9 0 00-9-9zm-1.5 13.5v5.3c.5.1 1 .2 1.5.2s1-.1 1.5-.2v-5.3h-3z" />
      </svg>
    );
  }

  // Ansible
  if (n.includes('ansible')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#000000" />
        <path d="M12 6l5 12h-2.2l-1.3-3.2h-3L9.2 18H7l5-12zm-1 6.8h2l-1-2.6-1 2.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Jenkins
  if (n.includes('jenkins')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#D33833" />
        <circle cx="12" cy="9" r="4" fill="#F0D6B7" />
        <path d="M8 9h8v3a4 4 0 01-8 0V9z" fill="#F0D6B7" />
        <rect x="7" y="14" width="10" height="7" rx="3" fill="#24292E" />
      </svg>
    );
  }

  // Tally / TallyPrime
  if (n.includes('tally')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#001752" />
        <path d="M4 6h16v3.5H14.5V18h-4.5V9.5H4V6z" fill="#FFE052" />
        <circle cx="18" cy="16" r="2.5" fill="#C41E1E" />
      </svg>
    );
  }

  // GST / GST Portal
  if (n.includes('gst')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#1A365D" />
        <circle cx="12" cy="12" r="8.5" stroke="#F5BE4F" strokeWidth="1.2" fill="none" />
        <text x="12" y="15.5" textAnchor="middle" fill="#F5BE4F" fontSize="8" fontWeight="900" fontFamily="sans-serif">GST</text>
      </svg>
    );
  }

  // E-Way Bill
  if (n.includes('e-way') || n.includes('eway') || n.includes('bill')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0D9488" />
        <path d="M4 14h9V8H4v6zm9 0h3l3 3v2h-1a2 2 0 01-4 0h-3v-2a2 2 0 01-4 0H6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="17" r="1.5" fill="#FFFFFF" />
        <circle cx="16" cy="17" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Income Tax / TDS Software
  if (n.includes('tax') || n.includes('tds') || n.includes('payroll')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E3A8A" />
        <path d="M6 5h12v14H6V5z" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M9 9h6M9 13h6M9 16h4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Google Ads / Search Console / Analytics
  if (n.includes('google') || n.includes('ads') || n.includes('console')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 4.5c2.1 0 3.8.7 5.1 1.9l3.8-3.8C18.6 1 15.6 0 12 0 7.3 0 3.3 2.7 1.4 6.7l4.4 3.4C6.9 7.2 9.2 4.5 12 4.5z" fill="#EA4335" />
        <path d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" fill="#4285F4" />
        <path d="M5.8 14.3c-.3-.8-.4-1.6-.4-2.3s.1-1.5.4-2.3L1.4 6.3C.5 8.1 0 10 0 12s.5 3.9 1.4 5.7l4.4-3.4z" fill="#FBBC05" />
        <path d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-2.8 0-5.1-2.7-6.2-5.6L1.4 17.1C3.3 21.2 7.3 24 12 24z" fill="#34A853" />
      </svg>
    );
  }

  // Meta / Facebook Ads
  if (n.includes('meta') || n.includes('facebook')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0668E1">
        <path d="M12 14.5c-1.5-1.7-2.6-3.3-3.6-4.5C6.7 7.9 4.7 7 2.8 8.4 1 9.8.5 12.3 1.4 14.3c1 2.2 3.2 3.4 5.3 2.7 1.7-.6 3.1-2 5.3-2.5zm0 0c1.5-1.7 2.6-3.3 3.6-4.5 1.7-2.1 3.7-3 5.6-1.6 1.8 1.4 2.3 3.9 1.4 5.9-1 2.2-3.2 3.4-5.3 2.7-1.7-.6-3.1-2-5.3-2.5z" />
      </svg>
    );
  }

  // GA4 / Google Analytics
  if (n.includes('ga4') || n.includes('analytics')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F9AB00" />
        <rect x="5" y="14" width="3" height="5" rx="1" fill="#FFFFFF" />
        <rect x="10.5" y="9" width="3" height="10" rx="1" fill="#FFFFFF" />
        <rect x="16" y="5" width="3" height="14" rx="1" fill="#FFFFFF" />
      </svg>
    );
  }

  // SEO / Search Optimization
  if (n.includes('seo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="10" r="6" stroke="#2563EB" strokeWidth="2.5" />
        <path d="M15 15l5 5" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M7 11l2-2 2 2 3-3" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Canva
  if (n.includes('canva')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#00C4CC" />
        <path d="M15.5 9.5c-.8-1-2.2-1.3-3.6-.8-2 .7-3.3 2.9-2.9 5 .3 1.6 1.8 2.6 3.4 2.1 1.2-.4 1.9-1.3 2.3-2.2.3-.6-.2-1.1-.8-.9-.5.2-1 .5-1.7.6-1 .2-1.8-.4-2-1.3-.2-1.1.5-2.2 1.6-2.6.8-.3 1.6-.1 2 .4.3.4.9.4 1.1-.1.1-.3.1-.6-.4-.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Photoshop
  if (n.includes('photoshop')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <text x="7" y="16.5" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">P</text>
        <text x="13" y="16.5" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">s</text>
      </svg>
    );
  }

  // Illustrator
  if (n.includes('illustrator')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#330000" />
        <text x="7" y="16.5" fill="#FF9A00" fontSize="11" fontWeight="bold" fontFamily="sans-serif">A</text>
        <text x="14" y="16.5" fill="#FF9A00" fontSize="11" fontWeight="bold" fontFamily="sans-serif">i</text>
      </svg>
    );
  }

  // CorelDRAW
  if (n.includes('corel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00A550" />
        <path d="M12 4c-3.5 0-6 2.5-6 6 0 3.8 3.5 7.5 6 9.5 2.5-2 6-5.7 6-9.5 0-3.5-2.5-6-6-6zm0 9.5c-1.9 0-3.5-1.6-3.5-3.5S10.1 6.5 12 6.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" fill="#FFFFFF" />
        <circle cx="12" cy="10" r="2" fill="#FFCC00" />
      </svg>
    );
  }

  // InDesign
  if (n.includes('indesign')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#49021F" />
        <text x="6" y="16.5" fill="#FF3366" fontSize="11" fontWeight="bold" fontFamily="sans-serif">I</text>
        <text x="12" y="16.5" fill="#FF3366" fontSize="11" fontWeight="bold" fontFamily="sans-serif">d</text>
      </svg>
    );
  }

  // Behance
  if (n.includes('behance')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#053EFF">
        <rect width="24" height="24" rx="4" />
        <text x="12" y="16.5" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Bē</text>
      </svg>
    );
  }

  // Linux / Kali Linux
  if (n.includes('linux') || n.includes('kali') || n.includes('bash')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FCC624">
        <circle cx="12" cy="12" r="10" fill="#24292E" />
        <path d="M12 4c-2.8 0-4 2-4 4.3 0 1.1.4 2.2.9 3-.5 1-1.3 2.5-1.3 4.3 0 2.8 2 4.4 4.4 4.4s4.4-1.6 4.4-4.4c0-1.8-.8-3.3-1.3-4.3.5-.8.9-1.9.9-3C16 6 14.8 4 12 4z" fill="#FFFFFF" />
        <circle cx="10.5" cy="7.5" r="1" fill="#000000" />
        <circle cx="13.5" cy="7.5" r="1" fill="#000000" />
        <path d="M11 9.5h2l-1 1.5-1-1.5z" fill="#FFA500" />
      </svg>
    );
  }

  // Wireshark / Network Security / Nmap
  if (n.includes('wire') || n.includes('security') || n.includes('nmap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#1679A7">
        <path d="M12 2L4 5v6.1c0 5 3.4 9.7 8 10.9 4.6-1.2 8-5.9 8-10.9V5l-8-3zm0 2.2l6 2.3v4.6c0 4-2.6 7.7-6 8.7-3.4-1-6-4.7-6-8.7V6.5l6-2.3z" />
      </svg>
    );
  }

  // Metasploit
  if (n.includes('metasploit')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#132B45" />
        <path d="M6 18V6l6 8 6-8v12h-3v-6.5l-3 4-3-4V18H6z" fill="#00A4E4" />
      </svg>
    );
  }

  // Burp Suite
  if (n.includes('burp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#FF6633" />
        <text x="12" y="16.5" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">B</text>
      </svg>
    );
  }

  // Selenium
  if (n.includes('selenium')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#43B02A" />
        <text x="6" y="16.5" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Se</text>
      </svg>
    );
  }

  // Jira
  if (n.includes('jira')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0052CC">
        <path d="M11.5 2.5C6.5 7.5 6.5 15.5 11.5 20.5l1-1C8 15 8 8 12.5 3.5l-1-1z" />
        <path d="M16 7c-3.5 3.5-3.5 9.5 0 13l1-1c-3-3-3-8 0-11l-1-1z" fill="#2684FF" />
      </svg>
    );
  }

  // Postman
  if (n.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
        <circle cx="12" cy="12" r="10" />
        <path d="M17 12l-6-4v3H7v2h4v3l6-4z" fill="#FFFFFF" />
      </svg>
    );
  }

  // ChatGPT / OpenAI
  if (n.includes('chatgpt') || n.includes('openai') || n.includes('gpt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#10A37F" />
        <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Claude
  if (n.includes('claude')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#D97757" />
        <path d="M12 5v14M5 12h14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Gemini
  if (n.includes('gemini')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1B73E8" />
        <path d="M12 4C12 8.4 8.4 12 4 12c4.4 0 8 3.6 8 8 0-4.4 3.6-8 8-8-4.4 0-8-3.6-8-8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Midjourney / DALL-E
  if (n.includes('midjourney') || n.includes('dall-e') || n.includes('dalle')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E1B4B" />
        <polygon points="12,3 21,19 3,19" stroke="#A855F7" strokeWidth="2" fill="none" />
        <circle cx="12" cy="14" r="2" fill="#E879F9" />
      </svg>
    );
  }

  // Tesseract OCR / OCR
  if (n.includes('ocr') || n.includes('tesseract')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#4F46E5" />
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // FinModel / Valuation / M&A / Finance
  if (n.includes('model') || n.includes('valuation') || n.includes('m&a') || n.includes('finance')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#047857" />
        <path d="M5 16l4-5 4 3 6-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h4v4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Hardware / PC Assembly / Motherboard / Troubleshooting
  if (n.includes('hardware') || n.includes('assembly') || n.includes('motherboard') || n.includes('bios') || n.includes('cabling')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#334155" />
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="1.5" fill="#F59E0B" />
        <circle cx="15" cy="9" r="1.5" fill="#10B981" />
        <rect x="8" y="13" width="8" height="3" rx="0.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Fluency / Speech / Voice
  if (n.includes('fluency') || n.includes('speech') || n.includes('voice')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0284C7" />
        <path d="M12 4a3 3 0 00-3 3v5a3 3 0 006 0V7a3 3 0 00-3-3z" fill="#FFFFFF" />
        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3m-4 0h8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Grammar / Writing
  if (n.includes('grammar') || n.includes('writing') || n.includes('words')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#7C3AED" />
        <path d="M5 6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" stroke="#FFFFFF" strokeWidth="1.8" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Phonics / Accent / Audio
  if (n.includes('phonics') || n.includes('accent') || n.includes('pronunciation')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0D9488" />
        <path d="M4 10h4l5-4v12l-5-4H4v-4z" fill="#FFFFFF" />
        <path d="M16 9a4 4 0 010 6M18.5 7a7 7 0 010 10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // GD / Group Discussion / Extempore
  if (n.includes('gd') || n.includes('discussion') || n.includes('extempore') || n.includes('public')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#EA580C" />
        <path d="M7 8h10M7 12h7m-4 6l-4 2v-2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-9z" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Interview Prep / Career
  if (n.includes('interview') || n.includes('prep') || n.includes('hr')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#15803D" />
        <path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="7" r="4" stroke="#FFFFFF" strokeWidth="1.8" />
        <path d="M16 11l2 2 4-4" stroke="#FFE052" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Default tech chip - polished with brand navy and red border
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#001752" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#C41E1E" strokeWidth="1" strokeOpacity="0.4" />
      <text x="12" y="15.5" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
        {name.substring(0, 3).toUpperCase()}
      </text>
    </svg>
  );
}

export function getCuratedToolsForCourse(courseId: string, courseName: string, existingTools?: string[]): string[] {
  const id = courseId.toLowerCase();
  const name = courseName.toLowerCase();

  if (id.includes('data-science') || id.includes('ai-and-ml') || name.includes('data science') || name.includes('ai')) {
    return ['Tesseract OCR', 'Tableau', 'NumPy', 'TensorFlow', 'Excel'];
  }
  if (id.includes('full-stack') || id.includes('web-app') || name.includes('full stack') || name.includes('web')) {
    return ['AWS', 'Java', 'JavaScript', 'CSS', 'HTML'];
  }
  if (id.includes('devops') || name.includes('devops')) {
    return ['Grafana', 'Prometheus', 'Ansible', 'Jenkins', 'Docker'];
  }
  if (id.includes('tally') || name.includes('tally')) {
    return ['TallyPrime', 'GST', 'Excel', 'E-Way Bill', 'Income Tax'];
  }
  if (id.includes('ms-office') || id.includes('excel') || name.includes('office')) {
    return ['Word', 'Excel', 'PowerPoint', 'Outlook', 'OneDrive'];
  }
  if (id.includes('digital-marketing') || name.includes('digital marketing')) {
    return ['Google Ads', 'Meta Ads', 'GA4', 'SEO', 'Canva'];
  }
  if (id.includes('cyber-security') || id.includes('ethical-hacking') || name.includes('cyber') || name.includes('hacking')) {
    return ['Kali Linux', 'Wireshark', 'Metasploit', 'Nmap', 'Python'];
  }
  if (id.includes('software-testing') || name.includes('testing')) {
    return ['Selenium', 'Java', 'Jira', 'Postman', 'SQL'];
  }
  if (id.includes('investment-banking') || name.includes('banking')) {
    return ['Excel', 'FinModel', 'Valuation', 'M&A', 'PowerPoint'];
  }
  if (id.includes('typing') || name.includes('typing')) {
    return ['GCC-TBC', 'Speed 30WPM', 'Speed 40WPM', 'Accuracy', 'Typing Master'];
  }
  if (id.includes('english') || id.includes('spoken') || name.includes('english') || name.includes('spoken')) {
    return ['Fluency Drills', 'Grammar Lab', 'Phonics & Accent', 'GD & Extempore', 'Interview Prep'];
  }
  if (id.includes('basic') || name.includes('basic')) {
    return ['Windows 11', 'MS Paint', 'Typing', 'Internet', 'Gmail'];
  }
  if (id.includes('graphic') || id.includes('photoshop') || id.includes('illustrator')) {
    return ['Photoshop', 'Illustrator', 'CorelDRAW', 'InDesign', 'Canva'];
  }
  if (id.includes('prompt') || id.includes('ai-prompt') || name.includes('prompt')) {
    return ['ChatGPT', 'Claude', 'Google Gemini', 'Midjourney', 'Canva'];
  }
  if (id.includes('hardware') || id.includes('a-plus') || id.includes('n-plus')) {
    return ['PC Assembly', 'Motherboard', 'BIOS Setup', 'Troubleshooting', 'LAN Cabling'];
  }

  if (existingTools && existingTools.length >= 3) {
    return existingTools.slice(0, 5);
  }

  return ['Python', 'SQL', 'Excel', 'Git', 'Tools'];
}
