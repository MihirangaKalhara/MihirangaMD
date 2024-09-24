const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/87hHVG3/Blue-Futuristic-Illustrative-Artificial-Intelligence-Project-Presentation.png",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, /n/nI'm Mihiranga-Multi Device WhatsApp User Bot /n/nDeveloper : Mihiranga Kalhara /n/nThank For Using Mihiranga-Multi Device Bot",
};
