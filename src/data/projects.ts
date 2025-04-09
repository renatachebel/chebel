
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
    title: "Rainbow Road",
    slug: "rainbow-road",
    category: "performance",
    thumbnail: "/lovable-uploads/5f4d5626-adf0-4db0-80d6-a30e587d29c0.png",
    images: [
      "/lovable-uploads/5f4d5626-adf0-4db0-80d6-a30e587d29c0.png",
      "/lovable-uploads/dae137c3-671c-4b91-9bd8-da923b88eebd.png",
      "/lovable-uploads/d2645021-9b0a-4732-a173-52b213195fbb.png",
      "/lovable-uploads/45e8ba83-cbc1-47c7-80cb-4bbeb372eb63.png",
      "/lovable-uploads/73cab20e-4fb3-4b9f-86b5-756f03e640c4.png",
      "/lovable-uploads/817d7035-40d6-46a8-8ac6-516fd443d2c2.png",
      "/lovable-uploads/fecd718a-8f69-43c0-bdb1-66158697964c.png",
      "/lovable-uploads/3c188ff7-53c3-4c3c-b1fc-554c1d51c551.png",
      "/lovable-uploads/1f3cb08b-2975-460e-a165-9e924e6d5d14.png",
      "/lovable-uploads/473dc4c6-ed94-499c-b17d-81f826039d18.png",
      "/lovable-uploads/a30a9a0d-63fa-4e48-a789-93f7070b2c84.png",
      "/lovable-uploads/fca3b99a-9c6b-47ef-8b1f-81fe91824be7.png"
    ],
    description: "An innovative performance project blending urban exploration with digital art through a mobile projection setup.",
    date: "2023",
    location: "Various Urban Locations",
    isFeatured: true,
    details: "Rainbow Road is an innovative performance project by the creative duo Chebel and Microdosys, blending urban exploration with digital art through a mobile setup. Using a modified golf cart equipped with a projector, computer, and speakers, they navigate cityscapes, transforming ordinary surfaces into ephemeral canvases of AI-generated animations. This spontaneous, site-specific approach allows them to engage with the architectural and cultural textures of urban spaces, creating vivid, luminous interventions that challenge conventional notions of street art and digital media. Rainbow Road is a celebration of color, movement, and the transformative power of technology in reimagining public spaces, offering a fresh perspective on the intersections of art, architecture, and community engagement."
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
