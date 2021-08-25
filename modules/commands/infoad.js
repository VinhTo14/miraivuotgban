const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Thông tin adminbot",
  usages: "ad",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`꧁ 𝐂𝐇À𝐎 𝐍𝐇Ữ𝐍𝐆 𝐍𝐆ƯỜ𝐈 𝐒Ử 𝐃Ụ𝐍𝐆 𝐁𝐎𝐓 ꧂\nミ★Thông Tin Về Admin Bot ★彡\n😎𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Nguyễn Hải Đăng \n😗𝑩𝒊𝒆̣̂𝒕 𝒅𝒂𝒏𝒉 : JRT ~~\n🔊𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : Mình là JRT, rất thích bóng đá, đi phượt và luôn khát khao đạt được mục đích của mình\n⚡Thông Tin Cá Nhân⚡\n👤Sinh ngày: 26-02-2003\n👀𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : Cục súc với thiên hạ nhưng dịu dàng với em\n🤧𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 1m75 (lùn được chưa)\n📱𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ : 0396049649\n✈Quê Quán: Hà Nội\n🗺Nơi Sống : Ho Chi Minh City\n💑Mối quan hệ : đang trong giai đoạn tìm hiểu  \n📌𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://www.facebook.com/NHD.JRT.262\n📢𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊 𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n☠𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\n🦯𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\n🌸Chúc bạn sử dụng vui vẻ <3\n________(❤´艸｀❤)________`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100033478361032}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };