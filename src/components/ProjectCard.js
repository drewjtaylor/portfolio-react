import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({project}) => {
    const {title, subTitle, description, imgSource, liveUrl, githubUrl} = project;


  return (
    <Card className='shadow'>
        <Card.Img variant="top" src={imgSource}/>
        <Card.Body>
            <Card.Title><a href={liveUrl} target="_blank" rel='noreferrer'>{title}</a></Card.Title>
            <Card.Subtitle>{subTitle}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Button as="a" href={githubUrl} target="_blank" rel='noreferrer' variant="primary">See it on Github</Button>
        </Card.Body>
    </Card>
  )
}

export default ProjectCard