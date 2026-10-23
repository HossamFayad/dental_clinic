// ==========================================
// Elite Dental Clinic - Global Configuration & Declarative Engine
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
      duration: "جلستان فقط (خلال 3 إلى 5 أيام عمل)",
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
      notes: "تم تعديل اللون، سد الفراغات، وتناسق خط الابتسامة خلال جلستين متتاليتين."
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
      category: "تبييض ليزر",
      beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      notes: "تفتيح 7 درجات في جلسة واحدة مدتها 45 دقيقة بدون حساسية أسنان."
    }
  ],

  // Patient Reviews & Social Proof
  reviews: [
    {
      name: "د. سارة المنشاوي",
      branch: "فرع التجمع الخامس",
      treatment: "ابتسامة هوليوود (E-Max)",
      rating: 5,
      date: "منذ أسبوعين",
      comment: "تجربة ممتازة جداً، دكتور أحمد في قمة الذوق والاحترافية. النتيجة فاقت توقعاتي تماماً وشكل أسناني طبيعي 100% ومفيش أي ألم."
    },
    {
      name: "م. كريم النجار",
      branch: "فرع الشيخ زايد",
      treatment: "زراعة فورية لضرسين",
      rating: 5,
      date: "منذ 3 أسابيع",
      comment: "كنت مرعوب من فكرة الزراعة، لكن والله العظيم ما حسيت بأي وجع وقت العملية ولا بعدها! الجلسة كلها أخدت ربع ساعة والتعقيم يطمن جداً."
    },
    {
      name: "أ. نورهان الشربيني",
      branch: "فرع التجمع الخامس",
      treatment: "فينير وتبييض Zoom",
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

// ==========================================
// Universal Declarative Config Engine (Security Hardened)
// ==========================================
class ConfigEngine {
  constructor(storageKey, defaults) {
    this.storageKey = storageKey;
    this.defaults = defaults;
    this.data = this.load();
  }

  // Safe HTML Escaper: encodes all special characters to prevent DOM-based XSS
  escape(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Safe URL sanitizer: prevents javascript: URI injection
  sanitizeUrl(url) {
    if (!url) return "#";
    const trimmed = String(url).trim();
    if (/^(https?:\/\/|\/|mailto:|tel:|data:image\/)/i.test(trimmed)) {
      return trimmed;
    }
    return "#";
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return this.deepMerge(this.defaults, JSON.parse(saved));
    } catch (e) {
      console.error("ConfigEngine load error:", e);
    }
    return JSON.parse(JSON.stringify(this.defaults));
  }

  save(partial) {
    this.data = this.deepMerge(this.data, partial);
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      this.apply();
      return true;
    } catch (e) {
      console.error("ConfigEngine save error:", e);
      return false;
    }
  }

  reset() {
    localStorage.removeItem(this.storageKey);
    this.data = JSON.parse(JSON.stringify(this.defaults));
    this.apply();
    return true;
  }

  // Prototype Pollution Guarded Deep Merge
  deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        // Guard against prototype pollution
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') return;
        if (this.isObject(source[key])) {
          if (!(key in target)) Object.assign(output, { [key]: source[key] });
          else output[key] = this.deepMerge(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }

  getCleanWhatsApp() {
    return (this.data.whatsappNumber || "201000000000").toString().replace(/[^0-9]/g, '');
  }

  getDisplayPhone() {
    const raw = (this.data.phoneDisplay || "").toString().replace(/[^0-9+\s\-()]/g, '').trim();
    return raw || ("0" + this.getCleanWhatsApp().replace(/^20/, ''));
  }

  getWhatsAppUrl(customMessage = "") {
    const wa = this.getCleanWhatsApp();
    return customMessage 
      ? `https://wa.me/${wa}?text=${encodeURIComponent(customMessage)}`
      : `https://wa.me/${wa}`;
  }

  // Declarative DOM Applier with Strict Sanitization
  apply() {
    const cleanWa = this.getCleanWhatsApp();
    const phone = this.getDisplayPhone();
    const telHref = phone.replace(/[^0-9+]/g, '');

    // 1. Phone Links: [data-bind-phone] -> strictly numbers and optional leading +
    document.querySelectorAll("[data-bind-phone]").forEach(el => {
      el.setAttribute("href", `tel:${telHref}`);
    });

    // 2. Phone Display Text: [data-bind-phone-display] -> textContent prevents XSS
    document.querySelectorAll("[data-bind-phone-display]").forEach(el => {
      el.textContent = phone;
    });

    // 3. WhatsApp Links: [data-bind-whatsapp]
    document.querySelectorAll("[data-bind-whatsapp]").forEach(el => {
      const msg = el.getAttribute("data-whatsapp-msg") || "";
      el.setAttribute("href", this.getWhatsAppUrl(msg));
    });

    // 4. Text Bindings: [data-bind-text] -> textContent prevents XSS
    document.querySelectorAll("[data-bind-text]").forEach(el => {
      const path = el.getAttribute("data-bind-text");
      const val = this.getByPath(this.data, path);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });
  }

  // Form Binding for Admin: auto-populates [data-config-field="..."]
  populateForm(formSelector) {
    const form = typeof formSelector === 'string' ? document.querySelector(formSelector) : formSelector;
    if (!form) return;
    form.querySelectorAll("[data-config-field]").forEach(input => {
      const path = input.getAttribute("data-config-field");
      const val = this.getByPath(this.data, path);
      if (val === undefined || val === null) return;
      if (input.type === 'checkbox') {
        input.checked = !!val;
      } else {
        input.value = val;
      }
    });
  }

  // Form Extractor for Admin: extracts values with strict validation
  extractFormData(formSelector) {
    const form = typeof formSelector === 'string' ? document.querySelector(formSelector) : formSelector;
    if (!form) return {};
    const result = {};
    form.querySelectorAll("[data-config-field]").forEach(input => {
      const path = input.getAttribute("data-config-field");
      let val;
      if (input.type === 'checkbox') {
        val = input.checked;
      } else if (input.type === 'number') {
        val = Number(input.value);
      } else {
        val = input.value.trim().slice(0, 300); // Storage DoS limit
        if (path === 'whatsappNumber') {
          val = val.replace(/[^0-9]/g, '');
        } else if (path === 'phoneDisplay') {
          val = val.replace(/[^0-9+\s\-()]/g, '');
        }
      }
      this.setByPath(result, path, val);
    });
    return result;
  }

  getByPath(obj, path) {
    const parts = path.split('.');
    for (const part of parts) {
      if (part === '__proto__' || part === 'constructor' || part === 'prototype') return undefined;
    }
    return parts.reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  setByPath(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (part === '__proto__' || part === 'constructor' || part === 'prototype') return;
      if (!current[part]) current[part] = {};
      current = current[part];
    }
    const last = parts[parts.length - 1];
    if (last === '__proto__' || last === 'constructor' || last === 'prototype') return;
    current[last] = value;
  }
}

// Global Singleton Instance
window.AppConfig = new ConfigEngine("elite_dental_config", DEFAULT_CLINIC_CONFIG);
window.ClinicConfig = window.AppConfig.data;

// Compatibility aliases
function getClinicConfig() { return window.AppConfig.data; }
function saveClinicConfig(cfg) { return window.AppConfig.save(cfg); }
function resetClinicConfig() { return window.AppConfig.reset(); }
