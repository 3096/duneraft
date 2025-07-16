import { Client, GatewayIntentBits, TextChannel, EmbedBuilder } from "discord.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.send" });

// Use environment variables for sensitive data
const BOT_TOKEN = process.env.MOKAGO_TOKEN as string;
const CHANNEL_ID = "1375653847783051315"; // test channel ID
// const CHANNEL_ID = "1371765854798217249";  // mod channel ID
// const CHANNEL_ID = "1374576720174125086";  // anouncement channel ID
// const CHANNEL_ID = "1375767533059047494"; // server update channel ID

// const MESSAGE_CONTENT = "# Do you want to slay the dragon? 🐉\n\n" +
//     "## 募集全服 大型聚众讨龙活动 就在下周五晚 (西半球)/周六白天 (东半球)！\n\n" +
//     "@everyone\n\n[活动详情](https://discord.gg/dqbmm3RP?event=1375712524619743272)";
const MESSAGE_CONTENT = `更新公告
亲爱的群友们：
为了给提供更为优质的游戏体验，我们将于5月24日2:00（UTC-7）进行服务器维护。此次为停服维护，维护更新期间，所有群友将无法登录游戏，请您合理安排时间，避免不必要的损失。
【维护时间】
5月24日2:00（UTC-7）- 5月24日2:30（UTC-7）
【维护方式】
全服停机维护
【维护内容】
详见活动公告与版本更新内容
开服时间将根据实际情况有可能提前或延后，维护结束后，我们将不为您发放任何维护补偿，感谢您的理解与支持~`;

// Create a fancy embed announcement

function getRoundedTimes(roundTo = 5, offsetMinutes = 5, durationMinutes = 5) {
  const now = new Date();
  // Round up to next 5 minutes
  const ms = roundTo * 60 * 1000;
  const roundedStart = new Date(Math.ceil(now.getTime() / ms) * ms);
  // Apply offset
  roundedStart.setMinutes(roundedStart.getMinutes() + offsetMinutes);
  // Set seconds and milliseconds to zero
  roundedStart.setSeconds(0, 0);
  const roundedEnd = new Date(roundedStart.getTime() + durationMinutes * 60 * 1000);

  // Convert to unix timestamps (seconds)
  const startTs = Math.floor(roundedStart.getTime() / 1000);
  const endTs = Math.floor(roundedEnd.getTime() / 1000);

  return { startTs, endTs };
}

const { startTs, endTs } = getRoundedTimes();

const ANNOUNCEMENT_EMBED = new EmbedBuilder()
  .setTitle("更新公告")
  .setDescription(
    `亲爱的群友们\n为了给提供更为优质的游戏体验，我们将于<t:${startTs}:f>进行服务器维护。此次为停服维护，维护更新期间，所有群友将无法登录游戏，请您合理安排时间，避免不必要的损失。`
  )
  .setColor(0x00aeff)
  .addFields(
    { name: "维护时间", value: `<t:${startTs}:f> - <t:${endTs}:f>` },
    { name: "维护方式", value: "全服停机维护" },
    { name: "维护内容", value: "详见公告与更新内容" }
  )
  .setFooter({
    text: "开服时间将根据实际情况有可能提前或延后，维护结束后，我们将不为您发放任何维护补偿，感谢您的理解与支持~",
    iconURL: "https://cdn.discordapp.com/icons/1371634383844278395/f1cd3d58c9d580c0de95d7a13d284938.webp",
  });
const CHANGELOG_EMBED = new EmbedBuilder()
  .setTitle("📝 更新日志")
  .setDescription("本次更新内容如下：")
  .setColor(0x43b581)
  .addFields(
    {
      name: "✨ 新增功能",
      value:
        "• 本群的专属Bot —— **moka**酱，闪亮登场！moka酱将协助新群友自助申请加入白名单啦！\n请在 <#1374576324382949396> 频道使用 `/whitelist` 命令进行操作。",
    },
    {
      name: "🚀 性能提升",
      value: "• 服务器硬件升级为 **Ryzen 7 5800X3D**，带来更流畅的游戏体验。",
    }
  )
  .setFooter({
    text: "感谢大家的支持与反馈，祝游戏愉快！",
    iconURL: "https://cdn.discordapp.com/icons/1371634383844278395/f1cd3d58c9d580c0de95d7a13d284938.webp",
  })
  .setTimestamp();
const CHANGELOG_EMBED1 = new EmbedBuilder()
  .setTitle("📝 更新日志")
  .setDescription("本次更新内容如下：")
  .setColor(0x43b581)
  .addFields(
    {
      name: "✨ 新增功能",
      value:
        "• 服务器添加了 **Discord Integration** mod,\n现在可以在游戏中与 <#1376700875833085973> 频道互通，进行聊天操作。",
    },
    {
      name: "🔒 安全升级",
      value:
        "• 服务器添加了 **ledger** mod，\n可以更好地查询到游戏中的操作记录，以避免大家的财产损坏或者丢失。若在游戏中遇到任何问题，请连系dualie。",
    }
  )
  .setFooter({
    text: "感谢大家的支持与反馈，祝游戏愉快！",
    iconURL: "https://cdn.discordapp.com/icons/1371634383844278395/f1cd3d58c9d580c0de95d7a13d284938.webp",
  })
  .setTimestamp();

const CHANGELOG_EMBED2 = new EmbedBuilder()
  .setTitle("📝 更新日志")
  .setDescription("本次更新内容如下：")
  .setColor(0x43b581)
  .addFields(
    {
      name: "✨ 版本更新",
      value: "• 服务器已更新至 **1.21.6** 版本。与开心善魂一起追逐天空吧，duneraft！",
    },
    {
      name: "🗣️ 语音功能",
      value:
        "• 新增 **Simple Voice Chat**\n欢迎大家在游戏中接近彼此的时候使用语音尽情~~恐吓与威吓~~友好聊天吧~\n（不要忘记本地也安装 Simple Voice Chat 的mod哦~）",
    },
    {
      name: "🛠️ 进阶玩法",
      value:
        "• 服务器端新增 **Carpet** mod，带来更多高级功能与体验。\n在默认选项中，部分功能未被被启用。有需要请联系的话我们哦~",
    }
  )
  .setFooter({
    text: "感谢大家的支持与反馈，祝游戏愉快！",
    iconURL: "https://cdn.discordapp.com/icons/1371634383844278395/f1cd3d58c9d580c0de95d7a13d284938.webp",
  })
  .setTimestamp();

const CHANGELOG_EMBED3 = new EmbedBuilder()
  .setTitle("📝 更新日志")
  .setDescription("本次更新内容如下：")
  .setColor(0x43b581)
  .addFields({
    name: "🔧 新增 Mod",
    value:
      "• 新增 **Servux** mod，让 MiniHUD 等 Mod 能在服务器上显示结构边界。\n" +
      "（需客户端安装，仅需服务器端部署即可生效）",
  })
  .setFooter({
    text: "感谢大家的支持与反馈，祝游戏愉快！",
    iconURL: "https://cdn.discordapp.com/icons/1371634383844278395/f1cd3d58c9d580c0de95d7a13d284938.webp",
  })
  .setTimestamp();

const CHANGELOG_EMBED4 = new EmbedBuilder()
  .setTitle("📝 更新日志")
  .setDescription("本次更新内容如下：")
  .setColor(0x43b581)
  .addFields({
    name: "✨ 版本更新",
    value: "• 服务器已更新至 **1.21.7** 版本，la la la lava！",
  })
  .setFooter({
    text: "感谢大家的支持与反馈，祝游戏愉快！",
    iconURL: "https://cdn.discordapp.com/icons/1371634383844278395/f1cd3d58c9d580c0de95d7a13d284938.webp",
  })
  .setTimestamp();

// Initialize Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (channel && channel.isTextBased()) {
      await (channel as TextChannel).send({
        embeds: [ANNOUNCEMENT_EMBED],
        // embeds: [CHANGELOG_EMBED4],
      });
      console.log("Announcement sent!");
    } else {
      console.error("Channel not found or is not a text channel.");
    }
  } catch (error) {
    console.error("Error sending announcement:", error);
  } finally {
    client.destroy();
  }
});

client.login(BOT_TOKEN);
