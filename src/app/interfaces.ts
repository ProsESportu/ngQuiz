export interface IScores {
  name: string;
  id?: number;
  score?:number
}
export interface Iq_a {
  question: string;
  correctAnswear?: number;
  answears: string[];
}
export interface Ibutton {
    id?:number
    name: string;
    description: string;
  }
  