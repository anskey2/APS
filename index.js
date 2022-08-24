const discordjs = require("discord.js")
console.log(`loaded discord.js`)
const dotenv = require("dotenv")
console.log(`loaded dotenv`)
dotenv.config()

const client = new discordjs.Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildMessageReactions",
  ]
})
client.on("ready", async () => {
  console.log(`${client.user.tag} loaded`)
  client.user.setStatus('idle')
  client.user.setPresence({activities: [{name: `APS@${client.user.id}`, type: 3}]})
  console.log("Updated rich presence")
})

client.on('messageCreate', (message) => {
  if (message.author.id === process.env.ID) {
   console.log("Reacted to message!")
   message.react('🤓')
  }
});

client.login(process.env.TOKEN)