module.exports.config = {
	name: "cadao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Jukie~",
	description: "Ca dao Việt Name",
	commandCategory: "Kiến thức",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=cadao`);
var cadao = res.data.data;
return api.sendMessage(`★ℭɑ ɗɑ❍ ҩ¡ệζ ղɑლ★\n🎐${cadao} `, event.threadID, event.messageID)
}