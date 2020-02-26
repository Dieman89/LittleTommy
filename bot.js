const Discord = require('discord.js');
const client = new Discord.Client();
const messages = ['Che schifo di champ', 'Snipered!', 'We need to do fucking JAVA COURSEWORK', 'I will fist your pussy', 'I was predicting.', 'Oid', 'Amir, you are so fucking shit', 'I am good with Zed', 'I do not need Support items', 'I am not drunk', 'Alessaaaaaaaaa', 'Guys, your BOT is MID!!!', 'DO NOT FARM MY MINIONS!!!!', 'DO NOT PUSH MY LANEEE!!!', 'I just woke up', 'HE IS FULL LIFE!!!'];

client.on('ready', () => {
    console.log('I am ready!');
});

const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
    let fontSize = 70;
    do {
        ctx.font = `${fontSize -= 10}px sans-serif`;
    } while (ctx.measureText(text).width  > canvas.width - 300);
    return ctx.font;
}

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./background.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server', canvas.width / 2.5, canvas.height / 1.8);
    ctx.font = applyText(canvas, member.displayName);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
    ctx.drawImage(avatar, 25, 0, 200, canvas.height - 50)

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png')

    message.channel.send(`Welcome to the server, ${member}. My name is Little Tommy and I am a real clone of the legendary Tommy. The most terrible player you will ever see!`, attachment);
});

client.on('message', async message => {
    if (message.content === "!join!") {
        client.emit('guildMemberAdd', message.member);
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