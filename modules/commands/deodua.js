module.exports.config = {
name: "deodua",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Đéo đùa nghiêm túc :) !!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đéo đùa")==0 || (event.body.indexOf("đéo đùa")==0)) {
		var msg = {
				body: "Khẩn trương, đéo đùa nghiêm túc:)",
				attachment: fs.createReadStream(__dirname + `/noprefix/đéo đùa.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}