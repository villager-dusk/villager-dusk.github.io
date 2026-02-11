// Loading功能
document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    const pageContent = document.querySelector('.page-content');
    
    // 需要加载的资源列表
    const resources = [
        // Font Awesome图标字体（外部资源）
        'all.min.css',
        
        // 页面中的图片（根据实际情况添加）
        'images/logo.png'  // 导航栏logo
        // 注意：如果hero部分有logo-large图片，也需要添加
        // 注意：这里只列出了已知的图片，实际项目中应该遍历所有图片
    ];
    
    let loadedCount = 0;
    const totalResources = resources.length;
    
    // 更新进度条函数
    function updateProgress() {
        loadedCount++;
        const progress = Math.round((loadedCount / totalResources) * 100);
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        if (progressBar) {
            // 计算环形进度条的stroke-dashoffset
            const circumference = 226.2; // 使用与CSS相同的值
            const offset = circumference - (progress / 100) * circumference;
            progressBar.style.strokeDashoffset = offset;
        }
        if (progressText) {
            progressText.textContent = `${progress}%`;
        }
        
        // 当所有资源加载完成时
        if (loadedCount >= totalResources) {
            // 模拟一点延迟让用户能看到加载完成
            setTimeout(() => {
                loading.classList.add('hidden');
                pageContent.classList.add('visible');
            }, 500);
        }
    }
    
    // 预加载资源
    resources.forEach(resource => {
        // 处理字体文件
        if (resource.endsWith('.css') || resource.endsWith('.woff') || resource.endsWith('.woff2') || resource.endsWith('.ttf')) {
            // 对于CSS和字体文件，创建link标签
            const link = document.createElement('link');
            link.rel = resource.endsWith('.css') ? 'stylesheet' : 'preload';
            if (resource.endsWith('.woff')) link.as = 'font';
            if (resource.endsWith('.woff2')) link.as = 'font';
            if (resource.endsWith('.ttf')) link.as = 'font';
            link.href = resource;
            link.crossOrigin = 'anonymous';
            
            link.onload = updateProgress;
            link.onerror = updateProgress; // 即使出错也继续
            
            document.head.appendChild(link);
        } else {
            // 处理图片
            const img = new Image();
            img.src = resource;
            img.onload = updateProgress;
            img.onerror = updateProgress; // 即使出错也继续
        }
    });
    
    // 如果没有资源需要加载，直接完成
    if (totalResources === 0) {
        updateProgress();
    }
    
    // 额外检查：等待页面所有内容加载完成
    window.addEventListener('load', function() {
        // 确保即使有资源加载失败，页面也能显示
        setTimeout(() => {
            loading.classList.add('hidden');
            pageContent.classList.add('visible');
        }, 1000); // 最长等待1秒
    });
    
    // 初始化视频相关功能
    initVideoFunctions();

    

renderRecommendations();

});

// 渲染推荐资源
function renderRecommendations() {
    const recommendationsData = [
        { 
            title: "系统提速精灵", 
            desc: "小巧实用的提速加速软件，非常适应老旧电脑使用，效果显著。", 
            link: "https://www.fairysoftware.com/xi_tong_ti_shu_jing_ling.html", 
            icon: "fas fa-tachometer-alt" 
        },
        { 
            title: "误删文件恢复大师", 
            desc: "快速恢复误删文件，可还原电脑、U盘、录音笔等设备中被删除的文件，操作简单、恢复能力强大。", 
            link: "https://www.fairysoftware.com/wu_shan_wen_jian_hui_fu_da_shi.html", 
            icon: "fas fa-undo" 
        },
        { 
            title: "文件夹加密精灵", 
            desc: "简单好用的文件夹加密软件，给文件夹加密码，保护个人隐私，防止他人任意使用。", 
            link: "https://www.fairysoftware.com/wen_jian_jia_jia_mi_jing_ling.html", 
            icon: "fas fa-folder" 
        },
        { 
            title: "九型人格测试", 
            desc: "基于九型人格理论的性格测试，帮助你了解自己的核心动机、恐惧和成长方向。", 
            link: "https://www.fairysoftware.com/jiu_xing_ren_ge_ce_shi.html", 
            icon: "fas fa-user-circle" 
        },
        { 
            title: "情感智商（EQ）测试", 
            desc: "评估你的情感智商水平，包括自我意识、自我管理、社会意识和关系管理能力。", 
            link: "https://www.fairysoftware.com/eq_ce_shi.html", 
            icon: "fas fa-heart" 
        },
        { 
            title: "在线视频压缩", 
            desc: "免费在线视频压缩工具，压缩率非常高，而且几乎不会造成画质损失！", 
            link: "https://www.fairysoftware.com/shi_pin_ya_suo.html", 
            icon: "fas fa-video" 
        },
        { 
            title: "塔罗牌占卜", 
            desc: "在线塔罗牌占卜，提供多种牌阵，揭示未知，解读人生方向。", 
            link: "https://www.fairysoftware.com/ta_luo_pai_zhan_bu.html", 
            icon: "fas fa-moon" 
        },
        { 
            title: "学习风格测试", 
            desc: "识别你的学习风格偏好（视觉型、听觉型、动觉型），提供个性化学习建议。", 
            link: "https://www.fairysoftware.com/xue_xi_feng_ge_ce_shi.html", 
            icon: "fas fa-graduation-cap" 
        },
        { 
            title: "复习计划生成器", 
            desc: "基于艾宾浩斯遗忘曲线理论，为你生成科学的复习计划，提高记忆效率。", 
            link: "https://www.fairysoftware.com/yi_wang_qu_xian_fu_xi_ji_hua_sheng_cheng_qi.html", 
            icon: "fas fa-calendar-alt" 
        },
    ];
    
    const recommendationsContainer = document.getElementById('recommendations');
    
    // 清空容器
    recommendationsContainer.innerHTML = '';
    
    // 方法1: 随机打乱数组并取前4个（Fisher-Yates shuffle算法）
    const shuffledData = [...recommendationsData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    
    document.getElementById('recommendations_section').style.display = "block";

    // 取前4个数据
    const selectedData = shuffledData.slice(0, 3);
    
    // 方法2: 更简单的随机选择（如果数据量不大）
    // const selectedData = recommendationsData
    //     .sort(() => Math.random() - 0.5)
    //     .slice(0, 4);
    
    selectedData.forEach(item => {
        const recommendationItem = document.createElement('div');
        recommendationItem.className = 'recommendation-item';
        //recommendationItem.style.cursor = 'default';
        recommendationItem.style.borderColor = 'var(--border-color)';
        recommendationItem.innerHTML = `
            <div class="recommendation-title">
                <i class="${item.icon}"></i>
                ${item.title}
            </div>
            <div class="recommendation-desc" style="min-height:70px; margin:auto 0; font-size:13px;">
                ${item.desc}
            </div>
            <a href="${item.link}" class="recommendation-link" target="_blank">
                <i class="fas fa-external-link-alt" style="padding-right:5px;"></i>
                访问链接
            </a>
        `;
        recommendationsContainer.appendChild(recommendationItem);
    });
}


// 视频相关全局变量
let videoPlayer, loadingSpinner, videoButtons, currentVideoIndex = 0;
const videos = [
    'https://villager-dusk.github.io/video1.mp4',
    'https://villager-dusk.github.io/video2.mp4',
    'https://villager-dusk.github.io/video3.mp4',
    'https://villager-dusk.github.io/video4.mp4',
    'https://villager-dusk.github.io/video5.mp4',
    'https://villager-dusk.github.io/video6.mp4'
];

// 初始化视频功能
function initVideoFunctions() {
    // 获取DOM元素
    videoPlayer = document.getElementById('videoPlayer');
    loadingSpinner = document.getElementById('loadingSpinner');
    videoButtons = document.querySelectorAll('.video-btn');
    const clickHint = document.querySelector('.click-hint');
    
    // 如果找不到视频元素，直接返回
    if (!videoPlayer) return;
    
    // 修改视频容器显示/隐藏逻辑
    function toggleVideoContainer() {
        const videoContainer = document.getElementById('video_container');
        const toggleBtn = document.getElementById('toggleVideoBtn');
        if (!toggleBtn) return;
        
        const icon = toggleBtn.querySelector('i');
        const textSpan = toggleBtn.querySelector('span') || document.createElement('span');
        
        if (!textSpan.parentNode) {
            // 如果没有span标签，创建并插入
            const btnText = toggleBtn.childNodes[1]?.nodeValue || '查看视频';
            toggleBtn.innerHTML = '';
            toggleBtn.appendChild(icon);
            toggleBtn.appendChild(document.createTextNode(' '));
            textSpan.textContent = btnText;
            toggleBtn.appendChild(textSpan);
        }
        
        if (videoContainer.style.display === 'none' || !videoContainer.style.display) {
            // 显示视频容器
            videoContainer.style.display = 'block';
            textSpan.textContent = '收起视频';
            icon.className = 'fas fa-times-circle';
            
            // 滚动到视频区域
            setTimeout(() => {
                videoContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 100);
            
            // 如果有默认视频，自动播放第一个视频
            if (videoPlayer && videos.length > 0 && !videoPlayer.src) {
                setTimeout(() => {
                    switchVideo(videos[0], 0);
                }, 300);
            }
        } else {
            // 隐藏视频容器
            videoContainer.style.display = 'none';
            textSpan.textContent = '查看视频';
            icon.className = 'fas fa-play-circle';
            
            // 停止视频播放
            if (videoPlayer) {
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
            }
            
            // 显示文字提示（如果存在）
            if (clickHint) {
                clickHint.style.display = 'block';
                clickHint.textContent = '点击下方视频播放';
            }
        }
    }
    
    // 找到"查看视频/收起视频"按钮并添加点击事件
    const toggleVideoBtn = document.getElementById('toggleVideoBtn');
    if (toggleVideoBtn) {
        // 防止默认跳转行为
        toggleVideoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleVideoContainer();
        });
    }
    
    // 当用户点击任何视频按钮时，隐藏文字提示
    videoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (clickHint) {
                clickHint.style.display = 'none';
            }
        });
    });
    
    // 当视频开始播放时也隐藏文字提示
    if (videoPlayer && clickHint) {
        videoPlayer.addEventListener('play', function() {
            clickHint.style.display = 'none';
        });
        
        // 当视频暂停时，根据情况显示提示
        videoPlayer.addEventListener('pause', function() {
            // 只有在视频不是结束时才显示提示
            if (videoPlayer.currentTime < videoPlayer.duration - 1) {
                clickHint.style.display = 'block';
                clickHint.textContent = '点击视频继续播放';
            }
        });
    }
    
    // 初始化按钮事件
    videoButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switchVideo(videos[index], index);
        });
    });

    // 视频加载完成事件
    videoPlayer.addEventListener('loadeddata', () => {
        loadingSpinner.style.display = 'none';
    });

    // 视频播放结束事件 - 循环播放
    videoPlayer.addEventListener('ended', () => {
        // 循环播放当前视频
        videoPlayer.currentTime = 0;
        videoPlayer.play().catch(e => {
            console.log('循环播放被阻止');
        });
    });

    // 视频加载错误处理
    videoPlayer.addEventListener('error', (e) => {
        loadingSpinner.style.display = 'none';
        console.error('视频加载错误:', e);
        alert('视频加载失败，请检查网络连接或视频地址');
    });

    // 显示/隐藏加载动画
    videoPlayer.addEventListener('waiting', () => {
        loadingSpinner.style.display = 'block';
    });

    videoPlayer.addEventListener('playing', () => {
        loadingSpinner.style.display = 'none';
    });

    // 点击视频切换播放/暂停
    videoPlayer.addEventListener('click', () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });
}

// 切换视频函数
function switchVideo(videoUrl, index) {
    // 显示加载动画
    if (loadingSpinner) {
        loadingSpinner.style.display = 'block';
    }
    
    // 更新按钮状态
    if (videoButtons) {
        videoButtons.forEach(btn => btn.classList.remove('active'));
        videoButtons[index].classList.add('active');
    }
    
    // 切换视频源
    if (videoPlayer) {
        videoPlayer.src = videoUrl;
        currentVideoIndex = index;
        
        // 加载并播放
        videoPlayer.load();
        videoPlayer.play().catch(e => {
            console.log('自动播放被阻止，用户需要交互');
        });
    }
}

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
            e.preventDefault();
            if (videoPlayer && videoPlayer.paused) {
                videoPlayer.play();
            } else if (videoPlayer) {
                videoPlayer.pause();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
            e.preventDefault();
            const index = parseInt(e.key) - 1;
            if (index >= 0 && index < videos.length) {
                switchVideo(videos[index], index);
            }
            break;
        case 'ArrowLeft':
            e.preventDefault();
            currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
            switchVideo(videos[currentVideoIndex], currentVideoIndex);
            break;
        case 'ArrowRight':
            e.preventDefault();
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            switchVideo(videos[currentVideoIndex], currentVideoIndex);
            break;
        case 'Escape':
            const videoContainer = document.getElementById('video_container');
            const toggleBtn = document.getElementById('toggleVideoBtn');
            if (videoContainer && videoContainer.style.display === 'block' && toggleBtn) {
                toggleBtn.click();
            }
            break;
    }
});

var timeout_handle;
// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        clearTimeout(timeout_handle);
        timeout_handle = setTimeout(function(){
            // 更新导航链接active状态
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
        },3000);

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // 更新导航链接active状态
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

timeout_handle = setTimeout(function(){
    // 更新导航链接active状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
},3000);

// FAQ切换功能
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    
    // 关闭所有FAQ
    document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
        item.nextElementSibling.classList.remove('show');
    });
    
    // 如果当前未激活，则打开
    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('show');
    }
}

// 下载功能
function downloadFile(type) {
    const downloadLinks = {
        main: 'https://pan.quark.cn/s/417dead8c44e'
    };
    
    if (downloadLinks[type]) {
        window.open(downloadLinks[type], '_blank');
        
        // 显示下载提示
        const btn = event.target.closest('button');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 下载中...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }
    }
}

// 模组下载功能
function downloadMod(type) {
    const modLinks = {
        effect: 'https://pan.quark.cn/s/c997f2e9e8a4',
        weapon: 'https://pan.quark.cn/s/c07fe22c524e',
        skill1: 'https://pan.quark.cn/s/06db2911acfa',
        skill2: 'https://pan.quark.cn/s/f775ce57475f',
        item: 'https://pan.quark.cn/s/e24566bf1db4',
        tactics: 'https://pan.quark.cn/s/dff073454b6f',
        arrow: 'https://pan.quark.cn/s/b1078569b97e',
        zombie: 'https://pan.quark.cn/s/ff9bda9a4d4b',
        superhp: 'https://pan.quark.cn/s/d373ed0235db',
        towers: 'https://pan.quark.cn/s/e74e1eab7b34'
    };
    
    if (modLinks[type]) {
        window.open(modLinks[type], '_blank');
        
        // 显示下载提示
        const btn = event.target.closest('button');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 下载中...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }
    }
}

// 显示模组区域
function showModsSection() {
    document.getElementById('mods').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('mods').offsetTop - 80,
        behavior: 'smooth'
    });
}

// 隐藏模组区域
function hideModsSection() {
    document.getElementById('mods').style.display = 'none';
    window.scrollTo({
        top: document.getElementById('download').offsetTop - 80,
        behavior: 'smooth'
    });
}

// 页面加载后初始化
window.addEventListener('load', function() {
    // 设置第一个FAQ为打开状态
    const firstFaq = document.querySelector('.faq-question');
    if (firstFaq) {
        firstFaq.classList.add('active');
        firstFaq.nextElementSibling.classList.add('show');
    }
    
    // 自动播放处理（需要用户交互）
    document.addEventListener('click', () => {
        if (videoPlayer && videoPlayer.paused) {
            videoPlayer.play().catch(e => {
                // 忽略自动播放错误
            });
        }
    }, { once: true });
});