export type Guide = {
  title: string;
  slug: string;
  description: string;
  steps: {
    name: string;
    headline?: string;
    code?: string;
    isInline?: boolean;
  }[];
};
