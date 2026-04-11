/**
 * VORTEX FYD サイトコンテンツ管理ファイル
 * 
 * このファイルのテキストを修正することで、サイト内の各セクションの文言を変更できます。
 * 「グローバル」という表現を避け、より落ち着いた、信頼感のあるプロフェッショナルな表現を採用しています。
 */

export const SITE_CONTENT = {
  // サイト全体のメタデータ
  metadata: {
    title: "VORTEX FYD | Digital Solutions & Education Studio",
    description: "VORTEX FYDは、モダンな技術を用いたアプリケーション開発と教育コンテンツを通じて、実用的なソリューションを提供するクリエイティブ・スタジオです。",
    keywords: ["VORTEX FYD", "アプリ開発", "教育", "YouTube", "テクノロジー", "ソリューション"],
  },

  // ナビゲーション
  navbar: {
    logo: "VORTEX FYD",
    links: [
      { name: "Digital Lab", href: "#apps" },
      { name: "Media", href: "#media" },
      { name: "Company", href: "#company" },
    ],
  },

  // ヒーローセクション
  hero: {
    headline: "デジタルで人はもっと進化できる\n実用的な知見と創造",
    subtext: "VORTEX FYDは、モダンな技術を用いたアプリケーション開発と、\n多角的な視点を養う教育メディアを通じて課題を解決するクリエイティブ・スタジオです。",
    buttons: {
      primary: "プロジェクトを見る",
      secondary: "会社概要",
    },
  },

  // デジタルラボ（アプリ紹介）
  appSection: {
    label: "デジタル・ラボ",
    title: "開発プロダクト",
    apps: [
      {
        title: "StockEcho",
        description: "音声入力による投資メモ・モニタリングツール。ひらめきをスムーズに記録し、日常の投資判断をサポートします。",
        status: "Beta",
      },
      {
        title: "VortexNote",
        description: "AIを搭載したボイス・テキストエディタ。断片的な思考を、AIが整理・タスク化するプロセスをサポートします。",
        status: "Beta",
      },
      {
        title: "NForgEt",
        description: "記憶の忘却曲線を考慮した効率的な単語学習トレーナー。AI辞書引きもついて単語の追加も容易になっています。",
        status: "Beta",
      },
      {
        title: "ARSS",
        description: "人間が人間たる理由である脳機能、この機能に対しマルチモーダルに刺激を与え活性化をめざします。",
        status: "Beta",
      },
    ],
  },

  // メディアセクション
  mediaSection: {
    label: "教育・メディア事業",
    title: "言語の壁を超え、\n視点を広げる",
    description: "大人の英語、やり直し、再勉強に。\n読み書きから、聞くしゃべるへ。\n私たちは、効果的なコミュニケーションのあり方を追求しています。",
    features: [],
    youtubeButton: null,
    comingSoon: {
      label: "次回予告 / Coming Soon",
      title: "実践的なコミュニケーション・メソッド",
    },
  },

  // フッター / 会社概要
  footer: {
    company: {
      label: "Company Profile",
      trademark: "VORTEX FYD",
      representative: "Tsuguro Tanaka",
      address: "2F-C Shibuya Dogenzaka Tokyu Building, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo, Japan",
      business: "Business: Mobile Application Development, Digital Media, Education Support, Technology Consulting",
    },
    contact: {
      label: "お問い合わせ / Contact",
      description: "プロダクトに関するご質問やコラボレーション、メディア掲載のご依頼などはこちら。",
      email: "contact@vortex-fyd.com",
    },
    bottom: {
      copyright: "© 2026 VORTEX FYD. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
};
