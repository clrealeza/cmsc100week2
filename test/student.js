var request = require('supertest'),
	should = require('should-http');
	
	describe('student', function(){
		var url = 'localhost:5000';
		
		describe('find()', function(){
			
			
			it('should retrieve all student record', function(done){
				request(url).get('/student').end(function(err, res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Array);
					done();
					
				});
			
			});	
			
		});
	
		describe('findOne()', function(){
			
			
			it('should retrieve an existing student record', function(done){
				request(url).get('/student/zydrickxxx').end(function(err, res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					done();
					
				});
			
			});	
			
		});
	
	
		describe('insert()', function(){
			
			
			it('should return the newly created record', function(done){
				request(url).post('/student').send({'studNo': 2012-12345, 'name': 'Anna', 'bdate': '1996-12-12'}).end(function(err, res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.should.have.length(10).and.have.property('studNo');
					done();
					
				});
			
			});	
			
		});
	
});//end main describe