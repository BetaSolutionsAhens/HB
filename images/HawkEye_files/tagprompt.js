
// // tagged input
// $(function(){
// 		// var sampleTags = ['c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];
// var ar1=[];
// 		$(document).ready(function(){
//
//
// 	$.getJSON('../console/tagprompt.php',function(data){
// 		$.each(data,function(i){
// 			console.log(data[i].name);
// 			var ar2=ar1.push(data[i].name);
//
// 		});
// 		console.log(ar1);
// 		$("#skills_ins").tagit({
// 				availableTags: ar1,
// 			});
// 	});
// 		});
//
// 	});
	$(function(){
			var sampleTags = ['Hyderabad', 'chennai', 'viskhapatnam'];
	var ar1=[];
	// var loc1=[];
			$(document).ready(function(){


		$.getJSON('php/tst.php',function(data){
			$.each(data,function(i){
				// console.log(data[i].name);
				ar1.push(data[i].name);

			});

			console.log(ar1);
			$("#skills_ins").tagit({

					availableTags: ar1,
				});
			$("#skills").tagit({
				availableTags:ar1,
			});
			$("#skillSearch").tagit({
				placeholder:"Search",
				availableTags:ar1,
				// autocomplete: {ar1},

			});
			$("#prefloc").tagit({
				availableTags:sampleTags,
			});
		});
			});

		});
