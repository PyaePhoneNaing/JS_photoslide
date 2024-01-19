/*(function(){
    "use strict";
        const myImages = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"];
        let currentImage = 0;

        document.getElementById('next').onclick = nextPhoto;
        document.getElementById('previous').onclick = previousPhoto; 

        function nextPhoto(){
            currentImage++;
            if(currentImage > myImages.length-1){currentImage = 0;}
            document.getElementById('myimage').src = myImages[currentImage];       
        };

        function previousPhoto(){
            currentImage--;
            if(currentImage <0){currentImage = myImages.length-1}
            document.getElementById('myimage').src = myImages[currentImage];
        };
})();*/

(function(){
    "use strict";
    let currentImage = 0;
    const myPhotos = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg'];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function(event){
        event.preventDefault();

        currentImage++;
        if(currentImage > myPhotos.length-1){ currentImage =0; }

       swapImage();

    });

    prevBtn.addEventListener('click', function(event){
        event.preventDefault();

        currentImage--;
        if(currentImage < 0 ){ currentImage = myPhotos.length-1; }

        swapImage();
        
    });

    function swapImage(){
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myPhotos[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);

        if(container.children.length>2){
            container.removeChild(container.children[0]);
        };
    }
})();

