import Heading from '@theme/Heading';
import styles from './styles.module.css';

const teachingAssistants = [
  {
    name: 'Annabella Macaluso',
    url: 'https://annabellamacaluso.github.io/',
    image: 'img/staff_pictures/annabella.jpg',
  },
  {
    name: 'Esme Rubinstein',
    url: 'https://www.ri.cmu.edu/ri-people/esme-rubinstein/',
    image: 'img/staff_pictures/esme.jpg',
  },
  {
    name: 'Jingtian Yan',
    url: 'https://jingtianyan.github.io/',
    image: 'img/staff_pictures/jingtian.jpg',
  },
  {
    name: 'Pranay Gupta',
    url: 'https://pranaygupta36.github.io/',
    image: 'img/staff_pictures/pranay.jpg',
  },
  {
    name: 'Arthur Fender Coelho Bucker',
    url: 'https://arthurfenderbucker.github.io/',
    image: 'img/staff_pictures/arthur.jpg',
  },
  {
    name: 'Jimmy Dai',
    url: 'https://cunxid.github.io/',
    image: 'img/staff_pictures/jimmy.jpg',
  },
];

function StaffCard({name, url, image}) {
  return (
    <article className={styles.staffCard}>
      <a href={url} className={styles.staffLink}>
        <img className={styles.featureImage} src={image} alt={`${name} portrait`} />
        <Heading as="h3" className={styles.name}>{name}</Heading>
      </a>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.courseDescription}>
          <Heading as="h1">Course Description</Heading>
          <p>Robots need to make sequential decisions to operate in the world and generalize to diverse environments. How can they learn to do so? This is what we call the "robot learning" problem, and it spans topics in machine learning, deep learning, visual learning, and reinforcement learning and control. In this course, we will learn the fundamentals of topics in machine/deep/visual/reinforcement learning and how such approaches are applied to robot decision-making. We will study fundamentals of 1) machine/deep learning with an emphasis on approaches relevant to robotics; 2) reinforcement learning: model-based, model-free, on-policy (e.g., policy gradients), off-policy (e.g., Q-learning), offline, etc.; 3) imitation learning: behavior cloning, DAgger, inverse RL, etc.; 4) visual learning geared towards decision making including topics like generative models and their use for robotics, learning from human videos, internet videos, language models, etc.; 5) leveraging simulations, building simulations and how to transfer policies from simulation to the real world; and 6) other advanced topics such as safe robot learning, multi-task robot learning, etc. We will also briefly touch on topics in neuroscience and psychology that provide cognitive motivations for several techniques in decision-making. Throughout the course, we will look at many examples of how such methods can be applied to real robotics tasks as well as broader applications of decision-making beyond robotics. The course will provide an overview of relevant topics and open questions in the area. There will be a strong emphasis on bridging the gap between many different fields of AI. The goal is for students to get both a high-level understanding of important problems and possible solutions, as well as a low-level understanding of technical solutions. We hope that this course will inspire you to approach problems in embodied intelligence from different perspectives in your research.</p>
        </div>

        <Heading as="h1">Instructor</Heading>
        <div className={`${styles.staffGrid} ${styles.instructorGrid}`}>
          <StaffCard
            name="Guanya Shi"
            url="https://www.gshi.me/"
            image="img/staff_pictures/guanyu.jpg"
          />
        </div>

        <Heading as="h1" className={styles.taHeading}>Teaching Assistants</Heading>
        <div className={`${styles.staffGrid} ${styles.taGrid}`}>
          {teachingAssistants.map((assistant) => (
            <StaffCard key={assistant.name} {...assistant} />
          ))}
        </div>
      </div>
    </section>
  );
}
