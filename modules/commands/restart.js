module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "JRT",
	description: "Khởi Động Lại Bot.",
	commandCategory: "Hệ thống admin-bot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Success ✅\nVui lòng đợi vài giây để bot khởi động lại hệ thống.",event.threadID, () =>process.exit(1))