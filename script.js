
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],root=document.documentElement;
const icons=()=>lucide.createIcons();icons();
 
// ===== Theme =====
$('#theme').onclick=()=>{const l=root.dataset.theme==='dark';root.dataset.theme=l?'light':'dark';$('#theme').innerHTML=`<i data-lucide="${l?'moon':'sun'}"></i>`;icons()};
 
// ===== Language EN <-> AR (edit Arabic text below) =====
const AR={n_home:'الرئيسية',n_about:'من أنا',n_skills:'المهارات',n_proj:'المشاريع',n_edu:'التعليم والشهادات',n_contact:'تواصل معي',nm:'فاطمة <span>عصام عبدالحكم</span>',
hi:'السلام عليكم, أنا',lead:'بعمل مواقع نظيفة وسريعة الاستجابة، وبتطور لأكون مطورة Full Stack .NET، مشروع ورا مشروع.',cv:'تحميل السيرة الذاتية',cm:'تواصل معي',
t_about:'من أنا',a1:'أنا طالبة علوم حاسب شغوفة بتحويل الأفكار لمواقع حقيقية وتفاعلية. رحلتي بدأت بفضول لمعرفة إزاي المواقع بتشتغل، وبعدها بقت شغف حقيقي بتطوير الويب. بحب أبني تجارب نظيفة وسهلة الاستخدام، ومتحمسة دايمًا أتعلم حاجة جديدة.',
a2:'حاليًا بطوّر مهاراتي كمتدربة <b><bdi>Full Stack .NET Developer</bdi></b> باستخدام <bdi>C#, ASP.NET, SQL Server, JavaScript, HTML, CSS</bdi>. بحب حل المشكلات والشغل مع فريق وتحويل الفكرة لحاجة الناس تستخدمها فعلًا. بالنسبة لي كل مشروع مش مجرد كود، ده خطوة جديدة في رحلتي كمبرمجة.',
a3:'اللي بيميزني: بنفذ وبقود. قدت فريقين أكاديميين لمشروعين حصلوا على <bdi>A+</bdi>.',st1:'مشروعين قدت فريقهم، وكلهم <bdi>A+</bdi>',st2:'شهادات حصلت عليها',st3:'المعدل التراكمي في علوم الحاسب',
t_exp:'الخبرات',e1:'متدربة Full Stack .NET',e2:'برنامج من تسع وحدات في <bdi>C#, SQL Server, HTML/CSS/JavaScript, ASP.NET Core, MVC, Web API, Git, Unit Testing, Docker</bdi>.',e3:'شغالة على مشروع التخرج (Capstone) الخاص بالمسار.',
e4:'قائدة فريق، مشاريع أكاديمية',e5:'قدت فرق من 5 و7 أعضاء في مشروعين أكاديميين، والاتنين حصلوا على <bdi>A+</bdi>.',e6:'وزعت المهام وأدرت النقاشات وجمعت شغل كل فريق في تسليم واحد.',
t_test:'آراء العملاء',tt:'آراء العملاء وزمايلي هتظهر هنا قريبًا.',
t_skills:'مهاراتي',s_f:'مهارات الفريلانس',s_t:'المهارات التقنية',s_o:'الأدوات',
f1:'التواصل مع العملاء',f1d:'رسايل واجتماعات واضحة واحترافية',f2:'جمع المتطلبات',f2d:'تحويل الطلب لخطة واضحة ومحددة',f3:'تخطيط المشروع وبدايته',f3d:'توثيق النطاق والمراحل والمخرجات',f4:'إدارة الوقت والمواعيد',f4d:'تخطيط الشغل حسب مواعيد التسليم',f5:'قيادة الفريق',f5d:'توزيع المهام في فرق من 5 و7',f6:'حل المشكلات',f6d:'أعرف السبب الأول وبعدين أصلحه',
kh:'حاصلة على شهادة خمسات',khd:'اجتزت اختبار أساسيات العمل على خمسات، اللي بيأكد فهمي للشغل باحترافية كفريلانسر: البروفايل والعروض والتواصل والتسليم.',cc:'المفاهيم الأساسية',
t_proj:'المشاريع',psub:'شوية حاجات عملتها لحد دلوقتي، والجاي أكتر.',pt1:'قائدة فريق · مطورة ويب',pt2:'باك إند · .NET · ميني بروجيكت DEPI',
p1:'من أحب مشاريعي: موقع مطعم إيطالي متعدد الصفحات اتعمل مع فريق من خمسة. كنت مطورة الويب وقائدة الفريق: عملت الصفحة الرئيسية والنافبار والفوتر وساعدت في تنظيم مهام الفريق. كان جميل أشوف الفكرة بتكبر لموقع كامل، والـ A+ حلّت الموضوع.',
p2:'نظام إدارة مستشفى صغير (باك إند فقط) عملته أثناء تدريب DEPI. صممت أساسه بـ <bdi>C#</bdi> وبرمجة كائنية: كلاس أساسي للشخص يرثه كلاس Employee فيه الدور والمرتب وتاريخ التعيين والعنوان، باستخدام الوراثة والتغليف والدوال الافتراضية (Polymorphism)، مع عداد static لتتبع الموظفين.',
t_edu:'التعليم والشهادات',bsc:'بكالوريوس علوم الحاسب',bscd:'الجامعة المصرية للتعلم الإلكتروني (EELU) التابعة لجامعة سوهاج',yr:'السنة الثالثة',certs:'الشهادات',
c1:'أساسيات العمل على خمسات',c1d:'اجتزت اختبار خمسات في أساسيات العمل كفريلانسر على المنصة.',c2d:'مفاهيم السحابة وخدمات Azure والتسعير والأمان والامتثال.',c4s:'AI Empower Yourself من MCIT بالتعاون مع Microsoft · تقديم Fast Lane',c4d:'أنهيت كورس AI Literacy في أساسيات الذكاء الاصطناعي.',c5d:'أساسيات الشبكات ونماذج <bdi>OSI/TCP-IP</bdi> وعنونة <bdi>IP</bdi> وتقسيم الشبكات وإعداد أجهزة الشبكة.',c6s:'جامعة هارفارد عبر ITI · 120 ساعة',c6d:'أساسيات البرمجة والخوارزميات وهياكل البيانات و<bdi>SQL</bdi> بشغل عملي بلغتي <bdi>C</bdi> و<bdi>Python</bdi>.',
t_contact:'تواصل معي',csub:'متاحة للتدريب والوظائف المبتدئة والفريلانس والتعاون. ابعتلي رسالة وهرد عليك قريب.',loc:'الموقع',locv:'سوهاج، مصر',fp:'لاقيني على منصات الفريلانس',fn:'اسمك',fe:'بريدك الإلكتروني',fm:'رسالتك',send:'إرسال الرسالة',fnote:'ده هيفتح تطبيق الإيميل عندك والرسالة جاهزة للإرسال.',ft:'تصميم وتنفيذ فاطمة عصام'};
const EN={};let ar=false;$$('[data-i18n]').forEach(e=>EN[e.dataset.i18n]=e.innerHTML);
$('#lang').onclick=()=>{ar=!ar;root.lang=ar?'ar':'en';root.dir=ar?'rtl':'ltr';$('#lang').textContent=ar?'En':'Ar';
 $$('[data-i18n]').forEach(e=>e.innerHTML=(ar?AR[e.dataset.i18n]:0)||EN[e.dataset.i18n]);role()};
 
// ===== Typing role =====
let rt;function role(){clearTimeout(rt);const w=ar?['متدربة Full Stack .NET','مطورة C# و ASP.NET','بحب حل المشكلات','طالبة علوم حاسب']:['Full Stack .NET Trainee','C# & ASP.NET Developer','Problem Solver','Computer Science Student'];let i=0,j=0,d=0;
 (function t(){const s=w[i];$('#role').textContent=s.slice(0,j);if(!d&&j++==s.length){d=1;return rt=setTimeout(t,1500)}if(d&&j--==0){d=0;i=(i+1)%w.length}rt=setTimeout(t,d?35:85)})()}role();
 
// ===== Skill tabs =====
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button,.pane').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#'+b.dataset.p).classList.add('on')});
 
// ===== Contact form -> opens email app =====
$('#form').onsubmit=e=>{e.preventDefault();location.href=`mailto:fatmaesam452@gmail.com?subject=${encodeURIComponent('Portfolio message from '+$('#fname').value)}&body=${encodeURIComponent($('#fmsg').value+'\n\n'+$('#femail').value)}`};
 
// ===== Certificate lightbox =====
$$('.thumb').forEach(t=>t.onclick=()=>{$('#lb img').src=t.dataset.img;$('#lb').classList.add('on')});$('#lb').onclick=()=>$('#lb').classList.remove('on');
 
// ===== Reveal, scroll progress, active nav, back-to-top =====
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.1});$$('.reveal').forEach(e=>io.observe(e));
$('#top').onclick=()=>scrollTo({top:0});
addEventListener('scroll',()=>{$('#bar').style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%';$('#top').classList.toggle('v',scrollY>500);
 let cur='home';$$('nav a').forEach(a=>{const s=$(a.getAttribute('href'));if(s&&scrollY>=s.offsetTop-160)cur=a.getAttribute('href')});
 $$('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')===cur))});
 
// ===== Constellation background =====
const cv=$('#bg'),cx=cv.getContext('2d');let P=[];
function sz(){cv.width=innerWidth;cv.height=innerHeight;P=Array.from({length:Math.min(70,innerWidth/18|0)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}sz();addEventListener('resize',sz);
(function draw(){const c=getComputedStyle(root).getPropertyValue('--dot');cx.clearRect(0,0,cv.width,cv.height);
 P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>cv.width)p.vx*=-1;if(p.y<0||p.y>cv.height)p.vy*=-1;cx.fillStyle=`rgba(${c},.55)`;cx.beginPath();cx.arc(p.x,p.y,1.8,0,7);cx.fill();
  for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){cx.strokeStyle=`rgba(${c},${.16*(1-d/130)})`;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}});
 requestAnimationFrame(draw)})();
 
