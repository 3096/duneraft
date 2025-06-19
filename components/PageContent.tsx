'use client';

import { useEffect, useState } from 'react';

type Lang = 'en' | 'zh';
type Translations = Record<string, string>;

export const PageContent = () => {
  const [language, setLanguage] = useState<Lang>('en');
  const [t, setT] = useState<Translations>({});

  useEffect(() => {
    // 动态加载 JSON 文件
    fetch(`/content/${language}.json`)
      .then((res) => res.json())
      .then((data) => setT(data))
      .catch((err) => console.error('Failed to load translation:', err));
  }, [language]);

  return (
    <div className="w-full p-4 sm:ml-64 flex items-center justify-center">
      <main className="flex flex-col gap-8 items-center justify-center text-center">
        {/* 语言切换 */}
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

        {/* 页面文字 */}
        <h1 className="text-4xl sm:text-5xl tracking-tight font-light">
          {t.welcome || '...'}
        </h1>

        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
              bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/join"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.join || '...'}
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
              bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.faq || '...'}
          </a>
        </div>
      </main>
    </div>
  );
};
