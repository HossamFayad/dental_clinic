// ==========================================
// Elite Dental Clinic - Global Configuration
// ==========================================

const DEFAULT_CLINIC_CONFIG = {
  clinicName: "Elite Smile Dental & Aesthetic Clinic",
  clinicNameAr: "عيادات إيليت سمايل لطب وزراعة وتجميل الأسنان",
  doctorName: "د. أحمد فياض",
  doctorTitle: "استشاري جراحة وتجميل الفم والأسنان | عضو الجمعية الألمانية لزراعة الأسنان (DGZI)",
  doctorBio: "خبرة أكثر من 15 عاماً في تصميم ابتسامة هوليوود الرقمية وزراعة الأسنان الفورية بدون ألم. حاصل على زمالة الكلية الملكية للجراحين (إدنبرة - بريطانيا) والماجستير في تجميل الأسنان.",
  whatsappNumber: "201000000000", // Default Zeroed (Dynamic via Admin Panel)
  phoneDisplay: "01000000000",   // Default Zeroed (Dynamic via Admin Panel)
  emergencyPhone: "01000000000",
  workingHours: "السبت - الخميس: 12 ظهراً - 10 مساءً (الجمعة استشارات خاصة)",
  adminPin: "smile2026",

  // Top Announcement Bar
  promo: {
    active: true,
    text: "🎉 عرض خاص لفترة محدودة: خصم 25% على ابتسامة هوليوود وزراعة الأسنان الألمانية + كشف وأشعة مجاناً مع الحجز!",
    discountPercent: 25
  },

  // Branches
  branches: [
    {
      id: "tagamoa",
      name: "فرع التجمع الخامس",
      address: "شارع التسعين الشمالي - مول تريفيوم - الدور الثاني عيادة 204",
      mapLink: "https://maps.google.com/?q=New+Cairo+Trivium",
      phone: "01000000000"
    },
    {
      id: "zayed",
      name: "فرع الشيخ زايد",
      address: "كابيتال بيزنس بارك - مبنى B4 - الدور الثالث",
      mapLink: "https://maps.google.com/?q=Capital+Business+Park+Sheikh+Zayed",
      phone: "01000000000"
    }
  ],

  // Core Treatments & Services
  treatments: [
    {
      id: "veneers",
      title: "ابتسامة هوليوود والفينير (E-Max)",
      titleEn: "Hollywood Smile & E-Max Veneers",
      icon: "sparkles",
      shortDesc: "عدسات إيماكس الألمانية الأصلية فائقة النحافة والصلابة بدون برد جائر للأسنان مع محاكاة ثلاثية الأبعاد.",
      priceEstimate: "تبدأ من 3,500 ج للسن",
      duration: "جلستان فقط (خلال 48 ساعة)",
      warranty: "ضمان 10 سنوات معتمد",
      popular: true
    },
    {
      id: "implants",
      title: "زراعة الأسنان الفورية الألمانية",
      titleEn: "Painless German Dental Implants",
      icon: "shield-check",
      shortDesc: "زراعة بدون جراحة أو ألم خلال 15 دقيقة فقط بأحدث خامات التيتانيوم السويسري والألماني بنسبة نجاح 99.4%.",
      priceEstimate: "تبدأ من 8,500 ج للغرسة",
      duration: "جلسة واحدة (15 دقيقة)",
      warranty: "ضمان مدى الحياة",
      popular: true
    },
    {
      id: "whitening",
      title: "تبييض الأسنان بالليزر (Zoom 4)",
      titleEn: "Laser Teeth Whitening",
      icon: "sun",
      shortDesc: "تفتيح لون الأسنان حتى 8 درجات أفتح في جلسة واحدة بأحدث جهاز Zoom الأمريكي الآمن تماماً على المينا.",
      priceEstimate: "2,400 ج للجلسة الكاملة",
      duration: "45 دقيقة",
      warranty: "نتائج تدوم حتى سنتين",
      popular: false
    },
    {
      id: "aligners",
      title: "التقويم الشفاف غير المرئي",
      titleEn: "Clear Invisible Aligners",
      icon: "smile",
      shortDesc: "تعديل اعوجاج الأسنان بقوالب شفافة غير مرئية قابلة للإزالة بدون أسلاك معدنية أو إحراج اجتماعي.",
      priceEstimate: "تبدأ من 15,000 ج",
      duration: "من 4 إلى 9 أشهر",
      warranty: "متابعة دورية رقمية",
      popular: false
    },
    {
      id: "root-canal",
      title: "علاج الجذور والعصب بالميكروسكوب",
      titleEn: "Microscopic Root Canal",
      icon: "activity",
      shortDesc: "تنظيف وتعقيم قنوات الجذور بدقة ميكروسكوبية متناهية في جلسة واحدة فقط بدون أي شعور بالألم.",
      priceEstimate: "تبدأ من 1,800 ج للضرس",
      duration: "جلسة واحدة (40 دقيقة)",
      warranty: "حشو ثلاثي الأبعاد محكم",
      popular: false
    },
    {
      id: "gum-laser",
      title: "تجميل وقص اللثة بالليزر",
      titleEn: "Cosmetic Laser Gingivectomy",
      icon: "scissors",
      shortDesc: "علاج الابتسامة اللثوية (Gummy Smile) وإعادة تناسق اللثة بالليزر التجميلي بدون نزيف وبشفاء فوري.",
      priceEstimate: "تبدأ من 2,000 ج",
      duration: "جلسة واحدة (20 دقيقة)",
      warranty: "شفاء تام خلال 24 ساعة",
      popular: false
    }
  ],

  // Interactive Before & After Cases
  beforeAfterCases: [
    {
      id: "case-1",
      title: "تصميم ابتسامة هوليوود كاملة (16 سن E-Max)",
      patient: "حالة تجميل كامل لفتاة 26 سنة",
      category: "فينير هوليوود",
      beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      notes: "تم تعديل اللون، سد الفراغات، وتناسق خط الابتسامة خلال 48 ساعة فقط."
    },
    {
      id: "case-2",
      title: "زراعة أسنان فورية مع تركيبة زيركون",
      patient: "تعويض الأسنان الأمامية بعد حادث",
      category: "زراعة فورية",
      beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?auto=format&fit=crop&w=800&q=80",
      notes: "زراعة تيتانيوم ألماني بدون فتح جراحي وتركيب فوري بنفس اليوم."
    },
    {
      id: "case-3",
      title: "تبييض ليزر Zoom 4 وعلاج تصبغات التدخين",
      patient: "تبييض عميق لمهندس 34 سنة",
      category: "تبييض أسنان",
      beforeImg: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      notes: "تفتيح 7 درجات في جلسة واحدة مدتها 45 دقيقة بدون حساسية للأسنان."
    }
  ],

  // Calculator Treatment Options
  calculatorData: {
    treatments: [
      { id: "veneer", name: "فينير عدسات E-Max ألماني", unitPrice: 3500, unitName: "سن" },
      { id: "implant", name: "زراعة أسنان ألمانية / سويسرية", unitPrice: 8500, unitName: "غرسة" },
      { id: "whitening", name: "جلسة تبييض ليزر Zoom 4 متكاملة", unitPrice: 2400, unitName: "جلسة" },
      { id: "aligner", name: "تقويم شفاف غير مرئي (فك كامل)", unitPrice: 15000, unitName: "فك" },
      { id: "zircon", name: "طربوش زيركون تجميلي عالي القوة", unitPrice: 2800, unitName: "طربوش" }
    ],
    installmentPartners: ["بنك مصر (بدون فوائد)", "البنك الأهلي المصري", "فاليو valU", "سهولة Souhoola"]
  },

  // Testimonials & Patient Reviews
  reviews: [
    {
      name: "م. كريم الشناوي",
      branch: "فرع التجمع الخامس",
      treatment: "زراعة 3 أسنان وفينير",
      rating: 5,
      date: "منذ أسبوعين",
      comment: "تجربة غيرت رأيي تماماً في دكاترة الأسنان! عملت زراعة لـ 3 ضروس بدون أي ألم يذكر وبأجهزة متطورة جداً. الدكتور بيشرح كل خطوة على الشاشة 3D والتعقيم فوق الممتاز."
    },
    {
      name: "د. سارة المنشاوي",
      branch: "فرع الشيخ زايد",
      treatment: "ابتسامة هوليوود E-Max",
      rating: 5,
      date: "منذ شهر",
      comment: "كنت خايفة جداً من برد الأسنان بس د. أحمد طمني واستخدم عدسات إيماكس فائقة النحافة. النتيجة طبيعية جداً مش بيضاء طباشير زي الشغل التجاري، الكل بيسألني عن سر ابتسامتي!"
    },
    {
      name: "أ. محمود عبد العزيز",
      branch: "فرع التجمع الخامس",
      treatment: "تبييض ليزر وعلاج لثة",
      rating: 5,
      date: "منذ 3 أسابيع",
      comment: "الاستقبال محترم جداً والمواعيد بالدقيقة بدون أي انتظار. نظافة العيادة تضاهي مراكز أوروبا، وخدمة العملاء على الواتساب متابعين معايا بعد الجلسة يوم بيوم."
    }
  ]
};

// Storage helper to load edited config or default
function getClinicConfig() {
  try {
    const saved = localStorage.getItem("elite_dental_config");
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed;
    }
  } catch (e) {
    console.error("Failed to load saved clinic config", e);
  }
  return DEFAULT_CLINIC_CONFIG;
}

function saveClinicConfig(newConfig) {
  try {
    localStorage.setItem("elite_dental_config", JSON.stringify(newConfig));
    return true;
  } catch (e) {
    console.error("Failed to save clinic config", e);
    return false;
  }
}

// Global expose
window.ClinicConfig = getClinicConfig();
window.saveClinicConfig = saveClinicConfig;
window.resetClinicConfig = function() {
  localStorage.removeItem("elite_dental_config");
  window.ClinicConfig = DEFAULT_CLINIC_CONFIG;
  return true;
};
