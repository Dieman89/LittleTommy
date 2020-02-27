const { Client, RichEmbed } = require('discord.js');
const fetch = require('node-fetch');
const colors = require('./colors.json');
const client = new Client();
const quotes = ['Che schifo di champ', 'Snipered!', 'We need to do fucking JAVA COURSEWORK', 'I will fist your pussy', 'I was predicting.', 'Oid', 'Amir, you are so fucking shit', 'I am good with Zed', 'I do not need Support items', 'I am not drunk', 'Alessaaaaaaaaa', 'Guys, your BOT is MID!!!', 'DO NOT FARM MY MINIONS!!!!', 'DO NOT PUSH MY LANEEE!!!', 'I just woke up', 'HE IS FULL LIFE!!!'];

client.on('ready', async () => {
    console.log('I am ready!');
    client.user.setActivity("Best MID", {type: "FEEDING", url:"https://tommyisbad.eu"});
});

client.on('message', async messages => {
if (messages.content === "!dog") {
    let msg = await messages.channel.send("Generating a dog meme for all you Tommy's followers");
    
    let { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
    console.log(message);
    console.log(messages.guild.iconURL);
    console.log(client.user.displayAvatarURL);
     if(!{message}) return messages.channel.send("I am a little broken Tommy. Try again.")
       let embed = new RichEmbed()
        .setColor(colors.pink)
        .setAuthor('Tommy loves Dogs', messages.guild.iconURL)
        .setImage(message)
        .setTimestamp()
        .setFooter(`The best of Tommy`, client.user.displayAvatarURL)

    messages.channel.send(embed);
    msg.delete(); 
    console.log(messages.guild);
}
if (messages.content === "!cat") {
    let msg = await messages.channel.send("Generating a cat meme for all you Tommy's followers");
    
    let { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
    console.log(message);
     if(!{message}) return messages.channel.send("I am a little broken Tommy. Try again.")
       let embed = new RichEmbed()
        .setColor(colors.pink)
        .setAuthor('Tommy loves Cats', messages.guild.iconURL)
        .setImage(message)
        .setTimestamp()
        .setFooter(`The best of Tommy`, client.user.displayAvatarURL)

    messages.channel.send(embed);
    msg.delete(); 
}
});

client.on('message', message => {
    if (message.content === "!quote") {
       let random = Math.floor((Math.random() * quotes.length));
       message.channel.send(quotes[random]);
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