import { z } from 'zod';

/**
 * Health check response type
 */
export interface HealthCheckResponse {
  status: 'ok' | 'degraded' | 'error';
  timestamp: string;
  uptime: number;
  environment: string;
  database: {
    connected: boolean;
  };
}

/**
 * Example user type - can be expanded later
 */
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Zod schema for user validation
 */
export const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export type CreateUserInput = z.infer<typeof userSchema>;
