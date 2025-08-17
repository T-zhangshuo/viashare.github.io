import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')

  const translations = {
    zh: {
      // 导航栏
      features: '功能特色',
      scenarios: '使用场景',
      download: '立即下载',
      
      // 英雄区块
      heroTitle: '快速、安全、跨平台的',
      heroHighlight: '局域网文件共享工具',
      heroSubtitle: '无需互联网！在Android、iOS、Windows、macOS等设备之间轻松互传照片、视频、文档和任意文件',
      downloadNow: '立即下载',
      learnMore: '了解更多',
      
      // 核心功能
      coreFeatures: '核心功能',
      coreFeaturesSubtitle: '为现代设备间文件传输而设计的强大功能',
      highSpeed: '高速传输',
      highSpeedDesc: '局域网直连，传输速度可达数百兆每秒，比传统云端传输快10倍以上',
      photoVideo: '照片与视频分享',
      photoVideoDesc: '支持原画质传输，保留EXIF信息，4K视频传输无压缩',
      anyFileType: '任意文件类型',
      anyFileTypeDesc: '支持文档、音乐、压缩包、APK等所有文件格式，无大小限制',
      crossPlatform: '跨平台互通',
      crossPlatformDesc: '手机、平板、电脑之间无缝传输，支持批量文件操作',
      security: '安全隐私',
      securityDesc: '设备直连传输，数据不经过云端，端到端加密保护',
      noTraffic: '免流量传输',
      noTrafficDesc: '完全基于局域网，不消耗移动数据，离线环境也能使用',
      
      // 适用场景
      usageScenarios: '适用场景',
      usageScenariosSubtitle: '让文件传输变得更简单高效',
      phoneToComputer: '📱➡️💻 手机照片快速传到电脑',
      phoneToComputerDesc: '旅行照片、工作截图，一键传输到电脑进行编辑处理',
      meetingShare: '📊 会议中共享PPT和文档',
      meetingShareDesc: '会议资料实时分享，支持多人同时接收，提高协作效率',
      partyShare: '🎉 聚会中互传照片和视频',
      partyShareDesc: '聚会美好时光，轻松分享给所有朋友，支持批量传输',
      deviceSync: '🔄 多台设备之间文件同步',
      deviceSyncDesc: '工作文件在不同设备间保持同步，随时随地访问最新版本',
      
      // 产品优势
      whyChoose: '为什么选择 ViaShare？',
      whyChooseSubtitle: '专为现代用户设计的文件传输解决方案',
      noAds: '✨ 无广告，界面简洁易用',
      noSizeLimit: '📏 无文件大小限制',
      batchTransfer: '📦 支持批量传输',
      easyToUse: '🚀 即装即用，无需复杂设置',
      
      // 下载区块
      downloadTitle: '立即下载',
      downloadSubtitle: '支持多个平台，选择适合您设备的版本',
      android: 'Android',
      androidDesc: '支持 Android 6.0+',
      ios: 'iOS',
      iosDesc: '支持 iOS 12.0+',
      windows: 'Windows',
      windowsDesc: '支持 Windows 10+',
      macos: 'macOS',
      macosDesc: '支持 macOS 10.15+',
      
      // 页脚
      footer: '© 2024 ViaShare. Every Device. Share the Flow.'
    },
    en: {
      // 导航栏
      features: 'Features',
      scenarios: 'Use Cases',
      download: 'Download',
      
      // 英雄区块
      heroTitle: 'Fast, Secure, Cross-Platform',
      heroHighlight: 'LAN File Sharing Tool',
      heroSubtitle: 'No internet required! Easily transfer photos, videos, documents and any files between Android, iOS, Windows, macOS devices',
      downloadNow: 'Download Now',
      learnMore: 'Learn More',
      
      // 核心功能
      coreFeatures: 'Core Features',
      coreFeaturesSubtitle: 'Powerful features designed for modern device-to-device file transfer',
      highSpeed: 'High-Speed Transfer',
      highSpeedDesc: 'Direct LAN connection with transfer speeds up to hundreds of MB/s, 10x faster than traditional cloud transfer',
      photoVideo: 'Photo & Video Sharing',
      photoVideoDesc: 'Supports original quality transfer, preserves EXIF data, 4K video transfer without compression',
      anyFileType: 'Any File Type',
      anyFileTypeDesc: 'Supports documents, music, archives, APK and all file formats with no size limit',
      crossPlatform: 'Cross-Platform',
      crossPlatformDesc: 'Seamless transfer between phones, tablets, computers with batch file operations',
      security: 'Security & Privacy',
      securityDesc: 'Direct device connection, data never goes through cloud, end-to-end encryption protection',
      noTraffic: 'No Data Usage',
      noTrafficDesc: 'Completely LAN-based, no mobile data consumption, works in offline environments',
      
      // 适用场景
      usageScenarios: 'Use Cases',
      usageScenariosSubtitle: 'Making file transfer simpler and more efficient',
      phoneToComputer: '📱➡️💻 Quick Photo Transfer from Phone to Computer',
      phoneToComputerDesc: 'Travel photos, work screenshots, one-click transfer to computer for editing',
      meetingShare: '📊 Share PPT and Documents in Meetings',
      meetingShareDesc: 'Real-time sharing of meeting materials, supports multiple recipients, improves collaboration efficiency',
      partyShare: '🎉 Share Photos and Videos at Parties',
      partyShareDesc: 'Share wonderful moments with all friends easily, supports batch transfer',
      deviceSync: '🔄 File Sync Between Multiple Devices',
      deviceSyncDesc: 'Keep work files synchronized across different devices, access latest version anytime, anywhere',
      
      // 产品优势
      whyChoose: 'Why Choose ViaShare?',
      whyChooseSubtitle: 'File transfer solution designed for modern users',
      noAds: '✨ Ad-free, clean and easy-to-use interface',
      noSizeLimit: '📏 No file size limit',
      batchTransfer: '📦 Supports batch transfer',
      easyToUse: '🚀 Ready to use, no complex setup required',
      
      // 下载区块
      downloadTitle: 'Download Now',
      downloadSubtitle: 'Multiple platforms supported, choose the version for your device',
      android: 'Android',
      androidDesc: 'Supports Android 6.0+',
      ios: 'iOS',
      iosDesc: 'Supports iOS 12.0+',
      windows: 'Windows',
      windowsDesc: 'Supports Windows 10+',
      macos: 'macOS',
      macosDesc: 'Supports macOS 10.15+',
      
      // 页脚
      footer: '© 2024 ViaShare. Every Device. Share the Flow.'
    }
  }

  const t = translations[language]
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <div className="App">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/android-chrome-512x512.png" alt="ViaShare Logo" className="logo-icon" />
            <h2>ViaShare</h2>
          </div>
          <div className="nav-right">
            <ul className="nav-menu">
              <li><a href="#features">{t.features}</a></li>
              <li><a href="#scenarios">{t.scenarios}</a></li>
            </ul>
            <button className="language-toggle" onClick={toggleLanguage}>
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </nav>

      {/* 英雄区块 */}
      <section className="hero">
        <div className="container">
          <div className="hero-container">
            <h1 className="hero-title" style={{marginTop: '20px'}}>
              {t.heroTitle}<br />
              <span className="highlight">{t.heroHighlight}</span>
            </h1>
            <p className="hero-subtitle">
              {t.heroSubtitle}
            </p>
          
            {/* 平台下载按钮 */}
            <div className="download-buttons" style={{marginTop: '20px'}}>
              <a href="https://play.google.com/store" className="download-btn android" target="_blank" rel="noopener noreferrer">
                <span>Android</span>
              </a>
              <a href="https://apps.apple.com" className="download-btn ios" target="_blank" rel="noopener noreferrer">
                <span>iOS</span>
              </a>
              <a href="https://microsoft.com/store" className="download-btn windows" target="_blank" rel="noopener noreferrer">
                <span>Windows</span>
              </a>
              <a href="https://apps.apple.com/mac" className="download-btn macos" target="_blank" rel="noopener noreferrer">
                <span>macOS</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能 */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">{t.coreFeatures}</h2>
          <p className="section-subtitle">{t.coreFeaturesSubtitle}</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>{t.highSpeed}</h3>
              <p>{t.highSpeedDesc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>{t.photoVideo}</h3>
              <p>{t.photoVideoDesc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📁</div>
              <h3>{t.anyFileType}</h3>
              <p>{t.anyFileTypeDesc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>{t.crossPlatform}</h3>
              <p>{t.crossPlatformDesc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>{t.security}</h3>
              <p>{t.securityDesc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📶</div>
              <h3>{t.noTraffic}</h3>
              <p>{t.noTrafficDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 适用场景 */}
      <section id="scenarios" className="scenarios">
        <div className="container">
          <h2 className="section-title">{t.usageScenarios}</h2>
          <p className="section-subtitle">{t.usageScenariosSubtitle}</p>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <h3>{t.phoneToComputer}</h3>
              <p>{t.phoneToComputerDesc}</p>
            </div>
            <div className="scenario-card">
              <h3>{t.meetingShare}</h3>
              <p>{t.meetingShareDesc}</p>
            </div>
            <div className="scenario-card">
              <h3>{t.partyShare}</h3>
              <p>{t.partyShareDesc}</p>
            </div>
            <div className="scenario-card">
              <h3>{t.deviceSync}</h3>
              <p>{t.deviceSyncDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section className="advantages">
        <div className="container">
          <h2 className="section-title">{t.whyChoose}</h2>
          <p className="section-subtitle">{t.whyChooseSubtitle}</p>
          <div className="advantages-grid">
            <div className="advantage-item">
              <h3>{t.noAds}</h3>
            </div>
            <div className="advantage-item">
              <h3>{t.noSizeLimit}</h3>
            </div>
            <div className="advantage-item">
              <h3>{t.batchTransfer}</h3>
            </div>
            <div className="advantage-item">
              <h3>{t.easyToUse}</h3>
            </div>
          </div>
        </div>
      </section>


      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
