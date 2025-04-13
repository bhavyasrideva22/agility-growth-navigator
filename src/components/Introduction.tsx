
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, LightbulbIcon, Rocket, Trophy } from 'lucide-react';

interface IntroductionProps {
  onStart: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <Card className="border-none shadow-lg bg-gradient-to-br from-white to-soft-blue/30">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-light-purple to-teal bg-clip-text text-transparent">
            Agile Learner Scorecard
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Discover your capacity to adapt and thrive in evolving tech environments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/80 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-navy mb-3">What is Learning Agility?</h2>
            <p className="text-gray-700 mb-4">
              Learning agility is your ability to learn from experience, adapt to new challenges, 
              and thrive in unfamiliar or fast-evolving environments—especially in technologies like 
              AI, ServiceNow, and Salesforce.
            </p>
            <p className="text-gray-700">
              This assessment measures your <span className="font-medium">growth potential</span>, not 
              your current knowledge. It's designed to help you understand your strengths and 
              identify opportunities for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3">
              <div className="bg-light-purple/20 p-2 rounded-full">
                <Brain className="h-6 w-6 text-light-purple" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Self-Discovery</h3>
                <p className="text-sm text-gray-600">Gain insights into how you learn and adapt to new challenges</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3">
              <div className="bg-teal/20 p-2 rounded-full">
                <LightbulbIcon className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Growth Focus</h3>
                <p className="text-sm text-gray-600">Identify specific ways to enhance your learning capabilities</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3">
              <div className="bg-coral/20 p-2 rounded-full">
                <Trophy className="h-6 w-6 text-coral" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Career Development</h3>
                <p className="text-sm text-gray-600">Understand your readiness for evolving tech environments</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3">
              <div className="bg-bright-orange/20 p-2 rounded-full">
                <Rocket className="h-6 w-6 text-bright-orange" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Actionable Insights</h3>
                <p className="text-sm text-gray-600">Receive personalized recommendations for improvement</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-navy mb-3">About This Assessment</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-light-purple mr-2"></span>
                <span>Takes approximately 5-7 minutes to complete</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-light-purple mr-2"></span>
                <span>Includes 18 questions across 6 key dimensions</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-light-purple mr-2"></span>
                <span>Provides detailed feedback and personalized recommendations</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-light-purple mr-2"></span>
                <span>Your responses are completely private and confidential</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-8">
          <Button 
            className="bg-gradient-to-r from-light-purple to-tertiary-purple hover:opacity-90 text-white font-medium py-2 px-8 rounded-full shadow-md transition-all hover-scale"
            onClick={onStart}
            size="lg"
          >
            Begin Assessment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Introduction;
