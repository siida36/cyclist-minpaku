type Props = {
  /** 例: xxx@group.calendar.google.com */
  calendarId: string;
  /** 例: Asia/Tokyo */
  timeZone?: string;
  /** px */
  height?: number;
  /** タイトル表示 */
  showTitle?: boolean;
  /** タブ（月/週/予定リスト） */
  showTabs?: boolean;
  /** 印刷ボタン */
  showPrint?: boolean;
  /** ナビ（前/次/今日） */
  showNav?: boolean;
};

export function CalendarEmbed({
  calendarId,
  timeZone = "Asia/Tokyo",
  height = 600,
  showTitle = false,
  showTabs = true,
  showPrint = false,
  showNav = true,
}: Props) {
  const params = new URLSearchParams({
    src: calendarId,
    ctz: timeZone,
    showTitle: showTitle ? "1" : "0",
    showTabs: showTabs ? "1" : "0",
    showPrint: showPrint ? "1" : "0",
    showNav: showNav ? "1" : "0",
  });

  const src = `https://calendar.google.com/calendar/embed?${params.toString()}`;

  return (
    <div style={{ width: "100%" }}>
      <iframe
        title="Google Calendar"
        src={src}
        style={{ border: 0, width: "100%", height }}
        loading="lazy"
      />
    </div>
  );
}

