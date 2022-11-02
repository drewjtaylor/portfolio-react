import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import projects from '../data/projects.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useTrail, animated } from 'react-spring';

// import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {

    const trail = useTrail(
        projects.length, 
        {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            config: {
                duration: 500
            }
        });


  return (
    <Container>
        <Row>

            {trail.map((spring, index) => {
                return <animated.div key={index} style={{
                    ...spring
                }}>
                        <Row className='my-4'>
                            <Col md={3}>
                                <h2><a href={projects[index].liveUrl} target="_blank" rel='noreferrer'>{projects[index].title}</a></h2>
                                <Image className='shadow my-1' src={projects[index].imgSource} fluid width='100%' alt={`${projects[index].title} screenshot`}/>
                            </Col>
                            <Col md={9}>
                                <h3><em>{projects[index].subTitle}</em></h3>
                                <p>{projects[index].description}</p>
                                <i class="fa-brands fa-github-square"></i>
                                <Button as="a" href={projects[index].githubUrl} target="_blank" rel='noreferrer' variant='success'>
                                    See it on Github <FontAwesomeIcon icon={faGithub} />
                                </Button>
                            </Col>
                        </Row>
                    <hr />
                </animated.div>
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