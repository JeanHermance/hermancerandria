import { Degree } from './degree';
import { Details } from './details';
import { NavBar } from './navbar'
import { Section } from './section'
import { Projects } from './project'
import { Contact } from './contact'
import './style.css'

const app = document.querySelector('#app');

app.appendChild(NavBar());
app.appendChild(Section())
app.appendChild(Projects());
app.appendChild(Details());
app.appendChild(Degree());
app.appendChild(Contact());