import React, { useState, useMemo } from 'react';
import {
  PlayerCharacter,
  SkinTone,
  HairStyle,
  HairColor,
  OutfitStyle,
  AccessoryType,
} from '../types';
import {
  ArrowLeft,
  Sparkles,
  User,
  Scissors,
  Shirt,
  Gem,
  Rocket,
} from 'lucide-react';

/* ============================================
   PROPS
   ============================================ */
interface CharacterCreatorProps {
  initialCharacter?: PlayerCharacter;
  onComplete: (character: PlayerCharacter) => void;
  onBack: () => void;
}

/* ============================================
   DATA MAPS
   ============================================ */
const SKIN_TONES: { value: SkinTone; hex: string; label: string }[] = [
  { value: 'light', hex: '#FDDCB5', label: 'Light' },
  { value: 'medium-light', hex: '#E8B98A', label: 'Medium Light' },
  { value: 'medium', hex: '#C8956C', label: 'Medium' },
  { value: 'medium-dark', hex: '#9A6B4A', label: 'Medium Dark' },
  { value: 'dark', hex: '#6B4226', label: 'Dark' },
];

const HAIR_STYLES: { value: HairStyle; label: string }[] = [
  { value: 'short', label: 'Short' },
  { value: 'medium', label: 'Medium' },
  { value: 'long', label: 'Long' },
  { value: 'curly', label: 'Curly' },
  { value: 'ponytail', label: 'Ponytail' },
  { value: 'bun', label: 'Bun' },
];

const HAIR_COLORS: { value: HairColor; hex: string; label: string }[] = [
  { value: 'black', hex: '#1A1A2E', label: 'Black' },
  { value: 'brown', hex: '#6B3A2A', label: 'Brown' },
  { value: 'blonde', hex: '#E8C96A', label: 'Blonde' },
  { value: 'red', hex: '#B34233', label: 'Red' },
  { value: 'gray', hex: '#9CA3AF', label: 'Gray' },
];

const OUTFITS: { value: OutfitStyle; label: string; emoji: string }[] = [
  { value: 'casual', label: 'Casual', emoji: '👕' },
  { value: 'traveler', label: 'Traveler', emoji: '🧥' },
  { value: 'flamenco', label: 'Flamenco', emoji: '💃' },
  { value: 'sporty', label: 'Sporty', emoji: '🏃' },
  { value: 'elegant', label: 'Elegant', emoji: '✨' },
];

const ACCESSORIES: { value: AccessoryType; label: string; emoji: string }[] = [
  { value: 'none', label: 'None', emoji: '❌' },
  { value: 'glasses', label: 'Glasses', emoji: '👓' },
  { value: 'hat', label: 'Hat', emoji: '🎩' },
  { value: 'scarf', label: 'Scarf', emoji: '🧣' },
  { value: 'backpack', label: 'Backpack', emoji: '🎒' },
  { value: 'camera', label: 'Camera', emoji: '📷' },
];

const OUTFIT_COLORS: Record<OutfitStyle, { primary: string; secondary: string }> = {
  casual: { primary: '#3B82F6', secondary: '#2563EB' },
  traveler: { primary: '#8B6914', secondary: '#6B4F10' },
  flamenco: { primary: '#C60B1E', secondary: '#991B1B' },
  sporty: { primary: '#16A34A', secondary: '#15803D' },
  elegant: { primary: '#7C3AED', secondary: '#6D28D9' },
};

type TabId = 'face' | 'hair' | 'outfit' | 'accessories';

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'face', label: 'Face', icon: <User size={18} /> },
  { id: 'hair', label: 'Hair', icon: <Scissors size={18} /> },
  { id: 'outfit', label: 'Outfit', icon: <Shirt size={18} /> },
  { id: 'accessories', label: 'Accessories', icon: <Gem size={18} /> },
];

/* ============================================
   SVG CHARACTER PREVIEW
   ============================================ */
function getSkinHex(tone: SkinTone): string {
  return SKIN_TONES.find((s) => s.value === tone)?.hex ?? '#E8B98A';
}
function getHairHex(color: HairColor): string {
  return HAIR_COLORS.find((h) => h.value === color)?.hex ?? '#6B3A2A';
}

interface CharacterPreviewProps {
  skinTone: SkinTone;
  hairStyle: HairStyle;
  hairColor: HairColor;
  outfit: OutfitStyle;
  accessory: AccessoryType;
  name: string;
}

const CharacterPreview: React.FC<CharacterPreviewProps> = ({
  skinTone,
  hairStyle,
  hairColor,
  outfit,
  accessory,
  name,
}) => {
  const skin = getSkinHex(skinTone);
  const hair = getHairHex(hairColor);
  const outfitCol = OUTFIT_COLORS[outfit];

  /* ---------- Hair SVG elements ---------- */
  const renderHair = () => {
    switch (hairStyle) {
      case 'short':
        return (
          <g>
            <ellipse cx="100" cy="72" rx="46" ry="22" fill={hair} />
            <rect x="56" y="65" width="88" height="20" rx="6" fill={hair} />
          </g>
        );
      case 'medium':
        return (
          <g>
            <ellipse cx="100" cy="70" rx="48" ry="24" fill={hair} />
            <rect x="54" y="65" width="92" height="30" rx="8" fill={hair} />
            <rect x="56" y="85" width="16" height="22" rx="6" fill={hair} />
            <rect x="128" y="85" width="16" height="22" rx="6" fill={hair} />
          </g>
        );
      case 'long':
        return (
          <g>
            <ellipse cx="100" cy="70" rx="50" ry="26" fill={hair} />
            <rect x="52" y="62" width="96" height="30" rx="8" fill={hair} />
            <rect x="54" y="82" width="18" height="60" rx="8" fill={hair} />
            <rect x="128" y="82" width="18" height="60" rx="8" fill={hair} />
          </g>
        );
      case 'curly':
        return (
          <g>
            <ellipse cx="100" cy="68" rx="50" ry="28" fill={hair} />
            <circle cx="60" cy="80" r="14" fill={hair} />
            <circle cx="140" cy="80" r="14" fill={hair} />
            <circle cx="70" cy="66" r="12" fill={hair} />
            <circle cx="130" cy="66" r="12" fill={hair} />
            <circle cx="100" cy="56" r="14" fill={hair} />
            <circle cx="84" cy="60" r="11" fill={hair} />
            <circle cx="116" cy="60" r="11" fill={hair} />
          </g>
        );
      case 'ponytail':
        return (
          <g>
            <ellipse cx="100" cy="72" rx="46" ry="22" fill={hair} />
            <rect x="56" y="65" width="88" height="18" rx="6" fill={hair} />
            <ellipse cx="140" cy="84" rx="8" ry="6" fill={hair} />
            <rect x="138" y="82" width="10" height="50" rx="5" fill={hair} />
            <ellipse cx="143" cy="132" rx="10" ry="8" fill={hair} />
          </g>
        );
      case 'bun':
        return (
          <g>
            <ellipse cx="100" cy="72" rx="46" ry="22" fill={hair} />
            <rect x="56" y="65" width="88" height="18" rx="6" fill={hair} />
            <circle cx="100" cy="52" r="18" fill={hair} />
          </g>
        );
    }
  };

  /* ---------- Outfit SVG ---------- */
  const renderOutfit = () => {
    switch (outfit) {
      case 'casual':
        return (
          <g>
            {/* T-shirt body */}
            <path
              d="M68 148 L68 210 Q68 220 78 220 L122 220 Q132 220 132 210 L132 148"
              fill={outfitCol.primary}
              stroke={outfitCol.secondary}
              strokeWidth="2"
            />
            {/* Sleeves */}
            <path d="M68 148 L48 168 L48 180 L68 170" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            <path d="M132 148 L152 168 L152 180 L132 170" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            {/* Neckline */}
            <path d="M85 148 Q100 160 115 148" fill="none" stroke={outfitCol.secondary} strokeWidth="2" />
          </g>
        );
      case 'traveler':
        return (
          <g>
            {/* Jacket */}
            <path
              d="M65 148 L65 220 Q65 224 72 224 L128 224 Q135 224 135 220 L135 148"
              fill={outfitCol.primary}
              stroke={outfitCol.secondary}
              strokeWidth="2"
            />
            {/* Jacket center line */}
            <line x1="100" y1="148" x2="100" y2="224" stroke={outfitCol.secondary} strokeWidth="2" />
            {/* Lapels */}
            <path d="M85 148 L100 170 L100 148" fill={outfitCol.secondary} opacity="0.5" />
            <path d="M115 148 L100 170 L100 148" fill={outfitCol.secondary} opacity="0.5" />
            {/* Sleeves */}
            <path d="M65 148 L44 172 L44 186 L65 174" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            <path d="M135 148 L156 172 L156 186 L135 174" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            {/* Pockets */}
            <rect x="72" y="185" width="20" height="15" rx="3" fill={outfitCol.secondary} opacity="0.4" />
            <rect x="108" y="185" width="20" height="15" rx="3" fill={outfitCol.secondary} opacity="0.4" />
          </g>
        );
      case 'flamenco':
        return (
          <g>
            {/* Fitted top */}
            <path
              d="M72 148 L68 185 Q68 188 72 188 L128 188 Q132 188 132 185 L128 148"
              fill={outfitCol.primary}
              stroke={outfitCol.secondary}
              strokeWidth="2"
            />
            {/* Flared skirt */}
            <path
              d="M68 188 L55 240 Q55 244 60 244 L140 244 Q145 244 145 240 L132 188"
              fill={outfitCol.primary}
              stroke={outfitCol.secondary}
              strokeWidth="2"
            />
            {/* Ruffles */}
            <path d="M60 225 Q75 220 90 225 Q105 230 120 225 Q135 220 140 225" fill="none" stroke="#FFD700" strokeWidth="2" />
            <path d="M58 235 Q73 230 88 235 Q103 240 118 235 Q133 230 142 235" fill="none" stroke="#FFD700" strokeWidth="2" />
            {/* Sleeves */}
            <path d="M72 148 L52 165 L55 172 L72 160" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            <path d="M128 148 L148 165 L145 172 L128 160" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
          </g>
        );
      case 'sporty':
        return (
          <g>
            {/* Athletic top */}
            <path
              d="M68 148 L68 210 Q68 214 74 214 L126 214 Q132 214 132 210 L132 148"
              fill={outfitCol.primary}
              stroke={outfitCol.secondary}
              strokeWidth="2"
            />
            {/* Stripe */}
            <rect x="68" y="175" width="64" height="6" fill="white" opacity="0.5" />
            {/* Number */}
            <text x="100" y="200" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" opacity="0.9">7</text>
            {/* Sleeves */}
            <path d="M68 148 L50 166 L50 175 L68 165" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            <path d="M132 148 L150 166 L150 175 L132 165" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
          </g>
        );
      case 'elegant':
        return (
          <g>
            {/* Suit jacket */}
            <path
              d="M65 148 L65 224 Q65 228 72 228 L128 228 Q135 228 135 224 L135 148"
              fill={outfitCol.primary}
              stroke={outfitCol.secondary}
              strokeWidth="2"
            />
            {/* Lapels */}
            <path d="M82 148 L100 175 L100 148" fill={outfitCol.secondary} opacity="0.4" />
            <path d="M118 148 L100 175 L100 148" fill={outfitCol.secondary} opacity="0.4" />
            {/* Center button */}
            <circle cx="100" cy="185" r="3" fill="#FFD700" />
            <circle cx="100" cy="200" r="3" fill="#FFD700" />
            {/* Sleeves */}
            <path d="M65 148 L44 172 L44 188 L65 176" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            <path d="M135 148 L156 172 L156 188 L135 176" fill={outfitCol.primary} stroke={outfitCol.secondary} strokeWidth="2" />
            {/* Pocket square */}
            <path d="M76 160 L76 170 L84 170 L82 158" fill="#FFD700" opacity="0.7" />
          </g>
        );
    }
  };

  /* ---------- Accessory SVG ---------- */
  const renderAccessory = () => {
    switch (accessory) {
      case 'none':
        return null;
      case 'glasses':
        return (
          <g>
            <circle cx="86" cy="92" r="11" fill="none" stroke="#1F2937" strokeWidth="2.5" />
            <circle cx="114" cy="92" r="11" fill="none" stroke="#1F2937" strokeWidth="2.5" />
            <line x1="97" y1="92" x2="103" y2="92" stroke="#1F2937" strokeWidth="2" />
            <line x1="75" y1="90" x2="66" y2="87" stroke="#1F2937" strokeWidth="2" />
            <line x1="125" y1="90" x2="134" y2="87" stroke="#1F2937" strokeWidth="2" />
          </g>
        );
      case 'hat':
        return (
          <g>
            <ellipse cx="100" cy="62" rx="55" ry="8" fill="#4A3728" />
            <path d="M70 62 Q70 35 100 32 Q130 35 130 62" fill="#5C432E" />
            <rect x="70" y="56" width="60" height="6" rx="2" fill="#E07A5F" />
          </g>
        );
      case 'scarf':
        return (
          <g>
            <path
              d="M70 138 Q100 150 130 138 Q135 138 135 145 Q100 160 65 145 Q65 138 70 138"
              fill="#E07A5F"
              stroke="#C0654A"
              strokeWidth="1.5"
            />
            <path d="M78 145 L74 175 L84 172 L82 148" fill="#E07A5F" stroke="#C0654A" strokeWidth="1" />
          </g>
        );
      case 'backpack':
        return (
          <g>
            <rect x="28" y="155" width="24" height="50" rx="6" fill="#E07A5F" stroke="#C0654A" strokeWidth="1.5" />
            <rect x="32" y="162" width="16" height="10" rx="3" fill="#C0654A" opacity="0.5" />
            <line x1="40" y1="155" x2="52" y2="148" stroke="#C0654A" strokeWidth="2" />
          </g>
        );
      case 'camera':
        return (
          <g>
            {/* Strap */}
            <path d="M80 148 Q80 165 90 175 L110 175 Q120 165 120 148" fill="none" stroke="#1F2937" strokeWidth="2.5" />
            {/* Camera body */}
            <rect x="82" y="170" width="36" height="22" rx="4" fill="#374151" stroke="#1F2937" strokeWidth="1.5" />
            {/* Lens */}
            <circle cx="100" cy="181" r="7" fill="#1F2937" />
            <circle cx="100" cy="181" r="4" fill="#60A5FA" opacity="0.6" />
            {/* Flash */}
            <rect x="110" y="172" width="6" height="4" rx="1" fill="#9CA3AF" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        viewBox="0 0 200 280"
        width="200"
        height="280"
        className="drop-shadow-xl"
        style={{ transition: 'all 0.3s ease' }}
      >
        {/* ---- Body / Neck ---- */}
        <rect x="90" y="125" width="20" height="25" rx="5" fill={skin} />
        {renderOutfit()}

        {/* ---- Arms (skin) ---- */}
        <rect x="44" y="178" width="12" height="8" rx="4" fill={skin} />
        <rect x="144" y="178" width="12" height="8" rx="4" fill={skin} />

        {/* ---- Head ---- */}
        <ellipse cx="100" cy="94" rx="40" ry="44" fill={skin} />

        {/* ---- Ears ---- */}
        <ellipse cx="60" cy="94" rx="7" ry="10" fill={skin} />
        <ellipse cx="140" cy="94" rx="7" ry="10" fill={skin} />

        {/* ---- Hair (behind + on top) ---- */}
        {renderHair()}

        {/* ---- Eyes ---- */}
        <ellipse cx="86" cy="92" rx="4" ry="5" fill="#1F2937" />
        <ellipse cx="114" cy="92" rx="4" ry="5" fill="#1F2937" />
        <circle cx="87" cy="90" r="1.5" fill="white" />
        <circle cx="115" cy="90" r="1.5" fill="white" />

        {/* ---- Eyebrows ---- */}
        <path d="M78 82 Q86 78 94 82" fill="none" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        <path d="M106 82 Q114 78 122 82" fill="none" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />

        {/* ---- Mouth ---- */}
        <path d="M90 108 Q100 116 110 108" fill="none" stroke="#C0654A" strokeWidth="2" strokeLinecap="round" />

        {/* ---- Blush ---- */}
        <ellipse cx="76" cy="104" rx="8" ry="5" fill="#FF9999" opacity="0.3" />
        <ellipse cx="124" cy="104" rx="8" ry="5" fill="#FF9999" opacity="0.3" />

        {/* ---- Accessory ---- */}
        {renderAccessory()}
      </svg>
      <span className="text-fiesta-yellow font-extrabold text-lg tracking-wide">{name || 'Traveler'}</span>
    </div>
  );
};

/* ============================================
   MAIN COMPONENT
   ============================================ */
export const CharacterCreator: React.FC<CharacterCreatorProps> = ({
  initialCharacter,
  onComplete,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('face');
  const [name, setName] = useState(initialCharacter?.name ?? 'Alex');
  const [skinTone, setSkinTone] = useState<SkinTone>(initialCharacter?.skinTone ?? 'medium-light');
  const [hairStyle, setHairStyle] = useState<HairStyle>(initialCharacter?.hairStyle ?? 'short');
  const [hairColor, setHairColor] = useState<HairColor>(initialCharacter?.hairColor ?? 'brown');
  const [outfit, setOutfit] = useState<OutfitStyle>(initialCharacter?.outfit ?? 'casual');
  const [accessory, setAccessory] = useState<AccessoryType>(initialCharacter?.accessory ?? 'none');

  const character = useMemo<PlayerCharacter>(
    () => ({
      name: name || 'Alex',
      avatarStyle: 'adventurer',
      skinTone,
      hairStyle,
      hairColor,
      outfit,
      accessory,
    }),
    [name, skinTone, hairStyle, hairColor, outfit, accessory]
  );

  /* ---------- Option card helper ---------- */
  const OptionCard: React.FC<{
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
    label: string;
  }> = ({ selected, onClick, children, label }) => (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl
        border-3 transition-all duration-200 cursor-pointer min-w-[72px]
        ${
          selected
            ? 'border-fiesta-yellow bg-fiesta-yellow/10 shadow-[0_0_16px_rgba(255,196,0,0.25)] scale-105'
            : 'border-fiesta-border bg-game-panel hover:border-fiesta-amber/50 hover:bg-game-panel-light'
        }
      `}
    >
      {children}
      <span className={`text-xs font-bold ${selected ? 'text-fiesta-yellow' : 'text-slate-300'}`}>
        {label}
      </span>
    </button>
  );

  /* ---------- Tab content ---------- */
  const renderTabContent = () => {
    switch (activeTab) {
      case 'face':
        return (
          <div className="animate-fadeIn">
            <h3 className="text-sm font-bold text-fiesta-terracotta uppercase tracking-wider mb-3">
              Skin Tone
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKIN_TONES.map((tone) => (
                <OptionCard
                  key={tone.value}
                  selected={skinTone === tone.value}
                  onClick={() => setSkinTone(tone.value)}
                  label={tone.label}
                >
                  <div
                    className="w-12 h-12 rounded-full border-2 border-white/20 shadow-inner"
                    style={{ backgroundColor: tone.hex }}
                  />
                </OptionCard>
              ))}
            </div>
          </div>
        );

      case 'hair':
        return (
          <div className="animate-fadeIn space-y-5">
            <div>
              <h3 className="text-sm font-bold text-fiesta-terracotta uppercase tracking-wider mb-3">
                Hair Style
              </h3>
              <div className="flex flex-wrap gap-3">
                {HAIR_STYLES.map((style) => (
                  <OptionCard
                    key={style.value}
                    selected={hairStyle === style.value}
                    onClick={() => setHairStyle(style.value)}
                    label={style.label}
                  >
                    {/* Mini hair preview */}
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <circle cx="24" cy="26" r="14" fill="#E8B98A" />
                      {style.value === 'short' && (
                        <g>
                          <ellipse cx="24" cy="18" rx="16" ry="8" fill={getHairHex(hairColor)} />
                          <rect x="9" y="14" width="30" height="8" rx="3" fill={getHairHex(hairColor)} />
                        </g>
                      )}
                      {style.value === 'medium' && (
                        <g>
                          <ellipse cx="24" cy="17" rx="17" ry="9" fill={getHairHex(hairColor)} />
                          <rect x="8" y="14" width="32" height="14" rx="4" fill={getHairHex(hairColor)} />
                        </g>
                      )}
                      {style.value === 'long' && (
                        <g>
                          <ellipse cx="24" cy="16" rx="18" ry="10" fill={getHairHex(hairColor)} />
                          <rect x="7" y="13" width="34" height="12" rx="4" fill={getHairHex(hairColor)} />
                          <rect x="8" y="22" width="7" height="20" rx="3" fill={getHairHex(hairColor)} />
                          <rect x="33" y="22" width="7" height="20" rx="3" fill={getHairHex(hairColor)} />
                        </g>
                      )}
                      {style.value === 'curly' && (
                        <g>
                          <circle cx="14" cy="20" r="7" fill={getHairHex(hairColor)} />
                          <circle cx="34" cy="20" r="7" fill={getHairHex(hairColor)} />
                          <circle cx="24" cy="14" r="7" fill={getHairHex(hairColor)} />
                          <circle cx="18" cy="15" r="5" fill={getHairHex(hairColor)} />
                          <circle cx="30" cy="15" r="5" fill={getHairHex(hairColor)} />
                        </g>
                      )}
                      {style.value === 'ponytail' && (
                        <g>
                          <ellipse cx="24" cy="18" rx="16" ry="8" fill={getHairHex(hairColor)} />
                          <rect x="9" y="14" width="30" height="8" rx="3" fill={getHairHex(hairColor)} />
                          <rect x="36" y="20" width="5" height="18" rx="2" fill={getHairHex(hairColor)} />
                        </g>
                      )}
                      {style.value === 'bun' && (
                        <g>
                          <ellipse cx="24" cy="18" rx="16" ry="8" fill={getHairHex(hairColor)} />
                          <circle cx="24" cy="10" r="8" fill={getHairHex(hairColor)} />
                        </g>
                      )}
                    </svg>
                  </OptionCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-fiesta-terracotta uppercase tracking-wider mb-3">
                Hair Color
              </h3>
              <div className="flex flex-wrap gap-3">
                {HAIR_COLORS.map((color) => (
                  <OptionCard
                    key={color.value}
                    selected={hairColor === color.value}
                    onClick={() => setHairColor(color.value)}
                    label={color.label}
                  >
                    <div
                      className="w-10 h-10 rounded-full border-2 border-white/20 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                  </OptionCard>
                ))}
              </div>
            </div>
          </div>
        );

      case 'outfit':
        return (
          <div className="animate-fadeIn">
            <h3 className="text-sm font-bold text-fiesta-terracotta uppercase tracking-wider mb-3">
              Choose Outfit
            </h3>
            <div className="flex flex-wrap gap-3">
              {OUTFITS.map((o) => (
                <OptionCard
                  key={o.value}
                  selected={outfit === o.value}
                  onClick={() => setOutfit(o.value)}
                  label={o.label}
                >
                  <span className="text-3xl">{o.emoji}</span>
                </OptionCard>
              ))}
            </div>
          </div>
        );

      case 'accessories':
        return (
          <div className="animate-fadeIn">
            <h3 className="text-sm font-bold text-fiesta-terracotta uppercase tracking-wider mb-3">
              Pick an Accessory
            </h3>
            <div className="flex flex-wrap gap-3">
              {ACCESSORIES.map((a) => (
                <OptionCard
                  key={a.value}
                  selected={accessory === a.value}
                  onClick={() => setAccessory(a.value)}
                  label={a.label}
                >
                  <span className="text-3xl">{a.emoji}</span>
                </OptionCard>
              ))}
            </div>
          </div>
        );
    }
  };

  /* ---------- Render ---------- */
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="game-panel w-full max-w-3xl animate-fadeIn">
        {/* ---------- Header ---------- */}
        <div className="game-panel-header flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
          >
            <ArrowLeft size={22} />
          </button>
          <div className="flex-1">
            <h1 className="font-game-title text-xl md:text-2xl text-fiesta-yellow flex items-center gap-2">
              <Sparkles size={22} className="text-fiesta-amber" />
              Create Your Traveler
            </h1>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              Choose your look and start your Spanish adventure!
            </p>
          </div>
        </div>

        <div className="p-4 md:p-6">
          {/* ---------- Layout: preview + options ---------- */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Preview column */}
            <div className="flex flex-col items-center md:w-56 shrink-0">
              <div className="bg-gradient-to-b from-sky-warm/20 to-game-panel rounded-2xl border-2 border-fiesta-border p-5 w-full flex items-center justify-center">
                <CharacterPreview
                  skinTone={skinTone}
                  hairStyle={hairStyle}
                  hairColor={hairColor}
                  outfit={outfit}
                  accessory={accessory}
                  name={name}
                />
              </div>

              {/* Name input */}
              <div className="mt-4 w-full">
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Traveler Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 20))}
                  maxLength={20}
                  placeholder="Enter name..."
                  className="w-full px-4 py-2.5 rounded-xl bg-fiesta-dark border-2 border-fiesta-border
                    text-white font-bold text-center placeholder-slate-500
                    focus:border-fiesta-yellow focus:outline-none focus:ring-2 focus:ring-fiesta-yellow/30
                    transition-all duration-200"
                />
              </div>
            </div>

            {/* Options column */}
            <div className="flex-1 min-w-0">
              {/* Tabs */}
              <div className="flex gap-1 mb-5 bg-fiesta-dark/50 rounded-xl p-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg
                      text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer
                      ${
                        activeTab === tab.id
                          ? 'bg-fiesta-yellow text-fiesta-dark shadow-lg'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="min-h-[200px]">{renderTabContent()}</div>
            </div>
          </div>

          {/* ---------- Start Adventure Button ---------- */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => onComplete(character)}
              className="btn-game btn-game-primary text-base md:text-lg px-8 py-3 glow-gold"
            >
              <Rocket size={20} />
              Start Adventure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;
