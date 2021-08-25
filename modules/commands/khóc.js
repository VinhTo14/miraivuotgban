module.exports.config = {
name: "khóc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "ai khóc nỗi đau này",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Huhu")==0 || (event.body.indexOf("Hic")==0)) {
		var msg = {
				body: "Ai khóc nỗi đau này",
				attachment: fs.createReadStream(__dirname + `/noprefix/ai khóc nỗi đau này.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}