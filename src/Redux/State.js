export const initialState = {
  notes: [
    {
      id: 1,
      title: 'React on my Mind',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
    {
      id: 2,
      title: 'Wish you React',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
    {
      id: 3,
      title: 'You gave React a bad name ',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
    {
      id: 4,
      title: 'Is it React you looking for ? ',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'I’ll be back',
      content: `Austriacko-amerykański aktor, filmowiec, polityk, biznesmen, filantrop, aktywista oraz były zawodowy kulturysta, dwukrotnie pełnił funkcję gubernatora Kalifornii w latach 2003–2011.`,
      twitterName: 'arnold',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Newsweek',
      content:
        'Tygodnik społeczno-polityczny o profilu konserwatywno-liberalnym wydawany od 2001 w Warszawie, polska mutacja amerykańskiego tygodnika „Newsweek" Newsweek Polska” wydawany jest od 3 września 2001 przez Ringier Axel Springer Polska na licencji Newsweek Inc. i jest jedną z ośmiu obcojęzycznych mutacji amerykańskiego tygodnika „Newsweek”.',
      twitterName: 'newsweek',
      created: '1 day',
    },
    {
      id: 3,
      title: 'William „Bill” Henry Gates III',
      content:
        'Amerykański informatyk, przedsiębiorca, filantrop oraz współzałożyciel, główny architekt oprogramowania i były prezes zarządu korporacji Microsoft. Podczas swojej kariery w Microsofcie obejmował stanowiska dyrektora generalnego oraz głównego architekta oprogramowania.',
      twitterName: 'billgates',
      created: '1 day',
    },
    {
      id: 4,
      title: 'Mark Zuckerberg',
      content:
        'Amerykański przedsiębiorca, filantrop, główny twórca serwisu społecznościowego Facebook i jego obecny dyrektor generalny; Człowiek Roku tygodnika Time w 2010. W marcu 2008 roku Zuckerberg, plasując się na 785 miejscu rankingu „Forbesa” zestawiającego najbogatszych ludzi świata, został najmłodszym miliarderem świata (1,5 mld USD)',
      twitterName: 'zuck',
      created: '1 day',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Dlaczego React w 2020 roku jest wart uwagi?',
      content: `Każdy, kto choć trochę orientuje się w realiach webdevelopmentu, słyszał o bibliotece React. Istnieje na rynku tak długo, że coraz częściej pojawiają się pytania – co dalej? Nadal jest warta uwagi, czy może zestarzała się? Jeżeli warto, to na czym skupić się najmocniej? Jaki kierunek powinien obrać junior, a jaki bardziej zaawansowany developer?`,
      articleUrl: `geek.justjoin.it/react-w-2020-roku`,
    },
    {
      id: 2,
      title: 'O mocnych i słabych stronach ReactJS',
      content: `React.js to biblioteka JavaScriptowa (tak – biblioteka, a nie framework jak często można usłyszeć), używana do budowania interfejsów (z ang. User Interface, w skrócie UI), a więc wszystkiego, co pozwala na interakcję użytkowników z maszynami. Interfejsy znajdziemy wszędzie, od aplikacji mobilnych, poprzez strony internetowe, kończąc na ekspresie do kawy`,
      articleUrl: `geek.justjoin.it/zalety-wady-reactjs`,
    },
    {
      id: 3,
      title: 'Redux Store z  React Hooks',
      content: `Wraz z nadejściem ery Web 2.0 strony internetowe przestały być jedynie prostymi dokumentami tekstowymi, a zaczęły być aplikacjami raczej przypominającymi aplikacje desktopowe. Użytkownicy dostali możliwość tworzenia i dostosowywania treści do własnych potrzeb.`,
      articleUrl: `geek.justjoin.it/captain-hook-redux-store-z-wykorzystaniem-react-hooks`,
    },
    {
      id: 4,
      title: '8 dobrych praktyk pracy w React.js',
      content: `Ciężko mi już zliczyć ile projektów w React (…i jego ekosystemie) napisałem. Postanowiłem spisać praktyki, które wypracowałem i uważam za warte użycia w waszych projektach. A, że lubię konkrety, to od razu przejdźmy do pierwszej z nich.`,
      articleUrl: `geek.justjoin.it/8-dobrych-praktyk-pracy-w-react-js`,
      created: '1 day',
    },
  ],
};
