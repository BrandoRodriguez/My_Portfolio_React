import './Skill.css'
import Imgskill from '../Components/ImgSkill.jsx';
import CardSkill from '../Components/CardSkill.jsx';
function Skill() {
    return (
        <>

            <div class="container mx-auto relative">
                <Imgskill />
                <div class="skill-wrapper">
                    <span class="vertical-line"></span>
                    <CardSkill
                    abbreviation='HTML'
                    name='The Hypertext Markup Language.'
                    description='Is used to structure and display a web page and its contents.'
                    />     
                    <CardSkill
                    abbreviation='CSS'
                    name='Cascading Style Sheets.'
                    description='Used to describe the presentation of HTML or XML documents.'    
                    />     
                    <CardSkill
                    abbreviation='JavaScript'
                    name='interpreted programming language.'
                    description='Allows you to create dynamically updating content, control multimedia, etc.'
                    />     
                    <CardSkill
                    abbreviation='PostgreSQL'
                    name='Database.'
                    description='Object-oriented relational database management.'    
                    /> 
                    <CardSkill
                    abbreviation='Express'
                    name='Web application infrastructure.'
                    description='Work environment for web applications for the Node.js programmer.'
                    />   
                    <CardSkill
                    abbreviation='React'
                    name='Open source javascript library.'
                    description='Designed to create user interfaces with the aim of facilitating the development of applications on a single page.'
                    />   
                    <CardSkill
                    abbreviation='Node'
                    name='JavaScript runtime built on Chrome, V8 JavaScript engine.'
                    description='Open source, cross-platform runtime environment for the server layer based on the JavaScript programming language.'
                    />                 
                </div>
            </div>

        </>
    );
}

export default Skill;