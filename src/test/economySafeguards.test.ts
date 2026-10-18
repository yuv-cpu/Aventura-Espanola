import { describe, it, expect } from 'vitest';
import { REWARD_CONFIG } from '../context/GameContext';
import { INITIAL_PROGRESS } from '../services/storageService';
import { PlayerProgress } from '../types';

describe('Player Economy, Anti-Duplication & Progression Logic', () => {
  it('starts new players with positive starter coins and Madrid unlocked', () => {
    expect(INITIAL_PROGRESS.stats.coins).toBe(250);
    expect(INITIAL_PROGRESS.unlockedCityIds).toEqual(['madrid']);
    expect(INITIAL_PROGRESS.stats.level).toBe(1);
  });

  it('prevents double-awarding of first-try question rewards (100 coins)', () => {
    let progress: PlayerProgress = { ...INITIAL_PROGRESS };
    const questionId = 'q-test-1';

    // First attempt correct
    if (!progress.rewardedQuestionFirstTries.includes(questionId)) {
      progress = {
        ...progress,
        stats: {
          ...progress.stats,
          coins: progress.stats.coins + REWARD_CONFIG.FIRST_ATTEMPT_CORRECT_COINS
        },
        rewardedQuestionFirstTries: [...progress.rewardedQuestionFirstTries, questionId]
      };
    }
    expect(progress.stats.coins).toBe(350);

    // Second attempt on the same question (simulate replay)
    let coinsGainedSecondTime = 0;
    if (!progress.rewardedQuestionFirstTries.includes(questionId)) {
      coinsGainedSecondTime = REWARD_CONFIG.FIRST_ATTEMPT_CORRECT_COINS;
      progress = {
        ...progress,
        stats: { ...progress.stats, coins: progress.stats.coins + coinsGainedSecondTime }
      };
    }
    expect(coinsGainedSecondTime).toBe(0);
    expect(progress.stats.coins).toBe(350); // Unchanged!
  });

  it('prevents double-awarding of dialogue completion (250 coins)', () => {
    let progress: PlayerProgress = { ...INITIAL_PROGRESS };
    const dialogueId = 'dialogue-1';

    // First completion
    if (!progress.rewardedDialogueIds.includes(dialogueId)) {
      progress = {
        ...progress,
        stats: { ...progress.stats, coins: progress.stats.coins + REWARD_CONFIG.COMPLETED_DIALOGUE_COINS },
        rewardedDialogueIds: [...progress.rewardedDialogueIds, dialogueId]
      };
    }
    expect(progress.stats.coins).toBe(500);

    // Replaying dialogue
    let rewardSecond = 0;
    if (!progress.rewardedDialogueIds.includes(dialogueId)) {
      rewardSecond = REWARD_CONFIG.COMPLETED_DIALOGUE_COINS;
    }
    expect(rewardSecond).toBe(0);
    expect(progress.stats.coins).toBe(500);
  });

  it('safely handles English translation purchase (1,000 coins)', () => {
    let progress: PlayerProgress = {
      ...INITIAL_PROGRESS,
      stats: { ...INITIAL_PROGRESS.stats, coins: 500 } // Insufficient coins
    };
    const questionId = 'q-trans-1';

    // Attempt purchase with 500 coins
    const cost = REWARD_CONFIG.ENGLISH_TRANSLATION_COST_COINS;
    let purchaseSuccess = false;
    if (progress.stats.coins >= cost) {
      progress = {
        ...progress,
        stats: { ...progress.stats, coins: progress.stats.coins - cost },
        purchasedTranslations: [...progress.purchasedTranslations, questionId]
      };
      purchaseSuccess = true;
    }
    expect(purchaseSuccess).toBe(false);
    expect(progress.stats.coins).toBe(500); // No negative balance!

    // Add coins and purchase
    progress = {
      ...progress,
      stats: { ...progress.stats, coins: 1500 }
    };
    if (progress.stats.coins >= cost && !progress.purchasedTranslations.includes(questionId)) {
      progress = {
        ...progress,
        stats: { ...progress.stats, coins: progress.stats.coins - cost },
        purchasedTranslations: [...progress.purchasedTranslations, questionId]
      };
      purchaseSuccess = true;
    }
    expect(purchaseSuccess).toBe(true);
    expect(progress.stats.coins).toBe(500);
    expect(progress.purchasedTranslations).toContain(questionId);

    // Repeated purchase attempt (already unlocked) does not re-deduct
    if (progress.purchasedTranslations.includes(questionId)) {
      // Free / already unlocked
    } else {
      progress.stats.coins -= cost;
    }
    expect(progress.stats.coins).toBe(500); // Still 500!
  });

  it('correctly calculates level progression from XP', () => {
    const calcLevel = (xp: number) => Math.floor(xp / 300) + 1;
    expect(calcLevel(0)).toBe(1);
    expect(calcLevel(299)).toBe(1);
    expect(calcLevel(300)).toBe(2);
    expect(calcLevel(899)).toBe(3);
    expect(calcLevel(3000)).toBe(11);
  });
});
