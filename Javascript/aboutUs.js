$(document).ready(() => {

	function listJava() {
		fetch('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly') //fetch returns a promise
		.then((response) => response.json())
		.then((data) => { 																			//do something with data
		//looping through index 0-4 of the array
			var index = 0;
			while(index < 5) {
				var tableRow = $(		
					`<tr>
						<td class="list__tableContent"><a class="list__tableLink" href="${data[index].url}">${data[index].author}</a></td>					
						<td class="list__tableContent"><a class="list__tableLink" href="${data[index].url}">${data[index].name}</a></td>
						<td class="list__tableContent">${data[index].stars}</td>	
					</tr>`);
				$('#listJava').append(tableRow);
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
						<td class="list__tableContent"><a class="list__tableLink" href="${data[index].url}">${data[index].author}</td>					
						<td class="list__tableContent"><a class="list__tableLink" href="${data[index].url}">${data[index].name}</td>
						<td class="list__tableContent">${data[index].stars}</td>	
					</tr>`);
				$('#listCss').append(tableRow);
				index++;	
			}
		})
	}
	listCss();

})
