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
                    description='Allows you to create dynamically updating content, control multimedia, animate images, etc.'
                    />     
                    <CardSkill
                    abbreviation='CSS'
                    name='Cascading Style Sheets.'
                    description='Used to describe the presentation of HTML or XML documents.'    
                    /> 
                    <CardSkill
                    abbreviation='HTML'
                    name='The Hypertext Markup Language.'
                    description='Is used to structure and display a web page and its contents.'
                    />                 
                </div>
            </div>

        </>
    );
}

export default Skill;