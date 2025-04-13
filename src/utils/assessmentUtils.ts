
import { Dimension, AssessmentResult, DimensionScore } from "../types/assessment";
import { questions, dimensionDetails, badgeDefinitions, scoreInterpretation } from "../data/assessmentData";

// Convert Likert scale answers (1-5) to a 0-100 scale
const likertToPercentage = (value: number): number => {
  return ((value - 1) / 4) * 100;
};

// Calculate score for a specific dimension
export const calculateDimensionScore = (
  answers: Record<number, number | string>,
  dimension: Dimension
): DimensionScore => {
  const dimensionQuestions = questions.filter(q => q.dimension === dimension);
  let totalScore = 0;
  let maxPossibleScore = 0;
  
  dimensionQuestions.forEach(question => {
    const answer = answers[question.id];
    if (typeof answer === 'number') {
      totalScore += answer;
      maxPossibleScore += 5; // Maximum value for each question
    }
  });
  
  const percentage = maxPossibleScore > 0
    ? Math.round((totalScore / maxPossibleScore) * 100)
    : 0;
  
  const details = dimensionDetails[dimension];
  
  return {
    dimension,
    score: totalScore,
    maxScore: maxPossibleScore,
    percentage,
    label: details.label,
    description: details.description,
    improvementTips: details.improvementTips
  };
};

// Calculate overall assessment results
export const calculateAssessmentResults = (
  answers: Record<number, number | string>
): AssessmentResult => {
  const dimensions: Dimension[] = [
    "curiosity",
    "openness",
    "resilience",
    "experimentation",
    "reflection",
    "drive"
  ];
  
  const dimensionScores = dimensions.map(dimension => 
    calculateDimensionScore(answers, dimension)
  );
  
  // Calculate overall score as average of dimension percentages
  const overallScore = Math.round(
    dimensionScores.reduce((sum, { percentage }) => sum + percentage, 0) / 
    dimensionScores.length
  );
  
  // Determine the badge based on scores
  let badge = badgeDefinitions.find(b => b.dimension === "overall");
  
  // First check for exceptional dimension-specific badges
  dimensionScores.forEach(score => {
    const dimensionBadge = badgeDefinitions.find(
      b => b.dimension === score.dimension && score.percentage >= b.minPercentage
    );
    
    if (dimensionBadge) {
      badge = dimensionBadge;
    }
  });
  
  // Fall back to overall badge if no specific badge was assigned
  if (!badge) {
    badge = {
      name: "Aspiring Learner",
      description: "You're developing your learning agility across multiple dimensions.",
      icon: "Lightbulb"
    };
  }
  
  return {
    overallScore,
    dimensionScores,
    badge
  };
};

// Get interpretation for a score
export const getScoreInterpretation = (score: number, type: 'overall' | 'dimensions') => {
  const interpretations = scoreInterpretation[type];
  
  for (const interpretation of interpretations) {
    const [min, max] = interpretation.range;
    if (score >= min && score <= max) {
      return interpretation;
    }
  }
  
  return interpretations[0]; // Fallback to first interpretation
};
