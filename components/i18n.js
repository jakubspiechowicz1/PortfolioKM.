"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Tłumaczenia dla polskiego i angielskiego
const resources = {
  en: {
    translation: {
      artistPainter: "Painting Artist",
      greeting: "Hello, I'm Marek Kowalski.",
      discoverMyPassion: "Discover my passion for painting, my unique style, and the artistic journey I follow!",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      name: "Marek Kowalski",
      phone: "+48 000 000 000",
      email: "marek.kowalski@kowalski.pl",
      birthDate: "Born on March 10, 1980",
      degree: "Master's degree in Painting",
      address: "Blue Alley, Warsaw, Poland",
      
      education: "Education",
      fineArtsAcademyWarsaw: "Warsaw Academy of Fine Arts",
      bachelorOfFineArts: "Bachelor of Fine Arts",
      fineArtsAcademyKrakow: "Krakow Academy of Fine Arts",
      masterOfPainting: "Master of Painting",
      variousArtInstitutions: "Various Art Institutions in Poland and Abroad",
      coursesAndWorkshops: "Courses and Workshops",
      
      experience: "Experience",
      modernArtGalleryWarsaw: "Modern Art Gallery, Warsaw",
      painter: "Painter",
      contemporaryArtStudioKrakow: "Contemporary Art Studio, Krakow",
      artDepartmentManager: "Art Department Manager",
      ownActivity: "Own Activity",
      independentPainter: "Independent Painter",
      
      skills: "Skills",
      portraits: "Portraits: I delve into the depth of human emotions, creating portraits that capture not only physical resemblance but also the essence of the model's personality.",
      landscapes: "Landscapes: I bring nature to life on canvas, from the gentle morning lights to majestic sunsets, portraying the beauty and tranquility of the natural world.",
      abstraction: "Abstraction: I experiment with colors and forms to evoke strong emotions and create works that provoke thought and reflection.",
      oil: "Oil: My work with oil paints is characterized by deep color saturation and distinct textures, allowing for the creation of multidimensional compositions.",
      watercolor: "Watercolor: I use watercolor to create more delicate, transparent works that capture the subtlety of light and shadow.",
      pastel: "Pastel: Pastels allow me to quickly and dynamically express ideas, creating soft yet intense and lively works.",
      
      aboutMe: "About Me",
      information: "Information",
      qualifications: "Qualifications",
      patienceAndPrecision: "Patience and precision are my keys to success.",
      specializingInIntuitiveArtworks: "I specialize in creating intuitive artworks, combining traditional methods with a modern outlook, providing dynamic and engaging aesthetic experiences.",
      foreignLanguages: "Foreign Languages",
      languagesList: "English, French, Polish, Italian",
      history: "History",
      howICreateHighQualityWork: "How I Create High-Quality Work",
      skillsAndSpecializations: "Skills and Specializations",
      techniques: 'Techniques',
//Work
      portraitsWithReflection: 'Portraits with Reflection',
      depthOfEmotions: 'Depth of Emotions',
      depthOfEmotionsDescription: 'An intimate portrait expressing profound human emotions.',
    
      naturalLandscapes: 'Natural Landscapes',
      stormyReflections: 'Stormy Reflections',
      stormyReflectionsDescription: 'Tranquil landscape with a forest and expressive scenery of stormy skies.',
      mysticalMoonlitForest: 'Mystical Moonlit Forest',
      mysticalMoonlitForestDescription: 'Dreamlike landscape with a mystical forest illuminated by moonlight.',
      neonCityNight: 'Neon City Nights',
      neonCityNightDescription: 'Dynamic urban landscape at night.',
    
      urbanAndSurrealLandscapes: 'Urban and Surreal Landscapes',
      momentOfCalm: 'Moment of Serenity',
      momentOfCalmDescription: 'A landscape capturing a moment of calm and serenity.',
      marketOfLife: 'Market of Life',
      marketOfLifeDescription: 'Energetic urban landscape depicting a bustling market.',
      viewOfThePolytechnic: 'View of the Polytechnic',
      viewOfThePolytechnicDescription: 'Bird\'s-eye view of the polytechnic, symbolizing better times.',
    
      expressionOfDetermination: 'Expression of Determination',
      expressionOfDeterminationDescription: 'A dramatic portrait reflecting determination.',
      reflectionAndIntrospection: 'Reflection and Introspection',
      reflectionAndIntrospectionDescription: 'An introspective portrait capturing a moment of deep reflection.',
    
      latestWorks: 'Latest Works',
      viewMyWork: 'Feel free to browse through my latest works.',
      allWorks: 'All Works',

      myServices: 'My Services',
      customPaintingDesign: 'Custom Painting Design',
      customPaintingDesignDescription: 'I create personalized works of art, perfect for interior decoration or as a unique gift.',
      
      paintingWorkshops: 'Painting Workshops',
      paintingWorkshopsDescription: 'I conduct workshops for individuals at every skill level, sharing knowledge and inspiration.',
      
      customPortraits: 'Custom Portraits',
      customPortraitsDescription: 'I specialize in creating unique portraits, capturing the personality and character of the subject.',

      testimonials: 'Testimonials',
      testimonial1: 'Marek is an artist with extraordinary intuition and talent. His works are full of emotion and depth.',
      testimonial2: 'Marek\'s works are exceptional. Each piece tells a different story, captivating with its originality.',
      testimonial3: 'Marek is an inspiration for young artists. His painting workshops are a combination of passion, knowledge, and creativity.',
      testimonial4: 'As someone who has seen many works of art, I can honestly say that Mr. Marek creates some of the best.',
      job1: 'Art Collector',
      job2: 'Gallery Director',
      job3: 'Director of Art Schools',
      job4: 'Art Museum Manager',
      ready: 'Ready to bring your vision to canvas?',
      home: 'Home',
      myWorks: 'My Works',
      contact: 'Contact',
      send: 'Send',
      passiontopainting: 'Discover my passion for painting, unique style, and artistic journey I pursue. See for yourself what I can do!',
      sendfrom: 'In the first column, provide your full name, in the second your email address, and in the third your message, then click the orange send button.',
      firstname: 'Your name',
      mail: 'Your email address',
      message: 'Your message',
      allprojects: 'All Projects',
      reflectionprojects: 'Portraits with Reflection',
      naturallandspace: 'Natural Landscapes',
      urbanlandspace: 'Urban and Surreal Landscapes',
      profileAccessibilitySettings: 'Accessibility Settings Profile',
      blindness: 'Blindness',
      motorImpairment: 'Motor Impairment',
      colorBlindness: 'Color Blindness',
      visualImpairment: 'Visual Impairment',
      adhd: 'ADHD',
      textReader: 'Text Reader',
      numericKeypadControl: 'Numeric Keypad Control',
      translation: 'Translation',
      textReaderDescription: 'Full description of the text reader feature, aiding in reading.',
      numericKeypadControlDescription: 'Allows control of the numeric keypad 2, 4, 8, 6.',
      voiceControl: 'Voice Control',
      colorBlindnessSetting: 'Color Blindness Setting',
      themeContrastSwitcher: 'Theme/Contrast Switcher',
      contrastSwitcherDescription: 'Switches between Light/Dark Theme/Contrast.',
      adhdSetting: 'ADHD Setting',
      animationStopper: 'Stop Animation on Site',
      stopAnimationDescription: 'Stops animations on the site.',
      simplifyLayout: 'Simplify Layout',
      simplifyLayoutDescription: 'Simplify the layout.',
      voiceAndNavigationSettings: 'Voice and Navigation Settings',
      imageNavigationArrows: 'Image Navigation Arrows',
      arrowsSliderDescription: 'Facilitates image navigation with arrows.',
      colorSettings: 'Color Settings',
      contentSettings: 'Content Settings',
      biggerText: 'Bigger Text',
      access: "Facilitate access",
      lightDarkContrast: 'Light/Dark Contrast',
      sliderarrows: 'Slider Arrows',
      selectColorScheme: 'Select color scheme:',
      defaultOption: 'Default',
      redGreenBlindOption: 'Red-Green Blindness',
      protanopeOption: 'protanope',
      deutanopeOption: 'deutanope',
      tritanopeOption: 'tritanope',
      saturation: 'Saturation:',
      bgcolor: 'Background color',
      fontcolor: 'Font color',
      closebutton: "Close",
      voiceActive: "Available voice commands",
      commandsAvailable: "Voice control active",
      altAbout: "Photo of a painter designing his work using an oil technique.",
      lowcontrast: "Low Contrast",
    }
  },
  pl: {
    translation: {
      artistPainter: "Artysta Malarz",
      greeting: "Cześć, jestem Marek Kowalski.",
      discoverMyPassion: "Odkryj moją pasję do malarstwa, unikalny styl i drogę artystyczną, którą podążam!",
      contactMe: "Skontaktuj się",
      downloadCV: "Pobierz CV",
      // Uzupełnione klucze tłumaczeń dla sekcji About
      // about
      name: "Marek Kowalski",
      phone: "+48 000 000 000",
      email: "marek.kowalski@kowalski.pl",
      birthDate: "Urodzony 10 Marca, 1980",
      degree: "Magister kierunku malarstwo",
      address: "Niebieska Aleja, Warszawa, Polska",

      education: 'Edukacja',
      fineArtsAcademyWarsaw: 'Akademia Sztuk Pięknych w Warszawie',
      bachelorOfFineArts: 'Licencjat Sztuk Pięknych',
      fineArtsAcademyKrakow: 'Akademia Sztuk Pięknych w Krakowie',
      masterOfPainting: 'Magister Malarstwa',
      variousArtInstitutions: 'Różne instytucje artystyczne w Polsce i za granicą',
      coursesAndWorkshops: 'Kursy i warsztaty',

      experience: 'Doświadczenie',
      modernArtGalleryWarsaw: 'Galeria Sztuki Nowoczesnej, Warszawa',
      painter: 'Malarz',
      contemporaryArtStudioKrakow: 'Studio Sztuki Współczesnej, Kraków',
      artDepartmentManager: 'Kierownik Działu Artystycznego',
      ownActivity: 'Własna działalność',
      independentPainter: 'Niezależny Artysta Malarz',

      skills: 'Umiejętności',
      portraits: 'Portrety: Zanurzam się w głębi ludzkich emocji, tworząc portrety, które uchwycą nie tylko fizyczne podobieństwo, ale także esencję osobowości modela.',
      landscapes: 'Pejzaże: Ożywiam naturę na płótnie, od delikatnych świateł poranka po majestatyczne zachody słońca, odwzorowując piękno i spokój świata naturalnego.',
      abstraction: 'Abstrakcja: Eksperymentuję z kolorami i formami, aby wywołać silne emocje i stworzyć prace, które prowokują do myślenia i refleksji.',
      oil: 'Olej: Moja praca z farbami olejnymi charakteryzuje się głębokim nasyceniem kolorów i wyraźnymi teksturami, co pozwala na tworzenie wielowymiarowych kompozycji.',
      watercolor: 'Akwarela: Używam akwareli do tworzenia delikatniejszych, przejrzystych prac, które uchwycają subtelność światła i cienia.',
      pastel: 'Pastel: Pastele pozwalają mi na szybkie i dynamiczne wyrażanie idei, tworząc miękkie, ale intensywne prace pełne życia.',

      aboutMe: 'Trochę o mnie..',
      information: 'Informacje',
      qualifications: 'Kwalifikacje',
      patienceAndPrecision: 'Cierpliwość i precyzja to mój klucz do sukcesu',
      specializingInIntuitiveArtworks: 'Specjalizuję się w tworzeniu intuicyjnych dzieł sztuki, łącząc tradycyjne metody z nowoczesnym spojrzeniem, dostarczając dynamicznych i angażujących wrażeń estetycznych.',
      foreignLanguages: 'Języki obce',
      languagesList: 'Angielski, Francuski, Polski, Włoski',
      history: 'Historia',
      howICreateHighQualityWork: 'Jak tworzę wysokiej jakości pracę?',
      skillsAndSpecializations: 'Umiejętności i Specjalizacje',
      techniques: 'Techniki',

      portraitsWithReflection: 'Portrety z Refleksją',
      depthOfEmotions: 'Głębia Emocji',
      depthOfEmotionsDescription: 'Intymny portret z wyrazem głębokich emocji ludzkich.',
      
      naturalLandscapes: 'Pejzaże Naturalne',
      stormyReflections: 'Burzowe Refleksje',
      stormyReflectionsDescription: 'Spokojny pejzaż z lasem oraz ekspresyjny krajobraz z burzowym niebem.',
      mysticalMoonlitForest: 'Mistyczny Księżycowy Las',
      mysticalMoonlitForestDescription: 'Oniryczny pejzaż z mistycznym lasem przy świetle księżyca.',
      neonCityNight: 'Neonowe Miasto Nocy',
      neonCityNightDescription: 'Dynamiczny pejzaż miejski nocą.',
      
      urbanAndSurrealLandscapes: 'Pejzaże Miejskie i Surrealistyczne',
      momentOfCalm: 'Chwila spokoju',
      momentOfCalmDescription: 'Pejzaż ukazujący chwilę spokoju oraz ukojenia',
      marketOfLife: 'Rynek Życia',
      marketOfLifeDescription: 'Energetyczny pejzaż miejski z tętniącym życiem rynkiem.',
      viewOfThePolytechnic: 'Widok na Politechnikę',
      viewOfThePolytechnicDescription: 'Widok z lotu ptaka na politechnikę, symbolizujące lepsze czasy.',
      
      expressionOfDetermination: 'Wyraz Determinacji',
      expressionOfDeterminationDescription: 'Dramatyczny portret z wyrazem determinacji.',
      reflectionAndIntrospection: 'Refleksja i Introspekcja',
      reflectionAndIntrospectionDescription: 'Introspektywny portret uchwycił chwilę głębokiej refleksji.',
      
      latestWorks: 'Ostatnie prace',
      viewMyWork: 'Zapraszam do przejrzenia moich prac.',
      allWorks: 'Wszystkie prace',
//usługi
      myServices: 'Moje usługi',
      customPaintingDesign: 'Projektowanie Obrazów Na Zamówienie',
      customPaintingDesignDescription: 'Tworzę spersonalizowane dzieła sztuki, idealne do dekoracji wnętrz lub jako wyjątkowy prezent.',
      
      paintingWorkshops: 'Warsztaty Malarskie',
      paintingWorkshopsDescription: 'Prowadzę warsztaty dla osób na każdym poziomie zaawansowania, dzieląc się wiedzą i inspiracją.',
      
      customPortraits: 'Portrety Na Zamówienie',
      customPortraitsDescription: 'Specjalizuję się w tworzeniu unikalnych portretów, odwzorowując osobowość i charakter zamawiającego.',
//opinie
      testimonials: 'Opinie',
      testimonial1: 'Marek to artysta z niezwykłą intuicją i talentem. Jego prace są pełne emocji i głębi.',
      testimonial2: 'Prace Marka są wyjątkowe. Każde dzieło opowiada inną historię, zachwycając swoją oryginalnością.',
      testimonial3: 'Marek jest inspiracją dla młodych artystów. Jego warsztaty malarskie to połączenie pasji, wiedzy i kreatywności.',
      testimonial4: 'Jako osoba, która widziała wiele dzieł sztuki, z czystym sumieniem mogę powiedzieć, że Pan Marek tworzy jedne z najlepszych.',
      job1: 'Kolekcjoner Sztuki',
      job2: 'Dyrektor Galeri',
      job3: 'Dyrektor Szkół Artystycznych',
      job4: 'Kierownik muzeum sztuki',
      ready: 'Gotowy, aby wizję przenieść na płótno?',
      home: 'Strona główna',
      myWorks: 'Moje Prace',
      contact: 'Kontakt',
//contact
      send: 'Wyślij',
      passiontopainting: 'Odkryj moją pasję do malarstwa, unikalny styl i drogę artystyczną, którą podążam. Przekonaj się sam, co potrafię!',
      sendfrom: 'W pierwszej kolumnie uzupełnij imię i nazwisko, w drugiej swój adres email a w trzeciej swoją wiadomość, następnie kliknij pomarańczowy przycisk wyślij',
      firstname: 'Twoje imię',
      mail: 'Twój adres email',
      message: 'Twoja wiadomość',
      allprojects: 'Wszystkie Projekty',
      reflectionprojects: 'Portrety z Refleksją',
      naturallandspace: 'Pejzaże Naturalne',
      urbanlandspace: 'Pejzaże Miejskie I Surrealistyczne',
//acces
      access: "Ułatwienia Dostepu",
      profileAccessibilitySettings: 'Profile Ustawień Dostępu',
      blindness: 'Ślepota',
      motorImpairment: 'Zaburzenia Motoryczne',
      colorBlindness: 'Ślepota Kolorów',
      visualImpairment: 'Zaburzenia Wzroku',
      adhd: 'ADHD',
      textReader: 'Czytnik Tekstu',
      numericKeypadControl: 'Sterowanie Cyframi',
      translation: 'Tłumaczenie',
      textReaderDescription: 'Pełny opis funkcji czytnika tekstu, ułatwia czytanie.',
      numericKeypadControlDescription: 'Pozwala na sterowanie klawiaturą numeryczną',
      voiceControl: 'Sterowanie Głosem',
      colorBlindnessSetting: 'Ślepota Kolorów',
      themeContrastSwitcher: 'Przełącznik Motywu/Kontrastu Jasny/Ciemny',
      contrastSwitcherDescription: 'Przełącza Motyw/Kontrast Jasny/Ciemny.',
      adhdSetting: 'ADHD',
      animationStopper: 'Zatrzymaj Animacje na Stronie',
      stopAnimationDescription: 'Zatrzymuje animacje na stronie.',
      simplifyLayout: 'Uprość Układ Strony',
      simplifyLayoutDescription: 'Uprość układ.',
      voiceAndNavigationSettings: 'Ustawienia Głosu i Nawigacji',
      imageNavigationArrows: 'Przesuwanie Obrazków Strzałkami',
      arrowsSliderDescription: 'Ułatwia przesuwanie obrazków strzałkami.',
      colorSettings: 'Ustawienia Kolorów',
      contentSettings: 'Ustawienia Zawartości',
      biggerText: 'Większy Tekst',
      lightDarkContrast: 'Kontrast Jasny/Ciemny',
      sliderarrows: 'Strzałki sliderów',
      selectColorScheme: 'Wybierz schemat kolorów:',
      defaultOption: 'Domyślny',
      redGreenBlindOption: 'Ślepota czerwono-zielona',
      protanopeOption: 'Protanopia',
      deutanopeOption: 'Deutanopia',
      tritanopeOption: 'Tritanopia',
      saturation: 'Nasycenie kolorów:',
      bgcolor: 'Kolor tła',
      fontcolor: 'Kolor czcionki',
      closebutton: "Zamknij",
      voiceActive: "Dostępne komendy głosowe",
      commandsAvailable: "Sterowanie głosowe aktywne",
      altAbout: "Zdjęcie malarza projektujące swoje pracę techniką olejową",
      lowcontrast: "Niski kontrast",
      

    }
  },




};

i18n
  .use(initReactI18next) // dodaje obsługę react-i18next do i18next
  .init({
    resources,
    lng: 'pl', // domyślny język
    fallbackLng: 'en', // język zapasowy
    interpolation: {
      escapeValue: false, // nie wymaga zabezpieczania XSS w React
    },
  });

export default i18n;
