module.exports.config = {
name: "hedep",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "người chơi hệ đẹp",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("đẹp")==0 || (event.body.indexOf("Đẹp")==0)) {
		var msg = {
				body: "Tao là người chơi hệ đẹp :)))",
				attachment: fs.createReadStream(__dirname + `/noprefix/người chơi hệ đẹp.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}