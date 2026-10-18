import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AuthScreen } from './components/AuthScreen';
import { CharacterCreator } from './components/CharacterCreator';
import { TutorialScreen } from './components/TutorialScreen';
import { Navbar } from './components/Navbar';
import { WorldMap } from './components/WorldMap';
import { CityScreen } from './components/CityScreen';
import { LevelModal } from './components/LevelModal';
import { BossMissionModal } from './components/BossMissionModal';
import { CityUnlockModal } from './components/CityUnlockModal';
import { FestivalWorld } from './components/FestivalWorld';
import { ReviewNotebookModal } from './components/ReviewNotebookModal';
import { StudyPlanModal } from './components/StudyPlanModal';
import { SyllabusCoverageModal } from './components/SyllabusCoverageModal';
import { AchievementsModal } from './components/AchievementsModal';
import { SettingsModal } from './components/SettingsModal';
import { FinalAssessmentModal } from './components/FinalAssessmentModal';
import { getCityById, getLevelById } from './data/citiesData';
import { PlayerCharacter } from './types';

const GameMain: React.FC = () => {
  const { 
    progress, 
    currentScreen,
    setCurrentScreen,
    activeCityId, 
    setActiveCityId,
    activeLevelId,
    setActiveLevelId,
    activeBossCityId,
    setActiveBossCityId,
    isFestivalOpen,
    setIsFestivalOpen,
    updateProfile,
    updateCharacter,
    completeOnboarding,
    startAsGuest
  } = useGame();

  // Modals state
  const [showNotebook, setShowNotebook] = useState<boolean>(false);
  const [showStudyPlan, setShowStudyPlan] = useState<boolean>(false);
  const [showSyllabus, setShowSyllabus] = useState<boolean>(false);
  const [showAchievements, setShowAchievements] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showFinalAssessment, setShowFinalAssessment] = useState<boolean>(false);
  const [showCharacterCreatorModal, setShowCharacterCreatorModal] = useState<boolean>(false);
  const [showTutorialModal, setShowTutorialModal] = useState<boolean>(false);

  // City unlock celebration state
  const [unlockedCityInfo, setUnlockedCityInfo] = useState<{
    completedCityName: string;
    nextCityId?: string;
  } | null>(null);

  // Auth screen mode
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const activeCity = activeCityId ? getCityById(activeCityId) : null;
  const activeLevel = (activeCityId && activeLevelId) ? getLevelById(activeCityId, activeLevelId) : null;
  const activeBossCity = activeBossCityId ? getCityById(activeBossCityId) : null;

  /* ========================================================
     SCREEN 1: WELCOME SCREEN
     ======================================================== */
  if (currentScreen === 'welcome') {
    return (
      <WelcomeScreen
        onStartJourney={() => {
          if (progress.profile?.onboardingStep >= 5) {
            setCurrentScreen('world-map');
          } else {
            setCurrentScreen('character-creator');
          }
        }}
        onLogin={() => {
          setAuthMode('login');
          setCurrentScreen('auth');
        }}
        onCreateAccount={() => {
          setAuthMode('register');
          setCurrentScreen('auth');
        }}
        onContinueAsGuest={() => {
          startAsGuest('Viajero');
          setCurrentScreen('character-creator');
        }}
      />
    );
  }

  /* ========================================================
     SCREEN 2: AUTH SCREEN (LOGIN / REGISTER)
     ======================================================== */
  if (currentScreen === 'auth') {
    return (
      <AuthScreen
        mode={authMode}
        onLogin={(email) => {
          const name = email.split('@')[0] || 'Viajero';
          updateProfile({
            id: `usr_${Date.now().toString(36)}`,
            displayName: name,
            isGuest: false,
            onboardingStep: 5
          });
          setCurrentScreen('world-map');
        }}
        onRegister={(email, _, name) => {
          const displayName = name || email.split('@')[0] || 'Viajero';
          updateProfile({
            id: `usr_${Date.now().toString(36)}`,
            displayName,
            isGuest: false,
            onboardingStep: 2
          });
          setCurrentScreen('character-creator');
        }}
        onContinueAsGuest={() => {
          startAsGuest('Viajero');
          setCurrentScreen('character-creator');
        }}
        onBack={() => setCurrentScreen('welcome')}
        onSwitchMode={() => setAuthMode(prev => prev === 'login' ? 'register' : 'login')}
      />
    );
  }

  /* ========================================================
     SCREEN 3: CHARACTER CREATOR (FULL SCREEN ONBOARDING)
     ======================================================== */
  if (currentScreen === 'character-creator') {
    return (
      <div className="min-h-screen bg-[#0F111A] flex items-center justify-center p-4">
        <CharacterCreator
          initialCharacter={progress.profile?.character}
          onComplete={(char: PlayerCharacter) => {
            updateCharacter(char);
            updateProfile({ displayName: char.name });
            if (progress.profile?.tutorialCompleted) {
              setCurrentScreen('world-map');
            } else {
              setCurrentScreen('tutorial');
            }
          }}
          onBack={() => {
            if (progress.profile?.onboardingStep >= 5) {
              setCurrentScreen('world-map');
            } else {
              setCurrentScreen('welcome');
            }
          }}
        />
      </div>
    );
  }

  /* ========================================================
     SCREEN 4: INTERACTIVE TUTORIAL SCREEN
     ======================================================== */
  if (currentScreen === 'tutorial') {
    return (
      <TutorialScreen
        onComplete={() => {
          completeOnboarding();
          setCurrentScreen('world-map');
        }}
        onSkip={() => {
          completeOnboarding();
          setCurrentScreen('world-map');
        }}
      />
    );
  }

  /* ========================================================
     MAIN ADVENTURE APP SHELL (WORLD MAP / CITY / FESTIVAL)
     ======================================================== */
  return (
    <div className="min-h-screen bg-[#0F111A] text-slate-100 flex flex-col font-sans selection:bg-fiesta-red selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenMap={() => {
          setActiveCityId(null);
          setIsFestivalOpen(false);
        }}
        onOpenNotebook={() => setShowNotebook(true)}
        onOpenStudyPlan={() => setShowStudyPlan(true)}
        onOpenSyllabus={() => setShowSyllabus(true)}
        onOpenAchievements={() => setShowAchievements(true)}
        onOpenSettings={() => setShowSettings(true)}
        onOpenCharacterCreator={() => setShowCharacterCreatorModal(true)}
        onOpenFestival={() => {
          setIsFestivalOpen(true);
          setActiveCityId(null);
        }}
      />

      {/* Main Screen Router */}
      <main className="grow">
        {isFestivalOpen ? (
          <FestivalWorld
            onBackToMap={() => setIsFestivalOpen(false)}
            onStartFinalAssessment={() => setShowFinalAssessment(true)}
          />
        ) : activeCity ? (
          <CityScreen
            city={activeCity}
            onBackToMap={() => setActiveCityId(null)}
            onOpenLevel={(levelId) => setActiveLevelId(levelId)}
            onOpenBoss={() => setActiveBossCityId(activeCity.id)}
          />
        ) : (
          <WorldMap
            onSelectCity={(cityId) => setActiveCityId(cityId)}
            onOpenFestival={() => setIsFestivalOpen(true)}
          />
        )}
      </main>

      {/* Level Modal (Question Engine) */}
      {activeCity && activeLevel && (
        <LevelModal
          level={activeLevel}
          cityId={activeCity.id}
          onClose={() => setActiveLevelId(null)}
          onCompleteLevel={() => setActiveLevelId(null)}
        />
      )}

      {/* Boss Mission Modal */}
      {activeBossCity && (
        <BossMissionModal
          bossMission={activeBossCity.bossMission}
          cityName={activeBossCity.name}
          onClose={() => setActiveBossCityId(null)}
          onSuccess={(unlockedNextCityId) => {
            const completedName = activeBossCity.name;
            setActiveBossCityId(null);
            // Open City Unlock celebration screen!
            setUnlockedCityInfo({
              completedCityName: completedName,
              nextCityId: unlockedNextCityId
            });
          }}
        />
      )}

      {/* City Unlock Celebration Modal (Screen 13) */}
      {unlockedCityInfo && (
        <CityUnlockModal
          completedCityName={unlockedCityInfo.completedCityName}
          nextCityId={unlockedCityInfo.nextCityId}
          onContinue={() => {
            const nextId = unlockedCityInfo.nextCityId;
            setUnlockedCityInfo(null);
            if (nextId) {
              setActiveCityId(nextId);
            } else {
              setActiveCityId(null);
            }
          }}
        />
      )}

      {/* Character Customization Modal (from Navbar / Settings) */}
      {showCharacterCreatorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="my-auto w-full max-w-4xl">
            <CharacterCreator
              initialCharacter={progress.profile?.character}
              onComplete={(char: PlayerCharacter) => {
                updateCharacter(char);
                updateProfile({ displayName: char.name });
                setShowCharacterCreatorModal(false);
              }}
              onBack={() => setShowCharacterCreatorModal(false)}
            />
          </div>
        </div>
      )}

      {/* Replayable Tutorial Modal (from Settings) */}
      {showTutorialModal && (
        <TutorialScreen
          onComplete={() => setShowTutorialModal(false)}
          onSkip={() => setShowTutorialModal(false)}
        />
      )}

      {/* Spaced Review Mistakes Notebook Modal */}
      {showNotebook && (
        <ReviewNotebookModal onClose={() => setShowNotebook(false)} />
      )}

      {/* 35-Day Study Plan Modal */}
      {showStudyPlan && (
        <StudyPlanModal
          onClose={() => setShowStudyPlan(false)}
          onGoToCity={(cityId) => {
            setActiveCityId(cityId);
            setIsFestivalOpen(false);
          }}
          onGoToFestival={() => {
            setIsFestivalOpen(true);
            setActiveCityId(null);
          }}
        />
      )}

      {/* Syllabus Coverage Modal */}
      {showSyllabus && (
        <SyllabusCoverageModal
          onClose={() => setShowSyllabus(false)}
          onGoToCity={(cityId) => {
            setActiveCityId(cityId);
            setIsFestivalOpen(false);
          }}
        />
      )}

      {/* Achievements Modal */}
      {showAchievements && (
        <AchievementsModal onClose={() => setShowAchievements(false)} />
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal 
          onClose={() => setShowSettings(false)}
          onOpenCharacterCreator={() => setShowCharacterCreatorModal(true)}
          onReplayTutorial={() => setShowTutorialModal(true)}
        />
      )}

      {/* Cumulative Final Assessment Modal */}
      {showFinalAssessment && (
        <FinalAssessmentModal onClose={() => setShowFinalAssessment(false)} />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#0C0E16] py-4 px-6 text-center text-xs text-slate-500">
        <p>
          ¡Aventura Española! • Basado en el sílabo oficial <strong>BAESP101 Spanish Level I</strong> y <strong>Nuevo Español sin Fronteras ESF 1</strong>.
        </p>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <GameProvider>
      <GameMain />
    </GameProvider>
  );
}

export default App;
