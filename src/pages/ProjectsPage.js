import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import projects from '../data/projects.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useSpring, animated } from 'react-spring'; // Need to download react-spring from home

// import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const animatedProps = useSpring({ to: {opacity: 1}, from: {opacity: 0}})
  
  
  return (
    <Container>
        <Row>
            {projects.map(project => {
                return <>
                    <animated.div style={animatedProps}>
                        <Row className='my-4'>
                            {/* Coloumn for title and img */}
                            <Col md={3}>
                                <h2><a href={project.liveUrl} target="_blank" rel='noreferrer'>{project.title}</a></h2>
                                {/* <img src={project.imgSource} fluid width='100%' alt={`${project.title} screenshot`}/> */}
                                <Image className='shadow my-1' src={project.imgSource} fluid width='100%' alt={`${project.title} screenshot`}/>
                            </Col>
                            {/* column for description */}
                            <Col md={9}>
                                <h3><em>{project.subTitle}</em></h3>
                                <p>{project.description}</p>
                                <i class="fa-brands fa-github-square"></i>
                                <Button as="a" href={project.githubUrl} target="_blank" rel='noreferrer' variant='success'>
                                    See it on Github <FontAwesomeIcon icon={faGithub} />
                                </Button>
                            </Col>
                        </Row>
                    </animated.div>
                    <hr />
                </>
            })}

            
            {/* {projects.map(project => {
                return (
                    <Col sm={6}>
                        <ProjectCard project={project}/>
                    </Col>
                    
                )
            })} */}



        </Row>
    </Container>
  )
}

export default ProjectsPage