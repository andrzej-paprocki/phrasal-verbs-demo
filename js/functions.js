    function writeTagsCheckbox(argument, translate) 
    {
        document.writeln("<div><div class='checkbox'></div><p class='clickme indent'>" + argument + "</p><p class='hidden'>" + translate + "</p></div>");
    }
    
    function writeParagraph(argument)
    {
        document.writeln("<p>" + argument + "</p>");
    }