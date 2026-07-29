document.addEventListener("DOMContentLoaded", () => {


    /* ===============================
       ハンバーガーメニュー
    =============================== */

    const hamburger = document.querySelector(".hamburger");
    const headerRight = document.querySelector(".header-right");


    if (hamburger && headerRight) {

        hamburger.addEventListener("click", () => {

            headerRight.classList.toggle("active");

        });

    }





    /* ===============================
       スクロールアニメーション
    =============================== */


    const targets = document.querySelectorAll(
        "section,.pm-item,.ap-list img,.fm-item,.dm-item,.lm-list,.cm-list,.dam-list,.rc-item"
    );


    const observer = new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }


        });


    },{
        threshold:0.15
    });



    targets.forEach(target=>{

        target.classList.add("fade");

        observer.observe(target);

    });





    /* ===============================
       トップへ戻るボタン
    =============================== */


    const topBtn = document.createElement("button");


    topBtn.innerHTML="↑";


    topBtn.id="topBtn";


    document.body.appendChild(topBtn);



    window.addEventListener("scroll",()=>{


        if(window.scrollY > 400){

            topBtn.classList.add("show");


        }else{


            topBtn.classList.remove("show");


        }


    });



    topBtn.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });




    /* ===============================
       画像ギャラリー
    =============================== */


    const gallery = document.querySelectorAll(
        ".pm-item img,"+
        ".ap-list img,"+
        ".fm-item img,"+
        ".dm-item img,"+
        ".lm-list img,"+
        ".cm-list img,"+
        ".dam-list img,"+
        ".rc-item img"
    );



    const wrapper = document.querySelector(".swiper-wrapper");



    if(wrapper){


        gallery.forEach(img=>{


            const slide=document.createElement("div");


            slide.className="swiper-slide";


            slide.innerHTML=
            `
            <img src="${img.src}">
            `;


            wrapper.appendChild(slide);



        });




        const swiper = new Swiper(".lightboxSwiper",{


            loop:false,


            keyboard:true,


            navigation:{


                nextEl:".swiper-button-next",


                prevEl:".swiper-button-prev"


            }


        });




        gallery.forEach((img,index)=>{


            img.addEventListener("click",()=>{


                const lightbox =
                document.querySelector(".lightbox");



                if(lightbox){


                    lightbox.classList.add("active");


                    swiper.slideTo(index,0);


                }


            });



        });





        /* ===============================
           閉じる
        =============================== */


        const close =
        document.querySelector(".close");



        if(close){


            close.onclick=()=>{


                document
                .querySelector(".lightbox")
                .classList.remove("active");


            };


        }




        const lightbox =
        document.querySelector(".lightbox");



        if(lightbox){


            lightbox.addEventListener("click",(e)=>{


                if(e.target.classList.contains("lightbox")){


                    lightbox.classList.remove("active");


                }


            });


        }



    }



});