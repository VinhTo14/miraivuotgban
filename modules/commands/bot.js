module.exports.config = {
  name: "botting",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "JRT",
  description: "sửa chữa bot ...",
  commandCategory: "Hệ thống admin-bot",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  switch (args[0]) {
    case "fix":
    case "fixdup":
      return api.sendMessage(`Repair fix dup done...`, event.threadID, () => api.listenMqtt().stopListening());

    case "stop":
    case "off":
      return api.sendMessage(`Goodbye...`, event.threadID, () => api.listenMqtt().stopListening());

    case "start":
    case "on":
      console.log(event);
      break;

    default:
      return api.sendMessage("Syntax error, use : bot  [fixdup/stop/start]", event.threadID);
      break;
  }

}