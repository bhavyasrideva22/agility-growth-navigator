
import React from 'react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ScenarioQuestionProps {
  questionId: number;
  question: string;
  options: string[];
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const ScenarioQuestion: React.FC<ScenarioQuestionProps> = ({
  questionId,
  question,
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="animate-scale-in">
      <div className="bg-light-purple/5 p-4 rounded-lg border-l-4 border-light-purple mb-6">
        <h3 className="text-xl font-medium text-navy">{question}</h3>
      </div>
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

export default ScenarioQuestion;
