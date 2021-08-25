module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100033478361032","100024821781850","100022113516016"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì ko?","Sao?? Làm ơn nhắn qua mess hoặc zalo để liên hệ ông chủ!!","Sao gọi chủ tôi có việc gì?","Hiện ông chủ tôi đang bận hãy sử dụng callad để liên hệ","Hãy dùng lệnh ad hoặc adm để biết thông tin liên hệ chủ tôi"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }