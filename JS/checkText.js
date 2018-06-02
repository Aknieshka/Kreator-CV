 imiejestwymagane = "Imię jest wymagane.";
 datajestwymagana = "Data urodzenia jest wymagana.";
 nazwiskowymagane = "Nazwisko jest wymagane.";
 miejscewymagane = "Miejsce zam. jest wymagane.";
 numerwymagany = "Numer tel. jest wymagany.";
 emailwymagany = "Email jest wymagany.";

 knowhowNameChecked = false;
 knowhowNameChecked2 = false;
 experienceSectionChecked = false; 
 educationSectionChecked = false;
 educationSectionChecked2 = false;
 interestsChecked = false;
 characterChecked = false;
 languageChecked = false;

 function templateAlert() {
  if(wybor==0)
  {
    alert("Nie wybrano szablonu!");
  }
  else if(wyborkoloru==0)
  alert("Nie wybrano koloru!");
 }
 


 function KnowhowCorrect() {
    var knowhowcheck = $("input[name='knowhowName']:checkbox");
    var knowhowcheck2 = $("input[name='knowhowName2']:checkbox");
    
    for(var i=0;i<knowhowcheck.length;i++)
    {
      if (knowhowcheck[i].checked == true)  
      {
        knowhowNameChecked = true;
      }
    }
    for(var i=0;i<knowhowcheck2.length;i++)
    {
      if (knowhowcheck2[i].checked == true)  
      {
        knowhowNameChecked2 = true;
      }
    }
    var correct = knowhowNameChecked||knowhowNameChecked2;
    knowhowNameChecked = false;
    knowhowNameChecked2 = false;
    return correct;
  };

  function ExperienceCorrect() {
    var experiencecheck = $("input[name='experienceSection']:checkbox");
    
    for(var i=0;i<experiencecheck.length;i++)
    {
      if (experiencecheck[i].checked == true)  
      {
        experienceSectionChecked = true;
      }
    }
    var correct = experienceSectionChecked;
    experienceSectionChecked = false;
    return correct;
  };

  function EducationCorrect() {
    var educationcheck = $("input[name='educationSection']:checkbox");
    var educationcheck2 = $("input[name='educationSection2']:checkbox");
    
    for(var i=0;i<educationcheck.length;i++)
    {
      if (educationcheck[i].checked == true)  
      {
        educationSectionChecked = true;
      }
    }
    for(var i=0;i<educationcheck2.length;i++)
    {
      if (educationcheck2[i].checked == true)  
      {
        educationSectionChecked2 = true;
      }
    }
    var correct = educationSectionChecked||educationSectionChecked2;
    educationSectionChecked = false;
    educationSectionChecked2 = false;
    return correct;
  };

  function InterestsCorrect() {
    var interestcheck = $("input[name='interestsName']:checkbox");
    
    for(var i=0;i<interestcheck.length;i++)
    {
      if (interestcheck[i].checked == true)  
      {
        interestsChecked = true;
      }
    }
    var correct = interestsChecked;
    interestsChecked = false;
    return correct;
  };

  function CharacterCorrect() {
    var charactercheck = $("input[name='characterName']:checkbox");
    
    for(var i=0;i<charactercheck.length;i++)
    {
      if (charactercheck[i].checked == true)  
      {
        characterChecked = true;
      }
    }
    var correct = characterChecked;
    characterChecked = false;
    return correct;
  };

  function LanguageCorrect() {
    var languagecheck = $("input[name='languageName']:checkbox");
    
    for(var i=0;i<languagecheck.length;i++)
    {
      if (languagecheck[i].checked == true)  
      {
        languageChecked = true;
      }
    }
    var correct = languageChecked;
    languageChecked = false;
    return correct;
  };

  
  
function checkError(ktorepole,jakikomunikat) {
  var sprawdz = document.getElementById(ktorepole);
  if(sprawdz.value == '' || sprawdz.value == ' ')
  {
    sprawdz.value = '';
    sprawdz.placeholder = jakikomunikat;
  }
};

$( "#name1" ).change( function() {
    checkError("name1",imiejestwymagane);
});

$( "#name3" ).change( function() {
  checkError("name3",nazwiskowymagane);
});

$( "#dateOfBirth" ).change( function() {
  checkError("dateOfBirth",datajestwymagana);
});

$( "#home" ).change( function() {
  checkError("home",miejscewymagane);
});

$( "#email" ).change( function() {
  checkError("email",emailwymagany);
});

$( "#number" ).change( function() {
  checkError("number",numerwymagany);
});


