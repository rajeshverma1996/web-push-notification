let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let webpush = reqire('web-push');
let app = express();
app.use(bodyParser.urlencoded({
	extended : false
}));
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res) => {
	res.send('This is a push notification server use port');
});
app.post('/subscription', (req,res) => {
	let sub = req.body;
	res.set('Content-Type', 'application/json');
	webpush.setVapidDetails(
	'mailto:example@yourdomain.org',
	'BFl5Oj4vhKTAs4MAVKmHnoHD1XUlNFAQSFnbOqjfZ6Arq-AHpPMIhOu_pn7rKcgkM02T-bhFxZ-dq2txgj0f91U',
	"H3l29qpY23BKYRV48LfWi63xWmofRl1ze7_oVMHFbDw");
	let payload = JSON.Stringify({
		"notification":{
			"title":"push server",
			"body": "Thanks for subscription to my chaneel"
		}
	});
	Promise.resolve(webpush.sendNotification(sub,payload)).then(()=>res.status(200).json({
		message:'Notification sent'
	}))
	.catch(err => {
		console.error(err);
		res.sendStatus(500);
	})
})
app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:" + 9000);
});
