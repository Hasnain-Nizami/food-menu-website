////////////////////////////////////menu buttons///////////////////////////////////////

menuBtns = ["All", "Broast", "Burgers", "Pizza", "Bar.b.q", "Rolls", "Drinks",];

var navBtns = document.querySelector(".nav");

var navButtonContent = [];

menuBtns.forEach((btns) => {

    // console.log(btns)

    let categorbutton = `<ul> <li onclick="findcategory('${btns}')">${btns}</li></ul>`

    navButtonContent.push(categorbutton)

    // console.log(navButtonContent)
})
navBtns.innerHTML = navButtonContent.join("")

//////////////////////////////menu list//////////////////////////////////////////////

const menuitem = [
    {
        id: 1,
        category: "Bar.b.q",
        image: "./pic/chicken skewers with hoisin sauce.jpg",
        itemName: "Chicken Skewers Sauce",
        price: "RS 400",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 2,
        category: "Bar.b.q",
        image: "./pic/beer can chicken.jpg",
        itemName: "Beer Can Chicken",
        price: "RS 1000",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 3,
        category: "Broast",
        image: "./pic/broast qtr.jpg",
        itemName: "Broast qtr",
        price: "RS 500",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 4,
        category: "Broast",
        image: "pic/Broasted-Spicy.jpg",
        itemName: "Broasted-Spicy",
        price: "RS 700",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 5,
        category: "Rolls",
        image: "./pic/chicke mayo garlic.jpeg",
        itemName: "Chicken Mayo Garlic",
        price: "RS 150",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 6,
        category: "Rolls",
        image: "./pic/chicken roll.jpg",
        itemName: "Chicken Roll",
        price: "RS 120",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 7,
        category: "Burgers",
        image: "./pic/Crispy-Chicken-Burger-.jpg",
        itemName: "Crispy Chicken Burger",
        price: "RS 400",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 8,
        category: "Burgers",
        image: "./pic/crispy-zinger-burger_.jpg",
        itemName: "crispy zinger burger",
        price: "RS 500",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 9,
        category: "Drinks",
        image: "./pic/dew.png",
        itemName: "Dew",
        price: "RS 120",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 10,
        category: "Drinks",
        image: "./pic/falooda.jpg",
        itemName: "Falooda",
        price: "RS 300",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 11,
        category: "Broast",
        image: "./pic/full broast chicke.jpg",
        itemName: "Full Broast Chicken",
        price: "RS 900",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 12,
        category: "Bar.b.q",
        image: "./pic/garlic flap steaks.jpg",
        itemName: "Garlic Flap Steaks",
        price: "RS 1450",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 13,
        category: "Burgers",
        image: "./pic/HOB – House of Burgers..jpg",
        itemName: "HOB House of Burger",
        price: "RS 600",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 14,
        category: "Burgers",
        image: "./pic/KFC..jpg",
        itemName: "KFC",
        price: "RS 800",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 15,
        category: "Burgers",
        image: "./pic/McDonald's..png",
        itemName: "McDonald",
        price: "RS 1000",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 16,
        category: "Pizza",
        image: "./pic/New-York-Style-Pizza_EXPS_FT20_105578_F_1217_1.jpg",
        itemName: "New York Style Pizza",
        price: "RS 1200",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 17,
        category: "Burgers",
        image: "./pic/oh my grill.jpg",
        itemName: "oh my grill",
        price: "RS 700",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 18,
        category: "Drinks",
        image: "./pic/pepsi.png",
        itemName: "Pepsi",
        price: "RS 100",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 19,
        category: "Bar.b.q",
        image: "./pic/rehmi kabab.jpg",
        itemName: "Reshmi kabab",
        price: "RS 500",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 20,
        category: "Rolls",
        image: "./pic/seekh kabab rool.jpg",
        itemName: "Seekh kabab roll",
        price: "RS 250",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 21,
        category: "Drinks",
        image: "./pic/Shahi-Lassi-.jpg",
        itemName: "Shahi Lassi",
        price: "RS 300",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 22,
        category: "Drinks",
        image: "./pic/sting.jpg",
        itemName: "string",
        price: "RS 100",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 23,
        category: "Bar.b.q",
        image: "pic/Tandoori-chicken_tikka.jpg",
        itemName: "Tandoori Tikka",
        price: "RS 500",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 24,
        category: "Burgers",
        image: "./pic/the sauce burger cafe.jpg",
        itemName: "Burger cafe",
        price: "RS 700",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 25,
        category: "Pizza",
        image: "./pic/Thin Crust Pizza..jpg",
        itemName: "Thin Crust Pizza",
        price: "RS 1000",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 26,
        category: "Pizza",
        image: "./pic/Upside down Pizza..jpg",
        itemName: "Upside down Pizza",
        price: "RS 900",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 27,
        category: "Pizza",
        image: "./pic/Wood-Fired Artisan Pizza..jpg",
        itemName: "Fired Artisan Pizza",
        price: "RS 1200",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },
    {
        id: 28,
        category: "Burgers",
        image: "./pic/zinger stacker.jpeg",
        itemName: "zinger stacker",
        price: "RS 800",
        description: "Lorem ipsum dolor sit amet reprehenderit blanditiis magnam adipisicing elit. Maxime recusandae cumque non reprehenderit blanditiis magnam recusandae cumque non reprehenderit blanditiis magnam"
    },

];

var menuContainer = document.querySelector(".itemSection");

var menuItemContainer = [];

menuitem.forEach((item) => {
    var itemlist = `<div class="menuBox">
    <div class="menuImg">
        <img src="${item.image}" alt="pic">
    </div>
    <div class="menuText">
        <div class="upperText">
            <h4>${item.itemName}</h4>
            <h5>${item.price}</h5>
        </div>
        <div class="lowerText">
            <p>${item.description}</p>
        </div>
    </div>
</div>`


    menuItemContainer.push(itemlist)

    // console.log(menuItemContainer)
})

menuContainer.innerHTML = menuItemContainer.join("")

///////////////////////category list btns////////////////////////////////

const findcategory = (find) => {

    if (find == "All") {
        menuContainer.innerHTML = menuItemContainer.join("")
    } else {
        const searchCategory = menuitem.filter((menu) => menu.category.toLowerCase() === find.toLowerCase()).map((menu) => {
            return `<div class="menuBox">
            <div class="menuImg">
                <img src="${menu.image}" alt="pic">
            </div>
            <div class="menuText">
                <div class="upperText">
                    <h4>${menu.itemName}</h4>
                    <h5>${menu.price}</h5>
                </div>
                <div class="lowerText">
                    <p>${menu.description}</p>
                </div>
            </div>
        </div>`
        })
        // console.log(searchCategory)
        menuContainer.innerHTML = searchCategory.join("")
    }
}


