require("./config");
const cheerio = require("cheerio")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const { fromBuffer } = require("file-type");
const path = require("path");
const os = require("os");
const moment = require("moment-timezone");
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const { Primbon } = require("scrape-primbon");
const xfarr = require("xfarr-api");
const maker = require("mumaker");
const FormData = require("form-data");
const fetch = require("node-fetch");
const yts = require("yt-search");
const ttdown = require("./lib/tt");
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require("./lib/downloader");
const primbon = new Primbon();
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, fetchText, getRandom, generateHash } = require("./lib/myfunc");
const { addCommands, checkCommands, deleteCommands } = require("./lib/autoresp");

const { ytPlay, ytMp3, ytMp4 } = require("./lib/yt");

const { TelegraPh } = require("./lib/uploader");
const hit = JSON.parse(fs.readFileSync("./lib/db/dash.json"));

//anu
const { color } = require("./lib/color");

//db json
const ban = JSON.parse(fs.readFileSync("./lib/db/ban.json"));
const afk = JSON.parse(fs.readFileSync("./lib/db/afk.json"));
const game = JSON.parse(fs.readFileSync("./lib/db/game.json"));
const cmdmedia = JSON.parse(fs.readFileSync("./lib/db/cmd.json"));
const users = JSON.parse(fs.readFileSync("./lib/db/user.json"));
const email = JSON.parse(fs.readFileSync("./lib/db/email.json"));
const commandsDB = JSON.parse(fs.readFileSync("./lib/db/respon.json"));
const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
fatihgan = fs.readFileSync("./lib/assets/logo.jpg");
//bgst
butong1 = [
  {
    quickReplyButton: {
      displayText: "BACK TO MENU",
      id: "menu",
    },
  },
  {
    quickReplyButton: {
      displayText: "SUPORT BOT",
      id: "donasi",
    },
  },
];
//random
serial = generateHash(20);

// Database Game
const kuismath = (game.math = []);
const _family100 = (game.family100 = []);
const tebakkata = (game.tebakkata = []);
const tebakbendera = (game.tebakbendera = []);
const siapaaku = (game.siapaaku = []);
const tebakkalimat = (game.tebakkalimat = []);
const caklontong = (game.caklontong = []);
const susunkata = (game.susunkata = []);
const tekateki = (game.tekateki = []);
const tebakkabupaten = (game.tebakkabupaten = []);
const tebakkimia = (game.tebakkimia = []);
const tebaklirik = (game.tebaklirik = []);
const tebaktebakan = (game.tebaktebakan = []);

// Start
module.exports = pikon = async (pikon, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var prefix = prefa ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "") : prefa ?? global.prefix;
    const isCmd = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = pikon.user.id ? pikon.user.id.split(":")[0] + "@s.whatsapp.net" : pikon.user.id;
    const isCreator = [botNumber, ...global.owner].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
    const itsMe = m.sender == botNumber ? true : false;
    const text = (q = args.join(" "));
    const arg = budy.slice(command.length + 2, budy.length);
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
    const isNumber = (x) => typeof x === "number" && !isNaN(x);

    // Group
    const from = mek.key.remoteJid;
    const isGroup = m.chat.endsWith("@g.us");
    const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false;
    const groupMetadata = m.isGroup ? await pikon.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const sender = isGroup ? mek.participant : mek.key.remoteJid;
    // Bot Status
    const used = process.memoryUsage();
    const cpus = os.cpus().map((cpu) => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
      return cpu;
    });
    const cpu = cpus.reduce(
      (last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
      },
      {
        speed: 0,
        total: 0,
        times: {
          user: 0,
          nice: 0,
          sys: 0,
          idle: 0,
          irq: 0,
        },
      }
    );

    //Antilink Nya By KahfzXzy
    if (isAntiLink)
      if (budy.includes("https://chat.whatsapp.com/")) {
        if (!m.key.fromMe) {
          m.reply("*L I N K  T E R D E T E K S I*\nWahh Nakal sekaliii, Grup ini Sudah dipasang Antilink yak..,\nGood Bye Untukmu..👋🏻");
          let sianj = m.sender;
          await pikon
            .groupParticipantsUpdate(m.chat, [sianj], "remove")
            .then((res) => m.reply(jsonformat(res)))
            .catch((err) => m.reply(jsonformat(err)));
        }
      }
    // respon
    for (var i = 0; i < commandsDB.length; i++) {
      if (budy.toLowerCase() === commandsDB[i].pesan) {
        m.reply(commandsDB[i].balasan);
      }
    }
    //TIME
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((d * 1 + gmt) / 84600000) % 5];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let o = new Date();
    let hari = o.toLocaleDateString(locale, { weekday: "long" });
    let yoi = o.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
    // Public & Self
    if (!pikon.public) {
      if (!m.key.fromMe) return;
    }
    /** Send Button 5 Vifio
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    pikon.send5Vid = async (jid, text = "", footer = "", vid, but = [], options = {}) => {
      let message = await prepareWAMessageMedia({ video: vid }, { upload: pikon.waUploadToServer });
      var template = generateWAMessageFromContent(
        m.chat,
        proto.Message.fromObject({
          templateMessage: {
            hydratedTemplate: {
              videoMessage: message.videoMessage,
              hydratedContentText: text,
              hydratedFooterText: footer,
              hydratedButtons: but,
            },
          },
        }),
        options
      );
      pikon.relayMessage(jid, template.message, { messageId: template.key.id });
    };
    // TextTeplate
    const textTemplateButtons = (from, text, footer, buttons) => {
      return pikon.sendMessage(from, { text: text, footer: footer, templateButtons: buttons });
    };
    // Detect User Banned
    if (ban[m.sender] && isCmd) {
      await pikon.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] } });
      return;
    }

    const adduser = (sender, pushname) => {
      const obj = { id: sender, name: pushname };
      users.push(obj);
      fs.writeFileSync("./lib/db/user.json", JSON.stringify(users));
    };
    const cekuser = (sender) => {
      let status = false;
      Object.keys(users).forEach((i) => {
        if (users[i].id === sender) {
          status = true;
        }
      });
      return status;
    };
    const isUser = cekuser(sender);

    const addmail = (text) => {
      const obj = { email: text };
      email.push(obj);
      fs.writeFileSync("./lib/db/email.json", JSON.stringify(email));
    };
    const cekmail = (text) => {
      let status = false;
      Object.keys(email).forEach((i) => {
        if (email[i].email === text) {
          status = true;
        }
      });
      return status;
    };
    const checkEmail = cekmail(text);

    // Database
    try {
      let users = afk[m.sender];
      if (typeof users !== "object") afk[m.sender] = {};
      if (users) {
        if (!isNumber(users.afkTime)) users.afkTime = -1;
        if (!("banned" in users)) users.banned = false;
        if (!("afkReason" in users)) users.afkReason = "";
      } else
        afk[m.sender] = {
          afkTime: -1,
          banned: false,
          afkReason: "",
        };
    } catch (err) {
      console.log(err);
    }
    //afk
    for (let jid of mentionUser) {
      let user = afk[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      m.reply(
        `
Jangan tag dia!
Dia sedang AFK ${reason ? "dengan alasan " + reason : "tanpa alasan"}
`.trim()
      );
    }

    if (afk[m.sender].afkTime > -1) {
      let user = afk[m.sender];
      m.reply(
        `
Kamu berhenti AFK${user.afkReason ? " setelah " + user.afkReason : ""}
`.trim()
      );
      user.afkTime = -1;
      user.afkReason = "";
    }

    // Push Message To Console

    if (isCmd && !isGroup) {
      console.log(color("[ PRIVATE ]"), color(moment(m.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"), color(`${prefix}${command} [${args.length}]`), "from", color(pushname));
    }
    if (isCmd && isGroup) {
      console.log(color("[ GROUP ]"), color(moment(m.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"), color(`${prefix}${command} [${args.length}]`), "from", color(pushname), "in", color(groupName));
    }
    // Func dashboard
    let words = ["menu", "owner", "ytmp3", "ytmp4", "tiktok", "s", "sticker", "dash", "help", "toimg", "anonymous", "dashboard", "anonymous", "start", "leave", "tiktok", "yt", "ttaud", "ttvid", "tahta", "nulis", "pinterest"];

    if (isCmd && !m.isBaileys) {
      try {
        hitp = words.filter((suu) => suu === command);
        if (hitp[0] === command) {
          hit.push({ sender: m.sender, cmd: command });
          fs.writeFileSync("./lib/db/dash.json", JSON.stringify(hit));
        }
      } catch (err) {
        console.log(err);
      }
    }
    // Respon Cmd with media
    if (isMedia && m.msg.fileSha256 && m.msg.fileSha256.toString("base64") in cmdmedia) {
      let hash = cmdmedia[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: mentionedJid },
        {
          userJid: pikon.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, pikon.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      pikon.ev.emit("messages.upsert", msg);
    }

    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`);
        delete kuismath[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if ("family100" + m.chat in _family100 && isCmd) {
      kuis = true;
      let room = _family100["family100" + m.chat];
      let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, "");
      let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text);
      if (!isSurender) {
        let index = room.jawaban.findIndex((v) => v.toLowerCase().replace(/[^\w\s\-]+/, "") === teks);
        if (room.terjawab[index]) return !0;
        room.terjawab[index] = m.sender;
      }
      let isWin = room.terjawab.length === room.terjawab.filter((v) => v).length;
      let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find((v) => v.includes(" ")) ? `(beberapa Jawaban Terdapat Spasi)` : ""}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? "Menyerah!" : ""}
${Array.from(room.jawaban, (jawaban, index) => {
  return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? "@" + room.terjawab[index].split("@")[0] : ""}`.trim() : false;
})
  .filter((v) => v)
  .join("\n")}

${isSurender ? "" : ``}`.trim();
      pikon
        .sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) } })
        .then((mes) => {
          return (_family100["family100" + m.chat].pesan = mesg);
        })
        .catch((_) => _);
      if (isWin || isSurender) delete _family100["family100" + m.chat];
    }
    if (tebakkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkata[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`);
        delete tebakkata[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (tebakbendera.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakbendera[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak bendera`);
        delete tebakbendera[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (caklontong.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = caklontong[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}caklontong`);
        delete caklontong[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (susunkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = susunkata[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}susunkata`);
        delete susunkata[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkalimat[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`);
        delete tebakkalimat[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (siapaaku.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = siapaaku[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Siapa 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak siapa`);
        delete siapaaku[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (tekateki.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tekateki[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tekateki`);
        delete tekateki[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkabupaten[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kabupaten`);
        delete tebakkabupaten[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (tebakkimia.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkimia[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kimia`);
        delete tebakkimia[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (tebaklirik.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaklirik[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`);
        delete tebaklirik[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaktebakan[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`);
        delete tebaktebakan[m.sender.split("@")[0]];
      } else m.reply("*Salah!*");
    }

    switch (command) {
      case "afk":
        {
          let user = afk[m.sender];
          user.afkTime = +new Date();
          user.afkReason = text;
          m.reply(`
${m.pushName} Telah Afk${text ? ": " + text : ""}`);
        }
        break;

      case "tebak":
        {
          if (!text) throw `Option:\n1. kata\n2. bendera\n3. kalimat\n4. Siapa\n5. tebakan\n6. lirik\n7. kimia\n\nExample: tebak kalimat`;

          if (args[0] === "kata") {
            if (tebakkata.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
              tebakkata[m.sender.split("@")[0]] = result.jawaban.toLowerCase();
            });
            await sleep(60000);
            if (tebakkata.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              m.reply("Waktu Habis\nJawaban: " + result.jawaban);
              delete tebakkata[m.sender.split("@")[0]];
            }
          } else if (args[0] === "bendera") {
            if (tebakbendera.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendFile(m.chat, result.img, "", `Silahkan Jawab Pertanyaan Diatas\n\nCode : ${result.flag}\nWaktu : 60s`, m).then(() => {
              tebakbendera[m.sender.split("@")[0]] = result.name.toLowerCase();
            });
            await sleep(60000);
            if (tebakbendera.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.name);
              m.reply("Waktu Habis\nJawaban: " + result.name);
              delete tebakbendera[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kalimat") {
            if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
              tebakkalimat[m.sender.split("@")[0]] = result.jawaban.toLowerCase();
            });
            await sleep(60000);
            if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              m.reply("Waktu Habis\nJawaban: " + result.jawaban);
              delete tebakkalimat[m.sender.split("@")[0]];
            }
          } else if (args[0] === "siapa") {
            if (siapaaku.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
              siapaaku[m.sender.split("@")[0]] = result.jawaban.toLowerCase();
            });
            await sleep(60000);
            if (siapaaku.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              m.reply("Waktu Habis\nJawaban: " + result.jawaban);
              delete siapaaku[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kabupaten") {
            if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendFile(m.chat, result.url, "", `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : 60s`, m).then(() => {
              tebakkabupaten[m.sender.split("@")[0]] = result.title.toLowerCase();
            });
            await sleep(60000);
            if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.title);
              m.reply("Waktu Habis\nJawaban: " + result.title);
              delete tebakkabupaten[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kimia") {
            if (tebakkimia.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : 60s`, m).then(() => {
              tebakkimia[m.sender.split("@")[0]] = result.unsur.toLowerCase();
            });
            await sleep(60000);
            if (tebakkimia.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.unsur);
              m.reply("Waktu Habis\nJawaban: " + result.unsur);
              delete tebakkimia[m.sender.split("@")[0]];
            }
          } else if (args[0] === "lirik") {
            if (tebaklirik.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
              tebaklirik[m.sender.split("@")[0]] = result.jawaban.toLowerCase();
            });
            await sleep(60000);
            if (tebaklirik.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              m.reply("Waktu Habis\nJawaban: " + result.jawaban);
              delete tebaklirik[m.sender.split("@")[0]];
            }
          } else if (args[0] === "tebakan") {
            if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!";
            let anu = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json");
            let result = anu[Math.floor(Math.random() * anu.length)];
            pikon.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
              tebaktebakan[m.sender.split("@")[0]] = result.jawaban.toLowerCase();
            });
            await sleep(60000);
            if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              m.reply("Waktu Habis\nJawaban: " + result.jawaban);
              delete tebaktebakan[m.sender.split("@")[0]];
            }
          }
        }
        break;
      case "getexif":
        {
          let webp = require("node-webpmux");
          if (!quoted) return m.reply("Reply Stickernya");
          let que = { message: { [m.quoted.mtype]: m.quoted } };
          if (/webp/.test(mime)) {
            anu = await new webp.Image();
            await anu.load(await quoted.download());
            m.reply(util.format(JSON.parse(anu.exif.slice(22).toString())));
          }
        }
        break;
      case "owner":
      case "creator":
        {
          pikon.sendContact(m.chat, global.owner, m);
        }
        break;
      case "runtime":
        okbos = `BOT AKTIF SELAMA ${runtime(process.uptime())}`;
        m.reply(okbos);
        break;
      case "help":
      case "menu":
m.reply(`├───[ H O S T I N G M E N U ]────
🌷creatakun 
🌷 infoserver
🌷 listdomain
🌷 domain 
🌷 termint 
🌷 addpackage 
🌷 ceksmtp
🌷 listdefault
🌷termintall
🌷 cekurl
🌷 sticker

                   
├───[ P I K O N X C O D E ]────`)
        break;
      case "block":
        {
          if (!isCreator) throw m.reply(`Lu Siapa Ajg`);
          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await pikon
            .updateBlockStatus(users, "block")
            .then((res) => m.reply(jsonformat(res)))
            .catch((err) => m.reply(jsonformat(err)));
        }
        m.reply(`succes`);
        break;
        break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
      case "unblock":
        {
          if (!isCreator) throw m.reply(`Lu Siapa Ajg`);
          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await pikon
            .updateBlockStatus(users, "unblock")
            .then((res) => m.reply(jsonformat(res)))
            .catch((err) => m.reply(jsonformat(err)));
        }
        m.reply(`succes`);
        break;
      case "ig":
      case "igdl":
        ok = await xfarr.Instagram(text);
        pikon.sendMessage(m.chat, { video: { url: ok.medias[0].url, caption: "Done" } }, { quoted: m });
        break;
      case "tt":
      case "tiktok":
      case "tiktoknowm":
        if (!text) return m.reply("Linknya?");
        m.reply("Loading..");
        anu = await ttdown(text);
        pikon.sendMessage(m.chat, { video: { url: anu.nowm }, caption: `Nih Kak` }, { quoted: m });
        break;
      case "setpp":
        {
          if (!isCreator) throw mess.owner;
          if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`;
          if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`;
          if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`;
          let media = await pikon.downloadAndSaveMediaMessage(quoted);
          await pikon.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media));
          m.reply(mess.success);
        }
        break;
                 case 'k': {
if (!isCreator) throw  m.reply(`Lu Siapa Ajg lu bukan owneer`)

            pikon.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
      case "report":
        if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${prefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`;
        if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`;
        if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`;
        pikon.sendText("6285875169194@s.whatsapp.net", `Bug Report\n${text}\n Dari ${pushname}`, m);
        m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`);
        break;
      case "saran":
        if (!text) throw `kalo kamu mau saran fitur,  pake perintah ini\n\ncontoh:\n${prefix + command} FITUR ANIME BANG`;
        if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`;
        if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`;
        pikon.sendText("6285875169194@s.whatsapp.net", `SARAN BANG\n${text}\n Dari ${pushname}`, m);
        m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`);
        break;
      case "infoserver":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        async function sStatus1() {
          let serverName1 = "x-login.deltazenesia.xyz:2087";
          let sUser1 = "root";
          let sPass1 = "@@anjaymabar";

          function getDisk() {
            return new Promise((resolve) => {
              axios
                .get(`https://${serverName1}/json-api/getdiskusage?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                .then((e) => {
                  if (!e?.data?.data?.partition || typeof e?.data?.data?.partition != "object") return resolve("");
                  else {
                    let disks =
                      e?.data?.data?.partition
                        ?.map((z) => {
                          return { disk: z.disk, used: ((z.used / z.total) * 100).toFixed(2) + "%" };
                        })
                        ?.map((z) => {
                          return `- ${z.disk} : ${z.used}`;
                        })
                        ?.join("\n") || "";
                    resolve(disks ? "Disk usage:\n" + disks + "\n\n" : "");
                  }
                })
                .catch((e) => {
                  console.log(JSON.stringify(e.response?.data ? { data: e.response.data } : null || e.response || e));
                  resolve("");
                });
            });
          }

          function getCpuLoad() {
            return new Promise((resolve) => {
              axios
                .get(`https://${serverName1}/json-api/systemloadavg?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                .then((e) => {
                  if (e.data?.metadata?.reason != "OK" || !e?.data?.data || typeof e?.data?.data != "object") return resolve("");
                  else {
                    let load = e.data.data?.one || e.data.data?.five || "";
                    resolve(load ? load + "%\n\n" : "");
                  }
                })
                .catch((e) => {
                  console.log(JSON.stringify(e.response?.data ? { data: e.response.data } : null || e.response || e));
                  resolve("");
                });
            });
          }
          function services() {
            return new Promise((resolve) => {
              axios
                .get(`https://${serverName1}/json-api/servicestatus`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                .then(async (e) => {
                  if (!e.data?.service || typeof e.data?.service != "object") return m.reply("error");
                  else {
                    let services = e.data.service
                      .map((x) => {
                        return { name: x["display_name"], status: x.enabled ? "✅" : x.installed ? "⛔" : "❌" };
                      })
                      .filter((x) => {
                        return !!x.name && !!x.status;
                      })
                      .map((x) => {
                        return `- ${x.name} : ${x.status}`;
                      });
                    if (services.length == 0) {
                      console.log(JSON.stringify(e.data?.service || e.data));
                      return resolve("");
                    } else {
                      resolve(`❌: Service tidak Terinstall\n⛔: Service tidak berjalan\n✅: Service berjalan\n\nServer status:\n${services.join("\n")}`);
                    }
                  }
                })
                .catch((e) => {
                  console.log(JSON.stringify(e.response?.data ? { data: e.response.data } : null || e.response || e));
                  resolve("");
                });
            });
          }
          let cpuLoad = await getCpuLoad();
          let diskLoad = await getDisk();
          let serviceStat = await services();

          let res = `${cpuLoad ? "CPU load: " + cpuLoad : ""}${diskLoad ? diskLoad : ""}${serviceStat ? "Service Status:\n" + serviceStat : ""}`;
          m.reply(res ? "Server Status:\n\n" + res : "error");
        }
        sStatus1();
        break;
      case "domain":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        function domain2() {
          let xargs = args.filter((e) => {
            return !!e;
          });

          // edit akun cf disini
          let cf = [
            {
              zone: "d1bb691256de65bb37de6ad87a4e1604",
              apiToken: "8fmCinnkPujCrNxdRHOMVd5cZr26WghyEVNroINB",
              domain: "jepangg.my.id",
            },
            {
              zone: "740c7331a499c186cda6ded01d1262a5",
              apiToken: "3s0tn0KjhqI45liX6uVL8_pwvyPnrZO1bWxjLssl",
              domain: "jepang-sex-host.my.id",
            },
            {
              zone: "76e0d909bb5205facbe0a1c265314263",
              apiToken: "zJamujP9KoDG8ZGNs2H8JjKQLM8Sm-P-5w28gML9",
              domain: "mlbbs.my.id",
            },
            {
              zone: "bdbb2a51ae20b0eb9c17fec0c08c5062",
              apiToken: "1xcLErxT-AZPcJCKd7hhk69zUhmLczgUdh6OKWt8",
              domain: "ppxxx.my.id",
            },
            {
              zone: "c7130e475b6e65bb1bcfedaa2914f856",
              apiToken: "bOZp36IeqKKkrlO3YqPG1WftFpQkCBtfBSvHhAL5",
              domain: "terbarruuu2023.my.id",
            },
            {
              zone: "e3643b2658057f21f70b77c96f951712",
              apiToken: "xyLI1_hxyrJ3LMGbykIcJjR30JylC6gAfbed33wo",
              domain: "terbaru-18-vidio.my.id",
            },
            {
              zone: "89f73a97165d96b6f5e30e10dc95c62f",
              apiToken: "_53howmc3nPCWBXogdVBz8Nqa2Cr1cThx4wuvppB",
              domain: "vidios-sex.my.id",
            },
            {
              zone: "42dac7ef749be2cf5f1ef9ea0beab57d",
              apiToken: "D_pC18pznUs47nQ0l9K2btrtFN6DU-sAwbb48R8Q",
              domain: "viral18lll.my.id",
            },
                      {
              zone: "60c67da855c9601fb078ab58049b4d1b",
              apiToken: "ZziW4Eu3x0Q84xZ7EREwCGYzPwjJhl-dS0EnpJRN",
              domain: "xnxx81host.my.id",
            },
                                  {
              zone: "a62703b8af0b84aa1599c7b8acc25973",
              apiToken: "RutiydMvEdlevZU805jSvJ3OnJX-dPN_uS9rHKXs",
              domain: "xnxxx18-8.my.id",
                },
                                  {
              zone: "1d878ebfefbe262623624c33f65be7c8",
              apiToken: "gMwIf2YL3j5riwkM3PpOauvnmWWNic4Lwqho1jTL",
              domain: "terbaruv.my.id",
                 },
                                  {
              zone: "357aa61045dc66d6174e26e34994a319",
              apiToken: "uG_b-XzutTY4D-27vQhUTFtaQFvYE-eX7LeMczqG",
              domain: "viralll.my.id",
        },
        {
                      zone: "c232852e7478445f3fb2829a7e1b8a8d",
              apiToken: "XdjOU0Ur9W4-nZieczzXcj-2B3P0Tt0c_ud67kbH",
              domain: "vvip.baru.my.id",
        },
        {
                      zone: "fc7c1a7497fb60f22f51a60a500d8c8a",
              apiToken: "_Sj85ldxqIPJ-aazMQCbcJbUSUqTP-scb0B83ciG",
              domain: "viral-newv.my.id",
        },
            
          ];

          async function listDomain(z) {
            let msg = z + "List domain:\n";
            let i = 1;
            for await (let _ of cf) {
              msg += `${i}. ${_.domain}\n`;
            }
            m.reply(msg);
          }
          if (xargs[0]?.toLowerCase() == "listdomain") {
            listDomain("");
          } else {
            let rs = xargs
              .join(" ")
              ?.split("|")
              ?.map((x) => {
                return x.trim();
              });
            if (!rs || rs.length < 3) return m.reply("cara pakai: no | host | ip");
            let id = isNaN(parseInt(rs[0])) ? -1 : parseInt(rs[0]) - 1;
            let host = rs[1];
            let ip = rs[2]
              .replace(/[^0-9.]/gi, "")
              .split(".")
              .filter((e) => !!e)
              .filter((e) => {
                return !isNaN(parseInt(e)) ? parseInt(e) <= 255 : false;
              })
              .join(".");

            if (!cf[id]) return listDomain(`domain nomer ${rs[0]} tidak ada\n\n`);
            else if (ip.split(".").length < 4) return m.reply(`ip ${rs[2]} tidak valid`);
            else {
              let domain = (host.endsWith(".") ? host : host + ".") + cf[id].domain;
              axios
                .post(
                  `https://api.cloudflare.com/client/v4/zones/${cf[id].zone}/dns_records`,
                  {
                    type: "A",
                    name: domain,
                    content: ip,
                    ttl: 1,
                    priority: 10,
                    proxied: false,
                  },
                  { headers: { Authorization: `Bearer ${cf[id].apiToken}` } }
                )
                .then((e) => {
                  if (e.data["success"]) {
                    return m.reply(`berhasil membuat domain https://${domain}\nip: ${ip}\nSilahkan di pakai kak`);
                  } else {
                    m.reply("error");
                    console.log(e.data);
                  }
                })
                .catch((e) => {
                  console.log(e.response?.data || e.response);
                  m.reply("error\n" + (e.response?.data?.errors?.[0]?.message || ""));
                });
            }
          }
        }
        domain2();
        break;
      case "listdomain":
        m.reply(` LIST DOMAIN
1. jepangg.my.id
2. jepang-sex-host.my.id
3. mlbbs.my.id
4. ppxxx.my.id
5. terbarruuu2023.my.id
6. terbaru-18-vidio.my.id
7. vidios-sex.my.id
8. viral18lll.my.id
9. xnxx81host.my.id
10. xnxxx18-8.my.id
11. terbaruv.my.id
12. viralll.my.id
13. vvip.baru.my.id
14. viral-newv.my.id

domain dah merah semua mau tmbh domain send d wa pikon`);
        break;
      case "ceksmtp":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        function mailStatus() {
          let serverName1 = "x-login.deltazenesia.xyz:2087";
          let sUser1 = "root";
          let sPass1 = "@@anjaymabar";
          let param1 = {
            "api.filter.enable": "1",
            "api.filter.a.field": "sendunixtime",
            "api.filter.a.arg0": Math.floor(new Date(new Date().setDate(new Date().getDate() - 7)).getTime() / 1000).toString(),
            "api.filter.a.type": "gt",
            "api.filter.b.field": "sendunixtime",
            "api.filter.b.arg0": Math.floor(new Date(new Date().setHours(new Date().getHours() + 12)).getTime() / 1000).toString(),
            "api.filter.b.type": "lt",
            "api.sort.enable": "1",
            "api.sort.a.field": "sendunixtime",
            "api.sort.a.reverse": "1",
            "api.chunk.enable": "1",
            "api.chunk.size": "25",
            "api.chunk.start": "1",
            success: "1",
            defer: "1",
            failure: "1",
            inprogress: "1",
          };
          axios
            .get(`https://${serverName1}/json-api/emailtrack_search?api.version=1&${new URLSearchParams(param1).toString()}`, { insecureHTTPParser: false, headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
            .then((e) => {
              let data = e.data?.data?.records?.[0] || null;
              if (!data) {
                console.log(JSON.stringify(e.data?.data || e.data));
                return m.reply("error");
              } else {
                data = { sender: data.email, rcpt: data.recipient, time: new Date(data.sendunixtime * 1000).toLocaleString("en-GB", { timeZone: "Asia/Jakarta" }), status: data.type };
                m.reply(`Last email:\nWaktu Kirim: ${data.time}\nStatus: ${data.status} ${data.status == "success" ? "✅" : data.status == "inprogress" ? "⏳" : "⚠️"}`);
              }
            })
            .catch((e) => {
              console.log(JSON.stringify(e.response?.data || e.response || e, null, 2));
              m.reply("error");
            });
        }
        mailStatus();
        break;
      case "groupid":
      case "grupid":
        if (!isGroup) throw m.reply("hanya bisa digunakan di dalam grup");
       if (!isCreator) throw m.reply(`mohon maaf sebelumnya Kalo mo culik saya cuman cri gcId gak usah culik bang mending culik mak saya😗`);
        m.reply(`GroupId: ${from}`);
        break;
      case "termintall":
  if (!isCreator) throw m.reply(`mohon maaf, penggunaan fitur ini harus melalui owner`);
        function termintAllUser() {
          let serverName1 = "x-login.deltazenesia.xyz:2087";
          let sUser1 = "root";
          let sPass1 = "@@anjaymabar";
          axios
            .get(`https://${serverName1}/json-api/listaccts?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
            .then(async (e) => {
              let acc =
                e?.data?.data?.acct
                  ?.map((x) => {
                    return x.user;
                  })
                  ?.filter((x) => {
                    return !["crazyz", "adminhost"].includes(x);
                  }) || [];
              if (acc.length == 0) return m.reply("tidak ada user");
              let errCount = 0;
              for await (let name of acc) {
                await axios
                  .get(`https://${serverName1}/json-api/removeacct?api.version=1&username=${encodeURIComponent(name)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                  .then((e) => {
                    if (!e.data?.metadata?.result) {
                      console.log(e.data);
                      errCount++;
                    }
                  })
                  .catch((e) => {
                    console.log(JSON.stringify(e.response?.data ? { data: e.response.data } : null || e.response || e));
                    errCount++;
                  });
              }
              m.reply(`done, Jumlah Error: ${errCount}x`);
            })
            .catch((e) => {
              console.log(JSON.stringify(e.response?.data ? { data: e.response.data } : null || e.response || e));
              m.reply("Error: gagal mendapatkan list user");
            });
        }
        termintAllUser();
        break;
      case "cekurl":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        function fUrlChecker() {
          let url = args
            .join(" ")
            .split(" ")[0]
            ?.replace(/https?:\/\//, "");
          if (!url) return m.reply("mana url nya");
          let res = `Website checker\n\nUrl: ${url}\n`;

          function cekSSL() {
            axios
              .get(`https://${url}`)
              .then((e) => {
                return m.reply(`${res}Result: ✅ SSL safe`);
              })
              .catch((e) => {
                m.reply(res + "Result: ⚠️ Warning, " + (String(e.message).toLowerCase().includes("certificate") ? "sertifikat ssl tidak valid" : String(e.message)));
              });
          }
          function URLChecker() {
            axios
              .get(`http://${url}`)
              .then((e) => {
                let resUrl = e.request.res.responseUrl;
                if (resUrl.startsWith("https")) return m.reply(`${res}✅ Result: SSL safe`);
                else cekSSL();
              })
              .catch((e) => {
                m.reply(res + "Result: ⚠️ Error, " + (String(e.message).toLowerCase().includes("enotfound") ? "website tidak ditemukan" : String(e.message)));
              });
          }
          URLChecker();
        }
        fUrlChecker();
        break;
      case "termintdomain":
  if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        let dm1 = args.filter((x) => {
          return !!x;
        })[0];
        function deleteDns(host) {
          let zone2 = "d45905fa4b4a9b71e9350da25c07fb5a";
          let apiToken2 = "EwFB0AoyM2gsfz2zCF07U5M9jSSVP9fiUmqRSKMt";
          axios
            .get(`https://api.cloudflare.com/client/v4/zones/${zone2}/dns_records?match=all&per_page=5000`, { headers: { Authorization: "Bearer " + apiToken2, "Content-Type": "application/json" } })
            .then(async (e) => {
              let res = e.data.result.filter((e) => {
                return e.name.toLowerCase() == host.toLowerCase();
              })[0];
              if (res)
                axios
                  .delete(`https://api.cloudflare.com/client/v4/zones/${zone2}/dns_records/${res.id}`, { headers: { Authorization: "Bearer " + apiToken2, "Content-Type": "application/json" } })
                  .then((e) => {
                    if (!e.data?.success) {
                      m.reply("error");
                      console.log(JSON.stringify(e.data || e, null, 2));
                    } else m.reply("done");
                  })
                  .catch((e) => {
                    m.reply("error");
                    console.log(JSON.stringify(e.response.data || e.response || e, null, 2));
                  });
              else m.reply("domain " + host + " tidak ditemukan");
            })
            .catch((e) => {
              reply("error");
              console.log(JSON.stringify(e.response.data || e.response || e, null, 2));
            });
        }

        deleteDns(dm1);
        break;
      case "termintalldomain":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        if (from != "20363024490618172@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        function termintAllDomain() {
          let zone1 = "d45905fa4b4a9b71e9350da25c07fb5a";
          let apiToken1 = "EwFB0AoyM2gsfz2zCF07U5M9jSSVP9fiUmqRSKMt";
          let tld1 = "xterbaru2022.my.id";
          axios.get(`https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records?type=A&match=all&per_page=500`, { headers: { Authorization: "Bearer " + apiToken1, "Content-Type": "application/json" } }).then(async (e) => {
            try {
              let lists =
                e?.data?.result
                  ?.filter((z) => {
                    return z.zone_name == tld1 && !z.name.includes("crazyz") && !z.name.includes("adminhost");
                  })
                  ?.map((x) => {
                    return { name: x.name, id: x.id };
                  }) || [];
              if (lists.length == 0) {
                console.log(JSON.stringify(e.data, null, 2));
                m.reply("list domain tidak ada");
              } else {
                console.log(lists.length);
                let err = 0;
                for await (let rec of lists) {
                  await axios
                    .delete(`https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records/${rec.id}`, { headers: { Authorization: "Bearer " + apiToken1, "Content-Type": "application/json" } })
                    .then((e) => {
                      if (!e.data?.success) {
                        console.log("Error deleting record: " + rec.name);
                        console.log(e.data);
                        err++;
                      }
                    })
                    .catch((e) => {
                      err++;
                      console.log("Error deleting record: " + rec.name);
                      console.log(JSON.stringify(e.response?.data ? { data: e.response.data } : null || e.response || e));
                    });
                }
                m.reply(`done, Jumlah error: ${err}x`);
              }
            } catch (error) {
              console.log(error);
              console.log(e.data);
              m.reply("error");
            }
          });
        }
        termintAllDomain();
        break;
      case "listdefault":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        function listDefault() {
          let serverName1 = "x-login.deltazenesia.xyz:2087";
          let sUser1 = "root";
          let sPass1 = "@@anjaymabar";
          axios
            .get(`https://${serverName1}/json-api/listaccts?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
            .then((e) => {
              let list = e.data?.data?.acct
                ?.filter((z) => {
                  return z.plan.includes("default");
                })
                ?.map((z) => {
                  return z.user;
                });
              if (!list) {
                console.log(JSON.stringify(e.data.data.acct || e.data.data || e.data || e, null, 2));
                return m.reply("error");
              } else if (list.length == 0) return m.reply(`user dengan package "default" tidak ditemukan`);
              else m.reply(`User dengan package default:\n- ${list.join(" [default]\n- ")} [default]`);
            })
            .catch((e) => {
              m.reply("error");
              console.log(JSON.stringify(e.response?.data || e.response || e));
            });
        }
        listDefault();
        break;
      case "addpackage":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        function addpackage_1() {
          let sUser1 = "root";
          let sPass1 = "@@anjaymabar";
          let serverName1 = "x-login.deltazenesia.xyz:2087";
          let stringify = (args) => {
            return args instanceof Error ? JSON.stringify({ msg: args.message, error: String(args) }, null, 2) : typeof args == "object" ? JSON.stringify(args, null, 2) : String(args);
          };
          let upUser = (uname1, pack1) => {
            axios
              .get(`https://${serverName1}/json-api/listpkgs?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
              .then((e) => {
                let pkgs = e.data?.data?.pkg
                  ?.map((x) => {
                    return x.name;
                  })
                  .filter((x) => {
                    return !x.includes("_") && !x.includes("default");
                  });
                if (e.data?.metadata?.reason == "OK") {
                  let allowedPkg = pkgs.filter((x) => {
                    return pack1.toLowerCase().includes("mwhm")
                      ? !x.toLowerCase().includes("mwhm") && (x.toLowerCase().includes("cpanel") || x.toLowerCase().includes("whm"))
                      : pack1.toLowerCase().includes("whm")
                      ? x.toLowerCase().includes("cpanel")
                      : pack1.toLowerCase().includes("admin")
                      ? x.toLowerCase().includes("whm") || x.toLowerCase().includes("cpanel")
                      : pack1.toLowerCase().includes("ceo")
                      ? !x.toLowerCase().includes("admin") && !x.toLowerCase().includes("founder") && !x.toLowerCase().includes("ceo")
                      : pack1.toLowerCase().includes("founder")
                      ? !x.toLowerCase().includes("founder")
                      : false;
                  });
                  if (allowedPkg.length > 0) {
                    let param = "account_limit=15&bandwidth_limit=15000&diskspace_limit=15000&enable_account_limit=0&enable_overselling=0&enable_package_limit_numbers=0&enable_package_limits=1&enable_resource_limits=0";
                    axios.get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } }).then(async (e) => {
                      if (e?.data?.metadata?.reason == "OK") {
                        for await (let pkg of allowedPkg) {
                          console.log(`Add package ${pkg} to ${uname1}`);
                          await axios
                            .get(`https://${serverName1}/json-api/setresellerpackagelimit?api.version=1&user=${uname1}&allowed=1&package=${encodeURIComponent(pkg)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                            .then((e) => {
                              if (e?.data?.metadata?.reason == "OK") {
                                console.log(`add package ${pkg} to ${uname1} success`);
                              } else {
                                console.log({ error: `add package: ${pkg} to user: ${uname1}`, msg: JSON.stringify(e.data?.metadata?.reason || e.data?.metadata || e.data, null, 2) });
                              }
                            })
                            .catch((e) => {
                              console.log(JSON.stringify(e.response?.data || e.reason || e, null, 2));
                            });
                        }
                        await axios
                          .get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                          .then((e) => {})
                          .catch((e) => {});
                        m.reply(`berhasil\n\nusername: ${uname1}\npackage: ${pack1}\n\nsilahkan login`);
                      } else console.log(`upgrade user ${uname1} to ${pack1} failed\nError: ${JSON.stringify(e.data || e, null, 2)}`);
                    });
                  }
                } else {
                  console.log({ error: `failed Upgrading user plan from defaut to ${pack1}`, message: JSON.stringify(e.data?.metadata || e.data, null, 2) });
                }
              })
              .catch((e) => {
                console.log(`upgrade user package to ${pack1} failed\nreason: ${JSON.stringify(e.response?.data || e.response || e, null, 2)}`);
              });
          };
          if (!args[0]) return m.reply("mana user nya");
          axios.get(`https://${serverName1}/json-api/accountsummary?api.version=1&user=${args[0]}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } }).then(async (e) => {
            if (!e.data?.metadata?.result) {
              console.log(stringify(e.data));
              return m.reply("error");
            } else {
              let users = e.data.data.acct;
              if (users?.length == 0) return m.reply("user tidak ditemukan");
              let plan = users[0].plan;
              let user = args[0];
              await axios
                .get(`https://${serverName1}/json-api/setupreseller?api.version=1&user=${user}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                .then((e) => {})
                .catch((e) => {});
              let param =
                "acl-edit-account=1&acl-add-pkg=1&acl-kill-acct=1&acl-suspend-acct=1&acl-basic-system-info=1&acl-basic-whm-functions=1&acl-manage-dns-records=1&acl-edit-pkg=1&acl-stats=1&acl-manage-styles=1&acl-allow-unlimited-pkgs=1&acl-edit-dns=1&acl-cors-proxy-get=1&acl-allow-addoncreate=1&acl-cpanel-api=1&acl-generate-email-config=1&acl-upgrade-account=1&acl-ssl-gencrt=1&acl-passwd=1&acl-acct-summary=1&acl-ns-config=1&acl-allow-unlimited-disk-pkgs=1&acl-mailcheck=1&acl-allow-emaillimits-pkgs=1&acl-digest-auth=1&acl-park-dns=1&acl-list-accts=1&acl-create-user-session=1&acl-allow-parkedcreate=1&acl-show-bandwidth=1&acl-edit-mx=1&acl-limit-bandwidth=1&acl-public-contact=1&acl-create-dns=1&acl-allow-unlimited-bw-pkgs=1&acl-manage-api-tokens=1&acl-status=1&acl-kill-dns=1&acl-mysql-info=1&acl-track-email=1&acl-list-pkgs=1&acl-manage-oidc=1&acl-ssl-info=1&acl-create-acct=1&acl-cpanel-integration=1&acl-ssl=1&acl-quota=1";
              await axios
                .get(`https://${serverName1}/json-api/setacls?api.version=1&reseller=${user}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                .then((e) => {})
                .catch((e) => {});
              upUser(user, plan);
            }
          });
        }
        addpackage_1();
        break;
      case "creatakun":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
      if (!isCreator) throw  m.reply(`Lu Siapa Ajg lu bukan owneer`)
        function hosting1() {
          let usr =
            args[0]
              ?.split("|")[0]
              ?.split(".")[0]
              ?.trim()
              ?.replace(/[^a-z0-9]/gi, "")
              ?.toLowerCase() || "user" + Math.random().toString().substring(2, 7);
          let pass = args.join(" ")?.split("|")?.[1]?.trim() || "!XHostPass123!";
          let pkg = args.join(" ")?.split("|")?.[2]?.trim() || "default";
          let pkgs = ["default", "Admin", "Ceo", "Mwhm Extra", "Mwhm Medium", "Mwhm Mini", "Mwhm Super", "Whm Extra", "Whm Medium", "Whm Mini", "Whm Super", "Whm Unlimited", "Wk.Founder", "Wakil Founder", "cPanel Extra", "cPanel Medium", "cPanel Mini", "cPanel Super", "cPanel Unlimited"];
          if (!pkgs.includes(pkg)) return m.reply(`Package tidak support, berikut list package yang ada:\n- ${pkgs.join("\n- ")}`);
          let cpanel = "x-login.deltazenesia.xyz:2083";
          let servername = "x-login.deltazenesia.xyz:2087";
          let sUser = "root";
          let sPass = "@@anjaymabar";
          let serverIp = "20.68.178.143";

          function upUser(uname1, pack1) {
            let sUser1 = sUser;
            let sPass1 = sPass;
            let serverName1 = servername;
            axios
              .get(`https://${serverName1}/json-api/listpkgs?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
              .then((e) => {
                let pkgs = e.data?.data?.pkg
                  ?.map((x) => {
                    return x.name;
                  })
                  .filter((x) => {
                    return !x.includes("_") && !x.includes("default");
                  });
                axios
                  .get(`https://${serverName1}/json-api/changepackage?api.version=1&user=${encodeURIComponent(uname1)}&pkg=${encodeURIComponent(pack1)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                  .then((e) => {
                    console.log("Upgrade user package: " + JSON.stringify(e.data?.metadata?.reason || {}, null, 2));
                    if (e.data?.metadata?.reason == "OK") {
                      let allowedPkg = pkgs.filter((x) => {
                        return pack1.toLowerCase().includes("mwhm")
                          ? !x.toLowerCase().includes("mwhm") && (x.toLowerCase().includes("cpanel") || x.toLowerCase().includes("whm"))
                          : pack1.toLowerCase().includes("whm")
                          ? x.toLowerCase().includes("cpanel")
                          : pack1.toLowerCase().includes("admin")
                          ? x.toLowerCase().includes("whm") || x.toLowerCase().includes("cpanel")
                          : pack1.toLowerCase().includes("ceo")
                          ? !x.toLowerCase().includes("admin") && !x.toLowerCase().includes("founder") && !x.toLowerCase().includes("ceo")
                          : pack1.toLowerCase().includes("founder")
                          ? !x.toLowerCase().includes("founder")
                          : false;
                      });
                      if (allowedPkg.length > 0) {
                        let param = "account_limit=15&bandwidth_limit=15000&diskspace_limit=15000&enable_account_limit=0&enable_overselling=0&enable_package_limit_numbers=0&enable_package_limits=1&enable_resource_limits=0";
                        axios.get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } }).then(async (e) => {
                          if (e?.data?.metadata?.reason == "OK") {
                            for await (let pkg of allowedPkg) {
                              console.log(`Add package ${pkg} to ${uname1}`);
                              await axios
                                .get(`https://${serverName1}/json-api/setresellerpackagelimit?api.version=1&user=${uname1}&allowed=1&package=${encodeURIComponent(pkg)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                                .then((e) => {
                                  if (e?.data?.metadata?.reason == "OK") {
                                    console.log(`add package ${pkg} to ${uname1} success`);
                                  } else {
                                    console.log({ error: `add package: ${pkg} to user: ${uname1}`, msg: JSON.stringify(e.data?.metadata?.reason || e.data?.metadata || e.data, null, 2) });
                                  }
                                })
                                .catch((e) => {
                                  console.log(JSON.stringify(e.response?.data || e.reason || e, null, 2));
                                });
                            }
                            await axios
                              .get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                              .then((e) => {})
                              .catch((e) => {});
                          } else console.log(`upgrade user ${uname1} to ${pack1} failed\nError: ${JSON.stringify(e.data || e, null, 2)}`);
                        });
                      }
                    } else {
                      console.log({ error: `failed Upgrading user plan from defaut to ${pack1}`, message: JSON.stringify(e.data?.metadata || e.data, null, 2) });
                    }
                  })
                  .catch((e) => {
                    console.log({ error: `failed Upgrading user plan from defaut to ${pack1}`, message: JSON.stringify(e.response?.data || e, null, 2) });
                  });
              })
              .catch((e) => {
                console.log(`upgrade user package to ${pack1} failed\nreason: ${JSON.stringify(e.response?.data || e.response || e, null, 2)}`);
              });
          }

          function subDomain(host, cb, re, su) {
            return new Promise((resolve) => {
              let zone1 = "d45905fa4b4a9b71e9350da25c07fb5a";
              let apiToken1 = "EwFB0AoyM2gsfz2zCF07U5M9jSSVP9fiUmqRSKMt";
              let tld1 = "xterbaru2022.my.id";
              host = host.replace(/[^a-z0-9.-]/gi, "");
              let ip = serverIp;
              axios
                .post(
                  `https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
                  { type: "A", name: host + "." + tld1, content: ip, ttl: 3600, priority: 10, proxied: false },
                  {
                    headers: {
                      Authorization: "Bearer " + apiToken1,
                      "Content-Type": "application/json",
                    },
                  }
                )
                .then((e) => {
                  let res = e.data;
                  if (res.success) {
                    // if (!su) {
                    //   subDomain("www." + host, () => {}, false, true);
                    //   subDomain("webmail." + host, () => {}, false, true);
                    //   subDomain("cpanel." + host, () => {}, false, true);
                    //   subDomain("whm." + host, () => {}, false, true);
                    // }
                    cb(host, res.result?.name);
                  } else if (!re)
                    setTimeout(() => {
                      subDomain(host + Math.random().toString().substring(2, 5), cb, true, su);
                    }, 2000);
                  else {
                    cb("error");
                    console.log(e.data || e);
                  }
                })
                .catch((e) => {
                  let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                  let err1Str = typeof err1 == "object" ? JSON.stringify(err1, null, 2) : String(err1);
                  if (!re)
                    setTimeout(() => {
                      subDomain(host + Math.random().toString().substring(2, 5), cb, true, su);
                    }, 2000);
                  else {
                    cb("error");
                    console.log(e.response?.data || e.response || e);
                  }
                });
            });
          }

          function createAcc(username, pass, pack, dom) {
            return new Promise(async (resolve) => {
              if (!pack) pack = "default";
              username = username.toLowerCase();
              if (!username) return resolve("please specify the username");
              if (!pass) pass = "!XHostPass123!";
              console.log(`creating WHM account | User: ${username} | Password:${pass} | Pack:${pack}`);
              axios
                .get(`https://${servername}/json-api/createacct?api.version=1&username=${encodeURIComponent(username)}&domain=${encodeURIComponent(dom)}&pass=${encodeURIComponent(pass)}${pack && pack != "default" ? "&pack=" + encodeURIComponent(pack) + "&reseller=1" : ""}`, {
                  headers: {
                    Authorization: "Basic " + Buffer.from(sUser + ":" + sPass).toString("base64"),
                  },
                })
                .then((e) => {
                  let res = e?.data?.metadata?.reason || "";
                  if (res == "Account Creation Ok") {
                    if (pack != "default") upUser(username, pack);
                    let msg = e.data.metadata?.output?.raw || "";
                    let $ = cheerio.load(msg);
                    if (msg.includes("+==============================")) {
                      resolve((($("div").text().split("cPanel, L.L.C....")[1].split("...Done")[0].trim() || $("div").text().trim()) + `\nlogin cpanel at: https://${cpanel}\n${!pack.toLowerCase().includes("default") && !pack.toLowerCase().includes("cpanel") ? "login WHM at: https://" + servername : ""}`).replace(/default/g, pack));
                    } else {
                      resolve($("div").text());
                    }
                  } else {
                    console.log(res);
                    resolve("error create acc")
                  }
                })
                .catch((e) => {
                  console.log(e);
                  resolve("error createAcc");
                });
            });
          }
          if (pkg.toLowerCase().includes("default"))
            subDomain(
              usr,
              (uname, dom) => {
                if (uname == "error" || !dom) return m.reply("maaf, error");
                m.reply(`Sedang membuat akun cpanel, silahkan tunggu\n\nUsername: ${uname}\nPack: ${pkg}`);
                createAcc(uname, pass, pkg, dom).then(m.reply);
              },
              false,
              false
            );
          else {
            m.reply(`Sedang membuat akun, silahkan tunggu\n\nUsername: ${usr}\nPack: ${pkg}`);
            createAcc(usr, pass, pkg, usr + ".pikon").then(m.reply);
          }
        }
        hosting1();
        break;
      case "termint":
      if (from != "120363041024473399@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu");
        let uname = args[0];
        if (!uname) m.reply("mana username nya");

        axios
          .get(`https://x-login.deltazenesia.xyz:2087/json-api/removeacct?api.version=1&username=${uname}`, { headers: { Authorization: "Basic " + Buffer.from("root:@@anjaymabar").toString("base64") } })
          .then((e) => {
            if ([1, "1"].includes(e.data?.metadata?.result)) m.reply(`done user ${uname} Telah di Termint`);
            else {
              m.reply("error");
              console.log(e.data);
            }
          })
          .catch((e) => {
            m.reply("error");
            console.log(JSON.stringify(e, null, 2));
          });
        break;

      default:
        if (budy.startsWith("=>")) {
          if (!isCreator) return m.reply(m.reply(`Lu Siapa Ajg`));
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
          } catch (e) {
            m.reply(util.format(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!isCreator) return m.reply(m.reply(`Lu Siapa Ajg`));
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            await m.reply(util.format(err));
          }
        }

        if (budy.startsWith("$")) {
          if (!isCreator) return m.reply(m.reply(`Lu Siapa Ajg`));
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(err);
            if (stdout) return m.reply(stdout);
          });
        }
        if (budy.startsWith("<")) {
          if (!m.key.fromMe && !isCreator) return m.reply(m.reply(`Lu Siapa Ajg`));
          try {
            return m.reply(JSON.stringify(eval(`${args.join(" ")}`), null, "\t"));
          } catch (e) {
            m.reply(e);
          }
        }
        if (m.chat.endsWith("@s.whatsapp.net") && isCmd) {
          this.anonymous = this.anonymous ? this.anonymous : {};
          let room = Object.values(this.anonymous).find((room) => [room.a, room.b].includes(m.sender) && room.state === "CHATTING");
          if (room) {
            if (/^.*(next|leave|start)/.test(m.text)) return;
            if ([".next", ".leave", ".stop", ".start", "Cari Partner", "Keluar", "Lanjut", "Stop"].includes(m.text)) return;
            let other = [room.a, room.b].find((user) => user !== m.sender);
            m.copyNForward(
              other,
              true,
              m.quoted && m.quoted.fromMe
                ? {
                    contextInfo: {
                      ...m.msg.contextInfo,
                      forwardingScore: 0,
                      isForwarded: true,
                      participant: other,
                    },
                  }
                : {}
            );
          }
          return !0;
        }

        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = JSON.parse(fs.readFileSync("./lib/db/msg.json"));
          if (!(budy.toLowerCase() in msgs)) return;
          pikon.copyNForward(m.chat, msgs[budy.toLowerCase()], true);
        }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
