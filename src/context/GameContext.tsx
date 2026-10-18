import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PlayerProgress, PlayerCharacter, PlayerProfile, GameScreen, Question, City, Level } from '../types';
import { storageService, INITIAL_PROGRESS, DEFAULT_PROFILE, DEFAULT_CHARACTER } from '../services/storageService';
import { soundService } from '../services/soundService';
import { ALL_CITIES, getNextCity } from '../data/citiesData';
import confetti from 'canvas-confetti';

export const REWARD_CONFIG = {
  FIRST_ATTEMPT_CORRECT_COINS: 100,
  COMPLETED_DIALOGUE_COINS: 250,
  CITY_COMPLETION_BONUS_COINS: 500,
  ENGLISH_TRANSLATION_COST_COINS: 1000,
  BOSS_MASTERY_THRESHOLD_PERCENT: 80
};

interface GameContextType {
  progress: PlayerProgress;
  currentScreen: GameScreen;
  activeCityId: string | null;
  activeLevelId: string | null;
  activeBossCityId: string | null;
  isFestivalOpen: boolean;
  soundMuted: boolean;
  setCurrentScreen: (screen: GameScreen) => void;
  setActiveCityId: (id: string | null) => void;
  setActiveLevelId: (id: string | null) => void;
  setActiveBossCityId: (id: string | null) => void;
  setIsFestivalOpen: (open: boolean) => void;
  toggleSound: () => void;
  // Profile & onboarding
  updateProfile: (profile: Partial<PlayerProfile>) => void;
  updateCharacter: (character: PlayerCharacter) => void;
  completeOnboarding: () => void;
  startAsGuest: (name: string) => void;
  // Gameplay
  recordQuestionResult: (
    question: Question,
    cityId: string,
    levelId: string,
    isCorrect: boolean,
    isFirstAttempt: boolean
  ) => { coinsAwarded: number; isDuplicate: boolean };
  recordDialogueCompleted: (dialogueId: string) => { coinsAwarded: number; isDuplicate: boolean };
  purchaseTranslation: (questionId: string) => { success: boolean; reason?: string };
  recordLevelCompleted: (
    cityId: string,
    levelId: string,
    scorePercent: number,
    perfectFirstTry: boolean
  ) => void;
  recordBossCompleted: (
    cityId: string,
    scorePercent: number
  ) => { passed: boolean; unlockedNextCityId?: string; bonusCoins: number };
  markMistakeMastered: (questionId: string) => void;
  visitFestivalStall: (stallId: string, rewardCoins?: number) => void;
  recordFinalAssessment: (scorePercent: number) => { passed: boolean; certificateId: string };
  completeStudyDay: (dayNumber: number) => void;
  resetAllProgress: () => void;
  exportSaveFile: () => void;
  importSaveFile: (file: File) => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<PlayerProgress>(() => storageService.loadProgress());
  
  // Determine initial screen based on onboarding state
  const getInitialScreen = (): GameScreen => {
    if (progress.profile.onboardingStep >= 5) return 'world-map';
    if (storageService.hasExistingProfile()) return 'world-map';
    return 'welcome';
  };
  
  const [currentScreen, setCurrentScreen] = useState<GameScreen>(getInitialScreen);
  const [activeCityId, setActiveCityId] = useState<string | null>(null);
  const [activeLevelId, setActiveLevelId] = useState<string | null>(null);
  const [activeBossCityId, setActiveBossCityId] = useState<string | null>(null);
  const [isFestivalOpen, setIsFestivalOpen] = useState<boolean>(false);
  const [soundMuted, setSoundMuted] = useState<boolean>(soundService.getIsMuted());

  // Save progress whenever it updates
  useEffect(() => {
    storageService.saveProgress(progress);
  }, [progress]);

  // Update streak if a new day has arrived
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (progress.stats.lastActiveDate !== today) {
      setProgress(prev => {
        const lastDate = new Date(prev.stats.lastActiveDate);
        const currentDate = new Date(today);
        const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        const newStreak = diffDays === 1 ? prev.stats.streak + 1 : (diffDays === 0 ? prev.stats.streak : 1);
        return {
          ...prev,
          stats: {
            ...prev.stats,
            streak: newStreak,
            lastActiveDate: today
          }
        };
      });
    }
  }, [progress.stats.lastActiveDate]);

  const toggleSound = useCallback(() => {
    setSoundMuted(prev => {
      const next = !prev;
      soundService.setMuted(next);
      return next;
    });
  }, []);

  // Profile & Onboarding
  const updateProfile = useCallback((updates: Partial<PlayerProfile>) => {
    setProgress(prev => ({
      ...prev,
      profile: { ...prev.profile, ...updates }
    }));
  }, []);

  const updateCharacter = useCallback((character: PlayerCharacter) => {
    setProgress(prev => ({
      ...prev,
      profile: { ...prev.profile, character }
    }));
  }, []);

  const completeOnboarding = useCallback(() => {
    setProgress(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        onboardingStep: 5,
        tutorialCompleted: true
      }
    }));
    setCurrentScreen('world-map');
  }, []);

  const startAsGuest = useCallback((name: string) => {
    const guestId = `guest_${Date.now().toString(36)}`;
    setProgress(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        id: guestId,
        displayName: name || 'Viajero',
        isGuest: true,
        createdAt: new Date().toISOString(),
        onboardingStep: 2 // Moves to character creator
      }
    }));
  }, []);

  // Record single question attempt with anti-duplication safeguards
  const recordQuestionResult = useCallback((
    question: Question,
    cityId: string,
    levelId: string,
    isCorrect: boolean,
    isFirstAttempt: boolean
  ): { coinsAwarded: number; isDuplicate: boolean } => {
    let coinsAwarded = 0;
    let isDuplicate = false;

    setProgress(prev => {
      let newCoins = prev.stats.coins;
      let newXp = prev.stats.xp;
      const rewardedList = [...prev.rewardedQuestionFirstTries];
      const incorrectMap = { ...prev.incorrectQuestions };

      if (isCorrect) {
        newXp += 15;
        // Check if first-attempt reward was already claimed for this question ID
        if (isFirstAttempt) {
          if (!rewardedList.includes(question.id)) {
            coinsAwarded = REWARD_CONFIG.FIRST_ATTEMPT_CORRECT_COINS;
            newCoins += coinsAwarded;
            rewardedList.push(question.id);
          } else {
            isDuplicate = true;
          }
        }
        // If question was in mistakes list, mark mastered
        if (incorrectMap[question.id]) {
          incorrectMap[question.id] = {
            ...incorrectMap[question.id],
            mastered: true
          };
        }
      } else {
        // Track incorrect attempt for Spaced Review Notebook
        const existing = incorrectMap[question.id];
        incorrectMap[question.id] = {
          questionId: question.id,
          cityId,
          levelId,
          prompt: question.prompt,
          explanation: question.explanation,
          lastFailedAt: new Date().toISOString(),
          failCount: existing ? existing.failCount + 1 : 1,
          mastered: false
        };
      }

      // Check level-up from XP
      const newLevel = Math.floor(newXp / 300) + 1;

      return {
        ...prev,
        stats: {
          ...prev.stats,
          coins: newCoins,
          xp: newXp,
          level: newLevel
        },
        rewardedQuestionFirstTries: rewardedList,
        incorrectQuestions: incorrectMap
      };
    });

    if (coinsAwarded > 0) {
      soundService.playCoinReward();
    }

    return { coinsAwarded, isDuplicate };
  }, []);

  // Record dialogue completed with 250 coins and anti-duplication
  const recordDialogueCompleted = useCallback((dialogueId: string): { coinsAwarded: number; isDuplicate: boolean } => {
    let coinsAwarded = 0;
    let isDuplicate = false;

    setProgress(prev => {
      if (prev.rewardedDialogueIds.includes(dialogueId)) {
        isDuplicate = true;
        return prev;
      }

      coinsAwarded = REWARD_CONFIG.COMPLETED_DIALOGUE_COINS;
      const newCoins = prev.stats.coins + coinsAwarded;
      const newXp = prev.stats.xp + 40;
      const newLevel = Math.floor(newXp / 300) + 1;

      return {
        ...prev,
        stats: {
          ...prev.stats,
          coins: newCoins,
          xp: newXp,
          level: newLevel
        },
        rewardedDialogueIds: [...prev.rewardedDialogueIds, dialogueId]
      };
    });

    if (coinsAwarded > 0) {
      soundService.playCoinReward();
    }

    return { coinsAwarded, isDuplicate };
  }, []);

  // Purchase English translation with balance check and anti-duplication
  const purchaseTranslation = useCallback((questionId: string): { success: boolean; reason?: string } => {
    let success = false;
    let reason: string | undefined;

    setProgress(prev => {
      // Already purchased?
      if (prev.purchasedTranslations.includes(questionId)) {
        success = true;
        return prev; // Already unlocked, no charge
      }

      // Sufficient balance?
      if (prev.stats.coins < REWARD_CONFIG.ENGLISH_TRANSLATION_COST_COINS) {
        reason = `Not enough coins. You need ${REWARD_CONFIG.ENGLISH_TRANSLATION_COST_COINS} coins, but you have ${prev.stats.coins}.`;
        return prev;
      }

      // Deduct coins safely
      success = true;
      const newCoins = prev.stats.coins - REWARD_CONFIG.ENGLISH_TRANSLATION_COST_COINS;

      return {
        ...prev,
        stats: {
          ...prev.stats,
          coins: newCoins
        },
        purchasedTranslations: [...prev.purchasedTranslations, questionId]
      };
    });

    return { success, reason };
  }, []);

  // Record level completed
  const recordLevelCompleted = useCallback((
    cityId: string,
    levelId: string,
    scorePercent: number,
    perfectFirstTry: boolean
  ) => {
    setProgress(prev => {
      const existing = prev.completedLevels[levelId];
      const stars = scorePercent >= 90 ? 3 : scorePercent >= 70 ? 2 : 1;

      const completedLevels = {
        ...prev.completedLevels,
        [levelId]: {
          stars: Math.max(stars, existing ? existing.stars : 0),
          scorePercent: Math.max(scorePercent, existing ? existing.scorePercent : 0),
          firstTryPerfect: Boolean(perfectFirstTry || existing?.firstTryPerfect),
          completedAt: new Date().toISOString()
        }
      };

      const newXp = prev.stats.xp + 50;
      const newLevel = Math.floor(newXp / 300) + 1;

      return {
        ...prev,
        stats: {
          ...prev.stats,
          xp: newXp,
          level: newLevel
        },
        completedLevels
      };
    });
  }, []);

  // Record boss completed, enforce mastery threshold (e.g. 80%), unlock next city
  const recordBossCompleted = useCallback((
    cityId: string,
    scorePercent: number
  ): { passed: boolean; unlockedNextCityId?: string; bonusCoins: number } => {
    const passed = scorePercent >= REWARD_CONFIG.BOSS_MASTERY_THRESHOLD_PERCENT;
    let unlockedNextCityId: string | undefined;
    let bonusCoins = 0;

    setProgress(prev => {
      const completedBosses = {
        ...prev.completedBosses,
        [cityId]: {
          scorePercent,
          passed,
          completedAt: new Date().toISOString()
        }
      };

      const unlockedCityIds = [...prev.unlockedCityIds];
      const rewardedCities = [...prev.rewardedCityCompletionIds];
      let newCoins = prev.stats.coins;
      let newXp = prev.stats.xp;

      if (passed) {
        // Unlock next city if exists
        const nextCity = getNextCity(cityId);
        if (nextCity && !unlockedCityIds.includes(nextCity.id)) {
          unlockedCityIds.push(nextCity.id);
          unlockedNextCityId = nextCity.id;
        }

        // City completion bonus (500 coins)
        if (!rewardedCities.includes(cityId)) {
          bonusCoins = REWARD_CONFIG.CITY_COMPLETION_BONUS_COINS;
          newCoins += bonusCoins;
          rewardedCities.push(cityId);
        }

        newXp += 200;
      }

      // Check achievements
      const achievements = { ...prev.achievements };
      if (passed) {
        achievements[`boss_${cityId}`] = new Date().toISOString();
        if (cityId === 'madrid') achievements.first_boss = new Date().toISOString();
        if (cityId === 'salamanca') achievements.module1_graduate = new Date().toISOString();
        if (cityId === 'granada') achievements.module2_graduate = new Date().toISOString();
        if (cityId === 'cadiz') achievements.module3_graduate = new Date().toISOString();
        if (cityId === 'zaragoza') achievements.module4_graduate = new Date().toISOString();
        if (cityId === 'santiago') achievements.camino_conqueror = new Date().toISOString();
      }

      const newLevel = Math.floor(newXp / 300) + 1;

      return {
        ...prev,
        stats: {
          ...prev.stats,
          coins: newCoins,
          xp: newXp,
          level: newLevel
        },
        unlockedCityIds,
        completedBosses,
        rewardedCityCompletionIds: rewardedCities,
        achievements
      };
    });

    if (passed) {
      soundService.playVictoryFanfare();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore if confetti unavailable in environment
      }
    }

    return { passed, unlockedNextCityId, bonusCoins };
  }, []);

  // Mark mistake as mastered in spaced review notebook
  const markMistakeMastered = useCallback((questionId: string) => {
    setProgress(prev => {
      const incorrectMap = { ...prev.incorrectQuestions };
      if (incorrectMap[questionId]) {
        incorrectMap[questionId] = {
          ...incorrectMap[questionId],
          mastered: true
        };
      }
      return {
        ...prev,
        stats: {
          ...prev.stats,
          xp: prev.stats.xp + 25
        },
        incorrectQuestions: incorrectMap
      };
    });
    soundService.playCorrect();
  }, []);

  // Visit festival stall
  const visitFestivalStall = useCallback((stallId: string, rewardCoins: number = 200) => {
    setProgress(prev => {
      if (prev.festivalVisitedStalls.includes(stallId)) return prev;
      return {
        ...prev,
        stats: {
          ...prev.stats,
          coins: prev.stats.coins + rewardCoins,
          xp: prev.stats.xp + 50
        },
        festivalVisitedStalls: [...prev.festivalVisitedStalls, stallId]
      };
    });
    soundService.playCoinReward();
  }, []);

  // Record cumulative final assessment
  const recordFinalAssessment = useCallback((scorePercent: number): { passed: boolean; certificateId: string } => {
    const passed = scorePercent >= 70;
    const certificateId = `AE-A1-${Date.now().toString(36).toUpperCase()}`;

    setProgress(prev => {
      const achievements = { ...prev.achievements };
      if (passed) {
        achievements.fiesta_legend = new Date().toISOString();
      }
      return {
        ...prev,
        stats: {
          ...prev.stats,
          xp: prev.stats.xp + (passed ? 500 : 100),
          coins: prev.stats.coins + (passed ? 1000 : 100)
        },
        finalAssessmentCompleted: {
          scorePercent,
          passed,
          completedAt: new Date().toISOString(),
          certificateId
        },
        achievements
      };
    });

    if (passed) {
      soundService.playVictoryFanfare();
      try {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 }
        });
      } catch {
        // ignore
      }
    }

    return { passed, certificateId };
  }, []);

  // Mark study schedule day as completed
  const completeStudyDay = useCallback((dayNumber: number) => {
    setProgress(prev => {
      if (prev.completedStudyDays.includes(dayNumber)) return prev;
      return {
        ...prev,
        completedStudyDays: [...prev.completedStudyDays, dayNumber],
        stats: {
          ...prev.stats,
          coins: prev.stats.coins + 50,
          xp: prev.stats.xp + 30
        }
      };
    });
  }, []);

  // Reset all progress
  const resetAllProgress = useCallback(() => {
    const fresh = storageService.resetProgress();
    setProgress(fresh);
    setCurrentScreen('welcome');
    setActiveCityId(null);
    setActiveLevelId(null);
    setActiveBossCityId(null);
    setIsFestivalOpen(false);
  }, []);

  // Export progress
  const exportSaveFile = useCallback(() => {
    storageService.exportProgress(progress);
  }, [progress]);

  // Import progress
  const importSaveFile = useCallback(async (file: File) => {
    const loaded = await storageService.importProgress(file);
    setProgress(loaded);
  }, []);

  return (
    <GameContext.Provider
      value={{
        progress,
        currentScreen,
        activeCityId,
        activeLevelId,
        activeBossCityId,
        isFestivalOpen,
        soundMuted,
        setCurrentScreen,
        setActiveCityId,
        setActiveLevelId,
        setActiveBossCityId,
        setIsFestivalOpen,
        toggleSound,
        updateProfile,
        updateCharacter,
        completeOnboarding,
        startAsGuest,
        recordQuestionResult,
        recordDialogueCompleted,
        purchaseTranslation,
        recordLevelCompleted,
        recordBossCompleted,
        markMistakeMastered,
        visitFestivalStall,
        recordFinalAssessment,
        completeStudyDay,
        resetAllProgress,
        exportSaveFile,
        importSaveFile
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
