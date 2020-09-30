
$(document).ready(function() {
    //Chọn menu
    $(".wrap .container .logo .ham-menu").click(function() {
        $(".container .menu").slideToggle();
    })

    // scroll back to top smooth
    document.querySelector('footer .footer-bot .container .scroll .arrow-scroll').addEventListener('click', function(){
        window.scrollBy({
            top: -document.body.offsetHeight,
            behavior: 'smooth'
        });
    })


    //Xử lý form footer
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    function validateForm(){
        let name = $.trim($('#name').val()),
            phone = $.trim($('#phone').val()),
            email = $.trim($('#email').val()),
            sub = $.trim($('#subject').val()),
            mes = $.trim($('#mes').val());
        let flag = false; 

        //Kiểm tra tên
        if (name == '' || name.length < 3){
            $('#err-name').text('Vui lòng nhập lại tên');
            $('#name').addClass('error');
        } else{
            $('#err-name').text('');
            $('#name').removeClass('error');
            flag = true;
        }

        //Kiểm tra phone
        if (phone == '' || phone.length !==10){
            $('#err-phone').text('Vui lòng nhập lại số điện thoại');
            $('#phone').addClass('error');
        } else{
            $('#err-phone').text('');
            $('#phone').removeClass('error');
            flag = true;
        }

        //Kiểm tra email
        if (email == ''){
            $('#err-email').text('Vui lòng nhập email');
            $('#email').addClass('error');
        } else if(!isEmail(email)){
            $('#err-email').text('Email không đúng, vui lòng nhập lại');
            $('#email').addClass('error');
        } else {
            $('#err-email').text('');
            $('#email').removeClass('error');
            flag = true;
        }

        //Kiểm tra subject
        if (sub == '' ){
            $('#err-sub').text('Vui lòng nhập vấn đề');
            $('#subject').addClass('error');
        } else{
            $('#err-sub').text('');
            $('#subject').removeClass('error');
            flag = true;
        }

        //Kiểm tra message
        if (mes == ''){
            $('#err-mes').text('Vui lòng nhập lại nội dung tin nhắn');
            $('#mes').addClass('error');
        } else{
            $('#err-mes').text('');
            $('#mes').removeClass('error');
            flag = true;
             
        } 
    }
    let btnSend = $('.footer-bot .send');
    btnSend.on('click', function(){
        validateForm();
    })

    //Xử lý form main
    $( function() {
        let dateFormat = "dd/mm/yy",
          from = $( "#arrive" )
            .datepicker({
              
              changeMonth: true,
              changeYear: true,
              numberOfMonths: 1,
              dateFormat: 'dd/mm/yy',
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( "#leave" ).datepicker({
            
            changeMonth: true,
              changeYear: true,
            numberOfMonths: 1,
            dateFormat: 'dd/mm/yy',
          })
          .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
          });
     
        function getDate( element ) {
          let date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
          return date;
        }
      } );
 
    function validateFormMain(){
        let comName = $.trim($('#com-name').val()),
            comContact = $.trim($('#com-contact').val()),
            comPhone = $.trim($('#com-phone').val()),
            comEmail = $.trim($('#com-email').val()),
            comAccount = $.trim($('#com-account').val()),
            comAddress = $.trim($('#com-address').val()),
            catering = $.trim($('#catering').val()),
            lighting = $.trim($('#lighting').val()),
            arrive = $.trim($('#arrive').val()),
            leave = $.trim($('#leave').val()),
            reference = $.trim($('#reference').val()),
            comment = $.trim($('#comment').val());
        let flag = false;

        //Kiểm tra Company Name
        if (comName == '' || comName.length < 10){
            $('#err-com-name').text('*Please enter Company Name');
            $('#com-name').addClass('error');
        } else{ 
            $('#err-com-name').text('');
            $('#com-name').removeClass('error');
            flag = true;
        }

        //Kiểm tra Contact Name
        if (comContact == ''){
            $('#err-com-contact').text('*Please enter Contact Name');
            $('#com-contact').addClass('error');
        } else{ 
            $('#err-com-contact').text('');
            $('#com-contact').removeClass('error');
            flag = true;
        }

        //Kiểm tra phone
        if (comPhone == '') {
            $('#err-com-phone').text('*Please enter your phone number');
            $('#com-phone').addClass('error');
        } else if (comPhone.length !== 10){
            $('#err-com-phone').text('*Phone is wrong, please try again');
            $('#com-phone').addClass('error');
        } else {
            $('#err-com-phone').text('');
            $('#com-phone').removeClass('error');
            flag = true;  
        }

        //Kiểm tra email 
        if (comEmail == '') {
            $('#err-com-email').text('*Please entre your email');
            $('#com-email').addClass('error');
        } else if (!isEmail(comEmail)) {
            $('#err-com-email').text('*Email is wrong, please try again');
            $('#com-email').addClass('error');
        } else{
            $('#err-com-email').text('');
            $('#com-email').removeClass('error');
            flag = true;
        }

        //Kiểm tra Account payable address
        if (comAccount == ''){
            $('#err-com-account').text('*Please enter Account payable address');
            $('#com-account').addClass('error');
        } else{ 
            $('#err-com-account').text('');
            $('#com-account').removeClass('error');
            flag = true;
        }

        //Kiểm tra Account Company address
        if (comAddress == ''){
            $('#err-com-address').text('*Please enter Company address');
            $('#com-address').addClass('error');
        } else{ 
            $('#err-com-address').text('');
            $('#com-address').removeClass('error');
            flag = true;
        }

        //Kiểm tra Catering Requirements 
        if (catering == ''){
            $('#err-catering').text('*Please enter Catering Requirements');
            $('#catering').addClass('error');
        } else{ 
            $('#err-catering').text('');
            $('#catering').removeClass('error');
            flag = true;
        }

        //Kiểm tra Lighting Requirements
        if (lighting == ''){
            $('#err-lighting').text('*Please enter lighting Requirements');
            $('#lighting').addClass('error');
        } else{ 
            $('#err-lighting').text('');
            $('#lighting').removeClass('error');
            flag = true;
        }

        //Kiểm tra Project Reference
        if (reference == ''){
            $('#err-reference').text('*Please enter reference Requirements');
            $('#reference').addClass('error');
        } else{ 
            $('#err-reference').text('');
            $('#reference').removeClass('error');
            flag = true;
        }
        
        //Kiểm tra Where did you hear about us 
        if (comment == ''){
            $('#err-comment').text('*Please enter comment Requirements');
            $('#comment').addClass('error');
        } else{ 
            $('#err-comment').text('');
            $('#comment').removeClass('error');
            flag = true;
        }

        //Kiểm tra ngày tháng năm

        if (arrive == '') {
            $('#err-arrive').text('*Please enter day arrive');
            $('#arrive').addClass('error');
            if (leave == '') {
                $('#err-leave').text('*Please enter day leave');
                $('#leave').addClass('error');
            }
        } else{
            $('#err-arrive').text('');
            $('#arrive').removeClass('error');
            $('#err-leave').text('');
            $('#leave').removeClass('error');
        }
    }

    let btnSubmit = $('.studioRental .submit');
    btnSubmit.on('click', function(){
        validateFormMain();
    })

})




