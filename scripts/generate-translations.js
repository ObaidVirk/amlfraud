const fs = require('fs');
const path = require('path');

const translations = {
    fr: {
        nav: {
            products: "Produits",
            solutions: "Solutions",
            resources: "Ressources",
            company: "Entreprise",
            login: "Connexion",
            signup: "S'inscrire",
            signout: "Déconnexion",
            dashboard: "Tableau de bord",
            requestDemo: "Demander une démo"
        },
        home: {
            heroTitle: "Intelligence Blockchain pour la conformité Crypto"
        }
    },
    es: {
        nav: {
            products: "Productos",
            solutions: "Soluciones",
            resources: "Recursos",
            company: "Empresa",
            login: "Iniciar sesión",
            signup: "Registrarse",
            signout: "Cerrar sesión",
            dashboard: "Panel",
            requestDemo: "Solicitar demo"
        },
        home: {
            heroTitle: "Inteligencia Blockchain para el cumplimiento Crypto"
        }
    },
    de: {
        nav: {
            products: "Produkte",
            solutions: "Lösungen",
            resources: "Ressourcen",
            company: "Unternehmen",
            login: "Anmelden",
            signup: "Registrieren",
            signout: "Abmelden",
            dashboard: "Dashboard",
            requestDemo: "Demo anfordern"
        },
        home: {
            heroTitle: "Blockchain-Intelligenz für Krypto-Compliance"
        }
    },
    zh: {
        nav: {
            products: "产品",
            solutions: "解决方案",
            resources: "资源",
            company: "公司",
            login: "登录",
            signup: "注册",
            signout: "退出",
            dashboard: "仪表盘",
            requestDemo: "申请演示"
        },
        home: {
            heroTitle: "用于加密合规的区块链智能"
        }
    },
    ja: {
        nav: {
            products: "製品",
            solutions: "ソリューション",
            resources: "リソース",
            company: "会社",
            login: "ログイン",
            signup: "サインアップ",
            signout: "ログアウト",
            dashboard: "ダッシュボード",
            requestDemo: "デモをリクエスト"
        },
        home: {
            heroTitle: "暗号資産コンプライアンスのためのブロックチェーンインテリジェンス"
        }
    },
    ko: {
        nav: {
            products: "제품",
            solutions: "솔루션",
            resources: "리소스",
            company: "회사",
            login: "로그인",
            signup: "가입하기",
            signout: "로그아웃",
            dashboard: "대시보드",
            requestDemo: "데모 요청"
        },
        home: {
            heroTitle: "암호화폐 규정 준수를 위한 블록체인 인텔리전스"
        }
    },
    tr: {
        nav: {
            products: "Ürünler",
            solutions: "Çözümler",
            resources: "Kaynaklar",
            company: "Şirket",
            login: "Giriş Yap",
            signup: "Kaydol",
            signout: "Çıkış Yap",
            dashboard: "Panel",
            requestDemo: "Demo İste"
        },
        home: {
            heroTitle: "Kripto Uyumluluğu için Blockchain İstihbaratı"
        }
    },
    ru: {
        nav: {
            products: "Продукты",
            solutions: "Решения",
            resources: "Ресурсы",
            company: "Компания",
            login: "Войти",
            signup: "Регистрация",
            signout: "Выйти",
            dashboard: "Панель управления",
            requestDemo: "Запросить демо"
        },
        home: {
            heroTitle: "Блокчейн-аналитика для крипто-комплаенса"
        }
    },
    pt: {
        nav: {
            products: "Produtos",
            solutions: "Soluções",
            resources: "Recursos",
            company: "Empresa",
            login: "Entrar",
            signup: "Inscrever-se",
            signout: "Sair",
            dashboard: "Painel",
            requestDemo: "Solicitar demonstração"
        },
        home: {
            heroTitle: "Inteligência Blockchain para Conformidade Cripto"
        }
    },
    hi: {
        nav: {
            products: "उत्पाद",
            solutions: "समाधान",
            resources: "संसाधन",
            company: "कंपनी",
            login: "लॉग इन करें",
            signup: "साइन अप करें",
            signout: "साइन आउट",
            dashboard: "डैशबोर्ड",
            requestDemo: "डेमो का अनुरोध करें"
        },
        home: {
            heroTitle: "क्रिप्टो अनुपालन के लिए ब्लॉकचेन इंटेलिजेंस"
        }
    },
    bn: {
        nav: {
            products: "পণ্য",
            solutions: "সমাধান",
            resources: "সম্পদ",
            company: "কোম্পানি",
            login: "লগ ইন",
            signup: "সাইন আপ",
            signout: "সাইন আউট",
            dashboard: "ড্যাশবোর্ড",
            requestDemo: "ডেমো অনুরোধ করুন"
        },
        home: {
            heroTitle: "ক্রিপ্টো কমপ্লায়েন্সের জন্য ব্লকচেইন ইন্টেলিজেন্স"
        }
    },
    id: {
        nav: {
            products: "Produk",
            solutions: "Solusi",
            resources: "Sumber Daya",
            company: "Perusahaan",
            login: "Masuk",
            signup: "Daftar",
            signout: "Keluar",
            dashboard: "Dasbor",
            requestDemo: "Minta Demo"
        },
        home: {
            heroTitle: "Intelijen Blockchain untuk Kepatuhan Kripto"
        }
    },
    ms: {
        nav: {
            products: "Produk",
            solutions: "Penyelesaian",
            resources: "Sumber",
            company: "Syarikat",
            login: "Log Masuk",
            signup: "Daftar",
            signout: "Log Keluar",
            dashboard: "Papan Pemuka",
            requestDemo: "Minta Demo"
        },
        home: {
            heroTitle: "Risikan Blockchain untuk Pematuhan Kripto"
        }
    },
    it: {
        nav: {
            products: "Prodotti",
            solutions: "Soluzioni",
            resources: "Risorse",
            company: "Azienda",
            login: "Accedi",
            signup: "Iscriviti",
            signout: "Esci",
            dashboard: "Dashboard",
            requestDemo: "Richiedi demo"
        },
        home: {
            heroTitle: "Intelligence Blockchain per la conformità Crypto"
        }
    },
    nl: {
        nav: {
            products: "Producten",
            solutions: "Oplossingen",
            resources: "Bronnen",
            company: "Bedrijf",
            login: "Inloggen",
            signup: "Aanmelden",
            signout: "Uitloggen",
            dashboard: "Dashboard",
            requestDemo: "Demo aanvragen"
        },
        home: {
            heroTitle: "Blockchain Intelligence voor Crypto Compliance"
        }
    },
    pl: {
        nav: {
            products: "Produkty",
            solutions: "Rozwiązania",
            resources: "Zasoby",
            company: "Firma",
            login: "Zaloguj się",
            signup: "Zarejestruj się",
            signout: "Wyloguj się",
            dashboard: "Panel",
            requestDemo: "Poproś o demo"
        },
        home: {
            heroTitle: "Inteligencja Blockchain dla zgodności z przepisami krypto"
        }
    },
    fa: {
        nav: {
            products: "محصولات",
            solutions: "راه حل ها",
            resources: "منابع",
            company: "شرکت",
            login: "ورود",
            signup: "ثبت نام",
            signout: "خروج",
            dashboard: "داشبورد",
            requestDemo: "درخواست دمو"
        },
        home: {
            heroTitle: "هوش بلاک چین برای انطباق با ارزهای دیجیتال"
        }
    }
};

const messagesDir = path.join(__dirname, '../messages');

if (!fs.existsSync(messagesDir)) {
    fs.mkdirSync(messagesDir);
}

for (const [lang, content] of Object.entries(translations)) {
    const filePath = path.join(messagesDir, `${lang}.json`);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Created ${lang}.json`);
}
