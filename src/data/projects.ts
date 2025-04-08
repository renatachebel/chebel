export interface Project {
  id: number;
  title: string;
  slug: string;
  category: 'photography' | 'video' | 'installation' | 'performance';
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
}

// In a real application, these would be real images and videos
export const projects: Project[] = [
  {
    id: 1,
    title: "Urban Perspectives",
    slug: "urban-perspectives",
    category: "photography",
    thumbnail: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "A photographic exploration of urban landscapes and their interaction with light and shadow.",
    client: "Personal Project",
    date: "2023",
    location: "Various Cities",
    isFeatured: true,
    details: "This series explores the relationship between artificial structures and natural light. Through a minimalist lens, I capture the geometric patterns and stark contrasts found in urban environments at different times of day. Each image is a meditation on how architecture shapes our perception of space and how light transforms these rigid structures into dynamic canvases."
  },
  {
    id: 2,
    title: "Ephemeral Dreams",
    slug: "ephemeral-dreams",
    category: "video",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    videos: [
      "https://example.com/videos/ephemeral-dreams.mp4"
    ],
    description: "A short experimental film examining the nature of dreams and memory.",
    date: "2022",
    isFeatured: true,
    details: "Ephemeral Dreams is an experimental short film that explores the fragmented and elusive nature of our dreams and memories. Using layered visuals, abstract narratives, and an immersive soundscape, the film invites viewers to experience the disorienting yet beautiful space between consciousness and subconsciousness. The project was shot over three months using a combination of digital and analog techniques to create its distinctive visual texture."
  },
  {
    id: 3,
    title: "Temple of Reflections",
    slug: "temple-of-reflections",
    category: "installation",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    youtubeId: "cLByxbJQGBY",
    description: "An immersive installation created in Taiwan in collaboration with Ygor Marotta.",
    date: "2022",
    location: "Taiwan",
    isFeatured: true,
    details: "Temple of Reflections is an immersive installation that combines projection mapping, light, and sound to create a meditative and transformative space. Created in collaboration with Ygor Marotta in Taiwan, this project explores the themes of reflection, both literal and metaphorical. Visitors are invited to contemplate their relationship with themselves and their surroundings through an experience that merges traditional cultural elements with contemporary digital art techniques."
  },
  {
    id: 4,
    title: "Chromatic Pulse",
    slug: "chromatic-pulse",
    category: "performance",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    videos: [
      "https://example.com/videos/chromatic-pulse-excerpt.mp4"
    ],
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "A live VJ performance combining generative visuals with electronic music.",
    client: "Electronic Arts Festival",
    date: "2023",
    location: "International Music Hall",
    details: "Chromatic Pulse is a live audiovisual performance that seamlessly blends real-time visual programming with electronic music. Using custom software tools, I create responsive visual landscapes that evolve in harmony with the music, creating an immersive sensory experience. The performance explores the relationship between sound frequencies, color theory, and human perception, aiming to create moments of synesthetic experience for the audience."
  },
  {
    id: 5,
    title: "Liminal Portraits",
    slug: "liminal-portraits",
    category: "photography",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80",
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
    ],
    description: "An intimate portrait series exploring identity and transformation.",
    date: "2022",
    details: "Liminal Portraits is an ongoing photographic series that examines the transitional spaces of human identity. Through carefully composed portraits in ambiguous settings, the series captures subjects in moments of personal transformation or threshold states. Using natural light and minimal post-processing, the images preserve an authentic quality while highlighting the subtle emotional landscapes of each subject."
  },
  {
    id: 6,
    title: "Digital Erosion",
    slug: "digital-erosion",
    category: "video",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    videos: [
      "https://example.com/videos/digital-erosion.mp4"
    ],
    description: "A video art piece exploring data corruption as a metaphor for memory loss.",
    date: "2021",
    details: "Digital Erosion is a video art project that uses intentional data corruption and glitch aesthetics to explore how digital and human memory systems degrade over time. By manipulating digital video files and introducing controlled errors into the code, the piece creates visual representations of memory fragmentation and loss. The work draws parallels between digital data corruption and the neurological processes of forgetting, questioning the reliability of both technological and biological storage systems."
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.isFeatured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};
