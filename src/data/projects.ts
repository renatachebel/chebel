
export interface Project {
  id: number;
  title: string;
  slug: string;
  category: 'photography' | 'video' | 'installation' | 'performance' | 'generative-art';
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
    title: "Sintography",
    slug: "sintography",
    category: "generative-art",
    thumbnail: "/lovable-uploads/b7f0775c-9f85-42e9-b7b5-a631b5cad119.png",
    images: [
      "/lovable-uploads/b7f0775c-9f85-42e9-b7b5-a631b5cad119.png",
      "/lovable-uploads/8b9b86ac-cba5-4279-8fce-361f31e16d0b.png",
      "/lovable-uploads/6fdd2875-dad7-46dd-a4a6-070565d55017.png",
      "/lovable-uploads/c11672a4-bd32-462e-b2c6-d8d172d6661f.png"
    ],
    description: "A series of abstract generative artworks exploring movement and emotion through digital and traditional techniques.",
    date: "2023",
    location: "Digital Exhibition",
    isFeatured: true,
    details: "Sintography is an ongoing exploration of the intersection between traditional figurative art and computational processes. Each piece begins as a digital sketch that undergoes multiple transformations through custom algorithms, creating unique compositions that retain the essence of human movement while embracing digital abstraction. The vibrant color palette and flowing lines create a sense of motion and emotional resonance that challenges the boundaries between digital and physical art forms."
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
    thumbnail: "/lovable-uploads/9c4727bb-a9f6-4b6c-acb6-a4929a4d35ad.png",
    images: [
      "/lovable-uploads/9c4727bb-a9f6-4b6c-acb6-a4929a4d35ad.png",
      "/lovable-uploads/5a223aa9-973a-4b6d-a184-b9ea9abd258c.png",
      "/lovable-uploads/38b192ad-272c-4956-83c6-c9fa8f64592c.png",
      "/lovable-uploads/c7e6acc7-c0e5-41f9-8825-7cdc3a0f5ec1.png",
      "/lovable-uploads/fa21f2f7-736f-4054-8476-2fee184be0f2.png",
      "/lovable-uploads/45032f19-4e58-4712-ac6c-7ada0d23ec61.png",
      "/lovable-uploads/b4878044-cd1b-4778-8fb5-2f695f4057c2.png"
    ],
    youtubeId: "cLByxbJQGBY",
    description: "An immersive installation created in Taiwan in collaboration with Ygor Marotta.",
    date: "2024",
    location: "Taiwan",
    isFeatured: true,
    details: "Inspired by Taiwanese diverse religious practices and philosophies, Temple of Reflections is an AI powered sanctuary for inner reflection, where you can chat to an entity versed on Buddhism, Taoism, Confucianism, and local folk beliefs.\n\nVisitors can also see their image mirrored on the front wall as either the goddess of mercy Guanyin, the philosopher Confucius, or Buddha.\n\nEvery interaction with the entity generates new images on the sidewalls inspired by the conversation. When visitors say good bye the entity generates a short poem summarizing the theme of the interaction.\n\nCreated by the Brazilian artists Renata Chebel and Ygor Marotta. The artists researched local temples and the vibrant Taiwanese imagery, then fine tuned an AI model with their own work to create a unique style for generating images.\n\nThe generative installation was first presented at Taiwan Technology and Culture Expo 2024 and can be adapted to a diverse cultural backgrounds.\n\nTouchDesigner collaborator: Sarah Ahab\nTechnical support: @dotsimulate, Revlis Huang, Vincent Naples\nLoRA trainer: Eden.art\nThanks: Dimension Plus, Pier-2 Art in Residency"
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
