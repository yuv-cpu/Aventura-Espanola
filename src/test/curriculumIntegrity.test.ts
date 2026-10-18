import { describe, it, expect } from 'vitest';
import { ALL_CITIES, getAllQuestions } from '../data/citiesData';
import { SYLLABUS_MODULES } from '../data/syllabusData';
import { CUMULATIVE_FINAL_ASSESSMENT, FESTIVAL_STALLS } from '../data/festivalData';

describe('Curriculum Integrity and Answer Key Validation', () => {
  const allQuestions = getAllQuestions();

  it('contains over 150 unique high-yield questions across the 15 cities and bosses', () => {
    expect(allQuestions.length).toBeGreaterThanOrEqual(150);
  });

  it('validates that every question has non-empty prompts, explanations, and hints', () => {
    allQuestions.forEach(q => {
      expect(q.id).toBeTruthy();
      expect(q.prompt).toBeTruthy();
      expect(q.explanation).toBeTruthy();
      expect(q.hints.length).toBeGreaterThanOrEqual(1);
      expect(q.syllabusRef).toBeTruthy();

      // If multiple choice, ensure options exist and correct answer is among options
      if (q.type === 'multiple-choice') {
        expect(q.options).toBeDefined();
        expect(q.options!.length).toBeGreaterThanOrEqual(2);
        if (typeof q.correctAnswer === 'string') {
          expect(q.options).toContain(q.correctAnswer);
        }
      }

      // If word-order, ensure sentencePieces exist
      if (q.type === 'word-order') {
        expect(q.sentencePieces).toBeDefined();
        expect(q.sentencePieces!.length).toBeGreaterThanOrEqual(3);
        expect(q.correctAnswer).toBeTruthy();
      }

      // If dialogue, ensure dialogue tree exists with at least one correct choice
      if (q.type === 'dialogue') {
        expect(q.dialogue).toBeDefined();
        expect(q.dialogue!.npcName).toBeTruthy();
        expect(q.dialogue!.choices.length).toBeGreaterThanOrEqual(2);
        const hasCorrect = q.dialogue!.choices.some(c => c.isCorrect);
        expect(hasCorrect).toBe(true);
      }
    });
  });

  it('validates that all 30 cumulative final assessment questions have valid answers', () => {
    expect(CUMULATIVE_FINAL_ASSESSMENT.length).toBe(30);

    CUMULATIVE_FINAL_ASSESSMENT.forEach((q, idx) => {
      expect(q.id).toBe(`final-${idx + 1}`);
      expect(q.prompt).toBeTruthy();
      expect(q.explanation).toBeTruthy();
      if (q.type === 'multiple-choice') {
        expect(q.options).toContain(q.correctAnswer);
      }
    });
  });

  it('validates festival mini-quizzes and stall rewards', () => {
    FESTIVAL_STALLS.forEach(stall => {
      expect(stall.id).toBeTruthy();
      expect(stall.miniQuiz).toBeDefined();
      expect(stall.rewardCoins).toBe(200);
      expect(stall.miniQuiz.prompt).toBeTruthy();
      expect(stall.miniQuiz.explanation).toBeTruthy();
    });
  });
});
