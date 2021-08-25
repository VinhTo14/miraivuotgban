module.exports.config = {
 name: "cony",
 version: "1.0.0", 
 hasPermssion: 0,
 credits: "JRT",
 description: "Tỉ lệ có Ny của bạn trong năm nay",
 commandCategory: "Game", 
 usages: "", 
 cooldowns: 0,
 dependencies: {
   "request": "",
   "fs-extra":"",
   "axios":""
}};
module.exports.run = async function({ api, event, Users }) {
    var tle = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [
"https://media0.giphy.com/media/VRwZpK1OPsiOzSci42/giphy.gif",
"https://media1.giphy.com/media/jTAkn6hKyy2esWjOOZ/giphy.gif",
"https://media3.giphy.com/media/UVYGRsrSlSlYJjZaqQ/giphy.gif",
"https://media3.giphy.com/media/J1d4nG792FrVqZPHVR/giphy.gif",
"https://media2.giphy.com/media/9PwWklO9tSELtIhBka/giphy.gif",
"https://media1.giphy.com/media/Q66dCIgxnb4uzEYDqS/giphy.gif",
"https://media4.giphy.com/media/5b5tgCP2Kja3JkcftU/giphy.gif",
"https://media1.giphy.com/media/MCEneemI5TEZmzeiZk/giphy.gif",
"https://media0.giphy.com/media/5QMKspne3I3yOk40fl/giphy.gif",
"https://media2.giphy.com/media/5eFtKFqu5D34WNno9u/giphy.gif"
];
    var callback = () => api.sendMessage({body:`🎉Chúc mừng ${name}\n🤤Tỉ lệ có người yêu của bạn là: ${tle}%\nNếu bạn có được người đó rồi thì hãy biết trân trong nhé >,< <3`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
 }