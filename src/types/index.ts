export type DifficultyTier = 'easy' | 'medium' | 'tough' | 'hard' | 'hot';

export type QuestionType = 'multiple-choice' | 'fill-blank' | 'word-order' | 'dialogue';

export type GameScreen = 
  | 'welcome' 
  | 'auth' 
  | 'profile' 
  | 'character-creator' 
  | 'tutorial' 
  | 'world-map' 
  | 'city' 
  | 'level' 
  | 'boss' 
  | 'festival'
  | 'city-unlock';

export type AvatarStyle = 'adventurer' | 'explorer' | 'scholar' | 'artist';
export type SkinTone = 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark';
export type HairStyle = 'short' | 'medium' | 'long' | 'curly' | 'ponytail' | 'bun';
export type HairColor = 'black' | 'brown' | 'blonde' | 'red' | 'gray';
export type OutfitStyle = 'casual' | 'traveler' | 'flamenco' | 'sporty' | 'elegant';
export type AccessoryType = 'none' | 'glasses' | 'hat' | 'scarf' | 'backpack' | 'camera';

export interface PlayerCharacter {
  name: string;
  avatarStyle: AvatarStyle;
  skinTone: SkinTone;
  hairStyle: HairStyle;
  hairColor: HairColor;
  outfit: OutfitStyle;
  accessory: AccessoryType;
}

export interface PlayerProfile {
  id: string;
  displayName: string;
  character: PlayerCharacter;
  createdAt: string;
  isGuest: boolean;
  tutorialCompleted: boolean;
  onboardingStep: number; // 0=welcome, 1=auth, 2=profile, 3=character, 4=tutorial, 5=done
}

export interface DialogueChoice {
  id: string;
  text: string;
  englishHint?: string;
  isCorrect: boolean;
  npcResponse: string;
  explanation: string;
}

export interface DialogueNode {
  npcName: string;
  npcRole: string;
  prompt: string;
  englishPrompt?: string;
  choices: DialogueChoice[];
}

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  englishPrompt?: string;
  audioText?: string;
  options?: string[];
  correctAnswer: string | string[]; // Single string or array of acceptable answers
  explanation: string;
  hints: string[];
  syllabusRef: string; // e.g. "M1.Alphabet", "M2.SerVsEstar"
  difficulty: DifficultyTier;
  sentencePieces?: string[]; // For word-order questions
  dialogue?: DialogueNode; // For branching dialogue questions
}

export interface Level {
  id: string;
  cityId: string;
  levelNumber: number; // 1 to 10
  title: string;
  subtitle: string;
  tier: DifficultyTier;
  syllabusTopic: string;
  description: string;
  questions: Question[];
  xpReward: number;
  coinReward: number;
}

export interface BossObjective {
  id: string;
  description: string;
  syllabusTopic: string;
}

export interface BossMission {
  id: string;
  cityId: string;
  title: string;
  characterName: string;
  characterRole: string;
  scenario: string;
  objectives: BossObjective[];
  questions: Question[];
  requiredScorePercent: number; // e.g. 80
  xpReward: number;
  coinReward: number; // e.g. 500 bonus
  badgeName: string;
  badgeIcon: string;
}

export interface City {
  id: string;
  number: number; // 1 to 15
  name: string;
  region: string;
  landmark: string;
  description: string;
  moduleIndex: 1 | 2 | 3 | 4 | 5;
  moduleName: string;
  coordinates: { x: number; y: number }; // Percentage 0-100 on Spain map
  accentColor: string;
  levels: Level[];
  bossMission: BossMission;
}

export interface FestivalStall {
  id: string;
  title: string;
  spanishTitle: string;
  vendorName: string;
  side: 'left' | 'right';
  description: string;
  specialty: string;
  miniQuiz: Question;
  rewardCoins: number;
  rewardBadge: string;
  canopyColor?: string;
  icon?: string;
}

export interface FestivalCharacter {
  id: string;
  name: string;
  originCity: string;
  role: string;
  avatar: string;
  dialogue: string;
  englishDialogue: string;
  trivia: string;
  avatarColor?: string;
  xPercent?: number; // 0-100 in plaza
  yPercent?: number; // 0-100 in plaza
  interactiveQuestion?: {
    prompt: string;
    options: string[];
    correctAnswer: string;
    reactionCorrect: string;
    reactionIncorrect: string;
    explanation: string;
  };
}

export interface SyllabusTopicItem {
  id: string;
  code: string;
  title: string;
  category: 'Gramática' | 'Vocabulario' | 'Comunicación' | 'Cultura';
  description: string;
  coveredInCityIds: string[];
}

export interface SyllabusModule {
  moduleNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  hours: number;
  summary: string;
  topics: SyllabusTopicItem[];
}

export interface PlayerStats {
  coins: number;
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  lives: number;
  maxLives: number;
}

export interface CompletedLevelRecord {
  stars: number;
  scorePercent: number;
  firstTryPerfect: boolean;
  completedAt: string;
}

export interface CompletedBossRecord {
  scorePercent: number;
  passed: boolean;
  completedAt: string;
}

export interface IncorrectQuestionRecord {
  questionId: string;
  cityId: string;
  levelId: string;
  prompt: string;
  explanation: string;
  lastFailedAt: string;
  failCount: number;
  mastered: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  criteria: string;
}

export interface DailyScheduleDay {
  dayNumber: number;
  moduleNumber: number;
  title: string;
  targetCity: string;
  suggestedLevels: string[];
  objective: string;
  isMilestone?: boolean;
}

export interface PlayerProgress {
  stats: PlayerStats;
  profile: PlayerProfile;
  unlockedCityIds: string[];
  completedLevels: Record<string, CompletedLevelRecord>;
  completedBosses: Record<string, CompletedBossRecord>;
  purchasedTranslations: string[]; // Question IDs
  rewardedQuestionFirstTries: string[]; // Prevent duplicate 100 coin rewards
  rewardedDialogueIds: string[]; // Prevent duplicate 250 coin rewards
  rewardedCityCompletionIds: string[]; // Prevent duplicate 500 coin rewards
  incorrectQuestions: Record<string, IncorrectQuestionRecord>;
  achievements: Record<string, string>; // achievementId -> unlockedAt
  completedStudyDays: number[];
  festivalVisitedStalls: string[];
  unlockedCosmetics: string[];
  finalAssessmentCompleted?: {
    scorePercent: number;
    passed: boolean;
    completedAt: string;
    certificateId: string;
  };
}




