// Menu 
let onMenu = () => {
    document.getElementById("on").style.display = 'none';
    document.getElementById("off").style.display = 'flex'
    document.getElementById("navbarNavDropdown").style.display = 'block';
}

let offMenu = () => {
    document.getElementById("on").style.display = 'flex'
    document.getElementById("off").style.display = 'none'
    document.getElementById("navbarNavDropdown").style.display = 'none';
}


let onNight = () => {     
        let onNight = document.getElementById('moon1');
        let onLight = document.getElementById('sun1');
        onNight.style.display = "none"
        onLight.style.display = "block"
        onLight.style.color = "white"

        /***********************About*********************************/
        $("#body-about").css("backgroundColor","black")
        $("#achieverment").css("backgroundColor","black")
        $("#cv").css("backgroundColor","black")
        $(".card-body").css("backgroundColor","black")
        $("#hello").css("backgroundColor","rgb(19, 22, 23)")
        $(".link-hny").css("color","#DDDDDD")
        $(".content-mid").css("backgroundColor","rgb(19, 22, 23)")
        $(".about-hello").css("backgroundColor","black")
        $("#subscribe").css("backgroundColor","rgb(19, 22, 23)")
        /**************************************Services*******************************************/     
        /*banner*/
        $("#my-services").css("backgroundColor","#131617")
        $("#sv-h1").css("color","white")
        /*body*/
        $("#multi-items").css("backgroundColor","black")
        $(".box-wrap").css("backgroundColor","#131617")
        $(".sv-a").css("color","white")

        $("#pricing").css("backgroundColor","black")
        $("#body_services").css("backgroundColor","black")
        $(".btn-pricing").css("backgroundColor","black")
        $(".title-big").css("color","white")
        $(".sup-h5").css("color","white")
        $(".sup-h5-active").css("color","#7A21E3")

        /***************************************Portfolio******************************************/
        $("#body_portfolio").css("backgroundColor","black")
        $(".pro-item").css("color","white")

        /*************************************Index*********************************************/

        /* Menu */ 
        let header_1 = document.getElementsByClassName('nav-menu')[0];
        header_1.style.backgroundColor = 'black'
        header_1.style.transition = "0.5s"

        let item_blog = document.getElementsByClassName('item-blog')[0];
        item_blog.style.color = "white"

        let item = document.querySelectorAll('.nav-link');
        for (let i = 1; i < item.length; i++)
        {
            item[i].style.color = "white";
        }

        $(".lst-menu1").css("backgroundColor","black")
        $(".lst-menu").css("backgroundColor","black")

        /* Banner */ 
        let banner = document.getElementsByClassName("main-container")[0];
        banner.style.backgroundColor = "#131617"

        let span = document.getElementsByClassName("banner-clone1")[0];
        span.style.color = "white"
        let span2 = document.getElementsByClassName("banner-clone2")[0];
        span2.style.color = "white"

        /* Who Am I */
        let who = document.getElementById("whoami");
        who.style.backgroundColor = "black" 

        let who1 = document.getElementById("wh1");
        who1.style.color = "white"

        let whp1 = document.getElementById("whp");
         whp1.style.color = "#AFAFAF"
        
         /* Resume */
         $("#resume").css("backgroundColor","#131617")
         $("#resumh1").css("color","white")
         $("#resump").css("color","#AFAFAF")

         /* Services */
         $("#services").css("backgroundColor","black")
         $("#ido").css("color","white")
         $(".sl-item").css("backgroundColor","#131617")
         $(".ux-ui").css("color","white")
         $(".read").css("color","white")
         $(".number").css("color","#d8d7d4")

         /*Status */

         $("#stats").css("backgroundColor","#131617")
         $("#counter").css("color","white")
         $("#counter1").css("color","white")
         $("#counter2").css("color","white")
         $("#counter12").css("color","white")

         /* TESTIMONIAL */
         $("#services2").css("backgroundColor","black")

         /* Video */
        $("#videos").css("backgroundColor","black")
        $("#video-h1").css("color","white")
        $("#video-p").css("color","#AFAFAF")

        /* TOUCH */
        $("#touch").css("backgroundColor","#131617") 
        $(".touch1").css("color","white")


}        

let onLight = () => {     
    location.reload();
}


