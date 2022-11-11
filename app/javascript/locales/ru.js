const ruLocales = {
  translation: {
    signUp: {
      pageHeader: 'Регистрация',
      emailLabel: 'Электронная почта',
      usernameLabel: 'Логин',
      passwordLabel: 'Пароль',
      confirmPasswordLabel: 'Подтвердить пароль',
      registerButton: 'Зарегистрироваться',
      signUpFailed: 'Такой пользователь уже существует',
      footer: {
        signInHeader: 'Уже есть аккаунт? ',
        signIn: 'Войти',
      },
      validation: {
        requiredField: 'Обязательное поле',
        correctUsername: 'Введите корректный логин',
        correctEmail: 'Некорректная электронная почта',
        usernameLength: 'От 3 до 20 символов',
        passwordLength: 'от 8 до 30 символов',
        confirmPassword: 'Пароли должны совпадать',
      },
    },
    remindPass: {
      pageHeader: 'Забыли пароль?',
      emailLabel: 'Электронная почта',
      resetButton: 'Восстановить пароль',
      footer: {
        signUpHeader: 'Нет аккаунта? ',
        signUp: 'Создать бесплатный аккаунт',
        signInHeader: 'Уже есть аккаунт? ',
        signIn: 'Войти',
      },
      validation: {
        correctEmail: 'Некорректный email',
      },
    },
    signIn: {
      pageHeader: 'Вход',
      emailLabel: 'Электронная почта',
      passwordLabel: 'Пароль',
      loginButton: 'Войти',
      remindPass: 'Не помню пароль',
      signInFailed: 'Неверный пароль или электронная почта',
      footer: {
        signUpHeader: 'Нет аккаунта? ',
        signUp: 'Создать бесплатный аккаунт',
      },
    },
    profile: {
      replsHeader: 'Сниппеты',
      username: 'Имя пользователя:',
      createdAt: 'Создан:',
      userId: 'Идентификатор пользователя:',
      email: 'Эл. почта:',
      editProfileButton: 'Редактировать',
      copyProfileButton: 'Скопировать ссылку',
      openReplButton: 'Открыть',
      shareReplButton: 'Поделиться',
      renameReplButton: 'Переименовать',
      deleteReplButton: 'Удалить',
      newReplButton: 'Новый сниппет',
    },
    navbar: {
      mainLabel: 'Редактор',
      menu: 'Меню',
      home: 'Домой',
      myRepls: 'Мои сниппеты',
      profile: 'Профиль',
      about: 'О проекте',
      logout: 'Выйти',
      signIn: 'Войти',
      signUp: 'Зарегистрироваться',
    },
    footer: {
      about: 'О нас',
      carerr: 'Карьера в Хекслете',
      shop: 'Магазин мерча',
      doc: 'Документы',
      conditions: 'Условия использования',
      agreement: 'Соглашение об обработке ПД',
      offer: 'Публичная оферта',
      promo: 'Акции',
      tel1: '8 800 100 22 47',
      tel1Href: 'tel:88001002247',
      rf: ' бесплатно по РФ',
      tel2: '+7 495 085 28 38',
      tel2Href: 'tel:84950852838',
      moscow: ' бесплатно по Москве',
      name: 'ООО «Хекслет Рус»',
      city: '432071, г. Ульяновск,',
      street: 'пр-т Нариманова, дом 1Г, оф. 23',
      ogrn: 'ОГРН 1217300010476',
      study: 'Учиться',
      programs: 'Профессии с нуля',
      courses: 'Все курсы',
      individually: 'Индивидуальное обучение',
      teams: 'Корпоративное обучение',
      read: 'Читать',
      success: 'Истории успеха',
      feedback: 'Отзывы студентов',
      blog: 'Блог',
      questions: 'Вопросы по урокам',
      recommended: 'Рекомендуемые книги',
      subscribe: 'Подписаться',
      help: 'Помощь',
      info: 'Справка',
      qna: 'Вопросы и ответы',
      mail: 'support@hexlet.io',
      mailHref: 'mailto:support@hexlet.io',
      improve: 'Улучшить Хекслет',
      project: 'Наши проекты',
      college: 'Хекслет Колледж',
      codeBasics: 'Code Basics',
      codeBattle: 'Codebattle',
      guides: 'Hexlet Guides',
      cv: 'Хекслет-резюме',
      language: 'Язык',
      en: 'English',
      ru: 'Русский',
    },
    embedFrame: {
      runButton: 'Запустить',
      logoOffer: 'Попробуйте на',
      logo: 'Runit',
    },
    editor: {
      authBanner: 'Авторизуйтесь для редактирования',
      runButton: 'Запустить',
      shareButton: 'Поделиться',
    },
    modals: {
      share: {
        header: 'Сохраните, чтобы поделиться.',
        copyLinkButton: 'Скопировать ссылку',
        linkTab: 'Ссылка',
        copyEmbedButton: 'Скопировать код',
        embedTab: 'Код для вставки',
        saveSnippetButton: 'Сохранить',
        saveSnippetTab: 'Сохранить сниппет',
        snippetNameLabel: 'Введите имя',
        snippetLinkLabel: 'Ссылка на сниппет',
        snippetEmbedLabel: 'Код сниппета для вставки',
      },
      newSnippetName: 'Название сниппета',
      signInButton: 'Войти',
      signUpButton: 'Создать аккаунт',
      signInHeader: 'Авторизация',
      signUpHeader: 'Регистрация',
      infoBody: 'Авторизуйтесь, чтобы сохранять и делиться.',
      cancelButton: 'Отмена',
      goToReplButton: 'Перейти к этому реплу',
      validation: {
        snippetNameMaxLength: 'Не больше 20 символов',
        required: 'Не может быть пустым',
        singleWord: 'Допустимы буквы латинского алфавита, цифры и символы "-_"',
      },
    },
    errors: {
      unknown: 'Неизвестная ошибка',
      network: 'Ошибка сети',
    },
  },
};

export default ruLocales;
