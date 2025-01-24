export type UnsplashImage = {
  id: string;
  urls: {
    small: string;
    full: string;
    raw: string;
  };
  description: string | null;
  alt_description: string | null;
};

export type UnsplashResponse = {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
};
