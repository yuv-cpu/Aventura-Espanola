import { City, Level, Question } from '../types';
import { MODULE1_CITIES } from './cities/module1Cities';
import { MODULE2_CITIES } from './cities/module2Cities';
import { MODULE3_CITIES } from './cities/module3Cities';
import { MODULE4_CITIES } from './cities/module4Cities';
import { MODULE5_CITIES } from './cities/module5Cities';

export const ALL_CITIES: City[] = [
  ...MODULE1_CITIES,
  ...MODULE2_CITIES,
  ...MODULE3_CITIES,
  ...MODULE4_CITIES,
  ...MODULE5_CITIES,
];

export function getCityById(cityId: string): City | undefined {
  return ALL_CITIES.find(c => c.id === cityId);
}

export function getCityByNumber(number: number): City | undefined {
  return ALL_CITIES.find(c => c.number === number);
}

export function getLevelById(cityId: string, levelId: string): Level | undefined {
  const city = getCityById(cityId);
  if (!city) return undefined;
  return city.levels.find(l => l.id === levelId);
}

export function getNextCity(currentCityId: string): City | undefined {
  const currentCity = getCityById(currentCityId);
  if (!currentCity) return undefined;
  return ALL_CITIES.find(c => c.number === currentCity.number + 1);
}

export function getAllQuestions(): Question[] {
  const questions: Question[] = [];
  for (const city of ALL_CITIES) {
    for (const level of city.levels) {
      questions.push(...level.questions);
    }
    if (city.bossMission) {
      questions.push(...city.bossMission.questions);
    }
  }
  return questions;
}

export function getQuestionById(questionId: string): Question | undefined {
  for (const city of ALL_CITIES) {
    for (const level of city.levels) {
      const q = level.questions.find(item => item.id === questionId);
      if (q) return q;
    }
    if (city.bossMission) {
      const bq = city.bossMission.questions.find(item => item.id === questionId);
      if (bq) return bq;
    }
  }
  return undefined;
}
