
addEventListener('DOMContenLoaded', function(){

	funcExportObjects(chrome.bookmarks.search, { 'query' : null, 'url' : null, 'title' : null}, 'chrome_bookmarks');
	
	var funcExportObjects = function(searchFunction, searchObject, output, isHistory){
  
    var resultHandler = function(array){
		var text;
        
		append("[");
		for(var i = 0; i < array.length; i++){
			if (isHistory)
			{
				text = JSON.stringify({
					'id': array[i].id,
					'lastVisitTime': new Date(array[i].lastVisitTime).toISOString(),
					'title': array[i].title,
					'typedCount': array[i].typedCount,
					'url': array[i].url,
					'visitCount': array[i].visitCount
				});
			}        
			else
			{
				text = JSON.stringify({
					'id': array[i].id,
					'dateAdded': new Date(array[i].dateAdded).toISOString(),
					'index': array[i].index,
					'parentId': array[i].parentId,
					'title': array[i].title,
					'url': array[i].url
				});
			}
					
			if(array.length - 1 !== i){
					text = text + ',';
			}
			append(text);
		}
		append("]");

		window.blob = new Blob([data.innerText], {type: 'application/octet-binary'});
		window.url = URL.createObjectURL(blob);

		var pom = document.createElement('a');
		pom.setAttribute('href', url);
		pom.setAttribute('download', output + ".json");
		pom.click();

		if($("#openJsonXlsCom").is(':checked')) {
			window.open("http://json-xls.com/json2xls?template=" + output, '_blank');
		}
		
		window.close();
	};

	searchFunction(searchObject,  resultHandler);
  };	
})