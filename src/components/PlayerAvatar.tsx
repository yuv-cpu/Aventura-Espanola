import React from 'react';
import { PlayerCharacter, SkinTone, HairColor, HairStyle, OutfitStyle, AccessoryType } from '../types';

interface PlayerAvatarProps {
  character?: PlayerCharacter;
  size?: number; // width/height in px
  className?: string;
  showBorder?: boolean;
}

const SKIN_COLORS: Record<SkinTone, string> = {
  light: '#FDDCB5',
  'medium-light': '#E8B98A',
  medium: '#C8956C',
  'medium-dark': '#9A6B4A',
  dark: '#6B4226',
};

const HAIR_COLORS: Record<HairColor, string> = {
  black: '#1A1A2E',
  brown: '#6B3A2A',
  blonde: '#E8C96A',
  red: '#B34233',
  gray: '#9CA3AF',
};

const OUTFIT_COLORS: Record<OutfitStyle, string> = {
  casual: '#3B82F6',
  traveler: '#B45309',
  flamenco: '#C60B1E',
  sporty: '#16A34A',
  elegant: '#7C3AED',
};

export const PlayerAvatar: React.FC<PlayerAvatarProps> = ({
  character,
  size = 40,
  className = '',
  showBorder = true,
}) => {
  const skinTone = character?.skinTone || 'medium';
  const hairColor = character?.hairColor || 'brown';
  const hairStyle = character?.hairStyle || 'short';
  const outfit = character?.outfit || 'traveler';
  const accessory = character?.accessory || 'backpack';

  const skin = SKIN_COLORS[skinTone] || '#C8956C';
  const hair = HAIR_COLORS[hairColor] || '#6B3A2A';
  const outfitColor = OUTFIT_COLORS[outfit] || '#B45309';

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gradient-to-tr from-[#1E293B] to-[#334155] ${
        showBorder ? 'border-2 border-amber-400 shadow-md' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft background glow */}
        <circle cx="50" cy="50" r="48" fill="#1A2234" />

        {/* Hair Back */}
        {hairStyle === 'long' && (
          <ellipse cx="50" cy="52" rx="32" ry="28" fill={hair} />
        )}
        {hairStyle === 'ponytail' && (
          <path d="M 50 30 Q 80 20 75 55 Q 70 45 55 38 Z" fill={hair} />
        )}
        {hairStyle === 'bun' && (
          <circle cx="50" cy="20" r="14" fill={hair} />
        )}

        {/* Neck */}
        <rect x="44" y="60" width="12" height="14" rx="4" fill={skin} />

        {/* Outfit / Shoulders */}
        <path
          d="M 20 100 L 25 78 Q 50 72 75 78 L 80 100 Z"
          fill={outfitColor}
        />
        {/* Collar accent */}
        <path
          d="M 42 75 L 50 84 L 58 75 Z"
          fill={skin}
        />

        {/* Head / Face */}
        <ellipse cx="50" cy="46" rx="22" ry="24" fill={skin} />

        {/* Ears */}
        <circle cx="28" cy="48" r="4.5" fill={skin} />
        <circle cx="72" cy="48" r="4.5" fill={skin} />

        {/* Hair Front */}
        {hairStyle === 'short' && (
          <path
            d="M 28 40 Q 50 18 72 40 Q 64 26 50 26 Q 36 26 28 40 Z"
            fill={hair}
          />
        )}
        {hairStyle === 'medium' && (
          <g>
            <path d="M 26 44 Q 50 20 74 44 Q 68 26 50 26 Q 32 26 26 44 Z" fill={hair} />
            <rect x="26" y="38" width="6" height="16" rx="3" fill={hair} />
            <rect x="68" y="38" width="6" height="16" rx="3" fill={hair} />
          </g>
        )}
        {hairStyle === 'long' && (
          <g>
            <path d="M 26 42 Q 50 20 74 42 Q 68 24 50 24 Q 32 24 26 42 Z" fill={hair} />
            <rect x="25" y="36" width="7" height="30" rx="3.5" fill={hair} />
            <rect x="68" y="36" width="7" height="30" rx="3.5" fill={hair} />
          </g>
        )}
        {hairStyle === 'curly' && (
          <g fill={hair}>
            <circle cx="50" cy="24" r="10" />
            <circle cx="36" cy="28" r="9" />
            <circle cx="64" cy="28" r="9" />
            <circle cx="28" cy="38" r="8" />
            <circle cx="72" cy="38" r="8" />
          </g>
        )}
        {hairStyle === 'ponytail' && (
          <path d="M 28 40 Q 50 22 72 40 Q 64 26 50 26 Q 36 26 28 40 Z" fill={hair} />
        )}
        {hairStyle === 'bun' && (
          <path d="M 28 40 Q 50 22 72 40 Q 64 26 50 26 Q 36 26 28 40 Z" fill={hair} />
        )}

        {/* Eyes */}
        <circle cx="42" cy="46" r="3" fill="#1E293B" />
        <circle cx="58" cy="46" r="3" fill="#1E293B" />
        <circle cx="43" cy="45" r="1" fill="#FFFFFF" />
        <circle cx="59" cy="45" r="1" fill="#FFFFFF" />

        {/* Smile */}
        <path
          d="M 44 54 Q 50 60 56 54"
          stroke="#C0392B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cheek blush */}
        <circle cx="36" cy="51" r="3" fill="#E07A5F" opacity="0.45" />
        <circle cx="64" cy="51" r="3" fill="#E07A5F" opacity="0.45" />

        {/* Accessories */}
        {accessory === 'glasses' && (
          <g stroke="#D97706" strokeWidth="2" fill="none">
            <rect x="36" y="41" width="12" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect x="52" y="41" width="12" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
            <line x1="48" y1="46" x2="52" y2="46" />
          </g>
        )}

        {accessory === 'hat' && (
          <g>
            <ellipse cx="50" cy="26" rx="30" ry="6" fill="#1E293B" />
            <rect x="32" y="12" width="36" height="14" rx="3" fill="#1E293B" />
            <rect x="32" y="22" width="36" height="4" fill="#C60B1E" />
          </g>
        )}

        {accessory === 'scarf' && (
          <g>
            <path d="M 38 68 Q 50 74 62 68 Q 50 80 38 68 Z" fill="#C60B1E" />
            <rect x="52" y="70" width="8" height="16" rx="2" fill="#C60B1E" />
          </g>
        )}
      </svg>
    </div>
  );
};
