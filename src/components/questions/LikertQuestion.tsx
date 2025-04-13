
import React from 'react';
import { cn } from '@/lib/utils';

interface LikertQuestionProps {
  questionId: number;
  question: string;
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const LikertQuestion: React.FC<LikertQuestionProps> = ({
  questionId,
  question,
  selectedValue,
  onSelect,
}) => {
  const options = [
    { value: 1, label: 'Strongly Disagree' },
    { value: 2, label: 'Disagree' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree' },
    { value: 5, label: 'Strongly Agree' },
  ];

  return (
    <div className="animate-scale-in">
      <h3 className="text-xl font-medium text-navy mb-6">{question}</h3>
      <div className="likert-scale">
        {options.map((option) => (
          <div
            key={option.value}
            className={cn(
              "likert-option hover-scale",
              selectedValue === option.value ? "selected" : ""
            )}
            onClick={() => onSelect(option.value)}
          >
            <div 
              className={cn(
                "h-12 w-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                selectedValue === option.value 
                  ? "bg-light-purple text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-light-purple/10"
              )}
            >
              {option.value}
            </div>
            <span className="text-sm text-center">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikertQuestion;
