import './Styles.css';
import { useState, useCallback, useId } from 'react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import myhome from './images/myhome.svg';
import account from './images/account.svg'
import photosnap from './images/photosnap.svg'
import manage from './images/manage.svg'
import loop from './images/loop-studios.svg'


const projects = [
  {
    id: 1,
    Img: photosnap,
    company: 'Photosnap',
    post: 'NEW!',
    featured: 'FEATURED',
    jobtitle: 'Senior Frontend Developer',
    time: '1d ago',
    contract: 'Full Time',
    location: 'USA only',
    tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    Img: manage,
    company: 'Manage',
    post: 'NEW!',
    featured: 'FEATURED',
    jobtitle: 'Fullstack Developer',
    time: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    tags: ['Fullstack', 'Midweight', 'Python', 'React'],
  },
  {
    id: 3,
    Img: account,
    company: 'Account',
    post: 'NEW!',
    jobtitle: 'Junior Frontend Developer',
    time: '2d ago',
    contract: 'Part Time',
    location: 'USA only',
    tags: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
  },
  {
    id: 4,
    Img: myhome,
    company: 'MyHome',
    jobtitle: 'Junior Frontend Developer',
    time: '5d ago',
    contract: 'Contract',
    location: 'USA only',
    tags: ['Frontend', 'Junior', 'CSS', 'Javascript'],
  },
  {
    id: 5,
    Img: loop,
    company: 'Loop Studios',
    jobtitle: 'Software Engineer',
    time: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    tags: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
  },
]



function App() {

  const [tags, setTags] = useState([]);

  const id = useId();

  const addTag = useCallback(
    (tag) => () => {
      if (!tags.includes(tag)) {
        return setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );


  const deleteTag = useCallback(
    (tagId) => () => {
      const tagsFiltered = tags.filter((tag) => {
        return tag !== tagId;
      });
      setTags(tagsFiltered);
    },
    [tags]
  );

  const matchTags = (current, target) => {
    return target.every((tag) => current.includes(tag));
  };

  return (
    <div className="App">
      <SearchBar deleteTag={deleteTag} tags={tags}/>
      <JobCard projects={projects} matchTags={matchTags} id={id} addTag={addTag} tags={tags}/>
    </div>
  );
}

export default App;
