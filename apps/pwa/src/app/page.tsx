"use client";

import { RootLayout } from "@/components/layout/layout.component.root";
import Link from "next/link";

/* ─── Inline icons ──────────────────────────────────── */
function Ico({ size = 20, children, style }: { size?: number; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={style}>
      {children}
    </svg>
  );
}
const SparkleIco = (p: { size?: number }) => <Ico {...p}><path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6z" /><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></Ico>;
const CheckIco = (p: { size?: number; style?: React.CSSProperties }) => <Ico {...p}><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-6" /></Ico>;
const ArrowLeftIco = (p: { size?: number }) => <Ico {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></Ico>;
const ShieldIco = (p: { size?: number; style?: React.CSSProperties }) => <Ico {...p}><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></Ico>;
const PhoneIco = (p: { size?: number }) => <Ico {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.2 12.82 19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></Ico>;
const ClockIco = (p: { size?: number; style?: React.CSSProperties }) => <Ico {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Ico>;
const LockIco = (p: { size?: number }) => <Ico {...p}><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" /><rect x="9" y="10" width="6" height="5" rx="1" /><path d="M10.5 10V8.5a1.5 1.5 0 0 1 3 0V10" /></Ico>;
const ChartIco = (p: { size?: number }) => <Ico {...p}><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></Ico>;
const TrendDownIco = (p: { size?: number }) => <Ico {...p}><polyline points="3 7 9 13 13 9 21 17" /><polyline points="14 17 21 17 21 10" /></Ico>;
const StarsIco = (p: { size?: number }) => <Ico {...p}><path d="M12 2l2.4 5 5.6.8-4 3.9.9 5.5L12 14.6 7.1 17.2l.9-5.5-4-3.9 5.6-.8z" /></Ico>;
const HandshakeIco = (p: { size?: number }) => <Ico {...p}><path d="M11 17l-3 3a1.5 1.5 0 0 1-2.1-2.1L9 14.5" /><path d="M13 7l3-3a1.5 1.5 0 0 1 2.1 2.1L15 9.5" /><path d="M3 12l5-5 4 4 4-4 5 5-5 5-4-4-4 4z" /></Ico>;
const ReceiptIco = (p: { size?: number }) => <Ico {...p}><path d="M4 2h16v20l-3-2-3 2-2-2-3 2-3-2-2 2z" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="13" y2="16" /></Ico>;
const TeamIco = (p: { size?: number }) => <Ico {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="3.5" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Ico>;
const PuzzleIco = (p: { size?: number; style?: React.CSSProperties }) => <Ico {...p}><path d="M14 4a2 2 0 1 1 4 0v3h3a1 1 0 0 1 1 1v3a2 2 0 1 1 0 4v3a1 1 0 0 1-1 1h-3a2 2 0 1 1-4 0H10a1 1 0 0 1-1-1v-3a2 2 0 1 1 0-4V8a1 1 0 0 1 1-1h4z" /></Ico>;
const CalcIco = (p: { size?: number }) => <Ico {...p}><rect x="4" y="2" width="16" height="20" rx="2" /><rect x="7" y="5" width="10" height="4" rx="1" /><circle cx="8" cy="13" r="0.6" fill="currentColor" /><circle cx="12" cy="13" r="0.6" fill="currentColor" /><circle cx="16" cy="13" r="0.6" fill="currentColor" /><circle cx="8" cy="17" r="0.6" fill="currentColor" /></Ico>;
const FileCheckIco = (p: { size?: number }) => <Ico {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 14l2 2 4-4" /></Ico>;
const GavelIco = (p: { size?: number }) => <Ico {...p}><path d="M14.5 5.5l4 4" /><path d="M17 3l4 4-3 3-4-4z" /><path d="M10.5 9.5l4 4" /><path d="M12 8l-9 9 4 4 9-9z" /><line x1="3" y1="22" x2="13" y2="22" /></Ico>;
const HeartShieldIco = (p: { size?: number }) => <Ico {...p}><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" /><path d="M9.5 11.5a2 2 0 0 1 2.5-2.6 2 2 0 0 1 2.5 2.6c-.5 1.5-2.5 3-2.5 3s-2-1.5-2.5-3z" /></Ico>;
const AlertIco = (p: { size?: number }) => <Ico {...p}><path d="M10.3 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></Ico>;
const QuestionIco = (p: { size?: number }) => <Ico {...p}><circle cx="12" cy="12" r="10" /><path d="M10 9.5a2 2 0 1 1 3 1.7c-.7.4-1 1-1 1.8" /><line x1="12" y1="17" x2="12" y2="17" /></Ico>;
const ChevronIco = (p: { size?: number }) => <Ico {...p}><polyline points="6 9 12 15 18 9" /></Ico>;
const BookIco = (p: { size?: number }) => <Ico {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></Ico>;

/* ─── UI Helpers ─────────────────────────────────────── */
function EyebrowPill({ icon: Icon, children, dark = false }: { icon: React.FC<{ size?: number }>; children: React.ReactNode; dark?: boolean }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 9999, border: dark ? "1px solid rgba(255,255,255,0.4)" : "1px solid var(--slate-300)", background: dark ? "rgba(255,255,255,0.1)" : "transparent", fontSize: 12, fontWeight: 500, color: dark ? "#fff" : "var(--slate-700)" }}>
      <Icon size={18} />
      <span>{children}</span>
    </div>
  );
}

function RoseButton({ href, children, size = "md", outline = false }: { href: string; children: React.ReactNode; size?: "md" | "lg" | "xl"; outline?: boolean }) {
  const padding = size === "xl" ? "18px 36px" : size === "lg" ? "14px 28px" : "10px 22px";
  const fontSize = size === "xl" ? 17 : size === "lg" ? 16 : 14;
  return (
    <a href={href}>
      <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding, borderRadius: 12, fontSize, fontWeight: 600, background: outline ? "transparent" : "var(--rose-500)", color: outline ? "var(--slate-700)" : "#fff", border: outline ? "1px solid var(--slate-300)" : "none", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", transition: "background .15s, color .15s" }}
        onMouseEnter={e => { e.currentTarget.style.background = outline ? "rgba(0,0,0,0.03)" : "var(--rose-600)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = outline ? "transparent" : "var(--rose-500)"; }}>
        {children}
      </button>
    </a>
  );
}

/* ─── HERO ──────────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="hero" style={{ paddingTop: 56, paddingBottom: 24 }}>
      <div className="container-page">
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)", gap: 48, alignItems: "center" }}>
          <div>
            <EyebrowPill icon={SparkleIco}>۱۸ سال در کنار کسب‌وکارهای ایرانی</EyebrowPill>
            <h1 className="split-h1" style={{ marginTop: 20 }}>
              <span className="setup">امور مالی شرکت‌تان را</span>
              <span className="accent">با خیال راحت به ما بسپارید.</span>
            </h1>
            <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.85, color: "var(--slate-600)", maxWidth: 540 }}>
              از <strong style={{ color: "var(--slate-700)" }}>ثبت اسناد</strong> و <strong style={{ color: "var(--slate-700)" }}>اظهارنامه مالیاتی</strong> تا <strong style={{ color: "var(--slate-700)" }}>دفاع در هیات حل اختلاف</strong> و <strong style={{ color: "var(--slate-700)" }}>امور بیمه</strong>؛ یک تیم رسمی، یک قرارداد، صفر دغدغه.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <RoseButton href="#lead" size="xl"><span>مشاوره رایگان ۳۰ دقیقه</span><ArrowLeftIco size={20} /></RoseButton>
              <RoseButton href="#services" size="xl" outline>مشاهده خدمات</RoseButton>
            </div>
            <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
              {["بدون تعهد اولیه", "پاسخگویی در کمتر از ۲ ساعت کاری", "محرمانگی اسناد، تضمین کتبی"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--slate-600)" }}>
                  <CheckIco size={16} style={{ color: "var(--rose-500)" }} /><span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", minHeight: 460 }}>
            <div style={{ position: "absolute", inset: "20px 0 0 -20px", background: "radial-gradient(60% 60% at 30% 40%, rgba(252,66,88,0.22) 0%, rgba(252,66,88,0) 70%)", filter: "blur(20px)", zIndex: 0 }} />
            <div aria-hidden="true" style={{ position: "absolute", bottom: -16, left: -16, width: 120, height: 120, backgroundImage: "radial-gradient(rgba(252,66,88,0.45) 1.5px, transparent 1.5px)", backgroundSize: "12px 12px", opacity: 0.7, borderRadius: 16, zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 2, borderRadius: 28, overflow: "hidden", border: "6px solid #fff", boxShadow: "0 30px 80px -20px rgba(31,42,68,0.30), 0 8px 24px -8px rgba(31,42,68,0.15)", background: "var(--slate-100)", aspectRatio: "5/6", maxWidth: 460, margin: "0 auto" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop" alt="تیم شاخص محاسبان مهر در حال جلسه با مشتری" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
              <div style={{ position: "absolute", inset: 0, zIndex: -1, background: "linear-gradient(135deg, #FFE3E7 0%, #FFCAD2 60%, #FFA7B4 100%)" }} />
            </div>
            <div className="hero-float" style={{ position: "absolute", zIndex: 3, bottom: 32, left: -8, background: "#fff", borderRadius: 18, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 20px 50px -10px rgba(31,42,68,0.18)", border: "1px solid var(--slate-100)", minWidth: 220 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: "var(--rose-50)", color: "var(--rose-500)", display: "flex", alignItems: "center", justifyContent: "center" }}><TrendDownIco size={22} /></div>
              <div>
                <div style={{ fontSize: 11, color: "var(--slate-400)", fontWeight: 500 }}>میانگین کاهش مالیات</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "var(--slate-800)", lineHeight: 1.1, marginTop: 2 }}>۲۸٪ <span style={{ fontSize: 12, color: "var(--rose-500)", fontWeight: 700 }}>قانونی</span></div>
              </div>
            </div>
            <div className="hero-float" style={{ position: "absolute", zIndex: 3, top: 32, right: -8, background: "#fff", borderRadius: 16, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 14px 30px -8px rgba(31,42,68,0.15)", border: "1px solid var(--slate-100)" }}>
              <ShieldIco size={18} style={{ color: "var(--rose-500)" }} />
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate-700)" }}>عضو جامعه حسابداران رسمی</div>
            </div>
            <div className="hero-float" style={{ position: "absolute", zIndex: 3, top: 132, left: -16, background: "#fff", borderRadius: 16, padding: "12px 16px", boxShadow: "0 14px 30px -8px rgba(31,42,68,0.15)", border: "1px solid var(--slate-100)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                {["م", "ر", "ف", "ز"].map((c, i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: 9999, background: ["#FFCAD2", "#FFA7B4", "#FF7185", "#FC4258"][i], color: "#fff", border: "2px solid #fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: i === 0 ? 0 : -8 }}>{c}</div>
                ))}
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <div style={{ fontSize: 16, fontWeight: 900, color: "var(--slate-800)" }}>+۳۲۰</div>
                <div style={{ fontSize: 11, color: "var(--slate-500)" }}>کسب‌وکار فعال</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr !important;gap:32px !important;}.hero-float{transform:scale(0.92);}}`}</style>
    </section>
  );
}

/* ─── STATS ─────────────────────────────────────────── */
function StatsSection() {
  const stats = [{ num: "۱۸+", label: "سال سابقه تخصصی" }, { num: "۳۲۰+", label: "کسب‌وکار فعال" }, { num: "۹۸٪", label: "رضایت مشتریان" }, { num: "۲.۴M", label: "اظهارنامه ثبت‌شده" }];
  return (
    <section className="section-pad-tight" style={{ paddingTop: 72 }}>
      <div className="container-page">
        <div className="design-card stats-grid" style={{ padding: "36px 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, borderRadius: 28 }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-cell" style={{ textAlign: "center", borderLeft: i < 3 ? "1px solid var(--slate-200)" : "none", paddingLeft: i < 3 ? 24 : 0 }}>
              <div style={{ fontSize: 44, fontWeight: 900, color: "var(--rose-500)", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.num}</div>
              <div style={{ fontSize: 14, color: "var(--slate-600)", marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr) !important;}.stat-cell{border-left:none !important;padding-left:0 !important;}}`}</style>
    </section>
  );
}

/* ─── SERVICES ──────────────────────────────────────── */
const servicesList = [
  { icon: CalcIco, title: "حسابداری", sub: "از ثبت اسناد تا صورت‌های مالی", bullets: ["ثبت روزانه اسناد و تنظیم دفاتر قانونی", "تحریر دفاتر تجاری و گزارش‌های فصلی", "بستن حساب‌ها و تهیه صورت‌های مالی", "حقوق و دستمزد و گزارش معاملات فصلی"], highlight: false },
  { icon: FileCheckIco, title: "حسابرسی", sub: "گزارش‌گیری حرفه‌ای و قابل اتکا", bullets: ["حسابرسی مالی و عملیاتی شرکت‌ها", "حسابرسی داخلی و کنترل‌های اعمال‌شده", "گزارش حسابرسی برای مجامع و بانک‌ها", "بازنگری گزارش‌های مالی پیش از ارائه"], highlight: false },
  { icon: GavelIco, title: "دعاوی مالیاتی", sub: "از اعتراض تا دفاع تخصصی", bullets: ["تنظیم لایحه اعتراض به برگ تشخیص", "حضور و دفاع در هیات حل اختلاف بدوی", "پیگیری در هیات تجدیدنظر و دیوان عدالت", "بررسی و کاهش جرایم مالیاتی غیرضروری"], highlight: true },
  { icon: HeartShieldIco, title: "بیمه", sub: "تامین اجتماعی و امور پرسنل", bullets: ["تهیه لیست بیمه ماهانه پرسنل", "اعتراض و دفاع در اداره بیمه تامین اجتماعی", "محاسبه و تسویه حق بیمه قراردادهای پیمانکاری", "اخذ مفاصاحساب بیمه پیمان‌ها"], highlight: false },
];

function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="container-page">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <EyebrowPill icon={PuzzleIco}>خدمات تخصصی</EyebrowPill>
          <h2 className="split-h2" style={{ marginTop: 18 }}><span className="setup">هرچه برای امور مالی نیاز دارید</span><span className="accent">زیر یک سقف، با یک تیم متخصص</span></h2>
          <p style={{ marginTop: 18, fontSize: 16, color: "var(--slate-600)", maxWidth: 640, margin: "18px auto 0", lineHeight: 1.75 }}>چهار خدمت محوری، چهار تیم تخصصی. شما با یک نقطه ارتباط حرفی می‌زنید و کارها داخل تیم میان کارشناسان مالی، مالیاتی و بیمه چرخش پیدا می‌کند.</p>
        </div>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
          {servicesList.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="design-card" style={{ padding: "32px 32px 28px", borderRadius: 28, position: "relative", overflow: "hidden", background: s.highlight ? "linear-gradient(165deg,#fff 0%,#FFF1F3 100%)" : "#fff", borderColor: s.highlight ? "var(--rose-200)" : "var(--slate-200)", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 20px 50px -20px rgba(31,42,68,0.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(0,0,0,0.02)"; }}>
                {s.highlight && <div style={{ position: "absolute", top: 20, left: 20, background: "var(--rose-500)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "5px 12px", borderRadius: 9999, display: "flex", alignItems: "center", gap: 5 }}><AlertIco size={14} /><span>دغدغه شماره ۱ کسب‌وکارها</span></div>}
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--rose-500)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 20px -6px rgba(252,66,88,0.45)" }}><Icon size={26} /></div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "var(--slate-800)", lineHeight: 1.2 }}>{s.title}</h3>
                    <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--slate-500)", fontWeight: 500 }}>{s.sub}</p>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.bullets.map((b, j) => <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--slate-600)", lineHeight: 1.65 }}><CheckIco size={18} style={{ color: "var(--rose-500)", flexShrink: 0, marginTop: 2 }} /><span>{b}</span></li>)}
                </ul>
                <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--slate-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <a href="#lead" style={{ fontSize: 14, fontWeight: 700, color: "var(--rose-500)", display: "flex", alignItems: "center", gap: 6 }}><span>درخواست این خدمت</span><ArrowLeftIco size={16} /></a>
                  <span style={{ fontSize: 12, color: "var(--slate-400)" }}>قرارداد ماهانه / موردی</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:760px){.services-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

/* ─── WHY US ─────────────────────────────────────────── */
const whyItems = [
  { icon: ClockIco, title: "پاسخ سریع، نه نوبت‌گذاری", body: "از زمان ثبت درخواست تا تماس کارشناس، حداکثر ۲ ساعت کاری. اعداد، نه قول." },
  { icon: LockIco, title: "محرمانگی تضمین‌شده", body: "اسناد و اطلاعات شما تحت قرارداد محرمانگی (NDA) رسمی نگهداری می‌شود." },
  { icon: ChartIco, title: "بهینه‌سازی مالیات قانونی", body: "بیش از ۸۰٪ از مشتریان ما با ساختاردهی صحیح، مالیات پرداختی‌شان کمتر شد." },
  { icon: HandshakeIco, title: "یک نقطه ارتباط، یک قرارداد", body: "نیازی به هماهنگی جداگانه نیست؛ همه‌چیز از حسابدار تا وکیل مالیاتی در تیم ما." },
  { icon: ReceiptIco, title: "گزارش‌گیری شفاف ماهانه", body: "هر ماه گزارش مالی، مالیاتی و بیمه‌ای کسب‌وکارتان روی میز شما، بدون نیاز به پرسیدن." },
  { icon: TeamIco, title: "تیم رسمی، نه فریلنسر", body: "همه کارشناسان عضو رسمی موسسه با ۸+ سال سابقه تخصصی در حوزه خودشان." },
];

function WhyUsSection() {
  return (
    <section id="why" className="section-pad" style={{ background: "#fff" }}>
      <div className="container-page">
        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)", gap: 64, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 120 }}>
            <EyebrowPill icon={StarsIco}>چرا شاخص محاسبان مهر</EyebrowPill>
            <h2 className="split-h2" style={{ marginTop: 18, textAlign: "right" }}><span className="setup">برون‌سپاری امور مالی</span><span className="accent">باید این‌قدر راحت باشد.</span></h2>
            <p style={{ marginTop: 18, fontSize: 16, color: "var(--slate-600)", lineHeight: 1.85 }}>ما ۱۸ سال است یاد گرفته‌ایم چه چیزهایی صاحب کسب‌وکار را شب بیدار نگه می‌دارد. شش وعده‌ای که با هر مشتری قرارداد می‌کنیم:</p>
            <div style={{ marginTop: 28 }}><RoseButton href="#lead" size="lg"><span>شروع گفتگو</span><ArrowLeftIco size={18} /></RoseButton></div>
          </div>
          <div className="why-cards" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {whyItems.map((it, i) => {
              const Icon = it.icon;
              return (
                <div key={i} style={{ padding: 22, borderRadius: 20, background: "var(--slate-50)", border: "1px solid var(--slate-100)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff", color: "var(--rose-500)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, border: "1px solid var(--rose-100)" }}><Icon size={20} /></div>
                  <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "var(--slate-800)" }}>{it.title}</h4>
                  <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--slate-600)", lineHeight: 1.75 }}>{it.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:960px){.why-grid{grid-template-columns:1fr !important;gap:40px !important;}.why-grid>div:first-child{position:static !important;}}@media(max-width:600px){.why-cards{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

/* ─── TEAM ──────────────────────────────────────────── */
const teamMembers = [
  { photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=faces", name: "محمد احمدی", role: "مدیرعامل و حسابدار رسمی", exp: "۲۲ سال", badge: "عضو جامعه حسابداران رسمی", phone: "02188776655", email: "m.ahmadi@shakhes-mehr.ir" },
  { photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces", name: "زهرا رحیمی", role: "سرپرست حسابرسی", exp: "۱۵ سال", badge: "حسابرس مستقل", phone: "02188776666", email: "z.rahimi@shakhes-mehr.ir" },
  { photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80&auto=format&fit=crop&crop=faces", name: "فرید کریمی", role: "وکیل مالیاتی", exp: "۱۸ سال", badge: "وکیل پایه‌یک دادگستری", phone: "02188776677", email: "f.karimi@shakhes-mehr.ir" },
  { photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=faces", name: "رویا نوری", role: "سرپرست بیمه و دستمزد", exp: "۱۱ سال", badge: "متخصص تامین اجتماعی", phone: "02188776688", email: "r.nouri@shakhes-mehr.ir" },
];

function TeamSection() {
  return (
    <section id="team" className="section-pad">
      <div className="container-page">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <EyebrowPill icon={TeamIco}>تیم متخصصان</EyebrowPill>
          <h2 className="split-h2" style={{ marginTop: 18 }}><span className="setup">افرادی که با امور مالی شما</span><span className="accent">مثل کسب‌وکار خودشان رفتار می‌کنند</span></h2>
        </div>
        <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {teamMembers.map((m, i) => (
            <div key={i} className="design-card" style={{ padding: 0, borderRadius: 24, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", background: "linear-gradient(160deg,#FFE3E7 0%,#FFCAD2 100%)", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0) 60%,rgba(15,23,42,0.35) 100%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 12, right: 12, background: "#fff", color: "var(--slate-800)", borderRadius: 10, padding: "6px 10px", display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, boxShadow: "0 6px 14px -4px rgba(0,0,0,0.25)" }}>
                  <ClockIco size={13} style={{ color: "var(--rose-500)" }} /><span>{m.exp} سابقه</span>
                </div>
              </div>
              <div style={{ padding: "20px 20px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "var(--slate-800)" }}>{m.name}</h4>
                <p style={{ margin: "3px 0 0", fontSize: 13, color: "var(--rose-500)", fontWeight: 700 }}>{m.role}</p>
                <div style={{ marginTop: 12, padding: "7px 10px", background: "var(--rose-50)", borderRadius: 8, fontSize: 11, fontWeight: 600, color: "var(--rose-700)", lineHeight: 1.4 }}>{m.badge}</div>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--slate-100)", display: "flex", gap: 8 }}>
                  <a href={`tel:${m.phone}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px 8px", background: "var(--rose-500)", color: "#fff", borderRadius: 10, fontSize: 12, fontWeight: 700, transition: "background .15s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--rose-600)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--rose-500)")}>
                    <PhoneIco size={14} /><span>تماس</span>
                  </a>
                  <a href={`mailto:${m.email}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px 8px", background: "#fff", color: "var(--slate-700)", border: "1px solid var(--slate-200)", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>
                    <span>ایمیل</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:960px){.team-grid{grid-template-columns:repeat(2,1fr) !important;}}@media(max-width:480px){.team-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

/* ─── TRUST ─────────────────────────────────────────── */
const clients = ["آرین شیمی", "سرما تجارت", "گروه پاژ", "نگین خاوران", "آدا تجهیز", "هلدینگ ماهور", "صنایع پارس‌بان", "بازرگانی نیلوفر", "ارکیده سبز", "کیمیا فولاد"];
const accreditations = ["سازمان امور مالیاتی کشور", "جامعه حسابداران رسمی ایران", "سازمان تامین اجتماعی", "کانون وکلای دادگستری"];
const partners = [{ name: "همکاران سیستم", sub: "Sepidar / Hamkaran Software" }, { name: "سپیدار", sub: "نرم‌افزار حسابداری" }, { name: "پارسیان", sub: "بانک پارسیان – درگاه پرداخت" }, { name: "محک", sub: "نرم‌افزار حسابداری" }];

function TrustSection() {
  return (
    <section id="trust" className="section-pad" style={{ background: "#fff" }}>
      <div className="container-page">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <EyebrowPill icon={HandshakeIco}>اعتماد، در عمل</EyebrowPill>
          <h2 className="split-h2" style={{ marginTop: 18 }}><span className="setup">بیش از ۳۲۰ کسب‌وکار</span><span className="accent">امور مالی خود را به ما سپرده‌اند</span></h2>
        </div>
        <div className="marquee" style={{ marginBottom: 64 }}>
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 180, height: 64, padding: "0 22px", fontSize: 18, fontWeight: 800, color: "var(--slate-400)", whiteSpace: "nowrap", opacity: 0.85, borderRadius: 12, background: "var(--slate-50)", border: "1px solid var(--slate-100)" }}>{c}</div>
            ))}
          </div>
        </div>
        <div className="trust-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div className="design-card" style={{ padding: 32, borderRadius: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <ShieldIco size={20} style={{ color: "var(--rose-500)" }} />
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "var(--slate-500)", textTransform: "uppercase", letterSpacing: 1 }}>مجوزها و عضویت‌ها</h4>
            </div>
            <p style={{ margin: "4px 0 20px", fontSize: 18, fontWeight: 800, color: "var(--slate-800)", lineHeight: 1.4 }}>زیر نظر نهادهای رسمی، نه ادعای شخصی.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {accreditations.map((a, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "var(--slate-50)", borderRadius: 12, border: "1px solid var(--slate-100)", fontSize: 14, fontWeight: 600, color: "var(--slate-700)" }}>
                  <span style={{ width: 22, height: 22, borderRadius: 9999, background: "var(--rose-500)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><CheckIco size={14} /></span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="design-card" style={{ padding: 32, borderRadius: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <PuzzleIco size={20} style={{ color: "var(--rose-500)" }} />
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "var(--slate-500)", textTransform: "uppercase", letterSpacing: 1 }}>شرکای تجاری</h4>
            </div>
            <p style={{ margin: "4px 0 20px", fontSize: 18, fontWeight: 800, color: "var(--slate-800)", lineHeight: 1.4 }}>با نرم‌افزارهایی که شما استفاده می‌کنید، یکپارچه کار می‌کنیم.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {partners.map((p, i) => <div key={i} style={{ padding: "14px 16px", background: "var(--slate-50)", borderRadius: 12, border: "1px solid var(--slate-100)", textAlign: "right" }}><div style={{ fontSize: 15, fontWeight: 800, color: "var(--slate-800)" }}>{p.name}</div><div style={{ fontSize: 11, color: "var(--slate-400)", marginTop: 2 }}>{p.sub}</div></div>)}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:800px){.trust-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

/* ─── BLOG PREVIEW ───────────────────────────────────── */
const blogPreviews = [
  { title: "مالیات بر ارزش افزوده ۱۴۰۳: نکات کلیدی که باید بدانید", date: "۱۴۰۳/۰۸/۱۵", category: "مالیات", excerpt: "در این مقاله تغییرات اساسی قانون مالیات بر ارزش افزوده در سال ۱۴۰۳ را بررسی می‌کنیم و نکات مهم برای کسب‌وکارها را توضیح می‌دهیم." },
  { title: "چگونه از هیات حل اختلاف مالیاتی به نفع خود استفاده کنید؟", date: "۱۴۰۳/۰۷/۲۰", category: "دعاوی مالیاتی", excerpt: "هیات حل اختلاف مالیاتی ابزار قانونی مهمی است که بسیاری از کسب‌وکارها از آن بی‌اطلاع‌اند. این راهنما گام‌به‌گام شما را آموزش می‌دهد." },
  { title: "صورت‌های مالی استاندارد: چرا مهم‌اند و چطور تهیه می‌شوند؟", date: "۱۴۰۳/۰۶/۱۰", category: "حسابداری", excerpt: "صورت‌های مالی استاندارد پایه تصمیم‌گیری مدیریتی و دریافت تسهیلات بانکی است. با اصول تهیه آن‌ها آشنا شوید." },
];

function BlogPreviewSection() {
  return (
    <section id="blog" className="section-pad">
      <div className="container-page">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
          <div>
            <EyebrowPill icon={BookIco}>وبلاگ مالی</EyebrowPill>
            <h2 className="split-h2" style={{ marginTop: 18 }}><span className="setup">آخرین مقالات تخصصی</span><span className="accent">حسابداری، مالیات و بیمه</span></h2>
          </div>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 12, background: "var(--rose-50)", color: "var(--rose-500)", border: "1px solid var(--rose-200)", fontSize: 14, fontWeight: 700 }}>
            <span>همه مقالات</span><ArrowLeftIco size={16} />
          </Link>
        </div>
        <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {blogPreviews.map((post, i) => (
            <Link key={i} href="/blog" style={{ textDecoration: "none", display: "block" }}>
              <div className="design-card" style={{ padding: 0, borderRadius: 24, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 50px -20px rgba(31,42,68,0.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(0,0,0,0.02)"; }}>
                <div style={{ background: "linear-gradient(135deg,#FFF1F3 0%,#FFE3E7 100%)", height: 140, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--rose-400)" }}>
                  <BookIco size={40} />
                </div>
                <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "var(--rose-600)", background: "var(--rose-50)", padding: "4px 10px", borderRadius: 9999 }}>{post.category}</span>
                    <span style={{ fontSize: 11, color: "var(--slate-400)" }}>{post.date}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "var(--slate-800)", lineHeight: 1.5 }}>{post.title}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "var(--slate-600)", lineHeight: 1.75, flex: 1 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--rose-500)", marginTop: 4 }}>
                    <span>ادامه مطلب</span><ArrowLeftIco size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.blog-grid{grid-template-columns:1fr 1fr !important;}}@media(max-width:560px){.blog-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

/* ─── LEAD (CTA FORM) ────────────────────────────────── */
const serviceChips = ["حسابداری", "حسابرسی", "دعاوی مالیاتی", "بیمه", "همه موارد"];
const sizeChips = ["کوچک (زیر ۵ نفر)", "متوسط (۵-۲۰)", "بزرگ (+۲۰)"];

function LeadSection() {
  return (
    <section id="lead" className="section-pad" style={{ paddingTop: 48 }}>
      <div className="container-page">
        <div style={{ position: "relative", borderRadius: 32, overflow: "hidden", background: "linear-gradient(165deg,#FC4258 0%,#E0394D 60%,#B0263A 100%)", boxShadow: "0 30px 70px -20px rgba(252,66,88,0.40)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url('/dot-pattern.svg')", backgroundRepeat: "repeat", backgroundSize: "200px 200px", opacity: 0.18, pointerEvents: "none" }} />
          <div className="lead-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)", gap: 0 }}>
            <div style={{ padding: "56px 48px", color: "#fff" }}>
              <EyebrowPill icon={SparkleIco} dark>مشاوره رایگان</EyebrowPill>
              <h2 className="split-h2" style={{ marginTop: 20, textAlign: "right" }}>
                <span className="setup" style={{ color: "#fff" }}>مشاوره رایگان ۳۰ دقیقه‌ای،</span>
                <span className="accent" style={{ color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>بدون هیچ تعهد بعدی.</span>
              </h2>
              <p style={{ marginTop: 20, fontSize: 16, color: "rgba(255,255,255,0.90)", lineHeight: 1.85 }}>فرم را پر کنید؛ یک کارشناس متخصص متناسب با کسب‌وکار شما، <strong>در کمتر از ۲ ساعت کاری</strong> با شما تماس می‌گیرد.</p>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                {[{ Icon: ClockIco, t: "تماس در ۲ ساعت کاری" }, { Icon: LockIco, t: "محرمانه و بدون تعهد" }, { Icon: ChartIco, t: "گزارش وضعیت مالیاتی فعلی" }].map(({ Icon, t }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.18)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.28)" }}><Icon size={18} /></div>
                    <span style={{ fontSize: 15, color: "#fff", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 18, padding: 16, display: "flex", alignItems: "center", gap: 14, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(160deg,#FFE3E7 0%,#FFCAD2 100%)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.35)", fontSize: 22, fontWeight: 800, color: "var(--rose-700)" }}>ع</div>
                <div style={{ lineHeight: 1.55 }}>
                  <div style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>«در ۶ ماه اول، برگ تشخیص مالیاتی ما را از ۲،۸۰۰ به ۹۲۰ میلیون رساندند.»</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 4, fontWeight: 700 }}>علیرضا محمدی · مدیرعامل آرین شیمی</div>
                </div>
              </div>
            </div>
            <div className="lead-form-box" style={{ background: "#fff", borderTopLeftRadius: 32, borderBottomLeftRadius: 32, padding: "48px 44px" }}>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "var(--slate-800)" }}>درخواست مشاوره</h3>
              <p style={{ margin: "6px 0 28px", fontSize: 14, color: "var(--slate-500)" }}>اطلاعات شما فقط در این موسسه باقی می‌ماند.</p>
              <form action="#" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="design-field" style={{ gridColumn: "1 / 2" }}><label htmlFor="lead-name">نام و نام خانوادگی</label><input id="lead-name" type="text" placeholder="مثلا: محمد احمدی" required /></div>
                <div className="design-field" style={{ gridColumn: "2 / 3" }}><label htmlFor="lead-phone">شماره تماس</label><input id="lead-phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" dir="ltr" style={{ textAlign: "right" }} required /></div>
                <div className="design-field" style={{ gridColumn: "1 / -1" }}><label htmlFor="lead-biz">نام کسب‌وکار</label><input id="lead-biz" type="text" placeholder="مثلا: شرکت آرین شیمی" /></div>
                <div className="design-field" style={{ gridColumn: "1 / -1" }}><label>خدمت مورد نیاز</label><div className="chip-row">{serviceChips.map(s => <button key={s} type="button" className="chip">{s}</button>)}</div></div>
                <div className="design-field" style={{ gridColumn: "1 / -1" }}><label>اندازه کسب‌وکار</label><div className="chip-row">{sizeChips.map(s => <button key={s} type="button" className="chip">{s}</button>)}</div></div>
                <div className="design-field" style={{ gridColumn: "1 / -1" }}><label htmlFor="lead-desc">توضیحات تکمیلی (اختیاری)</label><textarea id="lead-desc" placeholder="مثلا: امسال برگ تشخیص گرفته‌ایم و نیاز به اعتراض داریم..." /></div>
                <div style={{ gridColumn: "1 / -1", marginTop: 6 }}>
                  <button type="submit" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 28px", borderRadius: 12, background: "var(--rose-500)", color: "#fff", fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "inherit", transition: "background .15s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--rose-600)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "var(--rose-500)")}>
                    <span>ثبت درخواست مشاوره رایگان</span><ArrowLeftIco size={18} />
                  </button>
                  <p style={{ fontSize: 11, color: "var(--slate-400)", textAlign: "center", marginTop: 12 }}>با ارسال این فرم، با شرایط محرمانگی موسسه شاخص محاسبان مهر موافقت می‌کنید.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.lead-grid{grid-template-columns:1fr !important;}.lead-form-box{border-radius:0 !important;}}@media(max-width:520px){.lead-form-box form{grid-template-columns:1fr !important;}.lead-form-box .design-field{grid-column:1 / -1 !important;}}`}</style>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────── */
const faqs = [
  { q: "اگر برگ تشخیص مالیاتی نامتعارف گرفته‌ام، می‌توانید کاری کنید؟", a: "بله. اولین قدم بررسی برگ تشخیص و دلایل تعدیل توسط ممیز است. ما طی مهلت ۳۰ روزه اعتراض، لایحه دفاعیه را با مستندات قانونی تنظیم می‌کنیم و در هیات حل اختلاف بدوی و در صورت لزوم تجدیدنظر، حضور و دفاع می‌کنیم. در ۸۰٪ از پرونده‌ها مالیات تعیینی به‌طور قابل‌توجهی کاهش پیدا کرده." },
  { q: "قرارداد ماهانه چقدر طول می‌کشد و چه شامل می‌شود؟", a: "قراردادهای ماهانه به‌صورت سالانه با امکان تمدید بسته می‌شوند. شامل ثبت اسناد روزانه، تنظیم دفاتر، تهیه اظهارنامه‌های مالیاتی و ارزش‌افزوده، گزارش معاملات فصلی، لیست بیمه ماهانه، و گزارش مالی ماهانه می‌شود." },
  { q: "آیا اسناد ما نزد شما امن است؟", a: "بله. تمام مشتریان یک قرارداد محرمانگی (NDA) جداگانه امضا می‌کنند. اسناد فیزیکی در محل امن موسسه و اسناد دیجیتال در سرورهای داخلی با دسترسی محدود نگهداری می‌شوند." },
  { q: "اگر در شهرستان هستیم چطور؟", a: "بسیاری از مشتریان ما در شهرستان‌ها هستند. ارسال اسناد به‌صورت دیجیتال از طریق پنل ارسال امن انجام می‌شود. جلسات از طریق تماس تصویری برگزار می‌شود و در پرونده‌های مالیاتی، حضور در هیات‌های شهرستان به‌صورت موردی هماهنگ می‌گردد." },
  { q: "از کجا بفهمم برای کسب‌وکارم به چه خدمتی نیاز دارم؟", a: "همین‌جا کافی است فرم مشاوره رایگان را پر کنید. در جلسه ۳۰ دقیقه‌ای، کارشناس ما با بررسی وضعیت فعلی شما پیشنهاد مشخصی روی میز می‌گذارد. این جلسه کاملا رایگان است و هیچ تعهدی برای ادامه ایجاد نمی‌کند." },
];

function FaqSection() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-page">
        <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,.7fr) minmax(0,1.3fr)", gap: 56, alignItems: "start" }}>
          <div>
            <EyebrowPill icon={QuestionIco}>سوالات متداول</EyebrowPill>
            <h2 className="split-h2" style={{ marginTop: 18, textAlign: "right" }}><span className="setup">شفاف، بدون حاشیه:</span><span className="accent">پاسخ به آنچه می‌پرسید.</span></h2>
            <p style={{ marginTop: 18, fontSize: 15, color: "var(--slate-600)", lineHeight: 1.85 }}>سوالی دارید که اینجا پاسخ داده نشده؟ <a href="#lead" style={{ color: "var(--rose-500)", fontWeight: 700 }}>بپرسید →</a></p>
          </div>
          <div className="design-card" style={{ padding: "8px 28px", borderRadius: 24 }}>
            {faqs.map((f, i) => (
              <details key={i} className="faq-row">
                <summary><span>{f.q}</span><ChevronIco size={22} /></summary>
                <div className="faq-body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.faq-grid{grid-template-columns:1fr !important;gap:32px !important;}}`}</style>
    </section>
  );
}

/* ─── PAGE ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <RootLayout navbarTransparent={false}>
      <div style={{ overflowX: "hidden" }}>
        <HeroSection />
        <div className="page-lift">
          <StatsSection />
          <ServicesSection />
          <WhyUsSection />
          <TeamSection />
          <TrustSection />
          <BlogPreviewSection />
          <LeadSection />
          <FaqSection />
        </div>
      </div>
    </RootLayout>
  );
}
