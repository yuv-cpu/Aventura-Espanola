import React, { useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import { soundService } from '../services/soundService';
import { 
  X, 
  Settings, 
  Download, 
  Upload, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  User,
  BookOpen,
  HelpCircle,
  AlertTriangle 
} from 'lucide-react';

interface SettingsModalProps {
  onClose: () => void;
  onOpenCharacterCreator?: () => void;
  onReplayTutorial?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ 
  onClose,
  onOpenCharacterCreator,
  onReplayTutorial 
}) => {
  const { 
    progress, 
    soundMuted, 
    toggleSound, 
    exportSaveFile, 
    importSaveFile, 
    resetAllProgress 
  } = useGame();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resetConfirm, setResetConfirm] = useState<boolean>(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await importSaveFile(file);
      setImportStatus('¡Progreso importado con éxito!');
      setTimeout(() => setImportStatus(null), 3000);
    } catch (err) {
      setImportStatus('Error: El archivo no es un progreso válido.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#141724] border border-fiesta-border rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="px-5 py-4 border-b border-fiesta-border flex items-center justify-between bg-[#1A1D2E]">
          <div className="flex items-center space-x-2.5">
            <Settings className="w-5 h-5 text-amber-400" />
            <h2 className="text-base sm:text-lg font-bold text-white">
              Ajustes y Personalización
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-left text-sm">
          {/* Traveler & Tutorial Quick Actions */}
          <div className="p-4 rounded-xl bg-[#1C2033] border border-slate-700 space-y-3">
            <div>
              <p className="font-bold text-white">Viajero y Guía</p>
              <p className="text-xs text-slate-400">Modifica el aspecto de tu personaje o vuelve a ver la guía de juego</p>
            </div>
            <div className="flex items-center gap-2">
              {onOpenCharacterCreator && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCharacterCreator();
                  }}
                  className="flex-1 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow"
                >
                  <User className="w-4 h-4" />
                  <span>Personalizar Aspecto</span>
                </button>
              )}
              {onReplayTutorial && (
                <button
                  onClick={() => {
                    onClose();
                    onReplayTutorial();
                  }}
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-600 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-sky-400" />
                  <span>Repetir Tutorial</span>
                </button>
              )}
            </div>
          </div>

          {/* Sound settings */}
          <div className="p-4 rounded-xl bg-[#1C2033] border border-slate-700 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Efectos de Sonido y Pronunciación</p>
              <p className="text-xs text-slate-400">Activa o silencia el audio nativo y chimes del juego</p>
            </div>
            <button
              onClick={toggleSound}
              className={`p-2.5 rounded-xl border font-bold text-xs flex items-center space-x-1.5 transition-colors ${
                soundMuted
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                  : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
              }`}
            >
              {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{soundMuted ? 'Silenciado' : 'Activo'}</span>
            </button>
          </div>

          {/* Backup: Export / Import */}
          <div className="p-4 rounded-xl bg-[#1C2033] border border-slate-700 space-y-3">
            <div>
              <p className="font-bold text-white">Persistencia y Copia de Seguridad</p>
              <p className="text-xs text-slate-400">Exporta tu progreso para no perder tus monedas ni niveles</p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={exportSaveFile}
                className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-600 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Exportar Guardado</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-600 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Upload className="w-4 h-4 text-sky-400" />
                <span>Importar Guardado</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {importStatus && (
              <p className="text-xs text-amber-300 font-semibold">{importStatus}</p>
            )}
          </div>

          {/* Reset progress */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-3">
            <div>
              <p className="font-bold text-rose-300">Reiniciar Aventura</p>
              <p className="text-xs text-slate-400">Restablece todas las monedas, ciudades y niveles a su estado inicial</p>
            </div>

            {!resetConfirm ? (
              <button
                onClick={() => setResetConfirm(true)}
                className="py-2 px-4 rounded-lg bg-rose-900/60 hover:bg-rose-800 text-rose-200 text-xs font-semibold border border-rose-700 flex items-center space-x-1.5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reiniciar Progreso</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    resetAllProgress();
                    setResetConfirm(false);
                    onClose();
                  }}
                  className="py-1.5 px-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow"
                >
                  Sí, borrar todo
                </button>
                <button
                  onClick={() => setResetConfirm(false)}
                  className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>

          {/* Academic Info */}
          <div className="text-[11px] text-slate-500 text-center space-y-0.5">
            <p>¡Aventura Española! Versión 1.0.0 Oficial</p>
            <p>Acreditado según el sílabo BAESP101 Spanish Level I</p>
          </div>
        </div>
      </div>
    </div>
  );
};
