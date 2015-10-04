var languages = ['english', 'spanish'];

function hideLanguages(){
  for(var index in languages)
    $('.'+languages[index]).each(function(){
      $(this).hide()
    });
}

function showLanguage(language){
  hideLanguages(languages);
  $('.'+language).each(function(){
    $(this).toggle()
  });
}
