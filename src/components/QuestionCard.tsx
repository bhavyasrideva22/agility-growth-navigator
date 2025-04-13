
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Question } from '../types/assessment';
import LikertQuestion from './questions/LikertQuestion';
import ChoiceQuestion from './questions/ChoiceQuestion';
import ScenarioQuestion from './questions/ScenarioQuestion';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  answer: number | string | null;
  onAnswer: (value: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  answer,
  onAnswer,
  onNext,
  onPrevious,
  isFirstQuestion,
  isLastQuestion,
}) => {
  // Convert string answer to number if needed
  const numericAnswer = typeof answer === 'string' ? parseInt(answer) : answer;

  const renderQuestion = () => {
    switch (question.type) {
      case 'likert':
        return (
          <LikertQuestion
            questionId={question.id}
            question={question.text}
            selectedValue={numericAnswer}
            onSelect={onAnswer}
          />
        );
      case 'choice':
        if (!question.options) return null;
        return (
          <ChoiceQuestion
            questionId={question.id}
            question={question.text}
            options={question.options}
            selectedValue={numericAnswer}
            onSelect={onAnswer}
          />
        );
      case 'scenario':
        if (!question.options) return null;
        return (
          <ScenarioQuestion
            questionId={question.id}
            question={question.text}
            options={question.options}
            selectedValue={numericAnswer}
            onSelect={onAnswer}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round(((currentIndex + 1) / totalQuestions) * 100)}% Complete
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="question-card">
        <CardContent className="pt-6">
          {renderQuestion()}
        </CardContent>
        <CardFooter className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={isFirstQuestion ? "opacity-0" : ""}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={numericAnswer === null}
            className={`bg-gradient-to-r from-light-purple to-tertiary-purple hover:opacity-90 ${
              numericAnswer === null ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLastQuestion ? "See Results" : "Next"}
            {!isLastQuestion && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionCard;
