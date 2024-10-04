import React from 'react';
import './HomePage.css';
import ProjectList from '../components/ProjectDocuments/DocumentList'; // Importing a component for project documents
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage">
            <section className="homepage-intro">
                <h2>About the Lab4GPS Archive</h2>
                <p>
                    Lab4GPS Archive is an evolving platform where students and professionals collaborate to showcase innovation, creativity, and problem-solving. The archive provides a dynamic space to explore creative solutions, share knowledge, and push boundaries.
                </p>
                <p>
                    Whether you're looking for inspiration or want to contribute your own work, the Lab4GPS Archive is your gateway to an enriching experience.
                </p>
            </section>

            <section className="homepage-features">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Innovative Projects</h3>
                        <p>Browse through a curated selection of projects tackling real-world challenges, showcasing groundbreaking solutions.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Collaborative Community</h3>
                        <p>Engage with peers, share feedback, and collaborate to improve project outcomes and ideas.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Easy Document Management</h3>
                        <p>Seamlessly upload, organize, and manage your documents in a central location for easy access.</p>
                    </div>
                </div>
            </section>

            <section className="homepage-projects">
                <h2>Highlighted Projects</h2>
                <p>Discover some of the top-rated projects submitted by our community. These projects represent innovation, creativity, and problem-solving at its finest.</p>
                <ProjectList /> {/* Display a list of featured projects */}
                <Link to="/projects" className="view-more">View More Projects</Link>
            </section>

            <section className="homepage-student-repository">
                <h2>Student Work Repository</h2>
                <p>Our Student Work Repository features multimedia projects and research work from talented GPS students. Dive into a diverse range of creative outputs and explore the brilliant minds within our community.</p>
                <Link to="/students" className="secondary-button">Explore Student Work</Link>
            </section>

            <section className="homepage-get-started">
                <h2>Get Started</h2>
                <p>Are you ready to share your work with the world? Whether you're submitting a project, research, or creative work, the Lab4GPS Archive makes it simple. Join our community of innovators today!</p>
                <Link to="/upload" className="primary-button">Upload Your Work</Link>
            </section>
        </div>
    );
};

export default HomePage;
