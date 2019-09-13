$(document).ready(function () {
    //Variables
    var winCounter = 0;
    var loseCounter = 0;
    var score = 0;

    var numGen = Math.floor((Math.random() * (120 - 20)) + 20);

    var mindStone = Math.floor((Math.random() * (2)) + 1); //1-2
    var realityStone = Math.floor((Math.random() * (5 - 2) + 3)); //3-5
    var soulStone = Math.floor((Math.random() * (8 - 5)) + 6);//6-8
    var spaceStone = Math.floor((Math.random() * (12 - 10)) + 9);//9-10
    var timeStone = Math.floor((Math.random() * (13 - 11)) + 11);//11-12
    var powerStone = Math.floor((Math.random() * (16 - 13)) + 13);//13-15

    console.log(mindStone);
    console.log(realityStone);
    console.log(soulStone);
    console.log(spaceStone);
    console.log(timeStone);
    console.log(powerStone);








    var mind = $("#mind").attr("stoneValue", mindStone);
    // $("#mind").attr("stoneValue",mindStone);

    var reality = $("#reality").attr("stoneValue", realityStone);
    // $("#reality").attr("stoneValue",realityStone);

    var soul = $("#soul").attr("stoneValue", soulStone);
    // $("#soul").attr("stoneValue",soulStone);

    var space = $("#space").attr("stoneValue", spaceStone);
    // $("#space").attr("stoneValue",spaceStone);

    var time = $("#time").attr("stoneValue", timeStone);
    // $("#time").attr("stoneValue",timeStone);

    var power = $("#power").attr("stoneValue", powerStone);
    // $("#power").attr("stoneValue",powerStone);


    var mind = parseInt(mindStone);
    var reality = parseInt(realityStone);
    var soul = parseInt(soulStone);
    var space = parseInt(spaceStone);
    var time = parseInt(timeStone);
    var power = parseInt(powerStone);






    $("#mind").on("click", function () {




        score = score + mind
        console.log("1");
        console.log(mind);
        $("#score").text(score);

        if (score > numGen) {


            alert("You lose");
            loseCounter++;



        }
        else if (score === numGen) {
            alert("You win");
            winCounter++;



        }



        //win Counter updated 
        $("#wins").text(winCounter);




        //lose counter updated
        $("#loses").text(loseCounter);




    })




    $("#reality").on("click", function () {





        score += reality;
        console.log("2");
        console.log(reality);
        $("#score").text(score);

        if (score > numGen) {


            alert("You lose");
            loseCounter++;



        }
        else if (score === numGen) {
            alert("You win");
            winCounter++;



        }



        //win Counter updated 
        $("#wins").text(winCounter);




        //lose counter updated
        $("#loses").text(loseCounter);





    })

    $("#soul").on("click", function () {



        score += soul;
        console.log("3");
        console.log(soul);
        $("#score").text(score);

        if (score > numGen) {


            alert("You lose");
            loseCounter++;



        }
        else if (score === numGen) {
            alert("You win");
            winCounter++;



        }



        //win Counter updated 
        $("#wins").text(winCounter);




        //lose counter updated
        $("#loses").text(loseCounter);

    })

    $("#space").on("click", function () {



        score += space;
        console.log("4");
        console.log(space);
        $("#score").text(score);

        if (score > numGen) {


            alert("You lose");
            loseCounter++;



        }
        else if (score === numGen) {
            alert("You win");
            winCounter++;



        }



        //win Counter updated 
        $("#wins").text(winCounter);




        //lose counter updated
        $("#loses").text(loseCounter);


    })

    $("#time").on("click", function () {


        score += time;
        console.log("5");
        console.log(time);
        $("#score").text(score);

        if (score > numGen) {


            alert("You lose");
            loseCounter++;



        }
        else if (score === numGen) {
            alert("You win");
            winCounter++;



        }




        //win Counter updated 
        $("#wins").text(winCounter);




        //lose counter updated
        $("#loses").text(loseCounter);



    })

    $("#power").on("click", function () {




        score += power;
        console.log("6");
        console.log(power);
        $("#score").text(score);

        if (score > numGen) {

            alert("You lose");
            loseCounter++;



        }
        else if (score === numGen) {
            alert("You win");
            winCounter++;



        }




        //win Counter updated 
        $("#wins").text(winCounter);




        //lose counter updated
        $("#loses").text(loseCounter);





    })



    $("#reset").on("click", function () {

        score = 0;

        numGen = Math.floor((Math.random() * (120 - 20)) + 20);

        mindStone = Math.floor((Math.random() * (2)) + 1); //1-2
        realityStone = Math.floor((Math.random() * (5 - 2) + 3)); //3-5
        soulStone = Math.floor((Math.random() * (8 - 5)) + 6);//6-8
        spaceStone = Math.floor((Math.random() * (12 - 10)) + 9);//9-10
        timeStone = Math.floor((Math.random() * (13 - 11)) + 11);//11-12
        powerStone = Math.floor((Math.random() * (16 - 13)) + 13);//13-15

        mind = $("#mind").attr("stoneValue", mindStone);
        // $("#mind").attr("stoneValue",mindStone);

        reality = $("#reality").attr("stoneValue", realityStone);
        // $("#reality").attr("stoneValue",realityStone);

        soul = $("#soul").attr("stoneValue", soulStone);
        // $("#soul").attr("stoneValue",soulStone);

        space = $("#space").attr("stoneValue", spaceStone);
        // $("#space").attr("stoneValue",spaceStone);

        time = $("#time").attr("stoneValue", timeStone);
        // $("#time").attr("stoneValue",timeStone);

        power = $("#power").attr("stoneValue", powerStone);
        // $("#power").attr("stoneValue",powerStone);


        mind = parseInt(mindStone);
        reality = parseInt(realityStone);
        soul = parseInt(soulStone);
        space = parseInt(spaceStone);
        time = parseInt(timeStone);
        power = parseInt(powerStone);


        $("#randomNum").text(numGen);
        $("#score").text(score);
    });





    // if ($("#score") > $("#randonNum")) {

    //     console.log("hi")
    //     alert("You lose");
    //     loseCounter++;



    // }



    // if (score > numGen) {

    //     console.log("hi")
    //     alert("You lose");
    //     loseCounter++;


    // }















    //Random Number Generated
    $("#randomNum").text(numGen);



    //Score 
    // $("#score").text(score);






    //win Counter updated 
    $("#wins").text(winCounter);




    //lose counter updated
    $("#loses").text(loseCounter);











});