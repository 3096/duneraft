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
      redstone: "Red Stone Tech",
    },
    zh: {
      welcome: "欢迎加入 Duneraft",
      join: "加入",
      faq: "常见问题",
      wiki: "维基",
      events: "活动",
      webMap: "网页地图",
      redstone: "红石科技",
    }
  };

  //language translation shortcut reference
  const t = translations[language];

  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
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

      
      {/* Sidebar Toggle Button 
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      */}
      {/* Sidebar 
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/wiki"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">{t.wiki}</span>
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">{t.events}</span>
              </a>
            </li>
            <li>
              <a
                href="/map"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">{t.webMap}</span>
              </a>
            </li>
            <li>
              <a
                href="/redstone"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">{t.redstone}</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      */}

      {/* Main Content */}
      <div className="p-4 sm:ml-64 flex items-center justify-center">
        <main className="flex flex-col gap-8 items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-light">
            {t.welcome}
          </h1>
          <div className="flex gap-4 flex-col sm:flex-row">
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
      </div>
    </div>
  );
}
