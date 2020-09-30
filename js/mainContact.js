
$(document).ready(function() {
    //Chọn menu
    $(".wrap .container .logo .ham-menu").click(function() {
        $(".container .menu").slideToggle();
    })

    // scroll back to top smooth
    document.querySelector('.information .container .scroll .arrow-scroll').addEventListener('click', function(){
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

    let btnSend = $('.information .send');
    btnSend.on('click', function(){
        validateForm();
    })

})




