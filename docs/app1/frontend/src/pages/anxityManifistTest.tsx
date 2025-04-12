
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import MainLayout from "@/layouts/MainLayout";

// Questions fictives pour le test OCEAN (Big Five)
const anxityManifistQuestions = [
    {
        "name": "Q1",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "نومي مضطرب ومتقطع.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q2",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "مخاوفي كبيرة جدا بالقابلة بأصدقائي.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q3",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "تمر علي أبام لا أنم بسبب القلق.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q4",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "أمتقد أنني أكثر عصيلة من الأخرين.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q5",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "أعاني كل مدة البل بن كوابيس بزجمة.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q6",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "أعاني من الأمور بلغدة في كثير من الأحيان.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q7",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "طالبا ما الحمل أن يدأو بتشملن مساء اليوم في حمل.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q8",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "أعاني كبيرًا من الأسبال.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      },
      {
        "name": "Q9",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "أضمر بالراحة أثناء التفكير في أمور العمل والبال(م).",
        "options": [
          { "value": 0, "text": "نعم" },
          { "value": 1, "text": "لا" }
        ]
      },
      {
        "name": "Q10",
        "diagnostique": "67f92069952adef0016ae3f4",
        "question": "سيبوي نورات من العامل.",
        "options": [
          { "value": 1, "text": "نعم" },
          { "value": 0, "text": "لا" }
        ]
      }
];

const anixityManifist: React.FC<{}> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  
  const currentQuestion = anxityManifistQuestions[currentQuestionIndex];
  
  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.name]: value
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < anxityManifistQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmit = () => {
    // Dans une implémentation réelle, envoyez les réponses au backend ici
    console.log("Réponses soumises :", answers);
    
    // Redirection vers la page des résultats
    navigate("/diagnostics/ocean/results");
  };
  
  const isLastQuestion = currentQuestionIndex === anxityManifistQuestions.length - 1;
  const isAnswered = answers[currentQuestion.name] !== undefined;
  const progressPercentage = ((currentQuestionIndex + 1) / anxityManifistQuestions.length) * 100;
  
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Test de personnalité anxity Manifist</h1>
          
          <div className="mb-6 bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-orientpro-indigo h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Question {currentQuestionIndex + 1}/{anxityManifistQuestions.length}</CardTitle>
              <CardDescription>
                Indiquez à quel point vous êtes d'accord avec chaque affirmation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
                <RadioGroup 
                  value={answers[currentQuestion.name]} 
                  onValueChange={handleAnswerChange}
                >
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                        <RadioGroupItem value={option.value.toString()} id={`${currentQuestion.name}-${option.value}`} />
                        <Label htmlFor={`${currentQuestion.name}-${option.value}`} className="flex-grow cursor-pointer">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                onClick={handlePrevious} 
                variant="outline" 
                disabled={currentQuestionIndex === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              
              {isLastQuestion ? (
                <Button 
                  onClick={handleSubmit} 
                  disabled={!isAnswered}
                  className="bg-orientpro-indigo hover:bg-orientpro-indigo/90"
                >
                  Terminer <Check className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleNext} 
                  disabled={!isAnswered}
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
          
          <div className="text-center text-sm text-gray-500">
            <p>Ce test comprend normalement 40-60 questions. Cette version est abrégée pour démonstration.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default anixityManifist;
