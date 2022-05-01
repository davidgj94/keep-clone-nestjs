export interface Note {
  id: string;
  title: string;
  content: string;
  labels: string[];
  archived: boolean;
  /** Format: date-time */
  updatedAt: string;
  /** Format: date-time */
  createdAt: string;
  empty: boolean;
}
