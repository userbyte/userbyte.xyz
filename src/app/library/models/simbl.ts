export type Post = {
  [key: string]: string | number | undefined;
  id: string;
  timestamp: number;
  author: string;
  text: string;

  privacy?: "public" | "hidden" | "private";
};
