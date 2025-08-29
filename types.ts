
export interface JustificationDetail {
  summary: string;
  comparison: string;
}

export interface Justification {
  interoperability: JustificationDetail;
  maintainability: JustificationDetail;
  performance: JustificationDetail;
  normativity: JustificationDetail;
  traceability: JustificationDetail;
}

export interface MigrationStep {
  step: number;
  title: string;
  description: string;
}

export interface FormatComparisonRow {
  criterion: string;
  json: string;
  xml: string;
  yaml: string;
}

export interface AnalysisResult {
  clarification: string;
  recommendedLanguage: string;
  recommendationSummary: string;
  justification: Justification;
  migrationStrategy: MigrationStep[];
  formatComparison: FormatComparisonRow[];
}