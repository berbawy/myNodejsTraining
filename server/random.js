var Random = Math.floor(Math.random() * 100);
if (Random <= 50){
    console.log(Random + "%");
    console.log("غير قابة للاكل");
}else if(Random <= 65 && Random > 50 ){
    console.log(Random + "%");
    console.log("قابلة للاكل مع توخي الحذر والاستعداد لاي حالات طارئة");
}
else if(Random <= 80 && Random > 65){
    console.log(Random + "%");
    console.log("قابلة للاكل ولكن ينصح باستخدام الكثير من الليمون")
}else {
    console.log(Random + "%");
    console.log('فسيخة ممتازة"نادرة"');
}