
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.subdomains);
	var sub = req.subdomains[0];
  res.render('index', { title: "I'll Make The Wiki",
  						subdomain: sub });
};
