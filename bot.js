const Discord = require('discord.js');
const fetch = require('node-fetch');
const colors = require('./colors.json');
const client = new Discord.Client();
const messages = ['Che schifo di champ', 'Snipered!', 'We need to do fucking JAVA COURSEWORK', 'I will fist your pussy', 'I was predicting.', 'Oid', 'Amir, you are so fucking shit', 'I am good with Zed', 'I do not need Support items', 'I am not drunk', 'Alessaaaaaaaaa', 'Guys, your BOT is MID!!!', 'DO NOT FARM MY MINIONS!!!!', 'DO NOT PUSH MY LANEEE!!!', 'I just woke up', 'HE IS FULL LIFE!!!'];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
if (message.content === "!cat") {
    let msg = await message.channel.send("Generating a cat meme for all you Tommy's followers");
    
    let { url } = await fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json());
    console.log(url);
    if(!{url}) return message.channel.send("I am a little broken Tommy. Try again.")
        let cEmbed = new Discord.RichEmbed()
        .setColor(colors.pink)
        .setImage(url)
        .setTimestamp()
        message.chat.send({embed: cEmbed});
        msg.delete();
}
});

client.on('message', message => {
    if (message.content === "!quote") {
       let random = Math.floor((Math.random() * messages.length));
       message.channel.send(messages[random]);
       console.log(random);
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