const logo = document.querySelector('.logo-heading'); 

logo.addEventListener("click", function() { //1
 logo.style.backgroundColor = "red";
});

logo.addEventListener("dblclick", function() {  //2
    logo.style.backgroundColor = "green";
   });

const bus = document.querySelector('.intro img'); 

bus.addEventListener("mouseover", function() {  //3
    alert("help!");
   });

const image = document.querySelector('.img-content img'); 

   image.addEventListener("mouseenter", function() {  //4
       image.style.borderRadius = "0px"
      });

      image.addEventListener("dragend", function() {  //5
        image.style.borderRadius = "5px"
       });
    
    
       image.addEventListener("select", function() {  //5
        image.style.display = "none"
       });
   
const go = document.querySelector('.text-content');

      go.addEventListener("mousedown", function() {  //6
          go.textContent = "Help Me!"
      })

      go.addEventListener("copy", function() { // 7
          go.textContent = "hello mate"
      })

const destinationText = document.querySelector(".content-destination p");

      destinationText.addEventListener("mouseout", () => { //8
        destinationText.textContent = "this stuff changed!"
      });