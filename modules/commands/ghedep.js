module.exports.config = {
name: "ghedep",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "ghệ đẹp",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ghệ đẹp")==0 || (event.body.indexOf("ghệ đẹp")==0)) {
		var msg = {
				body: "Ghệ tao đẹp lắm >,<",
				attachment: fs.createReadStream(__dirname + `/noprefix/ghệ đẹp.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}