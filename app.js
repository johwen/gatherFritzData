var http = require('http');
var concat = require('concat-stream');


http.get({
        host: 'localhost',
	port: 3000,
	path: '/Hosts/Count'
    }, function(response) {
        response.pipe(concat(function(body) {
            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
		numberOfDevices = parsed.NewHostNumberOfEntries;
		console.log('Number of devices: '+numberOfDevices);

		getAllDevices(numberOfDevices);		

        }))
    });





var getAllDevices = function(numberOfDevices){


	for(var i =0; i<numberOfDevices; i++){
		
			
http.get({
        host: 'localhost',
	port: 3000,
	path: '/Hosts/Count/'+i
    }, function(response) {
        response.pipe(concat(function(body) {
            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
		console.log(JSON.stringify(parsed));

        }))
    });



	}	

}
