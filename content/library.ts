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
    title: "Metabolism After 40: What Really Changes (and Helps)",
    description:
      "Does metabolism really crash at 40? Here is the calm, evidence-based truth about what changes, what does not, and what actually helps.",
    category: "Metabolism",
    readTime: "9 min read",
    updated: "2026",
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    funnel: "Guide",
    related: [
      { label: "Weight loss after 40", href: "/weight-loss-after-40" },
      { label: "Why weight loss gets harder after 40", href: "/guides/why-weight-loss-gets-harder-after-40" },
      { label: "Menopause weight gain", href: "/guides/menopause-weight-gain" },
      { label: "Protein after 40", href: "/guides/protein-after-40" }
    ],
    heroImage: {
      src: "/media/article-images/metabolism-after-40/hero-metabolism-after-40.webp",
      alt: "An active woman in her late forties walking outdoors in soft morning light, looking energetic and at ease.",
      width: 1600,
      height: 900
    },
    keyTakeaways: [
      "Your metabolism does not suddenly crash at 40; research suggests it stays relatively steady from about age 20 to 60.",
      "Resting metabolism is the largest part of daily energy use, and it is not something you can meaningfully speed up.",
      "What you can influence is muscle and everyday movement, and both tend to slip in midlife.",
      "Strength training, enough protein, and more daily movement support your metabolism far better than any booster.",
      "Products that promise to boost or reset your metabolism rarely live up to the claims."
    ],
    lead: [
      "If you have been told your metabolism is broken, that it crashed on your fortieth birthday, and that you now need to boost it back to life, you have plenty of company. That story is everywhere, and it tends to leave women feeling like their own body is working against them.",
      "The honest version is calmer and a lot more useful. Here is what the evidence actually says about metabolism after 40, what genuinely changes, what does not, and the realistic steps that help most."
    ],
    sections: [
      {
        heading: "The short answer",
        body: [
          "Your metabolism does not collapse at 40. Large research on energy expenditure suggests that the calories your body uses each day, once you account for body size, stay relatively steady from about age 20 to 60. The sense that things have shifted is real, but it usually comes from losing muscle and moving less, not from a broken engine.",
          "That distinction matters, because it points you toward the things you can change. For the full midlife picture, start with our <a href='/weight-loss-after-40'>complete guide to weight loss after 40</a>."
        ],
        bullets: [
          "Daily energy use, adjusted for body size, holds fairly steady through midlife.",
          "Resting metabolism is the biggest share, and you cannot easily change its speed.",
          "Muscle and everyday movement are the parts you can actually influence.",
          "Most age-related change is gradual, not a sudden midlife switch."
        ]
      },
      {
        heading: "The metabolism myth: it does not crash at 40",
        body: [
          "The most repeated claim in midlife health is that your metabolism falls off a cliff at 40. A large 2021 study published in Science mapped energy expenditure across the whole lifespan and found something more reassuring. After a busy first year of life and a slow decline through childhood, energy use adjusted for body size settles into a long, stable stretch from about age 20 to 60. A more gradual decline of less than 1 percent a year tends to begin later, closer to 60.",
          "So the idea of a switch flipping at 40 is mostly a myth. The difficulty many women feel is genuine, but it is driven by factors you can work with rather than by a metabolism that has given up. Our guide on <a href='/guides/why-weight-loss-gets-harder-after-40'>why weight loss gets harder after 40</a> walks through how those factors add up."
        ],
        callout: {
          title: "Myth vs reality",
          body: "Your metabolism does not crash on your fortieth birthday. What usually changes is muscle, daily movement, and routine, and each of those responds to steady habits.",
          tone: "sage"
        }
      },
      {
        heading: "What actually makes up your daily energy use",
        body: [
          "It helps to picture where your calories actually go each day. Once you can see the parts, it becomes clear why you cannot simply speed up the engine, and which pieces are genuinely within your control."
        ],
        image: {
          src: "/media/article-images/metabolism-after-40/metabolism-daily-energy-factors.webp",
          alt: "Editorial illustration of what makes up daily energy use: resting metabolism, muscle, everyday movement, exercise, and digestion.",
          width: 1600,
          height: 900,
          caption: "Most of your daily energy use is your resting metabolism; muscle and everyday movement are the parts you can most influence."
        },
        subsections: [
          {
            heading: "Resting metabolism, the biggest share",
            body: [
              "Even at rest, your body is busy. It uses energy to breathe, circulate blood, keep hormone levels steady, and repair cells. The Mayo Clinic calls this your basal metabolic rate, and it is the largest portion of the calories you use in a day. Muscle mass is a key factor in how high it sits.",
              "Here is the part the ads leave out: you cannot easily change the speed of your resting metabolism. That is not bad news, it just means the real levers are elsewhere."
            ]
          },
          {
            heading: "Everyday movement (NEAT)",
            body: [
              "All the motion that is not formal exercise, things like walking to the car, tidying up, gardening, taking the stairs, and even fidgeting, has a clinical name: non-exercise activity thermogenesis, or NEAT. The Mayo Clinic notes it can account for roughly 100 to 800 calories a day, and it is something you can change a great deal.",
              "This is often the quiet difference between two people who eat similarly. The one who seems to have a faster metabolism is frequently just moving more across the day."
            ]
          },
          {
            heading: "Planned exercise",
            body: [
              "Workouts add to your daily total too, and they matter enormously for muscle, mood, and long-term health. They are usually a smaller slice of daily energy use than people expect, which is why exercise works best alongside everyday movement rather than as the only lever.",
              "General guidance points toward about 150 minutes of moderate activity a week, with strength work on top, built up at a pace that feels sustainable."
            ]
          },
          {
            heading: "The smaller effect of digesting food",
            body: [
              "Your body also spends energy digesting, absorbing, and storing what you eat. The Mayo Clinic puts this at roughly 10 percent of the calories you take in, and notes that you cannot change it much.",
              "That is worth remembering whenever you see a food, spice, or drink sold as a way to fire up your metabolism. The effect is small and short-lived, not a shortcut."
            ]
          }
        ]
      },
      {
        heading: "What actually slows down after 40",
        body: [
          "If the engine itself stays fairly steady, why does midlife feel different? The honest answer is that a few things shift at the same time. None of them is a personal failing, and most of them respond well to attention."
        ],
        subsections: [
          {
            heading: "You gradually lose muscle",
            body: [
              "From around your thirties onward, muscle mass tends to slowly decline unless you actively work to keep it. Because muscle is a key factor in resting metabolism, having less of it can lower the calories your body uses at rest, which the Mayo Clinic links to weight becoming harder to manage with age.",
              "This is the single most addressable item on the list, which is why protecting muscle sits at the center of a sensible midlife plan. Our guide to <a href='/guides/protein-after-40'>protein after 40</a> covers the food side of that."
            ],
            callout: {
              title: "Muscle is the lever, not the whole story",
              body: "You cannot speed up your resting metabolism on demand, but you can protect the muscle that helps support it. That is where steady effort pays off.",
              tone: "navy"
            }
          },
          {
            heading: "Everyday movement quietly drops",
            body: [
              "NEAT tends to fall in midlife as days get busier, desk-bound, and more sedentary. The Mayo Clinic notes that most people become less active as they age, and those small reductions in everyday motion add up over weeks and months.",
              "The drop is easy to miss because it is not about skipped workouts. It is fewer steps, more sitting, and less incidental movement across an ordinary day."
            ]
          },
          {
            heading: "Hormonal shifts and menopause",
            body: [
              "Perimenopause and menopause can change where the body stores fat and can disrupt sleep, appetite, and energy. These shifts can make weight feel less predictable, though hormones are one factor among several rather than the whole explanation.",
              "If this stage is part of your picture, our guide to <a href='/guides/menopause-weight-gain'>menopause weight gain</a> goes deeper, and any decision about medical options belongs with a clinician who knows your history."
            ]
          },
          {
            heading: "Sleep and stress muddy the picture",
            body: [
              "Short or broken sleep is associated with stronger appetite and lower energy for movement, and ongoing stress can pull eating, routine, and recovery off course. Together they can make the whole system feel more stubborn than it is.",
              "These levers are easy to overlook, yet they often make every other habit harder. Our guides on <a href='/guides/sleep-and-weight-loss'>sleep and weight loss</a> and <a href='/guides/cortisol-and-weight-gain'>what cortisol can and cannot explain</a> offer gentle starting points."
            ]
          }
        ]
      },
      {
        heading: "What actually helps",
        body: [
          "The encouraging part is that the most effective steps are also the most sustainable. None of them involves boosting or hacking anything. They simply support the parts of your daily energy use that you can influence."
        ],
        image: {
          src: "/media/article-images/metabolism-after-40/strength-muscle-after-40.webp",
          alt: "A woman over 40 doing light resistance training at home, focused and capable.",
          width: 1200,
          height: 900,
          caption: "Protecting muscle with regular strength work supports daily energy use over time."
        },
        subsections: [
          {
            heading: "Protect your muscle with strength training",
            body: [
              "Resistance training is the closest thing there is to a foundation here. It helps preserve the muscle that supports your resting metabolism, your strength, and your day-to-day function. The Mayo Clinic and the Physical Activity Guidelines for Americans both point toward strength work for all major muscle groups on two or more days a week.",
              "If lifting is new to you, or you are managing an injury, start light, focus on form, and build up slowly. A few sessions with a qualified trainer or physical therapist early on can make the whole thing safer and more enjoyable."
            ]
          },
          {
            heading: "Eat enough protein",
            body: [
              "Enough protein supports muscle maintenance and helps you feel full, which makes a calorie-aware plan easier to keep up. A simple way in is to anchor each meal with a clear protein source rather than counting every gram.",
              "Whole foods can do most of the work, and protein powders are optional rather than required. Needs vary from person to person, so if you have kidney disease or another condition, check with your clinician first. Our <a href='/guides/protein-after-40'>protein after 40 guide</a> has practical examples."
            ],
            bullets: [
              "Build breakfast around eggs, Greek yogurt, or a similar protein.",
              "Add a palm-sized protein source to lunch and dinner.",
              "Pair protein with fiber-rich vegetables, fruit, or whole grains."
            ]
          },
          {
            heading: "Move more in small ways",
            body: [
              "Rebuilding everyday movement is one of the highest-value things you can do, because NEAT is so responsive to small choices. Short walks after meals, taking the stairs, standing more, and running errands on foot all add up, and they are far easier to sustain than punishing routines.",
              "A gentle target of about 150 minutes of moderate activity a week, built gradually, gives you plenty of room to start small."
            ],
            image: {
              src: "/media/article-images/metabolism-after-40/daily-movement-after-40.webp",
              alt: "A woman in her fifties taking a relaxed walk in a park, an example of everyday movement.",
              width: 1200,
              height: 900,
              caption: "Small bursts of everyday movement add up and are easier to sustain than extreme routines."
            }
          },
          {
            heading: "Skip the crash diet",
            body: [
              "Very low-calorie plans can strip away the muscle a midlife body benefits from keeping, and they tend to be hard to repeat, so progress stalls and rebounds. A modest, livable calorie reduction almost always beats an extreme one, because the goal is something you can sustain for months rather than days.",
              "If structure or accountability is the piece you keep missing, a well-run program can help. Our <a href='/best/best-weight-loss-programs-for-women-over-40'>comparison of weight-loss programs for women over 40</a> explains what to look for before you commit."
            ]
          },
          {
            heading: "Support sleep and stress",
            body: [
              "Steady sleep and realistic stress management are not side issues. They make every other habit easier to keep. Aim for consistent sleep and wake times, lower light in the evening, and a wind-down cue your body learns to recognize.",
              "If insomnia, hot flashes, or ongoing stress keep disrupting your rest, that is worth raising with a healthcare professional rather than pushing through."
            ]
          }
        ]
      },
      {
        heading: "Myths worth retiring",
        body: [
          "A lot of metabolism marketing runs on fear and big promises. Letting go of a few common myths can save you money, time, and a fair amount of self-blame."
        ],
        bullets: [
          "You cannot meaningfully speed up your resting metabolism with foods, teas, or supplements. The Mayo Clinic notes that products claiming to do so usually do not live up to their claims.",
          "There is no broken metabolism to fix for most people. The engine is largely steady; the levers are muscle and movement.",
          "Starvation mode is a half-truth. Eating too little can lower energy use somewhat, but it does not make weight loss impossible, and severe restriction tends to backfire.",
          "Detoxes and resets do not change your metabolic rate. Your liver and kidneys already handle that work."
        ],
        callout: {
          title: "Claim check",
          body: "If a product promises to boost, reset, or rev up your metabolism, treat that as a marketing red flag rather than a health claim. Steady habits are less dramatic and far more reliable.",
          tone: "navy"
        }
      },
      {
        heading: "When to talk to a healthcare professional",
        body: [
          "Self-directed habits help most people, but some situations deserve personalized guidance. Consider speaking with a qualified healthcare professional if you have unexplained or rapid weight changes, persistent fatigue, or other symptoms that could point to an underactive thyroid or another condition. The Mayo Clinic notes that such medical causes are uncommon, but they are real and worth ruling out.",
          "It is also worth a conversation if you take medications that may affect weight, or if you have a history of disordered eating. A clinician who knows your full history can tailor advice safely and spare you the trial and error that wears you down."
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
        question: "Does your metabolism really slow down after 40?",
        answer:
          "Not in the dramatic way the ads suggest. Research published in Science in 2021 found that daily energy use, adjusted for body size, stays relatively steady from about age 20 to 60, with a more gradual decline beginning later. What usually changes in midlife is muscle and daily movement, not the engine itself."
      },
      {
        question: "At what age does metabolism start to slow?",
        answer:
          "The same research suggests a slow, steady decline tends to begin closer to age 60, at less than 1 percent a year, rather than at 40. Before that, energy use adjusted for body size is fairly stable through adulthood. Earlier changes in weight are usually about muscle loss and lower activity."
      },
      {
        question: "Can you boost or speed up your metabolism after 40?",
        answer:
          "You cannot meaningfully speed up your resting metabolism, and products that promise to do so rarely live up to the claims. What you can influence is muscle and everyday movement. Strength training, enough protein, and more daily activity support your daily energy use far better than any booster."
      },
      {
        question: "If metabolism is stable, why is it harder to lose weight after 40?",
        answer:
          "Because several things tend to shift at once: you gradually lose muscle, everyday movement drops, and sleep, stress, and hormonal changes can make appetite and routine less predictable. These are real, and they respond to consistent habits rather than to a metabolism fix."
      },
      {
        question: "Does menopause slow your metabolism?",
        answer:
          "Perimenopause and menopause can change where fat is stored and can disrupt sleep and appetite, which makes weight feel less predictable. Hormones are one factor among several rather than the whole story. A plan built around strength, protein, movement, and steadier sleep still helps."
      },
      {
        question: "What is the best way to support your metabolism after 40?",
        answer:
          "There is no single trick, but the most reliable combination is strength training at least twice a week, enough protein at each meal, more everyday movement, a modest and sustainable calorie approach, and steadier sleep. If you have unexplained symptoms, check with a clinician first."
      }
    ],
    sources: [
      {
        label: "Daily energy expenditure through the human life course (2021)",
        publisher: "Pontzer et al., Science",
        url: "https://www.science.org/doi/10.1126/science.abe5017"
      },
      {
        label: "Metabolism and weight loss: How you burn calories",
        publisher: "Mayo Clinic",
        url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/metabolism/art-20046508"
      },
      {
        label: "Preserve your muscle mass",
        publisher: "Harvard Health Publishing",
        url: "https://www.health.harvard.edu/staying-healthy/preserve-your-muscle-mass"
      },
      {
        label: "Exercise and physical activity",
        publisher: "National Institute on Aging",
        url: "https://www.nia.nih.gov/health/exercise-and-physical-activity"
      },
      {
        label: "Physical Activity Guidelines for Americans, 2nd edition",
        publisher: "U.S. Department of Health and Human Services",
        url: "https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines"
      },
      {
        label: "Menopause weight gain: Stop the middle-age spread",
        publisher: "Mayo Clinic",
        url: "https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menopause-weight-gain/art-20046058"
      },
      {
        label: "Choosing a safe and successful weight-loss program",
        publisher: "NIDDK",
        url: "https://www.niddk.nih.gov/health-information/weight-management/choosing-a-safe-successful-weight-loss-program"
      },
      {
        label: "Weight loss and sleep",
        publisher: "Sleep Foundation",
        url: "https://www.sleepfoundation.org/physical-health/weight-loss-and-sleep"
      }
    ]
  },
  {
    slug: "menopause-weight-gain",
    medicalAbout: ["Menopause", "Perimenopause", "Weight gain", "Midlife weight management"],
    title: "Menopause Weight Gain: An Evidence-Informed Guide",
    description:
      "Why weight changes during perimenopause and menopause, what the evidence says, and calm, realistic steps that help. No hype, no shame.",
    category: "Hormones",
    readTime: "10 min read",
    updated: "2026",
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    funnel: "Guide",
    related: [
      { label: "Weight loss after 40", href: "/weight-loss-after-40" },
      { label: "Why weight loss gets harder after 40", href: "/guides/why-weight-loss-gets-harder-after-40" },
      { label: "Metabolism after 40", href: "/guides/metabolism-after-40" },
      { label: "Protein after 40", href: "/guides/protein-after-40" }
    ],
    heroImage: {
      src: "/media/article-images/menopause-weight-gain/hero-menopause-weight-gain.webp",
      alt: "A confident woman in her early fifties standing in a bright, calm kitchen with fresh whole foods, looking relaxed and at ease.",
      width: 1600,
      height: 900
    },
    keyTakeaways: [
      "Weight change around menopause is common, and it usually comes from several overlapping factors rather than a personal failing.",
      "Shifting estrogen can move fat toward the abdomen, but aging, muscle loss, and lower activity matter at least as much.",
      "Strength training, protein at every meal, fiber, daily movement, and steadier sleep are the highest-value habits.",
      "There is no way to spot-reduce belly fat, and no supplement or detox can reset or rebalance your hormones.",
      "Menopause hormone therapy is one medical option some women discuss with a clinician, and that decision belongs with a professional who knows your history."
    ],
    lead: [
      "If your body feels different since perimenopause began, and the scale or your waistband is not responding the way it used to, you are not imagining it. Many women notice weight settling in new places during this stage, often around the middle, even when their eating and activity have barely changed.",
      "The reasons are real, and they tend to overlap. The reassuring part is that most of them respond to a calmer, more supportive plan rather than another round of restriction. Here is what actually changes during perimenopause and menopause, what the evidence says, and the steps that tend to help most."
    ],
    sections: [
      {
        heading: "The short answer",
        body: [
          "Weight often changes during perimenopause and menopause because several shifts tend to arrive together. Estrogen levels fall, which is associated with more fat being stored around the abdomen. Muscle gradually declines, daily movement often drops, and disrupted sleep or steady stress can quietly raise appetite. None of this is a sign that you have failed.",
          "The encouraging part is that the habits that help most are within your control, and they are gentler than the crash plans many of us tried in our thirties. For the full picture of midlife weight, start with our <a href='/weight-loss-after-40'>complete guide to weight loss after 40</a>."
        ],
        bullets: [
          "Falling estrogen is linked with more abdominal fat, sometimes without much change on the scale.",
          "Muscle loss lowers the calories your body uses at rest.",
          "Everyday movement tends to slip without you noticing.",
          "Hot flashes and broken sleep can make appetite and cravings harder to manage.",
          "Stress can shift eating, routine, and recovery all at once."
        ]
      },
      {
        heading: "Is it menopause, or is it aging?",
        body: [
          "It is tempting to put all the blame on hormones, but the honest answer is more layered. The Mayo Clinic notes that hormonal changes alone do not necessarily cause menopause weight gain. It is usually tied to aging, lifestyle, and genetics working together, with muscle loss slowing the rate at which the body uses calories.",
          "This matters because it changes the plan. If the shift were purely hormonal, you would feel stuck waiting for your body to settle. Since aging, muscle, sleep, and activity are all part of it, you have real levers to pull. And despite what many ads suggest, your metabolism does not collapse overnight at midlife. Large research on energy expenditure suggests it stays relatively steady from about age 20 to 60. Our guide to <a href='/guides/metabolism-after-40'>metabolism after 40</a> looks at this more closely."
        ],
        callout: {
          title: "Myth vs reality",
          body: "Menopause does not flip a switch that makes weight loss impossible. What usually changes is body composition, sleep, and daily movement, and each of those responds to steady habits.",
          tone: "sage"
        }
      },
      {
        heading: "What actually changes during perimenopause and menopause",
        body: [
          "There is rarely a single cause. More often a handful of changes overlap, which is why the routine that once worked can suddenly feel less predictable. Understanding each one makes it easier to choose where to put your energy."
        ],
        image: {
          src: "/media/article-images/menopause-weight-gain/menopause-body-changes-factors.webp",
          alt: "Editorial illustration of five factors behind menopause weight change: estrogen shifts, muscle loss, fat redistribution, sleep disruption, and stress.",
          width: 1600,
          height: 900,
          caption: "Five factors that commonly overlap during menopause: estrogen shifts, muscle loss, fat redistribution, sleep, and stress."
        },
        subsections: [
          {
            heading: "Estrogen shifts and where fat is stored",
            body: [
              "As you move through perimenopause into menopause, estrogen levels decline. That shift is associated with more fat being stored around the abdomen, the deeper kind known as visceral fat, sometimes even when the number on the scale barely moves. Many women describe this as their shape changing more than their weight.",
              "Estrogen is part of the story, not the whole of it. Sleep, stress, muscle, and activity all feed into the same system, which is why a plan that only chases hormones tends to disappoint. For more on how these factors stack up, see our guide on <a href='/guides/why-weight-loss-gets-harder-after-40'>why weight loss gets harder after 40</a>."
            ],
            callout: {
              title: "Hormones are one factor, not the only one",
              body: "It is easy to blame a single hormone, but midlife weight change is usually the result of several things working together. That is actually good news, because it means more of it is within reach.",
              tone: "navy"
            }
          },
          {
            heading: "Muscle gradually declines",
            body: [
              "From around your thirties onward, muscle mass tends to slowly decrease unless you are actively working to keep it. Because muscle is busy, calorie-using tissue, having less of it can lower the energy your body burns at rest, which can make weight easier to gain and harder to shed.",
              "This is the single most addressable item on the list. Protecting muscle through strength work and enough protein gives a midlife plan its biggest return. Our guide to <a href='/guides/protein-after-40'>protein after 40</a> covers the food side in practical terms."
            ]
          },
          {
            heading: "Sleep often gets disrupted",
            body: [
              "Hot flashes, night sweats, and more frequent waking are common during this stage, and they can fragment sleep even if you are in bed for plenty of hours. Short or broken sleep is associated with stronger appetite and more snacking. As the Mayo Clinic points out, when people do not get enough sleep, they tend to eat and drink more calories.",
              "Better sleep will not make weight disappear on its own, but it can make the next day's choices noticeably easier. Our guide on <a href='/guides/sleep-and-weight-loss'>sleep and weight loss</a> goes into the why and the how."
            ]
          },
          {
            heading: "Stress and the cortisol question",
            body: [
              "Stress is real, and it can influence eating, routine, alcohol, movement, and recovery. What it is not is a simple switch you can flip to lose belly fat. Cortisol, the hormone usually blamed, is a normal part of your daily rhythm, and the internet tends to oversimplify its role.",
              "It is worth managing stress because of how it affects the habits around it, not because a single hormone number explains your waistline. We unpack this in <a href='/guides/cortisol-and-weight-gain'>what cortisol can and cannot explain</a>."
            ]
          },
          {
            heading: "Appetite, cravings, and quieter daily movement",
            body: [
              "Two quieter changes often go unnoticed. Appetite cues can shift during this stage, so hunger and fullness may feel less reliable than they used to. At the same time, everyday movement tends to fall as schedules get busier and more sedentary. The Mayo Clinic notes that most people become less active with age, and those small reductions add up over months.",
              "This drop is not about skipped workouts so much as fewer steps, more sitting, and less incidental motion across an ordinary day. Naming it makes it easier to gently reverse."
            ]
          }
        ]
      },
      {
        heading: "What actually helps",
        body: [
          "Here is the part worth sitting with: the most effective steps during menopause are also the most sustainable. Think of these as supportive habits you can repeat for years, not a strict regimen with an expiry date."
        ],
        image: {
          src: "/media/article-images/menopause-weight-gain/strength-protein-menopause.webp",
          alt: "A woman over 50 doing light dumbbell strength training at home next to a protein-forward meal.",
          width: 1200,
          height: 900,
          caption: "Strength training a couple of times a week is one of the highest-value habits during menopause."
        },
        subsections: [
          {
            heading: "Strength training to protect muscle",
            body: [
              "Resistance training is the closest thing there is to a foundation for midlife weight management. It helps preserve the muscle that supports your metabolism, your strength, and your day-to-day function. The Physical Activity Guidelines for Americans recommend muscle-strengthening activity on two or more days per week, alongside regular aerobic movement.",
              "If lifting is new to you, or you are managing an injury, start light, focus on form, and build up slowly. A few sessions with a qualified trainer or physical therapist early on can make the whole thing safer and more enjoyable."
            ]
          },
          {
            heading: "Protein at every meal",
            body: [
              "Enough protein supports muscle maintenance and helps you feel full, which makes an eating plan easier to stick with when appetite cues feel unreliable. A simple way in is to anchor each meal with a clear protein source rather than counting every gram.",
              "Whole foods can do most of the work here, and protein powders are optional rather than required. Needs vary from person to person, so if you have kidney disease or another condition, check with your clinician first. Our <a href='/guides/protein-after-40'>protein after 40 guide</a> has practical examples to borrow from."
            ],
            bullets: [
              "Build breakfast around eggs, Greek yogurt, or a similar protein.",
              "Add a palm-sized protein source to lunch and dinner.",
              "Pair protein with fiber-rich vegetables, fruit, or whole grains."
            ]
          },
          {
            heading: "Fiber and a calorie approach you can sustain",
            body: [
              "Fiber-rich foods help with fullness and digestion, and they pair naturally with protein to keep you satisfied on fewer calories. Vegetables, fruit, beans, lentils, and whole grains do this gently, without the rebound that severe restriction tends to trigger.",
              "A modest, livable calorie reduction almost always beats an extreme one, because the goal is something you can repeat for months rather than days. If structure or accountability is the piece you keep missing, a well-run program can help. Our <a href='/best/best-weight-loss-programs-for-women-over-40'>comparison of weight-loss programs for women over 40</a> explains what to look for before you commit."
            ]
          },
          {
            heading: "Daily movement and walking",
            body: [
              "Walking is an underrated way to rebuild the everyday activity that tends to slip during this stage, and it pairs well with strength work without leaving you depleted. General guidance points toward roughly 150 minutes of moderate activity per week, built up gradually rather than all at once.",
              "A short walk after meals, a longer one on the weekend, or simply more standing and stepping through the day all count toward that total."
            ]
          },
          {
            heading: "Sleep and stress support",
            body: [
              "A steady sleep routine and realistic stress management are not side issues. They make every other habit easier. Aim for consistent sleep and wake times, lower light in the evening, and a wind-down cue your body learns to recognize.",
              "If hot flashes, insomnia, or night waking keep disrupting your rest, that is worth raising with a healthcare professional rather than pushing through. Our guides on <a href='/guides/sleep-and-weight-loss'>sleep and weight loss</a> and <a href='/guides/cortisol-and-weight-gain'>stress and cortisol</a> offer gentle starting points."
            ],
            image: {
              src: "/media/article-images/menopause-weight-gain/sleep-stress-menopause-routine.webp",
              alt: "A calm evening wind-down scene with a bedside lamp, herbal tea, a book, and a cool, restful bedroom suggesting better sleep during menopause.",
              width: 1200,
              height: 900,
              caption: "A consistent, low-key wind-down can make the next day's choices easier."
            }
          }
        ]
      },
      {
        heading: "What about menopause hormone therapy (HRT)?",
        body: [
          "Many women wonder where hormone therapy fits in. Menopause hormone therapy, sometimes called HRT, is a recognized medical option that may help with certain menopause symptoms such as hot flashes and night sweats. It is not a weight-loss treatment, and the evidence on its effect on weight is mixed.",
          "Whether it is appropriate depends on your symptoms, your personal and family medical history, and your own preferences. Benefits and risks differ from one person to the next, so this is a conversation to have with a qualified clinician who knows your history rather than a decision to make from an article. We mention it here so you know it exists as an option, not to recommend it."
        ],
        callout: {
          title: "This decision belongs with a clinician",
          body: "If menopause symptoms are affecting your quality of life, talk with a qualified healthcare professional about your options, including whether hormone therapy is right for you. A website cannot weigh your medical history.",
          tone: "terracotta"
        }
      },
      {
        heading: "Myths worth retiring",
        body: [
          "A lot of menopause marketing leans on fear and big promises. Clearing out a few common myths can save you money, time, and a fair amount of frustration."
        ],
        bullets: [
          "You cannot reset or rebalance your hormones with a supplement, tea, or detox. Those words sell products, but they do not describe how the body works.",
          "There is no menopause belly fix and no way to spot-reduce fat from one area. Overall habits, not targeted gadgets, move the needle.",
          "Weight change in menopause is common, but it is not inevitable or permanent, and it is not a verdict on your willpower.",
          "Crash diets tend to backfire faster now, because they strip away the muscle a midlife body benefits from keeping."
        ],
        callout: {
          title: "Claim check",
          body: "If a product promises to melt menopause belly fat or reset your hormones, treat that as a marketing red flag rather than a health claim. Steady habits are less dramatic and far more reliable.",
          tone: "navy"
        }
      },
      {
        heading: "When to talk to a healthcare professional",
        body: [
          "Self-directed habits help most people, but some situations deserve personalized guidance. Consider speaking with a qualified healthcare professional if you have unexplained or rapid weight changes, symptoms that point to a thyroid or other medical issue, perimenopause or menopause symptoms that are disrupting your life, medications that may affect weight, or a history of disordered eating.",
          "A clinician who knows your full history can rule things out, tailor advice safely, and spare you the trial and error that wears you down."
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
        question: "Why do women gain weight during menopause?",
        answer:
          "It is usually several factors at once rather than one. Falling estrogen is associated with more fat being stored around the abdomen, muscle gradually declines, daily movement often drops, and disrupted sleep or ongoing stress can increase appetite. The Mayo Clinic notes that hormones alone do not necessarily cause the gain, so aging and lifestyle matter too."
      },
      {
        question: "Why does menopause cause belly fat specifically?",
        answer:
          "Declining estrogen is linked with a shift toward storing fat around the midsection rather than the hips and thighs, sometimes without much change in overall weight. There is no way to target fat from one area, but habits that protect muscle and reduce excess calories tend to help with abdominal fat over time."
      },
      {
        question: "Is it harder to lose weight during perimenopause and menopause?",
        answer:
          "It can feel less predictable, because sleep, appetite, muscle, and activity may all be shifting at the same time. It is still very possible. A plan built around strength training, adequate protein, fiber, daily movement, and steadier sleep tends to work, especially when paired with patience rather than crash dieting."
      },
      {
        question: "Is menopause weight gain inevitable?",
        answer:
          "No. Weight change is common during this stage, but it is not guaranteed or permanent. Because much of it comes from muscle loss, lower activity, and disrupted sleep rather than hormones alone, consistent and supportive habits can make a real difference."
      },
      {
        question: "Does menopause hormone therapy (HRT) cause or prevent weight gain?",
        answer:
          "Menopause hormone therapy is used to help certain menopause symptoms, not as a weight-loss treatment, and the evidence on its effect on weight is mixed. Whether it is appropriate depends on your symptoms and medical history, so it is a decision to make with a qualified clinician who knows your situation."
      },
      {
        question: "What is the best exercise and diet approach for menopause weight gain?",
        answer:
          "There is no single best plan, but the most reliable combination is strength training at least twice a week, protein at each meal, plenty of fiber, regular walking, and a modest calorie approach you can sustain. Better sleep and stress management support all of it. If you have a medical condition, check with your clinician before big changes."
      }
    ],
    sources: [
      {
        label: "Menopause weight gain: Stop the middle-age spread",
        publisher: "Mayo Clinic",
        url: "https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menopause-weight-gain/art-20046058"
      },
      {
        label: "Menopause topics and patient education",
        publisher: "The Menopause Society",
        url: "https://menopause.org/"
      },
      {
        label: "Perimenopause",
        publisher: "Cleveland Clinic",
        url: "https://my.clevelandclinic.org/health/diseases/21608-perimenopause"
      },
      {
        label: "Daily energy expenditure through the human life course (2021)",
        publisher: "Pontzer et al., Science",
        url: "https://www.science.org/doi/10.1126/science.abe5017"
      },
      {
        label: "Preserve your muscle mass",
        publisher: "Harvard Health Publishing",
        url: "https://www.health.harvard.edu/staying-healthy/preserve-your-muscle-mass"
      },
      {
        label: "Physical Activity Guidelines for Americans, 2nd edition",
        publisher: "U.S. Department of Health and Human Services",
        url: "https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines"
      },
      {
        label: "Exercise and physical activity",
        publisher: "National Institute on Aging",
        url: "https://www.nia.nih.gov/health/exercise-and-physical-activity"
      },
      {
        label: "Choosing a safe and successful weight-loss program",
        publisher: "NIDDK",
        url: "https://www.niddk.nih.gov/health-information/weight-management/choosing-a-safe-successful-weight-loss-program"
      },
      {
        label: "Weight loss and sleep",
        publisher: "Sleep Foundation",
        url: "https://www.sleepfoundation.org/physical-health/weight-loss-and-sleep"
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
