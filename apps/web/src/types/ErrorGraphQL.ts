export interface ErrorGraphQLData {
  data: Record<string, any>;
  errors: ErrorGraphQL[];
}

export interface ErrorGraphQL {
  path: string[];
  data: any | null;
  errorType: string;
  errorInfo: string | null;
  locations: ErrorGraphQLLocation[];
  message: string;
}

interface ErrorGraphQLLocation {
  line: number;
  column: number;
  sourceName: null;
}
