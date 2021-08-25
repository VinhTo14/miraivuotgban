module.exports.config = {
 name: "lyrics",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "JRT",
 description: "Lời bài hát from chiasenhac",
 commandCategory: "Phương tiện",
 usages: "lyrics [tên bài hát]",
 cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let timkiem = args.join(" ");
const res = await axios.get(`https://le31.glitch.me/lyrics-csn?q=${timkiem}`);
var lyrics = res.data.lyrics;
var name = res.data.name;
return api.sendMessage(`⚡️Lời bài hát: ${name}\n≻───── ⋆✩⋆ ─────≺\n${lyrics} `, event.threadID, event.messageID)
}