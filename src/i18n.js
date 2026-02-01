import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            // --- NavBar ---
            "home": "Home",
            "about_us": "About Us",
            "services": "Services",
            "our_fleet": "Our Fleet",
            "contact_us": "Contact Us",

            // --- General & Buttons ---
            "book_now": "Book Now",
            "details": "Details",
            "call_us": "Call Us",
            "whatsapp": "WhatsApp",

            // --- Car Categories ---
            "luxury_cars": "Luxury Cars",
            "economy_cars": "Sports Cars",
            "suv_cars": "Large Family Cars",
            "family_cars": "Mid-size Economy Family Cars",

            // --- Footer Section ---
            "about_company": "About Company",
            "footer_description": "We are leaders in providing luxury and economy mobility solutions. We provide a fleet of the latest cars to meet your needs with the highest standards of quality and comfort.",
            "our_location": "Our Location",
            "address_details": "Cairo, Nasr City, Abbas El Akkad St.",
            "open_daily": "Open Daily",
            "working_hours": "9:00 AM - 10:00 PM",
            // في قسم en:
            "services_title": "Our Services",
            // داخل ملف i18n.js في قسم en:
            "invest": {
                "sub_title": "Our Premium Services",
                "main_title": "Elevate Your Driving Experience",
                "order_btn": "Order Service Now",
                "tabs": {
                    "rental": "Car Rental",
                    "insurance": "Insurance",
                    "legal": "Legal Contracts"
                },
                "rental": {
                    "title": "Best Car Rental Service in Kuwait",
                    "desc": "We provide a wide range of modern cars, from economy to luxury, to suit all your needs.",
                    "features": ["✔ Full insurance on all cars", "✔ Airport pick-up & drop-off", "✔ Daily, weekly, and monthly contracts"]
                },
                "insurance": {
                    "title": "Full Protection & Peace of Mind",
                    "desc": "We provide the best comprehensive insurance plans that cover all your needs and ensure quick compensation.",
                    "features": ["✔ Full accident coverage", "✔ Fast insurance procedures", "✔ Replacement car service"]
                },
                "legal": {
                    "title": "Certified Documentation for Your Rights",
                    "desc": "We offer legal contract services that give your transactions an official legal character.",
                    "features": ["✔ Legal buy & sell contracts", "✔ Official documentation", "✔ Full data confidentiality"]
                }
            }
            ,
            // داخل قسم en:
            "services_content": {
                "rental": {
                    "title": "Modern Car Rental Fleet",
                    "desc": "We offer a unique car rental experience in Kuwait. Whether you need an economy car for daily use or a luxury car for special occasions, we provide the latest models at competitive prices."
                },
                "maintenance": {
                    "title": "Full Readiness & Periodic Maintenance",
                    "desc": "We don't just rent cars; we provide a high-quality transportation solution. Our rental fleet undergoes strict periodic maintenance and a comprehensive inspection before every delivery."
                },
                "driver": {
                    "title": "Chauffeur Services",
                    "desc": "We provide comfort and luxury through our professional chauffeur services. We guarantee full privacy and strict punctuality to reach your destination safely and comfortably."
                }
            }
            ,
            // داخل قسم en:
            "business": {
                "launch_today": "Start your journey today...with",
                "brand_name": "Wahaj Al-Alamiya",
                "tagline": "Beyond an option, the certain choice for every trip."
            },
            // في قسم en:
            "contact_title": "Contact Us",
            // داخل قسم en:
            "form": {
                "title": "We Are Happy To Hear From You",
                "name_label": "Full Name",
                "name_placeholder": "Enter your name here",
                "phone_label": "Phone Number",
                "phone_placeholder": "Example: 96512345678",
                "email_label": "Email Address",
                "message_label": "Your Message",
                "message_placeholder": "How can we help you?",
                "submit_btn": "Send Message",
                "success_msg": "Your message has been sent successfully! We will contact you soon.",
                "error_msg": "An error occurred during sending, please try again later."
            },
            // داخل قسم en:
            "about": {
                "sub_title": "About Us",
                "main_title": "Learn about our services and what we offer",
                "luxury": "Luxury Cars",
                "suv": "Sport Super Cars",
                "economy": "Large Family Cars",
                "airport_basic": "Basic Airport Service",
                "vip_service": "VIP Service",
                "tabs": {
                    "chauffeur": "With Driver",
                    "airport": "Airport Limo",
                    "needs": "Your Needs"
                },
                "right_side": {
                    "title": "Drive with Style and Confidence with Al-Wajeh, Your Ideal Partner in Kuwait",
                    "strength_label": "Our Fleet",
                    "strength_text": "Diversity that meets every ambition. We understand that mobility needs vary from one client to another.",
                    "luxury_text": "The language of elegance and distinction when first impressions matter most, an unforgettable experience of luxury.",
                    "sports_text": "Superior performance and amazing speed for thrill-seekers and distinction on the road.",
                    "large_family_text": "Limitless power and spaciousness, designed to give your family the ultimate comfort and safety on every journey.",
                    "economy_family_text": "Smart efficiency for your daily commutes, combining fuel economy with absolute reliability for the family."
                }
            },
            // داخل قسم en:
            "slider": {
                "slide1": {
                    "title_part1": "The First",
                    "title_span": "In Kuwait",
                    "title_part2": "For Your Business",
                    "desc": "Wahaj is always with you to provide the best car rental services in Kuwait."
                },
                "slide2": {
                    "title_part1": "Best",
                    "title_span": "Service",
                    "title_part2": "In Kuwait",
                    "desc": "We offer a wide range of high-quality cars at great prices for all our customers."
                },
                "slide3": {
                    "title_part1": "Modern",
                    "title_span": "SUV",
                    "title_part2": "Fleet",
                    "desc": "We offer a wide range of the latest luxury car models with professional drivers."
                }
            },
            // داخل قسم en:
            "fleet": {
                "title": "Our Fleet",
                "subtitle": "We offer a wide range of high-quality cars at great prices. With diversity in brands, sizes, and options, we are confident that we can satisfy all our clients.",
                "more_btn": "More",
                "categories": {
                    "luxury": { "name": "Luxury Cars", "desc": "The best luxury cars for rent with a driver in Kuwait." },
                    "economy": { "name": "Mid-Size & Economy Cars", "desc": "Practical and affordable cars for your daily needs." },
                    "suv": { "name": "SPORT SUPER CAR", "desc": "Outstanding power and performance on all Kuwaiti roads." },
                    "family": { "name": "Large Family Cars", "desc": "Space, comfort, and safety for all your family members." }
                }
            },// داخل قسم en:
            "testimonials": {
                "main_title": "Wahaj Car Rental",
                "slide1": {
                    "text": "“At Wahaj Car Rental, we provide a wide range of car and limousine services for business through a fleet of the latest modern luxury models, and professional drivers to ensure a unique experience and distinguished service.”"
                },
                "slide2": {
                    "text": "“Rent your luxury car in three easy steps with Wahaj. We believe driving should be easy and enjoyable. Wahaj is your gateway to the world of luxury travel in Kuwait. Book your dream car instantly via WhatsApp with no forms or advance payments.”"
                }
            }

        }
    },
    ar: {
        translation: {
            // --- NavBar ---
            "home": "الرئيسية",
            "about_us": "من نحن",
            "services": "خدماتنا",
            "our_fleet": "أسطولنا",
            "contact_us": "اتصل بنا",

            // --- General & Buttons ---
            "book_now": "احجز الآن",
            "details": "التفاصيل",
            "call_us": "اتصل بنا",
            "whatsapp": "واتساب",

            // --- Car Categories ---
            "luxury_cars": "السيارات الفارهة",
            "economy_cars": "السيارات الرياضية",
            "suv_cars": "السيارات الكبيرة العائلية",
            "family_cars": "السيارات المتوسطة العائلية الاقتصادية",
            // --- Footer Section ---
            "about_company": "عن شركتنا",
            "footer_description": "نحن رائدون في تقديم حلول التنقل الفاخرة والاقتصادية. نوفر أسطولاً من أحدث السيارات لتلبية احتياجاتكم بأعلى معايير الجودة والراحة.",
            "our_location": "موقعنا",
            "address_details": "الكويت قسيمة50، العارضية 92400",
            "open_daily": "مفتوح يومياً",
            "working_hours": "9:00 ص - 10:00 م",
            "services_title": "خدماتنا",
            "invest": {
                "sub_title": "خدماتنا المتميزة",
                "main_title": "ارتقِ بتجربة قيادتك معنا",
                "order_btn": "اطلب الخدمة الآن",
                "tabs": {
                    "rental": "تأجير السيارات",
                    "insurance": "تأمين شامل",
                    "legal": "العقود التوثيقية"
                },
                "rental": {
                    "title": "أفضل خدمة تأجير سيارات في الكويت",
                    "desc": "نوفر لك مجموعة واسعة من السيارات الحديثة، من الاقتصادية إلى الفاخرة، لتناسب جميع احتياجاتك سواء كانت لرحلات العمل أو النزهات العائلية.",
                    "features": ["✔ تأمين شامل على جميع السيارات", "✔ خدمة استلام وتسليم من المطار", "✔ عقود يومية، أسبوعية، وشهرية"]
                },
                "insurance": {
                    "title": "حماية كاملة وراحة بال على الطريق",
                    "desc": "نوفر لك أفضل خطط التأمين الشامل التي تغطي كافة احتياجاتك وتضمن لك تعويضاً سريعاً وحماية متكاملة ضد الحوادث والأضرار.",
                    "features": ["✔ تغطية كاملة للحوادث", "✔ تأمين سريع وإجراءات ميسرة", "✔ خدمة سيارة بديلة"]
                },
                "legal": {
                    "title": "توثيق معتمد لضمان حقوقك",
                    "desc": "نقدم لك خدمة العقود التوثيقية التي تمنح تعاملاتك صبغة قانونية رسمية لضمان مستقبل خالٍ من النزاعات.",
                    "features": ["✔ صياغة عقود بيع وشراء", "✔ توثيق رسمي للحقوق", "✔ سرية تامة للبيانات"]
                }
            },
            // داخل قسم ar:
            "services_content": {
                "rental": {
                    "title": "أحدث أسطول لتأجير السيارات",
                    "desc": "نقدم لك تجربة فريدة في استئجار السيارات داخل الكويت. سواء كنت تبحث عن سيارة اقتصادية ليومك العملي أو سيارة فارهة لمناسباتك الخاصة، نحن نوفر لك أحدث الموديلات بأسعار تنافسية."
                },
                "maintenance": {
                    "title": "الجاهزية التامة والصيانة الدورية",
                    "desc": "نحن لا نؤجر مجرد سيارات، بل نقدم لك وسيلة تنقل خاضعة لأعلى معايير الجودة. أسطول سيارات التأجير لدينا يخضع لصيانة دورية صارمة وفحص شامل قبل كل عملية تسليم."
                },
                "driver": {
                    "title": "خدمات النقل بسائق",
                    "desc": "نوفر لك سبل الراحة والرفاهية من خلال خدمة السيارات المزودة بسائقين محترفين. نضمن لك خصوصية تامة، التزاماً دقيقاً بالمواعيد لتصل إلى وجهتك بكل راحة وأمان."
                }
            },
            // داخل قسم ar:
            "business": {
                "launch_today": "ابدأ رحلتك اليوم...مع",
                "brand_name": " وهج العالمية لتأجير السيارات",
                "tagline": "ليس مجرد خيار، بل هو الخيار الأمثل لكل رحلة"
            },
            // في قسم ar:
            "contact_title": "تواصل معنا",
            // داخل قسم ar:
            "form": {
                "title": "يسعدنا تواصلك معنا",
                "name_label": "الاسم الكامل",
                "name_placeholder": "أدخل اسمك هنا",
                "phone_label": "رقم الهاتف",
                "phone_placeholder": "مثال: 96512345678",
                "email_label": "البريد الإلكتروني",
                "message_label": "رسالتك",
                "message_placeholder": "كيف يمكننا مساعدتك؟",
                "submit_btn": "إرسال الرسالة",
                "success_msg": "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
                "error_msg": "حدث خطأ في الإرسال، يرجى المحاولة لاحقاً."
            },
            // داخل قسم ar:
            "about": {
                "sub_title": "نبذة عنا",
                "main_title": "تعرف على خدمتنا وماذا نقدم",
                "luxury": "السيارات الفارهة",
                "suv": "سيارات الرياضية",
                "economy": "السيارات عائلية كبيرة",
                "airport_basic": "خدمة المطار الأساسية",
                "vip_service": "خدمة كبار الشخصيات",
                "tabs": {
                    "chauffeur": "تأجير بسائق",
                    "airport": "تأجير من المطار",
                    "needs": "احتياجاتك الخاصة"
                },
                "right_side": {
                    "title": "انطلق بأناقة وثقة مع شركة وهج العالمية، شريكك المثالي في الكويت",
                    "strength_label": "أسطولنا",
                    "strength_text": "تنوع يلبي كل طموح. نحن نتفهم أن احتياجات التنقل تختلف من عميل لآخر.",
                    "luxury_text": "سيارات فارهة: لغة الأناقة والتميز عندما تكون الانطباعات الأولى هي الأهم، تجربة لا تُنسى من الفخامة.",
                    "sports_text": "سيارات رياضية: أداء فائق وسرعة مذهلة لعشاق الإثارة والتميز على الطريق.",
                    "large_family_text": "سيارات عائلية كبيرة: القوة والرحابة بلا حدود، صُممت لتمنح عائلتك أقصى درجات الراحة والأمان في كل رحلة.",
                    "economy_family_text": "سيارات عائلية اقتصادية: الكفاءة الذكية لتنقلاتك اليومية، تجمع بين توفير الوقود والاعتمادية المطلقة للعائلة."
                }
            }
            ,// داخل قسم ar:
            "slider": {
                "slide1": {
                    "title_part1": "الأولى",
                    "title_span": "في الكويت",
                    "title_part2": "من أجل أعمالك",
                    "desc": "واهج دائماً معك لتوفير أفضل الخدمات في تأجير السيارات داخل الكويت"
                },
                "slide2": {
                    "title_part1": "أفضل",
                    "title_span": "خدمة",
                    "title_part2": "في الكويت",
                    "desc": "نحن نقدم مجموعة كبيرة من السيارات عالية الجودة بأسعار رائعة لجميع عملائنا."
                },
                "slide3": {
                    "title_part1": "أسطول",
                    "title_span": "الدفع الرباعي",
                    "title_part2": "الحديث",
                    "desc": "نقدم مجموعة واسعة من أحدث موديلات السيارات الفاخرة مع سائقين محترفين."
                }
            },
            // داخل قسم ar:
            "fleet": {
                "title": "اسطولنا",
                "subtitle": "نحن نقدم مجموعة كبيرة من السيارات عالية الجودة بأسعار رائعة، ولدينا تنوع في العلامات التجارية والأحجام والخيارات ونحن على يقين من أننا نستطيع إرضاء جميع عملائنا.",
                "more_btn": "المزيد",
                "categories": {
                    "luxury": { "name": "سيارات الفارهة", "desc": "أفضل السيارات الفاخرة للإيجار مع سائق في الكويت." },
                    "economy": { "name": "سيارات عائلية اقتصادية", "desc": "سيارات عملية واقتصادية تناسب احتياجاتك اليومية." },
                    "suv": { "name": "سيارات رياضية", "desc": "قوة وأداء متميز على جميع الطرقات في الكويت." },
                    "family": { "name": "سيارات عائلية كبيرة", "desc": "مساحة وراحة وأمان لجميع أفراد عائلتك." }
                }
            },// داخل قسم ar:
            "testimonials": {
                "main_title": "وهج العالمية لتأجير السيارات",
                "slide1": {
                    "text": "“في وهج العالمية لتأجير السيارات، نقدم مجموعة واسعة من خدمات السيارات والليموزين لرجال الأعمال من خلال أسطول يتكون من أحدث موديلات السيارات الفاخرة الحديثة، وسائقين محترفين لضمان جودة تجربة فريدة وخدمة متميزه.”"
                },
                "slide2": {
                    "text": "“استأجر سيارتك الفاخرة بثلاث خطوات سهلة مع شركة وهج العالمية لتأجير السيارات. نؤمن بأن القيادة يجب أن تكون سهلة وممتعة. واهج هي بوابتك إلى عالم السفر الفاخر في الكويت. يمكنك حجز سيارة أحلامك فورًا عبر واتساب بدون استمارات أو دفعات مقدمة.”"
                }
            }


        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "ar",
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        interpolation: { escapeValue: false }
    });

export default i18n;