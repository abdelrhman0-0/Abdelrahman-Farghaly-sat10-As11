
const openDiv = $('.open');
const openBtn = $('.fa-bars');
const homeTop = $('#home').innerHeight();
const date = new Date("Mar 14, 2022 12:00:00").getTime();
const days = $('.days');
const hours = $('.hours'); 
const minutes = $('.minutes'); 
const seconds = $('.seconds'); 
const texetarea = document.querySelector('textarea');
const remain = document.getElementById('remain');
let defaultRemainNum = 100;
let openedWidth = $('.opened').innerWidth();
let timer = setInterval(countDown,1000);



$(window).ready(function(){
    $('.img').fadeOut(1000,()=>{
        $('#loading-screen').fadeOut(1000,()=>{
            $('body').css('overflow','auto')
            $('#loading-screen').remove()
        })
        
    })
})


function openBar(){
    openDiv.css('left',-openedWidth)
    openBtn.click(()=>{

        if(openDiv.css('left') ==`${-openedWidth}px`){    
            openDiv.css('left',0)
        }else{
            openDiv.css('left',-openedWidth)
        }
    })
}

function closeBtn(){
    $('.fa-times').click(()=>{
        openDiv.css('left',-openedWidth)
    })
}


function ChangeOpenBtnColor(){
    $(window).scroll(()=>{
        let scrollTopHeight = $(window).scrollTop()
        if(scrollTopHeight > homeTop/2){
            openBtn.css('color','#888');
         }
        else {
            openBtn.css('color','#fff');
        
        }
    })
}


function toggleSections(){
    $('.head').click((e)=>{
         
        
    
        $(`p.${e.target.getAttribute('class')}`).parents(`.${e.target.getAttribute('class')}`).siblings().children('.body').slideUp(300,)
        $(`p.${e.target.getAttribute('class')}`).parent('.body').slideToggle(300);
    
        
    
        
    })
}


function countDown(){
    const now = new Date().getTime();
    let dist = date - now ;
    let counterDays = Math.floor(dist / (1000*60*60*24));
    let counterHours =Math.floor( (dist % (1000*60*60*24)) / (1000*60*60) );
    let counterMinutes = Math.floor( (dist%(1000*60*60)) / (1000*60) );
    let counterSeconds = Math.floor( (dist%(1000*60)) / (1000) );
    if(dist < 0){
        clearInterval(timer)
        days.html("Expired"); 
        hours.html("Expired"); 
        minutes.html("Expired");
        seconds.html("Expired");
    }else{
        days.html(`${counterDays} d`); 
        hours.html(`${counterHours} h`); 
        minutes.html(`${counterMinutes} m`);
        seconds.html(`${counterSeconds} s`);
    }


    
}



function checkRemaining(){
    let typedNum = texetarea.value.length;
    let remainNum = defaultRemainNum - typedNum;
    remain.innerHTML=remainNum
}



function callFunctions(){
    openBar();
    closeBtn();
    ChangeOpenBtnColor();
    closeBtn();
    toggleSections();
    
}




callFunctions()


texetarea.addEventListener('keyup',checkRemaining)