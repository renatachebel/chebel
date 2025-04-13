
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

export const projects: Project[] = [
  {
    id: 3,
    title: "Temple of Reflections",
    slug: "temple-of-reflections",
    category: "installation",
    thumbnail: "/lovable-uploads/71805de8-4376-4aee-ae83-492aa3ec5f8b.png",
    images: [
      "/lovable-uploads/5a223aa9-973a-4b6d-a184-b9ea9abd258c.png",
      "/lovable-uploads/38b192ad-272c-4956-83c6-c9fa8f64592c.png",
      "/lovable-uploads/71805de8-4376-4aee-ae83-492aa3ec5f8b.png",
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
    id: 2,
    title: "Rainbow Road",
    slug: "rainbow-road",
    category: "performance",
    thumbnail: "/lovable-uploads/473dc4c6-ed94-499c-b17d-81f826039d18.png",
    images: [
      "/lovable-uploads/1f3cb08b-2975-460e-a165-9e924e6d5d14.png",
      "/lovable-uploads/a30a9a0d-63fa-4e48-a789-93f7070b2c84.png",
      "/lovable-uploads/305ec59d-58f9-4451-82a5-fd623c57608b.png",
      "/lovable-uploads/dae137c3-671c-4b91-9bd8-da923b88eebd.png",
      "/lovable-uploads/d2645021-9b0a-4732-a173-52b213195fbb.png",
      "/lovable-uploads/45e8ba83-cbc1-47c7-80cb-4bbeb372eb63.png",
      "/lovable-uploads/73cab20e-4fb3-4b9f-86b5-756f03e640c4.png",
      "/lovable-uploads/817d7035-40d6-46a8-8ac6-516fd443d2c2.png",
      "/lovable-uploads/fecd718a-8f69-43c0-bdb1-66158697964c.png",
      "/lovable-uploads/3c188ff7-53c3-4c3c-b1fc-554c1d51c551.png",
      "/lovable-uploads/473dc4c6-ed94-499c-b17d-81f826039d18.png",
      "/lovable-uploads/fca3b99a-9c6b-47ef-8b1f-81fe91824be7.png"
    ],
    description: "An innovative performance project blending urban exploration with digital art through a mobile projection setup.",
    date: "2023",
    location: "Various Urban Locations",
    isFeatured: true,
    details: "Rainbow Road is an innovative performance project by the creative duo Chebel and Microdosys, blending urban exploration with digital art through a mobile setup. Using a modified golf cart equipped with a projector, computer, and speakers, they navigate cityscapes, transforming ordinary surfaces into ephemeral canvases of AI-generated animations. This spontaneous, site-specific approach allows them to engage with the architectural and cultural textures of urban spaces, creating vivid, luminous interventions that challenge conventional notions of street art and digital media. Rainbow Road is a celebration of color, movement, and the transformative power of technology in reimagining public spaces, offering a fresh perspective on the intersections of art, architecture, and community engagement."
  },
  {
    id: 7,
    title: "Tea in Alishan",
    slug: "tea-in-alishan",
    category: "photography",
    thumbnail: "/lovable-uploads/3105e6a8-6ceb-470b-8361-e8fcc22842d2.png",
    images: [
      "/lovable-uploads/6610a44c-0bf0-4095-a930-3d55b96b6a0c.png",
      "/lovable-uploads/e9fd3534-70fe-4f69-a753-a71fb0ad6a55.png",
      "/lovable-uploads/8ca0764c-f22e-4bac-8c82-c863efceb0fe.png",
      "/lovable-uploads/0cad1113-ae7c-4a02-9531-99eb4572854b.png",
      "/lovable-uploads/207db551-3ac5-4b6d-abad-1b9b2871efeb.png",
      "/lovable-uploads/3105e6a8-6ceb-470b-8361-e8fcc22842d2.png",
      "/lovable-uploads/1b6b1596-2b7c-4bfb-b8b8-c57772906546.png",
      "/lovable-uploads/173c7b65-efc0-427e-b3cf-b897967e3234.png",
      "/lovable-uploads/667e80bf-3e7a-4f84-abfb-5f774b6a5bde.png",
      "/lovable-uploads/5a560595-8fc4-46a1-9321-5b992ec467ab.png",
      "/lovable-uploads/fe0ee64c-dd7c-47d4-bf1a-c26de46a4bd9.png",
      "/lovable-uploads/b497512a-615d-4fd7-998b-4a700e1135ff.png"
    ],
    description: "A photographic series documenting tea harvesters at work in the misty mountains of Alishan, Taiwan.",
    date: "2024",
    location: "Alishan, Taiwan",
    isFeatured: true,
    details: "Tea in Alishan is a photographic documentation of the traditional tea cultivation in Taiwan's famous Alishan mountain region. The series captures both the breathtaking landscape of the mountain tea gardens and the meticulous labor of the tea harvesters as they work among the shrubs. \n\nAlishan is renowned for producing some of Taiwan's finest high mountain oolong teas, grown at elevations above 1,000 meters where cloud cover and cooler temperatures create ideal growing conditions. The photographs reveal the harmonious relationship between the tea farmers and their environment, highlighting the manual harvesting process that has been preserved for generations.\n\nThe series contrasts the ethereal beauty of the misty mountain landscapes with intimate portraits of the harvesters, their faces often shaded by traditional wide-brimmed hats as they carefully pick only the most tender leaves. These images tell a story of cultural heritage, sustainable agriculture, and the human connection to the land that produces one of Taiwan's most celebrated exports."
  },
  {
    id: 4,
    title: "Bodies of Water",
    slug: "bodies-of-water",
    category: "photography",
    thumbnail: "/lovable-uploads/1e079f5c-77f7-4c43-8042-7dd01e4148fb.png",
    images: [
      "/lovable-uploads/1e079f5c-77f7-4c43-8042-7dd01e4148fb.png",
      "/lovable-uploads/8a7680d1-2fc0-456f-b955-33767441ebf3.png",
      "/lovable-uploads/75f24e59-17c0-4385-82d0-b98249c74d91.png",
      "/lovable-uploads/a49feb8e-b03b-4dc7-b716-6c15a8079820.png",
      "/lovable-uploads/6d6c8b74-aacb-49d3-862c-35cc26fac98d.png",
      "/lovable-uploads/3ae22ddd-6f02-4e21-80ef-d8119a0b4dfa.png",
      "/lovable-uploads/fb933b00-dd92-4f27-bd72-f197fd1755fe.png",
      "/lovable-uploads/9759659d-efbc-4345-af64-ef99c7a4e79b.png",
      "/lovable-uploads/1224295e-55b3-4f3a-bed7-74679883a0f6.png",
      "/lovable-uploads/645b21aa-11eb-4341-a206-b7632e6f1923.png",
      "/lovable-uploads/1bed1a9b-1164-48a9-9a40-77d6cfd06fc5.png",
      "/lovable-uploads/012f6e0c-87c7-4ed1-87c8-d16e7994149b.png",
      "/lovable-uploads/5690c88e-7689-4d2e-8c13-0aa99e762d1d.png",
      "/lovable-uploads/2f3ddaaa-4c01-49af-a829-c3ebbcafee12.png",
      "/lovable-uploads/752e5aaf-0bd2-40be-8b96-a197460a7035.png"
    ],
    description: "A photographic series honoring women where the river meets the ocean in Serra Grande, Bahia, Brazil.",
    date: "2023",
    location: "Serra Grande, Bahia, Brazil",
    isFeatured: true,
    details: "Bodies of Water is a photographic series celebrating the sacred connection between women and water at the meeting point of river and ocean in Serra Grande, Bahia, Brazil. The project explores the metaphor of the ocean as the womb of life: if Earth is our mother, the ocean is our grandmother.\n\nThis intimate series captures women in moments of communion with water, embracing its transformative and healing properties. The images evoke ancient rituals and the innate bond between the female body and water's fluid, life-giving nature. Shot at the transitional space where freshwater meets saltwater, the photographs symbolize the cyclical nature of existence and fertility.\n\nThe project documents both individual moments of contemplation and collective ceremonies, highlighting the supportive community formed by these women. With careful attention to light, shadow, and the reflective qualities of water, the photographs create a dreamlike atmosphere that speaks to the spiritual dimensions of this connection.\n\nBodies of Water invites viewers to contemplate our origins and the deep, ancestral connections we share with Earth's waters, reminding us of water's role as the primordial source from which all life emerges."
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
  },
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
