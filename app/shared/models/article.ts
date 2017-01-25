export class Article {
  id: number;
  title: string;
  author: string;
  body: string;
  related: RelatedArticle[];
  next: NextArticle
}

export class RelatedArticle {
  id: number;
  title: string;
  image: string
}

export class NextArticle {
  id: number;
  title: string;
}
