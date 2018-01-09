$(document).ready(function() {
  $.ajaxSetup({cache: false});

    console.log("hi")
    var name;
    var r_id;
    $.ajax({
        url: "php/getRname.php",
        method: "GET",
        cache:false,
        success: function(data) {
            console.log(data)
            var obj = JSON.parse(data)
            for (var i = 0; i < obj.length; i++) {
                console.log(obj[i].name)
                name = obj[i].name;
                var id = obj[i].id
            }
            $("#r_name").append(name)
            $("#r_name").attr('name', id)
        }
    })
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
    var rid = getUrlParameter("r_id");
    var cid = getUrlParameter("c_id");
    var cname;
    var chatleft = "";
    var rec_text = "";
    var sender_text1 = "";
    var msgtext;
    var senderid;
    var receiverid;
    var datetime;
    var canid;
    var recid;
    var sendername;
    var rvname;
    var l;
    var m;
    var x;
    var y;
    var con_div;
    var lastmsg;
    var individual;
    var multi;
    var lmsg;
    var interval
    var sender_text2 = "";
    var conversation;
    var newtext;
    var up_text;
    var sender_text3;
    var temp;
    var stmsg
    console.log(rid);

    $.ajax({
        url: 'php/msgpage.php',
        type: 'POST',
        data: {
            c_id: cid,
            r_id: rid
        },
        cache:false,
        success: function(data) {
            console.log(data)
            var obj = JSON.parse(data);
            console.log(obj);
            // console.log(obj[0]['multi']);
            var reid = $("#r_name").attr('name');
            console.log(reid);
            console.log(obj.length);
            $.ajax({
                url: 'php/lastmsgs.php',
                type: 'POST',
                data: {
                    r_id: rid
                },
                cache:false,
                success: function(data) {
                    console.log(data)
                    var obj2 = JSON.parse(data);
                    console.log(obj2);

                    for (var i = 0; i < obj.length; i++) {

                        if (obj.length == '1') {
                            individual = obj[i]['individual'];
                            console.log(individual);
                            if (!obj[i].multi) {
                                for (var i = 0; i < individual.length; i++) {
                                    for (var i = 0; i < obj2.length; i++) {
                                        cname = individual[i].cl_n
                                        console.log(cname);
                                        if (obj2[i].can_id == individual[i].cl_id) {
                                            if (reid == rid) {
                                                chatleft += '<li class="active" id="link" value="' + individual[i].cl_id + '">' +
                                                    '<a href="#contact-1" data-toggle="tab">' +
                                                    '<div class="contact">' +
                                                    '<img src="img/' + individual[i].b_pic + '" alt="" class="profile-photo-sm pull-left"/>' +
                                                    '<div class="msg-preview">' +
                                                    '<h6 id="can_name" name="r_' + individual[i].cl_id + '" class ="s_' + rid + '">' + cname + '</h6>' +
                                                    '<p class="text-muted" id="textmsg">' + obj2[i].messageText + '</p>' +
                                                    '<small class="text-muted" id="time"></small>' +
                                                    // <!-- <div class="chat-alert">1</div> -->
                                                    '</div>' +
                                                    '</div>' +
                                                    '</a>' +
                                                    '</li>';
                                            } else {
                                                chatleft += '<li class="active" id="link" value="' + individual[i].cl_id + '">' +
                                                    '<a href="#contact-1" data-toggle="tab">' +
                                                    '<div class="contact">' +
                                                    '<img src="img/' + individual[i].b_pic + '" alt="" class="profile-photo-sm pull-left"/>' +
                                                    '<div class="msg-preview">' +
                                                    '<h6 id="can_name" name="r_' + rid + '" class ="s_' + individual[i].cl_id + '">' + cname + '</h6>' +
                                                    '<p class="text-muted" id="textmsg">' + obj2[i].messageText + '</p>' +
                                                    '<small class="text-muted" id="time"></small>' +
                                                    // <!-- <div class="chat-alert">1</div> -->
                                                    '</div>' +
                                                    '</div>' +
                                                    '</a>' +
                                                    '</li>';
                                            }
                                        }
                                    }
                                }

                            } else {
                                individual = obj[i]['individual'];
                                console.log(individual);
                                console.log(individual[0].cl_n)
                                multi = obj[i]['multi'];
                                console.log(multi);
                                for (var i = 0; i < individual.length; i++) {
                                    for (var k = 0; k < obj2.length; k++) {
                                        cname = individual[i].cl_n
                                        console.log(cname);
                                        if (obj2[k].can_id == individual[i].cl_id) {
                                            if (reid == rid) {
                                                chatleft += '<li class="active" id="link" value="' + individual[i].cl_id + '">' +
                                                    '<a href="#contact-1" data-toggle="tab">' +
                                                    '<div class="contact">' +
                                                    '<img src="img/' + individual[i].b_pic + '" alt="" class="profile-photo-sm pull-left"/>' +
                                                    '<div class="msg-preview">' +
                                                    '<h6 id="can_name" name="r_' + individual[i].cl_id + '" class ="s_' + rid + '">' + cname + '</h6>' +
                                                    '<p class="text-muted" id="textmsg">' + obj2[k].messageText + '</p>' +
                                                    '<small class="text-muted" id="time"></small>' +
                                                    // <!-- <div class="chat-alert">1</div> -->
                                                    '</div>' +
                                                    '</div>' +
                                                    '</a>' +
                                                    '</li>';
                                            } else {
                                                chatleft += '<li class="active" id="link" value="' + individual[i].cl_id + '">' +
                                                    '<a href="#contact-1" data-toggle="tab">' +
                                                    '<div class="contact">' +
                                                    '<img src="img/' + individual[i].b_pic + '" alt="" class="profile-photo-sm pull-left"/>' +
                                                    '<div class="msg-preview">' +
                                                    '<h6 id="can_name" name="r_' + rid + '" class ="s_' + individual[i].cl_id + '">' + cname + '</h6>' +
                                                    '<p class="text-muted" id="textmsg">' + obj2[k].messageText + '</p>' +
                                                    '<small class="text-muted" id="time"></small>' +
                                                    // <!-- <div class="chat-alert">1</div> -->
                                                    '</div>' +
                                                    '</div>' +
                                                    '</a>' +
                                                    '</li>';
                                            }
                                        }
                                    }
                                    // }
                                }
                                for (var i = 0; i < multi.length; i++) {
                                    // individual[i]
                                    for (var k = 0; k < obj2.length; k++) {
                                        // obj2[i]
                                        // }
                                        cname = multi[i].cl_n
                                        console.log(cname);
                                        if (obj2[k].can_id == multi[i].cl_id) {
                                            if (reid == rid) {
                                                chatleft += '<li class="" id="link" value="' + multi[i].cl_id + '">' +
                                                    '<a href="#contact-1" data-toggle="tab" >' +
                                                    '<div class="contact">' +
                                                    '<img src="img/' + multi[i].b_pic + '" alt="" class="profile-photo-sm pull-left"/>' +
                                                    '<div class="msg-preview">' +
                                                    '<h6 id="can_name" name="r_' + multi[i].cl_id + '" class ="s_' + rid + '">' + cname + '</h6>' +
                                                    '<p class="text-muted" id="textmsg">' + obj2[k].messageText + '</p>' +
                                                    '<small class="text-muted" id="time"></small>' +
                                                    // <!-- <div class="chat-alert">1</div> -->
                                                    '</div>' +
                                                    '</div>' +
                                                    '</a>' +
                                                    '</li>';
                                            } else {
                                                chatleft += '<li class="" id="link" value="' + multi[i].cl_id + '">' +
                                                    '<a href="#contact-1" data-toggle="tab">' +
                                                    '<div class="contact">' +
                                                    '<img src="img/' + multi[i].b_pic + '" alt="" class="profile-photo-sm pull-left"/>' +
                                                    '<div class="msg-preview">' +
                                                    '<h6 id="can_name" name="s_' + rid + '" class ="r_' + multi[i].cl_id + '">' + cname + '</h6>' +
                                                    '<p class="text-muted" id="textmsg">' + obj2[k].messageText + '</p>' +
                                                    '<small class="text-muted" id="time"></small>' +
                                                    // <!-- <div class="chat-alert">1</div> -->
                                                    '</div>' +
                                                    '</div>' +
                                                    '</a>' +
                                                    '</li>';
                                            }
                                        }
                                    }
                                }
                            }
                        }


                    }
                    // }

                    // }
                    $("#chatdiv").append(chatleft)

                    senderid = $("#can_name").attr("class")
                    console.log(senderid);
                    receiverid = $("#can_name").attr("name")
                    console.log(receiverid);
                    l = senderid;
                    m = '';

                    for (var i = 0; i < l.length; i++) {
                        if ("" + parseInt(l[i]) != "NaN")
                            m = m + l[i];
                    }
                    x = receiverid;
                    y = '';

                    for (var i = 0; i < x.length; i++) {
                        if ("" + parseInt(x[i]) != "NaN")
                            y = y + x[i];
                    }

                    // document.write(y);
                    console.log(y);

                }
            })
        }
    })

    rvname = $("#can_name").text();
    console.log(rvname);
    sendername = $("#r_name").text();

    // ON CLICK ON INDIVIDUAL CONTACT ON SIDE BAR(newsfeed_messages.html)

    $(document).on('click', '#link', function(e) {
        // $("#conversation").reload();
        e.preventDefault();
        $(this).addClass('active');
        senderid = $(this).find('h6').attr("class")
        console.log(senderid);
        receiverid = $(this).find('h6').attr("name")
        console.log(receiverid);
        var sender_text1;
        var lastmsg1;
        var rvname1 = $(this).find('h6').text();
        console.log(rvname1);
        var sendername1 = $('a[id="r_name"]').text();
        console.log(sendername1)
        l = senderid;
        m = '';

        for (var i = 0; i < l.length; i++) {
            if ("" + parseInt(l[i]) != "NaN")
                m = m + l[i];
        }
        x = receiverid;
        y = '';
        for (var i = 0; i < x.length; i++) {
            if ("" + parseInt(x[i]) != "NaN")
                y = y + x[i];
        }

        // document.write(y);
        console.log(y);
        console.log(m);

        function callAjax(e) {
            $.ajax({
                url: 'php/getmsgs.php',
                type: 'POST',
                data: {
                    c_id: y,
                    r_id: m
                },
                cache:false,
                success: function(data) {
                    console.log(data)
                    if (data == "") {
                        $("#choose").text("");
                    } else {

                        var obj1 = JSON.parse(data);
                        console.log(obj1);
                        for (var i = 0; i < obj1.length; i++) {
                            // obj1[i]
                            console.log(obj1[i].receiver_id);
                            lastmsg1 = obj1[i].messageText;
                            console.log('r_' + m);

                            if (obj1[i].receiver_id == 'r_' + m) {
                                console.log("hi")
                                sender_text1 += '<li class="left" >' +
                                    '<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />' +
                                    '<div class="chat-item">' +
                                    '<div class="chat-item-header">' +
                                    '<h5>' + rvname1 + '</h5>' +
                                    '<small class="text-muted">' + obj1[i].msg_datetime + '</small>' +
                                    '</div>' +
                                    '<p>' + obj1[i].messageText + '</p>' +
                                    '</div>' +
                                    '</li>';

                            } else if (obj1[i].sender_id == 's_' + m) {
                                //  console.log(obj1[i].receiverid);
                                sender_text1 += '<li class="right">' +
                                    '<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-right" />' +
                                    '<div class="chat-item">' +
                                    '<div class="chat-item-header">' +
                                    '<h5>' + sendername1 + '</h5>' +
                                    '<small class="text-muted">' + obj1[i].msg_datetime + '</small>' +
                                    '</div>' +
                                    '<p>' + obj1[i].messageText + '</p>' +
                                    '</div>' +
                                    '</li>';
                                console.log(sender_text1)
                            } else {

                            }
                        }
                    }


                    console.log(lastmsg1);
                    $("#conversation").empty()
                    conversation = sender_text1;
                    $("#conversation").append(sender_text1)
                    console.log(lastmsg1);
                    $(this).find('p').text(lastmsg1)
                    setInterval(function() {
                        $.ajax({
                            url: 'php/lastmsgs.php',
                            type: 'POST',
                            data: {
                                r_id: m
                            },
                            cache:false,
                            success: function(data) {
                                console.log(data)
                                var obj1 = JSON.parse(data);
                                console.log(obj1);
                                for (var i = 0; i < obj1.length; i++) {
                                    // obj1[i]
                                    console.log(obj1[i].receiver_id);
                                    if (obj1[i].can_id == y) {
                                        stmsg = obj1[i].messageText;
                                        console.log(stmsg)
                                        console.log(lastmsg1)
                                        // if(stmsg != lastmsg1){
                                        // $("#link").find('p[id="textmsg"]').text(stmsg)

                                        // }
                                    }

                                }



                                if (stmsg != lastmsg1) {
                                    getmsgs(y, m, stmsg);
                                }
                                lastmsg1 = stmsg;



                            }
                        });
                    }, 1000)



                }

            });
            // e.preventDefault();
        }
        var url = "newsfeed-messages.html?r_id=" + encodeURIComponent(m) + "&c_id=" + encodeURIComponent(y);
        // $("#conversation").load(url +"#conversation")
        callAjax();
        // reload(url);

        function getmsgs(y, m, lmsg) {
            console.log(lmsg)
            alert(y)
            var lmsg1 = lmsg;
            $.ajax({
                url: 'php/lastmsgs.php',
                type: 'POST',
                data: {
                    r_id: m
                },
                cache:false,
                success: function(data) {
                    console.log(data)
                    if (data == "") {
                        $("#choose").text("");
                    } else {

                        var obj1 = JSON.parse(data);
                        console.log(obj1);
                        for (var i = 0; i < obj1.length; i++) {
                            // obj1[i]
                            console.log(obj1[i].receiver_id);
                            lmsg = obj1[i].messageText;
                            // console.log(lastmsg2)
                            console.log('r_' + m);
                            // if(obj1[i].messageText != lmsg){
                            if (obj1[i].can_id == y) {

                                if (obj1[i].sender_id == 's_' + y) {
                                    // console.log("hi")
                                    sender_text2 = '<li class="left" >' +
                                        '<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />' +
                                        '<div class="chat-item">' +
                                        '<div class="chat-item-header">' +
                                        '<h5>' + rvname1 + '</h5>' +
                                        '<small class="text-muted">' + obj1[i].msg_datetime + '</small>' +
                                        '</div>' +
                                        '<p>' + obj1[i].messageText + '</p>' +
                                        '</div>' +
                                        '</li>';
                                    $("#conversation").append(sender_text2);
                                    $("#link").find('p[id="textmsg"]').text(lmsg)



                                }

                            } else {

                            }

                        }
                    }


                }
            });
        }

    });
    // }
    $("#msgSend").click(function() {
        // alert("hu")
        console.log();
        msgtext = $("#msgtext").val();
        senderid = $('.active').find('h6').attr("class")
        console.log(senderid);
        receiverid = $('.active').find('h6').attr('name')
        console.log(receiverid);
        l = senderid;
        m = '';

        for (var i = 0; i < l.length; i++) {
            if ("" + parseInt(l[i]) != "NaN")
                m = m + l[i];
        }
        x = receiverid;
        y = '';
        for (var i = 0; i < x.length; i++) {
            if ("" + parseInt(x[i]) != "NaN")
                y = y + x[i];
        }

        // document.write(y);
        console.log(y);
        console.log(m);
        // console.log(senderid);
        // console.log(receiverid);
        sendername = $("#r_name").text();
        canid = y;
        recid = m;
        $.ajax({
            url: 'php/msgpage1.php',
            type: 'POST',
            data: {
                msgtxt: msgtext,
                s_id: senderid,
                rev_id: receiverid,
                c_id: canid,
                r_id: recid
            },
            cache:false,
            success: function(data) {
                console.log(data)
                $("#msgtext").val("")

                sender_text = '<li class="right">' +
                    '<img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-right" />' +
                    '<div class="chat-item">' +
                    '<div class="chat-item-header">' +
                    '<h5>' + sendername + '</h5>' +
                    '<small class="text-muted">Now</small>' +
                    '</div>' +
                    '<p>' + msgtext + '</p>' +
                    '</div>' +
                    '</li>';
                $("#conversation").append(sender_text);
                $("#textmsg").text(msgtext)

                // $("#loadchat").load("newsfeed-messages.html #loadchat")
            }


        })

    })


})
