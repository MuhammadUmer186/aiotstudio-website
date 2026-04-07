import { siteConfig } from "./site-config";

export const locales = ["en", "ur", "ar"] as const;
export type Locale = (typeof locales)[number];

export const rtlLocales: Locale[] = ["ur", "ar"];

type TranslationSchema = {
  languageLabel: string;
  languageMenuLabel: string;
  languages: Record<Locale, string>;
  nav: {
    home: string;
    about: string;
    expertise: string;
    projects: string;
    contact: string;
    contactButton: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: { label: string; value: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  expertise: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    viewProject: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    emailLabel: string;
    availability: string;
  };
  footer: {
    statement: string;
    quickLinks: string;
    connect: string;
    copyright: string;
  };
};

export const translations: Record<Locale, TranslationSchema> = {
  en: {
    languageLabel: "English",
    languageMenuLabel: "Language",
    languages: { en: "English", ur: "اردو", ar: "العربية" },
    nav: {
      home: "Home",
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      contact: "Contact",
      contactButton: "Contact Me",
    },
    hero: {
      badge: "IoT, AI, agentic systems, and robotics for real-world automation",
      title: "Building Intelligent Systems for the Real World",
      subtitle:
        "I design and build connected products that combine devices, AI decision-making, autonomous workflows, and robotics into practical systems people can actually use.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      metrics: [
        { label: "Focus", value: "Practical intelligent automation" },
        { label: "Domains", value: "IoT, AI, Robotics" },
        { label: "Approach", value: "Hardware + software + intelligence" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "I build complete intelligent systems, not isolated demos.",
      description:
        "My work sits at the intersection of embedded devices, AI-powered software, agentic workflows, and robotics. I focus on turning technical ideas into real products that sense, decide, and act in the physical world.",
      points: [
        "End-to-end product thinking across hardware, cloud, and interfaces",
        "Practical automation for real environments and real constraints",
        "Systems built for reliability, clarity, and long-term growth",
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      title: "Core areas I work in",
      description: "A focused set of capabilities across intelligent devices, automation, and product engineering.",
      items: [
        { title: "IoT Systems", description: "Connected devices, telemetry pipelines, real-time control, and remote monitoring." },
        { title: "Artificial Intelligence", description: "Applied AI for decision support, anomaly detection, automation, and product intelligence." },
        { title: "Agentic AI", description: "Autonomous workflows, task orchestration, and systems that reason across tools and data." },
        { title: "Robotics", description: "Control interfaces, perception-driven systems, and software for intelligent machine behavior." },
        { title: "Embedded & Edge Systems", description: "ESP32, microcontrollers, sensor integration, edge logic, and efficient on-device processing." },
        { title: "Cloud Automation", description: "APIs, backend services, data pipelines, and deployment workflows that connect everything together." },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected project directions",
      description: "A clean structure for showcasing the kind of systems I build.",
      viewProject: "View Project",
      items: [
        { title: "AI-Powered Monitoring System", description: "Real-time monitoring platform that combines sensor data, anomaly detection, and alert workflows.", tags: ["AI", "Monitoring", "Cloud"] },
        { title: "ESP32 Automation Platform", description: "Connected device framework for remote control, telemetry, and automation logic.", tags: ["ESP32", "IoT", "Edge"] },
        { title: "Agentic Workflow Assistant", description: "Autonomous assistant that coordinates tasks, analyzes context, and triggers operational actions.", tags: ["Agentic AI", "Automation", "LLMs"] },
        { title: "Robotics Control Dashboard", description: "Interface for managing robotic workflows, device states, and high-level commands.", tags: ["Robotics", "Dashboard", "Control"] },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "What I build",
      items: ["Smart Automation Systems", "AI Monitoring Platforms", "Autonomous Agent Workflows", "Robotics Interfaces", "Edge AI Solutions", "Remote Device Management"],
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Technologies I work with",
      groups: [
        { title: "Embedded", items: ["ESP32", "Microcontrollers", "Sensors", "MQTT"] },
        { title: "AI/ML", items: ["Python", "LLMs", "Computer Vision", "Inference Pipelines"] },
        { title: "Agentic Systems", items: ["Workflow Orchestration", "Tool Use", "Automation Logic"] },
        { title: "Robotics", items: ["Control Interfaces", "Perception Workflows", "Telemetry"] },
        { title: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
        { title: "Backend/Cloud", items: ["APIs", "FastAPI", "Databases", "Deployments"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Build Intelligent Systems Together",
      description: "If you are building connected products, autonomous workflows, or AI-driven physical systems, I would be glad to discuss the work.",
      primaryCta: "Email Me",
      secondaryCta: "View GitHub",
      emailLabel: "Email",
      availability: "Available for selected consulting, product, and engineering collaborations.",
    },
    footer: {
      statement: `${siteConfig.role}`,
      quickLinks: "Quick Links",
      connect: "Connect",
      copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
    },
  },
  ur: {
    languageLabel: "اردو",
    languageMenuLabel: "زبان",
    languages: { en: "English", ur: "اردو", ar: "العربية" },
    nav: {
      home: "ہوم",
      about: "تعارف",
      expertise: "مہارت",
      projects: "پروجیکٹس",
      contact: "رابطہ",
      contactButton: "رابطہ کریں",
    },
    hero: {
      badge: "حقیقی دنیا کی آٹومیشن کے لیے آئی او ٹی، اے آئی، ایجنٹک سسٹمز اور روبوٹکس",
      title: "حقیقی دنیا کے لیے ذہین سسٹمز تیار کرتا ہوں",
      subtitle: "میں ایسے کنیکٹڈ پروڈکٹس بناتا ہوں جو ڈیوائسز، اے آئی فیصلہ سازی، خودکار ورک فلو اور روبوٹکس کو ملا کر عملی اور قابلِ استعمال سسٹمز میں بدل دیتے ہیں۔",
      primaryCta: "پروجیکٹس دیکھیں",
      secondaryCta: "رابطہ کریں",
      metrics: [
        { label: "فوکس", value: "عملی ذہین آٹومیشن" },
        { label: "شعبے", value: "IoT، AI، Robotics" },
        { label: "طریقہ", value: "ہارڈویئر + سافٹ ویئر + انٹیلیجنس" },
      ],
    },
    about: {
      eyebrow: "تعارف",
      title: "میں صرف ڈیمو نہیں بلکہ مکمل ذہین سسٹمز بناتا ہوں۔",
      description: "میرا کام ایمبیڈڈ ڈیوائسز، اے آئی سافٹ ویئر، ایجنٹک ورک فلو اور روبوٹکس کے درمیان ہوتا ہے۔ میرا مقصد تکنیکی آئیڈیاز کو ایسے حقیقی پروڈکٹس میں بدلنا ہے جو محسوس کریں، فیصلہ کریں اور عمل کریں۔",
      points: [
        "ہارڈویئر، کلاؤڈ اور انٹرفیس کے ساتھ مکمل پروڈکٹ سوچ",
        "حقیقی ماحول اور حقیقی مسائل کے لیے عملی آٹومیشن",
        "قابلِ اعتماد، واضح اور طویل مدتی ترقی کے لیے تیار سسٹمز",
      ],
    },
    expertise: {
      eyebrow: "مہارت",
      title: "میرے بنیادی کام کے شعبے",
      description: "ذہین ڈیوائسز، آٹومیشن اور پروڈکٹ انجینئرنگ میں ایک واضح اور مضبوط مہارت۔",
      items: [
        { title: "IoT سسٹمز", description: "کنیکٹڈ ڈیوائسز، ٹیلی میٹری پائپ لائنز، ریئل ٹائم کنٹرول اور ریموٹ مانیٹرنگ۔" },
        { title: "مصنوعی ذہانت", description: "فیصلہ سازی، اینوملی ڈیٹیکشن، آٹومیشن اور پروڈکٹ انٹیلیجنس کے لیے عملی اے آئی۔" },
        { title: "ایجنٹک اے آئی", description: "خودکار ورک فلو، ٹاسک آرکیسٹریشن اور ایسے سسٹمز جو ٹولز اور ڈیٹا کے ساتھ سوچتے ہیں۔" },
        { title: "روبوٹکس", description: "کنٹرول انٹرفیس، پرسیپشن سسٹمز اور ذہین مشین رویے کے لیے سافٹ ویئر۔" },
        { title: "ایمبیڈڈ اور ایج سسٹمز", description: "ESP32، مائیکرو کنٹرولرز، سینسر انٹیگریشن اور آن ڈیوائس لاجک۔" },
        { title: "کلاؤڈ آٹومیشن", description: "APIs، بیک اینڈ سروسز، ڈیٹا پائپ لائنز اور ڈیپلائمنٹ ورک فلو۔" },
      ],
    },
    projects: {
      eyebrow: "پروجیکٹس",
      title: "منتخب پروجیکٹ سمتیں",
      description: "ان سسٹمز کو دکھانے کے لیے ایک واضح اور آسان ساخت جو میں تیار کرتا ہوں۔",
      viewProject: "پروجیکٹ دیکھیں",
      items: [
        { title: "AI سے چلنے والا مانیٹرنگ سسٹم", description: "ریئل ٹائم پلیٹ فارم جو سینسر ڈیٹا، اینوملی ڈیٹیکشن اور الرٹ ورک فلو کو یکجا کرتا ہے۔", tags: ["AI", "Monitoring", "Cloud"] },
        { title: "ESP32 آٹومیشن پلیٹ فارم", description: "ریمورٹ کنٹرول، ٹیلی میٹری اور آٹومیشن لاجک کے لیے کنیکٹڈ ڈیوائس فریم ورک۔", tags: ["ESP32", "IoT", "Edge"] },
        { title: "ایجنٹک ورک فلو اسسٹنٹ", description: "خودکار اسسٹنٹ جو ٹاسکس، کانٹیکسٹ اور آپریشنل ایکشنز کو مربوط کرتا ہے۔", tags: ["Agentic AI", "Automation", "LLMs"] },
        { title: "روبوٹکس کنٹرول ڈیش بورڈ", description: "روبوٹک ورک فلو، ڈیوائس اسٹیٹس اور کمانڈ مینجمنٹ کے لیے انٹرفیس۔", tags: ["Robotics", "Dashboard", "Control"] },
      ],
    },
    capabilities: {
      eyebrow: "صلاحیتیں",
      title: "میں کیا بناتا ہوں",
      items: ["اسمارٹ آٹومیشن سسٹمز", "AI مانیٹرنگ پلیٹ فارمز", "خودکار ایجنٹ ورک فلو", "روبوٹکس انٹرفیس", "ایج AI سلوشنز", "ریمورٹ ڈیوائس مینجمنٹ"],
    },
    stack: {
      eyebrow: "ٹیک اسٹیک",
      title: "وہ ٹیکنالوجیز جن کے ساتھ میں کام کرتا ہوں",
      groups: [
        { title: "Embedded", items: ["ESP32", "Microcontrollers", "Sensors", "MQTT"] },
        { title: "AI/ML", items: ["Python", "LLMs", "Computer Vision", "Inference Pipelines"] },
        { title: "Agentic Systems", items: ["Workflow Orchestration", "Tool Use", "Automation Logic"] },
        { title: "Robotics", items: ["Control Interfaces", "Perception Workflows", "Telemetry"] },
        { title: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
        { title: "Backend/Cloud", items: ["APIs", "FastAPI", "Databases", "Deployments"] },
      ],
    },
    contact: {
      eyebrow: "رابطہ",
      title: "آئیے مل کر ذہین سسٹمز بنائیں",
      description: "اگر آپ کنیکٹڈ پروڈکٹس، خودکار ورک فلو یا AI سے چلنے والے فزیکل سسٹمز بنا رہے ہیں تو میں اس پر بات کرنے کے لیے خوش ہوں گا۔",
      primaryCta: "ای میل کریں",
      secondaryCta: "گٹ ہب دیکھیں",
      emailLabel: "ای میل",
      availability: "منتخب کنسلٹنگ، پروڈکٹ اور انجینئرنگ تعاون کے لیے دستیاب۔",
    },
    footer: {
      statement: `${siteConfig.role}`,
      quickLinks: "فوری لنکس",
      connect: "رابطے",
      copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. جملہ حقوق محفوظ ہیں۔`,
    },
  },
  ar: {
    languageLabel: "العربية",
    languageMenuLabel: "اللغة",
    languages: { en: "English", ur: "اردو", ar: "العربية" },
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      expertise: "الخبرات",
      projects: "المشاريع",
      contact: "تواصل",
      contactButton: "تواصل معي",
    },
    hero: {
      badge: "إنترنت الأشياء والذكاء الاصطناعي والأنظمة الوكيلة والروبوتات لأتمتة العالم الحقيقي",
      title: "أبني أنظمة ذكية للعالم الحقيقي",
      subtitle: "أصمم وأطوّر منتجات مترابطة تجمع بين الأجهزة والذكاء الاصطناعي وسير العمل الذاتي والروبوتات ضمن أنظمة عملية وقابلة للاستخدام.",
      primaryCta: "عرض المشاريع",
      secondaryCta: "تواصل معي",
      metrics: [
        { label: "التركيز", value: "أتمتة ذكية عملية" },
        { label: "المجالات", value: "IoT، AI، Robotics" },
        { label: "المنهج", value: "أجهزة + برمجيات + ذكاء" },
      ],
    },
    about: {
      eyebrow: "نبذة",
      title: "أبني أنظمة ذكية متكاملة، لا مجرد عروض تجريبية منفصلة.",
      description: "عملي يقع عند تقاطع الأجهزة المدمجة والبرمجيات المدعومة بالذكاء الاصطناعي وسير العمل الوكيل والروبوتات. أركز على تحويل الأفكار التقنية إلى منتجات حقيقية تستشعر وتقرر وتنفّذ.",
      points: [
        "تفكير شامل في المنتج عبر العتاد والسحابة والواجهات",
        "أتمتة عملية لبيئات حقيقية وقيود حقيقية",
        "أنظمة موثوقة وواضحة وقابلة للنمو على المدى الطويل",
      ],
    },
    expertise: {
      eyebrow: "الخبرات",
      title: "المجالات الأساسية التي أعمل فيها",
      description: "مجموعة مركزة من القدرات في الأجهزة الذكية والأتمتة وهندسة المنتجات.",
      items: [
        { title: "أنظمة إنترنت الأشياء", description: "أجهزة مترابطة ومسارات بيانات وتحكم لحظي ومراقبة عن بُعد." },
        { title: "الذكاء الاصطناعي", description: "ذكاء اصطناعي تطبيقي لدعم القرار وكشف الحالات الشاذة والأتمتة وذكاء المنتج." },
        { title: "الذكاء الاصطناعي الوكيلي", description: "سير عمل ذاتي وتنظيم للمهام وأنظمة تفكر عبر الأدوات والبيانات." },
        { title: "الروبوتات", description: "واجهات تحكم وأنظمة إدراك وبرمجيات لسلوك آلي ذكي." },
        { title: "الأنظمة المدمجة والطرفية", description: "ESP32 والمتحكمات الدقيقة وتكامل الحساسات والمنطق الطرفي." },
        { title: "أتمتة السحابة", description: "واجهات API وخدمات خلفية ومسارات بيانات وعمليات نشر تربط المنظومة بالكامل." },
      ],
    },
    projects: {
      eyebrow: "المشاريع",
      title: "اتجاهات مشاريع مميزة",
      description: "بنية نظيفة لعرض نوعية الأنظمة التي أبنيها.",
      viewProject: "عرض المشروع",
      items: [
        { title: "نظام مراقبة مدعوم بالذكاء الاصطناعي", description: "منصة لحظية تجمع بيانات الحساسات مع كشف الشذوذ وسير عمل التنبيهات.", tags: ["AI", "Monitoring", "Cloud"] },
        { title: "منصة أتمتة ESP32", description: "إطار عمل للأجهزة المتصلة للتحكم عن بُعد والقياسات والمنطق الآلي.", tags: ["ESP32", "IoT", "Edge"] },
        { title: "مساعد سير عمل وكيلي", description: "مساعد ذاتي ينسق المهام ويفهم السياق ويطلق الإجراءات التشغيلية.", tags: ["Agentic AI", "Automation", "LLMs"] },
        { title: "لوحة تحكم للروبوتات", description: "واجهة لإدارة سير عمل الروبوتات وحالات الأجهزة والأوامر عالية المستوى.", tags: ["Robotics", "Dashboard", "Control"] },
      ],
    },
    capabilities: {
      eyebrow: "القدرات",
      title: "ما الذي أبنيه",
      items: ["أنظمة أتمتة ذكية", "منصات مراقبة بالذكاء الاصطناعي", "سير عمل وكيلي ذاتي", "واجهات روبوتية", "حلول ذكاء طرفي", "إدارة الأجهزة عن بُعد"],
    },
    stack: {
      eyebrow: "التقنيات",
      title: "التقنيات التي أعمل بها",
      groups: [
        { title: "Embedded", items: ["ESP32", "Microcontrollers", "Sensors", "MQTT"] },
        { title: "AI/ML", items: ["Python", "LLMs", "Computer Vision", "Inference Pipelines"] },
        { title: "Agentic Systems", items: ["Workflow Orchestration", "Tool Use", "Automation Logic"] },
        { title: "Robotics", items: ["Control Interfaces", "Perception Workflows", "Telemetry"] },
        { title: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
        { title: "Backend/Cloud", items: ["APIs", "FastAPI", "Databases", "Deployments"] },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      title: "لنَبْنِ أنظمة ذكية معًا",
      description: "إذا كنت تبني منتجات متصلة أو سير عمل ذاتي أو أنظمة مادية مدعومة بالذكاء الاصطناعي، فسيسرني مناقشة ذلك معك.",
      primaryCta: "راسلني",
      secondaryCta: "عرض GitHub",
      emailLabel: "البريد الإلكتروني",
      availability: "متاح لمشاريع مختارة في الاستشارات والمنتجات والهندسة.",
    },
    footer: {
      statement: `${siteConfig.role}`,
      quickLinks: "روابط سريعة",
      connect: "تواصل",
      copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. جميع الحقوق محفوظة.`,
    },
  },
};
