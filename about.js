$(document).ready(function(){




    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);




$('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if( $this.val() === '' ) {
            label.removeClass('highlight');
        }
        else if( $this.val() !== '' ) {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});



$("#btn-submit").on("click",function(){
     
    
    var value = document.forms["search-page"]["txt"].value;
    
   
    var boolVal = true;
    $.getJSON("resort.json", function (data) {

        s_items = [];


        $.each(data.resorts, function () {
            s_items.push(this);
        });

        var s_item;

        for (s_item in s_items) {
            var s_obj = s_items[s_item];

            if (s_obj.destination.toUpperCase() === value.toUpperCase()) {
                window.location.assign(s_obj.url);
                
                 alert(s_obj.url);
                boolVal = false;
                break;
            }

        }

        if (boolVal == true) {
            alert("Sorry no match!");
        }


    });
    });
    
});






var config = {
    apiKey: "AIzaSyBaO3dZ6zxqf7LBxMS_jgM3ODzvMbjqLcs",
    authDomain: "usergoddatabase.firebaseapp.com",
    databaseURL: "https://usergoddatabase.firebaseio.com",
    projectId: "usergoddatabase",
    storageBucket: "usergoddatabase.appspot.com",
    messagingSenderId: "468458700915"
  };
  firebase.initializeApp(config);

    //this isthe function that save registration details in toon my fire base data base.
            function saveDb(){
                var username=document.getElementById("username").value;
                var firstName=document.getElementById("uname").value;
                var lastName=document.getElementById("lname").value;
                var email=document.getElementById("email").value;
                var pw=document.getElementById("pwd").value;
                var confirmpw=document.getElementById("confirmpwd").value;
                var ageVal=document.getElementById("age").value;
                var telNoVal=document.getElementById("tel").value;
                var type="Gardiant";
                var Id=document.getElementById("pId").value;
                 
                var dbSaverOnee=firebase.database();
                dbSaverOnee.ref("User/"+username).set({fname:firstName,lname :lastName,email :email,Password :pw,ConfirmPassword : confirmpw,Age : ageVal,TelNo : telNoVal,Type : type,PstientID : Id});
            }
//this is the javacript function that retrieve patients filtered informations in to the user interface of doctor or gurdian.
            function checkLogin(){
                var gardientName=document.getElementById("gurUser").value;
                var gardientPw=document.getElementById("gurpwd").value;

                var databaseRetrive=firebase.database().ref().child("User");
                databaseRetrive.on("child_added",snap => {
                    var userN=snap.child("PstientID").value;
                    var email=snap.child("Password").value;
                });

                if(gardientName == userN){
                    alert("Display");
                }else{
                    alert(""+userN);
                }

                alert("helo"+gardientName);
                
            }

