
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.subdomains);
	var sub = req.subdomains[0];
	console.log(sub);
  res.render('index', { title: "I'll Make The Wiki",
  						subdomain: sub,
  						datetime: new Date(),
  						randnum: Math.floor((Math.random() * 1000) + 1) });
};
