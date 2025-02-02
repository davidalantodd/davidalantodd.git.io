import headshot from '../assets/headshot.jpg'
import miles from '../assets/miles.jpg'

function About() {
    return (
    <>
        <h1 className="title">about me</h1>
        <section className="about-section">
            <img className="picture" src={headshot} alt="headshot of David Todd"/>
            <article className="section-text">
                <h3>David Todd (he/him)</h3>
                <p>Hello! My name is David (he/him) and I&apos;m a software engineer and former college administrator. Currently a Software Engineering Coach at <a href='multiverse.io'>Multiverse</a>. I was born and raised in Maryland and I currently live in Washington, D.C.</p>
                <p>I have always had an interest in the intersection of people and technology and am grateful to be able to combine my software engineering skills with my experiences in education.</p>
            </article>
        </section>
        <section className="about-section reversed-section">
            <article className="section-text">
                <p>A software engineering bootcamp instructor and coach to junior developers, mentoring the next generation of engineers at enterprise-level organizations. I enjoy collaborating with other developers to create technical solutions to solve complex problems and drive measurable business impact. </p>   
                <p>Experienced in JavaScript/Node, React, Java/Spring, Python, Express, Jest, MySQL, MongoDB, Docker, AWS, HTML/CSS.</p>
                <p>Interested in human-computer interaction, data structures & algorithms, image processing, cybersecurity, and artificial intelligence.</p>
            </article>
            <article className="title-box" id="swe-box">
                <p>software engineering</p>
            </article>
        </section>
        <section className="about-section">
            <article className="title-box" id="edu-box">
                <p>education & coaching</p>
            </article>
            <article className="section-text">
                <p>A former educator with the ability to communicate technical concepts clearly and mentor junior developers.</p>   
                <p>Experienced in one-to-one coaching, workshop facilitation, teaching, training, student development, program management, data analysis & assessment, and social justice/anti-oppression education.</p>
                <p>Interested in DEI, inclusive education, teaching pedagogy, applied learning, flipped classrooms, radical candor, growth mindset, counseling, and group dynamics.</p>
            </article>
        </section>
        <section className="about-section reversed-section">
            <article className="section-text">
                <p>Outside of work, I enjoy spending time with my partner, our 2-year-old, and our dog. As a family, we enjoy birding, gardening, going to the beach, and traveling.</p>
                <p>I also like going to the gym, singing, listening to music (I love musical theatre!), reading (a favorite: <a href="https://www.goodreads.com/en/book/show/34728667">Children of Blood and Bone</a>), playing a game on Nintendo Switch (current favorite: <a href="https://zelda.nintendo.com/breath-of-the-wild/">Legend of Zelda: Breath of the Wild</a>), or watching some good TV (current favorites: Abbott Elementary, Survivor, and Bob&apos;s Burgers).</p> 
            </article>
            <img className="picture" src={miles} alt="picture of my dog Miles"/>
        </section>
        <section className="quote-section">
            <p id="quote"><em> “Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.” <strong>― Margaret Mead</strong></em></p>
        </section>
    </>
    )
}

export default About