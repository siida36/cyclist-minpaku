import React from "react";
import { useState } from "react";
import { Bike, MapPin, ShowerHead, Wrench, Phone, Mail, Calendar, Building2, Train, SunMedium, Waves, Home, Shield, Package, Info, Star } from "lucide-react";

// シングルファイルのランディングページ（React + Tailwind）
// 画像と地図はプレースホルダ。将来：予約フォーム連携、地図埋め込み、レビュー、英語版切替など。
// NOTE: CDNで特定アイコン（Tool）が取得失敗する環境があったため、Renovation用にローカルSVGのToolIconを用意し依存を排除しました。

export default function CyclistMinpakuLanding() {
  // --- 写真の読み込み（public/photos 配下） ---
  // 例: public/photos/exterior-1.jpg を置けば、"/photos/exterior-1.jpg" で参照可能
  const [lang, setLang] = useState<"ja" | "en">("ja");
  const isJA = lang === "ja";

  const t = {
    ja: {
      name: "サイクリスト民泊（滑川）",
      tagline: "富山湾と立山連峰を望む、サイクリストに優しい宿",
      ctaReserve: "空き状況・お問い合わせ",
      ctaReserveNote: "※オンライン予約は準備中です",
      heroPoints: [
        "部屋続きのサイクル車庫（工具常備）",
        "素泊まり／1Fくつろぎ・2F寝室",
        "徒歩2分『あいらぶ湯』（立山展望・富山湾夕陽・深層水風呂）",
        "お隣は魚屋さん／徒歩3分でショッピングセンター",
        "越中富山など祭り動画鑑賞・足付将棋盤",
      ],
      cyclistFriendly: {
        title: "サイクリストに優しいポイント",
        desc: "富山県の『サイクリストに優しい宿』要件に沿って整備中（申請予定）。",
        items: [
          { icon: <Home className="w-5 h-5" />, label: "客室への自転車持ち込み可（または施錠保管可）" },
          { icon: <Wrench className="w-5 h-5" />, label: "工具／空気入れ貸出（六角レンチ・タイヤレバー等）" },
          { icon: <Package className="w-5 h-5" />, label: "手荷物一時預かり・宅配受取発送" },
          { icon: <Shield className="w-5 h-5" />, label: "安全なサイクルガレージ（施錠可）" },
          { icon: <ShowerHead className="w-5 h-5" />, label: "入浴は徒歩2分『あいらぶ湯』と連携（入湯券検討）" },
          { icon: <WifiIcon />, label: "フリーWi‑Fi" },
        ],
        optional: [
          "洗濯機・ランドリー（導入検討）",
          "自転車洗浄・作業スペース（整備検討）",
          "周辺情報の提供（コース／グルメ）",
        ],
      },
      location: {
        title: "アクセス・周辺",
        facts: [
          { icon: <Train className="w-5 h-5" />, text: "あいの風とやま鉄道『滑川駅』から徒歩約8分（約650m）" },
          { icon: <MapPin className="w-5 h-5" />, text: "県道139号線沿い／木造2階建て" },
          { icon: <SunMedium className="w-5 h-5" />, text: "『宿場回廊 瀬羽町』へ約800m／『ほたるいかミュージアム』へ約900m" },
          { icon: <Waves className="w-5 h-5" />, text: "富山湾クルージングや海の絶景スポットが近くに" },
        ],
      },
      story: {
        title: "プロジェクトストーリー",
        bullets: [
          "現状のまま民泊事業の届出を行い、まずはターゲットを絞ってスタート",
          "将来的にオンライン予約へ対応（段階導入）",
          "宿泊を伴わない『サイクル休憩所』（11:00–16:00）としても活用",
          "建屋の改修ポイントを洗い出し、費用対効果を見極めて着手",
          "個人で厳しい場合は組織化（団体・会社化）し、協賛・出資も視野に",
        ],
      },
      renew: {
        title: "リニュアル計画（抜粋）",
        bullets: [
          "客室は2階へ集約し、1階と導線分離／2階に洗面・トイレ設置（簡易冷蔵庫）",
          "収納不足の解消（特に2階）、建具ゆがみの調査・補修",
          "電気回路増設（分電盤8回路）・コンセント入替、照明改善",
          "窓まわり（内窓インプラス等で断熱・遮音）・錠改善・壁塗装・畳/障子/襖の刷新",
          "車庫の活用（サイクルガレージ／来客動線）、防犯対策",
        ],
      },
      numbers: {
        title: "データ・指標（抜粋）",
        items: [
          {
            icon: <Bike className="w-5 h-5" />,
            label: "富山県湾岸サイクリングコース",
            value: "ナショナルサイクルルート指定",
          },
          {
            icon: <Calendar className="w-5 h-5" />,
            label: "年間利用者（R4→R5）",
            value: "約26,000人 → 約28,000人",
          },
          {
            icon: <Building2 className="w-5 h-5" />,
            label: "滑川市人口（令和5年）",
            value: "約33,185人／世帯約12,936",
          },
          {
            icon: <Star className="w-5 h-5" />,
            label: "県内民泊数（2024/11）",
            value: "滑川市 1（市内）",
          },
        ],
        note: "※原資料に基づく概略値。最新値は自治体・観光統計をご確認ください。",
      },
      city: {
        title: "滑川の見どころ",
        bullets: [
          "ほたるいかミュージアム、宿場回廊",
          "富山湾最深1,000m超の天然の生簀、夕景スポット",
          "ふるさと竜宮まつり（2025年7月19–20日予定）、滑川ねぶた流し（7/31）、なめりかわランタン祭り（2025/8/7–10）",
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
      footer: "© "+ new Date().getFullYear() + " Cyclist Minpaku Namerikawa",
    },
    en: {
      name: "Cyclist Minpaku (Namerikawa)",
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
      renew: {
        title: "Renovation Points",
        bullets: [
          "Bedrooms on 2F / separate guest flow; add washbasin & toilet on 2F",
          "Fix storage shortage & fittings; electrical & lighting upgrades",
          "Windows/locks/walls/tatami/shoji/fusuma refresh",
          "Utilize garage as secure cycle space & guest entry; security",
        ],
      },
      numbers: {
        title: "Key Numbers",
        items: [
          { icon: <Bike className="w-5 h-5" />, label: "Toyama Bay Cycling Route", value: "National Cycle Route" },
          { icon: <Calendar className="w-5 h-5" />, label: "Annual users (FY2022→23)", value: "~26k → ~28k" },
          { icon: <Building2 className="w-5 h-5" />, label: "Namerikawa population (FY2023)", value: "~33,185" },
          { icon: <Star className="w-5 h-5" />, label: "Minpaku in city (Nov 2024)", value: "1" },
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

  const L = isJA ? t.ja : t.en;

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
              <button
                onClick={() => setLang(isJA ? "en" : "ja")}
                className="px-3 py-1.5 rounded-xl border border-slate-300 text-sm hover:bg-slate-100"
              >
                {isJA ? "EN" : "日本語"}
              </button>
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
                  <>宮大工施工の元・売薬さんの住まいをリノベ。<br className="hidden sm:inline"/>サイクルガレージ併設で、海と山、街と湯をコンパクトに楽しめます。</>
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
              {/* 画像プレースホルダ */}
              <img src="photos/tateyama.png" alt="説明" />
            </div>
          </div>
        </section>

        {/* Cyclist Friendly */}
        <Section title={L.cyclistFriendly.title} subtitle={L.cyclistFriendly.desc}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {L.cyclistFriendly.items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl border bg-white">
                <div className="shrink-0 p-2 rounded-xl bg-slate-100">{it.icon}</div>
                <div className="text-sm leading-snug">{it.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            {isJA ? "任意項目（導入検討中）:" : "Optional (planned):"} {L.cyclistFriendly.optional.join("、 ")}
          </p>
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
                src={`https://www.google.com/maps?q=${encodeURIComponent(isJA ? "富山県滑川市 滑川駅" : "Namerikawa Station, Toyama")}&output=embed`}
                title={isJA ? "滑川駅の地図" : "Map of Namerikawa Station"}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {L.numbers.items.map((n, i) => (
              <div key={i} className="rounded-2xl border p-4 bg-white">
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

        {/* Renovation */}
        <Section title={L.renew.title}>
          <ul className="space-y-2">
            {L.renew.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <ToolIcon className="w-5 h-5 mt-0.5 text-slate-500" />
                <span className="text-sm leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Gallery placeholder */}
        <Section title={isJA ? "フォト" : "Photos"} subtitle={isJA ? "外観・内観・ガレージなど" : "Exterior / Interior / Garage"}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/photos/murodo.png",
              "/photos/interior-1.jpg",
              "/photos/garage-1.jpg",
              "/photos/room-1.jpg",
              "/photos/bath-1.jpg",
              "/photos/neighborhood-1.jpg",
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

// CDN依存を避けるためのローカルSVG版 ToolIcon
function ToolIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* 簡易レンチ風アイコン */}
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4l7 7a2 2 0 0 0 2.8-2.8l-7-7z" />
      <path d="M5 19l3-3" />
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
