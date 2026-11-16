interface ToolLogoProps {
  name: string;
  className?: string;
}

export function ToolLogo({ name, className = 'w-5 h-5' }: ToolLogoProps) {
  const n = name.toLowerCase().trim();

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

  // Excel
  if (n.includes('excel')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
        <path d="M7 7l4.5 5L7 17h2.5l3.2-3.8L16 17h2.5l-4.5-5 4.5-5H16l-3.3 3.8L9.5 7H7z" fill="#FFFFFF" />
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

  // Docker
  if (n.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M22.5 10.5c-.3-.2-1.3-.4-2-.2-.5-1.1-1.3-1.6-1.4-1.7l-.4.3c.5.8.5 2 .4 2.4-1.2.8-3 .7-4.4.7H2.8C2 13.3 2 15 3.3 16.8c2 2.6 5.3 3.2 8.7 3.2 5.5 0 9.7-2.6 10.7-7.4v-.3c0-.9-.2-1.5-.2-1.8zm-9.3-4.8h1.8v1.8h-1.8V5.7zm-2.4 0h1.8v1.8h-1.8V5.7zm-2.4 0h1.8v1.8H8.4V5.7zm4.8 2.4h1.8v1.8h-1.8V8.1zm-2.4 0h1.8v1.8h-1.8V8.1zm-2.4 0h1.8v1.8H8.4V8.1zm-2.4 0H8v1.8H6V8.1z" />
      </svg>
    );
  }

  // Tally / TallyPrime
  if (n.includes('tally')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#E51B24" />
        <text x="12" y="16.5" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">T</text>
      </svg>
    );
  }

  // GST
  if (n.includes('gst')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#1A365D" />
        <text x="12" y="16" textAnchor="middle" fill="#F5BE4F" fontSize="9" fontWeight="900" fontFamily="sans-serif">GST</text>
      </svg>
    );
  }

  // Word
  if (n.includes('word')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3" fill="#2B579A" />
        <path d="M6 6.5l3 11 3-9 3 9 3-11h-2.2l-1.9 8-2.9-8h-2l-2.9 8-1.9-8H6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // PowerPoint
  if (n.includes('powerpoint')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3" fill="#D24726" />
        <path d="M8 6h5c2.5 0 4 1.5 4 3.5s-1.5 3.5-4 3.5h-2.5V18H8V6zm2.5 5h2c1.2 0 1.8-.6 1.8-1.5s-.6-1.5-1.8-1.5h-2V11z" fill="#FFFFFF" />
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

  // Google Ads / Analytics
  if (n.includes('google') || n.includes('seo') || n.includes('ads')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 4.5c2.1 0 3.8.7 5.1 1.9l3.8-3.8C18.6 1 15.6 0 12 0 7.3 0 3.3 2.7 1.4 6.7l4.4 3.4C6.9 7.2 9.2 4.5 12 4.5z" fill="#EA4335" />
        <path d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" fill="#4285F4" />
        <path d="M5.8 14.3c-.3-.8-.4-1.6-.4-2.3s.1-1.5.4-2.3L1.4 6.3C.5 8.1 0 10 0 12s.5 3.9 1.4 5.7l4.4-3.4z" fill="#FBBC05" />
        <path d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-2.8 0-5.1-2.7-6.2-5.6L1.4 17.1C3.3 21.2 7.3 24 12 24z" fill="#34A853" />
      </svg>
    );
  }

  // Meta / Facebook
  if (n.includes('meta')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0668E1">
        <path d="M12 14.5c-1.5-1.7-2.6-3.3-3.6-4.5C6.7 7.9 4.7 7 2.8 8.4 1 9.8.5 12.3 1.4 14.3c1 2.2 3.2 3.4 5.3 2.7 1.7-.6 3.1-2 5.3-2.5zm0 0c1.5-1.7 2.6-3.3 3.6-4.5 1.7-2.1 3.7-3 5.6-1.6 1.8 1.4 2.3 3.9 1.4 5.9-1 2.2-3.2 3.4-5.3 2.7-1.7-.6-3.1-2-5.3-2.5z" />
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

  // Linux / Kali
  if (n.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FCC624">
        <path d="M12 2c-3.1 0-4.5 2.2-4.5 4.8 0 1.2.4 2.5 1 3.4-.6 1.1-1.5 2.8-1.5 4.8 0 3.2 2.2 5 5 5s5-1.8 5-5c0-2-1-3.7-1.5-4.8.6-.9 1-2.2 1-3.4C16.5 4.2 15.1 2 12 2z" />
      </svg>
    );
  }

  // Wireshark / Security
  if (n.includes('wire') || n.includes('security') || n.includes('nmap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#1679A7">
        <path d="M12 2L4 5v6.1c0 5 3.4 9.7 8 10.9 4.6-1.2 8-5.9 8-10.9V5l-8-3zm0 2.2l6 2.3v4.6c0 4-2.6 7.7-6 8.7-3.4-1-6-4.7-6-8.7V6.5l6-2.3z" />
      </svg>
    );
  }

  // Default tech chip
  return (
    <svg className={className} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#001752" />
      <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
        {name.substring(0, 2).toUpperCase()}
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
  if (id.includes('basic') || name.includes('basic')) {
    return ['Windows 11', 'MS Paint', 'Typing', 'Internet', 'Gmail'];
  }
  if (id.includes('graphic') || id.includes('photoshop') || id.includes('illustrator')) {
    return ['Photoshop', 'Illustrator', 'CorelDRAW', 'InDesign', 'Canva'];
  }

  if (existingTools && existingTools.length >= 3) {
    return existingTools.slice(0, 5);
  }

  return ['Python', 'SQL', 'Excel', 'Git', 'Tools'];
}
