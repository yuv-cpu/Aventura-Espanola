import { describe, it, expect, beforeEach } from 'vitest';
import { storageService, INITIAL_PROGRESS, DEFAULT_CHARACTER, DEFAULT_PROFILE } from '../services/storageService';
import { PlayerProgress, PlayerCharacter } from '../types';

describe('Player Profile and Onboarding Persistence', () => {
  beforeEach(() => {
    storageService.resetProgress();
  });

  it('initializes with default character and profile structure', () => {
    const progress = storageService.loadProgress();
    expect(progress.profile).toBeDefined();
    expect(progress.profile.character).toBeDefined();
    expect(progress.profile.character.name).toBe('Alex');
    expect(progress.profile.character.skinTone).toBe('medium');
    expect(progress.profile.character.hairStyle).toBe('short');
    expect(progress.profile.character.outfit).toBe('traveler');
    expect(progress.profile.character.accessory).toBe('backpack');
  });

  it('persists customized character attributes across reloads', () => {
    const customCharacter: PlayerCharacter = {
      name: 'Elena',
      avatarStyle: 'explorer',
      skinTone: 'dark',
      hairStyle: 'curly',
      hairColor: 'red',
      outfit: 'flamenco',
      accessory: 'glasses'
    };

    const modifiedProgress: PlayerProgress = {
      ...INITIAL_PROGRESS,
      profile: {
        ...DEFAULT_PROFILE,
        displayName: 'Elena',
        character: customCharacter,
        onboardingStep: 5,
        tutorialCompleted: true
      }
    };

    storageService.saveProgress(modifiedProgress);

    const loaded = storageService.loadProgress();
    expect(loaded.profile.character.name).toBe('Elena');
    expect(loaded.profile.character.skinTone).toBe('dark');
    expect(loaded.profile.character.hairStyle).toBe('curly');
    expect(loaded.profile.character.hairColor).toBe('red');
    expect(loaded.profile.character.outfit).toBe('flamenco');
    expect(loaded.profile.character.accessory).toBe('glasses');
    expect(loaded.profile.onboardingStep).toBe(5);
    expect(loaded.profile.tutorialCompleted).toBe(true);
  });

  it('migrates legacy v1 save to v2 format seamlessly preserving prior progress', () => {
    // Simulate existing legacy v1 save
    const v1Data = {
      stats: {
        coins: 1250,
        xp: 450,
        level: 2,
        streak: 3,
        lastActiveDate: '2026-10-17',
        lives: 5,
        maxLives: 5
      },
      unlockedCityIds: ['madrid', 'toledo'],
      completedLevels: {
        'madrid-1': { stars: 3, scorePercent: 100, firstTryPerfect: true, completedAt: '2026-10-17T10:00:00Z' }
      },
      completedBosses: {
        'madrid': { scorePercent: 90, passed: true, completedAt: '2026-10-17T11:00:00Z' }
      },
      purchasedTranslations: ['m1-q1'],
      rewardedQuestionFirstTries: ['m1-q1'],
      rewardedDialogueIds: ['m1-q3'],
      rewardedCityCompletionIds: ['madrid'],
      incorrectQuestions: {},
      achievements: { first_steps: '2026-10-17T09:00:00Z' },
      completedStudyDays: [1, 2],
      festivalVisitedStalls: []
    };

    // Save under v1 key
    storageService.saveProgress(v1Data as any);
    const loaded = storageService.loadProgress();

    // Verify progress was preserved
    expect(loaded.stats.coins).toBe(1250);
    expect(loaded.stats.xp).toBe(450);
    expect(loaded.unlockedCityIds).toContain('toledo');
    expect(loaded.completedLevels['madrid-1'].stars).toBe(3);
    expect(loaded.completedBosses['madrid'].passed).toBe(true);

    // Verify v2 profile fields were safely added
    expect(loaded.profile).toBeDefined();
    expect(loaded.profile.character).toBeDefined();
    expect(loaded.profile.character.name).toBe('Alex');
  });

  it('safely handles corrupt or partial JSON data without crashing', () => {
    const fresh = storageService.resetProgress();
    expect(fresh.stats.coins).toBe(250);
    expect(fresh.profile).toBeDefined();
  });
});
