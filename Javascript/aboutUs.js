$(document).ready(() => {
	

	
	function listJava() {
		fetch('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly') //fetch returns a promise
		.then((response) => response.json())
		.then((data) => {
		//looping through index 0-4 of the array
			var index = 0;
			while(index < 5) {
				var tableRow = $(		
					`<tr>
						<td><a href="${data[index].url}">${data[index].author}</a></td>					
						<td><a href="${data[index].url}">${data[index].name}</a></td>
						<td>${data[index].stars}</td>	
					</tr>`);
				$('#listJava-table').append(tableRow);
				index++;	
			}
		})
	}
	listJava();



	function listCss() {
		fetch('https://github-trending-api.now.sh/repositories?language=css&since=weekly ') //fetch returns a promise
		.then((response) => response.json())
		.then((data) => {
		//looping through index 0-4 of the array
				var index = 0;
			while(index < 5) {
				var tableRow = $(		
					`<tr>
						<td>${data[index].author}</td>					
						<td>${data[index].name}</td>
						<td>${data[index].stars}</td>	
					</tr>`);
				$('#listCss-table').append(tableRow);
				index++;	
			}
		})
	}
	listCss();

})
