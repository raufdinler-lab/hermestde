import {
  BadgeCheck,
  CircleHelp,
  Handshake,
  HeartPulse,
  Hospital,
  MessageCircleHeart,
  Package,
  PlayCircle,
  Route,
  ScanSearch,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const logoUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2023/08/cropped-logo-hermest-1.png";

const heroImageUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/02/lp1.webp";

const heroBadgeUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/02/icons-68.webp";

const heroStripUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/besli-6945.webp";

const doctorImageUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/02/AHMET.webp";

const whyImageUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-7.jpg";

const planningImageUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/03/hermest2.jpg";

const quoteAccentImageUrl =
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/02/sec1-63.webp";

const guaranteeImages = [
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2023/08/guarante-1-300x300.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2023/08/guarante-2-300x300.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2023/08/guarante-3-300x300.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2023/08/guarante-5-300x300.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2023/08/guarante-4-300x300.jpg",
];

const clinicImages = [
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-8-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-3-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-5-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-1-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-6-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-6-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-6-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-6-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-6-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-6-768x512.jpg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Rectangle-651-6-768x512.jpg",
];

const beforeAfterImages = [
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/01/Haartransplantation-vorher-nachher-3577-Grafts-768x576.webp",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/01/Haartransplantation-vorher-nachher-4716-Grafts-768x576.webp",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/01/DHI-Haartransplantation-vorher-nachher-3509-Grafts-768x576.webp",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Hair-Transplant-Before-After-3312-Grafts-768x576.webp",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/01/Haartransplantation-vorher-nachher-4180-Grafts-768x576.webp",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/01/Haartransplantation-vorher-nachher-5032-Grafts-768x576.webp",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/01/Haartransplantation-vorher-nachher-4312-Grafts-768x576.webp",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/08/Hair-Transplant-Before-After-5746-Graft-768x576.webp",
];

const videoEmbeds = [
  "https://www.youtube.com/embed/KvRTiq5w0bA",
  "https://www.youtube.com/embed/20LlTm1Gu_E",
  "https://www.youtube.com/embed/U7RseN7QH44",
];

const partnerLogos = [
  {
    alt: "Transfer",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/transfer.webp",
  },
  {
    alt: "DoubleTree",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/double-tree.webp",
  },
  {
    alt: "Marriot",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/marriot.webp",
  },
  {
    alt: "Pegasus",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/pegasus.webp",
  },
  {
    alt: "THY",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/thy.webp",
  },
  {
    alt: "Florence",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/florence-hastanesi-1.webp",
  },
  {
    alt: "Eren",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/eren-hastanesi-1.png",
  },
  {
    alt: "Arslan Aydin",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/09/arslanaydin-1.webp",
  },
];

const questionnaireGenderImages = [
  {
    label: "Männlich",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/men.webp",
  },
  {
    label: "Weiblich",
    src: "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/women.webp",
  },
];

const questionnaireStateImages = [
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/source/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/vc_head_01.svg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/source/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/vc_head_02.svg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/source/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/vc_head_03.svg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/source/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/vc_head_04.svg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/source/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/vc_head_05.svg",
  "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/source/rev-da5aac4/hermestclinic.com/lp/wp-content/plugins/hazirform/images/vc_head_06.svg",
];

const navLinks = [
  { href: "#form", label: "Methode" },
  { href: "#warum-hermest", label: "Warum Hermest" },
  { href: "#vorher-nacher", label: "Vorher / Nachher" },
  { href: "#pakete", label: "Pakete" },
  { href: "#consultation", label: "Analyse" },
  { href: "#hgf", label: "FAQ" },
];

const heroStats = [
  { value: "8 Jahre", label: "Zur Nr. 1 Klinik gewählt" },
  { value: "99 %", label: "Graft-Überleben mit Unique FUE® / DHI" },
  { value: "12 Monate", label: "Strukturierte Nachsorge" },
  { value: "ab 2.890 €", label: "All-Inclusive-Pakete" },
];

const whyCards = [
  "Das ALL-IN SAFETY PROTOCOL™ ist mehr als nur ein Versprechen – es ist unser klinischer Standard, der weit über die branchenüblichen Normen hinausgeht. Während des gesamten Eingriffs wird Ihre Sicherheit von einem Team aus Fachärzten – einschließlich Kardiologen, Dermatologen und plastischen Chirurgen – lückenlos überwacht.",
  "Lokale Nachsorge & Betreuung in Berlin: Als eine der wenigen Kliniken bieten wir Ihnen die absolute Sicherheit eines physischen Partners direkt in Berlin für Ihre persönliche Nachsorge und Beratung.",
  "Eine Komplikationsrate von unter 0,03%: Diese außergewöhnlich niedrige Rate ist das Ergebnis unseres ALL-IN SAFETY PROTOCOL™ und macht unser Verfahren zu einem der sichersten weltweit.",
  "Für maximale Dichte und natürliche Ergebnisse: Unsere exklusive Unique FUE® Methode erzielt eine branchenführende Anwuchsrate von bis zu 99%, weit über dem Branchenstandard von 60-80%.",
  "Ausgezeichnetes Vertrauen & Garantie: Wir wurden 8 Jahre in Folge zur Nr. 1 Klinik gewählt und beweisen unser Engagement mit einer schriftlichen, lebenslangen Garantie für Ihr Ergebnis.",
];

const standardItems = [
  "Massenabfertigung: Oft mehr als 10-15 Operationen pro Tag; wenig Zeit für den Einzelnen.",
  "Gemietete OP-Räume: Viele Anbieter mieten lediglich Behandlungszimmer in allgemeinen Krankenhäusern an; kein eigenes, spezialisiertes Umfeld.",
  "Eingeschränkte Sicherheit: Oft nur einfache medizinische Aufsicht während des Eingriffs.",
  "Wechselnde Behandlungsteams: Eingriffe werden häufig von Standard-Teams ohne durchgehende ärztliche Führung durchgeführt.",
  "Kein Ansprechpartner vor Ort: Nach der Rückreise meist nur Kontakt per E-Mail oder Chat ins Ausland.",
  "Unsichere Ergebnisse: Schwankende Anwuchsraten (oft nur 40-80%) und keine schriftliche Absicherung.",
  "Unnatürliche Ergebnisse: Oft wird die Haarlinie künstlich gerade gezogen, was zum gefürchteten „Puppenkopf“-Effekt führt.",
  "Sprachbarrieren: Oft kein deutschsprachiges Personal in der Klinik vorhanden.",
];

const hermestItems = [
  "Boutique-Ansatz: Maximal 4 Behandlungen pro Tag für volle ärztliche Aufmerksamkeit.",
  "Eigene Hightech-Klinik: Wir operieren ausschließlich in unserer eigenen, voll ausgestatteten Fachklinik, die zu 100 % auf Haarrestauration spezialisiert ist.",
  "ALL-IN SAFETY PROTOCOL™: Überwachung durch Kardiologen, Dermatologen & Plastische Chirurgen.",
  "Ärztliche Exzellenz: Die Umsetzung erfolgt durch spezialisierte Fachärzte unter der strengen Koordination unseres Chefarztes Dr. Ahmet Murat.",
  "Partnerarzt in Berlin: Persönliche Beratung und Nachsorge direkt in Deutschland durch unseren Partner.",
  "Maximaldichte & Donor-Schutz: Bis zu 99% Anwuchsrate ohne Overharvesting der Spenderzone, inkl. schriftlicher, lebenslanger Garantie.",
  "100% Natürlichkeit: Maßgeschneidertes Haarliniendesign nach Ihren Gesichtsproportionen und exakte Implantation im natürlichen Wuchswinkel.",
  "Deutschsprachige Betreuung: Rund-um-die-Uhr-Betreuung in Ihrer Muttersprache (24/7 Support).",
];

const planningCards = [
  "Signierter Dichte-Plan Haarliniendesign nach Gesichtsproportionen, präziser Zonenplan und Graft-Kalkulation gemäß Ihrer Spenderkapazität – vom leitenden Chirurgen geprüft und unterschrieben.",
  'Maximale Dichte durch strategischen Schutz des Spenderareals Wahre Dichte ist ein Ergebnis, das aus jedem Blickwinkel natürlich aussieht. Unsere Strategie zum Schutz des Spenderareals verhindert den unnatürlichen, "überernteten" Look im hinteren Bereich und stellt sicher, dass Ihr Gesamtergebnis perfekt und nachhaltig ist.',
  "Individuelles Behandlungsprotokoll Nach einer detaillierten Analyse plant Ihr Chirurg die Technik – Unique FUE® oder DHI – die für Sie garantiert das bestmögliche Ergebnis liefert.",
];

const packageItems = [
  "KI-gestützte Haaranalyse & umfassender Gesundheitscheck (EKG + Blutanalyse)",
  "Durchführung aller VIP-Transfers inkl. deutschsprachiger Betreuung",
  "2 bis 3 Übernachtungen im 4- oder 5-Sterne-Hotel",
  "Schmerzfreie Behandlung durch Lokalanästhesie mit „Comfort-in™“",
  "Medikamente (Antibiotikum, Mittel gegen Ödeme, Schmerzmittel, Blutverdünner)",
  "Medizinprodukte (Kissen, Lotion, Shampoo) & Erste medizinische Wäsche in der Klinik",
  "Premium Haar-Booster: Exosomen-, Stammzellen- & Plasma-Therapie",
  "Hyperbare Sauerstofftherapie (HBOT) für beschleunigte Wundheilung",
  "Kostenloses 24/7-Support-Team für 12 Monate nach der Operation",
  "Zertifikat für lebenslange Garantie",
];

const processSteps = [
  {
    title: "1. Erster Kontakt",
    text: "Kontaktieren Sie uns, um Ihre Haartransplantation in der Türkei zu beginnen.",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/12/1.webp",
  },
  {
    title: "2. Haar-Diagnose",
    text: "Wir führen eine Haar-Diagnose durch, um das für Sie geeignete Verfahren zu bestimmen.",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/03/kontr.jpg",
  },
  {
    title: "3. Ihre Ankunft in Istanbul",
    text: "Bei Ihrer Ankunft holt Sie unser VIP-Shuttleservice am Flughafen ab.",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2025/12/3-6-1-e1768563194344.webp",
  },
  {
    title: "4. Gespräch mit Dr. Murat",
    text: "Eine Konsultation mit Dr. Murat ist geplant, um die Details des Verfahrens abzuschließen.",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/03/hair-line.jpg",
  },
  {
    title: "5. Durchführung der Haartransplantation",
    text: "Die gesamte Haartransplantation wird unter der Aufsicht von Dr. Ahmet Murat von erfahrenen Ärzten durchgeführt und nach medizinischen Standards geplant sowie umgesetzt.",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/03/op-g.jpg",
  },
  {
    title: "6. Abschlusskontrolle",
    text: "Am nächsten Tag nehmen wir den Verband ab und Ihr Arzt führt eine finale, gründliche Kontrolle durch, bevor Sie abreisen.",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/03/hair-end.jpg",
  },
  {
    title: "7. 12 Monate Nachsorge & 24/7 Support",
    text: "Unser dermatologisches Follow-up-Team begleitet Ihren Fortschritt ein ganzes Jahr lang regelmäßig mit Fotos. Wir sind immer für Sie da!",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2026/03/team-line.jpg",
  },
];

const consultationQuestions = [
  "Geschlecht",
  "Seit wann leiden Sie unter Haarausfall?",
  "Hatten Sie bereits eine Haartransplantation?",
  "Wie alt sind Sie?",
  "Welches dieser Bilder entspricht am besten Ihrem aktuellen Haarzustand?",
  "Bitte geben Sie Ihre Kontaktdaten ein",
];

const testimonials = [
  {
    name: "Fernande Thibodeaux",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/05/guarante-12.jpg",
    quote:
      "Ich habe fünf Freunde, die sowohl in Deutschland als auch in der Türkei eine Haartransplantation machen ließen. Mein Ergebnis ist das beste von allen geworden. Die Freunde, die nicht zu Hermest in der Türkei gegangen sind, bereuen es. Ich empfehle Hermest allen in meinem Umfeld. Nach mir ließen sich noch vier weitere Personen aus meinem Bekanntenkreis bei Hermest Haare transplantieren, und alle sind sehr zufrieden mit den Ergebnissen.",
  },
  {
    name: "Bethanie Self",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/05/guarante-13.jpg",
    quote:
      "Mein Haarausfall hatte mich schon lange gestört. Ich habe fast alle Medikamente, Shampoos und Cremes ausprobiert, die ich im Internet gefunden habe, aber nichts hat geholfen. Aus Angst vor einer Haartransplantation habe ich den Schritt immer wieder aufgeschoben. Doch in der Hermest Hair Clinic war alles so einfach—ich habe jahrelang umsonst gewartet.",
  },
  {
    name: "Jork Merker",
    image:
      "https://cdn-ildbmmp.nitrocdn.com/TdgWISyLGRtYaNBzlwfeUBENeeEMEKEU/assets/images/optimized/rev-da5aac4/hermestclinic.com/lp/wp-content/uploads/2024/05/guarante-11.jpg",
    quote:
      "Ein Haartransplantation ohne Rasur bei Hermest war die beste Entscheidung, die ich treffen konnte. Der Ablauf war reibungslos, und schon nach nur 5 Tagen ist kaum zu erkennen, dass ich überhaupt etwas machen ließ. Das Team war äußerst professionell, und das Ergebnis sieht absolut natürlich aus.",
  },
];

const faqs = [
  {
    question: "Kann ich eine schmerzfreie Haartransplantation durchführen lassen?",
    answer:
      "Wir garantieren unseren Gästen, die sich eine schmerzfreie Haartransplantation wünschen, 0 % Schmerzen mit Kurznarkose. Bei der Kurznarkose wird der Patient intravenös betäubt und fällt für 15 Minuten in einen Tiefschlaf. Während dieser Zeit wird eine örtliche Betäubung verabreicht. Hermest garantiert daher 0 % Schmerzen während der Behandlung.",
  },
  {
    question: "Wie erhalte ich ein Angebot von Ihrer Klinik?",
    answer:
      "Sie können das Formular ausfüllen und Ihr Angebot von unseren Experten erhalten.",
  },
  {
    question: "Wie lange dauert die Haartransplantation?",
    answer:
      "Die Dauer einer Haartransplantation hängt von der Methode und der Anzahl der zu transplantierenden Haarfollikel ab. Es gibt zwei Hauptmethoden: DHI und FUE. Eine Haartransplantation kann zwischen 4 und 8 Stunden dauern, je nach Umfang des Eingriffs.",
  },
  {
    question: "Was ist in dem Behandlungspreis enthalten?",
    answer:
      "Bei der Hermest Hari Clinic profitierst du von einem All Inclusive Paket. Wir organisieren deinen Aufenthalt vor Ort, mit einem VIP-Transfer der dich jederzeit abholt und zum Hotel, zur Klinik und zum Flughafen fährt. Die Übernachtung in einem luxuriösen 4-Sterne Hotel mit Frühstück ist ebenfalls inklusive. Auch eine deutschsprachige Dolmetscher an deiner Seite sind im Preis enthalten.",
  },
  {
    question:
      "Wann bin ich nach der Operation wieder gesellschaftsfähig und kann arbeiten?",
    answer:
      "Das hängt stark von Ihrem Arbeitsumfeld ab. Wenn Sie in einer sauberen Umgebung (z. B. im Büro oder Home-Office) tätig sind und keine schwere körperliche Arbeit verrichten, können Sie theoretisch bereits 1 bis 2 Tage nach dem Eingriff wieder arbeiten. In den ersten Tagen sind jedoch noch kleine Rötungen und Krusten sichtbar. Wenn Ihr Beruf körperlich anstrengend ist oder Sie in einer Umgebung mit viel Staub oder Schmutz arbeiten, empfehlen wir eine Pause von 7 bis 10 Tagen, um die frisch transplantierten Grafts zu schützen. Nach etwa 10 Tagen fallen die Krusten bei der Haarwäsche vollständig ab, und der Bereich sieht wieder sehr sauber aus.",
  },
  {
    question: "Erhalte ich eine Garantie?",
    answer:
      "Dank modernster Techniken und erstklassigen Spezialisten garantieren wir dir ein natürliches Ergebnis in Top-Qualität. Dein 30-jähriges Garantiezertifikat wartet auf dich.",
  },
  {
    question:
      "Gibt es versteckte Kosten, die vor Ort in Istanbul auf mich zukommen?",
    answer:
      "Nein, wir arbeiten mit einer strikten Fixpreis-Garantie. Ihr All-Inclusive-Paket beinhaltet alle Transfers (VIP), die Hotelübernachtungen, sämtliche medizinischen Vor- und Nachuntersuchungen, die Operation selbst sowie alle benötigten Medikamente und Pflegeshampoos für die erste Zeit. Der Betrag, den wir Ihnen im Vorfeld schriftlich bestätigen, ist der finale Endpreis.",
  },
  {
    question: "Welche Erfahrungen hat der Arzt mit Haartransplantationen?",
    answer:
      "Absolute Expertise und über zwei Jahrzehnte Spezialisierung. Unser Chefarzt Dr. Ahmet Murat und sein medizinisches Fach-Team bringen mehr als 23 Jahre Erfahrung in der Haarrestauration mit. In dieser Zeit haben wir über 12.000 Patienten aus mehr als 62 Ländern erfolgreich behandelt.",
  },
  {
    question: "Welche Bereiche können als Spender dienen?",
    answer:
      "Für eine Haartransplantation werden üblicherweise starke Haarwurzel aus dem Nackenbereich entnommen und transplantiert. Auch Haarfollikel aus dem Bart- und Brustbereich, insbesondere aber auch am Hinterkopf können transplantiert werden.",
  },
  {
    question:
      "Was passiert, wenn ich nach der Haartransplantation zurück in Deutschland bin und Fragen habe?",
    answer:
      "Sie sind niemals auf sich allein gestellt. Wir bieten eine strukturierte Nachsorge über 12 Monate. Unser deutschsprachiges Expertenteam ist 24/7 für Sie erreichbar. Zudem haben Sie die exklusive Sicherheit, bei Bedarf unseren medizinischen Partnerarzt direkt in Berlin für eine persönliche Begutachtung und Beratung aufsuchen zu können.",
  },
  {
    question: "Wer führt den Eingriff durch? Sind es wirklich Ärzte?",
    answer:
      "Ja, absolute ärztliche Exzellenz ist unser Standard. Im Gegensatz zu vielen Standard-Anbietern, bei denen Techniker operieren, werden bei uns die Eingriffe von spezialisierten Fachärzten durchgeführt. Jeder Schritt erfolgt unter der strengen Koordination und Aufsicht unseres Chefarztes Dr. Ahmet Murat in unserer eigenen Premium-Klinik.",
  },
  {
    question:
      "Ab welchem Alter kann eine Haartransplantation durchgeführt werden?",
    answer:
      "Obwohl es keine offizielle Altersvorgabe für eine Haartransplantation gibt, ist das von Ärzten empfohlene Alter ab 22 Jahren.",
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mini-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12.5L9.2 16.7L19 7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HermestPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      <div className="hermest-page">
        <div className="hermest-orb hermest-orb-a" />
        <div className="hermest-orb hermest-orb-b" />
        <div className="hermest-shell">
          <header className="hermest-header">
            <a className="brand-lockup" href="#top">
              <img src={logoUrl} alt="Hermest Hair Clinic" />
              <div>
                <p>Hermest Hair Clinic</p>
                <strong>Haartransplantation in der Türkei</strong>
              </div>
            </a>
            <nav aria-label="Seitenbereiche" className="header-nav">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a className="header-cta" href="#consultation">
              Angebot einholen
            </a>
          </header>

          <main className="hermest-main" id="main-content">
            <section className="hero-panel section-hero" id="top">
              <div className="hero-copy">
                <p className="section-kicker section-kicker-icon">
                  <ShieldCheck className="kicker-icon" aria-hidden="true" />
                  <span>Hermest Hair Clinic</span>
                </p>
                <h1>
                  8 Jahre in Folge zur Nr. 1
                  <br />
                  Haarklinik der Türkei gewählt
                </h1>
                <p className="hero-lead">
                  Natürliche, langlebige Ergebnisse mit Unique FUE® / DHI (bis
                  zu 99 % Graft-Überleben). Eingriffe unter dem ALL-IN SAFETY
                  PROTOCOL™ mit dermatologischer, kardiologischer &
                  plastisch-chirurgischer Aufsicht. All-Inclusive-Pakete ab
                  2.890 €; deutschsprachige Betreuung & 12-monatige Nachsorge.
                </p>

                <div className="hero-stat-grid">
                  {heroStats.map((item) => (
                    <article key={item.label} className="hero-stat-card">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </article>
                  ))}
                </div>

                <div className="hero-intent-card">
                  <div className="hero-actions">
                    <a className="button-primary" href="#consultation">
                      Preis berechnen
                    </a>
                    <a className="button-secondary" href="#warum-hermest">
                      Warum Hermest
                    </a>
                  </div>

                  <div className="hero-note">
                    <span>Kostenlos</span>
                    <span>Ihre Daten sind geschützt</span>
                    <span>Deutschsprachige Betreuung</span>
                  </div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-badge-card">
                  <img src={heroBadgeUrl} alt="" />
                  <p>ALL-IN SAFETY PROTOCOL™</p>
                </div>
                <figure className="hero-image-frame">
                  <img src={heroImageUrl} alt="Hermest Hero" />
                </figure>
                <div className="hero-strip-card">
                  <img src={heroStripUrl} alt="" />
                </div>
              </div>
            </section>

            <section className="section-shell section-shell-soft section-analysis" id="form">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <ScanSearch className="kicker-icon" aria-hidden="true" />
                    <span>Analyse</span>
                  </p>
                  <h2>Welche Technik ist die beste für Sie? FUE oder DHI?</h2>
                </div>
                <a className="button-secondary" href="#consultation">
                  Preis berechnen
                </a>
              </div>
              <div className="section-grid section-grid-tight">
                <div className="story-card story-card-strong">
                  <p>
                    Nach einer kostenlosen Analyse Ihrer Situation sagt Ihnen
                    unser Chirurg genau, mit welcher Methode Sie das
                    bestmögliche Ergebnis erzielen.
                  </p>
                </div>
                <div className="story-card">
                  <ul className="mini-list">
                    <li>
                      <CheckIcon />
                      <span>Unique FUE® / DHI</span>
                    </li>
                    <li>
                      <CheckIcon />
                      <span>Individuelle Analyse vor dem Eingriff</span>
                    </li>
                    <li>
                      <CheckIcon />
                      <span>Deutschsprachige Betreuung vom Erstkontakt an</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="section-shell section-why" id="warum-hermest">
              <div className="section-grid">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <BadgeCheck className="kicker-icon" aria-hidden="true" />
                    <span>Warum Hermest</span>
                  </p>
                  <h2>Warum Hermest Ihre erste Wahl sein sollte</h2>
                  <div className="stack-grid">
                    {whyCards.map((item) => (
                      <article key={item} className="benefit-card">
                        <CheckIcon />
                        <p>{item}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <aside className="portrait-rail">
                  <img
                    className="portrait-rail-image"
                    src={whyImageUrl}
                    alt="Hermest Team"
                  />
                  <div className="portrait-rail-card">
                    <p>Eine Komplikationsrate von unter 0,03%</p>
                    <strong>Lokale Nachsorge & Betreuung in Berlin</strong>
                  </div>
                </aside>
              </div>
            </section>

            <section className="section-shell section-shell-compare section-compare">
              <div className="section-heading-row section-heading-row-compact">
                <div>
                  <p className="section-kicker">Vergleich</p>
                </div>
                <a className="button-secondary" href="#consultation">
                  Preis berechnen
                </a>
              </div>
              <div className="compare-grid">
                <article className="compare-card compare-card-muted">
                  <h3>Branchenstandard</h3>
                  <ul className="compare-list">
                    {standardItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="compare-card compare-card-accent">
                  <h3>Hermest Hair Clinic</h3>
                  <ul className="compare-list">
                    {hermestItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section className="section-shell section-shell-warm section-guarantee">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <ShieldCheck className="kicker-icon" aria-hidden="true" />
                    <span>Garantie</span>
                  </p>
                  <h2>
                    Mehr als nur ein Versprechen: Unsere schriftliche Garantie
                  </h2>
                </div>
              </div>
              <div className="image-ribbon image-ribbon-guarantee">
                {guaranteeImages.map((image, index) => (
                  <figure key={image} className="ribbon-card">
                    <img src={image} alt={`Garantie ${index + 1}`} />
                  </figure>
                ))}
              </div>
            </section>

            <section className="section-shell section-planning">
              <div className="section-grid">
                <figure className="feature-figure">
                  <img src={planningImageUrl} alt="Planungssicherheit" />
                </figure>
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <HeartPulse className="kicker-icon" aria-hidden="true" />
                    <span>Planung</span>
                  </p>
                  <h2>Planungssicherheit für Ihre Haartransplantation</h2>
                  <p className="section-lead">
                    Was wir Ihnen vor Ihrer Operation versprechen – und
                    schriftlich dokumentieren.
                  </p>
                  <div className="stack-grid">
                    {planningCards.map((item) => (
                      <article key={item} className="story-card">
                        <p>{item}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="section-shell section-videos">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <PlayCircle className="kicker-icon" aria-hidden="true" />
                    <span>Patientenstimmen</span>
                  </p>
                  <h2>Erfahrungsberichte Unserer Patienten</h2>
                  <p className="section-lead">
                    In unseren Videos zeigen wir Ihnen nicht nur echte
                    Ergebnisse und ehrliche Meinungen, sondern geben Ihnen auch
                    authentische Einblicke in den gesamten Behandlungsablauf.
                  </p>
                </div>
              </div>
              <div className="video-grid video-grid-featured">
                {videoEmbeds.map((video) => (
                  <div key={video} className="video-card">
                    <iframe
                      allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={video}
                      title="Patientenvideo"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="section-shell section-shell-dark section-quality">
              <div className="section-grid">
                <figure className="feature-figure feature-figure-tall">
                  <img src={doctorImageUrl} alt="Dr. Ahmet Murat" />
                </figure>
                <div className="dark-copy">
                  <p className="section-kicker section-kicker-icon">
                    <Stethoscope className="kicker-icon" aria-hidden="true" />
                    <span>Qualitätsstandard</span>
                  </p>
                  <h2>Maximale Dichte und Natürlichkeit bei der Haartransplantation</h2>
                  <blockquote className="quote-card">
                    <p>“Beste Haartransplantation in der Türkei”</p>
                    <span>-Tagesspiegel</span>
                  </blockquote>
                  <p>
                    Unsere langjährige Erfahrung und unser Streben nach
                    Innovation spiegeln sich in jedem einzelnen Ergebnis wider.
                    Wir vertrauen so sehr auf unsere Methoden und die Kompetenz
                    unserer Chirurgen, dass wir für jeden Eingriff eine
                    schriftliche Garantie auf das Anwachsen der Grafts geben.
                    Dies ist mehr als ein Versprechen; es ist Ihre Zusicherung,
                    dass Sie ein dauerhaftes und nachhaltiges Resultat erhalten.
                  </p>
                  <p>
                    Der Hermest-Qualitätsstandard ist international anerkannt.
                    Unser guter Ruf hat Tausende zufriedener Patienten aus über
                    62 Ländern zu uns geführt, insbesondere aus Deutschland,
                    Österreich, der Schweiz, Großbritannien und den USA. Dieses
                    weltweite Vertrauen macht Hermest zu einem der führenden
                    Zentren für Haarwiederherstellung.
                  </p>
                  <img
                    className="quote-accent"
                    src={quoteAccentImageUrl}
                    alt=""
                  />
                </div>
              </div>
            </section>

            <section className="section-shell section-clinic">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <Hospital className="kicker-icon" aria-hidden="true" />
                    <span>Klinik</span>
                  </p>
                  <h2>Unsere Klinik in der Türkei</h2>
                </div>
              </div>
              <div className="gallery-grid gallery-grid-clinic">
                {clinicImages.map((image, index) => (
                  <figure key={`${image}-${index}`} className="gallery-card">
                    <img src={image} alt={`Klinik ${index + 1}`} />
                  </figure>
                ))}
              </div>
            </section>

            <section className="section-shell section-results" id="vorher-nacher">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <BadgeCheck className="kicker-icon" aria-hidden="true" />
                    <span>Ergebnisse</span>
                  </p>
                  <h2>HAARTRANSPLANTATION VORHER-NACHER</h2>
                </div>
                <a className="button-secondary" href="#consultation">
                  Preis berechnen
                </a>
              </div>
              <div className="gallery-grid gallery-grid-results">
                {beforeAfterImages.map((image, index) => (
                  <figure key={image} className="gallery-card">
                    <img src={image} alt={`Vorher Nachher ${index + 1}`} />
                  </figure>
                ))}
              </div>
            </section>

            <section className="section-shell section-shell-price section-pricing" id="pakete">
              <div className="section-grid section-grid-pricing">
                <div className="pricing-column">
                  <p className="section-kicker section-kicker-icon">
                    <Package className="kicker-icon" aria-hidden="true" />
                    <span>Pakete</span>
                  </p>
                  <h2>Unsere All-Inclusive-Pakete</h2>
                  <div className="price-card">
                    <span>All-Inclusive</span>
                    <strong>2.890 €</strong>
                    <p>( kostenlos & unverbindlich )</p>
                    <a className="button-primary" href="#consultation">
                      Preis berechnen
                    </a>
                  </div>
                </div>
                <ul className="package-list package-list-grid">
                  {packageItems.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section-shell section-process">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <Route className="kicker-icon" aria-hidden="true" />
                    <span>Ablauf</span>
                  </p>
                  <h2>Ihre Haartransplantation in der Türkei Step by Step</h2>
                  <p className="section-lead">
                    In jeder Phase Ihrer Haartransplantation in der Türkei wird
                    Sie die Klinik von Dr. Murat begleiten und Ihnen
                    erstklassige Betreuung bieten.
                  </p>
                </div>
              </div>
              <div className="process-grid">
                {processSteps.map((step) => (
                  <article key={step.title} className="process-card">
                    <img src={step.image} alt={step.title} />
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-shell section-shell-consultation section-consultation" id="consultation">
              <div className="section-grid section-grid-consultation">
                <div className="consultation-intro">
                  <p className="section-kicker section-kicker-icon">
                    <MessageCircleHeart className="kicker-icon" aria-hidden="true" />
                    <span>Online-Assistent</span>
                  </p>
                  <h2>In wenigen Klicks zum Preis</h2>
                  <p className="section-lead">
                    Mit unserem Online-Assistent in unter 3 Min.
                  </p>
                  <div className="question-stack">
                    {consultationQuestions.map((item, index) => (
                      <article key={item} className="question-card">
                        <span>Schritt {index + 1}</span>
                        <strong>{item}</strong>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="consultation-stage">
                  <div className="consultation-card">
                    <div className="consultation-topbar">
                      <span>Schritt 1</span>
                      <span>Schritt 2</span>
                      <span>Schritt 3</span>
                      <span>Schritt 4</span>
                    </div>

                    <div className="consultation-pane">
                      <div className="consultation-block">
                        <h3>Geschlecht</h3>
                        <div className="gender-grid">
                          {questionnaireGenderImages.map((item) => (
                            <article key={item.label} className="gender-card">
                              <img src={item.src} alt={item.label} />
                              <strong>{item.label}</strong>
                            </article>
                          ))}
                        </div>
                      </div>

                      <div className="consultation-block">
                        <h3>Seit wann leiden Sie unter Haarausfall?</h3>
                        <div className="range-mock">
                          <span>Seit 1 Jahr(en)</span>
                        </div>
                      </div>

                      <div className="consultation-block">
                        <h3>Hatten Sie bereits eine Haartransplantation?</h3>
                        <div className="binary-grid">
                          <span>Ja</span>
                          <span>Nein</span>
                        </div>
                      </div>

                      <div className="consultation-block">
                        <h3>Wie alt sind Sie?</h3>
                        <div className="binary-grid binary-grid-tight">
                          <span>18-24</span>
                          <span>25-34</span>
                          <span>35-44</span>
                          <span>45+</span>
                        </div>
                      </div>

                      <div className="consultation-block">
                        <h3>
                          Welches dieser Bilder entspricht am besten Ihrem
                          aktuellen Haarzustand?
                        </h3>
                        <div className="state-grid">
                          {questionnaireStateImages.map((image, index) => (
                            <img
                              key={image}
                              src={image}
                              alt={`Haarzustand ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="consultation-block">
                        <h3>Bitte geben Sie Ihre Kontaktdaten ein</h3>
                        <form className="contact-grid">
                          <input placeholder="Vor- und Nachname" type="text" />
                          <input placeholder="Telefonnummer" type="tel" />
                          <input
                            placeholder="Ihre E-Mail Adresse"
                            type="email"
                          />
                          <button className="button-primary" type="button">
                            Angebot einholen
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-shell section-testimonials">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <HeartPulse className="kicker-icon" aria-hidden="true" />
                    <span>Bewertungen</span>
                  </p>
                  <h2>Schauen Sie sich die Erfahrungen unserer Patienten an</h2>
                </div>
              </div>
              <div className="testimonial-grid testimonial-grid-featured">
                {testimonials.map((item) => (
                  <article key={item.name} className="testimonial-card">
                    <div className="testimonial-head">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <span>Patientenstimme</span>
                      </div>
                    </div>
                    <p>{item.quote}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-shell section-shell-logos section-logos">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <Handshake className="kicker-icon" aria-hidden="true" />
                    <span>Partner</span>
                  </p>
                  <h2>Vertragspartner Institutionen</h2>
                </div>
              </div>
              <div className="logo-grid logo-grid-partners">
                {partnerLogos.map((logo) => (
                  <figure key={logo.alt} className="logo-card">
                    <img src={logo.src} alt={logo.alt} />
                  </figure>
                ))}
              </div>
            </section>

            <section className="section-shell section-faq" id="hgf">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker section-kicker-icon">
                    <CircleHelp className="kicker-icon" aria-hidden="true" />
                    <span>FAQ</span>
                  </p>
                  <h2>Häufig gestellte Fragen</h2>
                  <p className="section-lead">
                    Haartransplantation in der Türkei - İstanbul
                  </p>
                </div>
              </div>
              <div className="faq-list">
                {faqs.map((item) => (
                  <details key={item.question} className="faq-item">
                    <summary>
                      <span>{item.question}</span>
                      <span className="faq-symbol">+</span>
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="final-callout final-callout-main">
              <div>
                <p className="section-kicker section-kicker-icon">
                  <ShieldCheck className="kicker-icon" aria-hidden="true" />
                  <span>Fachberatung</span>
                </p>
                <h2>Jetzt unverbindliche Fachberatung anfordern!</h2>
              </div>
              <a className="button-primary" href="#consultation">
                Angebot einholen
              </a>
            </section>
          </main>
        </div>
        <div className="mobile-cta-bar">
          <a className="mobile-cta-link button-primary" href="#consultation">
            Preis berechnen
          </a>
        </div>
      </div>
    </>
  );
}
