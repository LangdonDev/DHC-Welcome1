const { Client, WebhookClient, MessageEmbed } = require("discord.js");
const client = new Client({intents: 32767})
require("dotenv").config();

client.on("ready", async () => {
    console.log(`${client.user.tag} is Online`)
    client.user.setActivity("for people to leave or join.", {type: "WATCHING"})
});

client.on("guildMemberAdd", async (member) => {
    member.guild.channels.cache.get("942510821118976092").setName(`Total Members: ${member.guild.memberCount}`)
    member.guild.channels.cache.get("942510874340511844").setName(`Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    member.guild.channels.cache.get("942510966472572991").setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)

    const welcomeWebHook = new WebhookClient({
        id: "942224685293273119",
        token: "Nm7O1b5kpAQzUzmPt46LOGmF1UXsgsTnx2i5lySV8WH7m8sUa5H8-SZS1hxtbro35k_V",
    });
    const welcomeEmbed = new MessageEmbed()
    .setColor("#000000")
    .setTitle(`Welcome to austins dhc!`)
    .setTimestamp()
    .setDescription(`<@${member.id}> Welcome to austins dhc! Make sure to read the rules!\n We now have \`${member.guild.memberCount}\` members!`)
    .addFields(
        { name: "Prices", value: "<#942202691126448139>", inline: true},
        { name: "Buy Here", value: "<#942202731731492884>", inline: true},
        { name: "Giveaways", value: "<#942234806887002135>", inline: true},
        { name: "Rules", value: "<#942234823139950712>", inline: true}
    )
    welcomeWebHook.send({embeds: [welcomeEmbed]})
});

client.on("guildMemberRemove", (member) => {
    member.guild.channels.cache.get("942510821118976092").setName(`Total Members: ${member.guild.memberCount}`)
    member.guild.channels.cache.get("942510874340511844").setName(`Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    member.guild.channels.cache.get("942510966472572991").setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)

    const byeWebhook = new WebhookClient({
        id: "942239033894010921",
        token: "sdrxRs5mb-RQcnBmXVQVfihg3Pa6gillvGFWrSp_bqhsyb0xgbYL4XROFEzSNltDKn9P"
    });
    const byeEmbed = new MessageEmbed()
    .setColor("#000000")
    .setTitle("We lost a member! :(")
    .setTimestamp()
    .setDescription(`<@${member.id}> we are sad to see you go!\n We now have \`${member.guild.memberCount}\` members.`)
    byeWebhook.send({embeds: [byeEmbed]})
});

client.login(process.env.TOKEN);