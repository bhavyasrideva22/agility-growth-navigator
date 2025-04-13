
import React from 'react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ChoiceQuestionProps {
  questionId: number;
  question: string;
  options: string[];
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const ChoiceQuestion: React.FC<ChoiceQuestionProps> = ({
  questionId,
  question,
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="animate-scale-in">
      <h3 className="text-xl font-medium text-navy mb-6">{question}</h3>
      <RadioGroup
        className="space-y-3"
        value={selectedValue?.toString()}
        onValueChange={(value) => onSelect(parseInt(value))}
      >
        {options.map((option, index) => {
          const value = index + 1;
          return (
            <div
              key={value}
              className={cn(
                "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                selectedValue === value
                  ? "bg-light-purple/10 border border-light-purple/30"
                  : "hover:bg-gray-50 border border-transparent"
              )}
            >
              <RadioGroupItem value={value.toString()} id={`q${questionId}-option-${value}`} />
              <Label
                htmlFor={`q${questionId}-option-${value}`}
                className="flex-grow cursor-pointer text-gray-700"
              >
                {option}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default ChoiceQuestion;
