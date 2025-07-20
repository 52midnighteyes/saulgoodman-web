export interface IPostBlogParam {
  title: string;
  content: string;
  tag?: string;
  category?: string;
  author: string;
}

export interface IPostBlogResult {
  id: string;
  title: string;
  slug: string;
  content: string;
  tag: string;
  category: string;
  published_date: Date;
  author: string;
}
