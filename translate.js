    //全网页中英文翻译

    //是否翻译
    var translate = false; 

    //从参数中获取language参数，如果参数值为chinese则翻译
    function getParameterByName(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    var language = getParameterByName('language');
    if(language == "english"){
        //翻译
        translate = true;
    }

    //获取浏览器语言
    function getBrowserLanguage() {
        // 优先尝试 navigator.languages
        if (navigator.languages && navigator.languages.length) {
            return navigator.languages[0];
        }
        // 回退到 navigator.language 或其他属性
        return navigator.language || navigator.userLanguage || navigator.browserLanguage || 'en';
    }
    // 获取简化的语言代码（前两位）
    function getSimplifiedLanguage() {
        const lang = getBrowserLanguage();
        return lang.substr(0, 2).toLowerCase();
    }
    const userLang = getSimplifiedLanguage(); // "zh", "en" 等
    if(userLang != "zh"){
        translate = true;
    }

    // 翻译字典：键为英，值为中文
    var translationDict = {
        "模组目前有“生存”、“竞技场”两种模式，游戏加载、玩法、操作、常见疑问等，":"The mod currently has two modes: Survival and Arena, including game loading, gameplay, controls, frequently asked questions, etc.",
        "请见下方FAQs中的详细介绍。":"Please refer to the detailed information in the FAQs below.",
        "HMCL/FCL启动器：下载 -> 整合包 -> 安装整合包 -> 导入本地整合包 -> 选下载好的整合包文件。": "HMCL/FCL Launcher: Download -> Modpack -> Install Modpack -> Import Local Modpack -> Select downloaded modpack file.",
        "v3.0.1c即将发布...": "v3.0.1c coming soon...",
        "下载": "Download",
        "高质量Mineraft战斗整合包":"Minecraft Combat Modpack",
        "最新版本：":"Version:",
        "下载后需手动安装整合包到MC客户端，客户端要求：MineCraft1.19.2、Forge43.4.0+。": "After downloading, manually install the modpack to MC client. Client requirements: Minecraft 1.19.2, Forge 43.4.0+.",
        "不一样的PK玩法！": "Unique PvP gameplay!",
        "不同的角色可释放不同的专属技能，例如：芥末的铁傀儡雨、蛇刃Herobrine的解放蛇刃、蓝恶魔的三叉戟狂欢节、史蒂夫的战神之刃觉醒等等。": "Different characters can unleash unique skills, e.g.: Wasabi's Iron Golem Rain, Snakeblade Herobrine's Unleashed Snakeblade, Blue Demon's Trident Carnival, Steve's War God Blade Awakening, etc.",
        "专属技能": "Exclusive Skills",
        "介绍": "Introduction",
        "众多技能都有独特的绚丽特效，如大范围爆炸、连锁闪电、兵器碰撞火花等等。": "Many skills feature dazzling effects like large explosions, chain lightning, weapon collision sparks, etc.",
        "体积大，但方便": "Large size but convenient",
        "体积小": "Compact size",
        "使玩家可以双持太刀进行战斗。": "Allows players to dual-wield katanas in combat.",
        "例如，烦人的村民中的典型角色：史蒂夫、格雷夫、蛇刃Herobrine、黯锤Herobrine、芥末等等。": "E.g. iconic Annoying Villagers characters: Steve, Grave, Snakeblade Herobrine, Shadow Hammer Herobrine, Wasabi, etc.",
        "刀光整合包，可让光刀呈现非常亮丽的发光效果。": "Blade Light modpack makes glowing blades display vibrant luminous effects.",
        "包含整合包及MC客户端1.19.2、Forge43.4.0，下载并安装，即可直接进入游戏。": "Includes modpack and MC client 1.19.2 with Forge 43.4.0. Download and install to start playing directly.",
        "原创角色": "Original Characters",
        "双太刀": "Dual Katanas",
        "只狼糖": "Sekiro Candy",
        "可以让玩家获得特殊的药水效果。": "Grants players special potion effects.",
        "合作伙伴": "Partners",
        "如您在整合包使用过程中、游戏过程中遇到问题或进行合作、咨询、建议等，请用以下方式联系我们。": "For issues while using the modpack or during gameplay, as well as for collaborations, inquiries, or suggestions, contact us via:",
        "子整合包下载": "Sub-Modpack Download",
        "客户端要求：MineCraft1.19.2、Forge43.4.0+": "Client requirements: Minecraft 1.19.2, Forge 43.4.0+",
        "对应角色技能，不同的技能有不同的专属战斗动作。": "Character-specific skills with unique combat animations.",
        "常见问题及解答，如这里没有您想了解的信息，请联系我们咨询或反馈。": "FAQs. Contact us if your question isn't answered here.",
        "影锤：Shift+右键可让玩家原地飞起来。": "Shadow Hammer: Shift+RMB to levitate.",
        "影镰：能召唤末影龙。": "Shadow Scythe: Summons Ender Dragon.",
        "战斗动作": "Combat Animations",
        "战神之刃类：有TNT战神之刃、雷电战神之刃、冰火战神之刃、战神之刃、双大剑战神之刃、火焰战神之刃、绿宝石战神之刃等，部分武器蹲下右键可释放技能。": "War God Blades: Includes TNT/Lightning/Ice-Fire/Dual Greatsword/Flame/Emerald variants. Some activate skills via crouch+RMB.",
        "整合包": "Modpack",
        "整合包+客户端": "Modpack + Client",
        "整合包+客户端下载": "Modpack+Client Download",
        "整合包下载": "Modpack Download",
        "暗影之镰：属于玩家投稿的概念性DIY武器，只能在创造模式下获取。": "Shadow Scythe: Player-submitted DIY weapon (Creative mode only).",
        "最新版本：v2.2.4c": "Latest version: v2.2.4c",
        "村黄昏有众多内容，根据玩家反馈得知，许多人钟情于其中某个单独功能，为此下面提供了部分独立功能子整合包，可供单独下载。": "Village Dusk offers modular sub-modpacks for standalone features.",
        "某些武器还有格外功能，如：黑盾有格挡技能；红宝剑有星火燎原技能；盔影胸甲有突刺技能。": "Some weapons have extra functions: Black Shield blocks, Red Sword ignites, Shadow Chestplate thrusts.",
        "查看更多...": "View more...",
        "欢迎与我们成为合作伙伴，期待商业合作、技术合作、服务器赞助，等...": "Partner with us! We welcome commercial and technical collaborations, server sponsorships, and other opportunities.",
        "正在加载...": "Loading...",
        "武器模组": "Weapon",
        "刀光模组，可让光刀呈现非常亮丽的发光效果。":"The Sword Trails Mod adds vibrant glowing effects to blade weapons, creating stunning visual trails.",
        "QQ：": "Email:",
        "语言：": "Language:",
        "785319346": "785319346@qq.com",
        "泛光刀光": "Glowing Blade Trails",
        "注：又持后，有独立的战斗动作和技能。": "Note: Dual-wielding enables unique combat mechanics.",
        "注：药水效果：以损失部分生命值为代价，在一定时间内提高攻击力。": "Note: Potion effect: Boosts attack at HP cost.",
        "点击可随机切换、查看其它技能效果。": "Click to randomly view other skill effects.",
        "点击可随机切换、查看其它技能特效。": "Click to randomly view other skill VFX.",
        "点击可随机切换、查看其它角色动作。": "Click to randomly view other character animations.",
        "点击可随机切换、查看其它角色形象。": "Click to randomly view other character designs.",
        "点此下载": "Download here",
        "点此切换": "Click to switch",
        "烦村黄昏": "Villager Dusk",
        "热血动作、激烈战斗": "Intense action combat",
        "物品模组": "Item",
        "villager-dusk.github.io":"https://villager-dusk.github.io",
        "特效模组": "Effect",
        "玩家QQ群：828359394": "Thank you for your donation!",
        "示例动作": "Sample Animation",
        "示例技能": "Sample Skill",
        "示例特效": "Sample VFX",
        "示例角色": "Sample Character",
        "答：Java 17+，即：JDK 17+。": "A: Java 17+ (JDK 17+ required).",
        "答：MineCraft 1.19.2、Forge 43.4.0+。": "A: Minecraft 1.19.2, Forge 43.4.0+.",
        "答：PCL/PCL-CE启动器：直接把下载好的整合包文件拖进启动器窗口即可。": "A: For PCL/PCL-CE launcher: Drag downloaded modpack file into launcher.",
        "答：可以，可自由录制模组相关的视频并发布到各视频平台。": "A: Yes, you may create/share mod-related videos freely.",
        "答：在哔哩哔哩平台有，https://space.bilibili.com/1015730693，是烦村黄昏在的B站的官频道，这里会发布整合包里新信息及游戏视频，欢迎大家关注。": "A: Official Bilibili: https://space.bilibili.com/1015730693 (posts updates/gameplay videos).",
        "答：开启作弊模式。在游戏中，输入：/gamerule domob...此时会有提示。例如：domobusefireball为是否启用火焰弹、domobuseenderperal为是否启用末影珍珠，等等，以增强自己。": "A: Enable cheats, input /gamerule domob... (e.g. domobusefireball for fireballs, domobuseenderperal for pearls).",
        "答：当然可以。与使用正常的MC客户端一样。": "A: Yes, works like vanilla MC.",
        "答：烦村黄昏二创武器丰富多样，以下是部分武器介绍：": "A: Diverse fan-made weapons include:",
        "答：输入/gamerule clashpercent+数字。注：数字为1时，格挡概率为10%、数字为5时，格挡概率为50%，以此类推，数字为0时，格挡概率为0%、数字为10时，挡概率为100%。": "A: /gamerule clashpercent+number (1=10% block, 5=50%, 10=100%).",
        "纯整合包下载": "Modpack Only Download",
        "绚丽特效": "Stunning Visual Effects",
        "联系我们": "Contact Us",
        "联系方式": "Contact Methods",
        "蛇刃类：包括未解放蛇刃、解放蛇刃、战蛇之刃、超级解放蛇刃。": "Snakeblade series: Sealed/Unleashed/War/Super Unleashed variants.",
        "让您在MC中体验": "Experience in MC:",
        "问：下载单独的整合包后怎样安装？": "Q: How to install standalone modpack?",
        "问：使用此整合包时，还可以自行添加其他模组吗？": "Q: Can I add other mods?",
        "问：整合包+客户端，需要什么版本的Java环境？": "Q: Required Java version for modpack+client?",
        "问：整合包中有哪些二创武器？": "Q: What fan-made weapons are included?",
        "问：整合包有官方视频频道吗？": "Q: Is there an official video channel?",
        "问：游戏中，怎样调整模组NPC生物的格挡率？": "Q: How to adjust NPC block chance?",
        "问：游戏中，整合包的NPC生物太强了、打不过怎么办？": "Q: NPCs are too strong - solutions?",
        "问：烦村黄昏整合包需要什么客户端环境？": "Q: Client requirements for Villager Dusk?",
        "问：玩家可以发布模组介绍或游戏视频吗？": "Q: Can players create mod videos?",
        "高质量MineCraft战斗整合包": "High-quality Minecraft Combat Modpack",
        "黑曜石长枪：动作和奇迹武器里的痛苦之枪相似。": "Obsidian Spear: Animations resemble Painkiller from W@W.",
        "1、整合包安装：": "1. Modpack Installation:",
        "1、进入游戏，并创建新世界：": "1. Enter the game and create a new world:",
        "1、加载烦村黄昏整合包，并进入“竞技场”步骤非常简单：": "1. Loading the Villager Dusk modpack and entering the 'Arena' mode is very simple:",
        "2、模组安装：": "2. Mod Installation:",
        "2、进入游戏后，按E键，查看模组初始物品，如技能书、刀、盔甲等。": "2. After entering the game, press the E key to view the mod's initial items, such as skill books, swords, armor, etc.",
        "2、多人组队，做为服务器的方法：": "2. How to set up a multiplayer team (as a server):",
        "3、按R键，进入战斗模式（否则不能使用战斗技能）。": "3. Press the R key to enter combat mode (otherwise, combat skills cannot be used).",
        "3、加入服务器的方法：": "3. How to join a server:",
        "4、然后，使用技能书学习技能。": "4. Then, use the skill book to learn skills.",
        "5、除了初始的物品，模组中还存在大量其它物品。打开物品栏，查找配方，可看到物品的合成方式。": "5. In addition to the initial items, the mod contains many other items. Open the inventory and check recipes to see how items are crafted.",
        "6、进行这些初步了解后，就可以进行游戏了...": "6. After this basic introduction, you can start playing...",
        "HMCL/FCL启动器：游戏 -> 游戏管理 -> 模组管理 -> 模组文件夹 -> 将模组文件放入打开的文件夹中。": "HMCL/FCL Launcher: Game -> Game Management -> Mod Management -> Mod Folder -> Place mod files into the opened folder.",
        "JDK（Java）17+、MineCraft1.19.2、Forge 43.4.1+": "JDK (Java) 17+, Minecraft 1.19.2, Forge 43.4.1+",
        "PCL/PCL-CE启动器：直接把下载好的整合包文件拖进启动器窗口即可。": "PCL/PCL-CE Launcher: Simply drag the downloaded modpack file into the launcher window.",
        "PCL/PCL-CE启动器：直接把下载好的模组文件拖进启动器窗口即可。": "PCL/PCL-CE Launcher: Simply drag the downloaded mod file into the launcher window.",
        "PVP或PVE": "PVP or PVE",
        "“游戏规则”中开启“死亡后保留物品栏”。否则可能刚进入游戏就被NPC击杀，会导致模组初始物品，如：技能书、物品等丢失。": "Enable 'Keep Inventory' in the game rules. Otherwise, if you are killed by NPCs immediately after entering the game, modded initial items (e.g., skill books, items) may be lost.",
        "“竞技场”模式是烦村黄昏整合包另一种玩法，此模式中，只有战斗，别无其它。玩家可以单独或组队向竞技场中的NPC生物发起挑战。": "The 'Arena' mode is another way to play the Villager Dusk modpack. In this mode, there is only combat—nothing else. Players can challenge NPC creatures in the arena alone or as a team.",
        "例如：domobusefireball为是否启用火焰弹、domobuseenderperal为是否启用末影珍珠，等等，以增强自己。": "For example: 'domobusefireball' enables/disables fireballs, 'domobuseenderperal' enables/disables ender pearls, etc., to enhance yourself.",
        "依如下所示配置，并“创建一个局域网世界”。": "Configure as shown below and 'Create a LAN World'.",
        "加载烦村黄昏整合包，并进入“生存模式”进行游戏的具体步骤：": "Steps to load the Villager Dusk modpack and enter 'Survival Mode' to play:",
        "只需要进入游戏时选择竞技场地图即可。": "Simply select the arena map when entering the game.",
        "在Minecraft游戏中，加载烦村黄昏整合包后，核心玩法基本还跟原生模式一样，不同之处在于：烦村黄昏有原创的装备、物品、技能、生物、NPC。玩家可以学习各种技能与NPC生物激烈战斗、与其它玩家热血PK。": "In Minecraft, after loading the Villager Dusk modpack, the core gameplay remains similar to vanilla, but with original equipment, items, skills, creatures, and NPCs. Players can learn various skills to battle NPCs fiercely or engage in PVP with other players.",
        "如果独自打不过NPC生物，可以邀请朋友组队，以多打少，一起在竞技场攻打NPC。": "If you can't defeat NPCs alone, invite friends to team up and fight NPCs together in the arena.",
        "子功能": "Sub-features",
        "学习技能后，技能都有自己的快捷键，可以从“控制”中修改按键。": "After learning skills, each skill has its own hotkey, which can be modified in the 'Controls' settings.",
        "客户端要求：": "Client Requirements:",
        "尽请探索并享受游戏吧！": "Explore and enjoy the game!",
        "常见问题及解答": "Frequently Asked Questions (FAQs)",
        "开启“允许作弊”，因为游戏中可能会需要输入特殊指令。": "Enable 'Allow Cheats' as special commands may be needed in the game.",
        "数字为1时，格挡概率为10%、数字为5时，格挡概率为50%，以此类推，数字为0时，格挡概率为0%、数字为10时，挡概率为100%。": "When the number is 1, the block chance is 10%; when it's 5, the chance is 50%, and so on. At 0, the chance is 0%, and at 10, it's 100%.",
        "烦村黄昏有众多内容，许多人钟情于其中某个单独功能，或某种特殊玩法，例如纯PK：": "Villager Dusk has rich content, and many players favor specific features or playstyles, such as pure PVP:",
        "此时，可以多人组队，一起欺负NPC生物啦。": "At this point, you can team up with others to fight NPCs together.",
        "此时，将技能书放到物品栏，以准备学习技能。": "Now, place the skill book in your inventory to prepare for learning skills.",
        "注：NPC生物除了会使用技能攻击，还会使用末影珍珠、吃金苹果等，很强的。": "Note: NPCs not only use skill attacks but also ender pearls, golden apples, etc.—they are strong.",
        "注：“生存模式”、“竞技场模式”，都可使用此方法。": "Note: This method works for both 'Survival Mode' and 'Arena Mode'.",
        "注：每次进入竞技场时，玩家会获得不同的装备、武器，可拥有不同强度的技能哦。": "Note: Each time you enter the arena, you'll receive different equipment and weapons, granting skills of varying strengths.",
        "烦村黄昏，整合包、模组": "Villager Dusk: Modpack & Mod",
        "竞技场中共有数十种NPC生物（具体生物数量请加入战斗，自行探索吧，^^...!），NPC强度由弱到强，击杀较弱生物后，会出现更强大的生物。": "The arena features dozens of NPC creatures (join the battle to explore the exact number, ^^...!). NPCs range from weak to strong—defeating weaker ones will spawn stronger ones.",
        "答：": "Answer:",
        "答：可以开启作弊模式。在游戏中，输入：/gamerule domob...此时会有提示。": "Answer: You can enable cheat mode. In-game, enter: /gamerule domob... Prompts will appear.",
        "答：烦村黄昏整合包、子功能整合包或模组，需要的客户端环境：JDK（Java） 17+、Minecraft 1.19.2、Forge 43.4.1+。": "Answer: The Villager Dusk modpack, sub-feature modpacks, or mods require: JDK (Java) 17+, Minecraft 1.19.2, Forge 43.4.1+.",
        "答：输入/gamerule clashpercent+数字。": "Answer: Enter /gamerule clashpercent+number.",
        "调出游戏菜单，选择“对局域网开放”。": "Open the game menu and select 'Open to LAN'.",
        "进入后，地图中即自动刷新出NPC生物，战斗直接开始。": "Upon entering, NPCs will spawn automatically, and the battle begins immediately.",
        "进入竞技场后，地图中会自动刷新出敌对NPC生物，当被击杀后，会再次出现更为强大的生物，以此类推，直到击杀数十种生物，完成通关。": "After entering the arena, hostile NPCs will spawn automatically. Defeating them will spawn even stronger ones, repeating until dozens are defeated to complete the challenge.",
        "问：下载单独的整合包、模组后怎样安装？": "Q: How to install standalone modpacks or mods after downloading?",
        "问：怎样进入烦村黄昏“竞技场”模式？": "Q: How to enter the 'Arena' mode in Villager Dusk?",
        "问：烦村黄昏整合包怎么加载和玩？": "Q: How to load and play the Villager Dusk modpack?",
        "，为此我们提供了部分独立功能子整合包、子模组，供单独下载使用。": ",\n For this, we provide standalone sub-modpacks and sub-mods for separate download and use.",
        "，如这里没有您想了解的信息，请联系我们咨询或反馈。": ", If the information you need is not here, please contact us for inquiries or feedback.",
        "ALT：战斗翻滚；": "ALT: Combat Roll;",  
        "E：物品栏；": "E: Inventory;",  
        "F：切换主手副手武器；": "F: Switch Main/Off-hand Weapon;",  
        "Z：投掷末影珍珠；": "Z: Throw Ender Pearl;",  
        "竞技场中共有数十种NPC生物（具体生物数量请加入战斗，自行探索吧，^_^...!），NPC强度由弱到强，击杀较弱生物后，会出现更强大的生物。": "The arena contains dozens of NPC creatures (join the battle to explore the exact number, ^_^...!). NPCs range from weak to strong, and defeating weaker ones will spawn more powerful creatures.",  
        "问：整合包常用操作按键有哪些？": "Q: What are the common keybindings in the modpack?",  
        "鼠标侧键1：翻滚：": "Mouse Side Button 1: Roll;",  
        "鼠标侧键2：技能；": "Mouse Side Button 2: Skill;",  
        "鼠标右键：防御；": "Right Mouse Button: Block/Defend;",  
        "鼠标左键：攻击；": "Left Mouse Button: Attack;",  
        "进入游戏后，默认游戏操作按键如下（都可在设置里的按键绑定中修改）：": "After entering the game, the default keybindings are as follows (all can be modified in the Controls settings):",
        "R：开启、关闭战斗模式或查找物品配方；": "R: Toggle Combat Mode or Search Item Recipes."
    };

    // 获取所有可见的文本节点
    function getTextNodes(element) {
        var textNodes = [];
        var walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        while (walker.nextNode()) {
            var node = walker.currentNode;
            if (node.nodeValue.trim() && !node.parentElement.closest('script, style')) {
                textNodes.push(node);
            }
        }
        return textNodes;
    }

    //originalDict用于制作翻译字字典
    var originalDict = {};
    //新增的未放入字典的内容
    var newDict = {};
    //翻译单个文本节点
    function translateTextNode(textNode) {
        var originalText = textNode.nodeValue.trim();
       
        if (translationDict[originalText]) {
            textNode.nodeValue = translationDict[originalText];
            textNode.parentElement.classList.add("translated");
        }else{
            newDict[originalText] = originalText;
        }
        if(!originalDict[originalText]){
            originalDict[originalText] = originalText;
        }
    }

    // 遍历并翻译整个文档
    function translateDocument() {
        var textNodes = getTextNodes(document.body);
        textNodes.forEach(translateTextNode);

        if(document.getElementById("language").innerHTML == "English"){
            document.getElementById("language").innerHTML = "Chinese";
            document.title =  "Villager Dusk High-quality Minecraft Combat Modpack";
            document.querySelector('meta[name="description"]').content = 'Villager Dusk homepage, Villager-dusk modpack, Annoying Village Modpack.';
            document.getElementById("donate").style.display = "block";
        }else{
            document.getElementById("language").innerHTML = "English";
            document.title =  "烦村黄昏 - Villager Dusk - 高质量MineCraft战斗整合包";
            document.querySelector('meta[name="description"]').content = 'Villager Dusk、Villager-Dusk、烦村黄昏官网，Minecraft战斗整合包、MC整合包、MC模组、烦村整合包。';
            document.getElementById("donate").style.display = "none";
        }
        translationDict = swapKeysAndValues(translationDict)
    }

    // 重写 alert、confirm方法以支持翻译
    var originalAlert = window.alert;
    window.alert = function (message) {
        var translatedMessage = translationDict[message] || message; // 查找翻译，找不到则使用原始内容
        originalAlert(translatedMessage); // 调用原始 alert 显示翻译后的内容
    };
    window.confirm = function(message, ...args) {
        var translatedMessage = translationDict[message] || message;
        // 替换占位符（如果有参数）
        if (args.length > 0) {
            args.forEach((arg, index) => {
                translatedMessage = translatedMessage.replace(`{${index}}`, arg);
            });
        }
        return originalConfirm(translatedMessage);
    };

    //初始翻译
    if(translate == true){
        translateDocument();
    }

    // 交换键值
    function swapKeysAndValues(obj) {
        var swapped = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                swapped[obj[key]] = key; 
            }
        }
        return swapped;
    }
