import './Projects.css'
import Information from "../Section/Information.jsx";

function Projects(props) {
    return (
        <>
            <section className="information-section">
                <Information
                    title='Pokemon app, backend and frontend.'
                    bgtitle='POKEMON'
                    subtitle='Pokemon App,'
                    subtitlecolor='backend and frontend.'
                    description='Project Objectives Build an App using React, Redux, Node and Sequelize. Affirm and connect the concepts learned in the race. Learn best practices. Learn and practice the GIT workflow. Use and practice testing.'
                    check1='Web design'
                    check2='Web layout'
                    check3='Logic functionality'
                    name='Demo'
                />
            </section>
            {/* <div className='container-iframe mx-auto'>
                <iframe  className='container-iframe'  src="http://localhost:3001/" height="900"></iframe>
            </div> */}

        </>
    );
}

export default Projects;