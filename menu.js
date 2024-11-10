let menus= document.querySelector("nav");
let menuBTN= document.querySelector(".menu-btn");
let closeBTN= document.querySelector(".close-btn");

menuBTN.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBTN.addEventListener("click",function(){
    menus.classList.remove("active");
});




/*Menus */
const SectionCenter=document.querySelector(".menus_items_container");
const filterBtns=document.querySelectorAll(".btn_cat");

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;

        const menuCategory = menu.filter(function(menuItem){
                return menuItem.category === category;
        });

        if(category === "all"){
            displayMenusItem(menu);
        }
        else{
            displayMenusItem(menuCategory);
        }
    })
});
const menu=[
  {
      id:1,
      title:"Fettuccine al Pomodoro",
      category: "Dinner",
      price: 18,
      img: "./imgs/menu/m1.jpeg"
  },

  {
      id:2,
      title:"Gnocchi di Patate",
      category: "Lunch",
      price: 13,
      img: "./imgs/menu/m2.jpeg"
  },

  {
      id:3,
      title:"Pizza Margherita",
      category: "Dinner",
      price: 17,
      img: "./imgs/menu/m3.jpeg"
  },

  {
      id:4,
      title:"Vitello Tonnato",
      category: "Lunch",
      price: 25,
      img: "./imgs/menu/m4.jpeg"
  },

  {
      id:5,
      title:"Tiramisu",
      category: "Dessert",
      price: 16,
      img: "./imgs/menu/m5.jpeg"
  },

  {
      id:6,
      title:"Pannacotta",
      category: "Dessert",
      price: 15,
      img: "./imgs/menu/m6.jpeg"
  },

  {
      id:7,
      title:"Spaghetti alla Carbonara",
      category: "Dinner",
      price: 17,
      img: "./imgs/menu/m7.webp"
  },

  {
      id:8,
      title:"Bistecca alla Fiorentina",
      category: "Lunch",
      price: 25,
      img: "./imgs/menu/m8.jpeg"
  },

  {
      id:9,
      title:"Baked Ziti with Sausage",
      category: "Lunch",
      price: 15,
      img: "./imgs/menu/m9.webp"
  },
  {
    id:10,
    title:"Negroni",
    category: "Drinks",
    price: 22,
    img: "./imgs/menu/m10.webp"
  },
  {
    id:11,
    title:"Aperol Spritz",
    category: "Drinks",
    price: 17,
    img: "./imgs/menu/m11.webp"
  },
  {
    id:12,
    title:"Bellini",
    category: "Drinks",
    price: 20,
    img: "./imgs/menu/m12.webp"
  },
  {
    id:13,
    title:"Cappelletti Spritz",
    category: "Drinks",
    price: 25,
    img: "./imgs/menu/m13.webp"
  },
  {
    id:14,
    title:"Seltz Limone e Sale",
    category: "Drinks",
    price: 25,
    img: "./imgs/menu/m14.webp"
  },
  {
    id:15,
    title:"Americano",
    category: "Drinks",
    price: 23,
    img: "./imgs/menu/m15.webp"
  },
  {
    id:16,
    title:"Negroni Sbagliato",
    category: "Drinks",
    price: 13,
    img: "./imgs/menu/m16.webp"
  },
  {
    id:17,
    title:"Baked Ziti with Sausage",
    category: "Dinner",
    price: 20,
    img: "./imgs/menu/m17.webp"
  },
  {
    id:18,
    title:"Baked Ziti with Sausage",
    category: "Dinner",
    price: 25,
    img: "./imgs/menu/m18.webp"
  },
  {
    id:19,
    title:"Raspberry Jam Bomboloni",
    category: "Dessert",
    price: 10,
    img: "./imgs/menu/m19.webp"
  }

]

window.addEventListener("DOMContentLoaded", function(){
  displayMenusItem(menu)
})

function displayMenusItem(menu) {
   let displayMenusItem = menu.map((item) => { 
      return ` <div class="img_cards">
       <img src="${item.img}"
        alt="${item.title}"> 
       <p class="price">Only On $${item.price}</p>
        <p>${item.title}</p> </div>`; 
    }).join(""); 
      SectionCenter.innerHTML = displayMenusItem;
 }