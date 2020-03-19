const Discord = require("discord.js");
const utils = require("./utils");

require("dotenv").config();

// TODO: Increase listener count

const TOKEN = process.env.TOKEN;
const bot = new Discord.Client();
const channelIds = require("./channel-ids.json").ids;

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}`);
});

bot.on("message", msg => {
  if (msg.content === "!pin") {
    randIdx = utils.getRandomIndex(0, 21);
    utils.fetchPinsByChannel(channelIds[randIdx], bot, msg.channel);
  }
});

bot.login(TOKEN);
