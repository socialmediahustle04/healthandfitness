export type Callout = {
  title: string;
  body: string;
  tone?: "sage" | "terracotta" | "navy";
};

export type ArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ContentSubsection = {
  heading: string;
  body: string[];
  bullets?: string[];
  image?: ArticleImage;
  callout?: Callout;
};

export type ContentSectionBlock = {
  heading: string;
  body: string[];
  bullets?: string[];
  image?: ArticleImage;
  subsections?: ContentSubsection[];
  callout?: Callout;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SourceItem = {
  label: string;
  publisher: string;
  url: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  updated: string;
  funnel: "Start Here" | "Guide" | "Safety Guide";
  sections: ContentSectionBlock[];
  related: { label: string; href: string }[];
  lead?: string[];
  heroImage?: ArticleImage;
  keyTakeaways?: string[];
  faqs?: FaqItem[];
  sources?: SourceItem[];
  datePublished?: string;
  dateModified?: string;
  medicalAbout?: string[];
};

export type CategoryHub = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  guides: string[];
  commercialHref?: string;
};

export type BestPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  disclosure: string;
  criteria: string[];
  sections: ContentSectionBlock[];
};

export const pillarGuide: Guide = {
  slug: "weight-loss-after-40",
  medicalAbout: ["Weight loss after 40", "Metabolism", "Menopause", "Midlife weight management"],
  title: "Weight Loss After 40: An Evidence-Informed Guide for Women",
  description:
    "A calm, practical guide to losing weight after 40, covering metabolism, menopause, sleep, stress, protein, and safe next steps.",
  category: "Start Here",
  readTime: "9 min read",
  updated: "2026",
  funnel: "Start Here",
  related: [
    { label: "Metabolism after 40", href: "/guides/metabolism-after-40" },
    { label: "Menopause weight gain", href: "/guides/menopause-weight-gain" },
    { label: "Compare programs", href: "/best/best-weight-loss-programs-for-women-over-40" }
  ],
  sections: [
    {
      heading: "Why old strategies can feel less predictable",
      body: [
        "Weight management can change after 40 because sleep, stress, muscle, appetite, insulin sensitivity, and hormonal shifts often start pulling on the same system at once.",
        "That does not mean progress is impossible. It means the plan usually needs to become more supportive, more strength-focused, and less dependent on extreme restriction."
      ],
      bullets: [
        "Prioritize protein and strength so weight loss does not come at the cost of muscle.",
        "Treat sleep and stress as part of the plan, not as side issues.",
        "Use supplements cautiously and only after the basics are covered."
      ]
    },
    {
      heading: "What to focus on first",
      body: [
        "Start with the highest-leverage habits before buying a program or supplement. A simple baseline of consistent meals, walking, resistance training, and better sleep often clarifies what kind of support you actually need.",
        "If you have a medical condition, take medication, or are experiencing new symptoms, speak with a qualified clinician before making major changes."
      ],
      callout: {
        title: "A safer starting point",
        body: "The best first plan is one you can repeat without feeling punished by it. If a routine requires constant hunger, fear, or urgency, it is usually not built for midlife."
      }
    },
    {
      heading: "When products and programs may help",
      body: [
        "A structured program can help if you need accountability, meal structure, coaching, or a clear plan. Supplements may help with narrow goals in some cases, but they should not be treated as the main strategy.",
        "Our reviews look for realistic claims, transparent pricing, safety notes, and whether an option makes sense for women over 40."
      ]
    }
  ]
};

export const guides: Guide[] = [
  {
    slug: "why-weight-loss-gets-harder-after-40",
    title: "Why Weight Loss Gets Harder After 40 (and What Actually Helps)",
    description:
      "Weight loss after 40 is not about willpower. Here are the real reasons it gets harder, the metabolism myth, and calm, evidence-informed steps that genuinely help.",
    category: "Start Here",
    readTime: "10 min read",
    updated: "2026",
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    medicalAbout: ["Weight loss after 40", "Metabolism", "Menopause", "Midlife weight management"],
    funnel: "Guide",
    related: [
      { label: "Start with the 40+ guide", href: "/weight-loss-after-40" },
      { label: "Metabolism after 40", href: "/guides/metabolism-after-40" },
      { label: "Menopause weight gain", href: "/guides/menopause-weight-gain" },
      { label: "Protein after 40", href: "/guides/protein-after-40" }
    ],
    heroImage: {
      src: "/media/article-images/why-weight-loss-gets-harder-after-40/hero-weight-loss-after-40.webp",
      alt: "A woman in her late forties preparing a simple, protein-forward breakfast in a calm, sunlit kitchen.",
      width: 1600,
      height: 900
    },
    keyTakeaways: [
      "Harder weight loss after 40 is usually about changing body composition and routines, not a sudden lack of willpower.",
      "Your metabolism does not crash at 40; research suggests it stays relatively steady through midlife.",
      "Muscle loss, hormonal shifts, less daily movement, and poorer sleep tend to stack up at the same time.",
      "Strength training, protein at every meal, daily walking, and better sleep are the highest-value habits.",
      "New, severe, or confusing symptoms are worth discussing with a qualified healthcare professional."
    ],
    lead: [
      "If losing weight feels harder than it used to, you are not imagining it, and you are not failing. Many women notice that the same eating and exercise habits that once worked now move the scale slowly, or not at all.",
      "The reasons are real, they overlap, and almost all of them respond to a calmer, more supportive plan. Here is what actually changes after 40, the popular myth worth retiring, and the evidence-informed steps that tend to help most."
    ],
    sections: [
      {
        heading: "The short answer",
        body: [
          "Weight loss often gets harder after 40 because several changes arrive around the same time: you gradually lose calorie-hungry muscle, hormonal shifts can change where fat is stored, daily movement tends to drop, and sleep and stress can quietly raise the difficulty. None of these is a personal failing, and each one is improvable.",
          "The encouraging part is that the levers that matter most are within your control. For the full step-by-step plan, start with our <a href='/weight-loss-after-40'>complete weight-loss-after-40 guide</a>."
        ],
        bullets: [
          "Gradual muscle loss lowers the calories you burn at rest.",
          "Perimenopause and menopause can shift fat toward the abdomen.",
          "Everyday activity often declines without you noticing.",
          "Short sleep and ongoing stress can increase appetite and cravings.",
          "Crash diets backfire faster because they cost you muscle."
        ]
      },
      {
        heading: "It is usually not a \u201cbroken\u201d metabolism",
        body: [
          "The most common explanation you will hear is that your metabolism collapses at 40. That story is mostly a myth. In a large 2021 study published in Science, researchers found that energy expenditure, adjusted for body size, stays relatively stable from about age 20 to 60, then declines more gradually later in life.",
          "Resting metabolism can still shift modestly over the years, mostly because of changes in muscle and activity rather than a sudden midlife switch. That is genuinely good news: it means the difficulty is driven largely by factors you can influence, not by a metabolism that has given up. For a deeper look, see our guide to <a href='/guides/metabolism-after-40'>metabolism after 40</a>."
        ],
        callout: {
          title: "Myth vs reality",
          body: "Your metabolism does not suddenly crash on your 40th birthday. What usually changes is body composition and daily movement, and both respond to consistent habits.",
          tone: "sage"
        }
      },
      {
        heading: "What actually changes after 40",
        body: [
          "There is rarely one single cause. More often, a handful of changes overlap and compound, which is why the same plan that worked at 30 can feel less predictable now."
        ],
        image: {
          src: "/media/article-images/why-weight-loss-gets-harder-after-40/midlife-weight-loss-factors.webp",
          alt: "Editorial illustration showing five midlife factors that affect weight: muscle, hormones, daily activity, sleep, and stress.",
          width: 1600,
          height: 900,
          caption: "Five midlife factors that commonly stack up: muscle, hormones, daily movement, sleep, and stress."
        },
        subsections: [
          {
            heading: "You gradually lose muscle",
            body: [
              "From around your 30s onward, muscle mass tends to decline slowly unless you actively train to maintain it. Because muscle is metabolically active tissue, having less of it can lower the number of calories your body uses at rest, which the Mayo Clinic notes can make it harder to stay at a comfortable weight.",
              "This is the single most addressable factor on the list, and protecting muscle is where a midlife plan earns the most. Our guide on <a href='/guides/protein-after-40'>protein after 40</a> covers how to support it through food."
            ]
          },
          {
            heading: "Hormonal shifts change where fat is stored",
            body: [
              "Perimenopause and menopause are associated with a shift toward more abdominal, or visceral, fat, sometimes even without a large change on the scale. Declining estrogen appears to play a role, but hormones are part of the picture rather than the whole story.",
              "Related symptoms such as disrupted sleep, mood changes, and shifting appetite can compound the difficulty. Our guide to <a href='/guides/menopause-weight-gain'>menopause weight gain</a> goes deeper, and decisions about hormone therapy or other medical options belong with a clinician who knows your history."
            ],
            callout: {
              title: "Hormones are one factor, not the only one",
              body: "It is tempting to blame a single hormone, but midlife weight change is usually the result of several overlapping factors working together.",
              tone: "navy"
            }
          },
          {
            heading: "You probably move less than you used to",
            body: [
              "Daily, non-exercise movement tends to fall in midlife as routines become busier and more sedentary. The Mayo Clinic notes that most people become less active with age, and those small reductions in everyday motion add up over weeks and months.",
              "This drop is often invisible because it is not about skipped workouts, but about fewer steps, more sitting, and less incidental activity across an ordinary day."
            ]
          },
          {
            heading: "Sleep and stress quietly raise the difficulty",
            body: [
              "Short or poor-quality sleep is associated with stronger appetite, more snacking, and lower energy for movement. The Mayo Clinic points out that when people do not get enough sleep, they tend to eat and drink more calories.",
              "Ongoing stress can affect eating patterns, routines, and recovery too. These levers are easy to overlook, but they often make every other habit harder. See our guides on <a href='/guides/sleep-and-weight-loss'>sleep and weight loss</a> and <a href='/guides/cortisol-and-weight-gain'>what cortisol can and cannot explain</a>."
            ],
            image: {
              src: "/media/article-images/why-weight-loss-gets-harder-after-40/sleep-stress-routine-after-40.webp",
              alt: "A calm evening wind-down scene with a bedside lamp, herbal tea, and a book, suggesting a consistent sleep routine.",
              width: 1200,
              height: 900,
              caption: "A consistent, low-key evening routine can make the next day's choices easier."
            }
          },
          {
            heading: "Old crash-diet habits backfire faster now",
            body: [
              "Very low-calorie or extreme plans can strip away muscle, which is exactly the tissue a midlife body benefits from keeping. Repeated cycles of severe restriction followed by rebound can leave you feeling like progress is harder each time.",
              "A gentler, more sustainable approach tends to protect muscle and is far easier to repeat, which matters more than short-term speed."
            ]
          }
        ]
      },
      {
        heading: "What actually helps after 40",
        body: [
          "The good news is that the most effective steps are also the most sustainable. Think of these as supportive habits you can repeat, not a punishing regimen with an expiry date."
        ],
        image: {
          src: "/media/article-images/why-weight-loss-gets-harder-after-40/strength-protein-walking-after-40.webp",
          alt: "A woman over 40 doing light dumbbell strength exercises at home in comfortable clothing.",
          width: 1200,
          height: 900,
          caption: "Strength training a couple of times a week is one of the highest-value habits after 40."
        },
        subsections: [
          {
            heading: "Protect muscle with strength training",
            body: [
              "Resistance training helps preserve the muscle that supports your metabolism, strength, and day-to-day function. The Physical Activity Guidelines for Americans recommend muscle-strengthening activity on two or more days per week, alongside regular aerobic activity.",
              "If you are new to lifting or managing an injury, start light, focus on form, and progress gradually. Working with a qualified trainer or physical therapist early can make this safer and more effective."
            ]
          },
          {
            heading: "Make protein visible at every meal",
            body: [
              "Adequate protein supports muscle maintenance and helps you feel full, which makes a calorie-aware plan easier to stick with. A simple starting point is to anchor each meal with a clear protein source rather than tracking every gram.",
              "Whole foods can do most of the work, and protein powders are optional rather than essential. Individual needs vary, so if you have kidney disease or another condition, check with your clinician. Our <a href='/guides/protein-after-40'>protein after 40 guide</a> has practical examples."
            ],
            bullets: [
              "Build breakfast around eggs, Greek yogurt, or a similar protein.",
              "Add a palm-sized protein source to lunch and dinner.",
              "Pair protein with fiber-rich vegetables, fruit, or whole grains."
            ]
          },
          {
            heading: "Add easy daily movement like walking",
            body: [
              "Walking is an underrated way to rebuild the everyday activity that tends to slip in midlife, and it pairs well with strength work without adding burnout. General guidance suggests aiming toward about 150 minutes of moderate activity per week, built up gradually.",
              "Short walks after meals, a longer weekend walk, or simply more standing and stepping through the day all count."
            ]
          },
          {
            heading: "Treat sleep and stress as part of the plan",
            body: [
              "A consistent sleep routine and realistic stress management are not side issues; they make every other habit easier. Aim for regular sleep and wake times, lower light in the evening, and a wind-down cue your body can recognize.",
              "If insomnia, hot flashes, or breathing issues keep disrupting your sleep, that is worth raising with a healthcare professional rather than pushing through."
            ]
          },
          {
            heading: "Choose a calorie approach you can sustain",
            body: [
              "A modest, livable calorie reduction almost always beats an extreme one, because the goal is something you can repeat for months, not days. Protein and fiber help here by keeping you fuller on fewer calories.",
              "If accountability or structure is the piece you are missing, a well-run program can help. Our <a href='/best/best-weight-loss-programs-for-women-over-40'>comparison of weight-loss programs for women over 40</a> explains what to look for before you commit."
            ]
          }
        ]
      },
      {
        heading: "When to talk to a healthcare professional",
        body: [
          "Self-directed habits help most people, but some situations deserve personalized guidance. Consider speaking with a qualified healthcare professional if you have unexplained weight changes, suspect a thyroid or other medical issue, take medications that may affect weight, are navigating disruptive perimenopause or menopause symptoms, or have a history of disordered eating.",
          "A clinician who knows your full history can rule things out, tailor advice safely, and help you avoid trial-and-error that wears you down."
        ],
        callout: {
          title: "A simple rule of thumb",
          body: "If something feels new, severe, or confusing, it is always reasonable to pause and check with a professional before making big changes.",
          tone: "terracotta"
        }
      }
    ],
    faqs: [
      {
        question: "Why is it so much harder to lose weight after 40?",
        answer:
          "It is usually not one cause but several at once: gradual muscle loss, hormonal shifts that can change where fat is stored, less daily movement, and poorer sleep or higher stress. Each of these can be improved with consistent, supportive habits."
      },
      {
        question: "Does your metabolism really slow down at 40?",
        answer:
          "Not in the dramatic way many ads suggest. Research published in Science in 2021 found that energy expenditure, adjusted for body size, stays relatively steady from about age 20 to 60. Changes in muscle and daily activity matter more than a sudden metabolic drop."
      },
      {
        question: "Can you still lose weight after 40 and during menopause?",
        answer:
          "Yes. Weight management can feel less predictable during perimenopause and menopause, but a plan built around strength training, adequate protein, daily movement, and better sleep can still work. Personalized medical input helps if symptoms are disruptive."
      },
      {
        question: "Is it harder to lose belly fat after 40?",
        answer:
          "Hormonal changes around menopause are associated with more fat being stored around the abdomen, so it can feel more stubborn. There is no way to target fat from one area, but overall habits that protect muscle and reduce excess calories tend to help."
      },
      {
        question: "How much protein do women over 40 need?",
        answer:
          "Needs vary by body size, activity, and health, so there is no single number for everyone. A practical approach is to include a clear protein source at each meal to support muscle and fullness. If you have kidney disease or another condition, ask your clinician for guidance."
      }
    ],
    sources: [
      {
        label: "Menopause weight gain: Stop the middle-age spread",
        publisher: "Mayo Clinic",
        url: "https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menopause-weight-gain/art-20046058"
      },
      {
        label: "Daily energy expenditure through the human life course (2021)",
        publisher: "Pontzer et al., Science",
        url: "https://www.science.org/doi/10.1126/science.abe5017"
      },
      {
        label: "Physical Activity Guidelines for Americans, 2nd edition",
        publisher: "U.S. Department of Health and Human Services",
        url: "https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines"
      },
      {
        label: "Exercise and physical activity: strength training",
        publisher: "National Institute on Aging",
        url: "https://www.nia.nih.gov/health/exercise-and-physical-activity"
      },
      {
        label: "Preserve your muscle mass",
        publisher: "Harvard Health Publishing",
        url: "https://www.health.harvard.edu/staying-healthy/preserve-your-muscle-mass"
      },
      {
        label: "Choosing a safe and successful weight-loss program",
        publisher: "NIDDK",
        url: "https://www.niddk.nih.gov/health-information/weight-management/choosing-a-safe-successful-weight-loss-program"
      },
      {
        label: "Perimenopause",
        publisher: "Cleveland Clinic",
        url: "https://my.clevelandclinic.org/health/diseases/21608-perimenopause"
      },
      {
        label: "Weight loss and sleep",
        publisher: "Sleep Foundation",
        url: "https://www.sleepfoundation.org/physical-health/weight-loss-and-sleep"
      }
    ]
  },
  {
    slug: "metabolism-after-40",
    medicalAbout: ["Metabolism", "Weight loss after 40", "Muscle mass", "Midlife weight management"],
    title: "Metabolism After 40: What Changes and What Still Matters",
    description:
      "Understand metabolism after 40 without panic, including muscle, movement, protein, sleep, and realistic expectations.",
    category: "Metabolism",
    readTime: "6 min read",
    updated: "2026",
    funnel: "Guide",
    related: [
      { label: "Weight loss after 40", href: "/weight-loss-after-40" },
      { label: "Menopause weight gain", href: "/guides/menopause-weight-gain" },
      { label: "Protein after 40", href: "/guides/protein-after-40" }
    ],
    sections: [
      {
        heading: "Metabolism is not broken",
        body: [
          "Metabolism can change with age, but most midlife weight gain is not explained by age alone. Muscle loss, lower activity, sleep disruption, medications, and appetite changes can all matter.",
          "The practical question is not how to hack metabolism. It is how to protect the habits that support it."
        ]
      },
      {
        heading: "Muscle is a quiet advantage",
        body: [
          "Strength training helps preserve muscle and function. It can also make a weight-loss plan more sustainable because the goal is not only a lower scale number.",
          "If you are new to lifting or have injuries, start with professional guidance or a beginner-friendly program."
        ]
      }
    ]
  },
  {
    slug: "menopause-weight-gain",
    medicalAbout: ["Menopause", "Perimenopause", "Weight gain", "Midlife weight management"],
    title: "Menopause Weight Gain: A Practical, Evidence-Informed Guide",
    description:
      "A calm guide to menopause, appetite, sleep, body composition, and realistic weight-management strategies.",
    category: "Hormones",
    readTime: "8 min read",
    updated: "2026",
    funnel: "Guide",
    related: [
      { label: "Weight loss after 40", href: "/weight-loss-after-40" },
      { label: "Sleep and weight loss", href: "/guides/sleep-and-weight-loss" },
      { label: "Cortisol and weight gain", href: "/guides/cortisol-and-weight-gain" }
    ],
    sections: [
      {
        heading: "Menopause can change the context",
        body: [
          "Perimenopause and menopause can affect sleep, energy, mood, appetite, and where fat is stored. Those changes can make weight management feel less straightforward.",
          "It is still worth avoiding one-cause explanations. Menopause is part of the picture, not the only variable."
        ],
        callout: {
          title: "Talk to a clinician",
          body: "If symptoms are new, severe, or affecting your quality of life, discuss them with a qualified healthcare professional. A website cannot evaluate your medical history.",
          tone: "terracotta"
        }
      },
      {
        heading: "What tends to help",
        body: [
          "A useful plan often combines resistance training, protein-forward meals, fiber-rich foods, walking, sleep support, and a calorie approach that does not trigger rebound eating.",
          "Medical options may be appropriate for some people. Those decisions belong with a clinician who knows your history."
        ]
      }
    ]
  },
  {
    slug: "sleep-and-weight-loss",
    medicalAbout: ["Sleep", "Weight loss after 40", "Appetite regulation"],
    title: "Sleep and Weight Loss: Why Rest Affects Cravings and Energy",
    description:
      "How sleep can influence appetite, cravings, training energy, and consistency in a midlife weight-loss plan.",
    category: "Sleep",
    readTime: "5 min read",
    updated: "2026",
    funnel: "Guide",
    related: [
      { label: "Cortisol and weight gain", href: "/guides/cortisol-and-weight-gain" },
      { label: "Weight loss after 40", href: "/weight-loss-after-40" },
      { label: "Meal plans", href: "/categories/meal-plans" }
    ],
    sections: [
      {
        heading: "Sleep changes the next day's choices",
        body: [
          "Poor sleep can make cravings stronger, energy lower, and planning harder. It can also make workouts feel more difficult and reduce patience with meal prep.",
          "Better sleep does not guarantee weight loss, but it can make the habits that support weight loss easier to repeat."
        ]
      },
      {
        heading: "Build a repeatable evening routine",
        body: [
          "A useful sleep routine is boring in the best way: consistent timing, lower light, less late caffeine, and a wind-down cue your body can recognize.",
          "If insomnia, hot flashes, or breathing issues are persistent, talk with a healthcare professional."
        ]
      }
    ]
  },
  {
    slug: "cortisol-and-weight-gain",
    medicalAbout: ["Cortisol", "Stress", "Weight gain", "Dietary supplements"],
    title: "Cortisol and Weight Gain: What Stress Can and Cannot Explain",
    description:
      "A grounded look at cortisol, stress, appetite, sleep, belly fat claims, and supplement caution.",
    category: "Stress",
    readTime: "6 min read",
    updated: "2026",
    funnel: "Safety Guide",
    related: [
      { label: "Sleep and weight loss", href: "/guides/sleep-and-weight-loss" },
      { label: "Supplement safety", href: "/guides/weight-loss-supplements-guide" },
      { label: "Cortisol supplement picks", href: "/best/best-cortisol-supplements-for-weight-loss" }
    ],
    sections: [
      {
        heading: "Cortisol is not a villain",
        body: [
          "Cortisol is a normal hormone involved in stress response, energy, and daily rhythm. The internet often turns it into a simple villain, especially around belly fat.",
          "Stress can influence eating, sleep, cravings, alcohol use, movement, and recovery. Those pathways may matter more than a single hormone number."
        ]
      },
      {
        heading: "Be careful with cortisol supplement claims",
        body: [
          "Supplements marketed for cortisol and belly fat often use confident language around a complex topic. Some ingredients may have limited evidence for stress support, but that is not the same as proven fat loss.",
          "Check medication interactions and health conditions before using stress or sleep supplements."
        ],
        callout: {
          title: "Claim check",
          body: "Avoid products that promise to flatten your stomach by fixing cortisol. That is a marketing shortcut, not a responsible health claim.",
          tone: "navy"
        }
      }
    ]
  },
  {
    slug: "protein-after-40",
    medicalAbout: ["Dietary protein", "Muscle mass", "Weight loss after 40", "Nutrition"],
    title: "Protein After 40: How It Supports Muscle, Fullness, and Progress",
    description:
      "A practical guide to protein for women over 40, including muscle preservation, fullness, and meal planning.",
    category: "Nutrition",
    readTime: "6 min read",
    updated: "2026",
    funnel: "Guide",
    related: [
      { label: "Metabolism after 40", href: "/guides/metabolism-after-40" },
      { label: "Meal plans", href: "/categories/meal-plans" },
      { label: "Weight loss after 40", href: "/weight-loss-after-40" }
    ],
    sections: [
      {
        heading: "Protein is not only for athletes",
        body: [
          "Protein helps support muscle maintenance, fullness, and recovery. For women over 40, it can be especially useful when paired with resistance training.",
          "You do not need a perfect macro plan to benefit. Start by making protein visible at breakfast, lunch, and dinner."
        ]
      },
      {
        heading: "Make it practical",
        body: [
          "The best protein approach is the one that fits your food preferences, digestion, budget, and cooking routine.",
          "Whole foods can do most of the work. Protein powders can be convenient, but they are not required."
        ]
      }
    ]
  },
  {
    slug: "weight-loss-supplements-guide",
    medicalAbout: ["Dietary supplements", "Weight loss", "Supplement safety"],
    title: "Weight-Loss Supplements: How to Evaluate Claims Before Buying",
    description:
      "A safety-first guide to reading supplement labels, checking claims, and deciding what is worth discussing with a clinician.",
    category: "Supplements",
    readTime: "9 min read",
    updated: "2026",
    funnel: "Safety Guide",
    related: [
      { label: "Supplements and safety", href: "/categories/supplements-safety" },
      { label: "Cortisol and weight gain", href: "/guides/cortisol-and-weight-gain" },
      { label: "Cortisol supplement comparison", href: "/best/best-cortisol-supplements-for-weight-loss" }
    ],
    sections: [
      {
        heading: "Start with the claim",
        body: [
          "Before reading a label, write down what the product is actually promising. Is it appetite support, stress support, energy, digestion, or direct fat loss?",
          "The more dramatic the claim, the more evidence it should need. Be especially cautious with products that imply rapid results without behavior change."
        ]
      },
      {
        heading: "Check safety before excitement",
        body: [
          "Look for ingredient amounts, stimulant content, medication cautions, pregnancy cautions, and refund terms. If a product hides these details, that lowers trust.",
          "Supplements can interact with medications and conditions. A clinician or pharmacist can help you check whether an ingredient is appropriate for you."
        ],
        bullets: [
          "Avoid proprietary blends that hide individual ingredient amounts.",
          "Be cautious with stimulants if you have blood pressure, anxiety, sleep, or heart concerns.",
          "Do not use supplement reviews as medical advice."
        ]
      }
    ]
  }
];

export const allGuides = [pillarGuide, ...guides];

export const categoryHubs: CategoryHub[] = [
  {
    slug: "metabolism-hormones",
    title: "Metabolism & Hormones",
    description:
      "Guides on metabolism, menopause, muscle, and the midlife changes that can affect weight management.",
    intro:
      "This hub keeps the biology calm and practical. Start here when you want to understand what changed without being pushed into a miracle solution.",
    guides: ["metabolism-after-40", "menopause-weight-gain", "why-weight-loss-gets-harder-after-40"],
    commercialHref: "/best/best-weight-loss-programs-for-women-over-40"
  },
  {
    slug: "sleep-stress-cortisol",
    title: "Sleep, Stress & Cortisol",
    description:
      "Evidence-aware guides on sleep, stress routines, cortisol claims, cravings, and safety-first supplement decisions.",
    intro:
      "Stress and sleep can affect consistency, appetite, and energy. This hub separates useful routines from overconfident hormone marketing.",
    guides: ["sleep-and-weight-loss", "cortisol-and-weight-gain"],
    commercialHref: "/best/best-cortisol-supplements-for-weight-loss"
  },
  {
    slug: "supplements-safety",
    title: "Supplements & Safety",
    description:
      "How to evaluate supplement claims, labels, evidence, interactions, and refund terms before buying.",
    intro:
      "Supplement decisions deserve more caution than hype. Use this hub to check claims, safety questions, and the limits of ingredient evidence.",
    guides: ["weight-loss-supplements-guide", "cortisol-and-weight-gain"],
    commercialHref: "/best/best-cortisol-supplements-for-weight-loss"
  },
  {
    slug: "programs-reviews",
    title: "Programs & Reviews",
    description:
      "Compare weight-loss programs by support, flexibility, pricing, sustainability, and fit for women over 40.",
    intro:
      "A program can help when structure and support are the missing pieces. This hub focuses on realistic fit, not pressure or dramatic promises.",
    guides: ["weight-loss-supplements-guide", "why-weight-loss-gets-harder-after-40"],
    commercialHref: "/best/best-weight-loss-programs-for-women-over-40"
  },
  {
    slug: "meal-plans",
    title: "Meal Plans",
    description:
      "Protein-forward meal planning, simple routines, and practical food structure for women over 40.",
    intro:
      "Meal planning works best when it reduces decision fatigue. This hub focuses on repeatable structure, protein, fiber, and real-life flexibility.",
    guides: ["protein-after-40", "sleep-and-weight-loss", "weight-loss-supplements-guide"]
  }
];

export const bestPages: BestPage[] = [
  {
    slug: "best-weight-loss-programs-for-women-over-40",
    title: "Best Weight-Loss Programs for Women Over 40",
    description:
      "A safety-first framework for comparing weight-loss programs for women over 40 by support, flexibility, pricing, and sustainability.",
    intro:
      "This page is a planning framework for our full program reviews. It explains what we will compare and how to judge a program before joining.",
    disclosure:
      "Some program links may be affiliate links. We do not recommend a program only because it pays commission, and this page is educational until individual reviews are published.",
    criteria: [
      "Realistic claims",
      "Support and coaching quality",
      "Nutrition flexibility",
      "Strength and muscle support",
      "Pricing transparency",
      "Refund and cancellation clarity"
    ],
    sections: [
      {
        heading: "What a good program should do",
        body: [
          "For women over 40, a good weight-loss program should support habits that protect muscle, energy, and consistency. It should not rely on shame, extreme restriction, or vague transformation promises.",
          "The strongest programs make the next step clear while still leaving room for medical needs, food preferences, budget, and schedule."
        ]
      },
      {
        heading: "How we will compare programs",
        body: [
          "Our full reviews will look at who the program is for, who should avoid it, total cost, support access, cancellation terms, and whether the nutrition approach is sustainable.",
          "We will also flag programs that make claims better suited for a sales page than a health decision."
        ]
      }
    ]
  },
  {
    slug: "best-cortisol-supplements-for-weight-loss",
    title: "Best Cortisol Supplements for Weight Loss: A Safety-First Guide",
    description:
      "A careful framework for evaluating cortisol supplement claims, ingredients, safety notes, and realistic expectations.",
    intro:
      "This page helps you understand how we evaluate stress and cortisol supplement claims before the full product reviews are published.",
    disclosure:
      "Some supplement links may be affiliate links. Supplements are not a substitute for medical care, and this page does not diagnose or treat any condition.",
    criteria: [
      "Claim realism",
      "Ingredient transparency",
      "Dose clarity",
      "Medication and condition cautions",
      "Third-party testing signals",
      "Refund clarity"
    ],
    sections: [
      {
        heading: "Cortisol claims need extra caution",
        body: [
          "Many products use cortisol language to imply direct belly-fat loss. Stress can affect sleep, appetite, and routine, but that is not the same as proving a supplement causes fat loss.",
          "A careful comparison should separate stress-support evidence from weight-loss claims."
        ],
        callout: {
          title: "Safety first",
          body: "Talk with a clinician or pharmacist before using stress, sleep, or cortisol supplements if you take medication or have a medical condition.",
          tone: "terracotta"
        }
      },
      {
        heading: "What we will look for in reviews",
        body: [
          "The most useful products disclose ingredient amounts, avoid dramatic promises, provide clear cautions, and make cancellation or refunds easy to understand.",
          "Products with hidden blends, aggressive belly-fat claims, or unclear safety information will be rated more cautiously."
        ]
      }
    ]
  }
];

export function getGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}

export function getCategory(slug: string) {
  return categoryHubs.find((category) => category.slug === slug);
}

export function getBestPage(slug: string) {
  return bestPages.find((page) => page.slug === slug);
}
