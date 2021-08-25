module.exports.config = {
	name: "girl",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "girl",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://gai.hungdz30cm.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `Gái nè đủ mlem chưa >< 🥴🥴`,
						attachment: fs.createReadStream(__dirname + `/cache/girl.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/girl.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/girl.${ext}`)).on("close", callback);
			})
}