export interface DescriptionContent {
  title: string;
  content: string[];
  img?: string[];
}

export interface Description {
  title: string;
  content: DescriptionContent[];
  actions?: { label: string; link?: string }[];
}

export interface DataType {
  title: string;
  description: Description[];
  preview?: { link?: string; content: string[] };
}
