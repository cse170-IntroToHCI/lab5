var data = require("../data.json");

exports.addFriend = function(req, res) {
	var name = req.query.name;
	var desc = req.query.description;
	var newFriend = {
		"name": name,
		"description": desc,
		"imageURL": "https://i.ytimg.com/vi/FOimZD8b4is/hqdefault.jpg"
	};
	console.log(newFriend);
	res.render('addFriend');
	data["friends"].push(newFriend);
}