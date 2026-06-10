import {
  FileText,
  Search,
  Sparkles,
  ArrowUpRight,
  PlusCircle,
  Wand2,
  ShieldCheck,
  BookOpen,
  Download,
} from "lucide-react";
import "./App.css";

const tools = [
  {
    title: "AI 文本排版导出 Word",
    desc: "将 AI 生成内容一键整理为规范文档，支持公式渲染与 Word 原生 DOCX 导出。",
    url: "https://ai2word.pages.dev",
    badge: "AI2DOC",
    icon: FileText,
    color: "blue",
    points: [
      "智能清洗 AI 输出内容",
      "支持公式与结构化排版",
      "导出 Word 原生公式文档",
    ],
  },
  {
    title: "论文搜索下载工具",
    desc: "快速检索论文、查找文献资源，支持标题搜索、DOI 查询与下载入口整合。",
    url: "https://papersearch.streamlit.app/",
    badge: "PAPER",
    icon: Search,
    color: "purple",
    points: [
      "支持论文标题与 DOI 检索",
      "整合常见文献获取入口",
      "便于科研资料快速收集",
    ],
  },
];

function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <a
      className={`tool-card tool-card--${tool.color}`}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="tool-card__top">
        <span className="tool-badge">{tool.badge}</span>
        <span className="tool-link">
          立即进入
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="tool-icon-wrap">
        <Icon size={28} />
      </div>

      <h2 className="tool-title">{tool.title}</h2>
      <p className="tool-desc">{tool.desc}</p>

      <div className="tool-points">
        {tool.points.map((point) => (
          <div key={point} className="tool-point">
            <ShieldCheck size={16} />
            <span>{point}</span>
          </div>
        ))}
      </div>

      <div className="tool-footer">
        <span className="tool-open-btn">打开功能</span>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="page-shell">
        <header className="hero">
          <div className="hero-badge">
            <Sparkles size={16} />
            AI 免费工具包
          </div>

          <div className="hero-main">
            <div className="hero-left">
              <h1 className="hero-title">AI 工具箱</h1>

              <p className="hero-desc hero-desc--contact">
                AI 免费工具包，后续将持续改进并添加各使用功能，如果有意见和建议请发邮件到：
                <a href="mailto:261538640@qq.com">261538640@qq.com</a>
              </p>

              <div className="hero-tags">
                <span><Wand2 size={15} /> 工具集中管理</span>
                <span><BookOpen size={15} /> 科研场景友好</span>
                <span><Download size={15} /> 支持持续扩展</span>
              </div>
            </div>

            </div>
        </header>

        <main className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.title} tool={tool} />
          ))}

          <div className="tool-card tool-card--coming">
            <div className="tool-card__top">
              <span className="tool-badge tool-badge--ghost">COMING SOON</span>
            </div>

            <div className="tool-icon-wrap tool-icon-wrap--ghost">
              <PlusCircle size={28} />
            </div>

            <h2 className="tool-title">更多功能即将上线</h2>
            <p className="tool-desc">
              后续将继续把新工具接入这里，例如 AI 查重、论文润色、参考文献生成、
              PPT 自动制作、PDF 翻译等。
            </p>

            <div className="tool-points">
              <div className="tool-point">
                <ShieldCheck size={16} />
                <span>统一入口，不破坏原项目</span>
              </div>
              <div className="tool-point">
                <ShieldCheck size={16} />
                <span>新增功能仅需增加一个卡片</span>
              </div>
              <div className="tool-point">
                <ShieldCheck size={16} />
                <span>便于后续部署成完整平台</span>
              </div>
            </div>

            <div className="tool-footer">
              <span className="tool-open-btn tool-open-btn--disabled">预留位置</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}