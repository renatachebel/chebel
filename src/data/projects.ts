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
    id: 9,
    title: "Nature of Movement",
    slug: "nature-of-movement",
    category: "video",
    thumbnail: "/lovable-uploads/dcdb30d0-886d-4f6a-af0b-6d3302d70fbf.png",
    images: [
      "/lovable-uploads/dcdb30d0-886d-4f6a-af0b-6d3302d70fbf.png",
      "/lovable-uploads/43ab2d34-f5d6-450c-b8ba-566418603b5e.png",
      "/lovable-uploads/c078e88f-6bb8-45ea-9963-84ed4e580443.png",
      "/lovable-uploads/c487e156-de5a-429c-828c-fc254d16e183.png",
      "/lovable-uploads/f558032f-84a2-4027-bc64-46eb99383257.png",
      "/lovable-uploads/896b00de-b019-44bf-b5d7-43b17113128b.png",
      "/lovable-uploads/bc216de0-8f11-487a-97c2-fa72c440c089.png"
    ],
    youtubeId: "144IRpObrPQ",
    description: "An animation meditation on impermanence and nature created with the assistance of AI.",
    date: "2024",
    location: "Studio Production",
    isFeatured: true,
    details: "Nature of Movement is a meditative exploration of impermanence and the ever-changing forms found in nature. This animation project was created in 2024 with the assistance of artificial intelligence, blending traditional artistic direction with innovative AI-generated imagery.\n\nThe piece flows through a series of natural transformations - from vibrant flowers to erupting volcanoes, birds in flight to luminous jellyfish - creating a visual poem about the cyclical nature of existence. The vivid color palette and fluid transitions between scenes evoke both the fragility and resilience of natural systems.\n\nThis work stands at the intersection of traditional animation and emerging technologies, questioning how we perceive and relate to nature in an increasingly digital world. Through abstracted natural forms and dreamlike sequences, Nature of Movement invites viewers to contemplate their own relationship with the natural world and the constant state of change that defines all living things."
  },
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
    id: 5,
    title: "China Oddities",
    slug: "china-oddities",
    category: "photography",
    thumbnail: "/lovable-uploads/adc801b2-ec43-43f3-923d-51ffd89f78dc.png",
    images: [
      "/lovable-uploads/adc801b2-ec43-43f3-923d-51ffd89f78dc.png",
      "/lovable-uploads/89c07318-45e4-45b3-88a6-6b11ba3a5a19.png",
      "/lovable-uploads/d988d105-1a4f-4db3-a98e-1ea98ce80772.png",
      "/lovable-uploads/5e30d7f7-1f4b-42ae-b2e8-dba48dae497d.png",
      "/lovable-uploads/1969cdaf-32b4-4250-b9d2-79899ba1dd30.png",
      "/lovable-uploads/d6158253-4e99-4086-afb5-360cea161d9d.png",
      "/lovable-uploads/7205d517-277d-4f7e-937d-8033ecaec3e2.png",
      "/lovable-uploads/4406dddd-ef17-45fd-97b7-6632d4bf307c.png",
      "/lovable-uploads/dd43ff7b-e75d-4497-aab5-c566558b34ca.png",
      "/lovable-uploads/dd7c65a0-5adf-4c77-a6a5-5a89ca33298e.png",
      "/lovable-uploads/a8313227-9228-44a6-a000-23f7feed13bc.png",
      "/lovable-uploads/d88712a9-34ee-4c82-b9d4-8aaf804fa410.png",
      "/lovable-uploads/58a40465-1766-4959-9ac8-c7253bae2ddf.png",
      "/lovable-uploads/d98e8c80-479f-4d51-b1b0-69682f5c0208.png",
      "/lovable-uploads/ab8b15b6-434d-49cf-9876-bf483f84674d.png",
      "/lovable-uploads/681a1b08-f44b-4256-a95b-29587a7c0aa7.png",
      "/lovable-uploads/b5b20264-b522-45dc-ac05-cce919543d69.png",
      "/lovable-uploads/dbdbfbd4-93da-487a-974f-4ac6df752c82.png"
    ],
    description: "Film photographs taken during the Spring 2024 China tour of Mola Oddity, an indie Chinese band.",
    date: "2024",
    location: "Various cities, China",
    isFeatured: true,
    details: "China Oddities is a film photography series documenting the Spring 2024 tour of Mola Oddity, an innovative indie Chinese band. Captured while working as a projection artist for the band's performances, these intimate backstage and performance photographs reveal the creative energy and personal moments of the tour.\n\nInvited by VJ Suave, who created the visuals for the shows, I had unique access to document both the public performances and private moments of the artists. The series captures the distinctive aesthetic of China's underground music scene through film photography, emphasizing the raw emotion and authentic experiences of touring life.\n\nFrom backstage preparations and birthday celebrations to quiet moments between shows and the intensity of performances, these images provide a multi-faceted portrait of the band and their creative process. The distinctive hairstyles, makeup, and fashion choices reflect the band's unique artistic identity, while the candid interactions reveal the personal bonds formed during the intense experience of touring.\n\nChina Oddities serves as both an artistic documentation and a personal memento of this cultural exchange, showcasing the universal language of music and visual art across cultural boundaries."
  },
  {
    id: 7,
    title: "Tea in Alishan",
    slug: "tea-in-alishan",
    category: "photography",
    thumbnail: "/lovable-uploads/b66d3c6d-37db-4fb7-8c67-34bc6ae295ba.png",
    images: [
      "/lovable-uploads/b66d3c6d-37db-4fb7-8c67-34bc6ae295ba.png",
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
    title: "Lotus Bloom",
    slug: "lotus-bloom",
    category: "video",
    thumbnail: "/lovable-uploads/48318c35-23f6-4133-8c4a-69ba3191de23.png",
    images: [
      "/lovable-uploads/48318c35-23f6-4133-8c4a-69ba3191de23.png"
    ],
    youtubeId: "z8mfcIqVBWk",
    description: "A visual meditation on feminine beauty, strength, and the sacred power of stillness.",
    date: "2024",
    location: "Studio Production",
    isFeatured: true,
    details: "Lotus Bloom is a piece of visual poetry, a gentle ode to the feminine soul. Through the timeless symbol of the lotus flower—rising unstained from the mud—the film evokes the purity, strength, and mystery rooted in a woman's heart. It speaks of beauty that is not for display, but for belonging. A dream of harmony that women carry within, in contrast to a world shaped by conflict and conquest. In its stillness and grace, Lotus Bloom becomes a meditation on softness as power, on the sacred force of life that flows quietly, yet transforms everything."
  },
  {
    id: 8,
    title: "Lemniscata",
    slug: "lemniscata",
    category: "installation",
    thumbnail: "/lovable-uploads/ee3078d7-5b4f-4d6c-9d8e-7ebe0dc70280.png",
    images: [
      "/lovable-uploads/ee3078d7-5b4f-4d6c-9d8e-7ebe0dc70280.png",
      "/lovable-uploads/785c8727-fbbd-4916-8ab9-9d5c40c325c8.png",
      "/lovable-uploads/dce72565-3d5d-4da9-9e33-3b9085c6985e.png",
      "/lovable-uploads/ef0452fd-90a3-4271-9751-274291ac26af.png",
      "/lovable-uploads/cb52741f-f00d-403e-9aa3-5cc05fc7374f.png",
      "/lovable-uploads/710254b9-0729-4632-a65f-41c4ab012d71.png"
    ],
    description: "A generative art project that explores emotion, memory, and the feminine through the intersection of photography and AI.",
    date: "2024",
    location: "Bombay Beach Biennale, USA",
    isFeatured: true,
    details: "Lemniscata (from Latin \"decorated with ribbons\", also the mathematic symbol for infinite) is a generative art project that explores emotion, memory, and the feminine through the intersection of photography and AI. I trained a LoRA model on the abstract expressionist works of overlooked women painters—such as Lee Krasner, Elaine de Kooning, and Helen Frankenthaler—and applied it to photographs of women engaged in dance therapy (Danzamedicina, by Morena Cardoso). The result is a series of \"sintographs\": images that blend photographic presence with painterly, emotional abstraction.\n\nPrinted on fabric and embroidered by hand, these pieces reconnect the digital with the tactile. The project was presented at the Poetry House during the Bombay Beach Biennale 2024, where it featured a live embroidery performance as part of the installation."
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
