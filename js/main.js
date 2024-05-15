$(document).ready(function () {

    // header選單切換
    $(".nav>li").hover(function () {
            $(this).addClass('in');
        }, function () {
            $(this).removeClass('in');
        }
    );

    // 手機選單切換
    $('.rightBtn').click(function () { 
        $(this).toggleClass('-close');       
        $('.header_bg').toggleClass('-on');
        $('#bg').toggleClass('mask');
    });

    $(function() {
        /*點擊返回頂部*/
        $('.gotop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        })
    });

    // 小果醬切換
    // var isMouseOver = true;
    $('.jar li').hover(function () {
        // isMouseOver = true
        $(this).find('img').removeClass('down');
        $(this).find('img').addClass('upup');      
        }, function () {
            // if(isMouseOver){
                $(this).find('img').removeClass('upup');
                $(this).find('img').addClass('down');
            // }
        }
    );

    $(".jar li").click(function(){
        $(this).find('span').addClass('thisjam');
        $(this).siblings().find('span').removeClass('thisjam');

    });

    // $('.jar li').click(function (e) { 
    //     e.preventDefault();
    //     $(this).find('img').addClass('upup');  
    //     $(this).siblings().find('img').removeClass('upup');
        
    // });


    // 首頁吐司左上切換
    $('.bake_btn').click(function () { 
        $(this).removeClass('this').siblings().addClass('this');
    });

    //關於吐司icon展開
    $('.about_txt h1 i').click(function () { 
        $('.icon_out').slideToggle(700);
        setTimeout(function() {
             $(".about_icon li:first .about_tit img").slideToggle();
         }, 1000);
         setTimeout(function() {
             $(".about_icon li:nth-child(2) .about_tit img").slideToggle();
         }, 1700);
         setTimeout(function() {
             $(".about_icon li:nth-child(3) .about_tit img").slideToggle();
         }, 2400);
         setTimeout(function() {
             $(".about_icon li:last .about_tit img").slideToggle();
         }, 3100);

    });

    //表單事件
	$(".f_btn").submit(function() {
		if($('.f_name').val() == ''){
			// alert('nono');
			return false;
		}else{  
			return true;
		}
    });
    
    //表單事件_紅匡警示
    let undone = '<b>尚未填寫</b>'; 
   $('.f_name').focus(function(){
        $(this).parent().find('>b').remove();    
    }).blur(function(){
        if($(this).val() == ''){ 
            $(this).addClass('-error').parent().append(undone);
        }else{
        $(this).removeClass('-error');
        };
    });
    
   $('.f_phone').focus(function(){
        $(this).parent().find('>b').remove(); 
    }).blur(function(){
        if($(this).val() == ''){ 
            $(this).addClass('-error').parent().append(undone);
        }else{
            $(this).removeClass('-error');
        };
    });

    // $('.f_date').focus(function(){
    //     $(this).parent().find('>b').remove(); 
    // }).blur(function(){
    //     if($(this).val() == ''){ 
    //         $(this).addClass('-error').parent().append(undone);
    //     }else{
    //         $(this).removeClass('-error');
    //     };
    // });
    
    $('.m_name').focus(function(){
        $(this).parent().find('>b').remove(); 
    }).blur(function(){
        if($(this).val() == ''){ 
            $(this).addClass('-error').parent().append(undone);
        }else{
            $(this).removeClass('-error');
        };
    });
    
    $('.m_total').focus(function(){
        $(this).parent().find('>b').remove(); 
    }).blur(function(){
        if($(this).val() == ''){ 
            $(this).addClass('-error').parent().append(undone);
        }else{
            $(this).removeClass('-error');
        };
    });

    $('.m_five').focus(function(){
        $(this).parent().find('>b').remove(); 
    }).blur(function(){
        if($(this).val() == ''){ 
            $(this).addClass('-error').parent().append(undone);
        }else{
            $(this).removeClass('-error');
        };
    });

    //果醬light box
    $('.nosell').click(function () { 
        $('.jambuy a').addClass('nosell'); 
        $('.jambuy a').html('<i class="fas fa-shopping-basket"></i><strike>Add to bag</strike>');       
    });
    
    

});



/* -------------------------- 首頁果醬切換 ---------------------------------*/
var jarpro =[
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam01.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam01.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam01_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam01_mb.png',

        tit:'草莓果醬',
        in:'果醬成分：草莓、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam02.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam02.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam02_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam02_mb.png',

        tit:'百香果果醬',
        in:'果醬成分：百香果、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam12.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam12.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam12_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam12_mb.png',

        tit:'蘋果萊姆果醬',
        in:'果醬成分：蘋果、萊姆、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam03.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam03.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam03_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam03_mb.png',

        tit:'奇異果果醬',
        in:'果醬成分：奇異果、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam08.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam08.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam08_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam08_mb.png',

        tit:'桑椹果醬',
        in:'果醬成分：桑椹、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam04.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam04.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam04_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam04_mb.png',

        tit:'芭樂牛奶果醬',
        in:'果醬成分：芭樂、牛奶、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam10.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam10.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam10_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam10_mb.png',

        tit:'芒果鳳梨果醬',
        in:'果醬成分：芒果、鳳梨、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam07.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam07.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam07_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam07_mb.png',

        tit:'蘋果柑橘果醬',
        in:'果醬成分：蘋果、橘子、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam09.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam09.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam09_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam09_mb.png',

        tit:'藍莓果醬',
        in:'果醬成分：藍莓、白砂糖、檸檬、天然柑橘果膠'
    },
    {
        tt:'img/toast.png',
        tt_jam:'img/toast_jam13.png',
        tt_bake:'img/toastbake.png',
        tt_bake_jam:'img/toastbake_jam13.png',

        tt_mb:'img/toast_mb.png',
        tt_jam_mb:'img/toast_jam13_mb.png',
        tt_bake_mb:'img/toastbake_mb.png',
        tt_bake_jam_mb:'img/toastbake_jam13_mb.png',

        tit:'紅龍果果醬',
        in:'果醬成分：紅龍果、白砂糖、檸檬、天然柑橘果膠'
    },
    
    
];

//下排果醬的function
function jarclick(count,item,normal_tt){
    return function(){
        if(is_normal){
            document.getElementById('tt').srcset = item.tt;
            document.getElementById('tt_jam').srcset = item.tt_jam;
            document.getElementById('tt_mb').srcset = item.tt_mb;
            document.getElementById('tt_jam_mb').srcset = item.tt_jam_mb;
            //沒烤過的吐司
        }else{
            document.getElementById('tt').srcset = item.tt_bake;
            document.getElementById('tt_jam').srcset = item.tt_bake_jam;
            document.getElementById('tt_mb').srcset = item.tt_bake_mb;
            document.getElementById('tt_jam_mb').srcset = item.tt_bake_jam_mb;
            //烤過的吐司
        };
    document.getElementById('tit').innerText = item.tit;
    document.getElementById('in').innerHTML = item.in;
    SelectCount=count;
    };
};

//左上吐司btn的function
function toastclick(item,is_normal){
    if(is_normal){
        document.getElementById('tt').srcset = item.tt;
        document.getElementById('tt_jam').srcset = item.tt_jam;
        document.getElementById('tt_mb').srcset = item.tt_mb;
        document.getElementById('tt_jam_mb').srcset = item.tt_jam_mb;
        //沒烤過的吐司
    }else{
        document.getElementById('tt').srcset = item.tt_bake;
        document.getElementById('tt_jam').srcset = item.tt_bake_jam;
        document.getElementById('tt_mb').srcset = item.tt_bake_mb;
        document.getElementById('tt_jam_mb').srcset = item.tt_bake_jam_mb;
        //烤過的吐司
    };
    document.getElementById('tit').innerText = item.tit;
    document.getElementById('in').innerHTML = item.in;
};
var is_normal = true; //這是沒烤過
var SelectCount = 0; //這是選擇第幾瓶果醬，預設0為第一瓶

function bakeclick(){
    is_normal = false;
    toastclick(jarpro[SelectCount],is_normal);
};

function normalclick(){
    is_normal = true;
    toastclick(jarpro[SelectCount],is_normal);
};


var baked = document.querySelector('#bake');
if(baked)
baked.addEventListener('click',bakeclick,false); 

var baked1 = document.querySelector('#normal');
if(baked1)
baked1.addEventListener('click',normalclick,false); 

var jars = document.querySelectorAll('.jar li');
for( let i=0 ; i<jars.length ;i++){
    jars[i].addEventListener('click',jarclick(i,jarpro[i],is_normal),false);
};


//表單驗證
// var f_btn = document.querySelector('f_btn');
// f_btn.addEventListener('click',function(){
//     let f_name = document.querySelector('.f_name');
//     alert(f_name);
    // let f_phone = document.querySelector('.f_phone');

    // let send_data = true;

    // if(f_name.value == ''){ //沒填
    //     f_name.classList.add('-error');
    //     send_data = false;
    // }else{
    //     f_name.classList.remove('-error');
    // };

// },false);



/* -------------------------- 商品頁果醬_甜度篩選器 ---------------------------------*/

var sugerArray =[
    3,//草莓
    1,//百香果
	2,//蘋果
	4,//紅龍果
    5,//芭樂
	1,//奇異果
	2,//藍莓
    2,//芒果鳳梨
	3,//桑椹
	2,//橘子
    5,//玫瑰荔枝
	3,//水蜜桃
];

var sugerSelect = 0;
function jamSelect(){
    let sweet = document.querySelectorAll(".sweet");
    for (let i = 0 ; i < sweet.length ; i++){
        if(sugerSelect!=0){
            if(sugerArray[i]==sugerSelect){
                sweet[i].classList.remove('-this_one');
            }else{
                sweet[i].classList.add('-this_one');
            }
        }
        else{
            sweet[i].classList.remove('-this_one');
        }
    }
};

//方糖1
var suger1 = document.getElementById('suger1');
if(suger1)
suger1.addEventListener('click',function(){
    if(suger1.classList.contains("sel4")){
        suger1.classList.remove('sel4');
    }else{
        suger1.classList.add('sel4');
    };

    if(sugerSelect!=1){
        sugerSelect = 1;
        buttonfilter();
    }else{
        sugerSelect = 0;
    };

    jamSelect();
},false);

//方糖2
var suger2 = document.getElementById('suger2');
if(suger2)
suger2.addEventListener('click',function(){
    if(suger2.classList.contains("sel4")){
        suger2.classList.remove('sel4');
    }else{
        suger2.classList.add('sel4');
    };

    if(sugerSelect!=2){
        sugerSelect = 2;
        buttonfilter();
    }else{
        sugerSelect = 1;
    };
    jamSelect();
},false);

//方糖3
var suger3 = document.getElementById('suger3');
if(suger3)
suger3.addEventListener('click',function(){
    if(suger3.classList.contains("sel4")){
        suger3.classList.remove('sel4');
    }else{
        suger3.classList.add('sel4');
    };

    if(sugerSelect!=3){
        sugerSelect = 3;
        buttonfilter();
    }else{
        sugerSelect = 2;
    };
    jamSelect();
},false);

//方糖4
var suger4 = document.getElementById('suger4');
if(suger4)
suger4.addEventListener('click',function(){
    if(suger4.classList.contains("sel4")){
        suger4.classList.remove('sel4');
    }else{
        suger4.classList.add('sel4');
    };

    if(sugerSelect!=4){
        sugerSelect = 4;
        buttonfilter();
    }else{
        sugerSelect = 3;
    };
    jamSelect();
},false);

//方糖5
var suger5 = document.getElementById('suger5');
if(suger5)
suger5.addEventListener('click',function(){
    if(suger5.classList.contains("sel4")){
        suger5.classList.remove('sel4');
    }else{
        suger5.classList.add('sel4');
    };

    if(sugerSelect!=5){
        sugerSelect = 5;
        
    }else{
        sugerSelect = 4;
    };
    buttonfilter();
    jamSelect();
},false);

//方糖減減
var suger_off = document.getElementById('suger_off');
if(suger_off)
suger_off.addEventListener('click',function(){
    if(sugerSelect > 0 ){
        sugerSelect-- //sugerSelect = sugerSelect - 1
    };
    buttonfilter();
    jamSelect();
},false);

//方糖加加
var suger_add = document.getElementById('suger_add');
if(suger_add)
suger_add.addEventListener('click',function(){
    if(sugerSelect < 5){
        sugerSelect++ //sugerSelect = sugerSelect + 1
    };

    buttonfilter();
    jamSelect();
},false);

//方糖全部
var suger_all = document.getElementsByClassName('select_all')[0];
if(suger_all)
suger_all.addEventListener('click',function(){
    sugerSelect = 0;
    buttonfilter();
    jamSelect();
},false);

var buttonarray=[suger1,suger2,suger3,suger4,suger5];
function buttonfilter()
{
    for(let i=0; i<buttonarray.length; ++i){
        if( i <= sugerSelect - 1 ){
            if(buttonarray[i].classList.contains("sel4")){
                buttonarray[i].classList.remove('sel4');
            };
        }else{     
                buttonarray[i].classList.add('sel4');       
        }
    }
};


//果醬light box
var jampro =[
	{
		season:'12月中〜4月初',
		name:'草莓果醬',
		fruit:'strabarry',
		loc:'<span>from</span><br>苗栗縣',
		img:'img/jam_pro_1.png',
		location:'四湖觀光果園',
		in:'草莓、白砂糖、檸檬、天然果膠',
		price:'<b class="red">優惠價＄250元</b> <strike class="nprice">$280</strike>'

	},
	{
		season:'6月初〜12月',
		name:'百香果果醬',
		fruit:'passionfruit',
		loc:'<span>from</span><br>南投縣',
		img:'img/jam_pro_2.png',
		location:'詹家果の王百香果',
		in:'百香果、白砂糖、檸檬、天然果膠',
		price:'售價＄220元'

	},
	{
		season:'11月〜2月中',
		name:'蘋果萊姆果醬',
		fruit:'apple',
		loc:'<span>from</span><br>台中市',
		img:'img/jam_pro_12.png',
		location:'福壽山農場',
		in:'蘋果、萊姆、白砂糖、檸檬、天然果膠',
		price:'售價＄220元'

	},
	{
		season:'6月〜11月初',
		name:'紅龍果果醬',
		fruit:'dragonfruit',
		loc:'<span>from</span><br>彰化縣',
		img:'img/jam_pro_13.png',
		location:'富田所農園',
		in:'紅龍果、白砂糖、檸檬、天然果膠',
		price:'售價＄180元'

	},
	{
		season:'7月中〜4月初',
		name:'芭樂牛奶果醬',
		fruit:'guava x milk',
		loc:'<span>from</span><br>彰化縣',
		img:'img/jam_pro_3.png',
		location:'花田芭樂農場',
		in:'芭樂、牛奶、白砂糖、檸檬、天然果膠',
		price:'售價＄250元'

	},
	{
		season:'6月初〜11月',
		name:'奇異果果醬',
		fruit:'kiwi',
		loc:'<span>from</span><br>台中縣',
		img:'img/jam_pro_4.png',
		location:'悠活農場',
		in:'奇異果、白砂糖、檸檬、天然果膠',
		price:'售價＄240元'

	},
	{
		season:'5月中〜10月中',
		name:'藍莓果醬',
		fruit:'bluebarry',
		loc:'<span>from</span><br>新竹縣',
		img:'img/jam_pro_9.png',
		location:'雪霸農場',
		in:'藍莓、白砂糖、檸檬、天然果膠',
		price:'售價＄250元'

	},
	{
		season:'5月初〜8月',
		name:'芒果鳳梨果醬',
		fruit:'mango',
		loc:'<span>from</span><br>台南市',
		img:'img/jam_pro_10.png',
		location:'小崇芒果園',
		in:'芒果、鳳梨、白砂糖、檸檬、天然果膠',
		price:'售價＄270元'

	},
	{
		season:'4月中〜6月',
		name:'桑椹果醬',
		fruit:'mulbarry',
		loc:'<span>from</span><br>雲林縣',
		img:'img/jam_pro_8.png',
		location:'水林伯桑椹農園',
		in:'桑椹、白砂糖、檸檬、天然果膠',
		price:'售價＄250元'

	},
	{
		season:'10月〜2月中',
		name:'蘋果柑橘果醬',
		fruit:'orange',
		loc:'<span>from</span><br>南投縣',
		img:'img/jam_pro_7.png',
		location:'松之果中寮柑橘園',
		in:'蘋果、柑橘、白砂糖、檸檬、天然果膠',
		price:'售價＄250元'

	},
	{
		season:'4月〜8月初',
		name:'玫瑰荔枝果醬',
		fruit:'litchi',
		loc:'<span>from</span><br>高雄市',
		img:'img/jam_pro_5.png',
		location:'芳境農場',
		in:'荔枝、白砂糖、檸檬、天然果膠',
		price:'售價＄220元'

	},
	{
		season:'5月中〜9月',
		name:'水蜜桃果醬',
		fruit:'peach',
		loc:'<span>from</span><br>桃園縣',
		img:'img/jam_pro_14.png',
		location:'拉拉山-周家農場',
		in:'水蜜桃、白砂糖、檸檬、天然果膠',
		price:'售價＄280元'

	}
	
];

	function boxclick(item){
		return function(){
			let jam1 = document.querySelector('#jam1');
			document.getElementById('jam1').style.display = 'flex';
			document.getElementById('season').innerText = item.season;
			document.getElementById('name').innerText = item.name;
			document.getElementById('fruit').innerText = item.fruit;
			document.getElementById('loc').innerHTML = item.loc;
			document.getElementById('img').src = item.img;
			document.getElementById('location').innerText = item.location;
			document.getElementById('in').innerText = item.in;
			document.getElementById('price').innerHTML = item.price;
		};	
	}; 

	function boxclose(){
		let modal_close = document.querySelector('.product_jam_outter');
		modal_close.style.display = 'none';
	};

	var boxs = document.querySelectorAll('.items li');
		for( let i=0 ; i<boxs.length ;i++){
			boxs[i].addEventListener('click',boxclick(jampro[i]),false);
		};

    var close = document.querySelector('.close');
    if(close)
    close.addEventListener('click',boxclose,false);
    


/* -------------------------- tweenmax ---------------------------------*/

    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();
    tl.to('.icon_say', .5 ,{
        x : -65,  
        rotation : -30 
    }).to('.icon_say p', .5 ,{
        opacity : 1,
    }).to('.icon_say p', .5 ,{
        // x : 5,  
        // y : -15
        // yoyo : true,
        // repeat :-1
    })
    
    new ScrollMagic.Scene({
        triggerElement: '#trigger01', //觸發點
        offset: 150
    }).setTween(tl) //動畫
    // .addIndicators({ //上傳前可以註解
    //     name: 'key01',
    //     colorStart: '#f20'
    // })
    .addTo(controller)
    
    
    
    
    
    var controller2 = new ScrollMagic.Controller();
    
    var tl2 = new TimelineMax();
    tl2.to('.say_choose', 1.2 ,{
        y : -50,
        ease : Bounce.easeOut
     }).to('.say_choose p', .5 ,{
        opacity : 1
     })
    
    new ScrollMagic.Scene({
        triggerElement: '#trigger02', //觸發點
        offset: -100
    }).setTween(tl2) //動畫
    // .addIndicators({
    //     name: 'key02',
    //     colorStart: '#f20'
    // })
    .addTo(controller2)
    
    
    
    
    var tl_go = new ScrollMagic.Controller();
    var gotop = new TimelineMax();
    gotop.to('.gotop', 1.2 ,{
       y : -83,
       ease : Bounce.easeOut
    }).to('.gotop .top_arrow,.gotop p', .5 ,{
        delay : .5,
        y : -10,
        yoyo : true,
        repeat :-1,
     })
    
    new ScrollMagic.Scene({
        triggerElement: '#trigger_gotop', //觸發點
        offset: 300,
        
    }).setTween(gotop) //動畫
    // .addIndicators({
    //     name: 'key_gotop',
    // })
    .addTo(tl_go)
    
















