var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');


module.exports = function(router){
	router.route('/student')
	.get(student.find)
	.post(student.insert);
	
	router.route('/teacher')
	.get(teacher.find);
	
	router.route('/teacher')
	.post(teacher.post);
	
	router.route('/teacher')
	.put(teacher.put);
	
	router.route('/teacher')
	.delete(teacher.delete);
	
	router.route('/student/:id')
	.get(student.findOne)
	.put(student.update)
	.delete(student.remove);
	
	return router;
};
