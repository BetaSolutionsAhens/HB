$(document).ready(function(){
  // $('button').click(function(e){
    //  e.preventDefault();
    // alert("adycf")
    $.ajaxSetup({cache: false});

    $.ajax({
      type:'GET',
      url:'php/location.php',
      async: false,
      cache: false,
      success:function(data){
        // alert(data)
        // alert(JSON.parse(data))
        var obj= JSON.parse(data)
        for (var i = 0; i < obj.length; i++) {
          // console.log(obj[i].c_id);
          var country_tag =  '<option id="'+obj[i].c_id+'" value="'+obj[i].c_name+'">'+obj[i].c_name+'</option>';
            $("#countryId").append(country_tag);
        }
        // $('#stateId').html('<option value="">Select state first</option>');

      }
    })

    $('#countryId').on('change',function(){
        var countryID = $(this).find('option:selected').attr('id');
        // alert(countryID)
        console.log(countryID+"5454");
        if(countryID){
            $.ajax({
                type:'POST',
                url:'php/city.php',
                data:{country_id:countryID},
                cache:false,
                success:function(statesData){
                  // alert(statesData)
                  var obj1= JSON.parse(statesData)
                  // var obj1=statesData

                  for (var i = 0; i < obj1.length; i++) {
                    // console.log(obj[i].s_id);
                    var state_tag =  '<option id="'+obj1[i].s_id+'" value="'+obj1[i].s_name+'">'+obj1[i].s_name+'</option>';
                      $("#stateId").append(state_tag);
                  }
                }
            });
        }else{
            $('#stateId').append('<option value="">Select country first</option>');
            $('#cityId').append('<option value="">Select state first</option>');
        }
    });

    // GETTING CITIES
    $('#stateId').on('change',function(){
        var stateID = $(this).find('option:selected').attr('id');
        // alert(stateID)
        if(stateID){
            $.ajax({
                type:'POST',
                url:'php/city.php',
                data:{state_id:stateID},
                cache:false,
                success:function(cityData){
                  // alert(cityData)
                  var obj2= JSON.parse(cityData)
                  for (var i = 0; i < obj2.length; i++) {
                    // console.log(obj[i].s_id);
                    var city_tag =  '<option id="'+obj2[i].ci_id+'" value="'+obj2[i].ci_name+'">'+obj2[i].ci_name+'</option>';
                      $("#cityId").append(city_tag);
                  }
                    // $('#state').html(html);
                    // $('#cityId').html('<option value="">Select state first</option>');
                }
            });
        }else{
            $('#state').html('<option value="">Select country first</option>');
            $('#city').html('<option value="">Select state first</option>');
        }
    });
  // })
});
