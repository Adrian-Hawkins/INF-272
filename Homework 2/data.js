/*
*Adrian Hawkins
*u21669831
*/
let movies = [
    {
        id: 1,
        title: 'Spiderman',
        director: 'Sam Raimi',
        runtime: '2h 1m',
        release_year: 2002,
        description: "Peter Parker's life chanes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.",
        poster_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTb-iTrAmE_x35oWfFcFpgMbFtuG59NXUUoiOn0jMp93POq5YDH',
        cinema_number: 1,
        ticket_price: 30,
        tickets_in_cart: 0
    },
    {
        id: 2,
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        runtime: '2h 34m',
        release_year: 1994,
        description: "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals.",
        poster_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRz_2nKTNlxhVtzbh29kgL3m2ebLv3TlYyzrbyqBtEUxt6mBuZ-',
        cinema_number: 2,
        ticket_price: 25,
        tickets_in_cart: 0
    },
    {
        id: 3,
        title: 'Shrek',
        director: 'Andrew Adamnson, Vicky Jenson',
        runtime: '1h 30m',
        release_year: 2001,
        description: "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.",
        poster_url: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        cinema_number: 3,
        ticket_price: 30,
        tickets_in_cart: 0
    },
    {
        id: 4,
        title: 'Puss in Boots',
        director: 'Chris Miller',
        runtime: '1h 30m',
        release_year: 2011,
        description: "Puss teams up with his friends, Humpty Dumpty and Kitty Softpaws, in order to defeat two criminals, Jack and Jill, and retrieve the magical beans that they possess.",
        poster_url: 'https://m.media-amazon.com/images/M/MV5BMTMxMTU5MTY4MV5BMl5BanBnXkFtZTcwNzgyNjg2NQ@@._V1_.jpg',
        cinema_number: 4,
        ticket_price: 15,
        tickets_in_cart: 0
    }
];

//alert(movies[0]['title']);
//document.getElementById('main').onload = initialisePage;
function initialisePage(){
    let container = document.getElementById('movies');
    for(let i = 0; i < movies.length; i++){
        

        let main = document.createElement('div');
        main.className = "col-sm-3";

        let cin = document.createElement('div');
        cin.className = "card-header";
        cin.textContent = "Cinema " + movies[i]["cinema_number"];

        let img = document.createElement('img');
        img.className = "card-img-top img-thumbnail";
        img.src = movies[i]["poster_url"];

        let info = document.createElement('div');
        info.className = "card-body";
        //Title
        let title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = movies[i]['title'];
        //Description
        let description = document.createElement("p");
        description.className = "card-text";
        description.textContent = movies[i]["description"];
        //Price
        let price = document.createElement("h5");
        price.className = "card-title text-end";
        price.textContent = "R" + movies[i]["ticket_price"] + ",00";
        //Add elements to card body
        info.append(title, description, price);


        //First for footer
        let footer = document.createElement('div');
        footer.className = "card-header";
        //Second part for footer
        let con = document.createElement('div');
        con.className = "container";
        //Row for footer
        let btn = document.createElement('div');
        btn.className = "row";
        //button divs
        let btn1div = document.createElement('div');
        btn1div.className = "col-sm-6";
        let btn2div = document.createElement('div');
        btn2div.className = "col-sm-6";

        //Make buttons
        let btn1 = document.createElement('button');
        btn1.className = "btn btn-light border border-primary text-primary";
        btn1.type = "button";
        btn1.id = "info" + (i + 1);
        
        //btn1.onlick = "show movies"
        //Dynamically add function here when creating
        btn1.textContent = "Show Details";

        let btn2 = document.createElement('button');
        btn2.className = "btn btn-success";
        btn2.type = "button";
        btn2.id = i + 1;
        //btn1.onlick = "show movies"
        //Dynamically add function here when creating
        btn2.textContent = "BOOK TICKET";

        //Add buttons
        btn1div.append(btn1);
        btn2div.append(btn2);

        btn.append(btn1div, btn2div);

        con.append(btn);

        footer.append(con);

        main.append(cin, img, info, footer);

        container.append(main);
    }

    let c = document.getElementById('ticket');

    document.getElementById('1').onclick = function() { bookTicket(0); };
    document.getElementById('2').onclick = function() { bookTicket(1); };
    document.getElementById('3').onclick = function() { bookTicket(2); };
    document.getElementById('4').onclick = function() { bookTicket(3); };

    let shoppingCart = 0;
    for(let i = 0; i < 4; i++){
        let beans = localStorage.getItem(i);
        if(beans != null)
            shoppingCart += parseInt(beans);
        
    }
    c.innerHTML = shoppingCart;

    function moviesInCart(){
        //localStorage.setItem('moviesInCart', parseInt(c.innerHTML));
        let movieCount = 0;
        for(let i = 0; i < 4; i++){
            if(localStorage.getItem(i) != null && localStorage.getItem(i) != 0)
                movieCount++;
        }
        localStorage.setItem('moviesInCart', movieCount);
    }

    function numberInCart(){
        localStorage.setItem('numberInCart', parseInt(c.innerHTML));
    }

    function totalCost(){
        let totalCost = 0;
        for(let i = 0; i < 4; i++){
            if(localStorage.getItem(i) != null){
                let c = localStorage.getItem(i);
                totalCost += parseInt(c) * movies[i]['ticket_price'];
            }
        }
        localStorage.setItem('totalCost', totalCost);
    }

    function bookTicket(e){
        movies[e]['tickets_in_cart'] += 1;
        let ticketCount = localStorage.getItem(e);
        if(ticketCount == null)
            localStorage.setItem(e, 1);
        else
            localStorage.setItem(e, parseInt(ticketCount) + 1);
        c.innerHTML = parseInt(c.innerHTML) + 1;
        moviesInCart();
        numberInCart();
        totalCost();
    }

    for(let i = 1; i < 5; i++){
        let str = "info" + i;
        document.getElementById(str).setAttribute('data-toggle', 'modal');
        document.getElementById(str).setAttribute('data-target', '#myModal');
        document.getElementById(str).onclick = function() { updateDetails(i - 1) };
    }

    function updateDetails(e){
        document.getElementById("movieTitle").innerHTML = movies[e]['title'];
        document.getElementById("dTitle").innerHTML = movies[e]['title'];
        document.getElementById("dDirector").innerHTML = movies[e]['director'];
        document.getElementById("dRelease").innerHTML = movies[e]['release_year'];
        document.getElementById("dRuntime").innerHTML = movies[e]['runtime'];
    }

}


function initialisePage2(){
    let c = document.getElementById('ticket');
    function shoppingCartInit(){
        let shoppingCart = 0;
        for(let i = 0; i < 4; i++){
            let beans = localStorage.getItem(i);
            if(beans != null)
                shoppingCart += parseInt(beans);   
        }
        c.innerHTML = shoppingCart;
    }

    let mainBody = document.getElementById("tbody");
    function setupTable(){
        shoppingCartInit();
        mainBody.innerHTML = "";
        let total = 0;
        for(let i = 0; i < 4; i++){
            let current = localStorage.getItem(i);
            if(current != null && current > 0){
                let tableRow = document.createElement('tr');

                //movie title
                let movieT = document.createElement('td');
                movieT.innerHTML = '<i id=remove' + i + ' class="fa-solid fa-circle-xmark text-danger"></i>' + movies[i]['title'];
                
                //Unit price
                let movieUnit = document.createElement('td');
                movieUnit.innerHTML = movies[i]['ticket_price'];

                //Amount of tickets
                let movieQuantity = document.createElement('td');
                movieQuantity.innerHTML = '<i id=reduce' + i + ' class="fa-solid fa-circle-arrow-left text-info"></i>' + current + '<i id=add' + i + ' class="fa-solid fa-circle-arrow-right text-info"></i>';

                //Calculate total cost of tickets
                let movieCost = document.createElement('td');
                movieCost.innerHTML = 'R' + (current*movies[i]['ticket_price']) +',00';

                total += current * movies[i]['ticket_price'];

                tableRow.append(movieT, movieUnit, movieQuantity,movieCost);
                mainBody.appendChild(tableRow);
                
            }
            
        }
        document.getElementById('overallCost').innerHTML = 'R' + total + ',00';
        if(total == 0){
            document.getElementById('tbody').innerHTML = '<h4>No movies in your cart</h4>';
        }
        addFunctionality();
    }

    setupTable();

    function moviesInCart(){
        //localStorage.setItem('moviesInCart', parseInt(c.innerHTML));
        let movieCount = 0;
        for(let i = 0; i < 4; i++){
            if(localStorage.getItem(i) != null && localStorage.getItem(i) != 0)
                movieCount++;
        }
        localStorage.setItem('moviesInCart', movieCount);
    }

    function numberInCart(){
        localStorage.setItem('numberInCart', parseInt(c.innerHTML));
    }

    function totalCost(){
        let totalCost = 0;
        for(let i = 0; i < 4; i++){
            if(localStorage.getItem(i) != null){
                let c = localStorage.getItem(i);
                totalCost += parseInt(c) * movies[i]['ticket_price'];
            }
        }
        localStorage.setItem('totalCost', totalCost);
    }

    function removeMovie(e){
        localStorage.setItem(e, 0);
        setupTable();
        numberInCart();
        totalCost();
        moviesInCart();
    }

    function addTicket(e){
        let current = localStorage.getItem(e);
        localStorage.setItem(e, (parseInt(current) + 1));
        setupTable();
        numberInCart();
        totalCost();
        moviesInCart();
    }

    function removeTicket(e){
        let current = localStorage.getItem(e);
        if(current == 1){
            removeMovie(e);
        }
        else{
            localStorage.setItem(e, (parseInt(current) - 1));
            setupTable();
            numberInCart();
            totalCost();
            moviesInCart();
        }

    }

    function addFunctionality(){
        for(let i = 0; i < 4; i++){
            let current = localStorage.getItem(i);
            if(current != null && current > 0){
                let str = 'remove'+i;

                let reduce = 'reduce'+i;
                let add = 'add'+i;

                document.getElementById(str).onclick = function(){ removeMovie(i) };
                document.getElementById(reduce).onclick = function(){ removeTicket(i)};
                document.getElementById(add).onclick = function(){ addTicket(i) };
            }
        }
    }

    
}

