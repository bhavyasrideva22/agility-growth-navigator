import React, { useState } from 'react';
import Introduction from './Introduction';
import QuestionCard from './QuestionCard';
import ResultsPage from './ResultsPage';
import { questions } from '../data/assessmentData';
import { AssessmentState } from '../types/assessment';
import { calculateAssessmentResults } from '../utils/assessmentUtils';
import { useToast } from "@/hooks/use-toast";

const Assessment: React.FC = () => {
  const { toast } = useToast();
  const [state, setState] = useState<AssessmentState>({
    currentQuestionIndex: -1, // -1 means we're at the intro screen
    answers: {},
    isComplete: false,
    result: null,
  });

  const startAssessment = () => {
    setState({
      ...state,
      currentQuestionIndex: 0,
    });
  };

  const handleAnswer = (value: number) => {
    const currentQuestion = questions[state.currentQuestionIndex];
    
    setState({
      ...state,
      answers: {
        ...state.answers,
        [currentQuestion.id]: value,
      },
    });
  };

  const handleNext = () => {
    const newIndex = state.currentQuestionIndex + 1;
    
    if (newIndex >= questions.length) {
      // Calculate results
      const result = calculateAssessmentResults(state.answers);
      
      setState({
        ...state,
        isComplete: true,
        result,
      });
      
      toast({
        title: "Assessment Complete!",
        description: "Your Agile Learner profile has been generated.",
      });
    } else {
      setState({
        ...state,
        currentQuestionIndex: newIndex,
      });
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestionIndex > 0) {
      setState({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      });
    }
  };

  const restartAssessment = () => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
      result: null,
    });
    
    toast({
      title: "Assessment Restarted",
      description: "You can now take the assessment again.",
    });
  };

  // Show introduction if we're at the start
  if (state.currentQuestionIndex === -1) {
    return <Introduction onStart={startAssessment} />;
  }

  // Show results if the assessment is complete
  if (state.isComplete && state.result) {
    return <ResultsPage result={state.result} onRestart={restartAssessment} />;
  }

  // Otherwise, show the current question
  const currentQuestion = questions[state.currentQuestionIndex];
  const currentAnswer = state.answers[currentQuestion.id] ?? null;

  return (
    <QuestionCard
      question={currentQuestion}
      currentIndex={state.currentQuestionIndex}
      totalQuestions={questions.length}
      answer={currentAnswer}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onPrevious={handlePrevious}
      isFirstQuestion={state.currentQuestionIndex === 0}
      isLastQuestion={state.currentQuestionIndex === questions.length - 1}
    />
  );
};

export default Assessment;
