
export type Dimension = 
  | "curiosity" 
  | "openness" 
  | "resilience" 
  | "experimentation" 
  | "reflection" 
  | "drive";

export type QuestionType = "likert" | "scenario" | "choice";

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  dimension: Dimension;
  options?: string[];
  imageUrl?: string;
}

export interface Choice {
  id: string;
  text: string;
  value: number;
}

export interface DimensionScore {
  dimension: Dimension;
  score: number;
  maxScore: number;
  percentage: number;
  label: string;
  description: string;
  improvementTips: string[];
}

export interface AssessmentResult {
  overallScore: number;
  dimensionScores: DimensionScore[];
  badge: {
    name: string;
    description: string;
    icon: string;
  };
}

export interface AssessmentState {
  currentQuestionIndex: number;
  answers: Record<number, number | string>;
  isComplete: boolean;
  result: AssessmentResult | null;
}
