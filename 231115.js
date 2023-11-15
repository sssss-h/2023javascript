<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jQuery.com/jquery-3.4.1.js"></script>
    <script>
        window.onload = function () {
            var clock = document.getElementById('clock');
            setInterval(function () {
                var now = new Date();
                clock.innerHTML = now.toString();
            }, 1000);
        };

        $(document).ready(function () {
            $('#bbb').css('color', 'pink');
            $('#ccc').css('background', 'lightblue');
        });

        $(document).ready(function () {
            $('.box').css('float', 'left');
            $('.box').css('margin', 10);
            $('.box').css('width', 100);
            $('.box').css('height', 100);
            $('.box').css('backgroundColor', 'yellow');
        });

        $(document).ready(function () {
            $('#box').hover(function () {.
                $('#box').addClass('hover');
            }, function () {
                $('#box').removeClass('hover');
            });
        });

        $(document).ready(function () {
            $('h2').hover(function () {
                $(this).css({
                    background: 'red',
                    color: 'white'
                });
            }, function () {
                $(this).css({
                    background: '',
                    color: ''
                });
            });
        });

        $(document).ready(function () {
            $('button').click(function () {
                $('.page').fadeToggle('slow');
            });
        });
    </script>
</head>
<body>
    <button>Toggle Show</button>
    <div class="page">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    
    <h2>Click !</h2>

    <div id="box"></div>

    <h1 id="clock"></h1>

    <h1>Header</h1>
    <h1 id="bbb">Header</h1>
    <h1 id="ccc">Header</h1>

    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</body>
</html>
