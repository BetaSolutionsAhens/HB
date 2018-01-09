var name;
    var c_id;
    var ca_id;
		var cname;
		var rid;
		var chatleft="";
		var sender_text="";
    var sender_text1="";

		var senderid;
		var receiverid;
		var senderid1;
		var receiverid2;
		var sendername;
		var rvname;
		var lastmsg;
		var sendername1;
		var rvname1;
		var lastmsg1;
			// console.log(id);
		$(document).ready(function(){
		  console.log("hi")
			var getUrlParameter = function getUrlParameter(sParam) {
		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		        sURLVariables = sPageURL.split('&'),
		        sParameterName,
		        i;

		    for (i = 0; i < sURLVariables.length; i++) {
		        sParameterName = sURLVariables[i].split('=');

		        if (sParameterName[0] === sParam) {
		            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
		    }
		};

		var cid = getUrlParameter("c_id");

      $.ajax({
        url:'php/getname.php',
        method:'GET',
        success:function(data){
          console.log("asd")
          console.log(data);
          var obj=JSON.parse(data);
          console.log(obj)
          // console.log(data.candidate_name);
          for (var i = 0; i < obj.length; i++) {
            // data[i]
            // console.log(obj[i].candidate_name);
            console.log(obj[i].candidate_name)
            name = obj[i].candidate_name;
            c_id = obj[i].cid;
            // console.log(cid)
          }
          $("#c_name").attr('name',c_id)
		      $("#c_name").append(name)
          ca_id = $("#c_name").attr('name');
          console.log(ca_id)

        }

		  })
			$.ajax({
			 url:'php/msgpage.php',
			 type:'POST',
			 data:{c_id:cid},
			 success:function(data){
				 console.log(data)
				 var obj =JSON.parse(data);
				 console.log(obj);
				 var reid = $("#c_name").attr('name');
				 console.log(reid);
				 $.ajax({
 				 url:'php/lastmsgs.php',
 				 type:'POST',
 				 data:{c_id:cid},
 				 success:function(data){
 						 console.log(data)
 						 var obj2 =JSON.parse(data);
 						 console.log(obj2);
 						 for (var i = 0; i < obj.length; i++) {
							 for (var i = 0; i < obj2.length; i++) {
								rname = obj[i].r_fname;
								console.log(rname);
								rid= obj[i].r_id;
								if(obj2[i].rec_id == rid){
									if(reid == rid){
										chatleft += '<li class="" id="link">'+
												'<a href="#contact-1" data-toggle="tab">'+
													'<div class="contact">'+
														'<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left"/>'+
														'<div class="msg-preview">'+
															'<h6 id="can_name" name="r_'+rid+'" class ="s_'+cid+'">'+rname+'</h6>'+
															'<p class="text-muted" id="textmsg">'+obj2[i].messageText+'</p>'+
															'<small class="text-muted" id="time"></small>'+
															// <!-- <div class="chat-alert">1</div> -->
														'</div>'+
													'</div>'+
												'</a>'+
											'</li>';
									}
									else{
										chatleft +='<li class="" id="link">'+
												'<a href="#contact-1" data-toggle="tab">'+
													'<div class="contact">'+
														'<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left"/>'+
														'<div class="msg-preview">'+
															'<h6 id="can_name" name="r_'+rid+'" class ="s_'+cid+'">'+rname+'</h6>'+
															'<p class="text-muted" id="textmsg">'+obj2[i].messageText+'</p>'+
															'<small class="text-muted" id="time"></small>'+
															// <!-- <div class="chat-alert">1</div> -->
														'</div>'+
													'</div>'+
												'</a>'+
											'</li>';
									}
								}
							}
						}

							$("#chatdiv").html(chatleft)

						senderid = $("#can_name").attr("class")
						console.log(senderid);
					 receiverid = $("#can_name").attr("name")
				 }
		});
	}

			// }
		});


		 $("#msgSend").click(function(){
 			// alert("hu")
 			msgtext = $("#msgtext").val();

      var senderid1 = $(".active").find('h6').attr("class")
      alert(senderid1);
      var receiverid1 = $(".active").find('h6').attr("name")
      alert(receiverid1)
 			l = senderid1;
      m = '';

      for (var i = 0; i < l.length; i++)
      {
      if ("" + parseInt(l[i]) != "NaN")
         m = m + l[i];
      }
      x = receiverid1;
      y = '';
      for (var i = 0; i < x.length; i++)
      {
         if ("" + parseInt(x[i]) != "NaN")
            y = y + x[i];
      }

     // document.write(y);
     console.log(y);
     console.log(m);
 			$.ajax({
 				url:'php/msgpage1.php',
 				type:'POST',
 				data:{msgtxt:msgtext,s_id:senderid1,rev_id:receiverid1,c_id:m,r_id:y},
 				success:function(data){
 					console.log(data)
 					$("#msgtext").val("")
          sendername = $('a[id="c_name"]').text();
          console.log(sendername)

 					sender_text ='<li class="right">'+
 						'<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-right" />'+
 						'<div class="chat-item">'+
 							'<div class="chat-item-header">'+
 								'<h5>'+sendername+'</h5>'+
 								'<small class="text-muted">Now</small>'+
 							'</div>'+
 							'<p> '+msgtext+'</p>'+
 						'</div>'+
 					'</li>';
 					$("#conversation").append(sender_text);
					$(".active").find("#textmsg").text(msgtext)
					// setInterval('alert(\'Surprise!\')', 1000);

 					// $("#loadchat").load("newsfeed-messages.html #loadchat")
 				}


 			})

 		})
		// $.ajax({
		// url:'php/lastmsgs.php',
		// type:'POST',
		// data:{c_id:cid},
		// success:function(data){
		// 		console.log(data)
		// 		var obj2 =JSON.parse(data);
		// 		console.log(obj2);
		// 	}
		// });

		$(document).on('click', '#link', function(){
			$(this).addClass('active');
				senderid1 = $(this).find('h6').attr("class")
			alert(senderid1);
			receiverid1 = $(this).find('h6').attr("name")
			alert(receiverid1);
			var sender_text1;
			var lastmsg1;
			var rvname1 = $(this).find('h6').text();
			console.log(rvname1);
		 var sendername1 = $('a[id="c_name"]').text();
		 	console.log(sendername1)
			l = senderid1;
			m = '';

			for (var i = 0; i < l.length; i++)
			{
			if ("" + parseInt(l[i]) != "NaN")
				 m = m + l[i];
			}
			x = receiverid1;
			y = '';
			for (var i = 0; i < x.length; i++)
			{
				 if ("" + parseInt(x[i]) != "NaN")
						y = y + x[i];
			}

		 // document.write(y);
		 console.log(y);
		 console.log(m);
		//  $("#convesation").empty()
		function callAjax(y,m){
			$.ajax({
			 url:'php/getmsgs.php',
			 type:'POST',
			 data:{c_id:m,r_id:y},
			 success:function(data){

				 console.log(data)
				//  alert(data)
				//  rvname1 = $("#can_name").text();
				// 	sendername1 = $("a[id='c_name']").text();
		//  console.log(sendername)
				 if(data=="Nope"){
					//  console.log("suji");
					 $("#conversation").append('<h2>No Conversations</h2>')
				 }
				 else{
						 var obj1 = JSON.parse(data);
						 console.log(obj1);
						 for (var i = 0; i < obj1.length; i++) {
							 console.log(obj1[i].sender_id);

						 	lastmsg1=obj1[i].messageText;
							function lsmsg(){
								lastmsg1=obj1[i].messageText;

							}
							// alert(lastmsg1)
							//  console.log(senderid);
							//  console.log(obj1[i].receiver_id);
							//  console.log(receiverid);
							if(obj1[i].rec_id == y ){
								// alert(obj1[i].rec_id)
								if(obj1[i].receiver_id == 'r_'+y){
	 							 console.log("hi")
	 							 sender_text1 += '<li class="right">'+
	 								 '<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-right" />'+
	 								 '<div class="chat-item">'+
	 									 '<div class="chat-item-header">'+
	 										 '<h5>'+sendername1+'</h5>'+
	 										 '<small class="text-muted">'+obj1[i].msg_datetime+'</small>'+
	 									 '</div>'+
	 									 '<p id="'+obj1[i].sender_id+'" name="'+obj1[i].receiver_id+'">'+obj1[i].messageText+'</p>'+
	 								 '</div>'+
	 							 '</li>';

	 						 }
	 						 else if (obj1[i].sender_id == 's_'+y) {
	 							 console.log(obj1[i].receiverid);
	 							 sender_text1 += '<li class="left">'+
	 								 '<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />'+
	 								 '<div class="chat-item">'+
	 									 '<div class="chat-item-header">'+
	 										 '<h5>'+rvname1+'</h5>'+
	 										 '<small class="text-muted">'+obj1[i].msg_datetime+'</small>'+
	 									 '</div>'+
	 									 '<p id="'+obj1[i].sender_id+'" name="'+obj1[i].receiver_id+'">'+obj1[i].messageText+'</p>'+
	 								 '</div>'+
	 							 '</li>';
	 						 }else{

	 						 }
							}

						 }
					 }
	            console.log("Suji")
	               console.log(sender_text1)

					 console.log(lastmsg1);

					 $("#conversation").empty()
					 $("#conversation").html(sender_text1)
					 $(this).find('p[id="textmsg"]').text(lastmsg1)
			 }


			});
		}
		callAjax(y,m);

	})
	// setInterval(callAjax(y,m), 1000);


	})
