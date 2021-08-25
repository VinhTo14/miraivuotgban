module.exports.config = {
	name: "work",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Có làm thì mới có ăn!",
	commandCategory: "Tiền tệ",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1000000
    }
};

module.exports.run = async ({ event, api, Currencies }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
		return api.sendMessage(`Mày nhận rồi mày tính nhận nữa à? Làm việc từ từ thôi ham muốn công việc hà :)))))\nVui lòng nhận lại vào lúc: ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, event.threadID, event.messageID);
    }
    else {
        const job = [
            "đi bán vé số",
            "đi bán nhà",
            "làm nhân viên quấy rối tình dục",
            "đi hack facebook",
            "làm thợ sửa ống nước ( ͡° ͜ʖ ͡°)",
            "làm jav",
            "làm công chúa ngủ trong bồn cầu",
            "Đi làm đĩ",
            "đi chịch người khác ở hotel",
            "làm lai sờ chym mờ",
            "đi bán bao cao su online",
            "làm tan nát gia đình người khác",
            "đi giật bồ người khác",
            "đi địt mấy ông mấy bà hàng xóm",
            "đi bán thận",
            "Đi đá phò",
            "Chơi đá"
        ];
        const amount = Math.floor(Math.random() * 10000);
        return api.sendMessage(`Bạn ${job[Math.floor(Math.random() * job.length)]} và đã nhận được số tiền là: ${amount} coins`, threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
}