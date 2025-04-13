
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AssessmentResult, DimensionScore } from '../types/assessment';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { getScoreInterpretation } from '../utils/assessmentUtils';
import { Brain, Download, Lightbulb, Mail, MessageCircle, Rocket, Share2, Star, Trophy } from 'lucide-react';

interface ResultsPageProps {
  result: AssessmentResult;
  onRestart: () => void;
}

// Map dimension names to icon components
const dimensionIcons: Record<string, React.ReactNode> = {
  curiosity: <Lightbulb className="h-5 w-5" />,
  openness: <MessageCircle className="h-5 w-5" />,
  resilience: <Trophy className="h-5 w-5" />,
  experimentation: <Lightbulb className="h-5 w-5" />,
  reflection: <Brain className="h-5 w-5" />,
  drive: <Rocket className="h-5 w-5" />,
};

// Badge icon mapping
const badgeIcons: Record<string, React.ReactNode> = {
  Star: <Star className="h-6 w-6" />,
  Trophy: <Trophy className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
  MessageCircle: <MessageCircle className="h-6 w-6" />,
  Brain: <Brain className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
  Search: <Lightbulb className="h-6 w-6" />, // Using Lightbulb as fallback for Search
};

const ResultsPage: React.FC<ResultsPageProps> = ({ result, onRestart }) => {
  const { overallScore, dimensionScores, badge } = result;
  const overallInterpretation = getScoreInterpretation(overallScore, 'overall');
  
  // Format data for radar chart
  const radarData = dimensionScores.map((dim) => ({
    subject: dim.label,
    score: dim.percentage,
    fullMark: 100,
  }));

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-light-purple to-teal bg-clip-text text-transparent mb-2">
          Your Agile Learner Profile
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your responses, we've created a personalized profile of your learning agility across six key dimensions.
        </p>
      </div>

      {/* Overall Results Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Overall Score */}
        <Card className="lg:col-span-2 border-none shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-light-purple/10 to-teal/10 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-navy">Your Agile Learner Score</h2>
              <div className="badge badge-primary">
                {overallInterpretation.label}
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="relative w-32 h-32 flex items-center justify-center mr-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-light-purple stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - overallScore / 100)}`}
                    transform="rotate(-90 50 50)"
                  ></circle>
                </svg>
                <span className="absolute text-3xl font-bold text-navy">{overallScore}</span>
              </div>
              
              <div>
                <p className="text-gray-700 mb-2">{overallInterpretation.description}</p>
                <div className="inline-flex items-center text-light-purple">
                  <div className="bg-light-purple/20 p-2 rounded-full mr-2">
                    {badgeIcons[badge.icon] || <Star className="h-5 w-5" />}
                  </div>
                  <span className="font-medium">{badge.name}: {badge.description}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Radar Chart */}
        <Card className="border-none shadow-lg overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-navy">Dimension Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="radar-chart-container pt-0">
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={radarData} outerRadius={90}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#1A1F2C', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#9b87f5"
                  fill="#9b87f5"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Dimension Details */}
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {dimensionScores.map((dim) => (
            <TabsTrigger key={dim.dimension} value={dim.dimension}>
              {dim.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dimensionScores.map((dim) => {
              const interpretation = getScoreInterpretation(dim.percentage, 'dimensions');
              return (
                <Card key={dim.dimension} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="bg-light-purple/20 p-2 rounded-full mr-2">
                          {dimensionIcons[dim.dimension] || <Star className="h-5 w-5" />}
                        </div>
                        <h3 className="font-medium text-navy">{dim.label}</h3>
                      </div>
                      <div className="badge badge-secondary">{interpretation.label}</div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Score</span>
                        <span className="font-medium">{dim.percentage}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${dim.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{dim.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {dimensionScores.map((dim) => {
          const interpretation = getScoreInterpretation(dim.percentage, 'dimensions');
          return (
            <TabsContent key={dim.dimension} value={dim.dimension}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-light-purple/20 p-3 rounded-full mr-3">
                      {dimensionIcons[dim.dimension] || <Star className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-navy">{dim.label}</h3>
                      <div className="badge badge-primary mt-1">{interpretation.label} ({dim.percentage}%)</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{dim.description}</p>
                  
                  <div className="mb-6">
                    <div className="progress-bar h-4 rounded-md">
                      <div
                        className="progress-bar-fill h-full rounded-md"
                        style={{ width: `${dim.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-medium text-navy mb-3">What This Means</h4>
                    <p className="text-gray-700">{interpretation.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-navy mb-3">Growth Opportunities</h4>
                    <ul className="space-y-2">
                      {dim.improvementTips.map((tip, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-light-purple/20 p-1 rounded-full flex-shrink-0 mt-1 mr-2">
                            <Lightbulb className="h-3 w-3 text-light-purple" />
                          </span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Next Steps */}
      <Card className="border-none shadow-lg mb-8 bg-gradient-to-br from-white to-soft-blue/30">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-navy mb-4">Next Steps on Your Learning Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3 hover-scale">
              <div className="bg-light-purple/20 p-2 rounded-full">
                <Download className="h-5 w-5 text-light-purple" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Save Your Results</h3>
                <p className="text-sm text-gray-600">Download a PDF of your complete assessment results</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3 hover-scale">
              <div className="bg-teal/20 p-2 rounded-full">
                <Share2 className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Share Your Badge</h3>
                <p className="text-sm text-gray-600">Create a shareable card with your top strengths</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3 hover-scale">
              <div className="bg-coral/20 p-2 rounded-full">
                <Mail className="h-5 w-5 text-coral" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Get Personalized Resources</h3>
                <p className="text-sm text-gray-600">Sign up for custom learning materials based on your profile</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm flex items-start space-x-3 hover-scale">
              <div className="bg-bright-orange/20 p-2 rounded-full">
                <Brain className="h-5 w-5 text-bright-orange" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Explore Related Assessments</h3>
                <p className="text-sm text-gray-600">Discover how your agility fits with specific tech careers</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={onRestart}
              variant="outline"
              className="hover:bg-light-purple/10"
            >
              Retake Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsPage;
