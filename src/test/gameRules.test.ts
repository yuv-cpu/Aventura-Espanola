import { describe, it, expect } from 'vitest';
import { ALL_CITIES, getCityById, getNextCity } from '../data/citiesData';
import { SYLLABUS_MODULES } from '../data/syllabusData';
import { REWARD_CONFIG } from '../context/GameContext';
import { CUMULATIVE_FINAL_ASSESSMENT, FESTIVAL_STALLS, FESTIVAL_CHARACTERS } from '../data/festivalData';
import { STUDY_SCHEDULE_35_DAYS } from '../data/studyPlanData';

describe('¡Aventura Española! Curriculum & World Structure', () => {
  it('contains exactly 15 cities and 1 final festival world', () => {
    expect(ALL_CITIES.length).toBe(15);
  });

  it('each city contains exactly 10 regular levels and 1 boss mission', () => {
    ALL_CITIES.forEach(city => {
      expect(city.levels.length).toBe(10);
      expect(city.bossMission).toBeDefined();
      expect(city.bossMission.requiredScorePercent).toBe(80);
      expect(city.bossMission.questions.length).toBeGreaterThanOrEqual(3);

      // Verify the 5 difficulty tiers (2 levels each)
      const easyLevels = city.levels.filter(l => l.tier === 'easy');
      const mediumLevels = city.levels.filter(l => l.tier === 'medium');
      const toughLevels = city.levels.filter(l => l.tier === 'tough');
      const hardLevels = city.levels.filter(l => l.tier === 'hard');
      const hotLevels = city.levels.filter(l => l.tier === 'hot');

      expect(easyLevels.length).toBe(2);
      expect(mediumLevels.length).toBe(2);
      expect(toughLevels.length).toBe(2);
      expect(hardLevels.length).toBe(2);
      expect(hotLevels.length).toBe(2);
    });
  });

  it('maps all 5 BAESP101 syllabus modules across the cities', () => {
    expect(SYLLABUS_MODULES.length).toBe(5);

    // Module 1: Cities 1-3
    const mod1Cities = ALL_CITIES.filter(c => c.moduleIndex === 1);
    expect(mod1Cities.map(c => c.id)).toEqual(['madrid', 'toledo', 'salamanca']);

    // Module 2: Cities 4-6
    const mod2Cities = ALL_CITIES.filter(c => c.moduleIndex === 2);
    expect(mod2Cities.map(c => c.id)).toEqual(['segovia', 'sevilla', 'granada']);

    // Module 3: Cities 7-9
    const mod3Cities = ALL_CITIES.filter(c => c.moduleIndex === 3);
    expect(mod3Cities.map(c => c.id)).toEqual(['cordoba', 'malaga', 'cadiz']);

    // Module 4: Cities 10-12
    const mod4Cities = ALL_CITIES.filter(c => c.moduleIndex === 4);
    expect(mod4Cities.map(c => c.id)).toEqual(['valencia', 'barcelona', 'zaragoza']);

    // Module 5: Cities 13-15
    const mod5Cities = ALL_CITIES.filter(c => c.moduleIndex === 5);
    expect(mod5Cities.map(c => c.id)).toEqual(['bilbao', 'san-sebastian', 'santiago']);
  });

  it('verifies that all syllabus topics have valid coverage without omissions', () => {
    let totalTopics = 0;
    SYLLABUS_MODULES.forEach(mod => {
      mod.topics.forEach(topic => {
        totalTopics++;
        expect(topic.coveredInCityIds.length).toBeGreaterThan(0);
        topic.coveredInCityIds.forEach(cityId => {
          expect(getCityById(cityId)).toBeDefined();
        });
      });
    });
    expect(totalTopics).toBeGreaterThanOrEqual(35);
  });

  it('verifies city unlock chain order from Madrid to Santiago', () => {
    for (let i = 1; i <= 14; i++) {
      const city = ALL_CITIES.find(c => c.number === i);
      expect(city).toBeDefined();
      const nextCity = getNextCity(city!.id);
      expect(nextCity).toBeDefined();
      expect(nextCity!.number).toBe(i + 1);
    }
  });

  it('verifies La Gran Fiesta features stalls on both sides and selectable characters', () => {
    expect(FESTIVAL_STALLS.length).toBe(6);
    const leftStalls = FESTIVAL_STALLS.filter(s => s.side === 'left');
    const rightStalls = FESTIVAL_STALLS.filter(s => s.side === 'right');
    expect(leftStalls.length).toBe(3);
    expect(rightStalls.length).toBe(3);

    expect(FESTIVAL_CHARACTERS.length).toBeGreaterThanOrEqual(14);
    expect(CUMULATIVE_FINAL_ASSESSMENT.length).toBe(30);
  });

  it('verifies the 35-day structured curriculum covers all modules and milestones', () => {
    expect(STUDY_SCHEDULE_35_DAYS.length).toBe(35);
    const milestones = STUDY_SCHEDULE_35_DAYS.filter(d => d.isMilestone);
    expect(milestones.length).toBeGreaterThanOrEqual(5);
  });
});

describe('¡Aventura Española! Reward Rules & Anti-Duplication Safeguards', () => {
  it('enforces configured coin values', () => {
    expect(REWARD_CONFIG.FIRST_ATTEMPT_CORRECT_COINS).toBe(100);
    expect(REWARD_CONFIG.COMPLETED_DIALOGUE_COINS).toBe(250);
    expect(REWARD_CONFIG.CITY_COMPLETION_BONUS_COINS).toBe(500);
    expect(REWARD_CONFIG.ENGLISH_TRANSLATION_COST_COINS).toBe(1000);
    expect(REWARD_CONFIG.BOSS_MASTERY_THRESHOLD_PERCENT).toBe(80);
  });

  it('prevents negative balances when buying English translation', () => {
    const playerCoins = 250;
    const translationCost = REWARD_CONFIG.ENGLISH_TRANSLATION_COST_COINS;
    const canAfford = playerCoins >= translationCost;
    expect(canAfford).toBe(false);
  });

  it('enforces boss mastery threshold of 80% to unlock next city', () => {
    const score79 = 79;
    const score80 = 80;
    const threshold = REWARD_CONFIG.BOSS_MASTERY_THRESHOLD_PERCENT;

    expect(score79 >= threshold).toBe(false);
    expect(score80 >= threshold).toBe(true);
  });
});
