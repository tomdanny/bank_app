var net = require('net');
var fs = require('fs');
var server = net.createServer();
var readJson = fs.readFileSync('./accounts/data.json', 'utf8');
var parseJson = JSON.parse(readJson);

var num = Math.random() * 10000;
var password = Math.ceil(num);
console.log("Temporary port number for client access: " + password);

server.on('connection', function(client) {
	console.log('server connected')
	
	client.write("SIGN UP: Please enter your first name followed by last name followed by amount to deposit followed by four digit pin number" + '\n');
	client.write("LOGIN: To access your information please type access followed by your first name: " + '\n');

	client.setEncoding('utf8');
	client.on('data', function(data) {
		var trimData = data.trim();
		var input = trimData.split(" ");

		console.log(input);

		var userName = input[1];
		
		if (input[0] === "access" && input[1] === userName) {
			var userReadJson = fs.readFileSync('./accounts/' + userName + '.json', 'utf8');
			var userParseJson = JSON.parse(userReadJson);
			
			userParseJson.forEach(function(account) {
				//client.write("Please type word pin followed by your four digit password: " + '\n');
				client.write("Here is you account info: " + '\n' + "First Name: " + account.firstName + '\n' + "Last Name: " + account.lastName + '\n' + "Checking Account: " + account.checkingAccount + '\n' + "Password: " + account.password + '\n');
			});

		} else if (input[0] !== "access") {
		var fName = input[0].toString().toLowerCase();
		var lName = input[1].toString().toLowerCase();
		var amount = '$' + parseInt(input[2]);
		var password = input[3].toString();
			
		var object = {
			firstName: fName,
			lastName: lName,
			checkingAccount: amount,
			password: password
			} 


			parseJson.push(object);


		var stringJson = JSON.stringify(parseJson);
		var writeJson = fs.writeFileSync('./accounts/' + object.firstName + '.json', stringJson);
		client.write("Thank you " + object.firstName + " for your deposit. Here is you account info: " + '\n' + "First Name: " + object.firstName + '\n' + "Last Name: " + object.lastName + '\n' + "Checking Account: " + object.checkingAccount + '\n' + "Password: " + object.password + '\n');

		}
		//}

	});
});
server.listen(password, function() {
	console.log('server bound');
});