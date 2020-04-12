<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="text/html" href="/hi.txt" >
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style> 

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>


</head>

<body>
<div>
    <h1 id="content"></h1>
    <h3 id="detail"></h3>
    <button id="A" onclick="next('A')">  </button>
    <button id="B" onclick="next('B')">  </button>
    <button id="C" onclick="next('C')">  </button>
    <button id="D" onclick="next('D')">  </button>
</div>

<div>
    <h1 id="report"></h1>
</div>




    <script>
        var basicQ = {};
        var common = {};
        // init.then( () => {
        //     $("#content").append()


            console.log("this is basic")
            console.log(basicQ)
        // })

        $(document).ready( function () {
            $.ajax({
                type: "GET", //傳送方式
                url: "/question/basic", //傳送目的地
                success: function(basic) {
                    console.log("basic")
                    console.log(basic)
                    basicQ = basic;

                    $("#content").text(basicQ[0].content);
                    $("#A").text(basicQ[0].description.A);
                    $("#B").text(basicQ[0].description.B);
                    $("#C").hide();
                    $("#D").hide();
                },
                error: function(jqXHR) {
                    console.log("Unknown error basic question!")
                }
            });
        });

        function next( options ) {
            $("#report").text(
                "用戶的資料" +
                $("#" + options ).text()
            )
            



        }


        
        
        
        
        


       





















        $.ajax({
            type: "GET", //傳送方式
            url: "/question/common", //傳送目的地
            success: function(common) {
                console.log("common")
                console.log(common)
            },
            error: function(jqXHR) {
                console.log("Unknown error common question!")
            }
        });



    </script>



    










</body>
</html>
