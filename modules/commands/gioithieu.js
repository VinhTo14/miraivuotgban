module.exports.config = {
	name: "gioithieu",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "JRT",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Thông tin adminbot", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("|==== Bảng thông tin JRT ====|\nNgười chạy bot: Nguyễn Hải Đăng\nLink fb: https://www.facebook.com/NHD.JRT.262\n© JRT Music 🎶 2021 👉 Do not reup\nCảm ơn mọi người đã sử dụng bot của mình\nP/s: Chúc mọi người một ngày tốt lành",event.threadID, event.messageID);
	}
}