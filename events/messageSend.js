//This logs all interactions
module.exports = {
	name: 'messageCreate',
	execute(msg) {
		console.log(`${msg.author} sent a message at ${msg.createdAt} `);
	},
};
 
