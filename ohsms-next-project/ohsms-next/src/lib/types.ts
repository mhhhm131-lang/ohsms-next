export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface Risk {
  id: string;
  title: string;
  location: string;
  level: RiskLevel;
  status: "open" | "in_progress" | "closed";
}

export interface Report {
  id: string;
  title: string;
  reporter: string;
  status: "new" | "under_investigation" | "closed" | "rejected";
  createdAt: string;
}