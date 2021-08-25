module.exports.config = {
	name: "cosplay",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Xem ảnh cosplay Nhật Bản",
	commandCategory: "random-img",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const request = global.nodemodule["request"];
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	axios.get('https://api.vangbanlanhat.tk/image?type=Cosplay').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Cất súng ống đi nha các ông 🤭🤭`,
						attachment: fs.createReadStream(__dirname + `/cache/cosplay.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cosplay.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.${ext}`)).on("close", callback);
			})
}