export interface IExperience {
  _id: number;
  image: string;
  title: string;
  description: string;
  place: string;
  score ?: number;
  price ?: string;
  users: number;
}
