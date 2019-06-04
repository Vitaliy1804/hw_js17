$(document).ready(function(){
    $('#draw').click(function(){
        $('#draw').remove()
       let diameterCircle =   $('<input type="text" class="diametr-circle" placeholder="Введите диаметр круга в px">')
        let colorCircle =   $('<input type="text" class="color-circle" placeholder="Введите цвет круга">')
        let drawBtn = $('<button class="drawBtn">Нарисовать</button>');
        $('body').append(diameterCircle,colorCircle,drawBtn);
        let pixelValue = +(diameterCircle.val());
        let colorValue = colorCircle.val();
        
        drawBtn.click(function(){
            let circle = $('<div> </div>').css({backgroundColor:colorCircle.val(), 
                height: diameterCircle.val(), width: diameterCircle.val(), 
                margin:"20px auto", "border-radius": "50%"})
            $('body').append(circle)
        })
    })
})


