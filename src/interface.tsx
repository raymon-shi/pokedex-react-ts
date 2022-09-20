interface IName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

interface IBaseStats {
  HP?: number;
  Attack?: number;
  Defense?: number;
  "Sp. Attack"?: number;
  "Sp. Defense"?: number;
  Speed?: number;
}

interface IEvolution {
  prev?: string[] | undefined;
  next?: string[][] | undefined;
}

interface IProfile {
  height: string;
  weight: string;
  egg?: string[] | undefined;
  ability?: string[][] | undefined;
  gender: string;
}

interface IImage {
  sprite: string;
  thumbnail: string;
  hires?: string;
}

export interface IPokemon {
  id: number;
  name: IName;
  type: string[];
  base?: IBaseStats;
  species: string;
  description: string;
  evolution?: IEvolution;
  profile: IProfile;
  image: IImage;
}
