module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    





    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-3-got', function (req, res) {

    var x = req.query.reftype;

    if (x == 1) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v11');
    } else if (x == 2) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c');
    } else if (x == 3) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c2');
    }
 
	});



    /* - - - - - - - - - - - - - - - - - - - -  */
    /* Pass EVL ref number variations into flow */

    app.get('/examples/elements/evl-3-flow', function (req, res) {

    var next = req.query.nextlink;

    res.render('examples/elements/' + next);
    
 
    });


	
	


    

    
    


  }
};
