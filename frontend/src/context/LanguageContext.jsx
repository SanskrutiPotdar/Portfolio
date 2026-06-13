import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    nav: {
      logo: "/assets/images/logo.jpeg",
      brand: "Prashant Pitaliya",
      home: "Home",
      about: "About",
      articles: "Articles",
      books: "Books",
      gallery: "Gallery",
      poetry: "Poetry",
      videos: "Videos",
      contact: "Contact",
      admin: "Admin"
    },
    hero: {
      welcome: "Welcome to my world",
      title: "Prashant Pitaliya",
      subtitle: "Author • Poet • Career Guide • Corporate Trainer • Community Mobilizer • Spiritual Mentor",
      desc: "Inspiring thousands across India through the power of positive thinking, leadership, and life-transforming wisdom. Author of 14+ books. Speaker at 300+ events. Dedicated to helping people unlock their true potential.",
      btnArticles: "Explore Articles",
      btnContact: "Get in Touch",
      lectures: "Lectures",
      books: "Books",
      livesTouched: "Lives Touched",
      experience: "Years Experience"
    },
    about: {
      eyebrow: "Welcome to my world",
      title: "About Prashant Pitaliya",
      desc: "Prashant Pitaliya, Began his career with distinguished academic and extra curriculum records. He has done his degree in economics, diploma in HRD, Journalism & Mass communication, MBA in Marketing & Production. He has attended professional training in MBTI, WPR, TQM/ISO, Certified coach, time & stress management etc.",
      desc2: "Prashant has bought out that best things in life are simple in a very simple manner working from Officer level to CEO post at a very young age. He has served well known organizations like Ghatge Patil, KT group in textile, Sakal media group, SSVSS, D Y Patil , Suryadatta  & other educational institutions for the last 20+ years. Having total 28 + years experience ,his work prominently involved synthesizing organisational processes, corporate training , creativity and productivity , public and media relation, Idea generation for profitability, Systems implementation for better quality & service, general administration, liaison with government. He is a poet, author, columnist & excellent motivational mentor. He has written 14 books out of which 4 are in the best seller category.",
      author: "Author",
      authorDesc: "Transforming ideas into books that inspire growth, purpose, and lifelong learning. 14+ books , many articles",
      poet: "Poet",
      poetDesc: "Weaving emotions into words that touch hearts and awaken minds. Hindi and Marathi poems.",
      careerGuide: "Career Guide",
      GuideDesc: "Empowering individuals to discover their potential and achieve meaningful success.",
      CorporateTrainer: "Corporate Trainer",
      trainerDesc: "Delivering impactful learning experiences that drive personal and organizational excellence. 300 + programs ",
      CommunityMobilizer: "Community Mobilizer",
      communityDesc: "Bringing people together to create positive change and stronger communities.",
      SpirityalMentor: "Spiritual Mentor",
      spiritualDesc: "Guiding individuals and communities toward inner peace, self-awareness, and purposeful living.The man who sows Dreams",
      whatIDo: "What I Do",
      career: "Career Milestone",
      careerSubtitle: "Key milestones in a life",
      location: "Maharashtra, India",
      languages: "Hindi · Marathi · English",
      booksStat: "14+ Published Books",
      t1995: "Received Best NSS Cadet Award from Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth.also earlier was selected for R D Parade.",
      t1997: "Completed MBA (Marketing & Production) with First Class from Shivaji University.",
      tt1997: "Started professional career with Amit Spinning Industries as Officer - Raw material procurement. Subsequently officer TQM",
      t2000: "Earned Diploma in HRD with Distinction and promoted to Manager - TQM at Ghatge Patil Automobiles.",
      t2002: "Joined Sakal Media Group as Officer Coordination.contributed to Newspaper in Education (NIE) expansion.",
      t2004: "Promoted to Management Consultant at Sakal.",
      t2005: "Joined ALFARAA Group UAE in a multinational environment.",
      t2006: "Returned to India and joined Holywood Academy as Public Relations Officer.",
      t2009: "Played a key role in formation of Sacrosanct Educational & Research Foundation.and sanjeevan engineering and technology institute ",
      t2010: "Completed Diploma in Mass Communication & Journalism with Distinction.",
      tt2010: "Appointed Chief Admin Officer, Dr. Bapuji Salunkhe Engineering & Technology Institute.",
      t2011: "Became Joint Director of Mumbai Centres of Shri Swami Vivekanand Shikshan Sanstha.",
      t2012: "Led establishment of five pre-primary schools within six months and received multiple social contribution awards and was selected by Mr Ronny Screwala for Swades Foundation but couldn't join.",
      tt2012: "Worked as Freelance Consultant for Skill Development and Entrepreneurship Projects.",
      t2013: "Appointed CEO of Shri Bahubali Vidyapeeth, overseeing 37 branches across Maharashtra and Karnataka.",
      tt2013: "Joined DKTE Cluster Project of same group  and contributed to ₹282 crore government infrastructure initiatives.",
      t2015: "Appointed General Manager, Sacrosanct Educational & Research Foundation for Green School project first of its kind in India",
      t2016: "Received Paschim Maharashtra Samajratna Award and Sinhgad Gourav Award.",
      t2017: "Honoured with Kalarpan Rashtriya Samaj Ratna Award.",
      t2018: "Recognized as Chief Mentor by Kunabi Samajonnati Sangh, Mumbai.",
      t2020: "Served as Personal Assistant to the Chancellor of Dr. D. Y. Patil Vidyapeeth , Pune",
      t2021: "Joined Suryadatta Group of Institutes as Director - OD & CSR. - Leading CSR, branding, public relations, documentation, and strategic institutional development initiatives.",
      t2026: "Joined BJS , Pune"
     
    },
    articles: {
      title: "Mantras for Positive Living",
      subtitle: "Explore all PDF publications and the featured positive life mantras essay.",
      searchPlaceholder: "Search PDFs",
      noPdfs: "No PDFs found. Add files to /src/assets/pdf.",
      view: "View",
      download: "Download",
      featuredTitle: "Mantras for Positive Living",
      featuredP1: "In human life, happiness-sorrow, success-failure are constantly coming and going. In such situations, positive thinking gives mental strength to a person. To live a positive life, it is necessary to adopt some basic mantras. These mantras not only make an individual's life happy but also inspire society.",
      featuredP2_prefix: "The first mantra is ",
      featuredP2_bold: "self-confidence (believing in oneself)",
      featuredP2_suffix: ". Chhatrapati Shivaji Maharaj established Swarajya in extremely adverse conditions. Due to his self-confidence, seemingly impossible tasks became possible. Self-confidence is the foundation of success.",
      featuredP3_prefix: "The second mantra is ",
      featuredP3_bold: "continuous effort",
      featuredP3_suffix: ". In history, Thomas Edison conducted thousands of experiments to make the electric bulb. Despite many failures, he did not give up. His attitude that \"failure is the first step to success\" is inspiring for everyone.",
      featuredP4_prefix: "The third important mantra is ",
      featuredP4_bold: "positive company and thoughts",
      featuredP4_suffix: ". Sant Tukaram Maharaj spread the message of love, peace, and good thoughts in society through his Abhangas. Good thoughts uplift the mind and drive away negativity.",
      featuredP5_prefix: "The fourth mantra is ",
      featuredP5_bold: "gratitude and contentment",
      featuredP5_suffix: ". Mahatma Gandhi lived a simple life and accepted the path of truth and non-violence. He taught that we should find joy even in the small things of life.",
      featuredP6: "In today's fast-paced life, stress is increasing. At such times, patience, self-confidence, continuous effort, and a positive outlook are the true mantras that enrich life. A positive-thinking person remains happy themselves and creates a light of hope in the lives of others.",
      signatureName: "Prashant Pitaliya",
      signatureRole: "Management Expert, Motivational Speaker, Author & Anchor"
    },
    books: {
      title: "Books",
      desc: "All books and cover previews are displayed from the assets folder.",
      firstBookTitle: "Narayan Murti Azim Premji",
      secondBookTitle: "Swapnbharari Ghenara Shasradnya Stifan Hawking",
      thirdBookTitle: "Buddhiman Guntavnukdar Waren Bafe",
      fourthBookTitle: "Eka Kalpk Jagacha Vichar Stiv Joves"
    },
    gallery: {
      title: "Articles",
      desc: "Browse all available event and profile images automatically loaded from the assets folder."
    },
    poetry: {
      title: "Poetry",
      desc: "A curated collection of poems and verses showcasing lyrical reflections and insights."
    },
    contact: {
      title: "Contact",
      name: "Name",
      email: "Email",
      mobile: "Mobile",
      message: "Message",
      send: "Send Message",
      successAlert: "Message sent successfully"
    }
  },
  mr: {
    nav: {
      brand: "प्रशांत पितालिया",
      home: "मुख्यपृष्ठ",
      about: "विषयी",
      articles: "लेख",
      books: "पुस्तके",
      gallery: "चित्रदालन",
      poetry: "कविता",
      videos: "व्हिडिओ",
      contact: "संपर्क",
      admin: "अॅडमिन"
    },
    hero: {
      welcome: "माझ्या विश्वात आपले स्वागत आहे",
      title: "प्रशांत पितालिया",
      subtitle: "व्यवस्थापन तज्ञ | प्रेरक वक्ता | लेखक | निवेदक",
      desc: "सकारात्मक विचारसरणी, नेतृत्व आणि जीवन बदलणाऱ्या ज्ञानाच्या जोरावर संपूर्ण भारतात हजारो लोकांना प्रेरित करत आहेत. २०+ पुस्तकांचे लेखक, ३००+ कार्यक्रमांमध्ये वक्ता. लोकांना त्यांची खरी क्षमता ओळखण्यात मदत करण्यासाठी समर्पित.",
      btnArticles: "लेख पहा",
      btnContact: "संपर्क साधा",
      lectures: "व्याख्याने",
      books: "पुस्तके",
      livesTouched: "प्रभावित जीवन",
      experience: "वर्षांचा अनुभव"
    },
    about: {
      eyebrow: "माझ्याबद्दल",
      title: "प्रशांत पितालिया यांच्याबद्दल",
      desc: "प्रशांत पितालिया यांनी आपल्या कारकिर्दीची सुरुवात उल्लेखनीय शैक्षणिक आणि सहशालेय कामगिरीच्या बळावर केली. त्यांनी अर्थशास्त्र विषयात पदवी प्राप्त केली असून मानव संसाधन विकास (HRD), पत्रकारिता व जनसंपर्क (Journalism & Mass Communication) यांमध्ये डिप्लोमा तसेच विपणन (Marketing) आणि उत्पादन व्यवस्थापन (Production) या विषयांमध्ये एमबीए पूर्ण केले आहे. याशिवाय त्यांनी MBTI, WPR, TQM/ISO, प्रमाणित कोचिंग (Certified Coaching), वेळ व ताण-तणाव व्यवस्थापन (Time & Stress Management) आदी क्षेत्रांमध्ये व्यावसायिक प्रशिक्षण घेतले आहे.",
      desc2: "प्रशांत यांचा विश्वास आहे की जीवनातील सर्वोत्तम गोष्टी साध्या असतात आणि त्यांनी आपल्या कार्यातून हे तत्त्व अत्यंत प्रभावीपणे सिद्ध केले आहे. अधिकारी पदापासून ते अत्यंत कमी वयात मुख्य कार्यकारी अधिकारी (CEO) पदापर्यंतचा त्यांचा प्रवास प्रेरणादायी आहे. गेल्या २० हून अधिक वर्षांत त्यांनी विविध नामांकित संस्थांमध्ये यशस्वीपणे कार्य केले आहे. त्यामध्ये गाठगे पाटील समूह, के.टी. ग्रुप (वस्त्रोद्योग), सकाळ मीडिया समूह, SSVSS, डी. वाय. पाटील, सूर्यदत्ता समूह तसेच इतर अनेक शैक्षणिक संस्थांचा समावेश आहे. एकूण २८ वर्षांहून अधिक अनुभव असलेल्या प्रशांत यांचे कार्य प्रामुख्याने संस्थात्मक प्रक्रिया सुसूत्रीकरण, कॉर्पोरेट प्रशिक्षण, सर्जनशीलता व उत्पादकता वाढ, जनसंपर्क व माध्यम संबंध, नफा वाढीसाठी अभिनव कल्पनांची निर्मिती, गुणवत्ता व सेवावृद्धीसाठी प्रणालींची अंमलबजावणी, सामान्य प्रशासन तसेच शासकीय स्तरावरील समन्वय (Liaisoning) या क्षेत्रांमध्ये केंद्रित राहिले आहे.",
      author: "लेखक",
      authorDesc: "विकास, उद्देश आणि आयुष्यभर शिकण्याची प्रेरणा देणारी पुस्तके घडवतो. 14+ पुस्तके, अनेक लेख",
      poet: "कवी",
      poetDesc: "भावनांना शब्दरूप देऊन हृदयाला स्पर्श करणाऱ्या आणि मन जागृत करणाऱ्या कविता. हिंदी आणि मराठी कविता.",
      careerGuide: "करिअर मार्गदर्शक",
      GuideDesc: "व्यक्तींना त्यांची क्षमता ओळखून अर्थपूर्ण यश मिळवण्यासाठी सक्षम करतो.",
      CorporateTrainer: "कॉर्पोरेट प्रशिक्षक",
      trainerDesc: "व्यक्तिगत आणि संस्थात्मक उत्कृष्टतेला चालना देणारे प्रभावी शिक्षण अनुभव देतो. 300+ प्रशिक्षण कार्यक्रम",
      CommunityMobilizer: "समुदाय संघटक",
      communityDesc: "लोकांना एकत्र आणून सकारात्मक बदल आणि अधिक मजबूत समुदाय निर्माण करतो.",
      SpirityalMentor: "आध्यात्मिक मार्गदर्शक",
      spiritualDesc: "व्यक्ती आणि समुदायांना अंतर्मनातील शांतता, आत्मजागरूकता आणि उद्देशपूर्ण जीवनाकडे मार्गदर्शन करतो.",
      whatIDo: "माझे कार्य",
      career: "यशस्वी वाटचाल",
      careerSubtitle: "आयुष्यातील महत्त्वाचे टप्पे",
      location: "महाराष्ट्र, भारत",
      languages: "हिंदी · मराठी · इंग्रजी",
      booksStat: "१४+ प्रकाशित पुस्तके",
      t1995: "डॉ. बाळासाहेब सावंत कोकण कृषी विद्यापीठाकडून सर्वोत्कृष्ट एनएसएस कॅडेट पुरस्कार प्राप्त. यापूर्वी प्रजासत्ताक दिन (R.D.) परेड साठी निवड झाली होती.",
      t1997: "शिवाजी विद्यापीठातून मार्केटिंग आणि प्रॉडक्शन विषयातील एमबीए प्रथम श्रेणीत पूर्ण केला.",
      tt1997: "अमित स्पिनिंग इंडस्ट्रीज मध्ये ऑफिसर - कच्चा माल खरेदी म्हणून व्यावसायिक कारकीर्द सुरू केली. नंतर टीक्यूएम अधिकारी.",
      t2000: "एचआरडी (Human Resource Development) मधील डिप्लोमा विशेष प्राविण्यासह पूर्ण केला आणि घाटगे पाटील ऑटोमोबाईल्स येथे मॅनेजर - टीक्यूएम म्हणून पदोन्नती मिळाली.",
      t2002: "सकाळ मीडिया समूह मध्ये ऑफिसर - कोऑर्डिनेशन म्हणून रुजू. Newspaper in Education (NIE) उपक्रमाच्या विस्तारात महत्त्वपूर्ण योगदान दिले.",
      t2004: "सकाळमध्ये मॅनेजमेंट कन्सल्टंट म्हणून पदोन्नती.",
      t2005: "अल्फारा ग्रुप, यूएई मध्ये बहुराष्ट्रीय कार्यसंस्कृतीत कार्य करण्याची संधी मिळाली.",
      t2006: "भारतात परतल्यानंतर हॉलीवूड अकॅडमी येथे जनसंपर्क अधिकारी (Public Relations Officer) म्हणून कार्यभार स्वीकारला.",
      t2009: "सॅक्रोसॅंक्ट एज्युकेशनल अँड रिसर्च फाउंडेशन तसेच संजीवन इंजिनिअरिंग अँड टेक्नॉलॉजी इन्स्टिट्यूट यांच्या स्थापनेत महत्त्वपूर्ण भूमिका बजावली.",
      t2010: "मास कम्युनिकेशन आणि जर्नालिझम मधील डिप्लोमा विशेष प्राविण्यासह पूर्ण केला.",
      tt2010: "डॉ.बापूजी साळुंखे अभियांत्रिकी व तंत्रज्ञान संस्था येथे मुख्य प्रशासकीय अधिकारी (Chief Administrative Officer) म्हणून नियुक्ती.",
      t2011: "श्री स्वामी विवेकानंद शिक्षण संस्थाच्या मुंबई केंद्रांचे संयुक्त संचालक (Joint Director) म्हणून जबाबदारी स्वीकारली.",
      t2012: "अवघ्या सहा महिन्यांत पाच पूर्वप्राथमिक शाळांच्या स्थापनेचे नेतृत्व केले. सामाजिक योगदानासाठी अनेक पुरस्कार प्राप्त झाले. तसेच श्री रॉनी स्क्रूवाला यांनी स्वदेस फाउंडेशनसाठी निवड केली होती; मात्र काही कारणांमुळे त्या संधीचा स्वीकार करता आला नाही.",
      tt2012: "कौशल्य विकास (Skill Development) आणि उद्योजकता (Entrepreneurship) प्रकल्पांसाठी स्वतंत्र सल्लागार (Freelance Consultant) म्हणून कार्य केले.",
      t2013: "श्री बाहुबली विद्यापीठचे मुख्य कार्यकारी अधिकारी (CEO) म्हणून नियुक्ती; महाराष्ट्र व कर्नाटकातील ३७ शाखांचे नेतृत्व केले.",
      tt2013: "त्याच समूहाच्या डीकेटीई क्लस्टर प्रकल्पात सहभागी होत केंद्र व राज्य शासनाच्या सुमारे ₹२८२ कोटींच्या पायाभूत सुविधा विकास उपक्रमांमध्ये योगदान दिले.",
      t2015: "सॅक्रोसॅंक्ट एज्युकेशनल अँड रिसर्च फाउंडेशन येथे महाव्यवस्थापक (General Manager) म्हणून नियुक्ती. भारतातील पहिल्या प्रकारच्या ग्रीन स्कूल प्रकल्पाचे नेतृत्व केले.",
      t2016: "पश्चिम महाराष्ट्र समाजरत्न पुरस्कार आणि सिंहगड गौरव पुरस्कार प्राप्त.",
      t2017: "कलार्पण राष्ट्रीय समाजरत्न पुरस्काराने सन्मानित.",
      t2018: "कुणबी समाजोन्नती संघ, मुंबई यांच्याकडून मुख्य मार्गदर्शक (Chief Mentor) म्हणून गौरव.",
      t2020: "Dr. D. Y. Patil Vidyapeeth चे कुलगुरू (Chancellor) यांचे वैयक्तिक सहाय्यक (Personal Assistant) म्हणून कार्य केले.",
      t2021: "Suryadatta Group of Institutes येथे संचालक - संघटन विकास (OD) व CSR म्हणून रुजू. कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR), ब्रँडिंग, जनसंपर्क, दस्तऐवजीकरण आणि संस्थात्मक धोरणात्मक विकास या क्षेत्रांचे नेतृत्व केले.",
      t2026: "Bharatiya Jain Sanghatana (BJS), पुणे येथे कार्यारंभ."
    },
    articles: {
      title: "सकारात्मक जीवनासाठीचे मंत्र",
      subtitle: "सर्व पीडीएफ प्रकाशने आणि सकारात्मक जीवन मंत्रांवरील निबंध शोधा.",
      searchPlaceholder: "पीडीएफ शोधा",
      noPdfs: "कोणत्याही पीडीएफ सापडल्या नाहीत. /src/assets/pdf मध्ये फाइल्स जोडा.",
      view: "पहा",
      download: "डाउनलोड",
      featuredTitle: "सकारात्मक जीवनासाठीचे मंत्र",
      featuredP1: "मानवी जीवनात सुख-दुःख, यश-अपयश हे सतत येत असते. अशा परिस्थितीत सकारात्मक विचारसरणी माणसाला मानसिक बळ देते. सकारात्मक जीवन जगण्यासाठी काही मूलभूत मंत्र आत्मसात करणे आवश्यक आहे. हे मंत्र केवळ व्यक्तीचे जीवन आनंदी बनवत नाहीत, तर समाजालाही प्रेरणा देतात.",
      featuredP2_prefix: "पहिला मंत्र म्हणजे ",
      featuredP2_bold: "स्वतःवर विश्वास ठेवणे",
      featuredP2_suffix: ". छत्रपती शिवाजी महाराजांनी अत्यंत प्रतिकूल परिस्थितीत स्वराज्याची स्थापना केली. त्यांच्या आत्मविश्वासामुळे अशक्य वाटणारे कार्य शक्य झाले. आत्मविश्वास हा यशाचा पाया असतो.",
      featuredP3_prefix: "दुसरा मंत्र म्हणजे ",
      featuredP3_bold: "सतत प्रयत्न करत राहणे",
      featuredP3_suffix: ". इतिहासात थॉमस एडिसन यांनी विजेचा दिवा तयार करण्यासाठी हजारो प्रयोग केले. अनेक अपयश आले, तरी त्यांनी हार मानली नाही. “अपयश म्हणजे यशाकडे जाणारी पहिली पायरी” हा त्यांचा दृष्टिकोन प्रत्येकासाठी प्रेरणादायी आहे.",
      featuredP4_prefix: "तिसरा महत्त्वाचा मंत्र म्हणजे ",
      featuredP4_bold: "सकारात्मक संगत आणि विचार",
      featuredP4_suffix: ". संत तुकाराम महाराजांनी अभंगांच्या माध्यमातून समाजाला प्रेम, शांतता आणि सद्विचारांचा संदेश दिला. चांगले विचार मनाला उभारी देतात आणि नकारात्मकता दूर करतात.",
      featuredP5_prefix: "चौथा मंत्र म्हणजे ",
      featuredP5_bold: "कृतज्ञता आणि समाधान",
      featuredP5_suffix: ". महात्मा गांधी यांनी साधेपणाने जीवन जगत सत्य आणि अहिंसेचा मार्ग स्वीकारला. त्यांनी शिकवले की, जीवनातील छोट्या गोष्टींमध्येही आनंद शोधला पाहिजे.",
      featuredP6: "आजच्या धावपळीच्या जीवनात ताणतणाव वाढत आहेत. अशा वेळी संयम, आत्मविश्वास, सतत प्रयत्न आणि सकारात्मक दृष्टीकोन हेच जीवन समृद्ध करणारे खरे मंत्र आहेत. सकारात्मक विचार करणारी व्यक्ती स्वतः आनंदी राहते आणि इतरांच्या जीवनातही आशेचा प्रकाश निर्माण करते.",
      signatureName: "प्रशांत पितालिया",
      signatureRole: "व्यवस्थापन तज्ञ, प्रेरक वक्ता, लेखक आणि निवेदक"
    },
    books: {
      title: "पुस्तके",
      desc: "सर्व पुस्तके आणि कव्हर पूर्वावलोकन असेट्स फोल्डरमधून दर्शवली आहेत.",
      detailTemplate: "{title} साठी पुस्तक तपशील आणि कव्हर पूर्वावलोकन.",
      firstBookTitle: "नारायण मूर्ती अझीम प्रेमजी",
      secondBookTitle: "स्वप्नभरारी घेणारा शास्त्रज्ञ स्टीफन हॉकिंग",
      thirdBookTitle: "बुद्धिमान गुंतवणूकदार वारेन बफे",
      fourthBookTitle: "एका कल्पक जगाचा विचार स्टीव्ह जॉब्झ"
    },
    gallery: {
      title: "चित्रदालन",
      desc: "असेट्स फोल्डरमधून स्वयंचलितपणे लोड केलेल्या सर्व कार्यक्रम आणि प्रोफाईल प्रतिमा पहा."
    },
    poetry: {
      title: "कविता",
      desc: "कवितांची एक संकलित निवड जी भावनात्मक प्रतिबिंब आणि अंतर्दृष्टी दर्शवते."
    },
    
    contact: {
      title: "संपर्क",
      name: "नाव",
      email: "ईमेल",
      mobile: "मोबाईल",
      message: "संदेश",
      send: "संदेश पाठवा",
      successAlert: "संदेश यशस्वीरित्या पाठवला गेला"
    }
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en')

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'mr' : 'en'))
  }

  const t = (path, replacements = {}) => {
    const keys = path.split('.')
    let value = translations[language]
    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key]
      } else {
        return path
      }
    }
    if (typeof value === 'string') {
      let result = value
      Object.entries(replacements).forEach(([key, val]) => {
        result = result.replace(`{${key}}`, val)
      })
      return result
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
