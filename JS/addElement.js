interests_value = 1;
character_value = 1;
experience_value = 1;
education_value = 1; //uczelnia
education_value2 = 1; //szkola
language_value = 2; 
knowhow_value = 1;


$('#interestsButton').click(function() {

    if(interests_value>14)
        return;
    var klonuj = $('#interestsElement:first').clone(); 
    klonuj.find('input').val('');
    klonuj.appendTo('#newInterestsElement');
    interests_value+=1;

});

$('#characterButton').click(function() {
    
        if(character_value>8)
            return;
        var klonuj = $('#characterElement:first').clone(); 
        klonuj.find('input').val(''); 
        klonuj.appendTo('#newCharacterElement');
        character_value+=1;
    
    });


$('#languageButton').click(function() {

    if(language_value>7)
        return;
    var klonuj = $('#languageElement:first').clone(); 
    klonuj.find('input').val(''); 
    klonuj.appendTo('#newLanguageElement');
    language_value+=1;
});


$('#languageButton2').click(function() {
    
    if(language_value>7)
        return;
    var klonuj = $('#languageElement2:first').clone(); 
    klonuj.find('input').val(''); 
    klonuj.appendTo('#newLanguageElement2');
    language_value+=1;

});

$('#experienceButton').click(function() {

    if(experience_value>4)
        return;

    var img = $('<img />', { 
        src: 'photo/shortLine.png',
        width: '250px'
        });
        img.appendTo($('#newExperienceElement'));

    var klonuj = $('#experienceElement:first').clone(); 
    klonuj.find('input').val(''); 
    klonuj.appendTo('#newExperienceElement');
    experience_value = experience_value+1;
    
});

$('#educationButton').click(function() {

    if(education_value>1)
        return;

    var klonuj = $('#educationElement:first').clone(); 
    klonuj.find('input').val(''); 
    klonuj.appendTo('#newEducationElement');
    education_value += 1;
    
});

$('#educationButton2').click(function() { //szkola

    if(education_value2>1)
        return;

    var klonuj = $('#educationElement2:first').clone(); 
    klonuj.find('input').val(''); 
    klonuj.appendTo('#newEducationElement2');
    education_value2 += 1;
    
});

$('#knowhowButton').click(function() {
    
        if(knowhow_value>3)
            return;
    
        var klonuj = $('#knowhowElement2:first').clone(); 
        klonuj.find('input').val(''); 
        klonuj.appendTo('#newKnowhowElement2');
        knowhow_value+=1;
        
    });