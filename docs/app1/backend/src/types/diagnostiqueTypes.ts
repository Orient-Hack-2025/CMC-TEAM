export interface IDiagnostique {
  diagnostiqueName: string;
  description: string;
  objectif: string;
}

export interface IData {
  answers: {
    axis: string;
    answers: number;
  }[];
}

export interface TraitResult {
  type: string;
  score: number;
  desc: string;
}
