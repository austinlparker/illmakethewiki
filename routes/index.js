
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.subdomains);
  res.render('index', { title: 'Express',
  						subdomain: req.subdomains });
};
