module.exports.config = {
name: "đcm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "đcm đánh chết mày giờ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đcm")==0 || (event.body.indexOf("đm")==0)) {
		var msg = {
				body: "Đ!t conme đánh chết cha mày bây giờ :)",
				attachment: fs.createReadStream(__dirname + `/noprefix/bảnh.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}