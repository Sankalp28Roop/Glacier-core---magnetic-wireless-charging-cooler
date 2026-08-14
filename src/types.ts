export interface ComponentLayer {
  id: string;
  name: string;
  category: string;
  material: string;
  description: string;
  specs: string;
  thickness?: string;
  thermalRating?: string;
  color: string;
  calloutNumber: string;
}

export interface KitOption {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  badge?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ColorFinish {
  id: string;
  name: string;
  hex: string;
  borderHex: string;
  previewClass: string;
}

export interface AssemblyStep {
  step: number;
  title: string;
  time: string;
  difficulty: 'Easy' | 'Moderate' | 'Precision';
  description: string;
  tips: string;
  toolsNeeded: string[];
}

export interface GameBenchmark {
  id: string;
  name: string;
  resolution: string;
  uncooledTemp: number;
  uncooledFps: number;
  cooledTemp: number;
  cooledFps: number;
  throttleRisk: 'CRITICAL' | 'HIGH' | 'MODERATE';
}
