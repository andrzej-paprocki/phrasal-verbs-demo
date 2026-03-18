var id = 0; 
        function writeTagsQuestion(textOfQuestion) 
        {
            document.write("<li>");
            document.write("<span class='text_inside_li'>" + textOfQuestion);
            document.write("</span><br/>");
            
            document.write("</li>"); 
            document.write("<script> writeTagsAnswer(++id);" + "</" + "script>");
        }