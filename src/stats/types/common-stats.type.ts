import { StatsValues } from './index';

export type CommonStats = {
  overall: StatsValues;
  solo: StatsValues | null;
  duo: StatsValues | null;
  trio: null;
  squad: StatsValues;
  ltm: StatsValues;
};
