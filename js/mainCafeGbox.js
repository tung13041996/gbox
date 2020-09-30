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
            if (flag == true) {
                alert('Gửi thông tin thành công');
            }; 
        } 
    }

    let btnSend = $('.footer-bot .send');
    btnSend.on('click', function(){
        validateForm();
    })





    //Fullscreen Gallery using photoSwipe Library
    var initPhotoSwipeFromDOM = function(gallerySelector) {
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;
            for(var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; 
                if(figureEl.nodeType !== 1) {
                    continue;
                }
    
                linkEl = figureEl.children[0];
    
                size = linkEl.getAttribute('data-size').split('x');
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
    
    
    
                if(figureEl.children.length > 1) {
                    item.title = figureEl.children[1].innerHTML; 
                }
    
                if(linkEl.children.length > 0) {
                    item.msrc = linkEl.children[0].getAttribute('src');
                } 
    
                item.el = figureEl; 
                items.push(item);
            }
    
            return items;
        };
    
        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };
    
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
    
            var eTarget = e.target || e.srcElement;
    
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
    
            if(!clickedListItem) {
                return;
            }
    
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
    
            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) { 
                    continue; 
                }
    
                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
    
    
    
            if(index >= 0) {
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };
    
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};
    
            if(hash.length < 5) {
                return params;
            }
    
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');  
                if(pair.length < 2) {
                    continue;
                }           
                params[pair[0]] = pair[1];
            }
    
            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
    
            return params;
        };
    
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
    
            items = parseThumbnailElements(galleryElement);
    
            options = {
    
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
    
                getThumbBoundsFn: function(index) {
                    var thumbnail = items[index].el.getElementsByTagName('img')[0],
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect(); 
    
                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                }
    
            };
    
            if(fromURL) {
                if(options.galleryPIDs) {
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
    
            if( isNaN(options.index) ) {
                return;
            }
    
            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }
    
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
    
        var galleryElements = document.querySelectorAll( gallerySelector );
    
        for(var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i+1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
    
        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };
    
    $(window).load(function() {
        initPhotoSwipeFromDOM('.cafeGbox__gallery--image');
    })
})
