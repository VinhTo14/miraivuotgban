module.exports.config = {
name: "cacbanbilamsaoy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "các bạn bị làm sao ý!!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("bạn bị làm sao ý")==0 || (event.body.indexOf("Bạn bị làm sao ý")==0)) {
		var msg = {
				body: "Các bạn bị làm sao ý!!!!!!!!!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/các bạn bị làm sao ý.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}