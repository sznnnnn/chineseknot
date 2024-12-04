const express = require('express');
const app = express();

// 设置安全相关的 HTTP 头
app.use((req, res, next) => {
    // 设置正确的 Content-Type 和字符集
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    // 使用 Cache-Control 替代 Expires 和 Pragma
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    
    // 使用 Content-Security-Policy 替代 X-Frame-Options
    res.setHeader('Content-Security-Policy', `
        default-src 'self';
        style-src 'self' 'unsafe-inline';
        script-src 'self';
        frame-ancestors 'self';
        img-src 'self' data:;
    `);
    
    next();
}); 