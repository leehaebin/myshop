(function(){
   const listAll = document.getElementsByClassName('list-all')[0];
   const cart = document.getElementById('cart');
   const close = document.getElementById('close');
   const bestlinks = document.querySelectorAll('best-tab>li');
   

    listAll.addEventListener("click", changeNav);
    cart.addEventListener('click',cartBoxView);
    close.addEventListener('click', cartBoxView);


    const bimg = document.getElementById('big-img');
    const sImg = document.querySelectorAll('.simg');

    
    sImg.forEach( function(el){
        el.addEventListener('mouseenter', function(event){
            bimg.src = event.target.src;
        })
    })

   function changeNav(){
       const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
       const sitemap = document.getElementById('sitemap');
       listAll.classList.toggle('close');
       listAll.classList.toggle('newlist');

       if(listAll.className == 'list-all close'){
           sitemap.style.top = nav+"px";
           sitemap.style.display="block";
       }else{
           sitemap.style.display="none";
       }
   }


   function cartBoxView(){
       document.getElementsByClassName('cart-view')[0].classList.toggle('none');
   }

   //슬라이드쇼
   let slideIndex = 1;
   showSlides(slideIndex);

   function showSlides(){
       let i;
       const slides = document.getElementsByClassName('img-slide');
       const dot = document.getElementsByClassName('dot');

       for(i = 0; i<slides.length; i++){
           slides[i].style.display = "none";
           dot[i].classList.remove("active");
       }
       slideIndex++;
       if(slideIndex > slides.length){
           slideIndex = 1;
       }
       slides[slideIndex - 1].style.display = "block";
       dot[slideIndex-1].classList.add('active')
       setTimeout(showSlides,5000);
   }


   //best링크
   function openBest(){
       console.log()
   }
}());

function viewQuick(event){
   document.getElementsByClassName('quick')[0].classList.toggle('action');
   event.target.classList.toggle('fa-xmark');
   event.target.classList.toggle('fa-bars');
  
}



document.getElementsByClassName('tablinks')[0].click();
function openBest(e,bid){
   const tabcontent = document.getElementsByClassName('best-tabcontent');
   for(i=0;i<tabcontent.length;i++){
       tabcontent[i].style.display="none";
   }
   const tablinks = document.getElementsByClassName('tablinks');
   for(i=0; i<tablinks.length; i++){
       tablinks[i].classList.remove('active');
   }
   document.getElementById(bid).style.display='block';
   e.currentTarget.classList.add('active');
}


   function vlist(n){
      const el = document.querySelectorAll(".pd");
      el.forEach((items)=>{
            items.classList.remove('col-lg-3','col-lg-4','col-lg-12');
            items.classList.add('col-lg-'+n);
      });
   }

function viewTab(e){
   const tabcontent = document.getElementsByClassName('tabcontent');
   const tabs = document.getElementsByClassName('tab')[0];


   for(let i =0; i<tabcontent.length; i++){
       tabcontent[i].classList.remove('active');
   }

   for(let i = 0; i<tabcontent.length; i++){
       tab.children[i].classList.remove('active');
   }

   tabcontent[e].classList.add('active');
   tabs.children[e].classList.add('active');
}

function scrollUp(){
    console.log(window.scrollY);
    window.scrollTo({top:0, behavior: 'smooth'});
}

function scrollDown(){
    console.log(window.scrollY);
    let height = document.body.scrollHeight;
    window.scrollTo({top: height, behavior:'smooth'});
}

const bimg = document.getElementById('big-img');
const changeImg = document.querySelectorAll('.simg');


changeImg.forEach( function(el){
    el.addEventListener('mouseenter', function(event){
        console.log(event);
    })
})