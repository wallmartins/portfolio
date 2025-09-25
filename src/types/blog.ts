export interface BlogCardProps {
  title: string;
  description: string;
  tags: string[];
  postLink: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  content: string;
}
