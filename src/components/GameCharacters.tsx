import React from 'react';
import { PlayerCharacter } from '../types';

interface CharacterProps {
  className?: string;
  size?: number;
}

// 1. Spanish Waiter / Camarero (Panel 8)
export const SpanishWaiterIllustration: React.FC<CharacterProps> = ({ className = '', size = 260 }) => {
  return (
    <div style={{ width: size, height: size * 1.15 }} className={`relative shrink-0 select-none ${className}`}>
      <svg viewBox="0 0 240 280" className="w-full h-full filter drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
        {/* Countertop with coffee cup */}
        <g id="counter">
          {/* Wooden bar counter */}
          <rect x="10" y="225" width="220" height="55" rx="8" fill="#4A2E1B" stroke="#2B1A0E" strokeWidth="3" />
          <rect x="8" y="222" width="224" height="12" rx="4" fill="#6B4226" />
          {/* Ceramic espresso cup on saucer */}
          <ellipse cx="65" cy="235" rx="18" ry="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M 53,222 L 77,222 L 74,233 L 56,233 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Coffee inside cup */}
          <ellipse cx="65" cy="223" rx="10" ry="2.5" fill="#3E2723" />
          {/* Cup handle */}
          <path d="M 76,224 C 82,225 82,231 75,231" fill="none" stroke="#94A3B8" strokeWidth="2" />
          {/* Small pastry / croissant */}
          <ellipse cx="105" cy="232" rx="12" ry="5" fill="#D97706" />
          <ellipse cx="105" cy="231" rx="9" ry="3.5" fill="#F59E0B" />
        </g>

        {/* Waiter Body & Clothes */}
        <g id="waiter-body">
          {/* White collared shirt */}
          <path d="M 65,155 L 175,155 L 185,235 L 55,235 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
          {/* Red Spanish Bar Apron / Vest */}
          <path d="M 80,158 L 160,158 L 168,235 L 72,235 Z" fill="#C60B1E" stroke="#991B1B" strokeWidth="2" />
          {/* Apron straps */}
          <path d="M 95,158 L 90,195 L 85,235" fill="none" stroke="#991B1B" strokeWidth="3" />
          <path d="M 145,158 L 150,195 L 155,235" fill="none" stroke="#991B1B" strokeWidth="3" />
          {/* Shirt tie / button row */}
          <line x1="120" y1="160" x2="120" y2="230" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="1 8" />

          {/* Left Arm gesturing towards menu */}
          <path d="M 68,160 Q 40,185 30,205 Q 38,212 55,200 L 75,175 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
          {/* Hand */}
          <circle cx="28" cy="207" r="8" fill="#E8B98A" />

          {/* Right Arm resting on counter */}
          <path d="M 172,160 Q 195,185 205,215 L 188,222 L 165,175 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
          {/* Hand */}
          <circle cx="204" cy="217" r="8" fill="#E8B98A" />

          {/* Neck */}
          <rect x="108" y="132" width="24" height="26" fill="#E8B98A" rx="4" />
          {/* Shirt collar flaps */}
          <polygon points="106,155 120,165 114,152" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="134,155 120,165 126,152" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        </g>

        {/* Head, Face & Hair */}
        <g id="waiter-head">
          {/* Head base */}
          <ellipse cx="120" cy="98" rx="34" ry="40" fill="#E8B98A" />

          {/* Ears */}
          <circle cx="84" cy="98" r="8" fill="#E8B98A" />
          <circle cx="156" cy="98" r="8" fill="#E8B98A" />

          {/* Eyes (warm & friendly) */}
          <ellipse cx="106" cy="93" rx="5.5" ry="6.5" fill="#FFFFFF" />
          <circle cx="107" cy="93" r="3.8" fill="#3E2723" />
          <circle cx="108.5" cy="91.5" r="1.3" fill="#FFFFFF" />

          <ellipse cx="134" cy="93" rx="5.5" ry="6.5" fill="#FFFFFF" />
          <circle cx="133" cy="93" r="3.8" fill="#3E2723" />
          <circle cx="134.5" cy="91.5" r="1.3" fill="#FFFFFF" />

          {/* Eyebrows */}
          <path d="M 98,84 Q 106,80 114,84" fill="none" stroke="#2B1A0E" strokeWidth="3" strokeLinecap="round" />
          <path d="M 126,84 Q 134,80 142,84" fill="none" stroke="#2B1A0E" strokeWidth="3" strokeLinecap="round" />

          {/* Nose */}
          <path d="M 120,92 Q 123,103 118,106" fill="none" stroke="#C8956C" strokeWidth="2.5" strokeLinecap="round" />

          {/* Warm Spanish Beard & Mustache */}
          {/* Mustache */}
          <path d="M 106,112 Q 120,108 120,113 Q 120,108 134,112 Q 120,120 106,112 Z" fill="#2B1A0E" />
          {/* Smile under mustache */}
          <path d="M 112,118 Q 120,126 128,118" fill="none" stroke="#881337" strokeWidth="2" strokeLinecap="round" />
          {/* Neat trimmed chin beard */}
          <path d="M 112,128 Q 120,135 128,128" fill="none" stroke="#2B1A0E" strokeWidth="3.5" strokeLinecap="round" />

          {/* Stylish Hair */}
          <path d="M 86,90 C 80,60 110,48 120,48 C 135,48 160,60 154,90 C 150,75 145,68 120,68 C 95,68 90,75 86,90 Z" fill="#2B1A0E" />
          {/* Sideburns */}
          <rect x="85" y="86" width="5" height="18" fill="#2B1A0E" rx="2" />
          <rect x="150" y="86" width="5" height="18" fill="#2B1A0E" rx="2" />
        </g>
      </svg>
    </div>
  );
};

// 2. Spanish Guide / Sofia (Panels 4 & 9)
export const SpanishGuideIllustration: React.FC<CharacterProps> = ({ className = '', size = 260 }) => {
  return (
    <div style={{ width: size, height: size * 1.15 }} className={`relative shrink-0 select-none ${className}`}>
      <svg viewBox="0 0 240 280" className="w-full h-full filter drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
        {/* Guide Body */}
        <g id="guide-body">
          {/* White ruffled Spanish blouse */}
          <path d="M 70,165 L 170,165 L 180,240 L 60,240 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          {/* Black traditional vest / corset */}
          <path d="M 85,168 L 155,168 L 162,235 L 78,235 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          {/* Golden corset lacing */}
          <path d="M 105,178 L 135,188 L 105,198 L 135,208 L 105,218 L 135,228" fill="none" stroke="#F59E0B" strokeWidth="2" />

          {/* Shoulders & Sleeves (Puff sleeves) */}
          <ellipse cx="62" cy="180" rx="16" ry="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <ellipse cx="178" cy="180" rx="16" ry="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />

          {/* Arms */}
          <path d="M 58,195 Q 48,220 56,238" fill="none" stroke="#FDDCB5" strokeWidth="12" strokeLinecap="round" />
          <path d="M 182,195 Q 192,220 184,238" fill="none" stroke="#FDDCB5" strokeWidth="12" strokeLinecap="round" />

          {/* Neck */}
          <rect x="110" y="142" width="20" height="24" fill="#FDDCB5" rx="3" />
        </g>

        {/* Head, Face & Hair */}
        <g id="guide-head">
          {/* Long wavy dark brown hair (back layer) */}
          <path d="M 70,100 C 60,150 48,220 70,240 C 85,240 85,190 85,160" fill="#3E2723" />
          <path d="M 170,100 C 180,150 192,220 170,240 C 155,240 155,190 155,160" fill="#3E2723" />

          {/* Head base */}
          <ellipse cx="120" cy="108" rx="32" ry="38" fill="#FDDCB5" />

          {/* Ears */}
          <circle cx="86" cy="110" r="7" fill="#FDDCB5" />
          <circle cx="154" cy="110" r="7" fill="#FDDCB5" />
          {/* Golden hoop earrings */}
          <circle cx="85" cy="118" r="4.5" fill="none" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="155" cy="118" r="4.5" fill="none" stroke="#F59E0B" strokeWidth="2" />

          {/* Big expressive anime/cartoon eyes */}
          <ellipse cx="107" cy="104" rx="7" ry="9" fill="#FFFFFF" />
          <ellipse cx="108" cy="104" rx="5" ry="6.5" fill="#4E342E" />
          <circle cx="109.5" cy="102" r="2.2" fill="#FFFFFF" />
          <circle cx="106.5" cy="106.5" r="1.1" fill="#FFFFFF" />

          <ellipse cx="133" cy="104" rx="7" ry="9" fill="#FFFFFF" />
          <ellipse cx="132" cy="104" rx="5" ry="6.5" fill="#4E342E" />
          <circle cx="133.5" cy="102" r="2.2" fill="#FFFFFF" />
          <circle cx="130.5" cy="106.5" r="1.1" fill="#FFFFFF" />

          {/* Eyelashes */}
          <path d="M 99,98 Q 107,93 115,98" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 125,98 Q 133,93 141,98" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />

          {/* Eyebrows */}
          <path d="M 100,92 Q 107,88 114,92" fill="none" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
          <path d="M 126,92 Q 133,88 140,92" fill="none" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />

          {/* Rosy Cheeks */}
          <ellipse cx="98" cy="116" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.65" />
          <ellipse cx="142" cy="116" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.65" />

          {/* Nose */}
          <circle cx="120" cy="112" r="2" fill="#E8B98A" />

          {/* Cheerful Smile */}
          <path d="M 112,122 Q 120,132 128,122" fill="#E11D48" stroke="#9F1239" strokeWidth="1.5" />

          {/* Front Wavy Hair & Bangs */}
          <path d="M 88,100 C 80,65 110,55 120,55 C 135,55 160,65 152,100 C 146,80 135,74 120,74 C 105,74 94,80 88,100 Z" fill="#3E2723" />
          <path d="M 95,78 Q 110,88 120,80 Q 130,88 145,78" fill="none" stroke="#3E2723" strokeWidth="5" strokeLinecap="round" />

          {/* Red Spanish Rose in Hair */}
          <circle cx="82" cy="74" r="10" fill="#E11D48" />
          <circle cx="82" cy="74" r="6" fill="#BE123C" />
          <circle cx="82" cy="74" r="3" fill="#881337" />
          <path d="M 72,70 Q 70,64 76,66" fill="#15803D" />
        </g>
      </svg>
    </div>
  );
};

// 3. Traveler Victory Hero (Panel 11)
export const TravelerVictoryIllustration: React.FC<CharacterProps & { character?: PlayerCharacter }> = ({ 
  className = '', 
  size = 280,
  character 
}) => {
  const outfitColor = {
    casual: '#3B82F6',
    traveler: '#DC2626', // Red hoodie like Panel 11!
    flamenco: '#C60B1E',
    sporty: '#16A34A',
    elegant: '#7C3AED'
  }[character?.outfit || 'traveler'] || '#DC2626';

  const skinColor = {
    light: '#FDDCB5',
    'medium-light': '#E8B98A',
    medium: '#C8956C',
    'medium-dark': '#9A6B4A',
    dark: '#6B4226'
  }[character?.skinTone || 'medium'] || '#E8B98A';

  const hairColor = {
    black: '#1A1A2E',
    brown: '#5D4037',
    blonde: '#F59E0B',
    red: '#B91C1C',
    gray: '#64748B'
  }[character?.hairColor || 'brown'] || '#5D4037';

  return (
    <div style={{ width: size, height: size * 1.15 }} className={`relative shrink-0 select-none ${className}`}>
      <svg viewBox="0 0 240 280" className="w-full h-full filter drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
        {/* Celebration Sparks around character */}
        <g id="sparks" className="animate-pulse">
          <circle cx="35" cy="40" r="4" fill="#FBBF24" />
          <circle cx="205" cy="55" r="5" fill="#FBBF24" />
          <polygon points="40,90 44,98 52,102 44,106 40,114 36,106 28,102 36,98" fill="#F59E0B" />
          <polygon points="195,120 198,126 204,129 198,132 195,138 192,132 186,129 192,126" fill="#F59E0B" />
        </g>

        {/* Blue Traveler Backpack straps (Panel 11) */}
        <g id="backpack">
          <path d="M 68,160 Q 55,200 62,240" fill="none" stroke="#1D4ED8" strokeWidth="8" strokeLinecap="round" />
          <path d="M 172,160 Q 185,200 178,240" fill="none" stroke="#1D4ED8" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* Body / Red Hoodie */}
        <g id="hero-body">
          <path d="M 72,160 L 168,160 L 175,245 L 65,245 Z" fill={outfitColor} stroke="#991B1B" strokeWidth="2.5" />
          
          {/* Hoodie zipper */}
          <line x1="120" y1="160" x2="120" y2="245" stroke="#FBBF24" strokeWidth="2.5" />

          {/* Left Arm Raised High in Triumph (Panel 11 style) */}
          {/* Upper arm going up-left */}
          <path d="M 75,165 Q 45,130 38,90" fill="none" stroke={outfitColor} strokeWidth="18" strokeLinecap="round" />
          {/* Raised fist clenched in victory */}
          <circle cx="36" cy="80" r="11" fill={skinColor} />
          {/* Clenched thumb */}
          <ellipse cx="44" cy="80" rx="4" ry="7" fill={skinColor} />

          {/* Right Arm resting happily */}
          <path d="M 165,165 Q 190,195 185,225" fill="none" stroke={outfitColor} strokeWidth="16" strokeLinecap="round" />
          <circle cx="185" cy="230" r="9" fill={skinColor} />

          {/* Neck */}
          <rect x="110" y="136" width="20" height="26" fill={skinColor} rx="3" />
        </g>

        {/* Head, Face & Hair */}
        <g id="hero-head">
          <ellipse cx="120" cy="102" rx="34" ry="38" fill={skinColor} />

          {/* Ears */}
          <circle cx="85" cy="102" r="8" fill={skinColor} />
          <circle cx="155" cy="102" r="8" fill={skinColor} />

          {/* Big Sparkly Triumphant Eyes */}
          <ellipse cx="106" cy="98" rx="6.5" ry="8" fill="#FFFFFF" />
          <circle cx="107" cy="98" r="4.8" fill="#1E293B" />
          <circle cx="108.5" cy="95.5" r="2" fill="#FFFFFF" />

          <ellipse cx="134" cy="98" rx="6.5" ry="8" fill="#FFFFFF" />
          <circle cx="133" cy="98" r="4.8" fill="#1E293B" />
          <circle cx="134.5" cy="95.5" r="2" fill="#FFFFFF" />

          {/* Eyebrows (excited) */}
          <path d="M 98,87 Q 106,81 114,87" fill="none" stroke={hairColor} strokeWidth="3" strokeLinecap="round" />
          <path d="M 126,87 Q 134,81 142,87" fill="none" stroke={hairColor} strokeWidth="3" strokeLinecap="round" />

          {/* Big Open Happy Smile (Panel 11) */}
          <path d="M 106,112 Q 120,132 134,112 Z" fill="#991B1B" stroke="#7F1D1D" strokeWidth="2" />
          {/* Teeth */}
          <path d="M 110,113 Q 120,118 130,113 Z" fill="#FFFFFF" />

          {/* Cheerful rosy cheeks */}
          <ellipse cx="96" cy="110" rx="6.5" ry="4" fill="#FDA4AF" opacity="0.75" />
          <ellipse cx="144" cy="110" rx="6.5" ry="4" fill="#FDA4AF" opacity="0.75" />

          {/* Messy curly/adventure hair */}
          <path d="M 85,92 C 78,55 110,42 120,42 C 138,42 162,55 155,92 C 150,72 140,64 120,64 C 100,64 90,72 85,92 Z" fill={hairColor} />
          {/* Hair tufts */}
          <circle cx="100" cy="52" r="10" fill={hairColor} />
          <circle cx="120" cy="46" r="11" fill={hairColor} />
          <circle cx="140" cy="52" r="10" fill={hairColor} />
          <circle cx="152" cy="65" r="9" fill={hairColor} />
          <circle cx="88" cy="65" r="9" fill={hairColor} />
        </g>
      </svg>
    </div>
  );
};
