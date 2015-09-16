module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');

    });
    /* This is a bit of code that looks for an index.html page in any directory */

    



    /* - - - - - - - - - - - - - - - - -  -  */
    /* Pass nextpage for Basic Flow control  */


    app.get('/examples/elements/basic-flow', function (req, res) {
    /* line above starts a new JS function, receives the form action event from the webpage */

    var next = req.query.nextlink;
    var v11 = req.query.v11;
    /* this line pulls out the name of the next page that was sent with the weblink */

    res.render('examples/elements/' + next, {'v11' : v11, 'v5c' : v5c});
    /* this line renders a new page based on the HTML of the file sent as the next page */
    
 
    });
    /* ends the app.get javascript function */







    /* - - - - - - - - - - - - - - - - - - - */
    /* Chooser for Basic Branching control   */


    app.get('/examples/elements/basic-branch', function (req, res) {

    var next = req.query.nextlink;
    var v11 = req.query.v11;
    /* this line pulls out the filename of the next page, sent with the weblink */

    var branch = req.query.branch;
    /* this line pulls out the name of the branch from the input buttons */

    res.render('examples/elements/' + next + '-' + branch, {'v11' : v11});
    /* this line renders a new page based on the HTML of the filename + branchname  */
    
 
    });
    /* ends the app.get javascript function */






  }
};
