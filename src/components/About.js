import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Our app connects travelers with local guides and off-the-beaten-path
            destinations, providing them with unique and authentic experiences
            that are not typically found in traditional tourism.
          </p>
          <p>
            We believe that by stepping outside your comfort zone and embracing
            new experiences, you can gain a deeper understanding of the world
            around you and create memories that will last a lifetime.
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
