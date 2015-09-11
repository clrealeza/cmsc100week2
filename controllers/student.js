var db = require(__dirname+'/../lib/mysql'); //used to connect sa database



exports.find = function(req, res, next){
	console.log(req.ip + "find()");
	

	db.query('SELECT * FROM student',
	      function(err, rows){
	      if(err) return next(err);
	      res.send(rows);
	      });
};


exports.findOne = function(req, res, next){
	console.log(req.ip +  "findOne()");

	db.query('SELECT * FROM student where studNo = ?', [req.params.id],
	      function(err, rows){
	        if(err) return next(err);
	            if(rows.length==0)
	             res.status(404).send("Student not found.");
	            else res.send(rows[0]);
	      });
};



exports.insert = function(req, res, next){
	db.query('INSERT INTO student VALUES (?, ?, ?)', [req.body.studNo, req.body.name, req.body.bdate],
	      function(err, rows){
	        if(err) return next(err);
	            
	        else res.send(rows[0]);
	      });
};



exports.update = function(req, res, next){
	db.query('UPDATE student SET ? WHERE studNo = ?', [req.body, req.params.id],
	      function(err, rows){
	        if(err) return next(err);
	            if(rows.length==0)
	             res.status(404).send("Student not found.");
	            else res.send(rows[0]);
	      });
};

exports.remove = function(req, res, next){
	db.query('DELETE FROM student WHERE studNo = ?', [req.params.id],
	      function(err, rows){
	        if(err) return next(err);
	           
	            else res.send(rows[0]);
	      });
};









//exports.find = function(req, res){
//	res.send('Hello World!');
//};


