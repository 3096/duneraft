'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type MachineData = {
  id: string;
  title: string;
  author?: string;
  description?: string;
  location?: string;
  steps?: string[];
  image?: string;
};

export default function RedStonePage() {
  const [machines, setMachines] = useState<MachineData[]>([]);

  useEffect(() => {
    fetch('/data/machines.zh.json')
      .then((res) => res.json())
      .then((data) => setMachines(data))
      .catch((err) => console.error('Failed to load machine data:', err));
  }, []);

  return (
    <div className="pt-6 flex flex-col items-start justify-start min-h-screen px-4 sm:px-20">
      <h1 className="text-3xl font-bold mb-6">红石机器汇总</h1>
      <p className="mb-6">
        这里收录了服务器中各类红石机器的导航目录、使用说明和位置指引。
        <br />
        点击下方任意的机器名称，即可快速跳转至对应内容～
        <br />
        特别感谢所有为服务器建造这些高效又好用的机器的群友们！
      </p>

      {/* Jump Links */}
      <ul className="flex flex-wrap gap-4 mb-8">
        {machines.map((m) => (
          <li key={m.id}>
            <button
              onClick={() => document.getElementById(m.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-2 border border-white text-white bg-black hover:bg-white hover:text-black rounded"
            >
              {m.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Render Machines */}
      {machines.map((machine) => (
        <div
          id={machine.id}
          key={machine.id}
          className="scroll-mt-10 mb-12 w-full max-w-4xl"
        >
          <h2 className="text-2xl font-semibold mb-2">{machine.title}</h2>
          {machine.image && (
            <Image
              src={machine.image}
              alt={machine.title}
              width={800}
              height={450}
              className="rounded-lg mb-4"
            />
          )}
          {machine.author && (
            <p className="text-white text-sm mb-2">制作者：{machine.author}</p>
          )}
          {machine.description && (
            <p className="text-base text-white mb-4">{machine.description}</p>
          )}
          {machine.location && (
            <p className="text-sm text-white mb-4">坐标：{machine.location}</p>
          )}
          {machine.steps?.length && (
            <div className="text-white text-sm mb-6">
              使用步骤：
              <ul className="list-disc list-inside mt-2">
                {machine.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-[#ffb5c1] text-white font-semibold rounded-full p-3 shadow-xl hover:scale-105 hover:bg-[#FC8EAC] transition-all"
      >
        ⬆️ TOP
      </button>
    </div>
  );
}
