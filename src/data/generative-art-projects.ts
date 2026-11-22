import { Project } from './types';

export const generativeArtProjects: Project[] = [
  {
    id: 1,
    title: "Sintography",
    slug: "sintography",
    category: ["generative-art", "installation", "performance", "photography"],
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
        body: "\"Sintography\" is a word I coined by blending \"synthesis,\" \"photography,\" and the Portuguese word \"sinto\" — I feel. It names both a technique and a philosophy: images emerge from what is felt rather than only from what is seen.\n\nThe project began with a historical parallel. Photography took decades to gain recognition as art. Its arrival freed painting from the demand to imitate reality and helped make abstraction possible. As AI began changing image-making, that history became a way to ask what new visual language might emerge."
      },
      {
        type: "gallery",
        id: "women-in-abstraction",
        eyebrow: "02 — The research question",
        title: "Where are the women?",
        body: "Canonical accounts of Abstract Expressionism often foreground Jackson Pollock, Willem de Kooning and Mark Rothko. The research turned instead to women whose contributions were frequently overshadowed: Helen Frankenthaler, Grace Hartigan, Elaine de Kooning and Lee Krasner, alongside Mary Abbott, Sonia Gechtoff, Judith Godwin, Perle Fine, Deborah Remington, Joan Mitchell, Jay DeFeo and others.",
        images: [
          "/lovable-uploads/sintography-story/artist-helen-frankenthaler.jpg",
          "/lovable-uploads/sintography-story/artist-grace-hartigan.jpg",
          "/lovable-uploads/sintography-story/artist-elaine-de-kooning.jpg",
          "/lovable-uploads/sintography-story/artist-lee-krasner.jpg"
        ],
        imageAlts: [
          "Helen Frankenthaler working in her studio",
          "Grace Hartigan with her work",
          "Elaine de Kooning with her work",
          "Lee Krasner working in her studio"
        ],
        imageCaptions: [
          "Helen Frankenthaler",
          "Grace Hartigan",
          "Elaine de Kooning",
          "Lee Krasner"
        ],
        caption: "Detailed artwork and photographic source credits to be completed."
      },
      {
        type: "text",
        id: "training-the-model",
        eyebrow: "03 — Building the training archive",
        title: "More than 200 images, more than 10 models",
        body: "The training archive brought together more than 200 images by around 15 women painters who had already died. Each source image was upscaled, then selectively cropped into 1024-pixel squares. A single painting could generate several training samples by isolating different passages, gestures and densities.\n\nI trained more than ten versions of the concept before finding a visual behavior that could hold abstraction, photography and emotion in the same image.",
        image: "/lovable-uploads/sintography-story/training-concepts.jpg",
        imageAlt: "A grid of model training experiments using women Abstract Expressionist painters",
        imagePosition: "right",
        caption: "Concept training experiments in Eden"
      },
      {
        type: "gallery",
        id: "frankenthaler-crop-study",
        eyebrow: "04 — Preparing the dataset",
        title: "One painting, many training images",
        body: "This study uses a painting by Helen Frankenthaler. The complete image becomes several distinct training samples when different sections are selected and cropped. The process teaches the model through color, texture and gesture rather than through the painting as a single fixed composition.",
        images: [
          "/lovable-uploads/sintography-story/frankenthaler-crop-study-01.jpg",
          "/lovable-uploads/sintography-story/frankenthaler-crop-study-02.jpg",
          "/lovable-uploads/sintography-story/frankenthaler-crop-study-03.jpg"
        ],
        imageAlts: [
          "A painting by Helen Frankenthaler used in the training archive",
          "First square crop selected from the Helen Frankenthaler painting",
          "Second square crop selected from the Helen Frankenthaler painting"
        ],
        imageCaptions: [
          "Helen Frankenthaler painting — exact artwork and source credit to be added",
          "Selected crop 01",
          "Selected crop 02"
        ]
      },
      {
        type: "gallery",
        id: "source-photography",
        eyebrow: "05 — Source photography",
        title: "Danzamedicina",
        body: "The second archive came from my photographs of women taking part in Danzamedicina, Morena Cardoso's dance-therapy practice. The sessions use movement, touch and emotional release to challenge the ways women are conditioned to inhabit and control their bodies. These photographs hold the gestures, relationships and moments of intensity that the model later translates.",
        images: [
          "/lovable-uploads/sintography-story/source-danzamedicina-01.jpg",
          "/lovable-uploads/sintography-story/source-danzamedicina-02.jpg",
          "/lovable-uploads/sintography-story/source-danzamedicina-03.jpg",
          "/lovable-uploads/sintography-story/source-danzamedicina-04.jpg"
        ],
        imageAlts: [
          "Danzamedicina participant moving during a session",
          "Danzamedicina participant holding red thread",
          "A group of Danzamedicina participants moving together",
          "Danzamedicina participants connected by red thread"
        ],
        caption: "Photography by Renata Chebel · Danzamedicina by Morena Cardoso"
      },
      {
        type: "gallery",
        id: "first-transformations",
        eyebrow: "06 — Translation",
        title: "From photograph to Sintograph",
        body: "The trained model becomes a collaborator. It passes the photographic archive through a composite memory of painterly gestures, producing images that remain connected to lived experience while refusing straightforward documentation.",
        images: [
          "/lovable-uploads/sintography-story/transformation-01.jpg",
          "/lovable-uploads/sintography-story/transformation-02.jpg",
          "/lovable-uploads/sintography-story/transformation-03.jpg",
          "/lovable-uploads/sintography-story/transformation-04.jpg"
        ],
        imageAlts: [
          "Sintograph of two figures connected with red thread",
          "Sintograph of a group moving through a pink space",
          "Sintograph of a reclining figure in pale colors",
          "Sintograph of intertwined figures and red thread"
        ]
      },
      {
        type: "gallery",
        id: "sintographs",
        eyebrow: "07 — The expanding series",
        title: "Emotion, movement and painterly memory",
        body: "The images feel like memories: visceral, intimate and unstable. Bodies melt into brushstrokes. Faces become sensations. Each photograph can be translated an infinite number of times, so the project remains open rather than resolving into one final image.",
        images: [
          "/lovable-uploads/Eden_creation_chebel65a61ad14c110cf4707f7326.jpg",
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
        type: "text",
        id: "lemniscata",
        eyebrow: "08 — A chapter of Sintography",
        title: "Lemniscata",
        body: "Lemniscata — from the Latin for \"decorated with ribbons,\" and a name associated with the mathematical symbol for infinity — is the installation and performance chapter of Sintography. The sintographs were printed at large scale on fabric and embroidered by hand, reconnecting the digital image with touch, ritual and duration.\n\nPresented at the Poetry House during the 2024 Bombay Beach Biennale, the installation unfolded through live embroidery, a tea ceremony and a red-thread ritual. These gestures wove presence into the images, honored lineages of forgotten feminine expression and invited viewers to feel rather than interpret."
      },
      {
        type: "gallery",
        id: "lemniscata-installation",
        eyebrow: "09 — Installation and performance",
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
