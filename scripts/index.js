function smoothScroll(el, to, duration) {
    if (duration < 0) {
        return;
    }
    var difference = to - $(window).scrollTop();
    var perTick = difference / duration * 10;
    var startPos = $(window).scrollTop();
    this.scrollToTimerCache = setTimeout(function() {
        if (!isNaN(parseInt(perTick, 10))) {
            window.scrollTo(startPos, $(window).scrollTop() + perTick);
            smoothScroll(el, to, duration - 10);
        }
    }.bind(this), 10);
}

require(
  ["lib/zepto.min", "lib/underscore.min", "lib/markdown.min",
   "lib/highlight.pack"],
  function() {
    hljs.initHighlighting();
    var Markdown = markdown;

    var langs = [
      ['javascript', 'JavaScript', 'js'],
      ['ruby', 'Ruby', 'rb'],
      ['lua', 'Lua', 'lua'],
      ['objectivec', 'Objective-C', 'm'],
      ['python', 'Python', 'py']
    ];

    var langData = {};
    var loadLangData = function(langName, topic, ext, cb) {
      if (!langData[langName]) {
        langData[langName] = {};
      }

      if (langData[langName][topic]) {
        cb(langData[langName][topic]);
        return;
      }

      $.get('langs/'+langName+'/'+topic+'.md', function(example) {
        langData[langName][topic] = example;
        cb(example);
      });
    };

    var $langA = $('#lang_a');
    var $langB = $('#lang_b');

    $('.lang_select').each(function() {
        var $select = $(this);
        _(langs).each(function(lang) {
          var $option = $('<option />', { value:lang[0], text: lang[1], 'data-ext': lang[2] });
          $select.append($option);
        });
    });

    $('ul.topics > li.topic').each(function() {
      var $li = $(this);
      var $a = $(this).find('a').attr('class', 'col1');
      var $aCol = $("<div />", {'class': "lang_a col2"});
      var $bCol = $("<div />", {'class': "lang_b col3"});
      $li.append($aCol);
      $li.append($bCol);
    });

    var langLoadStates = { langA: false, langB: false };
    var selectLang = function(key, value) {
      var cssKey = (key === 'langA' ? 'lang_a' : 'lang_b');

      var $select = $('#' + cssKey);
      $select.val(value);
      var langClass = '.' + cssKey;

      var selectedLang = $select.val();
      var selectedLangExt = $select.find('option[value='+$select.val()+']')
          .attr('data-ext');

      langLoadStates[key] = false;

      $('ul.topics > li.topic').each(function() {
        var $li = $(this);
        var topic = $li.attr('id');

        var $langCol = $li.find(langClass);
        $langCol.empty();

        loadLangData(selectedLang, topic, selectedLangExt, function(example) {
          langLoadStates[key] = true;
          selectSection(curState.section);

          if (example) {
            var md = Markdown.toHTML(example);
            $langCol.html(md);
            $langCol.find('a').each(function() {
              var $link = $(this);
              if ($link.attr('href').substring(0, 1) !== '#') {
                $link.attr('target', '_blank');
                $link.addClass('external');
              } else {
                $link.addClass('internal');
              }
            });

            $langCol.find('code').each(function() {
              var $code = $(this);
              $code.attr('class', selectedLang);
              var hi = hljs.highlight(selectedLang, $code.html()).value;
              $code.html(hi);
            });
          }
        });
      });
    };
    var selectSection = function(section) {
      if (!section) return;
      $('.current_section').removeClass('current_section');
      var $section = $('#'+section);
      $section.addClass('current_section');
      if (langLoadStates.langA && langLoadStates.langB) {
        smoothScroll($(window), $section.offset().top - $('.select').height(), 250);
      }
    };

    // Hash changes

    var curState = {};
    var defaults = {
      langA: 'javascript',
      langB: 'ruby',
      section: null
    };
    var updateState = function(hashState) {
      console.log(hashState);
      if (hashState.langA !== curState.langA) {
        selectLang('langA', hashState.langA);
      }
      if (hashState.langB !== curState.langB) {
        selectLang('langB', hashState.langB);
      }
      if (hashState.section !== curState.section) {
        selectSection(hashState.section);
      }

      var newHash = hashState.langA + "/" + hashState.langB;
      if (hashState.section) newHash += "/" + hashState.section;
      window.location.hash = newHash;

      curState = hashState;
    };
    var checkHash = function() {
      if (window.location.hash === "") {
        updateState(defaults);
        return;
      }

      var parts = window.location.hash.replace('#', '').split('/');
      console.log(parts);
      var hashState = {};
      if (parts.length >= 1) hashState.langA = parts[0];
      if (parts.length >= 2) hashState.langB = parts[1];
      if (parts.length >= 3) hashState.section = parts[2];
      hashState = _(defaults).chain().clone().extend(hashState).value();
      updateState(hashState);
    };
    $(window).on('hashchange', checkHash);
    checkHash();

    $('.lang_select').change(function() {
      var $select = $(this);
      var stateKey = ($select.attr('id') === 'lang_a' ? 'langA' : 'langB');

      var update = {};
      update[stateKey] = $select.val();
      var newState = _(curState).chain().clone().extend(update).value();
      updateState(newState);
    });

    $(document).on('click', 'a.internal', function(e) {
      var $a = $(this);
      var section = $a.attr('href').replace('#', '');
      var update = {section: section};
      var newState = _(curState).chain().clone().extend(update).value();
      selectSection(section);
      updateState(newState);
      return false;
    });

      $('a').each(function() {
          var $link = $(this);
          if ($link.attr('href').substring(0, 1) !== '#') {
            $link.attr('target', '_blank');
            $link.addClass('external');
          } else {
            $link.addClass('internal');
          }
        });
  });

