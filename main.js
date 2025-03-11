        // 语言切换功能
        let isEnglish = true;

        function toggleLanguage() {
            const langButton = document.querySelector('.language-switch');
            isEnglish = !isEnglish;
            langButton.textContent = isEnglish ? '中文' : 'EN';
            
            translateContent(isEnglish);
        }

        // 翻译内容函数
        function translateContent(toEnglish) {
            const translations = {
                'Crafting Perfect Noodles with Love': '用心做好每一碗面',
                'View Menu': '查看菜单',
                'Contact Us': '联系我们',
                "Today's Special": '今日特色',
                'Signature Beef Noodles': '招牌牛肉拉面',
                'Opening Hours': '营业时间',
                'Mon-Sun': '周一至周日',
                'Home': '首页',
                'About': '关于我们',
                'Menu': '菜单',
                'Contact': '联系我们',
                'A Taste of Authentic Chinese Noodles': '地道的中国面食味道',
                'Premium beef, secret broth recipe, hand-pulled noodles': '精选上等牛肉，秘制汤底，手工拉制面条',
                'Address: Your Address': '地址：您的地址',
                'Phone: Your Phone': '电话：您的电话',
            };

            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.textContent;
                if (!toEnglish) {
                    if (translations[key]) {
                        element.textContent = translations[key];
                    }
                } else {
                    const reverseTranslations = Object.fromEntries(
                        Object.entries(translations).map(([k, v]) => [v, k])
                    );
                    if (reverseTranslations[key]) {
                        element.textContent = reverseTranslations[key];
                    }
                }
            });
        }

        // 页面加载时初始化语言
        document.addEventListener('DOMContentLoaded', function() {
            const translatableElements = document.querySelectorAll('h1, h2, h3, p, a, button');
            translatableElements.forEach(element => {
                element.setAttribute('data-translate', '');
            });

            // 添加平滑滚动
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });