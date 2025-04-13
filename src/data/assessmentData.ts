
import { Question, Dimension, DimensionScore } from "../types/assessment";

// Assessment questions
export const questions: Question[] = [
  // Curiosity
  {
    id: 1,
    text: "I actively seek out new information and skills, even when they're not immediately relevant to my current work.",
    type: "likert",
    dimension: "curiosity"
  },
  {
    id: 2,
    text: "When a new technology emerges, I'm usually:",
    type: "choice",
    dimension: "curiosity",
    options: [
      "Waiting to see if it becomes mainstream before learning it",
      "Reading about it but not trying it until necessary",
      "Exploring basic tutorials to understand the concepts",
      "Diving in and building small projects to test it out",
      "Becoming deeply immersed and exploring all its capabilities"
    ]
  },
  {
    id: 3,
    text: "You notice a feature in an app that you've never seen before. What is your most likely reaction?",
    type: "scenario",
    dimension: "curiosity",
    options: [
      "Ignore it and stick to the features I already know",
      "Maybe click on it once out of mild interest",
      "Explore it briefly to see what it does",
      "Thoroughly test it and look for documentation to understand it better",
      "Experiment extensively and try to figure out how it was built"
    ]
  },
  
  // Openness to Feedback
  {
    id: 4,
    text: "I view constructive criticism as an opportunity for growth rather than a personal attack.",
    type: "likert",
    dimension: "openness"
  },
  {
    id: 5,
    text: "When someone points out a mistake in my code or approach, I typically:",
    type: "choice",
    dimension: "openness",
    options: [
      "Feel defensive and justify why my approach was correct",
      "Accept the feedback but still feel it was unnecessary",
      "Listen politely and consider their perspective",
      "Actively seek to understand their reasoning and learn from it",
      "Thank them and ask for additional insights or suggestions"
    ]
  },
  {
    id: 6,
    text: "During a code review, a colleague suggests a completely different approach than the one you spent days implementing. What's your most likely response?",
    type: "scenario",
    dimension: "openness",
    options: [
      "Strongly defend my solution and disregard their suggestion",
      "Listen but explain why my approach is better",
      "Consider their perspective but likely stick with my solution",
      "Carefully evaluate both approaches to determine the best one",
      "Embrace the learning opportunity and implement their approach if it's better"
    ]
  },
  
  // Resilience
  {
    id: 7,
    text: "I bounce back quickly from technical setbacks and failed attempts.",
    type: "likert",
    dimension: "resilience"
  },
  {
    id: 8,
    text: "When facing a particularly challenging programming problem, I tend to:",
    type: "choice",
    dimension: "resilience",
    options: [
      "Give up quickly if my first approach doesn't work",
      "Try a few approaches before asking someone else to solve it",
      "Persist with determination through multiple attempts",
      "Take strategic breaks but return with fresh perspectives",
      "View it as an exciting puzzle and persist until I find a solution"
    ]
  },
  {
    id: 9,
    text: "Your project deadline is approaching, and you discover a major bug that requires significant rework. How do you respond?",
    type: "scenario",
    dimension: "resilience",
    options: [
      "Feel overwhelmed and freeze up",
      "Get frustrated but eventually start addressing it",
      "Take a moment to process then methodically tackle the problem",
      "Immediately shift into solution mode and adjust your timeline",
      "See it as a challenge, mobilize resources, and find the most efficient solution"
    ]
  },
  
  // Willingness to Experiment
  {
    id: 10,
    text: "I regularly try new approaches or tools, even when there's a risk of failure.",
    type: "likert",
    dimension: "experimentation"
  },
  {
    id: 11,
    text: "When it comes to learning new technologies, I prefer:",
    type: "choice",
    dimension: "experimentation",
    options: [
      "Sticking with what I already know well",
      "Learning only what's absolutely necessary for my job",
      "Occasionally exploring new technologies that seem promising",
      "Regularly experimenting with different tools and approaches",
      "Constantly testing and evaluating emerging technologies and methods"
    ]
  },
  {
    id: 12,
    text: "Your team needs to choose a technology stack for a new project. What's your approach?",
    type: "scenario",
    dimension: "experimentation",
    options: [
      "Strongly advocate for technologies the team already knows",
      "Suggest minor variations of familiar technologies",
      "Research a few alternatives and present their pros and cons",
      "Push to try something new that could provide better results",
      "Create prototypes in multiple technologies to compare their effectiveness"
    ]
  },
  
  // Self-reflection
  {
    id: 13,
    text: "I regularly take time to analyze my approach to problems and identify areas for improvement.",
    type: "likert",
    dimension: "reflection"
  },
  {
    id: 14,
    text: "After completing a project or major task, I typically:",
    type: "choice",
    dimension: "reflection",
    options: [
      "Move immediately to the next task without looking back",
      "Briefly think about what went well or poorly",
      "Conduct an informal personal review of my performance",
      "Systematically analyze what I learned and how I could improve",
      "Document detailed lessons learned and create a personal improvement plan"
    ]
  },
  {
    id: 15,
    text: "You've just finished a challenging six-month project. What's your next step?",
    type: "scenario",
    dimension: "reflection",
    options: [
      "Jump straight into the next project without reflection",
      "Have a casual think about what could have gone better",
      "Spend some time considering the main lessons learned",
      "Conduct a thorough self-assessment and document key insights",
      "Create a detailed personal development plan based on your performance"
    ]
  },
  
  // Learning Drive
  {
    id: 16,
    text: "I dedicate specific time for learning and professional development, even when I'm busy.",
    type: "likert",
    dimension: "drive"
  },
  {
    id: 17,
    text: "When it comes to professional development, I most closely resemble:",
    type: "choice",
    dimension: "drive",
    options: [
      "Someone who learns only when required by my job",
      "Someone who occasionally explores topics that interest me",
      "Someone who regularly dedicates time to improving my skills",
      "Someone who has a structured learning plan I follow consistently",
      "Someone who is constantly learning and has integrated it into my daily routine"
    ]
  },
  {
    id: 18,
    text: "Your company doesn't provide training for a skill you need for your career growth. What do you do?",
    type: "scenario",
    dimension: "drive",
    options: [
      "Focus only on skills my company directly supports",
      "Wait until I absolutely need the skill before learning it",
      "Find some free resources online and learn the basics",
      "Create a personal learning plan and invest my own time to develop the skill",
      "Immerse myself in learning through multiple channels and practice consistently"
    ]
  }
];

// Dimension labels and descriptions
export const dimensionDetails: Record<Dimension, { label: string; description: string; improvementTips: string[] }> = {
  curiosity: {
    label: "Curious Explorer",
    description: "Your natural tendency to seek out new information, ask questions, and explore beyond your comfort zone.",
    improvementTips: [
      "Set aside time each week to explore a new technology or concept",
      "Ask more 'why' and 'how' questions when learning something new",
      "Follow diverse technology blogs and thought leaders outside your specialty",
      "Join communities where new ideas are regularly discussed",
      "Challenge yourself with 'learning projects' using unfamiliar tools"
    ]
  },
  openness: {
    label: "Feedback Receptivity",
    description: "Your ability to receive, process, and apply feedback from others, even when it challenges your assumptions.",
    improvementTips: [
      "Practice active listening when receiving feedback",
      "Ask clarifying questions instead of immediately defending your position",
      "Seek feedback proactively from diverse sources",
      "Reflect on feedback patterns to identify recurring growth areas",
      "Start a feedback journal to track your progress over time"
    ]
  },
  resilience: {
    label: "Tech Resilience",
    description: "Your capacity to bounce back from setbacks, persist through challenges, and adapt to changing conditions.",
    improvementTips: [
      "Reframe failures as learning opportunities and data points",
      "Break large challenges into smaller, manageable tasks",
      "Develop a 'debugging mindset' for approaching all problems",
      "Build a support network you can turn to when facing tough challenges",
      "Practice self-care routines to maintain energy during difficult periods"
    ]
  },
  experimentation: {
    label: "Experimental Mindset",
    description: "Your willingness to try new approaches, take calculated risks, and step outside established methods.",
    improvementTips: [
      "Dedicate time for regular 'experimental coding sessions'",
      "Set learning goals that require trying new tools or methods",
      "Create small POCs (proof of concepts) before dismissing new approaches",
      "Adopt a 'test and learn' approach to everyday tasks",
      "Join hackathons or challenges that force you out of your comfort zone"
    ]
  },
  reflection: {
    label: "Self-Reflection",
    description: "Your habit of analyzing your own thinking, learning patterns, and effectiveness to continually improve.",
    improvementTips: [
      "Schedule regular reflection time after completing projects",
      "Keep a learning journal to document insights and patterns",
      "Practice metacognition by thinking about how you approach problems",
      "Use frameworks like 'Start/Stop/Continue' to structure your reflection",
      "Seek outside perspective on your learning process and blind spots"
    ]
  },
  drive: {
    label: "Learning Drive",
    description: "Your intrinsic motivation to develop new skills and knowledge, even without external pressure.",
    improvementTips: [
      "Connect learning goals to your personal values and aspirations",
      "Create a structured learning roadmap with measurable milestones",
      "Find an accountability partner or learning community",
      "Reward yourself for reaching learning milestones",
      "Share your knowledge through teaching others to reinforce your drive"
    ]
  }
};

// Badge definitions based on dimension strengths
export const badgeDefinitions = [
  {
    name: "Curiosity Champion",
    description: "You have an exceptional drive to explore new technologies and ideas.",
    dimension: "curiosity",
    minPercentage: 80,
    icon: "Search"
  },
  {
    name: "Feedback Virtuoso",
    description: "You excel at incorporating feedback and different perspectives.",
    dimension: "openness",
    minPercentage: 80,
    icon: "MessageCircle"
  },
  {
    name: "Resilience Rockstar",
    description: "You demonstrate remarkable persistence in the face of challenges.",
    dimension: "resilience",
    minPercentage: 80,
    icon: "Trophy"
  },
  {
    name: "Innovation Instigator",
    description: "You consistently push boundaries and try new approaches.",
    dimension: "experimentation",
    minPercentage: 80,
    icon: "Lightbulb"
  },
  {
    name: "Reflection Master",
    description: "You excel at analyzing your experiences and extracting valuable lessons.",
    dimension: "reflection",
    minPercentage: 80,
    icon: "Brain"
  },
  {
    name: "Learning Dynamo",
    description: "Your drive to continuously improve sets you apart from others.",
    dimension: "drive",
    minPercentage: 80,
    icon: "Rocket"
  },
  {
    name: "Agile Learner",
    description: "You demonstrate a balanced approach to learning across all dimensions.",
    dimension: "overall",
    minPercentage: 70,
    icon: "Star"
  }
];

// Calculate score interpretation ranges
export const scoreInterpretation = {
  overall: [
    { range: [0, 40], label: "Developing Agility", description: "You're in the early stages of developing your learning agility. With focused effort on the recommended areas, you can significantly enhance your ability to adapt and grow." },
    { range: [41, 60], label: "Emerging Agility", description: "You show promising signs of learning agility in several areas. By strengthening your weaker dimensions, you can become more adaptable in rapidly changing environments." },
    { range: [61, 80], label: "Established Agility", description: "You demonstrate solid learning agility across most dimensions. You adapt well to change and actively seek growth opportunities." },
    { range: [81, 100], label: "Exceptional Agility", description: "You possess remarkable learning agility that sets you apart. Your capacity to learn, adapt, and grow makes you well-suited for dynamic and evolving tech environments." }
  ],
  dimensions: [
    { range: [0, 40], label: "Developing", description: "This is an area with significant growth potential." },
    { range: [41, 60], label: "Emerging", description: "You show promising capabilities in this area." },
    { range: [61, 80], label: "Established", description: "This is a solid strength that serves you well." },
    { range: [81, 100], label: "Exceptional", description: "This is a standout capability that sets you apart." }
  ]
};
