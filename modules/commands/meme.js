module.exports.config = {
	name: "meme",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh chế nhưng của Việt Nam :))",
	commandCategory: "random-img",
	usages: "meme",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.vangbanlanhat.tk/image?type=Meme').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/meme.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meme.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/meme.${ext}`)).on("close", callback);
			})
}