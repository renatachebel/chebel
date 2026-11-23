
export type EditorialSection =
  | {
      type: 'text';
      id?: string;
      eyebrow?: string;
      title: string;
      body: string;
      image?: string;
      imageAlt?: string;
      imagePosition?: 'left' | 'right';
      caption?: string;
    }
  | {
      type: 'gallery';
      id?: string;
      eyebrow?: string;
      title: string;
      body?: string;
      images: string[];
      layout?: 'mosaic' | 'pairs';
      imageAlts?: string[];
      imageCaptions?: string[];
      caption?: string;
    }
  | {
      type: 'image';
      id?: string;
      image: string;
      imageAlt?: string;
      caption?: string;
    }
  | {
      type: 'video';
      id?: string;
      eyebrow?: string;
      title?: string;
      body?: string;
      youtubeId?: string;
      videoSrc?: string;
      videoPoster?: string;
      caption?: string;
    }
  | {
      type: 'quote';
      id?: string;
      text: string;
      attribution?: string;
    };

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: (
    | 'photography'
    | 'video'
    | 'installation'
    | 'performance'
    | 'performance-installation'
    | 'generative-art'
    | 'projection-mapping'
    | 'vj'
    | 'poetry'
  )[];
  thumbnail: string;
  images?: string[];
  videos?: string[];
  description: string;
  client?: string;
  date: string;
  location?: string;
  isFeatured?: boolean;
  details?: string;
  youtubeId?: string;
  youtubeIds?: string[];
  editorialSections?: EditorialSection[];
}
