import { Project } from './types';

export const generativeArtProjects: Project[] = [
  {
    id: 1,
    title: "Sintography",
    slug: "sintography",
    category: ["generative-art", "installation", "performance"],
    thumbnail: "/lovable-uploads/Eden_creation_chebel65c32aa905ae24529751736f.jpg",
    description: "An evolving, multi-part body of work where photography, artificial intelligence, movement and ritual become a language of feeling.",
    date: "2024—ongoing",
    location: "Bombay Beach Biennale, USA",
    isFeatured: true,
    editorialSections: [
      {
        type: "text",
        id: "a-language-of-feeling",
        eyebrow: "01 — The idea",
        title: "To make images from what is felt",
        body: "\"Sintography\" is a word I coined by blending \"synthesis,\" \"photography,\" and the Portuguese word \"sinto\" — I feel. It is both a technique and a philosophy: to create images that emerge not from what is seen, but from what is felt. This project explores how memory, movement, and emotion can be transmuted into a new visual language.\n\nThe process began by training a LoRA model on the works of women from the Abstract Expressionist movement — artists like Lee Krasner, Elaine de Kooning, and Helen Frankenthaler, whose contributions were often overshadowed by their male counterparts. I then applied this aesthetic memory to my own photographic records of women in Danzamedicina, a method of dance therapy by Morena Cardoso that embraces emotional release through body movement.",
        image: "/lovable-uploads/Eden_creation_chebel65a61ad14c110cf4707f7326.jpg",
        imageAlt: "Sintography artwork in pink",
        imagePosition: "left"
      },
      {
        type: "gallery",
        id: "sintographs",
        eyebrow: "02 — Sintographs",
        title: "Emotion, movement and painterly memory",
        body: "The AI becomes a collaborator, filtering lived experience through the echoes of painterly gestures. The result is a series of images that feel like memories: visceral, intimate, infinite. Bodies melt into brushstrokes. Faces become sensations. Each photograph can be translated an infinite number of times into new images.",
        images: [
          "/lovable-uploads/8b9b86ac-cba5-4279-8fce-361f31e16d0b.png",
          "/lovable-uploads/6fdd2875-dad7-46dd-a4a6-070565d55017.png",
          "/lovable-uploads/c11672a4-bd32-462e-b2c6-d8d172d6661f.png",
          "/lovable-uploads/85351de7-55f2-4b46-800c-01888c2a1242.png",
          "/lovable-uploads/3d120b50-16e0-46e3-87cb-ce5bc2ec4d4c.png",
          "/lovable-uploads/377745d7-69ae-49f0-96b0-9e0c1938a403.png",
          "/lovable-uploads/f3ffdac0-d76e-4a87-8cd9-51d4de170d1c.png",
          "/lovable-uploads/1869a8ba-835a-4f87-a64d-02867e1f432d.png",
          "/lovable-uploads/005fca68-5ae5-4420-bdc5-536056f486f9.png",
          "/lovable-uploads/cd22f4a6-67d0-4dbc-9994-fab55d6e6716.png",
          "/lovable-uploads/0d514d00-6cc5-4403-820a-60ee038c4ef6.png",
          "/lovable-uploads/671f4553-32b4-499c-9437-344d9fa89c5c.png",
          "/lovable-uploads/7c01c807-50eb-4d7b-898a-2303f50dbfec.png",
          "/lovable-uploads/c2025c25-8326-448b-8d05-4c1ae85f98c0.png",
          "/lovable-uploads/Eden_creation_chebel65c2b2f00335fa57d2793ea0.jpg",
          "/lovable-uploads/Eden_creation_chebel65c32f1205ae245297580cec.jpg",
          "/lovable-uploads/Eden_creation_chebel65c150b70335fa57d291f958.jpg",
          "/lovable-uploads/Eden_creation_chebel661d04d23a1b516798bff7fb.jpg",
          "/lovable-uploads/Eden_creation_chebel6617c6ae6513250cad9078b7.jpg",
          "/lovable-uploads/Eden_creation_gene65e54d55449fd2bade121405.jpg"
        ]
      },
      {
        type: "quote",
        text: "It is not a documentation — it is a transmutation."
      },
      {
        type: "text",
        id: "lemniscata",
        eyebrow: "03 — A chapter of Sintography",
        title: "Lemniscata",
        body: "Lemniscata — from the Latin for \"decorated with ribbons,\" and a name associated with the mathematical symbol for infinity — is the installation and performance chapter of Sintography. The sintographs were printed at large scale on fabric and embroidered by hand, reconnecting the digital image with touch, ritual and duration.\n\nPresented at the Poetry House during the 2024 Bombay Beach Biennale, the installation unfolded through live embroidery, a tea ceremony and a red-thread ritual. These gestures wove presence into the images, honored lineages of forgotten feminine expression and invited viewers to feel rather than interpret."
      },
      {
        type: "gallery",
        id: "lemniscata-installation",
        eyebrow: "04 — Installation and performance",
        title: "Poetry House, Bombay Beach Biennale",
        body: "The physical installation brings Sintography into space: images become surfaces, threads become drawings, and the act of making remains visible as part of the work.",
        images: [
          "/lovable-uploads/lemniscata/lemniscata-01.jpg",
          "/lovable-uploads/lemniscata/lemniscata-02.jpg",
          "/lovable-uploads/lemniscata/lemniscata-03.jpg",
          "/lovable-uploads/lemniscata/lemniscata-04.jpg",
          "/lovable-uploads/lemniscata/lemniscata-05.jpg",
          "/lovable-uploads/lemniscata/lemniscata-06.jpg",
          "/lovable-uploads/lemniscata/lemniscata-07.jpg",
          "/lovable-uploads/lemniscata/lemniscata-08.jpg",
          "/lovable-uploads/lemniscata/lemniscata-09.jpg",
          "/lovable-uploads/lemniscata/lemniscata-10.jpg"
        ]
      }
    ]
  }
];
