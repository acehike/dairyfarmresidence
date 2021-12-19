Fancybox.bind(
'img[src*=".jpg"], img[src*=".jpeg"], img[src*=".png"], img[src*=".gif"]',
{
  groupAll: true,
}
);


function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}
$(function () {
 $('#whatsapp').floatingWhatsApp({
   phone: '+6592390448',
   popupMessage: 'If you are keen to find out more or to visit the showroom, please kindly drop us a message or call us at 9239 0448. (the box will direct you to WhatsApp Web)',
   position: 'right',
   showPopup: true,
   zIndex: 1
 });
});
