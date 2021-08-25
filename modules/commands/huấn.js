module.exports.config = {
name: "huấn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "có làm mới có ăn :))))",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Có làm thì mới có ăn")==0 || (event.body.indexOf("có làm thì mới có ăn")==0)) {
		var msg = {
				body: "Huấn said:",
				attachment: fs.createReadStream(__dirname + `/noprefix/có làm mới có ăn.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}