$(document).ready(() => {
    var ListOfJava = [];



//https://github-trending-api.now.sh/repositories?language=javascript&since=weekly


    function listJava() {
         ListofJava.forEach(( ListofJava) => {
            var list = $(
                `<tr class="listing-row">
                    <td>${ListofJava.name}</td>
                    <td>${ListofJava.url}</td>
                    <td>${ListofJava.stars}</td>
                </tr>`
            );
            $('#listJava').append(list);
        });

        // Här måste vi använda hela function () {}-syntaxen,
        // för att this ska få rätt värde
 
        function loadJSON() {
            $.getJSON(
                'https://github-trending-api.now.sh/repositories?language=javascript&since=weekly',
                (data) => {
                    ListOfJava = data.ListOfJava.map((ListOfJava) => {
                        return {
                            ...book,
                            price: parseFloat(book.price)
                        };
                    });
                    listBooks();
                }
            );
        }
}
    loadJSON();
})






        fetch('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly')
  .then(response => {/* do something */})
