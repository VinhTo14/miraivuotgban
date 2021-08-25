module.exports.config = {
name: "sangxinmin",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Sang xịn mịn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Xịn")==0 || (event.body.indexOf("xịn")==0)) {
		var msg = {
				body: "Chất lắm nha >,<",
				attachment: fs.createReadStream(__dirname + `/noprefix/sang xịn mịn.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}