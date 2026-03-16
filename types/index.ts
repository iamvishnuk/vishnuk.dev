export interface IPresence {
  id: string;
  status: string;
  session_start: string;
  last_seen: string;
  updated_at: string;
  app: string;
  window_title: string | null;
}
