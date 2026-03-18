function writeTagsAnswer(id) // id = текстовая строка, например: '15'
        {
            document.writeln('<textarea rows="1" cols="52" id=input_' + id + " " + 'class="inputnew" placeholder="type your answer here please"></textarea>');
            document.writeln('<textarea readonly rows="1" class="newbutton" id=help_' + id + '>show answer</textarea>');
        }