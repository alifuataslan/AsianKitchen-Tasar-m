const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://i.guim.co.uk/img/media/b439c06d524bbebb8794d733d892a42c80bcb502/0_884_4905_2943/master/4905.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8771c7e90ed2b8f07c1ec7b2c945cf40",
    // "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const ButonAll = `<button Onclick="allfoods()" class="px-3 btn btn-outline-dark text-center border-1 rounded  btn-item ">All</button>`;
const ButonKorea = `<button Onclick="koreafoods()" class="px-3 btn btn-outline-dark text-center border-1 rounded  btn-item ">Korea</button>`;
const ButonJapan = `<button Onclick="japanfoods()" class="px-3 btn btn-outline-dark text-center border-1 rounded  btn-item ">Japan</button>`;
const ButonChina = `<button Onclick="chinafoods()" class="px-3 btn btn-outline-dark text-center border-1 rounded  btn-item ">China</button>`;

const btnDOM = document.querySelector(".btn-container");
btnDOM.innerHTML = ButonAll + ButonKorea + ButonJapan + ButonChina;

const ContainerDOM = document.querySelector(".section-center");

menu.forEach((yemek) => {
  ContainerDOM.innerHTML += `
    <div class="col-sm-6 row  p-3 ">
    <div class="col-sm-4 photo">
        <!--img-->
        <img class="w-100 h-100" src="${yemek.img}" alt="">
    </div>
    <div class="col-sm-8">
        <div >
            <!-- title-->
            <h4 class="menu-title ">${yemek.title} <span class="mt-1">${yemek.price}</span></h4>
            <p>${yemek.desc}</p>
            
        </div>
        <div>
            <!-- Açıklama-->
        </div>
    </div>
</div>
    `;
});

function allfoods() {
  ContainerDOM.innerHTML = "";

  menu.forEach((yemek) => {
    ContainerDOM.innerHTML += `
        <div class="col-sm-6 row  p-3 ">
        <div class="col-sm-4 photo">
            <!--img-->
            <img class="w-100 h-100" src="${yemek.img}" alt="">
        </div>
        <div class="col-sm-8">
            <div >
                <!-- title-->
                <h4 class="menu-title ">${yemek.title} <span class="mt-1">${yemek.price}</span></h4>
                <p>${yemek.desc}</p>
                
            </div>
            <div>
                <!-- Açıklama-->
            </div>
        </div>
    </div>
        `;
  });
}
function koreafoods() {
  ContainerDOM.innerHTML = "";

  menu.forEach((yemek) => {
    if (yemek.category == "Korea") {
      ContainerDOM.innerHTML += `
            <div class="col-sm-6 row  p-3 ">
            <div class="col-sm-4 photo">
                <!--img-->
                <img class="w-100 h-100" src="${yemek.img}" alt="">
            </div>
            <div class="col-sm-8">
                <div >
                    <!-- title-->
                    <h4 class="menu-title ">${yemek.title} <span class="mt-1">${yemek.price}</span></h4>
                    <p>${yemek.desc}</p>
                    
                </div>
                <div>
                    <!-- Açıklama-->
                </div>
            </div>
        </div>
            `;
    }
  });
}
function japanfoods() {
    ContainerDOM.innerHTML = "";
  
    menu.forEach((yemek) => {
      if (yemek.category == "Japan") {
        ContainerDOM.innerHTML += `
              <div class="col-sm-6 row  p-3 ">
              <div class="col-sm-4 photo">
                  <!--img-->
                  <img class="w-100 h-100" src="${yemek.img}" alt="">
              </div>
              <div class="col-sm-8">
                  <div >
                      <!-- title-->
                      <h4 class="menu-title ">${yemek.title} <span class="mt-1">${yemek.price}</span></h4>
                      <p>${yemek.desc}</p>
                      
                  </div>
                  <div>
                      <!-- Açıklama-->
                  </div>
              </div>
          </div>
              `;
      }
    });
  }
  function chinafoods() {
    ContainerDOM.innerHTML = "";
  
    menu.forEach((yemek) => {
      if (yemek.category == "China") {
        ContainerDOM.innerHTML += `
              <div class="col-sm-6 row  p-3 ">
              <div class="col-sm-4 photo">
                  <!--img-->
                  <img class="w-100 h-100" src="${yemek.img}" alt="">
              </div>
              <div class="col-sm-8">
                  <div >
                      <!-- title-->
                      <h4 class="menu-title ">${yemek.title} <span class="mt-1">${yemek.price}</span></h4>
                      <p>${yemek.desc}</p>
                      
                  </div>
                  <div>
                      <!-- Açıklama-->
                  </div>
              </div>
          </div>
              `;
      }
    });
  }