
import { Project } from './types';

const chinaOdditiesImages = [
  "/lovable-uploads/6600ae80-974a-4a12-aa00-87ac40c0fc4b.png",
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
  "/lovable-uploads/dbdbfbd4-93da-487a-974f-4ac6df752c82.png",
];

export const photographyProjects: Project[] = [
  {
    id: 5,
    title: "The Other Side of Hope Tour — Mola Oddity",
    slug: "the-other-side-of-hope-tour-mola-oddity",
    category: ["video", "vj", "projection-mapping", "generative-art"],
    thumbnail: "/lovable-uploads/mola-oddity-tour/cover.jpg",
    images: chinaOdditiesImages,
    description: "Live visual performance, color remixing and documentary work across Mola Oddity's 2024 China tour.",
    date: "2024",
    location: "China — Shanghai to Chengdu",
    isFeatured: true,
    details: "Live VJ performance, visual remixing, tour documentation and a short documentary created during Mola Oddity's 2024 China tour.",
    editorialSections: [
      {
        type: "video",
        id: "tour-documentary",
        eyebrow: "01 — Short documentary",
        title: "The tour from the inside",
        body: "Alongside the live visual work, I documented the journey and the life around the performances. I directed and edited this short documentary as an intimate record of the band, the people travelling with it and the shifting atmosphere of the tour.",
        youtubeId: "Q9CwRnuPFeM",
        caption: "Documentation, direction and editing by Renata Chebel"
      },
      {
        type: "text",
        id: "my-role",
        eyebrow: "02 — Visual direction and performance",
        title: "Color as a live instrument",
        body: "I joined Mola Oddity's The Other Side of Hope tour across China to extend VJ Suave's animation system into the specific emotional world of each song. For the main concerts, I remixed the colors of the animations song by song, reshaping their palettes while preserving the hand-drawn visual language.\n\nDuring the club circuit I performed the visuals live. I layered multiple effects, built feedback loops and routed the animation material through a virtual modular video synthesizer. The image was never a fixed playback: it was mixed in real time with the same responsiveness as an instrument.",
        image: "/lovable-uploads/mola-oddity-tour/poster.jpg",
        imageAlt: "Poster for Mola Oddity's The Other Side of Hope China tour",
        imagePosition: "right",
        caption: "The Other Side of Hope tour poster"
      },
      {
        type: "gallery",
        id: "main-tour",
        eyebrow: "03 — Concert and festival circuit",
        title: "From Shanghai to Chengdu",
        body: "The main tour opened on 29 March 2024 at Bandai Namco Shanghai Dream Hall and continued through Shenzhen, Guangzhou, Nanjing, Hangzhou, Beijing and Chengdu. Festival appearances included Strawberry Music Festival in Fuzhou and Hangzhou, and Chun You Music Festival in Chengdu.",
        images: [
          "/lovable-uploads/mola-oddity-tour/shanghai-01.jpg",
          "/lovable-uploads/mola-oddity-tour/shanghai-02.jpg",
          "/lovable-uploads/mola-oddity-tour/fuzhou-01.jpg",
          "/lovable-uploads/mola-oddity-tour/fuzhou-02.jpg",
          "/lovable-uploads/mola-oddity-tour/chengdu-soundcheck.jpg",
          "/lovable-uploads/mola-oddity-tour/chengdu-live.jpg"
        ],
        imageAlts: [
          "Mola Oddity performing with projected animation in Shanghai",
          "The Other Side of Hope opening concert in Shanghai",
          "Mola Oddity performing at Strawberry Music Festival in Fuzhou",
          "Backstage at Strawberry Music Festival in Fuzhou",
          "Chun You Music Festival soundcheck in Chengdu",
          "Mola Oddity performing at Chun You Music Festival in Chengdu"
        ],
        imageCaptions: [
          "Bandai Namco Shanghai Dream Hall — photo: BeiBei",
          "Opening concert, Shanghai — photo: BeiBei",
          "Strawberry Music Festival, Fuzhou",
          "Backstage at Strawberry Music Festival, Fuzhou",
          "Chun You soundcheck, Chengdu — photo: Renata Chebel",
          "Chun You Music Festival, Chengdu — photo: Renata Chebel"
        ],
        caption: "Tour archive supplied by Ygor Marotta / VJ Suave; individual credits shown where available."
      },
      {
        type: "gallery",
        id: "animation-system",
        eyebrow: "04 — Source animation",
        title: "A visual world for eighteen songs",
        body: "The tour's hand-drawn characters, animals, rainbows and changing environments formed a modular image archive for the performances. The animations were created by Paulo Stoker and Ygor Marotta, with assistance from Lucas Fiacadori. I developed the color treatments used across the songs and transformed this material further in the live mix.",
        images: [
          "/lovable-uploads/mola-oddity-tour/animation-butterfly.gif",
          "/lovable-uploads/mola-oddity-tour/animation-fox.gif"
        ],
        imageAlts: [
          "Colorful butterfly animation made for Mola Oddity's tour",
          "Fox in Eden animation made for Mola Oddity's tour"
        ],
        imageCaptions: [
          "Colorful butterfly",
          "Fox in Eden"
        ],
        caption: "Animation source material by VJ Suave / Paulo Stoker and Ygor Marotta. Color treatments and live processing by Renata Chebel."
      },
      {
        type: "video",
        id: "live-look-process",
        title: "Building the live look",
        body: "This process recording shows how I remixed the animation archive into a live visual system: changing color relationships, layering effects, generating feedback loops and routing the image through a virtual modular video synthesizer.",
        videoSrc: "/lovable-uploads/mola-oddity-tour/mola-oddity-tour-visuals-process-reel.mp4",
        caption: "Visual remix and live-system process by Renata Chebel"
      },
      {
        type: "text",
        id: "lofi-mosh",
        eyebrow: "05 — Club circuit",
        title: "LOFi MOSH — 9 Days of Dreamcore Aquarium",
        body: "Running parallel to the concerts and festivals was a second route through China's electronic club scene: ALL Club in Shanghai, LOOPY in Hangzhou, OIL in Shenzhen, Pillbox in Beijing and AXIS in Chengdu.\n\nThe more electronic sets called for another visual language. Instead of following a predetermined concert sequence, I improvised with VJ Suave's animation archive, live effects, feedback and modular video synthesis. Each night produced a different, unstable composition.",
        image: "/lovable-uploads/adc801b2-ec43-43f3-923d-51ffd89f78dc.png",
        imageAlt: "A candid film photograph made during the Mola Oddity tour in China",
        imagePosition: "left",
        caption: "From the China Oddities film photography series"
      },
      {
        type: "gallery",
        id: "china-oddities",
        eyebrow: "06 — Photographic chapter",
        title: "China Oddities",
        body: "China Oddities is the photographic diary inside the larger tour project. Shot on film while travelling and working with the band, the series moves away from the scale of the stage and toward backstage preparation, birthdays, quiet moments between cities and the personal textures of touring life.",
        images: chinaOdditiesImages,
        caption: "Film photography by Renata Chebel"
      },
      {
        type: "text",
        id: "credits",
        eyebrow: "07 — Credits",
        title: "A travelling collaboration",
        body: "Color remixing, live VJ performance, tour documentation, documentary direction and editing: Renata Chebel.\n\nOriginal visual world and animation archive: VJ Suave. Animations by Paulo Stoker and Ygor Marotta, with assistance from Lucas Fiacadori.\n\nTour: The Other Side of Hope by Mola Oddity, with Amber Kuo (Kuo Tsai-chieh)."
      }
    ]
  },
  {
    id: 7,
    title: "Tea in Alishan",
    slug: "tea-in-alishan",
    category: ["photography"],
    thumbnail: "/lovable-uploads/849b9bdb-8012-47d4-95ea-68ed3a0ccf88.png",
    images: [
      "/lovable-uploads/849b9bdb-8012-47d4-95ea-68ed3a0ccf88.png",
      "/lovable-uploads/fcb4c332-296b-4509-81a9-5cd10e2bc227.png",
      "/lovable-uploads/20d09be6-8cbf-4422-9b2a-2600f34759cb.png",
      "/lovable-uploads/e7525ce0-49d7-4d49-b7e6-6382641514e2.png",
      "/lovable-uploads/ff90c619-749d-4593-8cf9-8e4161765a82.png",
      "/lovable-uploads/50deb3f6-c77e-46b9-8730-ff51bd0eac1d.png",
      "/lovable-uploads/9fa6eea9-5010-49af-8a62-d9adc4d63e58.png",
      "/lovable-uploads/db8abf6c-5120-4f25-8274-a87e812a0162.png",
      "/lovable-uploads/8bac6e12-2842-4ab4-aa72-c8b1b3b65d34.png",
      "/lovable-uploads/3d600437-fb3d-47a9-8397-b81dd6cf38ae.png",
      "/lovable-uploads/23bcc1fe-6447-48be-ae58-18f55e923b30.png",
      "/lovable-uploads/ffc6df2c-6bfd-43c5-b33d-e412c08d8684.png",
      "/lovable-uploads/0f9f1de5-b219-4992-a345-49592e786f58.png",
      "/lovable-uploads/8b3f262a-6749-4bdf-81e2-9b6b3a68cad6.png",
      "/lovable-uploads/5b818785-b50f-4ae3-a214-e2d6c01d3071.png"
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
    category: ["photography"],
    thumbnail: "/lovable-uploads/1e079f5c-77f7-4c43-8042-7dd01e4148fb.png",
    images: [
      "/lovable-uploads/1e079f5c-77f7-4c43-8042-7dd01e4148fb.png",
      "/lovable-uploads/8a7680d1-2fc0-456f-b955-33767441ebf3.png",
      "/lovable-uploads/75f24e59-17c0-4385-82d0-b98249c74d91.png",
      "/lovable-uploads/6d6c8b74-aacb-49d3-862c-35cc26fac98d.png",
      "/lovable-uploads/3ae22ddd-6f02-4e21-80ef-d8119a0b4dfa.png",
      "/lovable-uploads/fb933b00-dd92-4f27-bd72-f197fd1755fe.png",
      "/lovable-uploads/1224295e-55b3-4f3a-bed7-74679883a0f6.png",
      "/lovable-uploads/645b21aa-11eb-4341-a206-b7632e6f1923.png",
      "/lovable-uploads/1bed1a9b-1164-48a9-9a40-77d6cfd06fc5.png",
      "/lovable-uploads/012f6e0c-87c7-4ed1-87c8-d16e7994149b.png",
      "/lovable-uploads/5690c88e-7689-4d2e-8c13-0aa99e762d1d.png",
      "/lovable-uploads/752e5aaf-0bd2-40be-8b96-a197460a7035.png"
    ],
    description: "A photographic series honoring women where the river meets the ocean in Serra Grande, Bahia, Brazil.",
    date: "2021",
    location: "Serra Grande, Bahia, Brazil",
    isFeatured: true,
    details: "Bodies of Water is a photographic series celebrating the sacred connection between women and water at the meeting point of river and ocean in Serra Grande, Bahia, Brazil. The project explores the metaphor of the ocean as the womb of life: if Earth is our mother, the ocean is our grandmother.\n\nThis intimate series captures women in moments of communion with water, embracing its transformative and healing properties. The images evoke ancient rituals and the innate bond between the female body and water's fluid, life-giving nature. Shot at the transitional space where freshwater meets saltwater, the photographs symbolize the cyclical nature of existence and fertility.\n\nThe project documents both individual moments of contemplation and collective ceremonies, highlighting the supportive community formed by these women. With careful attention to light, shadow, and the reflective qualities of water, the photographs create a dreamlike atmosphere that speaks to the spiritual dimensions of this connection.\n\nBodies of Water invites viewers to contemplate our origins and the deep, ancestral connections we share with Earth's waters, reminding us of water's role as the primordial source from which all life emerges."
  }
];
