export interface OverviewItem {
  id: number;
  name: string;
  count: number;
}

export interface PendingItem {
  id: number;
  name: string;
  description?: string;
}

export interface ReportedPost {
  id: number;
  title: string;
  description?: string;
}
