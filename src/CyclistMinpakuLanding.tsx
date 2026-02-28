import React from "react";
import { Bike, MapPin, ShowerHead, Wrench, Phone, Mail, Calendar, Building2, Train, SunMedium, Waves, Home, Shield, Package, Info, Store, CarFront, Disc3, Bed, Speech, TrainTrack, TrainFront, Mountain, Clock, Car} from "lucide-react";
import { CalendarEmbed } from "./CalendarEmbed";

// シングルファイルのランディングページ（React + Tailwind）
// 画像と地図はプレースホルダ。将来：予約フォーム連携、地図埋め込み、レビュー、英語版切替など。
// NOTE: CDNで特定アイコン（Tool）が取得失敗する環境があったため、Renovation用にローカルSVGのToolIconを用意し依存を排除しました。

export default function CyclistMinpakuLanding() {
  // --- 写真の読み込み（public/photos 配下） ---
  // 例: public/photos/exterior-1.jpg を置けば、"/photos/exterior-1.jpg" で参照可能
  //const [lang, setLang] = useState<"ja" | "en">("ja");
  const isJA = "ja" === "ja";

  const t = {
    ja: {
      name: "民泊 吾妻 公式Webサイト",
      tagline: "民泊 吾妻",
      ctaReserve: "空き状況・お問い合わせ",
      ctaReserveNote: "※オンライン予約は準備中です",
      heroPoints: [
      ],
      cyclistFriendly: {
        title: "ご案内",
        //desc: "富山県滑川市吾妻町の民泊です。",
        items: [
          { icon: <Home className="w-5 h-5" />, label: "素朴で自由な「素泊まり」のお宿" },
          { icon: <Store className="w-5 h-5" />, label: "スーパー・ドラッグストアまで徒歩3分" },
          { icon: <Bike className="w-5 h-5" />, label: "サイクル車庫あり・一階室内にも持ち込み可" },
          { icon: <CarFront className="w-5 h-5" />, label: "近隣にお安い駐車場あり" },
          { icon: <ShowerHead className="w-5 h-5" />, label: "入浴は徒歩3分『あいらぶ湯』へ" },
          { icon: <Disc3 className="w-5 h-5" />, label: "富山県をはじめとしたお祭り資料を鑑賞可能" },
        ],
        optional: [
        ],
      },
      calendar: {
        title: "カレンダー",
      },
      location: {
        title: "アクセス・周辺",
        facts: [
          { icon: <Clock className="w-5 h-5" />, text: "『東京駅』より北陸新幹線経由で約3時間" },
          { icon: <Car className="w-5 h-5" />, text: "『練馬IC』より上信越道経由で約4.5時間" },
          { icon: <Train className="w-5 h-5" />, text: "あいの風とやま鉄道『滑川駅』から徒歩約8分（約650m）" },
          { icon: <MapPin className="w-5 h-5" />, text: "県道139号線沿い／木造2階建て" },
          { icon: <SunMedium className="w-5 h-5" />, text: "『宿場回廊 瀬羽町』へ約800m／『ほたるいかミュージアム』へ約900m" },
          { icon: <Waves className="w-5 h-5" />, text: "富山湾クルージングや海の絶景スポットが近くに" },
          { icon: <Mountain className="w-5 h-5" />, text: "立山登山の富山県側拠点『立山駅』まで車・電車で一時間前後" },
          { icon: <TrainFront className="w-5 h-5" />, text: "あいの風とやま鉄道滑川駅より17分で『富山駅』へ" },
          { icon: <TrainTrack className="w-5 h-5" />, text: "高岡・魚津・黒部などへも電車でアクセス可能" },
        ],
      },
      story: {
        title: "宿泊について",
        bullets: [
          "一室7,500円/一泊、または2階貸し切り27,000円/一泊",
          "現金のみ、リピーター特典あり",
          "チェックイン午後3時から、チェックアウト午前10時まで",
          "連絡先・予約は次にお電話をください → 080xxxxxxxx",
        ],
      },
      numbers: {
        title: "設備のご案内",
        items: [
          {
            icon: <Bed className="w-5 h-5" />,
            label: "宿泊室",
            value: "2階8畳部屋・2階4.5畳部屋",
          },
          {
            icon: <Speech className="w-5 h-5" />,
            label: "交流場所",
            value: "1階くつろぎスペース・2階休憩室",
          },
          {
            icon: <ShowerHead className="w-5 h-5" />,
            label: "アメニティ",
            value: "タオル・シャンプー・洗濯乾燥機等",
          },
          
        ],
        note: "",
      },
      city: {
        title: "宿主からのメッセージ",
        bullets: [
          "普通の民家で少しずつリフォームしています。至らない点はあろうかと思いますが、やすらぎ場所としてご利用頂ければ幸いです。",
          "個人情報を含めお客様の情報を他者に漏らすことはありません。ただし、個人識別できない情報で行政等への数値情報報告はこの限りではありません。",
          "反社会的行動、ハラスメント行動履歴の方はご遠慮ください。",
        ],
      },
      contact: {
        title: "お問い合わせ",
        desc: "ご質問や空き状況の確認は、以下からお気軽にどうぞ。",
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        send: "送信",
      },
      footer: "© "+ new Date().getFullYear() + " Minpaku Azuma",
    },
    en: {
      name: "Minpaku Azuma",
      tagline: "Cyclist‑friendly stay with views of Toyama Bay & Tateyama Range",
      ctaReserve: "Contact / Availability",
      ctaReserveNote: "Online booking coming soon",
      heroPoints: [
        "Cycle garage next to the room (tools available)",
        "Stay‑only plan / Lounge on 1F, bedrooms on 2F",
        "2‑min walk to public bath ‘I Love‑yu’ (panorama & deep‑seawater bath)",
        "Fish shop next door, 3‑min walk to shopping center",
        "Local festival videos & shogi table",
      ],
      cyclistFriendly: {
        title: "Cyclist‑Friendly",
        desc: "Prepared to meet Toyama’s official criteria (to be applied).",
        items: [
          { icon: <Home className="w-5 h-5" />, label: "Bike in room or locked storage" },
          { icon: <Wrench className="w-5 h-5" />, label: "Tool & pump lending" },
          { icon: <Package className="w-5 h-5" />, label: "Luggage keep / courier" },
          { icon: <Shield className="w-5 h-5" />, label: "Secure cycle garage" },
          { icon: <ShowerHead className="w-5 h-5" />, label: "Bathhouse partnership (2‑min walk)" },
          { icon: <WifiIcon />, label: "Free Wi‑Fi" },
        ],
        optional: ["Washer/Laundry (plan)", "Bike wash/work area (plan)", "Local info (routes/food)"]
      },
      location: {
        title: "Access & Neighborhood",
        facts: [
          { icon: <Train className="w-5 h-5" />, text: "~8‑min walk from Namerikawa Stn (~650m)" },
          { icon: <MapPin className="w-5 h-5" />, text: "Along Route 139 / Wooden 2‑story" },
          { icon: <SunMedium className="w-5 h-5" />, text: "800m to ‘Sewamachi’ heritage street / 900m to Hotaruika Museum" },
          { icon: <Waves className="w-5 h-5" />, text: "Toyama Bay cruises & scenic spots nearby" },
        ],
      },
      story: {
        title: "Project Story",
        bullets: [
          "Start with targeted marketing & legal registration",
          "Gradual rollout to enable online booking",
          "Also open as daytime cyclist lounge (11:00–16:00)",
          "Prioritize renovations by ROI",
          "Consider incorporation for funding/operations if needed",
        ],
      },
      numbers: {
        title: "Key Numbers",
        items: [
          { icon: <Bike className="w-5 h-5" />, label: "Toyama Bay Cycling Route", value: "National Cycle Route" },
          { icon: <Calendar className="w-5 h-5" />, label: "Annual users (FY2022→23)", value: "~26k → ~28k" },
          { icon: <Building2 className="w-5 h-5" />, label: "Namerikawa population (FY2023)", value: "~33,185" },
        ],
        note: "Indicative; confirm latest stats with authorities.",
      },
      city: {
        title: "Highlights",
        bullets: [
          "Hotaruika Museum, Sewamachi",
          "Toyama Bay scenery & sunset",
          "Festivals: Ryugu (Jul 19–20, 2025), Nebuta‑nagashi (Jul 31), Lantern (Aug 7–10, 2025)",
        ],
      },
      contact: { title: "Contact", desc: "Feel free to reach out.", name: "Name", email: "Email", message: "Message", send: "Send" },
      footer: "© "+ new Date().getFullYear() + " Cyclist Minpaku Namerikawa",
    },
  } as const;

  //const L = isJA ? t.ja : t.en;
  const L = t.ja

  // *****************************
  // Top-level is wrapped with Fragment to ensure single parent element
  // *****************************
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        {/* Navbar */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <Bike className="w-5 h-5" />
              <span>{L.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="mailto:info@example.com?subject=民泊お問い合わせ"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-white hover:opacity-90"
              >
                <Mail className="w-4 h-4" />{L.ctaReserve}
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-12 pb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {L.tagline}
              </h1>
              <p className="mt-4 text-slate-600">
                {isJA ? (
                  <>
                    宿主は祭りが好きで、特に富山の祭りに魅入っています。<br/>
                    <br className="hidden sm:inline"/>
                    昭和26年築のこの建屋は解体するには勿体ない。<br/>
                    ここでお祭り動画を見ながらくつろいで頂けたら嬉しいです。<br/><br/>
                    ここはサイクリストの走る道。<br/>
                    富山湾クルージングにも立山登山のベースにもと、<br/>
                    いろいろアイデアが浮かぶのではないでしょうか。 </>
                ) : (
                  <>Renovated traditional wooden house with attached cycle garage—bay, mountains, baths, and town within easy reach.</>
                )}
              </p>
              <ul className="mt-6 space-y-2">
                {L.heroPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckDot />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="mailto:info@example.com?subject=民泊お問い合わせ" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 text-white hover:opacity-90">
                  <Phone className="w-4 h-4" /> {L.ctaReserve}
                </a>
                <span className="self-center text-xs text-slate-500">{L.ctaReserveNote}</span>
              </div>
            </div>
            {/* <div className="aspect-[4/3] rounded-3xl bg-slate-200 shadow-inner overflow-hidden"> */}
            <div className="aspect-[4/3] rounded-3xl bg-slate-200 shadow-inner overflow-hidden">
              <img
                src="/photos/murodo.png"
                className="h-full w-full object-cover object-[50%_70%]"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Cyclist Friendly */}
        <Section title={L.cyclistFriendly.title}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {L.cyclistFriendly.items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl border bg-white">
                <div className="shrink-0 p-2 rounded-xl bg-slate-100">{it.icon}</div>
                <div className="text-sm leading-snug">{it.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Calendar */}
        <Section title={L.calendar.title}>
          <CalendarEmbed
            calendarId="YOUR_CALENDAR_ID@group.calendar.google.com"
            timeZone="Asia/Tokyo"
            height={700}
            showTitle={false}
            showTabs={true}
            showPrint={false}
            showNav={true}
          />
        </Section>

        {/* Location */}
        <Section title={L.location.title}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {L.location.facts.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100">{f.icon}</div>
                  <div className="text-sm leading-snug">{f.text}</div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden border">
              {/* 地図プレースホルダ（必要に応じて Google Maps iframe を差し替え） */}
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(isJA ? "富山県滑川市吾妻町343" : "Azumacho 343, Namerikawa City, Toyama Pref.")}&output=embed`}
                title={isJA ? "アクセスマップ" : "Access Map"}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full aspect-[4/3] border-0"
              />
            </div>
          </div>
        </Section>

        {/* Story */}
        <Section title={L.story.title}>
          <ul className="grid md:grid-cols-2 gap-3">
            {L.story.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckDot />
                <span className="text-sm leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Numbers */}
        <Section title={L.numbers.title} subtitle={L.numbers.note}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {L.numbers.items.map((n, i) => (
              <div key={i} className="rounded-2xl border p-3 bg-white">
                <div className="flex items-center gap-2 text-slate-600 text-sm"><span className="p-2 bg-slate-100 rounded-xl">{n.icon}</span> {n.label}</div>
                <div className="mt-2 text-xl font-semibold">{n.value}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* City */}
        <Section title={L.city.title}>
          <ul className="space-y-2">
            {L.city.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Info className="w-5 h-5 mt-0.5 text-slate-500" />
                <span className="text-sm leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </Section>


        {/* Gallery placeholder */}
        <Section title={isJA ? "フォト" : "Photos"} subtitle={isJA ? "外観・内観・ガレージなど" : "Exterior / Interior / Garage"}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/photos/lantern.jpg",
              "/photos/snow_appearance.jpg",
              "/photos/interior_view.jpg",
              "/photos/sea.jpg",
              "/photos/tateyama.png",
              "/photos/station.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={isJA ? `写真 ${i + 1}` : `Photo ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
                onError={(e) => { e.currentTarget.outerHTML =
                  `<div class='aspect-[4/3] w-full rounded-2xl bg-slate-200 flex items-center justify-center text-slate-500'>
                     ${isJA ? "画像を /public/photos に追加してください" : "Add images to /public/photos"}
                   </div>`}}
              />
            ))}
          </div>
        </Section>


        {/* Contact */}
        <Section title={L.contact.title} subtitle={L.contact.desc}>
          <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <label className="block">
              <span className="text-sm text-slate-600">{L.contact.name}</span>
              <input type="text" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder={isJA ? "山田 太郎" : "Taro Yamada"} />
            </label>
            <label className="block">
              <span className="text-sm text-slate-600">{L.contact.email}</span>
              <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="you@example.com" />
            </label>
            <label className="block md:col-span-2">
              <span className="text-sm text-slate-600">{L.contact.message}</span>
              <textarea className="mt-1 w-full rounded-xl border px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder={isJA ? "利用希望日・人数など" : "Dates, number of guests, etc."} />
            </label>
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="button" onClick={() => (window.location.href = "mailto:info@example.com") } className="px-5 py-2.5 rounded-2xl bg-slate-900 text-white hover:opacity-90">
                {L.contact.send}
              </button>
              <span className="text-xs text-slate-500">{L.ctaReserveNote}</span>
            </div>
          </form>
        </Section>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t text-center text-sm text-slate-500">
          {L.footer}
        </footer>
      </div>
    </>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600 text-sm">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function CheckDot() {
  return (
    <svg className="w-5 h-5 mt-0.5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14 0" />
      <path d="M8.5 16a6 6 0 0 1 7 0" />
      <path d="M12 20h.01" />
    </svg>
  );
}
