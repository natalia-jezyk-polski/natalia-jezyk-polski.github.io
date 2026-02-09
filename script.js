// Translations object
const translations = {
    pl: {
        'hero-title': 'Język Polski Online z Natalią',
        'hero-subtitle': 'Profesjonalne lekcje języka polskiego online dla Ukraińców i obcokrajowców',
        'cta-button': 'Umów pierwszą lekcję',
        'about-title': 'O mnie',
        'about-text-1': 'Cześć! Nazywam się Natalia i jestem certyfikowaną nauczycielką języka polskiego jako obcego.',
        'about-text-2': 'Specjalizuję się w prowadzeniu lekcji online dla osób mówiących po ukraińsku i angielsku. Moje lekcje są dostosowane do Twoich indywidualnych potrzeb i celów.',
        'about-text-3': 'Niezależnie od tego, czy uczysz się polskiego do pracy, studiów, czy do życia codziennego w Polsce - pomogę Ci osiągnąć swoje cele językowe!',
        'services-title': 'Moja oferta',
        'service-1-title': 'Lekcje indywidualne',
        'service-1-desc': 'Spersonalizowane zajęcia dostosowane do Twojego poziomu i tempa nauki',
        'service-2-title': 'Zajęcia grupowe',
        'service-2-desc': 'Nauka w małych grupach, wymiana doświadczeń z innymi uczniami',
        'service-3-title': 'Przygotowanie do egzaminów',
        'service-3-desc': 'Certyfikaty A1-C2, przygotowanie do Karty Polaka i innych egzaminów',
        'service-4-title': 'Polski biznesowy',
        'service-4-desc': 'Język polski w kontekście zawodowym i biznesowym',
        'service-5-title': 'Konwersacje',
        'service-5-desc': 'Doskonalenie umiejętności mówienia i rozumienia ze słuchu',
        'service-6-title': 'Gramatyka i słownictwo',
        'service-6-desc': 'Systematyczna nauka struktur gramatycznych i poszerzanie słownictwa',
        'why-title': 'Dlaczego warto się uczyć ze mną?',
        'benefit-1': 'Elastyczne godziny zajęć dopasowane do Twojego grafiku',
        'benefit-2': 'Materiały dydaktyczne dostosowane do Twoich potrzeb',
        'benefit-3': 'Komunikacja po polsku, ukraińsku i angielsku',
        'benefit-4': 'Interaktywne i angażujące metody nauczania',
        'benefit-5': 'Wsparcie pomiędzy lekcjami',
        'benefit-6': 'Pierwsze konsultacje za darmo',
        'testimonials-title': 'Co mówią moi uczniowie',
        'testimonial-1-text': 'Chcę podzielić się moim doświadczeniem z panią Natalią. Jej metody nauczania są szczegółowe i dobrze zorganizowane, zawsze dokładnie wyjaśnia trudne zagadnienia i zwraca uwagę na subtelności języka, dzięki czemu nauka jest naprawdę efektywna. Na lekcjach panuje zawsze przyjazna atmosfera, która pomaga mi się nie zniechęcać nawet w trudniejszych momentach. Dzięki jej podejściu poprawiłam swoje umiejętności w pisaniu, czytaniu i słuchaniu, a także zaczęłam rozmawiać z rodzimymi użytkownikami języka.',
        'testimonial-1-name': 'Olga K.',
        'testimonial-2-text': 'Mój syn uczy się z Język Polski Online już drugi rok. Atmosfera na zajęciach jest bardzo miła i motywująca, dzięki czemu łatwo przyswaја nową wiedzę. Jesteśmy bardzo wdzięczni za takie podejście i możliwość nauki polskiego z przyjemnością.',
        'testimonial-2-name': 'Ksenia S.',
        'testimonial-3-text': 'Uczyłam się polskiego z Natalią przez 2,5 roku i jestem jej bardzo wdzięczna za tę wiedzę i doświadczenie. Lekcje zawsze były ciekawe i przydatne – oprócz materiału z podręczników było mnóstwo informacji przydatnych w życiu codziennym i w rozmowach z Polakami. Dzięki tej nauce udało mi się dostać na studia magisterskie w Polsce i szybko odnaleźć się w nowym środowisku.',
        'testimonial-3-name': 'Victoria G.',
        'contact-title': 'Kontakt',
        'contact-intro': 'Zainteresowany lekcjami? Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin!',
        'form-name': 'Imię',
        'form-email': 'Email',
        'form-phone': 'Telefon (opcjonalnie)',
        'form-message': 'Wiadomość',
        'form-submit': 'Wyślij wiadomość',
        'footer-rights': 'Wszelkie prawa zastrzeżone.'
    },
    uk: {
        'hero-title': 'Польська мова онлайн з Наталією',
        'hero-subtitle': 'Професійні уроки польської мови онлайн для українців та іноземців',
        'cta-button': 'Записатися на перший урок',
        'about-title': 'Про мене',
        'about-text-1': 'Привіт! Мене звати Наталія, я сертифікований викладач польської мови як іноземної.',
        'about-text-2': 'Я спеціалізуюся на проведенні онлайн-уроків для україномовних та англомовних студентів. Мої уроки адаптовані до ваших індивідуальних потреб та цілей.',
        'about-text-3': 'Незалежно від того, чи вивчаєте ви польську для роботи, навчання чи повсякденного життя в Польщі - я допоможу вам досягти ваших мовних цілей!',
        'services-title': 'Моя пропозиція',
        'service-1-title': 'Індивідуальні уроки',
        'service-1-desc': 'Персоналізовані заняття, адаптовані до вашого рівня та темпу навчання',
        'service-2-title': 'Групові заняття',
        'service-2-desc': 'Навчання в невеликих групах, обмін досвідом з іншими студентами',
        'service-3-title': 'Підготовка до іспитів',
        'service-3-desc': 'Сертифікати A1-C2, підготовка до Карти Поляка та інших іспитів',
        'service-4-title': 'Ділова польська',
        'service-4-desc': 'Польська мова в професійному та діловому контексті',
        'service-5-title': 'Розмовна практика',
        'service-5-desc': 'Вдосконалення навичок говоріння та розуміння на слух',
        'service-6-title': 'Граматика та лексика',
        'service-6-desc': 'Систематичне вивчення граматичних структур та розширення словникового запасу',
        'why-title': 'Чому варто навчатися зі мною?',
        'benefit-1': 'Гнучкий графік занять, адаптований до вашого розкладу',
        'benefit-2': 'Навчальні матеріали, адаптовані до ваших потреб',
        'benefit-3': 'Спілкування польською, українською та англійською мовами',
        'benefit-4': 'Інтерактивні та захоплюючі методи навчання',
        'benefit-5': 'Підтримка між уроками',
        'benefit-6': 'Перша консультація безкоштовно',
        'testimonials-title': 'Що кажуть мої студенти',
        'testimonial-1-text': 'Я хочу поділитися своїм досвідом навчання з пані Наталією, викладачем польської мови. Її методика викладання дуже детальна та структурована, вона завжди роз\'яснює складні моменти та звертає увагу на дрібні нюанси мови, що робить навчання більш ефективним. Атмосфера на її уроках завжди дружня і приємна, що допомагає зберігати мотивацію навіть у важкі моменти. Завдяки її підходу я змогла покращити свої навички в письмі, читанні та слуханні, а також почала спілкуватися з носіями мови.',
        'testimonial-1-name': 'Ольга К.',
        'testimonial-2-text': 'Син вже займається з Język Polski Online вже другий рік. Атмосфера на заняттях дуже приємна та мотивуюча, і це допомагає легко засвоювати нові знання. Дуже вдячні за такий підхід і можливість вивчати польську мову з задоволенням!',
        'testimonial-2-name': 'Ксенія Ш.',
        'testimonial-3-text': 'Я вивчала польську мову з Наталією 2,5 роки, дуже вдячна їй за ці знання та досвід, уроки завжди були цікавими та корисними, була інформація не тільки з книжок, але й багато чого потрібного для життя і спілкування з поляками, завдяки цьому навчанню мені вдалося вступити на магістратуру до польського університету та швидко звикнути до їх суспільства.',
        'testimonial-3-name': 'Вікторія Г.',
        'contact-title': 'Контакти',
        'contact-intro': 'Зацікавлені в уроках? Заповніть форму, і я зв\'яжуся з вами протягом 24 годин!',
        'form-name': 'Ім\'я',
        'form-email': 'Email',
        'form-phone': 'Телефон (необов\'язково)',
        'form-message': 'Повідомлення',
        'form-submit': 'Надіслати повідомлення',
        'footer-rights': 'Всі права захищені.'
    },
    en: {
        'hero-title': 'Online Polish with Natalia',
        'hero-subtitle': 'Professional online Polish lessons for Ukrainians and foreigners',
        'cta-button': 'Book your first lesson',
        'about-title': 'About me',
        'about-text-1': 'Hi! My name is Natalia and I am a certified teacher of Polish as a foreign language.',
        'about-text-2': 'I specialize in conducting online lessons for Ukrainian and English speakers. My lessons are tailored to your individual needs and goals.',
        'about-text-3': 'Whether you are learning Polish for work, studies, or daily life in Poland - I will help you achieve your language goals!',
        'services-title': 'My services',
        'service-1-title': 'Individual lessons',
        'service-1-desc': 'Personalized classes tailored to your level and learning pace',
        'service-2-title': 'Group classes',
        'service-2-desc': 'Learning in small groups, sharing experiences with other students',
        'service-3-title': 'Exam preparation',
        'service-3-desc': 'A1-C2 certificates, preparation for Karta Polaka and other exams',
        'service-4-title': 'Business Polish',
        'service-4-desc': 'Polish language in professional and business context',
        'service-5-title': 'Conversation practice',
        'service-5-desc': 'Improving speaking and listening comprehension skills',
        'service-6-title': 'Grammar and vocabulary',
        'service-6-desc': 'Systematic learning of grammatical structures and vocabulary expansion',
        'why-title': 'Why learn with me?',
        'benefit-1': 'Flexible class schedule adapted to your timetable',
        'benefit-2': 'Teaching materials tailored to your needs',
        'benefit-3': 'Communication in Polish, Ukrainian, and English',
        'benefit-4': 'Interactive and engaging teaching methods',
        'benefit-5': 'Support between lessons',
        'benefit-6': 'First consultation free',
        'testimonials-title': 'What my students say',
        'testimonial-1-text': 'I want to share my experience learning with Natalia. Her teaching methods are detailed and well-organized, she always thoroughly explains difficult concepts and pays attention to the subtleties of the language, which makes learning truly effective. There\'s always a friendly atmosphere in her lessons that helps me stay motivated even during the harder moments. Thanks to her approach, I\'ve improved my writing, reading and listening skills, and I\'ve even started having conversations with native speakers.',
        'testimonial-1-name': 'Olga K.',
        'testimonial-2-text': 'My son has been studying with Język Polski Online for two years now. The atmosphere in class is very pleasant and motivating, which helps him absorb new material easily. We\'re very grateful for this approach and the chance to learn Polish with enjoyment.',
        'testimonial-2-name': 'Ksenia S.',
        'testimonial-3-text': 'I studied Polish with Natalia for 2.5 years and I\'m very grateful for the knowledge and experience. The lessons were always interesting and practical – beyond textbook material, there was plenty of information useful for everyday life and conversations with Polish people. Thanks to this training, I got into a master\'s program at a Polish university and adapted quickly to the new environment.',
        'testimonial-3-name': 'Victoria G.',
        'contact-title': 'Contact',
        'contact-intro': 'Interested in lessons? Fill out the form and I\'ll get back to you within 24 hours!',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-phone': 'Phone (optional)',
        'form-message': 'Message',
        'form-submit': 'Send message',
        'footer-rights': 'All rights reserved.'
    }
};

// Language switching functionality
let currentLang = 'pl';

function changeLanguage(lang) {
    currentLang = lang;

    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Event listeners for language buttons
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    }

    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
