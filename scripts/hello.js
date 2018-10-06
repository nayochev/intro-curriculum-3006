'use strict';

//あいさつ
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
};

//おみくじ
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
module.exports = (omikuji) => {
	omikuji.hear(/lot>/i, (msg) => {
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + '、nakahazu10');
	});
};


