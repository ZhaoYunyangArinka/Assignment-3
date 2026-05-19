// —————————————————————————————— Products Data ——————————————————————————————
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

// —————————————————————————————— Blogs Data ——————————————————————————————
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