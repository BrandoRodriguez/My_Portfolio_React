import './Projects.css'
import Information from "../Section/Information.jsx";

function Projects(props) {
    return (
        <>
            <section className="information-section">
                <Information
                    title='dogs web application project.'
                    bgtitle='DOGS'
                    subtitle='Experience the top notch performance.'
                    subtitlecolor='Real and challenging projects.'
                    check1='Web design'
                    check2='Web layout'
                    check3='Logic functionality'
                    name='Demo'
                />
            </section>

        </>
    );
}

export default Projects;