document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('visitorForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 收集表单数据
        const formData = {
            visitorName: document.getElementById('visitorName').value,
            phone: document.getElementById('phone').value,
            visitTime: document.getElementById('visitTime').value,
            purpose: document.getElementById('purpose').value,
            notes: document.getElementById('notes').value,
            timestamp: new Date().toISOString()
        };
        
        // 保存数据到本地存储（替代文本文件方案）:cite[2]:cite[7]
        saveToLocalStorage(formData);
        
        // 预留接口：未来可扩展为保存到文本文件
        // saveToTextFile(formData);
        
        // 跳转到成功页面
        window.location.href = 'success.html';
    });
});

/**
 * 将数据保存到本地存储
 */
function saveToLocalStorage(formData) {
    try {
        // 获取现有的访问记录或初始化空数组
        let visits = JSON.parse(localStorage.getItem('visitorRecords') || '[]');
        
        // 添加新记录
        visits.push(formData);
        
        // 保存回本地存储
        localStorage.setItem('visitorRecords', JSON.stringify(visits));
        
        console.log('访客信息已保存到本地存储');
    } catch (error) {
        console.error('保存到本地存储失败:', error);
    }
}

/**
 * 预留接口：未来可实现的文本文件保存功能
 */
function saveToTextFile(formData) {
    // 此处预留接口，未来可通过后端服务或浏览器下载方式实现
    // 示例代码：
    /*
    const dataStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([dataStr], { type: 'text/plain' });
    
    // 创建下载链接（实际应用中可能需要后端支持）
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `visitor_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    */
    
    console.log('文本文件保存功能预留接口');
}