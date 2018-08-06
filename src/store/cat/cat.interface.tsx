export interface CatAppearance {
  eyeIris: string | null;
  eyePupil: string | null;
  furBase: string;
  innerEar: string;
};

export interface Cat {
  id: string;
  name: string;
  fullness: number;
  appearance: CatAppearance;
};
