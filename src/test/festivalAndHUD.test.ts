import { describe, it, expect } from 'vitest';
import { FESTIVAL_STALLS, FESTIVAL_CHARACTERS, CUMULATIVE_FINAL_ASSESSMENT } from '../data/festivalData';

describe('Festival Plaza & NPC Interactive World Tests', () => {
  it('configures exactly 6 festival stalls with 3 on left and 3 on right', () => {
    expect(FESTIVAL_STALLS.length).toBe(6);
    const leftStalls = FESTIVAL_STALLS.filter(s => s.side === 'left');
    const rightStalls = FESTIVAL_STALLS.filter(s => s.side === 'right');
    expect(leftStalls.length).toBe(3);
    expect(rightStalls.length).toBe(3);
  });

  it('ensures all 6 stalls have visual canopy styling, icons, and valid quizzes', () => {
    FESTIVAL_STALLS.forEach(stall => {
      expect(stall.id).toBeTruthy();
      expect(stall.title).toBeTruthy();
      expect(stall.spanishTitle).toBeTruthy();
      expect(stall.vendorName).toBeTruthy();
      expect(stall.canopyColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(stall.icon).toBeTruthy();
      expect(stall.rewardCoins).toBeGreaterThanOrEqual(100);

      // Mini quiz check
      expect(stall.miniQuiz).toBeDefined();
      expect(stall.miniQuiz.prompt).toBeTruthy();
      expect(stall.miniQuiz.explanation).toBeTruthy();

      if (stall.miniQuiz.options) {
        if (Array.isArray(stall.miniQuiz.correctAnswer)) {
          expect(stall.miniQuiz.options).toEqual(
            expect.arrayContaining(stall.miniQuiz.correctAnswer)
          );
        } else {
          expect(stall.miniQuiz.options).toContain(stall.miniQuiz.correctAnswer);
        }
      }
    });
  });

  it('configures all 14 festival characters with plaza coordinates and interactive quizzes', () => {
    expect(FESTIVAL_CHARACTERS.length).toBe(14);

    FESTIVAL_CHARACTERS.forEach(char => {
      expect(char.id).toBeTruthy();
      expect(char.name).toBeTruthy();
      expect(char.originCity).toBeTruthy();
      expect(char.role).toBeTruthy();
      expect(char.avatar).toBeTruthy();
      expect(char.dialogue).toBeTruthy();
      expect(char.trivia).toBeTruthy();

      // Coordinates for plaza positioning
      expect(char.xPercent).toBeDefined();
      expect(char.xPercent).toBeGreaterThanOrEqual(0);
      expect(char.xPercent).toBeLessThanOrEqual(100);

      expect(char.yPercent).toBeDefined();
      expect(char.yPercent).toBeGreaterThanOrEqual(0);
      expect(char.yPercent).toBeLessThanOrEqual(100);

      // Color badge
      expect(char.avatarColor).toMatch(/^#[0-9A-Fa-f]{6}$/);

      // Interactive conversation quiz
      expect(char.interactiveQuestion).toBeDefined();
      const q = char.interactiveQuestion!;
      expect(q.prompt).toBeTruthy();
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.options).toContain(q.correctAnswer);
      expect(q.reactionCorrect).toBeTruthy();
      expect(q.reactionIncorrect).toBeTruthy();
      expect(q.explanation).toBeTruthy();
    });
  });

  it('verifies the cumulative final assessment has 30 questions covering all 5 syllabus modules', () => {
    expect(CUMULATIVE_FINAL_ASSESSMENT.length).toBe(30);

    const modulesFound = new Set<string>();
    CUMULATIVE_FINAL_ASSESSMENT.forEach(q => {
      expect(q.prompt).toBeTruthy();
      expect(q.correctAnswer).toBeTruthy();
      if (q.options) {
        expect(q.options).toContain(q.correctAnswer);
      }
      expect(q.explanation).toBeTruthy();
      if (q.syllabusRef) {
        const mod = q.syllabusRef.split('-')[0];
        modulesFound.add(mod);
      }
    });

    // Must cover M1, M2, M3, M4, M5
    expect(modulesFound).toContain('M1');
    expect(modulesFound).toContain('M2');
    expect(modulesFound).toContain('M3');
    expect(modulesFound).toContain('M4');
    expect(modulesFound).toContain('M5');
  });
});
