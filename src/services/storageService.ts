import { PlayerProgress, PlayerProfile, PlayerCharacter } from '../types';

const STORAGE_KEY = 'aventura_espanola_progress_v2';
const PROFILE_KEY = 'aventura_espanola_profile_v1';

// In-memory fallback for test and non-browser environments
const inMemoryStore: Record<string, string> = {};

function getStorageItem(key: string): string | null {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
  } catch {
    // fallback
  }
  return inMemoryStore[key] || null;
}

function setStorageItem(key: string, value: string): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    }
  } catch {
    // fallback
  }
  inMemoryStore[key] = value;
}

function removeStorageItem(key: string): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }
  } catch {
    // fallback
  }
  delete inMemoryStore[key];
}

export const DEFAULT_CHARACTER: PlayerCharacter = {
  name: 'Alex',
  avatarStyle: 'adventurer',
  skinTone: 'medium',
  hairStyle: 'short',
  hairColor: 'brown',
  outfit: 'traveler',
  accessory: 'backpack'
};

export const DEFAULT_PROFILE: PlayerProfile = {
  id: '',
  displayName: '',
  character: DEFAULT_CHARACTER,
  createdAt: '',
  isGuest: true,
  tutorialCompleted: false,
  onboardingStep: 0
};

export const INITIAL_PROGRESS: PlayerProgress = {
  stats: {
    coins: 250, // Starting balance
    xp: 0,
    level: 1,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    lives: 5,
    maxLives: 5
  },
  profile: DEFAULT_PROFILE,
  unlockedCityIds: ['madrid'],
  completedLevels: {},
  completedBosses: {},
  purchasedTranslations: [],
  rewardedQuestionFirstTries: [],
  rewardedDialogueIds: [],
  rewardedCityCompletionIds: [],
  incorrectQuestions: {},
  achievements: {
    first_steps: new Date().toISOString()
  },
  completedStudyDays: [1],
  festivalVisitedStalls: [],
  unlockedCosmetics: []
};

export const storageService = {
  loadProgress(): PlayerProgress {
    try {
      const data = getStorageItem(STORAGE_KEY);
      if (!data) {
        // Check for v1 data migration
        const v1Data = getStorageItem('aventura_espanola_progress_v1');
        if (v1Data) {
          const parsed = JSON.parse(v1Data);
          // Migrate v1 → v2 by adding profile
          const migrated: PlayerProgress = {
            ...INITIAL_PROGRESS,
            ...parsed,
            stats: {
              ...INITIAL_PROGRESS.stats,
              ...(parsed.stats || {}),
              lives: parsed.stats?.lives ?? 5,
              maxLives: parsed.stats?.maxLives ?? 5
            },
            profile: {
              ...DEFAULT_PROFILE,
              ...(parsed.profile || {}),
              onboardingStep: 5, // Mark onboarding as done for existing players
              tutorialCompleted: true,
              createdAt: parsed.stats?.lastActiveDate || new Date().toISOString(),
              character: parsed.profile?.character || DEFAULT_CHARACTER
            },
            unlockedCosmetics: parsed.unlockedCosmetics || []
          };
          this.saveProgress(migrated);
          return migrated;
        }
        return INITIAL_PROGRESS;
      }
      const parsed = JSON.parse(data);
      // Ensure all fields exist (safe merge)
      return {
        ...INITIAL_PROGRESS,
        ...parsed,
        stats: {
          ...INITIAL_PROGRESS.stats,
          ...(parsed.stats || {}),
          lives: parsed.stats?.lives ?? 5,
          maxLives: parsed.stats?.maxLives ?? 5
        },
        profile: {
          ...DEFAULT_PROFILE,
          ...(parsed.profile || {}),
          character: {
            ...DEFAULT_CHARACTER,
            ...(parsed.profile?.character || {})
          }
        },
        unlockedCityIds: parsed.unlockedCityIds?.length ? parsed.unlockedCityIds : ['madrid'],
        completedLevels: parsed.completedLevels || {},
        completedBosses: parsed.completedBosses || {},
        purchasedTranslations: parsed.purchasedTranslations || [],
        rewardedQuestionFirstTries: parsed.rewardedQuestionFirstTries || [],
        rewardedDialogueIds: parsed.rewardedDialogueIds || [],
        rewardedCityCompletionIds: parsed.rewardedCityCompletionIds || [],
        incorrectQuestions: parsed.incorrectQuestions || {},
        achievements: parsed.achievements || {},
        completedStudyDays: parsed.completedStudyDays || [1],
        festivalVisitedStalls: parsed.festivalVisitedStalls || [],
        unlockedCosmetics: parsed.unlockedCosmetics || []
      };
    } catch (err) {
      console.warn('Failed to load player progress from localStorage:', err);
      return INITIAL_PROGRESS;
    }
  },

  saveProgress(progress: PlayerProgress): void {
    try {
      setStorageItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (err) {
      console.error('Failed to save player progress:', err);
    }
  },

  hasExistingProfile(): boolean {
    return getStorageItem(STORAGE_KEY) !== null || 
           getStorageItem('aventura_espanola_progress_v1') !== null;
  },

  resetProgress(): PlayerProgress {
    try {
      removeStorageItem(STORAGE_KEY);
      removeStorageItem('aventura_espanola_progress_v1');
    } catch (err) {
      console.error('Failed to reset player progress:', err);
    }
    return INITIAL_PROGRESS;
  },

  exportProgress(progress: PlayerProgress): void {
    const jsonStr = JSON.stringify(progress, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aventura_espanola_progreso_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  async importProgress(file: File): Promise<PlayerProgress> {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (!parsed || !parsed.stats || typeof parsed.stats.coins !== 'number') {
      throw new Error('Archivo de progreso no válido.');
    }
    const validated: PlayerProgress = {
      ...INITIAL_PROGRESS,
      ...parsed,
      profile: {
        ...DEFAULT_PROFILE,
        ...(parsed.profile || {}),
        character: {
          ...DEFAULT_CHARACTER,
          ...(parsed.profile?.character || {})
        }
      }
    };
    this.saveProgress(validated);
    return validated;
  }
};
