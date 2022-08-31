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
  const presences = [`APS@${client.user.id}`, `APS`, `.help`]
  client.user.setStatus('idle')
  if (process.env.PRESENCE !== 3) {
     client.user.setPresence({activities: [{name: presences[process.env.PRESENCE], type: 3}]})
  }
  console.log("Updated rich presence")
})

client.on('messageCreate', (message) => {
  if (message.author.id === process.env.ID) {
   message.react(process.env.EMOJI)
   console.log("Reacted to message!")
  }
});

client.login(process.env.TOKEN)