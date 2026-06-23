import { useState } from 'react';
import './contenet1.Modern.css';
import UpsellCard from '../UpsellCard/UpsellCard';
import WindowBar from '../2.WindowBar/WindowBar';
import { FileText, Lock } from "lucide-react";

// استيراد المكونات الفعلية
import { HeroSection1 } from "../HiroSection/HeroSectino1/HeroSection1";
import { HeroSection2 } from "../HiroSection/HeroSection2/HeroSection2";
import { HeroSection3 } from "../HiroSection/HeroSection3/HeroSection3";
import { HeroSection4 } from "../HiroSection/HeroSection4/HeroSection4";
import { HeroSection5 } from "../HiroSection/HeroSection5/HeroSection5";
import { HeroSection6 } from "../HiroSection/HeroSection6/HeroSection6";

// مصفوفة البيانات مرتبطة بالمكونات مباشرة
const PROJECTS = [
    { id: 1, title: "Hero Preview 1", component: HeroSection1, code: "<HeroSection1 />" },
    { id: 2, title: "Hero Preview 2", component: HeroSection2, code: "<HeroSection2 />" },
    { id: 3, title: "Hero Preview 3", component: HeroSection3, code: "<HeroSection3 />" },
    { id: 4, title: "Hero Preview 4", component: HeroSection4, code: "<HeroSection4 />" },
    { id: 5, title: "Hero Preview 5", component: HeroSection5, code: "<HeroSection5 />" },
    { id: 6, title: "Hero Preview 6", component: HeroSection6, code: "<HeroSection6 />" },
];

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
    const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
    const Component = project.component; // استخراج المكون للعرض

    return (
        <div className="project-card-wrapper" style={{ marginBottom: '40px' }}>
            <div className="tab-switcher">
                <button 
                    className={`tab-btn ${viewMode === 'preview' ? 'active' : ''}`} 
                    onClick={() => setViewMode('preview')}
                >
                    <FileText size={16} /> Preview
                </button>
                <button 
                    className={`tab-btn ${viewMode === 'code' ? 'active' : ''}`} 
                    onClick={() => setViewMode('code')}
                >
                    <Lock size={16} /> Code
                </button>
            </div>
            
            <br />
            
            <div className="component-preview-container">
                {viewMode === 'preview' ? (
                    <div className="feature-tsx-wrapper">
                        {/* عرض المكون مباشرة - أسرع وأكثر استقراراً */}
                        <Component />
                    </div>
                ) : (
                    <pre className="code-block">
                        <code>{project.code}</code>
                    </pre>
                )}
            </div>
        </div>
    );
}

export default function Contenet1() {
    return (
        <div className="MenuSidebar">
            <UpsellCard />
            <div className="content-MenuSidebar">
                <div className="breadcrumb">
                    <span>Blocks</span> / <span>Shaders</span>
                </div>
                <header className="component-header">
                    <h1>Shaders</h1>
                    <p>A collection of hero sections that are modern and stand out</p>
                    <br />
                </header>

                {PROJECTS.map((project) => (
                    <div key={project.id}>
                        <ProjectCard project={project} />
                        {/* عرض WindowBar بعد الكارد الثاني */}
                        {project.id === 2 && <WindowBar />}
                    </div>
                ))}
            </div>
        </div>
    );
}