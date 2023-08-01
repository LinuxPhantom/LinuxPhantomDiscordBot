const { Client, GatewayIntentBits, ActivityType } = require("discord.js")
const { config } = require("dotenv")

config()

const token = process.env.TOKEN
const client = new Client({ intents: [ GatewayIntentBits.Guilds ] })

client.on("ready", () => {
    console.log(`${client.user.username} is online.`)
    client.user.setActivity("discord.io/JoinFilth", { type: ActivityType.Playing })
})

client.login(token)
