// —————————————————————————————— Global ——————————————————————————————
// —————————— Products Data ——————————
const products = [
  {
    id: "beach-hair-wash",
    name: "Beach Hair Wash",
    price: 25.95,
    size: "250ml / bottle",
    category: "Shampoo",
    brand: "Beach",
    inStock: true,

    keywords: [
      "shampoo",
      "wash",
      "beach",
      "cleanse",
      "dry hair",
      "scalp care"
    ],

    images: {
      card: "images/products/Beach Hair Wash/1.jpg",
      hover: "images/products/Beach Hair Wash/2.jpg",

      gallery: [
        "images/products/Beach Hair Wash/1.jpg",
        "images/products/Beach Hair Wash/2.jpg",
        "images/products/Beach Hair Wash/3.jpg",
        "images/products/Beach Hair Wash/4.jpg",
        "images/products/Beach Hair Wash/5.jpg"
      ],

      description: [
        "images/products/Beach Hair Wash/Description 1.jpg",
        "images/products/Beach Hair Wash/Description 2.jpg"
      ],

      application: [
        "images/products/Beach Hair Wash/3.jpg",
        "images/products/Beach Hair Wash/4.jpg"
      ]
    },

    shortDescription:
      "The yin to Beach Rinse's yang Beach Wash is your dream vacation. Did I say dream vacation? I meant shampoo. But use it once and you'll see what I mean. It smells the way that private cabana on that private beach with those coconut-shell-drinks-with-the-little-umbrellas-in-them feels.",

    benefits: [
      "· Nourishing",
      "· Foamy",
      "· Luxurious wash",
      "· Gently cleanses the hair and scalp",
      "· Promotes healthy growth",
      "· Kusco-Murphy Kelp",
      "· Natural shine",
      "· Unique formula",
      "· Rich lather",
      "· Leaves the hair clean",
      "· Moisturising",
      "· Adds vitamins to rejuvenate",
      "· Bergamot essential oil",
      "· Coconut",
      "· Kelp extract to strengthen your hair",
      "· Vanilla",
      "· No Sulphates"
    ],

    description: {
      title:
        "Beach Hair Wash gently cleanses while maintaining moisture and shine.",

      paragraphs: [
        "Kusco-Murphy's Beach Wash shampoo adds vitamins to rejuvenate and kelp extract to strengthen your hair.",
        "Essential oils of Bergamot, coconut and vanilla gently cleanse the hair and scalp whist promoting healthy growth and natural shine. A unique formula, with a rich lather, leaving the hair clean, moisturized and naturally shiny.",
        "We formulate our product without Sulphates and never test it on animals."
      ]
    },

    application: {
      title: "Simply apply to wet hair, work through and rinse with water.",
      paragraphs: [
        "For best results follow with Beach Hair Rinse."
      ]
    },

    goesWellWith: [
      "beach-hair-rinse"
    ]
  },

  {
    id: "beach-hair-rinse",
    name: "Beach Hair Rinse",
    price: 25.95,
    size: "250ml / bottle",
    category: "Conditioner",
    brand: "Beach",
    inStock: true,

    keywords: [
      "conditioner",
      "rinse",
      "beach",
      "dry hair",
      "moisture",
      "repair"
    ],

    images: {
      card: "images/products/Beach Hair Rinse/1.jpg",
      hover: "images/products/Beach Hair Rinse/2.jpg",

      gallery: [
        "images/products/Beach Hair Rinse/1.jpg",
        "images/products/Beach Hair Rinse/2.jpg",
        "images/products/Beach Hair Rinse/3.jpg",
        "images/products/Beach Hair Rinse/4.jpg",
        "images/products/Beach Hair Rinse/5.jpg"
      ],

      description: [
        "images/products/Beach Hair Rinse/Description 1.jpg",
        "images/products/Beach Hair Rinse/Description 2.jpg"
      ],

      application: [
        "images/products/Beach Hair Rinse/3.jpg",
        "images/products/Beach Hair Rinse/4.jpg"
      ]
    },

    shortDescription:
      "The yang to Beach Wash's yin. Beach Rinse is a nourishing, weightless conditioner for healthy, hydrated locks. It's like an extended beach vacation…for your hair.",

    benefits: [
      "· Healthy shine",
      "· Ultimate moisture",
      "· Leaves the hair nourished",
      "· Weightless",
      "· Kusco-Murphy Kelp",
      "· Healthy and hydrated locks",
      "· Repairs and soothes hair structure",
      "· Leaves hair easy to manage",
      "· Argan oil",
      "· Cocoa butter",
      "· Coconut oil",
      "· Kelp extract"
    ],

    description: {
      title:
        "Beach Hair Rinse a Hair Conditioner for ultimate moisture and shine",

      paragraphs: [
        "Kusco-Murphy's Beach Hair Rinse is a Hair Conditioner containing cocoa butter and kelp extract to help repair and soothe hair structure.",
        "While argan oil and coconut oil deliver moisture and shine. This beautiful combination leaves the hair nourished, easy to manage with a healthy shine."
      ]
    },

    application: {
      title: "Massage into hair, leave for a few minutes, rinse and style.",
      paragraphs: [
        "For best results pair with Beach Hair Wash."
      ]
    },

    goesWellWith: [
      "beach-hair-wash"
    ]
  },

  {
    id: "o-ssential-hair-wash",
    name: "O'ssential Hair Wash",
    price: 25.95,
    size: "250ml / bottle",
    category: "Shampoo",
    brand: "O'ssential",
    inStock: true,

    keywords: [
      "shampoo", 
      "wash", 
      "o'ssential", 
      "dry hair", 
      "damaged hair", 
      "scalp care"
    ],

    images: {
      card: "images/products/O'ssential Hair Wash/1.jpg",
      hover: "images/products/O'ssential Hair Wash/2.jpg",

      gallery: [
        "images/products/O'ssential Hair Wash/1.jpg",
        "images/products/O'ssential Hair Wash/2.jpg",
        "images/products/O'ssential Hair Wash/3.jpg",
        "images/products/O'ssential Hair Wash/4.jpg",
        "images/products/O'ssential Hair Wash/5.jpg"
      ],

      description: [
        "images/products/O'ssential Hair Wash/Description 1.jpg",
        "images/products/O'ssential Hair Wash/Description 2.jpg"
      ],

      application: [
        "images/products/O'ssential Hair Wash/3.jpg",
        "images/products/O'ssential Hair Wash/4.jpg"
      ]
    },

    shortDescription:
      "The O'ssential Wash allows you to strengthen and cleanse. Australian botanicals and essential oils of Tangerine, Ylang Ylang and Rose Geranium gently cleanse the hair and scalp, replenishing diminished essential vitamins, proteins and minerals.",

    benefits: [
      "· Strengthens",
      "· Gently cleanses the hair and scalp",
      "· Penetrates and soothes damaged hair cuticles",
      "· Kusco-Murphy Ylang Ylang",
      "· Restores moisture",
      "· Ideal for exhausted hair",
      "· Produces naturally shiny and healthy hair",
      "· Replenishes essential vitamins, proteins and minerals",
      "· Australian botanical extracts which cleanse and enliven hair",
      "· Rose Geranium essential oil",
      "· Tangerine essential oil",
      "· Ylang Ylang essential oil",
      "· All hair types"
    ],

    description: {
      title:
        "O'ssential Hair Wash is a re-balancing wash that utilizes the medicinal and rejuvenating properties of nature's best.",

      paragraphs: [
        "O'ssential Hair Wash is a shampoo that gently cleanses the hair and scalp while replenishing diminished essential vitamins, proteins and minerals.",
        "O'ssential Wash additionally contains beautiful botanical extracts which cleanse and enliven hair structure to revitalize the natural beauty of your hair.",
        "Essential Oils of Ylang Ylang and Rose Geranium penetrate and soothe damaged hair cuticles, restoring moisture and strength to produce naturally shiny, healthy hair."
      ]

    },

    application: {
      title: "Simply apply to wet hair, work through and rinse with water.",

      paragraphs: [
        "For best results follow with O'ssential Hair Rinse."
      ]
    },

    goesWellWith: [
      "o-ssential-hair-rinse"
    ]
  },

  {
    id: "o-ssential-hair-rinse",
    name: "O'ssential Hair Rinse",
    price: 25.95,
    size: "250ml / bottle",
    category: "Conditioner",
    brand: "O'ssential",
    inStock: true,

    keywords: [
      "conditioner", 
      "rinse", 
      "o'ssential", 
      "dry hair", 
      "damaged hair", 
      "repair"],

    images: {
      card: "images/products/O'ssential Hair Rinse/1.jpg",
      hover: "images/products/O'ssential Hair Rinse/2.jpg",

      gallery: [
        "images/products/O'ssential Hair Rinse/1.jpg",
        "images/products/O'ssential Hair Rinse/2.jpg",
        "images/products/O'ssential Hair Rinse/3.jpg",
        "images/products/O'ssential Hair Rinse/4.jpg",
        "images/products/O'ssential Hair Rinse/5.jpg"
      ],

      description: [
        "images/products/O'ssential Hair Rinse/Description 1.jpg",
        "images/products/O'ssential Hair Rinse/Description 2.jpg"

      ],

      application: [
        "images/products/O'ssential Hair Rinse/3.jpg",
        "images/products/O'ssential Hair Rinse/4.jpg"
      ]

    },

    shortDescription:
      "The perfect compliment to O'ssential Hair Wash, the O'ssential Rinse is a luscious, moisturising botanical conditioner that nurtures and replenishes vitamins and proteins to chemically and environmentally stressed hair.",

    benefits: [
      "· Hair conditioner",
      "· Luscious",
      "· Moisturises",
      "· Nurtures",
      "· Replenishes vitamins and proteins",
      "· Ideal for chemically and environmentally stressed hair",
      "· Smooths and soothes hair cuticles",
      "· Cocoa Butter",
      "· Ylang Ylang essential oil",
      "· Botanical bouquet combination of Essential Oils and Extracts",
      "· SLS/SLES free"
    ],

    description: {
      title:
        "O'ssential Hair Rinse is a soothing and moisturising conditioner that enables you to relax your hair and body while pampering the soul.",

      paragraphs: [
        "O'ssential Hair Rinse is a hair conditioner enriched with Cocoa Butter to smooth and soothe hair cuticles.",
        "Additionally Esssential Oil of Ylang Ylang will restore and retain moisture in your hair.",
        "A botanical bouquet combination of Essential Oils and Extracts to actively treat and nurture damaged hair."
      ]
    },

    application: {
      title: "Simply apply to wet hair",

      paragraphs: [
        "For best results follow O'ssential Hair Wash."
      ]
    },

    goesWellWith: [
      "o-ssential-hair-wash"
    ]
  },

  {
    id: "o-ssential-revival-hair-balm",
    name: "O'ssential Revival Hair Balm",
    price: 29.95,
    size: "150ml",
    category: "Treatments",
    brand: "O'ssential",
    inStock: true,

    keywords: [
      "balm", 
      "revival", 
      "repair treatment", 
      "damaged hair", 
      "dry hair", 
      "treatment"
    ],

    images: {
      card: "images/products/O'ssential Revival Hair Balm/1.jpg",
      hover: "images/products/O'ssential Revival Hair Balm/2.jpg",

      gallery: [
        "images/products/O'ssential Revival Hair Balm/1.jpg",
        "images/products/O'ssential Revival Hair Balm/2.jpg",
        "images/products/O'ssential Revival Hair Balm/3.jpg",
        "images/products/O'ssential Revival Hair Balm/4.jpg",
        "images/products/O'ssential Revival Hair Balm/5.jpg"
      ],

      description: [
        "images/products/O'ssential Revival Hair Balm/Description 1.jpg",
        "images/products/O'ssential Revival Hair Balm/Description 2.jpg"
      ],

      application: [
        "images/products/O'ssential Revival Hair Balm/3.jpg",
        "images/products/O'ssential Revival Hair Balm/4.jpg"
      ]
    },

    shortDescription:
      "The richest member of the O'ssential family, Revival Balm is a restorative deep conditioning treatment for all hair types and styles.",

    benefits: [
      "· Restorative deep conditioning treatment",
      "· Ideal for hair exhausted by chemical and environmental stress",
      "· Silky",
      "· Manageable",
      "· Kusco-Murphy Wheat Protien",
      "· Shiny",
      "· Thick and creamy formula",
      "· Penetrates deep into hair cuticles",
      "· Softens and smooths away damaged strands and fly-aways",
      "· Olive Oil Extract",
      "· Tangerine",
      "· Wheat proteins",
      "· Ylang Ylang",
      "· Sunscreen to protect hair cuticles",
      "· All hair types",
      "· All hair styles"
    ],

    description: {
      title:
        "Kusco-Murphy's O'ssential Revival Balm is an invigorating and nutritious conditioning hair balm.",

      paragraphs: [
        "O'ssential Revival Hair Balm combines the sweet sensuous aromas of Tangerine, Ylang Ylang and the healing benefits of Olive Oil Extract.",
        "Wheat proteins and sunscreen protect hair cuticles, enlivening and revitalizing damaged hair structure; leaving it silky, manageable and with a scintillating shine. This thick and creamy formula penetrates deep into hair cuticles; softening and smoothing away damaged strands and fly-aways."
      ]
    },

    application: {
      title: "Simply apply to wet, washed hair",

      paragraphs: [
        "Leave in for as long as possible to allow hair to be able to absorb nutrients."
      ]
    },

    goesWellWith: [
      "o-ssential-hair-rinse"
    ]
  },

  {
    id: "alley-paste",
    name: "Alley Paste",
    price: 24.95,
    size: "120ml",
    category: "Styling",
    inStock: true,

    keywords: [
      "paste",
      "styling",
      "matte",
      "hold",
      "texture"
    ],

    images: {
      card: "images/products/Alley Paste/1.jpg",
      hover: "images/products/Alley Paste/2.jpg",

      gallery: [
        "images/products/Alley Paste/1.jpg",
        "images/products/Alley Paste/2.jpg",
        "images/products/Alley Paste/3.jpg",
        "images/products/Alley Paste/4.jpg",
        "images/products/Alley Paste/5.jpg"
      ],

      description: [
        "images/products/Alley Paste/Description 1.jpg",
        "images/products/Alley Paste/Description 2.jpg"
      ],

      application: [
        "images/products/Alley Paste/3.jpg",
        "images/products/Alley Paste/4.jpg"
      ]
    },

    shortDescription:
      "Kusco-Murphy's Alley Paste is a pliable, flexible-hold paste with a matte finish. It’s up for anything. Add definition and shape to curly or straight hair. Separate and piece for edgier looks.",

    benefits: [
    "· Texturising Cream, Hair Paste, Hair Hold Paste, Hair Holding Paste or Hair Styling Paste",
    "· Revolutionary two phase drying system",
    "· Setting quickly in hair, giving required styling hold",
    "· Then drying slows to maintain styling flexibility allowing you to shape and form",
    "· Styles will not stiffen or flake or leave a sticky residue in hair",
    "· Designed specifically for styling ease",
    "· Suave yet subtle styling",
    "· Creates styles full of attitude with a sexy matte finish",
    "· A pliable paste that introduces flexibility to your style",
    "· Adds body, shine and shape to all hair types and styles",
    "· Versatile",
    "· Holds and smoothes fly away hair…perfect for taming wild manes",
    "· Defines, separates, pieces and controls strands and curls",
    "· Humidity defying, texturised and well defined styles",
    "· Strengthens and creates elasticity in hair structure…while leaving hair with the freedom to move",
    "· For more natural styles with a softer hold and shine only apply small amounts",
    "· For further hold and texture keep working product into scalp and ends",
    "· Intensifying its properties as more product is added",
    "· Will adhere to your personal requirements",
    "· Deceptively sweet with a frangipani scent"
  ],

    description: {
      title:
        "Alley Hair Paste utilises a revolutionary two phase drying system",

      paragraphs: [
        "“Alley Paste” is a particularly versatile texturising cream that redefines pre-existing concepts of hair texture, shape and form. Also referred to as a hair hold, hair holding or hair styling paste. Brought to you by Kusco-Murphy.",
        "Designed specifically for styling ease. This product accordingly allows you to define, separate, piece and control strands and curls for creating humidity defying, texturised and well-defined styles. Consequently these will not stiffen or flake, or leave a sticky residue in hair. Perfect for taming wild manes."
      ]
    },

    application: {
      title: "Piecing and separating strands or curls with fingers until you reach styling satisfaction.",
      paragraphs: [
        "For more natural styles with a softer hold and shine, only apply small amounts.",
        "For further hold and texture keep working product into scalp and ends.",
      ]
    },

    goesWellWith: [
      "bedroom-hair"
    ]
  },

  {
    id: "bedroom-hair",
    name: "Bedroom Hair",
    price: 24.95,
    size: "120ml",
    category: "Styling",
    inStock: true,

    keywords: [
      "texture",
      "spray",
      "volume",
      "messy hair",
      "styling"
    ],

    images: {
      card: "images/products/Bedroom Hair/1.jpg",
      hover: "images/products/Bedroom Hair/2.jpg",

      gallery: [
        "images/products/Bedroom Hair/1.jpg",
        "images/products/Bedroom Hair/2.jpg",
        "images/products/Bedroom Hair/3.jpg",
        "images/products/Bedroom Hair/4.jpg",
        "images/products/Bedroom Hair/5.jpg"
      ],

      description: [
        "images/products/Bedroom Hair/Description 1.jpg",
        "images/products/Bedroom Hair/Description 2.jpg"
      ],

      application: [
        "images/products/Bedroom Hair/3.jpg",
        "images/products/Bedroom Hair/4.jpg"
      ]
    },

    shortDescription:
      "This product makes us blush a little. We were going for that sexy, roll-in-the-hay hair. You know: effortless, voluminous, light hold. That “I am especially happy and confident today” type of hair product.",

    benefits: [
      "· Light hold gel product",
      "· Creates a subdued, sensual and crushed look",
      "· Invisible",
      "· Effortless",
      "· Voluminous",
      "· High moisturising qualities",
      "· Amazing holding power",
      "· Will not flake or go stiff",
      "· Unique molecular structure",
      "· Exotic sexy seductive scent",
      "· Cassia",
      "· Green Tea",
      "· Lemon Balm",
      "· For all hair styles in need of softening"
    ],

    description: {
      title:
        "Kusco-Murphy's Bedroom Hair gel is the equivalent of a “Roll in the Hay” in a jar.",

      paragraphs: [
        "Bedroom Hair gel unquestionably creates a subdued, sensual look.",
        "Additionally extracts of Green Tea, Cassia and Lemon Balm fill the hair with an exotic scent.",
        "This product will allow the hair to look crushed but still have an amazing amount of hold. The beauty of this product is that it has moisturising qualities that therefore allow the hair to have a messed up glamour."
      ]
    },

    application: {
      title: "Simply rub into the ends of mid-length hair until the product has dried into styled hair.",
      paragraphs: [
        "“Bedroom Hair” will soften your style instantly."
      ]
    },

    goesWellWith: [
      "hair-setting-lotion"
    ]
  },

  {
    id: "bee-waxed",
    name: "Bee Waxed",
    price: 34.95,
    size: "90g",
    category: "Styling",
    inStock: true,

    keywords: [
      "wax", 
      "styling", 
      "hold", 
      "texture", 
      "men", 
      "short hair"
    ],

    images: {
      card: "images/products/Bee Waxed/1.jpg",
      hover: "images/products/Bee Waxed/2.jpg",

      gallery: [
        "images/products/Bee Waxed/1.jpg",
        "images/products/Bee Waxed/2.jpg",
        "images/products/Bee Waxed/3.jpg",
        "images/products/Bee Waxed/4.jpg",
        "images/products/Bee Waxed/5.jpg"
      ],

      description: [
        "images/products/Bee Waxed/Description 1.jpg",
        "images/products/Bee Waxed/Description 2.jpg"
      ],

      application: [
        "images/products/Bee Waxed/3.jpg",
        "images/products/Bee Waxed/4.jpg"
      ]
    },

    shortDescription:
      "Bee Waxed is our strongest hair wax. Like, really strong. Tough enough for your moustache or beard. Stubborn enough to hold dreadlocks and braids in place. And it will even help out with taming flyaways and baby hairs. Oh, and it's a matte finish for effortless cool.",

    benefits: [
      "· Matt finish",
      "· Strong hold wax",
      "· Tough enough for a moustache or beard",
      "· Long lasting",
      "· Ideal for dreadlocks",
      "· Ideal for short styles",
      "· Tames flyaways and baby hairs"
    ],

    description: {
      title:
        "We build our tough Hair Wax to last. Holding dreadlocks and short styles in place.",

      paragraphs: [
        "Bees build combs, but our Bee waxed Hair Wax is built tough enough to withstand a comb!",
        "Recommended For: Dreadlocks and short styles that stand alone.",
      ]
    },

    application: {
      title: "Warm in palms of hands before use, apply and style as usual.",
      paragraphs: [
        "Use more product for stronger hold and definition."
      ]
    },

    goesWellWith: [
      "kashmir-gold-smoothing-hair-balm"
    ]
  },

  {
    id: "dry-leave-in",
    name: "Dry Leave In",
    price: 24.95,
    size: "200ml / bottle",
    category: "Treatments",
    inStock: true,

    keywords: [
      "leave in", 
      "treatment", 
      "dry hair", 
      "damaged hair", 
      "repair", 
      "moisture"],

    images: {
      card: "images/products/Dry Leave In/1.jpg",
      hover: "images/products/Dry Leave In/2.jpg",

      gallery: [
        "images/products/Dry Leave In/1.jpg",
        "images/products/Dry Leave In/2.jpg",
        "images/products/Dry Leave In/3.jpg",
        "images/products/Dry Leave In/4.jpg",
        "images/products/Dry Leave In/5.jpg"
      ],

      description: [
        "images/products/Dry Leave In/Description 1.jpg",
        "images/products/Dry Leave In/Description 2.jpg"
      ],

      application: [
        "images/products/Dry Leave In/3.jpg",
        "images/products/Dry Leave In/4.jpg"
      ]
    },

    shortDescription:
      "Want to moisturize (weightlessly) without the effort of a masque or treatment? Us too.",

    benefits: [
      "· Hair tonic",
      "· Leave in hair treatment, allowing the active ingredients to continue restoring nourishment to damaged hair",
      "· Regular use will restore pH balance to hair",
      "· Masque or treatment not required",
      "· Hair and Scalp Moisturiser",
      "· Reduces time and effort",
      "· Suitable for use on wet or dry hair, extremely dry hair, colour treated hair or permed hair",
      "· Almond Oil to soften and repair dry, damaged hair",
      "· Burdock Root for strength",
      "· Honey for shine",
      "· No Oil and is weightless in structure",
      "· Recommended for everyday use"
    ],

    description: {
      title:
        "Kusco-Murphy's Dry Leave In hair moisturising spray takes the time and effort out of hair treatments.",

      paragraphs: [
        "Dry Leave In hair moisturising spray contains Honey, emphatically natures wonder emollient for shine, Burdock Root for strength. And Almond Oil for the purpose of softening and repairing dry damaged hair.",
        "As the name suggests, “Leave In” so as to allow the active ingredients to continue restoring nourishment to damaged hair. Contains no oil and is subsequently weightless in structure. Moreover regular use will restore pH balance to hair."
      ]
    },

    application: {
      title: "Simply spray onto hair and straightaway comb through.",
      paragraphs: [
        "Particularly suited for use on wet or dry hair."
      ]
    },

    goesWellWith: [
      "o-ssential-revival-hair-balm"
    ]
  },

  {
    id: "hair-dryer-fomo-5000-professional",
    name: "Hair Dryer FOMO 5000 Professional",
    price: 59.95,
    size: "2100 Watts",
    category: "Hair Tools",
    inStock: true,

    keywords: [
      "hair dryer", 
      "dryer", 
      "tool", 
      "hair tools", 
      "professional", 
      "styling"
    ],

    images: {
      card: "images/products/Hair Dryer FOMO 5000 Professional/1.jpg",
      hover: "images/products/Hair Dryer FOMO 5000 Professional/2.jpg",

      gallery: [
        "images/products/Hair Dryer FOMO 5000 Professional/1.jpg",
        "images/products/Hair Dryer FOMO 5000 Professional/2.jpg",
        "images/products/Hair Dryer FOMO 5000 Professional/3.jpg",
        "images/products/Hair Dryer FOMO 5000 Professional/4.jpg",
        "images/products/Hair Dryer FOMO 5000 Professional/5.jpg"
      ],

      description: [
        "images/products/Hair Dryer FOMO 5000 Professional/Description 1.jpg",
        "images/products/Hair Dryer FOMO 5000 Professional/Description 2.jpg"
      ],

      application: [
        "images/products/Hair Dryer FOMO 5000 Professional/3.jpg",
        "images/products/Hair Dryer FOMO 5000 Professional/4.jpg"
      ]
    },

    shortDescription:
      "This light weight hair dryer has a unique sleek design and superior high-velocity air flow. You can maintain the shine, health, and strength of your hair while styling.",

    benefits: [
      "· Unique sleek design",
      "· Light weight",
      "· Ideal for your travels",
      "· Superior high-velocity air flow",
      "· 2100Watts",
      "· 4 Temperatures",
      "· 2 Speeds",
      "· Instant Cold Shot Button",
      "· 2 Nozzles",
      "· 1 year warranty"
    ],

    description: {
      title:
        "The FOMO 5000 Professional Hair Dryer combines style, performance, and convenience.",

      paragraphs: [
        "Don't let the “Fear Of Missing Out” rule your hair, with a unique Black & Rose Gold design blow dryer.",
        "This lightweight hair dryer is a must have for salon professionals and home users alike, from Kusco-Murphy."
      ]
    },

    application: {
      title: "Use on damp hair and style as desired.",
      paragraphs: [
        "Use with a brush for smoother results."
      ]
    },

    goesWellWith: [
      "oval-cushion-hair-brush-sugar-baby"
    ]
  },

  {
    id: "hair-setting-lotion",
    name: "Hair Setting Lotion",
    price: 21.95,
    size: "200ml",
    category: "Styling",
    inStock: true,

    keywords: [
      "setting lotion", 
      "styling", 
      "hold", 
      "volume", 
      "shape"
    ],

    images: {
      card: "images/products/Hair Setting Lotion/1.jpg",
      hover: "images/products/Hair Setting Lotion/2.jpg",

      gallery: [
        "images/products/Hair Setting Lotion/1.jpg",
        "images/products/Hair Setting Lotion/2.jpg",
        "images/products/Hair Setting Lotion/3.jpg",
        "images/products/Hair Setting Lotion/4.jpg",
        "images/products/Hair Setting Lotion/5.jpg"
      ],

      description: [
        "images/products/Hair Setting Lotion/Description 1.jpg",
        "images/products/Hair Setting Lotion/Description 2.jpg"
      ],

      application: [
        "images/products/Hair Setting Lotion/3.jpg",
        "images/products/Hair Setting Lotion/4.jpg"
      ]
    },

    shortDescription:
      "Setting Lotion is a volumising, shine spray with no build up. It has a strong hold great for use in curl sets or to keep hair straight when blow drying, So you can forget about a crunchy aerosol or hair spray.",

    benefits: [
      "· Hair shine spray with no build up",
      "· Fine mist hair spray",
      "· Old fashioned wave curler",
      "· Volumising",
      "· Has a strong hold for hot rollers and blow wave sets",
      "· Great for use in curl sets",
      "· Great to keep hair straight when blow drying",
      "· Creates a straight messy effect with dry hair that will last all day or night",
      "· Not crunchy like an aerosol hair spray",
      "· Leaves no build up",
      "· Brushes out easily",
      "· For all hair types"
    ],

    description: {
      title:
        "Kusco-Murphy’s Hair Setting Lotion is suitable for all hair types. It acts as a volumiser to add strength and shine.",

      paragraphs: [
        "If applied to dry hair creates a straight messy effect that will last all day or night.",
        "Delivers a strong hold for hot rollers and blow wave sets. Also known as hair shine spray, fine mist hair spray and an old fashioned wave curler."
      ]
    },

    application: {
      title: "Apply to wet hair before styling.",
      paragraphs: [
        "Apply small amount to roots and style as usual for lasting curls."
      ]
    },

    goesWellWith: [
      "lavender-hair-creme"
    ]
  },

  {
    id: "kashmir-gold-smoothing-hair-balm",
    name: "KashMir Gold Smoothing Hair Balm",
    price: 34.95,
    size: "100ml",
    category: "Treatments",
    inStock: true,

    keywords: [
      "balm", 
      "smoothing", 
      "frizzy hair", 
      "dry hair", 
      "shine", 
      "treatment"
    ],

    images: {
      card: "images/products/KashMir Gold Smoothing Hair Balm/1.jpg",
      hover: "images/products/KashMir Gold Smoothing Hair Balm/2.jpg",

      gallery: [
        "images/products/KashMir Gold Smoothing Hair Balm/1.jpg",
        "images/products/KashMir Gold Smoothing Hair Balm/2.jpg",
        "images/products/KashMir Gold Smoothing Hair Balm/3.jpg",
        "images/products/KashMir Gold Smoothing Hair Balm/4.jpg",
        "images/products/KashMir Gold Smoothing Hair Balm/5.jpg"
      ],

      description: [
        "images/products/KashMir Gold Smoothing Hair Balm/Description 1.jpg",
        "images/products/KashMir Gold Smoothing Hair Balm/Description 2.jpg"
      ],

      application: [
        "images/products/KashMir Gold Smoothing Hair Balm/3.jpg",
        "images/products/KashMir Gold Smoothing Hair Balm/4.jpg"
      ]
    },

    shortDescription:
      "Smooth luxurious hair is now attainable with KASHMIR Gold Smoothing Balm.",

    benefits: [
      "· Conditions",
      "· Sleek",
      "· Smooth",
      "· Nourishes",
      "· Soothes",
      "· Luxurious hair",
      "· Helps repair dry brittle hair",
      "· Easily absorbed for weightless velvety hair",
      "· Use in moderation",
      "· Kusco-Murphy Best Hair Balm with Mica",
      "· Flower extracts",
      "· Scent of Hibiscus",
      "· Essential oils",
      "· Mica for sparkle",
      "· Honey",
      "· Kalahari melon seed",
      "· Vitamin E"
    ],

    description: {
      title:
        "KashMir Gold Smoothing Balm…the Best Hair Balm.",

      paragraphs: [
        "Kusco-Murphy's “KashMir” Gold is a sleek, smoothing and undoubtedly the best Hair Balm.",
        "This product contains Mica for sparkle, flower extracts, honey, essential oils with the lovely scent of Hibiscus and Kalahari melon seed.",
        "Specifically conditions, nourishes, soothes and helps repair dry brittle hair, with the added benefit of Vitamin E."
      ]
    },

    application: {
      title: "Use in moderation.",
      paragraphs: [
        "For an intense result add a finger tip amount to dry hair, run your hot iron over hair for luxuriously smooth hair."
      ]
    },

    goesWellWith: [
      "bedroom-hair"
    ]
  },

  {
    id: "lavender-hair-creme",
    name: "Lavender Hair Creme",
    price: 25.50,
    size: "100ml",
    category: "Styling",
    inStock: true,

    keywords: [
      "creme", 
      "cream", 
      "lavender", 
      "styling", 
      "soft hold", 
      "frizzy hair"],

    images: {
      card: "images/products/Lavender Hair Creme/1.jpg",
      hover: "images/products/Lavender Hair Creme/2.jpg",
      
      gallery: [
        "images/products/Lavender Hair Creme/1.jpg",
        "images/products/Lavender Hair Creme/2.jpg",
        "images/products/Lavender Hair Creme/3.jpg",
        "images/products/Lavender Hair Creme/4.jpg",
        "images/products/Lavender Hair Creme/5.jpg"
      ],

      description: [
        "images/products/Lavender Hair Creme/Description 1.jpg",
        "images/products/Lavender Hair Creme/Description 2.jpg"
      ],

      application: [
        "images/products/Lavender Hair Creme/3.jpg",
        "images/products/Lavender Hair Creme/4.jpg"
      ]

    },

    shortDescription:
      "Lavender Hair Creme is a soft, multi purpose, lavender infused pomade that adds moisture and balance to all hair types.",

    benefits: [
      "· Light hair cream",
      "· Promotes curl on wet hair",
      "· Will de-frizz when scrunching",
      "· Allows the hair to move but stay in place",
      "· Adds balance to all hair types",
      "· Adds moisture to curly hair",
      "· Particularly good for curly hair",
      "· Soft",
      "· Multi purpose",
      "· Lavender-infused",
      "· Water soluble",
      "· For all hair types"
    ],

    description: {
      title:
        "Kusco-Murphy's Lavender Hair Creme is a light hair cream to be used wet or dry.",

      paragraphs: [
        "Lavender hair creme promotes curl on wet hair and will de-frizz when scrunching. Especially adds moisture to curly hair. The setting properties allow the hair to move but stay in place.",
        "We therefore recommend this product for all hair types. Basically depending on the desired look to be achieved. Particularly good for curly hair."
      ]
    },

    application: {
      title: "Place a small amount on towel dried hair and dry with dryer.",
      paragraphs: [
        "For straight styles apply a small amount to dry hair to give straight hair more texture. Using a small amount on the ends is the best way to achieve texture."
      ]
    },

    goesWellWith: [
      "alley-paste"
    ]
  },

  {
    id: "oval-cushion-hair-brush-big-red",
    name: "Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”",
    price: 15.95,
    size: "1 brush",
    category: "Hair Tools",
    inStock: true,

    keywords: [
      "brush", 
      "hair brush", 
      "hair tools", 
      "tool", 
      "big red", 
      "artists and models"
    ],

    images: {
      card: "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/1.jpg",
      hover: "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/2.jpg",

      gallery: [
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/1.jpg",
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/2.jpg",
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/3.jpg",
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/4.jpg",
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/5.jpg"
      ],

      description: [
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/Description 1.jpg",
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/Description 2.jpg"
      ],

      application: [
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/3.jpg",
        "images/products/Oval Cushion Hair Brush “Big Red” Brushworx “Artists & Models”/4.jpg"
      ]
    },

    shortDescription:
      "The Brushworx Artists & Models Hair Brush Collection elevates the simple cushion Hairbrush into a work of art with imaginative and unique designs.",

    benefits: [
      "· Imaginative All About Me design",
      "· Versatile cushion brush that is ideal for all hair types",
      "· Porcupine bristle, combining nylon and boar bristle",
      "· Boar bristle distributes hair's natural oils for a soft, luxurious finish",
      "· Nylon bristle deeply penetrates any hair texture",
      "· Soft cushion base for gentle styling",
      "· Ideal for detangling, blow-drying, finishing updos, distributing styling product and brushing out heat styled curls"
    ],

    description: {
      title:
        "We are inspired by Artists & Models",

      paragraphs: [
        "It's a versatile cushion brush that creates soft, silky hair with incredible shine and lustre, perfect for detangling, blow-drying hair smooth, finishing updos and brushing out heat styled curls.",
        "This imaginative and unique Oval Cushion Hair Brush design series elevates the simple cushion brush into a work of art!",
      ]
    },

    application: {
      title: "Brush gently through dry or damp hair.",

      paragraphs: [
        "Use from mid-lengths to ends before brushing from roots."
      ]
    },

    goesWellWith: [
      "hair-dryer-fomo-5000-professional"
    ]
  },

  {
    id: "oval-cushion-hair-brush-miss-be-bop",
    name: "Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”",
    price: 15.95,
    size: "1 brush",
    category: "Hair Tools",
    inStock: true,

    keywords: [
      "brush", 
      "hair brush", 
      "hair tools", 
      "tool", 
      "miss be bop", 
      "artists and models"
    ],

    images: {
      card: "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/1.jpg",
      hover: "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/2.jpg",

      gallery: [
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/1.jpg",
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/2.jpg",
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/3.jpg",
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/4.jpg",
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/5.jpg"
      ],

      description: [
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/Description 1.jpg",
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/Description 2.jpg"
      ],

      application: [
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/3.jpg",
        "images/products/Oval Cushion Hair Brush “Miss Be Bop” Brushworx “Artists & Models”/4.jpg"
      ]
    },

    shortDescription:
      "The Brushworx Artists & Models Hair Brush Collection elevates the simple cushion Hairbrush into a work of art with imaginative and unique designs.",

    benefits: [
      "· Imaginative All About Me design",
      "· Versatile cushion brush that is ideal for all hair types",
      "· Porcupine bristle, combining nylon and boar bristle",
      "· Boar bristle distributes hair's natural oils for a soft, luxurious finish",
      "· Nylon bristle deeply penetrates any hair texture",
      "· Soft cushion base for gentle styling",
      "· Ideal for detangling, blow-drying, finishing updos, distributing styling product and brushing out heat styled curls"
    ],

    description: {
      title:
        "We are inspired by Artists & Models",

      paragraphs: [
        "It's a versatile cushion brush that creates soft, silky hair with incredible shine and lustre, perfect for detangling, blow-drying hair smooth, finishing updos and brushing out heat styled curls.",
        "This imaginative and unique Oval Cushion Hair Brush design series elevates the simple cushion brush into a work of art!",
      ]
    },

    application: {
      title: "Brush through hair gently from ends upward.",

      paragraphs: [
        "Use daily for smoothing and detangling."
      ]
    },

    goesWellWith: [
      "hair-dryer-fomo-5000-professional"
    ]
  },

  {
    id: "oval-cushion-hair-brush-sugar-baby",
    name: "Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”",
    price: 15.95,
    size: "1 brush",
    category: "Hair Tools",
    inStock: true,

    keywords: [
      "brush", 
      "hair brush", 
      "hair tools", 
      "tool", 
      "sugar baby", 
      "artists and models"
    ],

    images: {
      card: "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/1.jpg",
      hover: "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/2.jpg",

      gallery: [
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/1.jpg",
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/2.jpg",
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/3.jpg",
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/4.jpg",
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/5.jpg"
      ],

      description: [
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/Description 1.jpg",
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/Description 2.jpg"
      ],

      application: [
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/3.jpg",
        "images/products/Oval Cushion Hair Brush “Sugar Baby” Brushworx “Artists & Models”/4.jpg"
      ]
    },

    shortDescription:
      "The Brushworx Artists & Models Hair Brush Collection elevates the simple cushion Hairbrush into a work of art with imaginative and unique designs.",

    benefits: [
      "· Imaginative All About Me design",
      "· Versatile cushion brush that is ideal for all hair types",
      "· Porcupine bristle, combining nylon and boar bristle",
      "· Boar bristle distributes hair's natural oils for a soft, luxurious finish",
      "· Nylon bristle deeply penetrates any hair texture",
      "· Soft cushion base for gentle styling",
      "· Ideal for detangling, blow-drying, finishing updos, distributing styling product and brushing out heat styled curls"
    ],

    description: {
      title:
        "We are inspired by Artists & Models",

      paragraphs: [
        "It's a versatile cushion brush that creates soft, silky hair with incredible shine and lustre, perfect for detangling, blow-drying hair smooth, finishing updos and brushing out heat styled curls.",
        "This imaginative and unique Oval Cushion Hair Brush design series elevates the simple cushion brush into a work of art!"
      ]
    },

    application: {
      title: "Use on dry or damp hair as needed.",

      paragraphs: [
        "Brush gently and avoid pulling through knots."
      ]
    },

    goesWellWith: [
      "hair-dryer-fomo-5000-professional"
    ]
  },

  {
    id: "street-model-hair-paste-for-men",
    name: "Street Model Hair Paste for Men",
    price: 25.95,
    size: "100g / jar",
    category: "Styling",
    brand: "MAN",
    inStock: true,

    keywords: [
      "paste", 
      "men", 
      "man",
      "styling", 
      "hold", 
      "matte", 
      "short hair"
    ],

    images: {
      card: "images/products/Street Model Hair Paste for Men/1.jpg",
      hover: "images/products/Street Model Hair Paste for Men/2.jpg",

      gallery: [
        "images/products/Street Model Hair Paste for Men/1.jpg",
        "images/products/Street Model Hair Paste for Men/2.jpg",
        "images/products/Street Model Hair Paste for Men/3.jpg",
        "images/products/Street Model Hair Paste for Men/4.jpg",
        "images/products/Street Model Hair Paste for Men/5.jpg"
      ],

      description: [
        "images/products/Street Model Hair Paste for Men/Description 1.jpg",
        "images/products/Street Model Hair Paste for Men/Description 2.jpg"
      ],

      application: [
        "images/products/Street Model Hair Paste for Men/3.jpg",
        "images/products/Street Model Hair Paste for Men/4.jpg"
      ]
    },

    shortDescription:
      "Street Model gives you that casual, GQ Model look. No wonder it's one of our number 1 Best Sellers. With its minty scent, matte finish and strong hold. There's nothing not to like.",

    benefits: [
      "· Matte finish",
      "· Strong hold",
      "· Washes out easily",
      "· For a casual GQ Model look",
      "· Or funky styles",
      "· Natural and organic",
      "· Minty scent",
      "· No sulphates or petrolatum"
    ],

    description: {
      title:
        "Street Model Hair Paste for Men brings the fashion magazine to the streets and gives you street-model looks in seconds.",

      paragraphs: [
        "Street Model Hair Paste for Men is natural and organic and contains absolutely no sulphates or petrolatum. Street Model allows you to create matte, funky styles with a very strong hold that washes out easily."
      ]
    },

    application: {
      title: "Rub a small amount between palms and apply through dry hair.",

      paragraphs: [
        "Use more product to shape and create texture."
      ]
    },

    goesWellWith: [
      "beach-hair-wash"
    ]
  },

  {
    id: "tart-hair",
    name: "Tart Hair",
    price: 24.95,
    size: "150ml / bottle",
    category: "Styling",
    inStock: true,

    keywords: [
      "styling", 
      "texture", 
      "volume", 
      "hold", 
      "shine", 
      "hair spray"
    ],

    images: {
      card: "images/products/Tart Hair/1.jpg",
      hover: "images/products/Tart Hair/2.jpg",

      gallery: [
        "images/products/Tart Hair/1.jpg",
        "images/products/Tart Hair/2.jpg",
        "images/products/Tart Hair/3.jpg",
        "images/products/Tart Hair/4.jpg",
        "images/products/Tart Hair/5.jpg"
      ],

      description: [
        "images/products/Tart Hair/Description 1.jpg",
        "images/products/Tart Hair/Description 2.jpg"
      ],

      application: [
        "images/products/Tart Hair/3.jpg",
        "images/products/Tart Hair/4.jpg"
      ]
    },

    shortDescription:
      "Gels have a bad rep. We know. That's why we created Tart Hair, a workable gel-in-a-jar that isn't scary. Nothing crunchy or sticky-seriously.  Just pure Australian botanicals.",

    benefits: [
      "· Gel like a cream",
      "· Cream like a gel",
      "· Not crunchy or sticky",
      "· Consistency clay",
      "· Outstanding amount of hold for luscious locks",
      "· Shaggy messy look for tresses",
      "· For short styles requiring a firm hold",
      "· Use more for stronger sculpting power",
      "· Kusco-Murphy Bergamot",
      "· Voluptuous look that lasts",
      "· Invisible",
      "· Matte finish",
      "· Rinses out in water",
      "· Pure Australian botanicals",
      "· Aloe Vera",
      "· Bergamot Citrus",
      "· Geranium",
      "· Macadamia Oil",
      "· Tangerine"
    ],

    description: {
      title:
        "Kusco-Murphy with their hair cream gel have whipped up a heavenly delicious Tart for your Hair.",

      paragraphs: [
        "Tart Hair is a hair cream gel that combines a particularly unique blend of Tangerine, Geranium and Bergamot Citrus to saturate your hair with a divinely enticing fragrance.",
        "This thick tart consistency clay will provide an outstanding amount of hold when used with your luscious locks.",
        "Tart Hair, while invisible in your hair leaves a matte finish that rinses out in water."
      ]
    },

    application: {
      title: "Simply apply to damp or dry hair",

      paragraphs: [
        "Sculpt and mould until you reach your desired effect."
      ]
    },

    goesWellWith: [
      "hair-setting-lotion"
    ]
  },

  {
    id: "keep-it-kleen-hair-wash",
    name: "Keep it Kleen Hair Wash",
    price: 25.95,
    size: "250ml / bottle",
    category: "Shampoo",
    inStock: false,

    keywords: ["shampoo", "wash", "cleanse", "oily scalp", "scalp care"],

    images: {
      card: "images/products/Keep it Kleen Hair Wash/1.jpg",
      hover: "images/products/Keep it Kleen Hair Wash/2.jpg",
    },
  }
];

// —————————— Blogs Data ——————————
const blogs = [
  {
    id: "holiday-haircare-essentials",
    title: "Your Ultimate Holiday Haircare Essentials!",
    date: "28/11/2024",
    image: "images/blog/1.jpg",
    keywords: [
      "holiday",
      "christmas",
      "party hair",
      "haircare essentials",
      "summer holiday",
      "gift guide",
      "shampoo"
    ]
  },

  {
    id: "summer-hair-trends-2024",
    title: "The Hottest 2024 Summer Hair Trends",
    date: "24/10/2024",
    image: "images/blog/2.jpg",
    keywords: [
      "summer",
      "hair trends",
      "2024",
      "styling",
      "beach hair",
      "summer look"
    ]
  },

  {
    id: "hair-cocktail-recipes",
    title: "Hair Cocktail Recipes",
    date: "04/10/2024",
    image: "images/blog/3.jpg",
    keywords: [
      "hair cocktail",
      "recipes",
      "mix products",
      "styling recipe",
      "hair balm",
      "hair treatment"
    ]
  },

  {
    id: "refresh-your-hairstyle",
    title: "Tips to Instantly Refresh Your Hairstyle",
    date: "09/10/2024",
    image: "images/blog/4.jpg",
    keywords: [
      "refresh",
      "hairstyle",
      "hair tips",
      "quick styling",
      "hair routine",
      "beauty tips"
    ]
  },

  {
    id: "race-day-hair-spring-2024",
    title: "Race Day Hair ... Spring 2024",
    date: "27/09/2024",
    image: "images/blog/5.jpg",
    keywords: [
      "race day",
      "spring",
      "event hair",
      "formal hair",
      "racing",
      "spring 2024"
    ]
  },

  {
    id: "dry-leave-in-moisturiser-spray",
    title: "Dry Leave In - Hair Moisturiser Spray",
    date: "20/09/2024",
    image: "images/blog/6.jpg",
    keywords: [
      "dry leave in",
      "moisturiser spray",
      "dry hair",
      "leave in treatment",
      "hair moisture",
      "damaged hair"
    ]
  },

  {
    id: "smoothing-balm-hair-product",
    title: "Smoothing Balm hair product: The Ultimate Luxury for Your Hair",
    date: "15/09/2024",
    image: "images/blog/7.jpg",
    keywords: [
      "smoothing balm",
      "kashmir gold",
      "frizzy hair",
      "smooth hair",
      "hair balm",
      "shine"
    ]
  },

  {
    id: "tips-for-beautiful-healthy-hair",
    title: "The ultimate short overview of Tips and Tricks for Beautiful, Healthy Hair",
    date: "09/09/2024",
    image: "images/blog/8.jpg",
    keywords: [
      "healthy hair",
      "beautiful hair",
      "hair tips",
      "hair care routine",
      "braids",
      "styling tips",
      "shampoo"
    ]
  },

  {
    id: "welcome-to-kusco-murphy",
    title: "Welcome to Kusco-Murphy",
    date: "01/09/2024",
    image: "images/blog/9.jpg",
    keywords: [
        "hair",
        "haircare",
        "shampoo",
        "conditioner",
        "styling",
        "treatment",
        "hair tools",
        "beauty",
        "salon",
        "products",
        "healthy hair",
        "repair",
        "moisture",
        "volume",
        "texture",
        "frizz",
        "dry hair",
        "damaged hair",
        "scalp care",
    "kusco murphy"
    ]
  }
];

const siteHeader = document.querySelector("header");

// —————————— Cart Storage ——————————
function getCart() {
  const savedCart = localStorage.getItem("shoppingCart");

  if (savedCart) {
    return JSON.parse(savedCart);
  }

  return [];
}

function saveCart(cart) {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function addProductToCart(productId, quantity) {
  const cart = getCart();

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      quantity: quantity
    });
  }

  saveCart(cart);
}

function showCartModal(addedProducts) {
  let modalOverlay = document.querySelector(".cart-modal-overlay");

  if (modalOverlay === null) {
    modalOverlay = document.createElement("section");
    modalOverlay.classList.add("cart-modal-overlay");

    modalOverlay.innerHTML = `
      <article class="cart-modal">
        <button type="button" class="cart-modal-close">×</button>

        <h2 class="cart-modal-success">
          Successfully added to your shopping cart.
        </h2>

        <div class="cart-modal-line"></div>

        <h3 class="cart-modal-title" id="cartModalTitle">
          Added Product(s)
        </h3>

        <section class="cart-modal-items" id="cartModalItems"></section>

        <section class="cart-modal-actions">
          <button type="button" class="continue-shopping">
            Continue Shopping
          </button>

          <a href="Shopping Cart.html" class="view-cart">
            View My Cart
          </a>
        </section>
      </article>
    `;

    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener("click", event => {
      if (event.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });

    modalOverlay.querySelector(".cart-modal-close")
      .addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });

    modalOverlay.querySelector(".continue-shopping")
      .addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });
  }

  const modalItems = document.getElementById("cartModalItems");
  modalItems.innerHTML = "";

  addedProducts.forEach(product => {
    let addedQuantity = product.quantity;

    const item = document.createElement("article");
    item.classList.add("cart-modal-item");

    item.innerHTML = `
      <img src="` + product.images.card + `" alt="` + product.name + `">

      <div>
        <h3>` + product.name + `</h3>

        <p>` + product.size + `</p>

        <p class="cart-modal-each-price">
          Unit Price: $` + product.price.toFixed(2) + `
          <span>inc GST</span>
        </p>
      </div>

      <div class="cart-modal-right">
        <div class="cart-modal-quantity">

          <button type="button" class="cart-modal-minus">-</button>

          <span class="cart-modal-divider left-divider"></span>

          <span class="cart-modal-number">
            ` + addedQuantity + `
          </span>

          <span class="cart-modal-divider"></span>

          <button type="button" class="cart-modal-plus">+</button>

        </div>

        <strong class="cart-modal-price">
          $` + (product.price * addedQuantity).toFixed(2) + `
        </strong>
      </div>
    `;

    const minusBtn = item.querySelector(".cart-modal-minus");
    const plusBtn = item.querySelector(".cart-modal-plus");
    const quantityText = item.querySelector(".cart-modal-number");
    const priceText = item.querySelector(".cart-modal-price");
    const leftDivider =
      item.querySelector(".left-divider");

    function updateModalQuantity(newAddedQuantity) {
      const difference = newAddedQuantity - addedQuantity;

      const cart = getCart();

      const targetItem = cart.find(item => {
        return item.id === product.id;
      });

      if (targetItem == null) {
        return;
      }

      targetItem.quantity += difference;

      addedQuantity = newAddedQuantity;

      saveCart(cart);

      quantityText.textContent = addedQuantity;

      priceText.textContent =
        "$" + (product.price * addedQuantity).toFixed(2);

      if (addedQuantity <= 1) {
        minusBtn.disabled = true;
        leftDivider.classList.add("disabled");
      }
      else {
        minusBtn.disabled = false;
        leftDivider.classList.remove("disabled");
      }
    }

    if (addedQuantity <= 1) {
      minusBtn.disabled = true;
      leftDivider.classList.add("disabled");
    }

    minusBtn.addEventListener("click", () => {
      if (addedQuantity > 1) {
        updateModalQuantity(addedQuantity - 1);
      }
    });

    plusBtn.addEventListener("click", () => {
      updateModalQuantity(addedQuantity + 1);
    });

    modalItems.appendChild(item);
  });

  modalOverlay.classList.add("active");
}

// —————————— Search ——————————
// Select all required search panel elements from the page
const searchTrigger = document.querySelector(".search-trigger");
const searchPanel = document.querySelector(".search-panel");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const historyList = document.getElementById("historyList");

// Default search history shown when user has no saved searches yet
const defaultSearchHistory = [
  "Shampoo",
  "Conditioner",
  "Hair Mask",
  "Styling Cream",
  "Repair Treatment",
  "Damaged Hair"
];

// Get search history from sessionStorage
function getSearchHistory() {
  const savedHistory = sessionStorage.getItem("searchHistory");

  // Convert saved JSON string back into an array
  if (savedHistory) {
    return JSON.parse(savedHistory);
  }

  // Use default history if nothing has been saved
  return [...defaultSearchHistory];
}

// Save search history into sessionStorage
function saveSearchHistory(history) {
  sessionStorage.setItem("searchHistory", JSON.stringify(history));
}

// Render search history into two columns
function renderSearchHistory() {
  // Stop if history container does not exist
  if (historyList === null) return;

  // Only show the latest 8 search terms
  const history = getSearchHistory().slice(0, 8);

  // Clear old history before rendering new content
  historyList.innerHTML = "";

  // Create left and right columns
  const leftColumn = document.createElement("div");
  const rightColumn = document.createElement("div");

  leftColumn.classList.add("history-column");
  rightColumn.classList.add("history-column");

  // Loop through each search keyword
  history.forEach((keyword, index) => {
    // Create clickable search link
    const link = document.createElement("a");
    // Jump to search result page with the keyword
    link.href = "Search Result.html?search=" + encodeURIComponent(keyword);
    link.textContent = keyword;

    // First 4 items go left, remaining go right
    if (index < 4) {
      leftColumn.appendChild(link);
    } else {
      rightColumn.appendChild(link);
    }
  });

  // Add both columns into the history container
  historyList.appendChild(leftColumn);
  historyList.appendChild(rightColumn);
}

// —————————— Search Toggle ——————————
if (siteHeader && searchTrigger && searchPanel) {
  // Open & close search panel when clicking search icon
  searchTrigger.addEventListener("click", event => {

    // Prevent click from closing panel immediately
    event.stopPropagation();

    // Toggle search panel visibility
    siteHeader.classList.toggle("search-panel-active");
    // Close shop menu if it is open
    siteHeader.classList.remove("shop-menu-active");

    // Refresh search history every time panel opens
    renderSearchHistory();

    // Automatically focus on search input
    if (siteHeader.classList.contains("search-panel-active") && searchInput
    ) {
      searchInput.focus();
    }
  });

  // Prevent closing panel when clicking inside it
  searchPanel.addEventListener("click", event => {
    event.stopPropagation();
  });

  // Close search panel when clicking outside
  document.addEventListener("click", () => {
    siteHeader.classList.remove("search-panel-active");
  });
}

// —————————— Search Form Submit ——————————
if (searchForm && searchInput) {

  // Handle user search
  searchForm.addEventListener("submit", event => {

    // Prevent default page refresh
    event.preventDefault();

    // Remove unnecessary spaces
    const keyword = searchInput.value.trim();

    // Stop empty searches
    if (keyword === "") return;

    // Get current history
    let history = getSearchHistory();

    // Remove duplicate keywords
    history = history.filter(
      item => item.toLowerCase() !== keyword.toLowerCase()
    );

    // Add newest search to the front
    history.unshift(keyword);

    // Keep maximum 8 records
    history = history.slice(0, 8);

    // Save updated history
    saveSearchHistory(history);

    // Jump to search results page
    window.location.href =
      "Search Result.html?search=" +
      encodeURIComponent(keyword);
  });
}

// Render history immediately when page loads
renderSearchHistory();

// —————————— Menu Hover ——————————
// Select the "Shop" navigation button
const shopTrigger = document.querySelector(".shop-trigger");

// Select the dropdown mega menu
const shopMenu = document.querySelector(".shop-menu");

// Only run if all required elements exist
if (siteHeader && shopTrigger && shopMenu) {

  // Store timer for delayed menu closing
  let closeMenuTimer;

  // Function to open the mega menu
  function openShopMenu() {

    // Cancel any pending close action
    clearTimeout(closeMenuTimer);

    // Close search panel if it is open
    siteHeader.classList.remove("search-panel-active");

    // Add class to show mega menu
    siteHeader.classList.add("shop-menu-active");
  }

  // Function to close the mega menu
  function closeShopMenu() {

    // Small delay prevents flickering when moving mouse
    closeMenuTimer = setTimeout(() => {

      // Hide mega menu
      siteHeader.classList.remove("shop-menu-active");

    }, 0);
  }

  // Open menu when hovering over "Shop"
  shopTrigger.addEventListener("mouseenter", openShopMenu);

  // Start closing when leaving "Shop"
  shopTrigger.addEventListener("mouseleave", closeShopMenu);

  // Keep menu open when mouse enters dropdown area
  shopMenu.addEventListener("mouseenter", openShopMenu);

  // Close menu when leaving dropdown area
  shopMenu.addEventListener("mouseleave", closeShopMenu);
}

// —————————— Search Placeholder Typing Animation ——————————
// Static text shown before animated words
const searchPrefix = "Search ";

// Words that will be animated in the placeholder
const animatedWords = [
  "for Products",
  "Blogs",
];

// Track current word, current character, and typing state
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Animate typing and deleting effect
function animatePlaceholder() {

  // Stop if search input does not exist
  if (searchInput === null) return;

  // Current animated word
  const currentWord = animatedWords[wordIndex];

  // Typing or deleting logic
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // Build animated text
  const animatedText =
    currentWord.substring(0, charIndex);

  // Update placeholder text
  searchInput.placeholder =
    searchPrefix + animatedText;

  // Different speed for typing and deleting
  let speed;

  if (isDeleting) {
    speed = 45;
  } else {
    speed = 90;
  }

  // Pause after finishing typing
  if (
  isDeleting === false &&
  charIndex === currentWord.length
  ) {
    speed = 1000;
    isDeleting = true;
  }

  // Move to next word after deleting
  if (
    isDeleting &&
    charIndex === 0
  ) {
    isDeleting = false;

    // Loop through words continuously
    wordIndex =
      (wordIndex + 1) %
      animatedWords.length;

    speed = 250;
  }

  // Continue animation
  setTimeout(animatePlaceholder, speed);
}

// Start placeholder animation
animatePlaceholder();

// —————————— Global Breadcrumb ——————————
// Dynamically generate breadcrumb navigation
function renderBreadcrumb(items) {

  // Select breadcrumb container
  const breadcrumb =
    document.querySelector(".breadcrumb");

  // Stop if breadcrumb does not exist
  if (!breadcrumb) return;

  // Clear old breadcrumb content
  breadcrumb.innerHTML = "";

  // Loop through each breadcrumb item
  items.forEach((item, index) => {

    // Create clickable link if href exists
    if (item.href) {

      const link = document.createElement("a");

      link.href = item.href;
      link.textContent = item.label;

      breadcrumb.appendChild(link);

    } else {

      // Create plain text for current page
      const span = document.createElement("span");

      span.textContent = item.label;

      breadcrumb.appendChild(span);
    }

    // Add divider between breadcrumb items
    if (index < items.length - 1) {

      const divider = document.createElement("span");

      divider.textContent = "|";

      breadcrumb.appendChild(divider);
    }
  });
}

// —————————————————————————————— Home Page ——————————————————————————————
// —————————— Most Popular ——————————
// Get main carousel container and control buttons
const carousel = document.getElementById("popularCarousel");
const prevBtn = document.querySelector(".carousel-container .recommend-prev");
const nextBtn = document.querySelector(".carousel-container .recommend-next");

if (carousel && prevBtn && nextBtn) {
  // Convert all carousel items into an array for easier manipulation
  const cards = Array.from(carousel.children);

  // The index of the currently centered card
  let currentIndex = 2;

  // Updates the position of all cards
  function updateCarousel() {
    // Rremove all existing position classes
    cards.forEach(card => {
      card.classList.remove("active-0", "active-1", "active-2", "active-3", "active-4");
    });

    // Assign new positions relative to the current center
    for (let position = -2; position <= 2; position++) {
      // Calculate the correct card index to allow the carousel to loop infinitely
      const cardIndex = (currentIndex + position + cards.length) % cards.length;
      // Convert position into a class name
      const activeClass = "active-" + (position + 2);
      // Control this class through CSS
      cards[cardIndex].classList.add(activeClass);
    }
  }

  // Move carousel to the next item
  nextBtn.addEventListener("click", () => {
    // Update center index
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  // Move carousel to the previous item
  prevBtn.addEventListener("click", () => {
    // Update center index
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  updateCarousel();
}

// —————————————————————————————— Search Result ——————————————————————————————
// Select search result tabs, panels, sorting elements, and result containers
const resultTabs = document.querySelectorAll(".result-tab");
const resultPanels = document.querySelectorAll(".result-panel");

const sortBox = document.getElementById("sortBox");
const sortBtn = document.getElementById("sortBtn");
const sortOptionsList = document.getElementById("sortOptions");
const sortRow = document.querySelector(".sort-row");

const productSection = document.querySelector(".product-section");
const blogSection = document.querySelector(".blog-section");
const recommendSection = document.querySelector(".recommend-section");

const searchResultTitle = document.getElementById("searchResultTitle");
const productNoResults = document.getElementById("productNoResults");
const blogNoResults = document.getElementById("blogNoResults");

// —————————— Sorting ——————————
const productSortOptions = [
  "Sales",
  "Name: A - Z",
  "Name: Z - A",
  "Price: Low to High",
  "Price: High to Low"
];

const blogSortOptions = [
  "Publication Date",
  "Name: A - Z",
  "Name: Z - A"
];

if (resultTabs.length && resultPanels.length && sortBox && sortBtn && sortOptionsList && productSection && blogSection) {
  const params = new URLSearchParams(window.location.search);
  const searchKeyword = params.get("search") || "Shampoo";
  const keywordLower = searchKeyword.toLowerCase();

  // —————————— Breadcrumb ——————————
  renderBreadcrumb([
    { label: "Home", href: "index.html" },
    { label: "Search Results" }
  ]);

  let currentResultType = "product";
  let currentProducts = [];
  let currentBlogs = [];

  // —————————— Search ——————————
  // Check whether an item matches the search keyword
  function itemMatchesSearch(item, keyword) {
    const nameText = item.name || item.title || "";
    const categoryText = item.category || "";
    const brandText = item.brand || "";
    const keywordText = item.keywords ? item.keywords.join(" ") : "";

    const searchableText = (
      nameText + " " +
      categoryText + " " +
      brandText + " " +
      keywordText
    ).toLowerCase();

    return searchableText.includes(keyword);
  }

  // Create product page link from search result
  function getProductLink(product) {
    return "Product Page.html?id=" + product.id + "&from=search";
  }

  // Generate a product card dynamically
  function renderProductCard(product) {

    const article = document.createElement("article");

    article.classList.add("product-card");

    const productLink = getProductLink(product);

    const productPrice =
      product.price.toFixed(2);

    if (product.inStock) {
      article.innerHTML =
        `
        <a href="` + productLink + `">
          <figure>
            <div class="product-image">
              <img class="primary-img" src="` + product.images.card + `" alt="` + product.name + `">

              <img class="hover-img" src="` + product.images.hover + `" alt="` + product.name + `">
            </div>

            <figcaption>` + product.name + `</figcaption>
          </figure>

          <p class="size">` + product.size + `</p>

          <p class="price">
            $` + productPrice + `
            <span>inc GST</span>
          </p>
        </a>

        <button type="button" class="add-to-cart">
          Add to Cart
        </button>
      `;
    } else {
      article.innerHTML =
        `
        <div class="product-disabled">
          <figure>
            <div class="product-image">
              <img class="primary-img" src="` + product.images.card + `" alt="` + product.name + `">

              <img class="hover-img" src="` + product.images.hover + `" alt="` + product.name + `">
            </div>
            <figcaption>` + product.name + `</figcaption>
          </figure>

          <p class="size">` + product.size + `</p>

          <p class="price">
            $` + productPrice + `
            <span>inc GST</span>
          </p>
        </div>

        <button type="button" class="out-of-stock" disabled>
          Out of stock
        </button>
      `;
    }

    return article;
  }

  // Generate a blog card dynamically
  function renderBlogCard(blog) {
    const article = document.createElement("article");
    article.classList.add("blog-card");

    article.innerHTML = `
      <a href="#">
        <figure>
          <img src="` + blog.image + `" alt="` + blog.title + `">

          <figcaption>` + blog.title + `</figcaption> 
        </figure>
        <p class="Date">
          Publication Date: ` + blog.date + `
        </p>
      </a>
    `;

    return article;
  }

  // Render product results and show no-result message if needed
  function renderProducts(productList) {
    productSection.innerHTML = "";

    productList.forEach(product => {
      productSection.appendChild(renderProductCard(product));
    });

    if (productList.length === 0) {
      productNoResults.innerHTML =
        "No results found for <em>“" +
        searchKeyword +
        "”</em>.<br>" +
        "Check the spelling or use a different word or phrase.";
      productNoResults.classList.add("active");
    } else {
      productNoResults.innerHTML = "";
      productNoResults.classList.remove("active");
    }

    bindAddToCartButtons();
  }

  // Render blog results and show no-result message if needed
  function renderBlogs(blogList) {
    blogSection.innerHTML = "";

    blogList.forEach(blog => {
      blogSection.appendChild(renderBlogCard(blog));
    });

    if (blogList.length === 0) {
      blogNoResults.innerHTML =
        "No results found for <em>“" +
        searchKeyword +
        "”</em>.<br>" +
        "Check the spelling or use a different word or phrase.";
      blogNoResults.classList.add("active");
    } else {
      blogNoResults.innerHTML = "";
      blogNoResults.classList.remove("active");
    }
  }

  // Update result count title based on current tab
  function updateSearchTitle() {
    let count;

    if (currentResultType === "blog") {
      count = currentBlogs.length;
    } else {
      count = currentProducts.length;
    }

    let resultWord;

    if (count === 1) {
      resultWord = "Result";
    } else {
      resultWord = "Results";
    }

    searchResultTitle.innerHTML =
    "Search results for “" +
    searchKeyword +
    "”: <em>" +
    count +
    " " +
    resultWord +
    "</em>";
  }

  // Hide sort row when current tab has no results
  function updateSortVisibility() {
    if (sortRow === null) return;

    if (currentResultType === "blog") {

      if (currentBlogs.length === 0) {
        sortRow.style.display = "none";
      } else {
        sortRow.style.display = "";
      }

    } else {

      if (currentProducts.length === 0) {
        sortRow.style.display = "none";
      } else {
        sortRow.style.display = "";
      }
    }
  }

  // Render different sort options for product or blog tab
  function renderSortOptions(type) {
    let options;

    if (type === "blog") {
      options = blogSortOptions;
    } else {
      options = productSortOptions;
    }

    sortBtn.textContent = options[0];
    sortOptionsList.innerHTML = "";

    options.forEach(optionText => {
      const li = document.createElement("li");
      li.textContent = optionText;
      sortOptionsList.appendChild(li);
    });
  }

  // Switch between product results and blog results
  function switchResultTab(targetId) {
    resultTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.target === targetId);
    });

    resultPanels.forEach(panel => {
      panel.classList.toggle("active", panel.id === targetId);
    });

    if (targetId === "blogResults") {
      currentResultType = "blog";
      renderSortOptions("blog");

      if (recommendSection) {
        recommendSection.style.display = "none";
      }
    } else {
      currentResultType = "product";
      renderSortOptions("product");

      if (recommendSection) {
        recommendSection.style.display = "";
      }
    }

    updateSearchTitle();
    updateSortVisibility();
  }

  // Sort product results
  function sortProducts(selected) {
    let sortedProducts = [...currentProducts];

    if (selected === "Name: A - Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (selected === "Name: Z - A") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (selected === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (selected === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (selected === "Sales") {
      sortedProducts = [...currentProducts];
    }

    renderProducts(sortedProducts);
    updateSortVisibility();
  }

  // Sort blog results
  function sortBlogs(selected) {
    let sortedBlogs = [...currentBlogs];

    if (selected === "Publication Date") {
      sortedBlogs.sort((a, b) => {
        return new Date(b.date.split("/").reverse().join("-")) -
               new Date(a.date.split("/").reverse().join("-"));
      });
    }

    if (selected === "Name: A - Z") {
      sortedBlogs.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (selected === "Name: Z - A") {
      sortedBlogs.sort((a, b) => b.title.localeCompare(a.title));
    }

    renderBlogs(sortedBlogs);
    updateSortVisibility();
  }

  // Re-bind Add to Cart buttons after dynamic rendering
  function bindAddToCartButtons() {
    const newAddToCartButtons = productSection.querySelectorAll(".add-to-cart");

    newAddToCartButtons.forEach(button => {

      button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const productName =
          card.querySelector("figcaption").textContent.trim();

        const targetProduct = products.find(product => {
          return product.name === productName;
        });

        if (targetProduct) {
          addProductToCart(targetProduct.id, 1);

          showCartModal([
            {
              ...targetProduct,
              quantity: 1
            }
          ]);
        }
      });
    });
  }

  // Filter products and blogs based on search keyword
  currentProducts = products.filter(product => {
    return itemMatchesSearch(product, keywordLower);
  });

  currentBlogs = blogs.filter(blog => {
    if (blog.id === "welcome-to-kusco-murphy") {
      return true;
    }

    return itemMatchesSearch(blog, keywordLower);
  });

  // Initial rendering
  renderProducts(currentProducts);
  renderBlogs(currentBlogs);

  // Bind tab switching
  resultTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchResultTab(tab.dataset.target);
    });
  });

  // Open & close sort dropdown
  sortBtn.addEventListener("click", event => {
    event.stopPropagation();
    sortBox.classList.toggle("active");
  });

  // Handle selected sort option
  sortOptionsList.addEventListener("click", event => {
    const option = event.target.closest("li");

    if (option === null) {
      return;
    }

    const selected = option.textContent.trim();
    sortBtn.textContent = selected;
    sortBox.classList.remove("active");

    if (currentResultType === "blog") {
      sortBlogs(selected);
    } else {
      sortProducts(selected);
    }
  });

  // Close sort dropdown when clicking outside
  document.addEventListener("click", () => {
    sortBox.classList.remove("active");
  });

  // Start with product results tab
  switchResultTab("productResults");
}

// —————————— Recommend carousel ——————————
const recommendProducts = document.querySelector(".recommend-products");
const recommendPrev = document.querySelector(".recommend-prev");
const recommendNext = document.querySelector(".recommend-next");

// Automatically generate all product cards
if (recommendProducts) {

  products.forEach(product => {

    const article = document.createElement("article");
    article.classList.add("product-card");

  if (product.inStock) {

    const productPrice =
      product.price.toFixed(2);

    article.innerHTML =
      `
      <a href="Product Page.html?id=` +
      product.id +
      `&from=search">

        <figure>

          <div class="product-image">

            <img class="primary-img"
            src="` + product.images.card + `"
            alt="` + product.name + `">

            <img class="hover-img"
            src="` + product.images.hover + `"
            alt="` + product.name + `">

          </div>

          <figcaption>` + product.name + `</figcaption>

        </figure>

        <p class="size">` + product.size + `</p>

        <p class="price">
          $` + productPrice + `
          <span>inc GST</span>
        </p>

      </a>

      <button type="button" class="add-to-cart">
        Add to Cart
      </button>
    `;
  } else {
    const productPrice =
      product.price.toFixed(2);

    article.innerHTML =
      `
      <div class="product-disabled">
        <figure>
          <div class="product-image">
            <img class="primary-img" src="` + product.images.card + `" alt="` + product.name + `">

            <img class="hover-img" src="` + product.images.hover + `" alt="` + product.name + `">
          </div>

          <figcaption>` + product.name + `</figcaption>
        </figure>

        <p class="size">` + product.size + `</p>

        <p class="price">
          $` + productPrice + `
          <span>inc GST</span>
        </p>
      </div>

      <button type="button"  class="out-of-stock" disabled >
        Out of stock
      </button>
    `;
  }

  // Add To Cart Button in Recommend
  const recommendAddToCartBtn =
    article.querySelector(".add-to-cart");

  if (recommendAddToCartBtn && product.inStock) {

    recommendAddToCartBtn.addEventListener("click", () => {

      addProductToCart(product.id, 1);

      if (cartPage) {
        renderCart();
      }

      showCartModal([
        {
          ...product,
          quantity: 1
        }
      ]);
    });
  }

    recommendProducts.appendChild(article);
  });
}

// Only execute if these elements exist
if (recommendProducts && recommendPrev && recommendNext) {

  let isAnimating = false;

  // Obtain the sliding distance (The width of a card + spacing)
  function getRecommendSlideDistance() {

    const card = recommendProducts.querySelector(".product-card");
    const gap = parseFloat(getComputedStyle(recommendProducts).columnGap);

    return card.offsetWidth + gap;
  }

  // Click right arrow: slide left, then move first card to the end
  recommendNext.addEventListener("click", () => {

    // If the animation is not yet over, do not allow further clicks.
    if (isAnimating) return;

    isAnimating = true;

    const distance = getRecommendSlideDistance();

    // Animation
    recommendProducts.style.transition = "transform 0.45s ease";
    recommendProducts.style.transform = "translateX(-" + distance + "px)";

    // Triggered after the animation ends
    recommendProducts.addEventListener("transitionend", function handleTransitionEnd() {

      // Move the first card to the end to achieve an infinite loop
      recommendProducts.appendChild(recommendProducts.firstElementChild);

      // Reset position
      recommendProducts.style.transition = "none";
      recommendProducts.style.transform = "translateX(0)";

      // Prevent duplicate triggering
      recommendProducts.removeEventListener("transitionend", handleTransitionEnd);

      // Allow the next click
      isAnimating = false;
    });
  });

  // Click left arrow: move last card to the front, then slide right
  recommendPrev.addEventListener("click", () => {

    // If the animation is not yet over, do not allow further clicks.
    if (isAnimating) return;

    isAnimating = true;

    const distance = getRecommendSlideDistance();

    // Move the last one to the front
    recommendProducts.style.transition = "none";
    recommendProducts.prepend(recommendProducts.lastElementChild);

    // Set initial offset
    recommendProducts.style.transform = "translateX(-" + distance + "px)";

    // Force the browser to redraw
    recommendProducts.offsetHeight;

    // Animation: Return to original position
    recommendProducts.style.transition = "transform 0.45s ease";
    recommendProducts.style.transform = "translateX(0)";

    recommendProducts.addEventListener("transitionend", function handleTransitionEnd() {

      recommendProducts.removeEventListener("transitionend", handleTransitionEnd);

      isAnimating = false;
    });
  });
}

// —————————————————————————————— Product Page ——————————————————————————————
// Select product page container
const productPage = document.querySelector(".product-page");

// Only run this code on product page
if (productPage) {
  // Get product id and page source from URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "beach-hair-wash";

  // Find current product data
  const currentProduct = products.find(product => {
    return product.id === productId;
  });

  if (currentProduct) {
    // Update browser title
    document.title = currentProduct.name + " | Kusco-Murphy";

    // Get breadcrumb source and trail data
    const fromPage = params.get("from") || "products";
    const trailParam = params.get("trail");

    const trailIds =
      trailParam ? trailParam.split(",") : [];

    const trailProducts = trailIds
      .map(id => products.find(product => product.id === id))
      .filter(product => product !== undefined);

    // Render breadcrumb based on previous page
    if (fromPage === "search") {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: "Search Results", href: "Search Result.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "home") {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "cart") {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: "Shopping Cart", href: "Shopping Cart.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "product") {

      const breadcrumbItems = [
        { label: "Home", href: "index.html" },
      ];

      // Add previous related products into breadcrumb
      trailProducts.forEach(product => {
        breadcrumbItems.push({
          label: product.name,
          href:
            "Product Page.html?id=" +
            product.id +
            "&from=product&trail=" +
            trailIds
              .slice(0, trailIds.indexOf(product.id))
              .join(",")
        });
  });

      breadcrumbItems.push({
        label: currentProduct.name
      });

      renderBreadcrumb(breadcrumbItems);

    } else {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: "Products", href: "Products.html" },
        { label: currentProduct.name }
      ]);
    }

    // Fill basic product information
    document.getElementById("productTitle").textContent =
      currentProduct.name;

    document.getElementById("productPrice").innerHTML =
      "$" +
      currentProduct.price.toFixed(2) +
      " <span>inc GST</span>";

    document.getElementById("productShortDescription").textContent =
      currentProduct.shortDescription;

    document.getElementById("productSize").textContent =
      currentProduct.size;

    // Fill main product image
    const mainProductImage =
      document.getElementById("mainProductImage");

    mainProductImage.src = currentProduct.images.gallery[0];
    mainProductImage.alt = currentProduct.name;

    // Render thumbnail images
    const thumbnailList =
      document.getElementById("thumbnailList");

    thumbnailList.innerHTML = "";

    const galleryImages = [
      ...currentProduct.images.gallery.slice(3),
      ...currentProduct.images.gallery,
      ...currentProduct.images.gallery.slice(0, 2)
    ];

    galleryImages.forEach((image, index) => {
      const li = document.createElement("li");

      li.innerHTML =
        `
        <button type="button" data-image="` +
        image +
        `">
          <img src="` +
        image +
        `" alt="` +
        currentProduct.name +
        ` thumbnail ` +
        (index + 1) +
        `">
        </button>
      `;

      thumbnailList.appendChild(li);
    });

    // Render key benefits
    const benefitList =
      document.getElementById("benefitList");

    benefitList.innerHTML = "";

    currentProduct.benefits.forEach(benefit => {
      const li = document.createElement("li");
      li.textContent = benefit;
      benefitList.appendChild(li);
    });

    // Render related product
    const goesWellContainer =
      document.getElementById("goesWellContainer");

    goesWellContainer.innerHTML = "";

    if (
      currentProduct.goesWellWith &&
      currentProduct.goesWellWith.length > 0
    ) {

      const relatedProduct = products.find(product => {
        return product.id === currentProduct.goesWellWith[0];
      });

      if (relatedProduct) {

        goesWellContainer.innerHTML =
          `
          <article class="mini-product-card">

            <a href="Product Page.html?id=` +
          relatedProduct.id +
          `&from=product&trail=` +
          [...trailIds, currentProduct.id].join(",") +
          `" class="mini-product-link">

              <div class="mini-product-image">
                <img src="` +
          relatedProduct.images.card +
          `" alt="` +
          relatedProduct.name +
          `">
              </div>

              <div class="mini-product-info">
                <h3>` +
          relatedProduct.name +
          `</h3>

                <p>` +
          relatedProduct.size +
          `</p>
              </div>

              <p class="mini-price">
                $` +
          relatedProduct.price.toFixed(2) +
          ` <span>inc GST</span>
              </p>
            </a>

            <button type="button" class="add-to-cart">
              Add To Cart
            </button>

          </article>
        `;

        const relatedAddToCartBtn =
          goesWellContainer.querySelector(".add-to-cart");

        if (relatedAddToCartBtn) {

          relatedAddToCartBtn.addEventListener("click", () => {

            addProductToCart(relatedProduct.id, 1);

            showCartModal([
              {
                ...relatedProduct,
                quantity: 1
              }
            ]);
          });
        }
      }
    }

    // Product page main Add To Cart button
    const productAddToCart =
      document.getElementById("productAddToCart");

    if (productAddToCart) {

      productAddToCart.addEventListener("click", () => {

        const quantity =
          Number(document.getElementById("quantityNumber").textContent);

        addProductToCart(currentProduct.id, quantity);

        showCartModal([
          {
            ...currentProduct,
            quantity: quantity
          }
        ]);
      });
    }

    // Fill description and application text
    document.getElementById("descriptionTitle").textContent =
      currentProduct.description.title;

    document.getElementById("descriptionParagraphs").innerHTML =
      currentProduct.description.paragraphs
        .map(paragraph => "<p>" + paragraph + "</p>")
        .join("");

    document.getElementById("applicationTitle").textContent =
      currentProduct.application.title;

    document.getElementById("applicationParagraphs").innerHTML =
      currentProduct.application.paragraphs
        .map(paragraph => "<p>" + paragraph + "</p>")
        .join("");

    // Render description/application image carousel
    function renderIntroCarousel(containerId, images, altText) {
      const container = document.getElementById(containerId);
      container.innerHTML = "";

      images.forEach((image, index) => {
        const img = document.createElement("img");

        img.classList.add("intro-slide");

        if (index === 0) {
          img.classList.add("active");
        }

        img.src = image;
        img.alt = altText + " image " + (index + 1);

        container.appendChild(img);
      });

      const dots = document.createElement("div");
      dots.classList.add("intro-dots");

      images.forEach((image, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.classList.add("intro-dot");

        if (index === 0) {
          dot.classList.add("active");
        }

        dots.appendChild(dot);
      });

      container.appendChild(dots);
    }

    renderIntroCarousel(
      "descriptionImageCarousel",
      currentProduct.images.description,
      currentProduct.name
    );

    renderIntroCarousel(
      "applicationImageCarousel",
      currentProduct.images.application,
      currentProduct.name
    );
  }
}

// —————————— Thumbnail Carousel ——————————
const mainProductImage = document.getElementById("mainProductImage");
const thumbnailList = document.getElementById("thumbnailList");

if (mainProductImage && thumbnailList) {
  // Convert all <li> elements into an array
  const thumbnails = Array.from(thumbnailList.children);
  const totalItems = thumbnails.length;
  
  // Current logical center index
  let logicalIndex = 2; 

  // Prevent consecutive clicks
  let isAnimating = false;

  // Update the carousel layout
  function updateInfiniteLayout() {
    thumbnails.forEach((item, i) => {
      // Clear old state
      item.className = "";
      
      // // Calculate the offset of each image relative to the logical center
      let diff = i - (logicalIndex % totalItems);
      
      // Ensure to take the shortest path
      if (diff > totalItems / 2) diff -= totalItems;
      if (diff < -totalItems / 2) diff += totalItems;

      // Assign the class name for the position
      if (diff >= -2 && diff <= 2) {
        item.classList.add("thumb-active-" + (diff + 2));
        if (diff === 0) {
          item.classList.add("active");
          // Update Main Image
          const imgUrl = item.querySelector("button").dataset.image;
          if (mainProductImage.src !== imgUrl) {
            mainProductImage.src = imgUrl;
          }
        }

        // The preparing picture on the right
      } else if (diff === 3) {
        item.classList.add("thumb-prepare-right");

        // The preparing picture on the left
      } else if (diff === -3) {
        item.classList.add("thumb-prepare-left");

        // Hide all the others
      } else {
        item.classList.add("thumb-hidden");
      }
    });
  }

  // Bind click event
  thumbnails.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (isAnimating) return;
      
      // Calculate the distance of the clicked image from the center
      let diff = i - (logicalIndex % totalItems);
      if (diff > totalItems / 2) diff -= totalItems;
      if (diff < -totalItems / 2) diff += totalItems;

      // The click is on the current image, and no action is taken.
      if (diff === 0) return;

      isAnimating = true;

      // Infinite scrolling
      logicalIndex += diff;
      
      updateInfiniteLayout();

      // Wait until the animation ends
      setTimeout(() => {
        isAnimating = false;
      }, 450);
    });
  });

  updateInfiniteLayout();
}

// —————————— Quantity Control ——————————
const minusQty = document.getElementById("minusQty");
const plusQty = document.getElementById("plusQty");
const quantityNumber = document.getElementById("quantityNumber");
const leftDivider = document.querySelector(".quantity-control .left-divider");

if (minusQty && plusQty && quantityNumber && leftDivider) {
  let quantity = 1;

  function updateQuantityState() {
    quantityNumber.textContent = quantity;

    // If the quantity is less than or equal to 1, disable the minus button and make the divider line gray.
    if (quantity <= 1) {
      minusQty.disabled = true;
      leftDivider.classList.add("disabled");
    } else {
      minusQty.disabled = false;
      leftDivider.classList.remove("disabled");
    }
  }

  minusQty.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateQuantityState();
    }
  });

  plusQty.addEventListener("click", () => {
    quantity++;
    updateQuantityState();
  });

  updateQuantityState();
}

// —————————— Key Benefits ——————————
const benefitToggle = document.getElementById("benefitToggle");
const benefitBox = document.querySelector(".benefit-box");

if (benefitToggle && benefitBox) {
  benefitToggle.addEventListener("click", () => {
    benefitBox.classList.toggle("open");
  });
}

// —————————— Description & Application tabs ——————————
const introTabs = document.querySelectorAll(".intro-tab");
const introContents = document.querySelectorAll(".intro-content");

introTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-target");

    // Switch tab status
    introTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Switch Content
    introContents.forEach(content => {
      if (content.id === targetId) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});

// —————————— Description & Application: Image Carousels ——————————
const introImageCarousels = document.querySelectorAll(".intro-image-carousel");

introImageCarousels.forEach(carousel => {
  const slides = carousel.querySelectorAll(".intro-slide");
  const dots = carousel.querySelectorAll(".intro-dot");

  let imageIndex = 0;

  // Switch images
  function showImage(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    imageIndex = index;
  }

  // Next Image
  function showNextImage() {
    const nextIndex = (imageIndex + 1) % slides.length;
    showImage(nextIndex);
  }

  // Automatic Carousel
  let imageTimer = setInterval(showNextImage, 4000);

  // Click the picture: Switch + Reset Timer
  carousel.addEventListener("click", () => {
    showNextImage();
    clearInterval(imageTimer);
    imageTimer = setInterval(showNextImage, 4000);
  });

  // Click on the small dot: Jump to the specified image
  dots.forEach((dot, index) => {
    dot.addEventListener("click", event => {
      event.stopPropagation();
      showImage(index);
      clearInterval(imageTimer);
      imageTimer = setInterval(showNextImage, 4000);
    });
  });
});

// —————————————————————————————— Shopping Cart Page ——————————————————————————————
const cartPage = document.querySelector(".cart-page");

// Only run shopping cart logic on cart page
if (cartPage) {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTitle = document.getElementById("cartTitle");

  const summarySubtotal = document.getElementById("summarySubtotal");
  const summaryShipping = document.getElementById("summaryShipping");
  const summaryTotal = document.getElementById("summaryTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const SHIPPING_FEE = 11;

  // Render breadcrumb navigation
  renderBreadcrumb([
    { label: "Home", href: "index.html" },
    { label: "Shopping Cart" }
  ]);

  // Get full product data from localStorage cart
  function getCartProducts() {
    const cart = getCart();

    return cart
      .map(item => {
        const product = products.find(product => product.id === item.id);

        if (!product) return null;

        return {
          ...product,
          quantity: item.quantity
        };
      })
      .filter(item => item !== null);
  }

  // Calculate total quantity
  function getCartTotalQuantity(cartProducts) {
    return cartProducts.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  // Calculate subtotal price
  function calculateSubtotal(cartProducts) {
    return cartProducts.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  // Update subtotal, shipping, total and checkout button
  function updateCartSummary(cartProducts) {
    const totalQuantity = getCartTotalQuantity(cartProducts);
    const subtotal = calculateSubtotal(cartProducts);

    let shipping;

    if (totalQuantity === 0) {
      shipping = 0;
    } else {
      shipping = SHIPPING_FEE;
    }

    const total = subtotal + shipping;

    cartTitle.textContent =
      "Shopping Cart (" + totalQuantity + ")";

    summarySubtotal.textContent =
      "$" + subtotal.toFixed(2);

    summaryShipping.textContent =
      "$" + shipping.toFixed(2);

    summaryTotal.textContent =
      "$" + total.toFixed(2);
    
    if (totalQuantity === 0) {
      checkoutBtn.innerHTML =
        '<span class="checkout-label">Proceed To Checkout</span>';
    } else {
    checkoutBtn.innerHTML = `
      <span class="checkout-label">Pay</span>
      <span class="checkout-price">$${total.toFixed(2)}</span>`;
    }
  }

  // Update product quantity in cart
  function updateQuantity(productId, newQuantity) {
    const cart = getCart();

    const targetItem = cart.find(item => item.id === productId);

    if (!targetItem) return;

    targetItem.quantity = newQuantity;

    saveCart(cart);

    renderCart();
  }

  // Remove product from cart
  function removeCartItem(productId) {
    let cart = getCart();

    cart = cart.filter(item => item.id !== productId);

    saveCart(cart);

    renderCart();
  }

  // Dynamically generate a cart item
  function renderCartItem(product) {
    const article = document.createElement("article");

    article.classList.add("cart-item");

    article.innerHTML = `
      <a href="Product Page.html?id=` + product.id + `&from=cart" class="cart-product-link">
        <figure class="cart-item-image">
          <img src="` + product.images.card + `" alt="` + product.name + `">
        </figure>

        <section class="cart-item-info">
          <h3>` + product.name + `</h3>
          <p class="cart-size">` + product.size + `</p>

          <p class="cart-price">
            $` + product.price.toFixed(2) + `
            <span>inc GST</span>
          </p>
        </section>
      </a>

      <section class="cart-actions">
        <div class="cart-quantity-control">
          <button type="button" class="cart-qty-btn cart-minus">-</button>
          <span class="cart-qty-divider left-divider"></span>
          <span class="cart-qty-number">` + product.quantity + `</span>
          <span class="cart-qty-divider"></span>
          <button type="button" class="cart-qty-btn cart-plus">+</button>
        </div>

      <button type="button" class="delete-cart-item" aria-label="Remove item">
        <svg viewBox="0 0 24 24" preserveAspectRatio="none">
          <path d="M6 7h12" />
          <path d="M9 7V5.6C9 4.7 9.7 4 10.6 4h2.8C14.3 4 15 4.7 15 5.6V7" />
          <path d="M8 7v11.2C8 19.2 8.8 20 9.8 20h4.4C15.2 20 16 19.2 16 18.2V7" />
          <path d="M10.5 10.5v5.8" />
          <path d="M13.5 10.5v5.8" />
        </svg>
      </button>
      </section>
    `;

    const minusBtn = article.querySelector(".cart-minus");
    const plusBtn = article.querySelector(".cart-plus");
    const deleteBtn = article.querySelector(".delete-cart-item");
    const leftDivider = article.querySelector(".left-divider");

    if (product.quantity <= 1) {
      minusBtn.disabled = true;
      leftDivider.classList.add("disabled");
    }

    minusBtn.addEventListener("click", () => {
      if (product.quantity > 1) {
        updateQuantity(product.id, product.quantity - 1);
      }
    });

    plusBtn.addEventListener("click", () => {
      updateQuantity(product.id, product.quantity + 1);
    });

    deleteBtn.addEventListener("click", () => {
      removeCartItem(product.id);
    });

    return article;
  }

  // Show empty cart message
  function renderEmptyCart() {
    cartItemsContainer.innerHTML = `
      <p class="empty-cart-message">
        Your cart is empty.
      </p>
    `;
  }

  // Render full shopping cart
  function renderCart() {
    const cartProducts = getCartProducts();

    cartItemsContainer.innerHTML = "";

    if (cartProducts.length === 0) {
      renderEmptyCart();
    } else {
      cartProducts.forEach(product => {
        cartItemsContainer.appendChild(renderCartItem(product));
      });
    }

    updateCartSummary(cartProducts);
  }

  // Checkout button logic
  checkoutBtn.addEventListener("click", () => {
    const cartProducts = getCartProducts();

    if (cartProducts.length === 0) {
      alert("Please add items to your cart before proceeding to checkout.");
      return;
    }

    window.location.href = "Checkout.html";
  });

  renderCart();
}