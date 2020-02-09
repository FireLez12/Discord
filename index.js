// Initialisation du bot

const Discord = require('discord.js'); 
const client = new Discord.Client();
const emoji = require('discord-emoji-convert');
const generator = require("generate-password");
const Minesweeper = require('discord.js-minesweeper');

const fs = require('fs');




const prefix = "!"

client.login("Ton Token");
client.on("ready", () => { 
console.log(`🤖---------- Je suis connecté en tant que ${client.user.tag} ! ----------🤖`); 
client.user.setActivity("") 

client.user.setStatus("online"); 
client.user.setActivity(`${prefix}aide pour les commandes`);

// Test Avec Des Caca //

client.commands = new Discord.Collection();
//------------ COMMANDES ------------


client.on('message', msg => { ////// DÉBUT écouteur de messages //////


 
    // Aide

     if (msg.content === `${prefix}aide`) {


        if(!message.guild.member.hasPermission("ADMINISTRATOR")) 
        { return message.Reply('Pas Assez De Permissions !')}

        const Aide = new Discord.RichEmbed()
            .setColor('#00ffff')
            .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`, '')
            .setTitle('**__:keyboard: TOUTES LES COMMANDES :keyboard:__**')
            .setDescription(`Prefix du bot --> ${prefix}`)
            .addField(`:sos: │${prefix}aide`, `Affiche cette page`, true)
            .addField(`:information_source: │${prefix}info`, `Affiche les infos du bot`, true)
            .addField(`:ping_pong: │${prefix}ping`, `Affiche le Ping du bot`, true)
            .addField(`:question: │${prefix}hasard`, `Génère un nombre aléatoire entre 1 et 100`, true)
            .addField(`:speaking_head: │${prefix}dit <Texte>`, `Le bot envoie le texte que vous entrez`, true)
            .addField(`:flower_playing_cards: │${prefix}av`, `Vous envoie votre avatar discord`, true)
            .addField(`:white_check_mark: │${prefix}sond`, `Vous envoie l\'aide pour les sondages`, true)
            .addField(`:white_check_mark: │${prefix}sond`, `Sondage avec :white_check_mark: Et :x:`, true)
            .addField(`:one: │${prefix}sond`, `Sondage avec :one: et :two:`, true)
            .addField(`:information_source: │${prefix}util`, `Envoie vos informations utilisateur`, true)
            .addField(`:money_with_wings:   │${prefix}pf`, `Lance un pile ou face`, true)
            .addField(`:arrows_counterclockwise: │${prefix}inv <Texte>`, `Inverse le texte que vous entrez`, true)
            .addField(`:inbox_tray: │${prefix}int <Texte>`, `Écrit le texte que vous entrez dans un embed`, true)
            .addField(`:YouTube: │${prefix}YouTube`, `Avoir L'url De La Chaîne`, true)
            .addField(`:grinning: │${prefix}emoji <Texte>`, `Transforme votre texte en emoji`, true)
            .addField(`:scissors: │${prefix}ppc`, `Lance un pierre papier ciseaux`, true)
            .addField(`:boom: │${prefix}mine`, `Lance un démineur`, true)
            .addField(`** **`, `** **`, true)
            .addField(`** **`, `** **`, true)
            msg.channel.send(Aide);

      
         //              Serveur Info

     } else if (msg.content === `${prefix}FireLez`) {

         var FireLez = new Discord.RichEmbed()
         .setColor("#FF6100")
         .setDescription("Info Sur FireLez, Son Discord, Et Tous Ses Réseaux Sociaux Ect... ")
         .addField("Jeux :","Minecraft, Roblox(Bientôt), BrawlStar, Et Du GamePlay Dès Fois")
         .addField("**__Description__** :","Je Suis Un Futur YouTubeur Qui Ouvrira Bientôt Mon Nom Est Léon Et J'ai 12 Ans Je Suis En Classe De 6 ème :) Je Suis Sympa Et Rigolo Je Suis Mature")
         .addField("**__Liens Utiles Et Réseaux Sociaux__** :","**Mon Discord :** : https://discord.gg/us2qehh Les Autres Sont **Soon**")
         .setFooter("FireLez Inc")
     }

    //              Bot info
     else if (msg.content === `${prefix}info`) {

        
        
        var caca = new Discord.RichEmbed()

      .setColor("#00ffff")
      .setTitle("__**Informations concernant le bot**__")
      .addField("**__Nom__** :", `${client.user.tag}`)
      .addField("**__Prefix__** :", `Le Prefix de Du BOT Est ${prefix}`)
      .addField("**__Développeur Du Bot__**", `Bot Par FireLez, DarksNoobs, !!Wumpus`)
      msg.channel.send(caca)

      
        
       



    //              PING

    } else if (msg.content === `${prefix}ping`) {

        msg.channel.send(":ping_pong: Ping...\n:ping_pong: Ping...").then(m => {
            let ping = m.createdTimestamp - msg.createdTimestamp

            m.edit(`:ping_pong: Mon ping [ \`${ping}\` ms ]\n:ping_pong: API ping   [ \`${Math.round(client.ping)}\` ms ]`);

        })

    



    //             HASARD

    } else if (msg.content === `${prefix}hasard`) { 
             
        msg.channel.send(":man_mage: :crystal_ball:  Hummm...voyons voir...").then((msg) => {
            
            setTimeout(() => {
                msg.edit(`:man_mage: :crystal_ball: J'ai choisi le nombre...`);
            }, 2000 );
            
            setTimeout(() => {
                msg.edit(":man_mage: :crystal_ball: " + Math.floor(Math.random() * 101));
            }, 4000 );
        
        });        
    



    //             AVATAR

    } else if (msg.content === `${prefix}av`) { 

        msg.channel.send(msg.author.displayAvatarURL);

    



    //             DIT

    } else if (msg.content.startsWith(prefix + `dit `)) {

        msg.delete();
        var args = msg.content.split(' ').join(' ').slice(4);

        if (args.length < 1) {

            msg.channel.send('Vous devez écrire une phrase à dire !');

        }else{

            msg.channel.send(args);

        }

    



    //             SONDAGE aide

    } else if (msg.content === `${prefix}sond`) { 

        var sond_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`, '')
        .setTitle("__**Aide sondage**__")
        .addField(`${prefix}sond 1 <Question>` , "**Crée un sondage avec :white_check_mark: et :x: comme réaction**")
        .addField(`${prefix}sond 2 <Question>` , "**Crée un sondage avec :one: et :two: comme réaction**")
        msg.channel.send(sond_embed);
    
    



    //             SONDAGE 1

    } else if (msg.content.startsWith(prefix + "sond 1 ")) { 

        msg.delete();
  
        var args = msg.content.split(' ').join(' ').slice(7);

        if (args.length < 1) {

            msg.channel.send('Vous devez poser une question !');

        }else{

            var sond1_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`, '')
        .setTitle("__**Sondage**__")
        .setDescription(`--> **${args}**`)
        .addField(`Sondage de : ${msg.author.username}` , "** **")
        .setFooter("Mettez votre réaction en dessous")
        msg.channel.send(sond1_embed).then(function(message){
            message.react('✅')
            .then(() => message.react('❌'));
    
        });

        }

    



    //             SONDAGE 2

    } else if (msg.content.startsWith(prefix + "sond 2 ")) { 

        msg.delete();
  
        var args = msg.content.split(' ').join(' ').slice(7);

        if (args.length < 1) {

            msg.channel.send('Vous devez poser une question !');

        }else{

            var sond2_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`, '')
        .setTitle("__**Sondage**__")
        .setDescription(`--> **${args}**`)
        .addField(`Sondage de : ${msg.author.username}` , "** **")
        .setFooter("Mettez votre réaction en dessous")
        msg.channel.send(sond2_embed).then(function(message){
            message.react('1️⃣')
            .then(() => message.react('2️⃣'));
    
        });

        }

    msg.channel.send(serveur_embed);

    //             UTILISATEUR

    } else if (msg.content.startsWith(`${prefix}util`)) { 

        var utilisateur_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle("__**Utilisateur**__")
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`, '')
        .setThumbnail(`${msg.author.avatarURL}`)
        .addField(`**Votre nom d'utilisateur:**` , `${msg.author.tag}`)
        .addField(`**Votre ID:**` , `${msg.author.id}`)

        msg.channel.send(utilisateur_embed);

    



    //             PILE_FACE

    } else if (msg.content === `${prefix}pf`) { 

        var flipcoin = ["Pile", "Face"];

        var randomIndex = Math.floor(Math.random() * flipcoin.length); 

        msg.channel.send(flipcoin[randomIndex]);

    



    //             INVERSER

    } else if (msg.content.startsWith(prefix + `inv `)) { 

        var args = msg.content.split(' ').join(' ').slice(4);

        if (args.length < 1) {
            msg.channel.send('Vous devez entrer un texte à inverser !');
        }

        if (args.length > 1) {
            msg.channel.send(args.split(' ').join(' ').split('').reverse().join(''));
        }
        
    

    
    

    
    //             EMBED

    } else if (msg.content.startsWith(`${prefix}int`)) {

        var args = msg.content.split(' ').join(' ').slice(4);

        msg.delete();

        if (args.length < 1) {
            msg.channel.send('Vous devez entrer un texte à écrire !');
        }

        if (args.length > 1) {
            
            var embed_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .setDescription(args)

        msg.channel.send(embed_embed);
           
        }
    


    
    //             INVITE

    } else if (msg.content === `${prefix}YouTube`) {

        var invit_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle("__**Lien De La Chaîne**__")
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`, '')
        .addField(`:YouTube:Voici L'url De Ma Chaîne YouTube` , `[Cliquez ici](https://discordapp.com/oauth2/authorize?client_id=668000417539424258&scope=bot&permissions=8)`)

        msg.channel.send(invit_embed);
    
    
    

    

    //             EMOJI

    } else if (msg.content.startsWith(`${prefix}emoji `)) {

        const args = msg.content.split(' ').join(' ').slice(7);

        msg.delete();
        
        const args1 = emoji.convert(args)
        
        if (!args1) {
            msg.channel.send("Vous Devez Entrez Un Texte A Convertir En émoji !")
        }else{

            msg.channel.send(args1 + "** **");

        }
    

    
              

    
    //             Pierre Papier Ciseaix

    } else if (msg.content.startsWith(`${prefix}ppc`)) {

        const args = msg.content.split(' ').join(' ').slice(5);

        let replies = ['pierre', 'papier', 'ciseaux'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = args;
        if (!uReply) return msg.channel.send(`Écrivez \`-ppc\` + \`pierre, papier ou ciseaux\``);
        if (!replies.includes(uReply)) return msg.channel.send(`Seulement ces mots sont acceptées: \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            msg.channel.send(replies[result]);
            msg.channel.send('Égalité');
        } else if (uReply === 'pierre') {
            msg.channel.send(replies[result]);
            if (replies[result] === 'papier') return msg.channel.send('J\'ai gagné!');
            else return msg.channel.send('Vous avez gagné!');
        } else if (uReply === 'ciseaux') {
            msg.channel.send(replies[result]);
            if (replies[result] === 'pierre') return msg.channel.send('J\'ai gagné!');
            else return msg.channel.send('Vous avez gagné!');
        } else if (uReply === 'papier') {
            msg.channel.send(replies[result]);
            if (replies[result] === 'ciseaux') return msg.channel.send('J\'ai gagné!');
            else return msg.channel.send('Vous avez gagné!');
        }

    

    

    //             DÉMINEUR

    } else if (msg.content === `${prefix}mine`) {

        const minesweeper = new Minesweeper({
            spaces: false,
          });

        msg.channel.send(minesweeper.start());

        



    //             ERREUR

         } else if (msg.content.startsWith(`${prefix}`)){

        msg.channel.send("Cette Commande N'Existe Pas")

    };
    

}); ////// FIN écouteur de messages /////

}); //////////////// FIN ////////////////