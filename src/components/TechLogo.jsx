import React from 'react';

export default function TechLogo({ name, className = "w-4 h-4" }) {
  const normalized = name.toLowerCase();

  if (normalized.includes('whatsapp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#25D366">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.396-.883-.726-1.48-1.623-1.653-1.92-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    );
  }

  if (normalized.includes('javascript') || normalized.includes('js')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path fill="#000000" d="M11.2 18.2c.4.6.9 1 1.8 1 1 0 1.6-.4 1.6-1.1 0-.8-.5-1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-2.1 1.6-3.6 4.1-3.6 1.8 0 3 .6 3.8 2l-1.8 1.1c-.4-.7-.9-1-1.9-1-.9 0-1.5.4-1.6 1 0 .7.5 1 1.6 1.5l.6.3c2.1.9 3.2 1.8 3.2 3.9 0 2.4-1.8 3.8-4.6 3.8-2.4 0-4-1-4.7-2.4l1.9-1zM6.5 18.3c.3.5.7 1 1.4 1 .8 0 1.2-.4 1.2-1.7V9h2.5v8.6c0 2.7-1.5 3.8-3.7 3.8-1.9 0-3.1-.9-3.8-2.3l2.4-1.1z"/>
      </svg>
    );
  }

  if (normalized.includes('hackerrank')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2EC866">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-8h2v8zm6 0h-2v-4.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4.5h-2v-8h2v1.1c.414-.672 1.172-1.1 2-1.1 1.381 0 2.5 1.119 2.5 2.5v5.5z"/>
      </svg>
    );
  }

  if (normalized.includes('google')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.18 1-.8 1.87-1.67 2.48v2.06h2.7c1.58-1.46 2.49-3.6 2.49-6.55z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-2.7-2.06c-.98.66-2.23 1.06-3.78 1.06-2.86 0-5.29-1.93-6.16-4.53H3.82v2.13C5.63 20.44 8.59 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.81c-.22-.66-.35-1.36-.35-2.06s.13-1.4.35-2.06V8.56H3.82C3.12 10 2.73 11.62 2.73 13.31s.39 3.31 1.09 4.75l2.02-1.56z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 8.59 1 5.63 3.56 3.82 7.06l2.02 1.56c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    );
  }

  if (normalized.includes('deloitte')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#86BC25">
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }

  if (normalized.includes('python') && !normalized.includes('anywhere')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fill="#3776AB" d="M11.87 2c-4.22 0-3.95 1.83-3.95 1.83l.01 1.9h3.99v.57H5.97S2 6.12 2 10.36c0 4.24 3.48 4.09 3.48 4.09h1.04v-1.95s-.06-2.35 2.31-2.35h3.96s2.26.04 2.26-2.21V4.28S16.29 2 11.87 2zm-2.1 1.28c.41 0 .74.33.74.74a.74.74 0 1 1-1.48 0c0-.41.33-.74.74-.74z"/>
        <path fill="#FFD43B" d="M12.13 22c4.22 0 3.95-1.83 3.95-1.83l-.01-1.9h-3.99v-.57h5.95s3.97.18 3.97-4.06c0-4.24-3.48-4.09-3.48-4.09h-1.04v1.95s.06 2.35-2.31 2.35h-3.96s-2.26-.04-2.26 2.21v4.03S7.71 22 12.13 22zm2.1-1.28a.74.74 0 1 1 0-1.48.74.74 0 0 1 0 1.48z"/>
      </svg>
    );
  }

  if (normalized.includes('react')) {
    return (
      <svg className={`${className} animate-spin`} style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (normalized.includes('flask')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v6l-4 7a2 2 0 0 0 1.7 3h8.6a2 2 0 0 0 1.7-3l-4-7V3" />
        <path d="M8.5 14h7" />
      </svg>
    );
  }

  if (normalized.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#009688">
        <path d="M12 2L2 12h8v10l10-10h-8V2z" />
      </svg>
    );
  }

  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.186 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.186 0 00.186-.186V3.575a.185.186 0 00-.186-.185h-2.118a.185.186 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 5.43h2.118a.186.186 0 00.186-.185V9.006a.185.186 0 00-.186-.186h-2.118a.185.186 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.186 0 00-.185-.186H8.074a.185.186 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.291a.185.186 0 00-.185-.185H8.074a.185.186 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 2.715h2.119a.186.186 0 00.185-.185V9.006a.185.186 0 00-.185-.186H5.119a.185.186 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.291a.185.186 0 00-.185-.185H5.119a.185.186 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.715h2.119a.186.186 0 00.185-.186V3.575a.185.186 0 00-.185-.185H5.119a.185.186 0 00-.185.185v1.887c0 .102.083.186.185.186zM.116 11.838c-.021.218.062.483.25.688 1.488 1.63 3.655 2.502 6.309 2.502 5.093 0 9.07-3.084 10.741-7.854a.186.186 0 00-.131-.237c-.636-.211-1.782-.41-2.972-.41-1.782 0-3.32.482-4.443 1.348-.12.091-.274.12-.413.061-.845-.357-1.859-.556-2.972-.556-2.029 0-3.805.656-5.064 1.837a.186.186 0 00-.05.158l.102.822c.012.092-.012.185-.067.257C.717 9.387.214 10.518.116 11.838z"/>
      </svg>
    );
  }

  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.62 10.44l-8.06-8.06c-.78-.78-2.05-.78-2.83 0l-1.9 1.9 2.42 2.42c.57-.19 1.23-.05 1.67.39.56.56.66 1.39.31 2.05l2.33 2.33c.66-.35 1.49-.25 2.05.31.78.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0-.58-.58-.67-1.43-.3-2.1l-2.18-2.18v5.27c.2.14.38.33.5.56.56.96.37 2.21-.59 2.77-.96.56-2.21.37-2.77-.59-.44-.76-.36-1.71.18-2.38v-5.32c-.54-.67-.62-1.62-.18-2.38.35-.61.98-.96 1.66-.96.16 0 .32.02.48.07l-2.35-2.35L1.88 11.02c-.78.78-.78 2.05 0 2.83l8.06 8.06c.78.78 2.05.78 2.83 0l8.85-8.85c.78-.78.78-2.04 0-2.62z"/>
      </svg>
    );
  }

  if (normalized.includes('mysql') || normalized.includes('sql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  if (normalized.includes('esp32') || normalized.includes('arduino') || normalized.includes('gpio') || normalized.includes('hardware')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00979D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    );
  }

  if (normalized.includes('opencv') || normalized.includes('vision')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#5C3EE8" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      </svg>
    );
  }

  if (normalized.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24 3.41 21.563zM18.23 6.13H6.84l.23 2.82h10.93zm-.46 5.63H7.3l.23 2.81h9.81l-.47 5.25-4.9 1.34-4.88-1.34-.31-3.48H4.11l.54 6.13 7.32 2.03 7.32-2.03z"/>
      </svg>
    );
  }

  if (normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24 3.41 21.563zM18.23 6.13H6.84l.23 2.82h10.93zm-.46 5.63H7.3l.23 2.81h9.81l-.47 5.25-4.9 1.34-4.88-1.34-.31-3.48H4.11l.54 6.13 7.32 2.03 7.32-2.03z"/>
      </svg>
    );
  }

  if (normalized.includes('java') && !normalized.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {/* Coffee cup body */}
        <path d="M7 10h10M7 10c0-3 2-5 5-5s5 2 5 5M7 10c0 3 2 5 5 5s5-2 5-5"
              stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        {/* Cup handle */}
        <path d="M17 11c2 0 3 2 3 4s-1 4-3 4"
              stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        {/* Steam lines */}
        <path d="M9 6c.5-1 2-1 2.5 0" stroke="#89B4D4" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M12 5c.5-1 2-1 2.5 0" stroke="#89B4D4" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M15 6c.5-1 2-1 2.5 0" stroke="#89B4D4" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      </svg>
    );
  }

  if (normalized.includes('c') && normalized.length <= 4) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#A8B9CC">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6 13.2l-1.4 1.4c-1.2 1.2-2.8 1.9-4.6 1.9-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5c1.8 0 3.4.7 4.6 1.9l1.4 1.4-2.1 2.1-.7-.7c-.8-.8-1.9-1.2-3.2-1.2-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.3 0 2.4-.4 3.2-1.2l.7-.7 2.1 2.1z"/>
      </svg>
    );
  }

  if (normalized.includes('rag') || normalized.includes('ai') || normalized.includes('groq') || normalized.includes('openai') || normalized.includes('ollama')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <circle cx="12" cy="12" r="3" fill="#d4af37" />
        <path d="M12 6v3M12 15v3M6 12h3M15 12h3" />
      </svg>
    );
  }

  // Fallback Code Icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
