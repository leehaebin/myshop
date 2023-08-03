(function(){
   const listAll = document.getElementsByClassName('list-all')[0];
   const cart = document.getElementById('cart');
   const close = document.getElementById('close');
   const bestlinks = document.querySelectorAll('best-tab>li');
   const size = document.shopform.size;
   const rootColors = document.getElementsByClassName('rootColors')[0];

   // 컬러 선택하면 size check 풀기
   rootColors.addEventListener('click', function(){
       document.querySelectorAll('.size').forEach((v, i) => {
           v.checked = false;
       })
   });


   // 본문 주문 폼
   size.forEach(function(sz){
       sz.addEventListener('change', function(e){
           const selectColor = document.querySelector('.color:checked').value;
           const selectSize = document.querySelector('.size:checked').value;
           const selectTitle = document.getElementById('title').value;
           const selectPrice = document.getElementById('price').value;
           const addProduct = document.getElementById('addProduct');
           // console.log(selectColor, selectSize, selectTitle, selectPrice);
           let isAddProduct = document.getElementsByClassName('addProduct');

           const colors = document.getElementsByClassName('color');
           let colorsIndex;
           let i;
           for(i = 0 ; i < colors.length ; i++){
               if(colors[i].checked) colorsIndex = i;
           }

           const sizes = document.getElementsByClassName('size');
           let sizesIndex;
           for(i = 0 ; i < colors.length ; i++){
               if(sizes[i].checked) sizesIndex = i;
           }

           let count = 0;
           if(isAddProduct.length > 0){
               count = isAddProduct.length;
           }

           let addList = true;

           document.querySelectorAll('.addProduct').forEach(function(v){
               if('addProduct'+colorsIndex+sizesIndex == v.id){
                   alert("같은 주문이 있습니다.");
                   addList = false;
               }
           })
           
           
           if(addList){
               let list = `<ul class="addProduct" id="addProduct${colorsIndex}${sizesIndex}">
                               <li class="title">
                                   <p>${selectTitle}</p>
                                   <p class="option">${selectColor}, ${selectSize}</p>
                               </li>
                               <li id="add">
                                   <div class="addbox">
                                       <span class="ctv" id="ctv${colorsIndex}${sizesIndex}">1</span>
                                       <div class="pmbox">
                                           <div class="up" onclick="updn('${colorsIndex}${sizesIndex}', 1)"><i class="fa-solid fa-angle-up"></i></div>
                                           <div class="down" onclick="updn('${colorsIndex}${sizesIndex}', -1)"><i class="fa-solid fa-angle-down"></i></div>
                                       </div>
                                   </div>
                                   <span class="list-close" onclick="closelist(${colorsIndex}, ${sizesIndex})"><i class="fa-solid fa-xmark"></i></span>
                                   <input type="hidden" name="ct[]" class="ct" value="1" id="ct${colorsIndex}${sizesIndex}">
                                   <input type="hidden" name="money[]" id="money${colorsIndex}${sizesIndex}" value="${selectPrice}">
                                   <input type="hidden" name="summoney[]" id="summoney${colorsIndex}${sizesIndex}" value="summoney">
                               </li>
                               <li class="totalP" id="totalIP${colorsIndex}${sizesIndex}">
                                   ${numComma(selectPrice)} 원
                               </li>
                           </ul>`;
               const opt = addProduct.innerHTML;
               addProduct.innerHTML = opt + list;
           }
       });
   });




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

   const btnRight = document.getElementById('btn-right');
   const btnLeft = document.getElementById('btn-left');
   const ptIn = document.getElementById('ptIn');
   let ps = 0;
   btnRight.onclick = function(){
       ps = ptIn.offsetLeft;
       if(ps < 0){
           ps += 100;
           ptIn.style.left = ps + "px";
       }
      
      
   }
   btnLeft.onclick = function(){
       ps = ptIn.offsetLeft;
       if(ps > -300){
           ps -= 100;
           ptIn.style.left = ps + "px";
       }
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

function updn(i, n){
   var ct = Number(document.getElementById('ct' + i).value);
   var money = Number(document.getElementById('money' + i).value);
   let summoney = 0;
   if(n > 0){
       if(ct <= 11){
           ct = ct + 1;
       }
   }else{
       if(ct > 1){
           ct = ct - 1;
       }
   }
   money = money*ct;
   document.getElementById('summoney' + i).value = summoney;
   document.getElementById('totalIP' + i).innerHTML = numComma(money)+'원';
   document.getElementById('ctv'+i).innerHTML = ct;
   document.getElementById('ct'+i).value = ct;
}

// 세자리 단위 콤마찍는 정규식
const numComma = (value) => {
   value = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
   return value;
}

// 리스트 닫기
function closelist(m, n){
   document.getElementById('addProduct'+m+n).remove();
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
       tabs.children[i].classList.remove('active');
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


const quickHeight = document.getElementsByClassName('quick')[0].scrollHeight;
const up = document.getElementById('up');
const down = document.getElementById('down');
const updown = document.getElementById('updown');

// const scrollUp = () =>{
//     let i = 10;
//     const scrUpInterval = setInterval(()=>{
//         let scr = window.scrollY;
//         window.scrollTo({top : scr-i});
//         i = i+10;
//         if(scr == 0){
//             clearInterval(scrUpInterval);
           
//         }
//         //updown.addEventListener('mouseout', clearInterval(scrUpInterval));
//     },10)
   
// }
// const scrollDown = () =>{
//     let height = document.body.scrollHeight;
//     let i = 10;
//     const scrDownInterval = setInterval(()=>{
//         let scr = window.scrollY;
//         window.scrollTo({top : scr+i});
//         i = i+10;
//         if(scr == (height-quickHeight)){
//             clearInterval(scrDownInterval);
//         }
       
//     },10)
// }

/********  main.html ********/
// 이미지 올리면 바뀌기


const bimg = document.getElementById('big-img');
const changeImg = document.querySelectorAll('.simg');


// changeImg.forEach( function(el){
//     el.addEventListener('mouseenter', function(event){
//         console.log(event);
//     })
// })