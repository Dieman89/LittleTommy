const Discord = require('discord.js');
const client = new Discord.Client();
const messages = ['Che schifo di champ', 'Oid', 'Amir, you are so fucking shit', 'I am good with Zed'];
const randomIndex = Math.round(Math.random()*messages.length);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === "!quote") {
        message.channel.send(messages[randomIndex]);
        console.log(messages[randomIndex])
    }
    if (message.content === "Hello") {
        message.channel.send('Hello, my name is Tommy and I am a fucking shit mid laner.');
    }
    if (message.content === "oid") {
        message.channel.send('OOOOID OCROPP!!');
    }
    if (message.content === "Fizz") {
        message.channel.send('CHE SCHIFO DI CHAMP!');
    }

    if (message.content === "Illaoi") {
        message.channel.send('I SWEAR SHE IS SO FKIN BROKEN');
    }

    if (message.content.startsWith("Lee")) {
        message.channel.send('LI SINNEEEEEEEEE');
    }
    if (message.content === `!server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }

    if (message.content == "Tommy is bad") {
        message.react('😄');
        message.channel.send("That's not even fun.")
    }

    if (message.content == "!react") {
        message.react('😄');
    }
    console.log(message.content);
});

client.login(process.env.BOT_TOKEN);