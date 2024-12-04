// 样式表加载验证
function verifyStylesheet(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;

        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Style load error for ${href}`));

        document.head.appendChild(link);
    });
}

// 使用示例
try {
    await verifyStylesheet('/styles.css');
} catch (error) {
    console.error('Stylesheet loading failed:', error);
    // 加载备用样式表或显示错误信息
} 