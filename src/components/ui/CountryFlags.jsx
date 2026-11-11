import React from 'react';

export const SouthAfricaFlag = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 90 60" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="South Africa">
    <rect width="90" height="60" fill="#001489" rx="2" />
    <rect width="90" height="30" fill="#E03C31" rx="2" />
    {/* White Y outline */}
    <path d="M0,0 L45,30 L90,30 L90,20 L45,20 L15,0 Z M0,60 L45,30 L90,30 L90,40 L45,40 L15,60 Z" fill="#ffffff" />
    <rect y="20" width="90" height="20" fill="#ffffff" />
    {/* Green Y body */}
    <path d="M0,0 L45,30 L90,30 L90,23 L45,23 L10,0 Z M0,60 L45,30 L90,30 L90,37 L45,37 L10,60 Z" fill="#007749" />
    <rect y="23" width="90" height="14" fill="#007749" />
    {/* Yellow border */}
    <path d="M0,5 L37.5,30 L0,55 Z" fill="#FFB81C" />
    {/* Black triangle */}
    <path d="M0,10 L30,30 L0,50 Z" fill="#000000" />
  </svg>
);

export const SaudiArabiaFlag = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 60 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Saudi Arabia">
    <rect width="60" height="40" fill="#006C35" rx="2" />
    {/* Shahada stylized script */}
    <path d="M12 12h36v2H12zm3 4h30v2H15zm4 4h22v2H19z" fill="#ffffff" opacity="0.9" />
    {/* Traditional Arabian Scimitar Sword */}
    <path d="M15 26h28v2H15z" fill="#ffffff" />
    <path d="M13 27l3-3v6z" fill="#ffffff" />
    <path d="M43 24v6h2v-6z" fill="#ffffff" />
  </svg>
);

export const UKFlag = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 60 30" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="United Kingdom">
    <clipPath id="uk-flag-clip"><rect width="60" height="30" rx="2" /></clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <path d="M0 0h60v30H0z" fill="#012169"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#c8102e" strokeWidth="2"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6"/>
    </g>
  </svg>
);

export const JapanFlag = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 60 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Japan">
    <rect width="60" height="40" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" rx="2" />
    <circle cx="30" cy="20" r="12" fill="#BC002D" />
  </svg>
);

export const IndiaFlag = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 60 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="India">
    <rect width="60" height="13.33" fill="#FF9933" rx="2" />
    <rect y="13.33" width="60" height="13.33" fill="#FFFFFF" />
    <rect y="26.66" width="60" height="13.34" fill="#138808" rx="2" />
    <circle cx="30" cy="20" r="4.5" fill="none" stroke="#000080" strokeWidth="0.8" />
    <circle cx="30" cy="20" r="1" fill="#000080" />
    <path d="M30 15.5v9M25.5 20h9M26.8 16.8l6.4 6.4M26.8 23.2l6.4-6.4" stroke="#000080" strokeWidth="0.5" />
  </svg>
);

export const UAEFlag = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 60 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="United Arab Emirates">
    <rect width="60" height="13.33" fill="#00732F" rx="2" />
    <rect y="13.33" width="60" height="13.33" fill="#FFFFFF" />
    <rect y="26.66" width="60" height="13.34" fill="#000000" rx="2" />
    <rect width="15" height="40" fill="#FF0000" rx="2" />
  </svg>
);
