"use client";

import Image from "next/image";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function DropdownMenu() {
  const farmDirectoryTable = [
    [
      {
        id: "treeBombMachine",
        name: "炸树机",
      },
      {
        id: "sandMachine",
        name: "刷沙机",
      },
      {
        id: "clayMachine",
        name: "黏土机",
      },
      {
        id: "stoneBombMachine",
        name: "炸石机",
      },
    ],
    [
      {
        id: "simpleFurnaceGroup",
        name: "简易熔炉组",
      },
      {
        id: "efficientFurnaceGroup",
        name: "高效熔炉组",
      },
      {
        id: "landVillagerTradingPost",
        name: "陆地村民交易所",
      },
      {
        id: "skyIslandVillagerTradingPost",
        name: "空岛村民交易所",
      },
    ],
    [
      {
        id: "iceMachine",
        name: "制冰机",
      },
      {
        id: "squidTower",
        name: "墨鱼塔",
      },
      {
        id: "landFoodTower",
        name: "陆地食物塔",
      },
      {
        id: "skyIslandFoodTower",
        name: "空岛食物塔",
      },
    ],
    [
      {
        id: "frogLightMachine",
        name: "蛙明灯机",
      },
      {
        id: "upgradedTreeBombMachine",
        name: "升级版炸树机",
      },
      {
        id: "slimeWitchTower",
        name: "史莱姆/女巫刷怪塔",
      },
      {
        id: "piglinXPTradingTower",
        name: "猪人经验/猪灵交易塔",
      },
    ],
    [
      {
        id: "simpleConcreteGenerator",
        name: "简易混凝土生成器",
      },
      {
        id: "witherKiller",
        name: "沙雕机",
      },
      {
        id: "raidFarm",
        name: "袭击塔",
      },
    ],
  ];
  return (
    <ul className="flex bg-black p-4 rounded w-full ">
      {farmDirectoryTable.map((group, index) => (
        <ul className="space-y-2" key={index}>
          {group.map((item) => (
            <li className="px-4 py-2 cursor-pointer" key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="px-2 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200 rounded"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      ))}
    </ul>
  );
}

export default function RedStonePage() {
  return (
    <div>
      {/* Main Content */}
      <div className="ml-0 sm:ml-60 p-8 pt-6 flex flex-col items-start justify-start min-h-screen">
        <h1 className=" text-3xl font-bold mb-7 text-left ml-5">红石机器汇总 {"3" + "2"} </h1>
        {/* text-gray-600 mb-6 text-left ml-[2%] bg-gradient-to-r from-[#ffb5c1] via-pink-100 to-[#ffb5c1] p-5 shadow-md bg-opacity-90 rounded-2xl*/}
        <h2 className="mb-4 p-5">
          这里收录了服务器中各类红石机器的导航目录、使用说明和位置指引。
          <br />
          点击下方任意的机器名称，即可快速跳转至对应内容～
          <br />
          特别感谢所有为服务器建造这些高效又好用的机器的群友们！
          <br />
        </h2>
        <hr className="border-t border-gray-600 my-3 w-full" />
        <DropdownMenu />
        <hr className="border-t border-gray-600 my-6 w-full" />
        {/* Sample Content */}
        <div id="treeBombMachine" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">炸树机</h2>
          <Image
            src="/redstone/treeBombMachine.png"
            alt="炸树机"
            width={800}
            height={450}
            className="rounded-lg mb-4"
          />
          <p className="text-base text-white mb-8">
            制作者：
            <br />
            肚肚（MC ID：dualie）
            <br />
            <br />
            简介：
            <br />
            这是一台适合大批量收集木材的半自动炸树机。通过骨粉催熟树苗、再用 TNT
            自动炸树，轻松搞定一大堆木头。此外还支持挂机操作～
            <br />
            不过用完千万记得关掉音乐盒，不然它就不是炸树机，而是炸·炸树机了T T
            <br />
            <br />
            坐标：
            <br />
            x: -468 y: 65 z: -5（San Tuducisco主城内）
            <br />
            <br />
            使用步骤： <br /> 1. 确保左手拿着树苗，右手拿着骨粉。 <br />
            2. 打开左边的自动补骨粉开关和右边控制TNT的音乐盒。 <br />
            3. 站到指定位置，对准泥土块按住右键不放（可挂机使用）。 <br />
            4. 走之前别忘了关掉两个开关！
            <br />
          </p>
        </div>

        <div id="sandMachine" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">End Portal Sand/Concrete Powder Duper (刷沙/混凝土粉末机)</h2>
          <p className="text-base text-white mb-8">
            制作者：
            <br />
            云淼（MC ID：YunMiao）
            <br />
            <br />
            简介：
            <br />
            The Sand Machine automates the collection of sand, providing a steady supply for construction and crafting
            needs.
            <br />
            <br />
            坐标：
            <br />
            地狱 x:  y:  z: 
            <br />
            <br />
            使用步骤：
            <br /> 1. 
            <br /> 2. 
            <br />
            <br />
            
          </p>
        </div>

        <div id="clayMachine" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Clay Machine (黏土机)</h2>
          <p className="text-base text-white mb-8">
            The Clay Machine is a highly efficient tool for gathering clay, essential for building and crafting
            projects.
          </p>
        </div>

        <div id="stoneBombMachine" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Cobblestone Farm (刷石机)</h2>
          <p className="text-base text-white mb-8">
            The Stone Bomb Machine is perfect for mining large quantities of stone quickly and efficiently.
          </p>
        </div>

        <div id="simpleFurnaceGroup" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Simple Furnace Group (简易熔炉组)</h2>
          <p className="text-base text-white mb-8">
            The Simple Furnace Group is a compact and easy-to-use setup for smelting ores and cooking food.
          </p>
        </div>

        <div id="efficientFurnaceGroup" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">67 Furnace Array (67速熔炉组)</h2>
          <p className="text-base text-white mb-8">
            制作者：
            <br />
            云淼（MC ID：YunMiao）
            <br />
            <br />
            简介：
            <br />
            The Efficient Furnace Group maximizes smelting speed and fuel efficiency, ideal for large-scale operations.
            <br />
            <br />
            坐标：
            <br />
            x:  y:  z: （San Tuducisco主城内）
            <br />
            <br />
            使用步骤：
            <br /> 1. 
            <br /> 2. 
            <br />
            <br />
          </p>
        </div>

        <div id="landVillagerTradingPost" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Land Villager Trading Post (陆地村民交易所)</h2>
          <p className="text-base text-white mb-8">
            The Land Villager Trading Post provides a convenient location for trading with villagers on land.
          </p>
        </div>

        <div id="skyIslandVillagerTradingPost" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Sky Island Villager Trading Post (空岛村民交易所)</h2>
          <p className="text-base text-white mb-8">
            The Sky Island Villager Trading Post is a unique setup for trading with villagers in sky-based environments.
          </p>
        </div>

        <div id="iceMachine" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Ice Machine (制冰机)</h2>
          <p className="text-base text-white mb-8">
            The Ice Machine automates the production of ice blocks, useful for building and cooling systems.
          </p>
        </div>

        <div id="squidTower" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Squid Tower (墨鱼塔)</h2>
          <p className="text-base text-white mb-8">
            制作者：
            <br />
            云淼（MC ID：YunMiao）
            <br />
            <br />
            简介：
            <br />
            The Squid Tower is optimized for collecting ink sacs from squids, essential for dye production.
            <br />
            <br />
            坐标：
            <br />
            地狱 x:  y:  z: 
            <br />
            <br />
            使用步骤：
            <br /> 1. 
            <br /> 2. 
            <br />
            <br />
            
          </p>
        </div>

        <div id="landFoodTower" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Land Food Tower (陆地食物塔)</h2>
          <p className="text-base text-white mb-8">
            The Land Food Tower is a reliable source of food production for land-based setups.
          </p>
        </div>

        <div id="skyIslandFoodTower" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Sky Island Food Tower (空岛食物塔)</h2>
          <p className="text-base text-white mb-8">
            The Sky Island Food Tower provides efficient food production in sky-based environments.
          </p>
        </div>

        <div id="frogLightMachine" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Frog Light Machine (蛙明灯机)</h2>
          <p className="text-base text-white mb-8">
            The Frog Light Machine automates the production of frog lights, a decorative and unique light source.
          </p>
        </div>

        <div id="upgradedTreeBombMachine" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Upgraded Tree Bomb Machine (升级版炸树机)</h2>
          <p className="text-base text-white mb-8">
            The Upgraded Tree Bomb Machine improves upon the original design, offering faster and more efficient tree
            clearing.
          </p>
        </div>

        <div id="slimeWitchTower" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Slime/Witch Tower (史莱姆/女巫刷怪塔)</h2>
          <p className="text-base text-white mb-8">
            The Slime/Witch Tower combines slime and witch farming into one efficient structure, providing valuable
            resources for crafting and potions.
          </p>
        </div>

        <div id="piglinXPTradingTower" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Piglin XP/Trading Tower (猪人经验/猪灵交易塔)</h2>
          <p className="text-base text-white mb-8">
             制作者：
            <br />
            云淼（MC ID：YunMiao）
            <br />
            <br />
            简介：
            <br />
            The Piglin XP/Trading Tower is a highly efficient structure designed to maximize experience gain and trading
            opportunities with Piglins.
            <br />
            <br />
            坐标：
            <br />
            地狱 x:  y:  z: 
            <br />
            <br />
            使用步骤：
            <br /> 1. 
            <br /> 2. 
            <br />
            <br />
            
          </p>
        </div>

        <div id="simpleConcreteGenerator" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">简易混凝土固化器</h2>
          <p className="text-base text-white mb-8">
            制作者：
            <br />
            涂涂（MC ID：Yuushatutu）
            <br />
            <br />
            简介：
            <br />
            适合新手使用的简易混凝土固化器。由于设备仅支持手动操作，暂无法实现自动化，因此更适合在需要少量混凝土的时候使用～
            <br />
            <br />
            坐标：
            <br />
            x: -481 y: 63 z: 7（San Tuducisco主城内）
            <br />
            <br />
            使用步骤： <br /> 1. 确保左手拿着混凝土粉末，右手拿着稿子。 <br />
            2. 站到指定位置，对准水块，右键放混凝土粉末，左键挖。 <br />
            <br />
          </p>
        </div>

        <div id="witherKiller" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4"> 沙雕机</h2>
          <p className="text-base text-white mb-8">
             制作者：
            <br />
            Boring（MC ID：AX3344）
            <br />
            <br />
            简介：
            <br />
            
            <br />
            <br />
            坐标：
            <br />
            末地 x:  y:  z: 
            <br />
            <br />
            使用步骤：
            <br /> 1. 
            <br /> 2. 
            <br />
            <br />
           
          </p>
        </div>

        <div id="raidFarm" className="scroll-mt-10 mb-6 w-[70%] ml-[2%] mr-auto">
          <h2 className="text-2xl font-semibold mb-4">Raid Farm (袭击塔)</h2>
          <p className="text-base text-white mb-8">
            制作者：
            <br />
            云淼（MC ID：YunMiao）
            <br />
            <br />
            简介：
            <br />
            这是一座高效的袭击塔，专门用于刷取村民袭击事件。通过自动化的设计，可以轻松获取大量的经验和战利品。
            <br />
            产物：
            <br />
            绿宝石、不死图腾、红石粉、萤石粉、火药、木棍、玻璃瓶、蜘蛛眼、糖
            <br />
            坐标：
            <br />
            x:  y:  z: 
            <br />
            <br />
            使用步骤：
            <br /> 1. 
            <br /> 2. 
            <br />
            <br />
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-44 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="http://localhost:3000"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-black dark group"
              >
                <span className="ms-3">Home Page</span>
              </a>
            </li>
            <li>
              <a
                href="/wiki"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-black dark group"
              >
                <span className="ms-3">Wiki</span>
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-black dark group"
              >
                <span className="ms-3">Events</span>
              </a>
            </li>
            <li>
              <a
                href="/map"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-black dark group"
              >
                <span className="ms-3">Web Map</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 btn-soft right-6 bg-[#ffb5c1] text-white font-semibold rounded-full p-3 shadow-xl hover:scale-105 hover:bg-[#FC8EAC] transition-all"
      >
        ⬆️ TOP
      </button>
    </div>
  );
}
