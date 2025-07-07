export interface IEvaluationFormData {
  id: string;
  externalEvaluationRound: string;
  trainingProgram: string;
  trainingCourse: string;
  code: string;
  name: string;
  currentSituationDescription: string;
  strengths: string;
  weaknesses: string;
  recommendations: string;
  evaluation: boolean;
  evaluator: string;
  evidenceFile?: File | null;
}
