export interface IAPIResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data?: Record<string, unknown> | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  } | null;
}
