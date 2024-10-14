// App.js
import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import withLayout from './components/withLayout';
import { FormProvider } from './components/FormContext';

const App = () => {
  return (
    <FormProvider>
      <AboutMeWithLayout />
      <ExperienceWithLayout />
      <ProjectsWithLayout />
      <ContactWithLayout />
    </FormProvider>
  );
};

const AboutMeWithLayout = withLayout(AboutMe);
const ExperienceWithLayout = withLayout(Experience);
const ProjectsWithLayout = withLayout(Projects);
const ContactWithLayout = withLayout(Contact);

export default App;













