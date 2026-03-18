with(document)
{
    writeln('<div class="header" id="header">');
    writeln('<div class="menu"><a href="index.html"><img src="img/menu.svg"></a></div>');
    writeln('<div class="theory" id="theory" onclick="opentheory()">theory</div>');
    writeln('<div class="exercises" id="exercises">exercises</div>');
    writeln('<a onclick="previous()"><img class="arrow" id="arrowPrev" src="img/arrow_left.svg"></a>');
    writeln('<a onclick="next()"><img class="arrow" id="arrowNext" src="img/arrow_right.svg"></a>');
    writeln('</div>');
}
