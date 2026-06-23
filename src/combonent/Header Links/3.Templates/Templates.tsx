import './Templates.Modern.css';
import UpsellCard from '../../MenuSidebar/UpsellCard/UpsellCard';
import TemplatesCard from './TemplatesCard/TemplatesCard';

export default function Templates() {
    return(
        <div className='Templates-combonent'>
            <div className="main-content">
                <div className='Templates-header-wrapper'>
                    <div className='Templates-text'>
                        <h2>Templates</h2>
                        <p>Modern and minimalist templates for building your next product. Built with React, NextJS, TailwindCSS, Framer Motion and Typescript.</p>
                    </div>
                </div>
                <TemplatesCard />
            </div>

            <div className="upsell-side">
                <UpsellCard />
            </div>

        </div>
    );
}