'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //default language: english
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  //Localization Implementation
  const translations = {
    en: {
      welcome: "Welcome to Duneraft",
      join: "Join",
      faq: "FAQ",
      wiki: "Wiki",
      events: "Events",
      webMap: "Web Map",
    },
    zh: {
      welcome: "欢迎加入 Duneraft",
      join: "加入",
      faq: "常见问题",
      wiki: "维基",
      events: "活动",
      webMap: "网页地图",
    }
  };

  //language translation shortcut reference
  const t = translations[language];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  
      {/* Language Selector */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10">
        <div className="flex gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === 'en' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('zh')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === 'zh' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            中文
          </button>
        </div>
      </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <h1 className="text-4xl sm:text-5xl tracking-tight text-center sm:text-left font-light">{t.welcome}</h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        </ol>

        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
            bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/join"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.join}
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
            bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.faq}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          {t.wiki}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/events"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          {t.events}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/map"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          {t.webMap}
        </a>
      </footer>
    </div>
  );
}
