module.exports.config = {
	name:"uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh theo api - uptime",
	commandCategory: "Hệ thống admin-bot",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=calendar`);
  var hour = res.data.data.time.hour;
  var minute = res.data.data.time.minute;
  var second = res.data.data.time.second;
  var day = res.data.data.solar.day;
  var month = res.data.data.solar.month;
  var year = res.data.data.solar.year;
	const timeStart = Date.now();
	let today = new Date();
	axios.get('https://api.vangbanlanhat.tk/image?type=boy').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `📅Hôm này là: ${day}/${month}/${year}\n⏰Thời gian: ${hour}:${minute}:${second}\n📌Bot của JRT đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây ❤️.\n💎🍃Prefix: #\n💎💧Version: 1.2.14\n💎👤Tổng người dùng: ${global.data.allUserID.length}\n💎👀Tổng Nhóm: ${global.data.allThreadID.length}\n💎🌬Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}\n💎⚡Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n💎🌠Ping: ${Date.now() - timeStart}ms\n\n☠ This bot was made by JRT ☠`,
						attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback);
			})
}
