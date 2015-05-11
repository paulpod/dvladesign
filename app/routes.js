module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');

    var defaultreg = 'CU57&nbsp;ABC';

    });

    






    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-3-got', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;


    if (x == 1) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v11', {'back' : back});
    } else if (x == 2) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c', {'back' : back});
    } else if (x == 3) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c2', {'back' : back});
    }
 
	});



    /* - - - - - - - - - - - - - - - - - - - -  */
    /* Pass EVL ref number variations into flow */

    app.get('/examples/elements/evl-3-flow', function (req, res) {

    var next = req.query.nextlink;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var email = req.query.email;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    res.render('examples/elements/' + next, {'back' : back, 'defaultreg' : defaultreg, 'email' : email});
    
 
    });


	

     /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-7-flow', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;


    if (x == "v11") {
        console.log(x);
        res.render('examples/elements/evl-7-v11', {'back' : back});
    } else if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-7-v5c', {'back' : back});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-7-v5c2', {'back' : back});
    } else {
        console.log(x);
        res.render('examples/elements/evl-7-other', {'back' : back});
    }
 
    });




    /* - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /* Multiple routes from How to pay, renewal period page */

    app.get('/examples/elements/evl-11-renewals', function (req, res) {


    var paymethod = req.query.paymethod;
    var paynum = req.query.paynum;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    var now = moment(new Date());
    var today = now.format("D MMM YYYY");


    if (paymethod != undefined) {
        if (paynum == undefined) {
            /* catch if the user has pressed first set of radios only - card vs dd  */
            res.render('examples/elements/evl-renewal-period-' + paymethod, {'back' : back, 'defaultreg' : defaultreg, 'today' : today});
        } else {
            /* render correct summary page for payment vs duration type 1, 2, 3, 4 or 5  */
            res.render('examples/elements/evl-period-check' + paynum, {'back' : back, 'paynum' : paynum, 'defaultreg' : defaultreg, 'today' : today});
        };
    } else {
        res.render('examples/elements/evl-renewal-period', {'back' : back, 'defaultreg' : defaultreg, 'today' : today})
    }

    

    });





    /* - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /* Multiple routes from How to pay, renewal period page */

    app.get('/examples/elements/evl-11-renewal-picto', function (req, res) {


    var payperiod = req.query.payperiod;
    var paynum = req.query.paynum;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMM YYYY");


    if (payperiod != undefined) {
        if (paynum == undefined) {
            /* catch if the user has pressed first set of radios only - 1 vs 6, 12 month  */
            res.render('examples/elements/evl-renewal-period-' + payperiod, {'back' : back, 'defaultreg' : defaultreg, 'today' : today});
        } else {
            /* render correct summary page for payment vs duration type 1, 2, 3, 4 or 5  */
            res.render('examples/elements/evl-period-check' + paynum, {'back' : back, 'paynum' : paynum, 'defaultreg' : defaultreg, 'today' : today});
        };
    } else {
        res.render('examples/elements/evl-renewal-period', {'back' : back, 'defaultreg' : defaultreg, 'today' : today})
    }

    

    });









    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-11-flow', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c', {'back' : back, 'defaultreg' : defaultreg});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c2-chooser', {'back' : back, 'defaultreg' : defaultreg});
    } else if (x == "warn") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c2-w', {'back' : back, 'defaultreg' : defaultreg});
    } else {
        console.log(x);
        res.render('examples/elements/evl-vehicle-details', {'back' : back, 'defaultreg' : defaultreg});
    }

    });






    /* - - - - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL New Keeper V5c named vs V5C/2 */

    app.get('/examples/elements/evl-11-newkeeper', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c-newkeeper', {'back' : back, 'defaultreg' : defaultreg});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c2-newkeeper', {'back' : back, 'defaultreg' : defaultreg});
    } else {
        console.log(x);
        res.render('examples/elements/evl-vehicle-details', {'back' : back, 'defaultreg' : defaultreg});
    }

    });








	
    /* - - - - - - - - - - - - - - */
    /* Using idealpostcode to get  */
    /* addresses for a postcode    */

    app.get('/examples/elements/evl-find-postcode', function (req, res) {

      /*var Handlebars = require('Handlebars');*/
      var regmark = req.query.regmark;
      var email = req.query.email;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

      var postcode = req.query.postcode;

      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        console.log(results); 
        res.render('examples/elements/evl-paydd-address.html', {'postcode' : postcode, 'result' : results, 'defaultreg' : defaultreg, 'email' : email})

      });

    });





    /* - - - - - - - - - - - - - - - - */
    /* Using idealpostcode to playback */
    /* full address into a form from   */
    /* the user chosen udprn           */

    app.get('/examples/elements/evl-chosen-address', function (req, res) {

      /*var Handlebars = require('Handlebars');*/
      var regmark = req.query.regmark;
      var email = req.query.email;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

      var selectedudp = req.query.udprn;

      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupUdprn(selectedudp, function (error, address) {
        if (error) {
        // Implement some error handling
        }

        console.log(address); 
        res.render('examples/elements/evl-paydd-address-playback.html', {'address' : address, 'defaultreg' : defaultreg, 'email' : email})

      });

    });





  }
};
