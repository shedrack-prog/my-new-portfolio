import jobify from './public/projectsImages/jobify02.jpg';
import Facebook from './public/projectsImages/fb-clone2.jpg';
import Netflix from './public/projectsImages/netflix1.jpg';
import Shoppay from './public/projectsImages/shoppay4.jpg';
import Promptopia from './public/projectsImages/prompt1.jpg';
import Sumz from './public/projectsImages/sumz2.jpg';
import Shoppy from './public/projectsImages/shoppy.jpg';
import LmsApp from './public/projectsImages/lms_app.png';

import css3 from './public/projectsImages/css-logo.png';
import express from './public/projectsImages/express-logo.png';
import javascript from './public/projectsImages/javascript-logo.png';
import mongoDb from './public/projectsImages/mongo-logo.jpg';
import next from './public/projectsImages/next-logo.png';
import node from './public/projectsImages/node-logo.png';
import react from './public/projectsImages/react-logo.jpg';
import tailwindcss from './public/projectsImages/tailwindcss.png';
import Meddstore from './public/projectsImages/meddstore-2.jpg';
import MeddstoreDashboard from './public/projectsImages/dashboard1.jpg';
import MernBlog from './public/projectsImages/mernBlog.jpg';
import TypescriptLogo from './public/projectsImages/typescript.png';

// socials=---------------------------
import gmail from './public/projectsImages/Gmail-logo.png';
import twitter from './public/projectsImages/twitter-logo.png';
import github from './public/projectsImages/github-logo.png';
import instagram from './public/projectsImages/instagram-logo.png';
import whatsapp from './public/projectsImages/whatsapp-logo.png';

// icons

import { AiOutlineFileSearch } from 'react-icons/ai';
import { IoPulseOutline } from 'react-icons/io';
import { GiFlagObjective } from 'react-icons/gi';
import { GrTest } from 'react-icons/gr';
import css from 'styled-jsx/css';

export const projectsData = [
  {
    name: 'Meddstore- ecommerce website',
    text: 'An ecommerce store that displays lists of products in a beautiful UI. allows users to choose from variety of items and complete straight to checkout  or add to cart, and pay with stripe. also has an admin dashboard.',
    img: Meddstore,
    stacks: [
      { img: next },
      { img: node },
      { img: javascript },
      { img: tailwindcss },
    ],
    link: 'https://meddstore.vercel.app',
    github: 'https://github.com/shedrack-prog/Meddstore-frontend',
  },
  {
    name: 'Learning Management System',
    text: 'A Learning Management System for students to browse through courses and purchase courses of their choices, payment with stripe. also has an admin dashboard for course creation and statistics of course sales and revenue.',
    img: LmsApp,
    stacks: [
      { img: next },
      { img: node },
      { img: TypescriptLogo },
      { img: tailwindcss },
    ],
    link: 'https://lms-app-eight.vercel.app/search  ',
    github: 'https://github.com/shedrack-prog/LMS-App',
  },
  {
    name: 'Meddstore-Ecommerce Admin Dashboard',
    text: 'An ecommerce Admin Dashboard with real data in place connected to a frontend store for managing stores for the frontend. Also can be use for other stores not just one frontend store.',
    img: MeddstoreDashboard,
    stacks: [
      { img: next },
      { img: node },
      { img: javascript },
      { img: tailwindcss },
    ],
    link: 'https://meddstore-admin-database.vercel.app/',
    github: 'https://github.com/shedrack-prog/Meddstore-Admin',
  },
  {
    name: 'MERN BLOG',
    text: 'Blog website built with MERN stacks. completed and includes all features like signing-up, creating post, editing post, and deleting user only created posts.',
    img: MernBlog,
    stacks: [
      { img: react },
      { img: node },
      { img: javascript },
      { img: tailwindcss },
    ],
    link: 'https://mern-blog-frontend-eosin.vercel.app/',
    github: 'https://github.com/shedrack-prog/MERN-BLOG-frontend',
  },
  {
    name: 'ECommerce Website',
    text: 'An advanced e-commerce website that allow user to choose from various products. it is built with Next.js and data served from MongoDb. Users can login with 0Auth like Github, Google, Facebook, etc. and At the same time can create an account with  name, email and passwords. Users can select a product and add to cart even if they are not logged in, from the cart they can select the products to checkout. Fill in their the address and either pay with paypal, Stripe or Pay on Delivery. Also with an Admin Dashboard....You Can check it out. ',
    img: Shoppay,
    stacks: [{ img: next }, { img: node }, { img: javascript }, { img: css3 }],
    link: 'https://shoppay-ecommerce.vercel.app/',
    github: 'https://github.com/shedrack-prog/Shoppay',
  },
  {
    name: 'Shoppy-Admin Dashboard and Apps',
    text: 'A Beautiful Admin dashboard created with React js and syncfussion components. includes other useful apps like Calendar, Color-Picker, Editor, Kanban. Website include all core components of an ecommerce Admin dashboard.',
    img: Shoppy,
    stacks: [
      { img: react },
      { img: tailwindcss },
      { img: javascript },
      { img: css3 },
    ],
    link: 'https://shoppy-admin-dashboard-nine.vercel.app/',
    github: 'https://github.com/shedrack-prog/Shoppy-Admin-Dashboard',
  },

  {
    name: 'Promptopia',
    text: 'Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. Promptopia was built with NextJs(React Framework)',
    img: Promptopia,
    stacks: [
      { img: next },
      { img: node },
      { img: javascript },
      { img: tailwindcss },
    ],
    link: 'https://promptopia-green.vercel.app/',
    github: 'https://github.com/shedrack-prog/Promptopia',
  },
  {
    name: 'Jobify',
    text: 'A job search platform where you can search for jobs, you can filter out jobs based on the status or position or job type, This platform has user friendly UI as users can easily sign up or sign in with email and password. users can also edit their profile, add job listings and also edit Jobs too. with many more features. ',
    img: jobify,
    stacks: [
      { img: react },
      { img: javascript },
      { img: css3 },
      { img: node },
      { img: mongoDb },
    ],
    link: 'https://jobify-clone-nws4.onrender.com',
    github: 'https://github.com/shedrack-prog/mern-stack-jobify-frontend',
  },
  {
    name: 'Facebook Clone',
    text: 'This is Facebook clone that has all the functionalities that the real Facebook has like signing up with email, password, date of birth, gender all validated with Formik and Yup. users have the same experience just as in Facebook too. The functionalities include signing up, creating a post with either only texts or with background or many images too,comment to a post, like and reacts such as "love","like", "wow", "angry", "sad" at real time, users can create a post, save post, download images, add emojis, a well designed profile page where you can add you informations such as bio, school, relationship status  and so on. ',
    img: Facebook,
    stacks: [
      { img: react },
      { img: javascript },
      { img: css3 },
      { img: node },
      { img: mongoDb },
    ],
    link: 'https://facebook-clone-frontend-new.vercel.app/',
    github: 'https://github.com/shedrack-prog/Facebook-clone-frontend',
  },
  {
    name: 'Sumz- An AI article summarizer',
    text: 'An AI-powered Application that helps summarize an article that simplify your reading. an open-source article summarizer that transforms lengthy articles into clear and concise summaries.',
    img: Sumz,
    stacks: [
      { img: react },
      { img: node },
      { img: mongoDb },
      { img: javascript },
      { img: css3 },
    ],
    link: 'https://sumz-openai-article-summarizer.netlify.app/',
    github: 'https://github.com/shedrack-prog/Sumz',
  },
  {
    name: 'Netflix Clone',
    text: 'Netlix clone is movie showcase platform that i built using the MERN STACK, you can see all the available movies under each segment example Horror movies, romance segment and so on. users can create an account and also subscribe by paying with Fake credit cards. also with password resets too. Beautiful UI.',
    img: Netflix,
    stacks: [
      { img: react },
      { img: node },
      { img: mongoDb },
      { img: javascript },
      { img: css3 },
    ],
    link: 'https://netflix-clone-49lf.onrender.com',
    github: 'https://github.com/shedrack-prog/Netflix-frontend',
  },
];

export const servicesData = [
  {
    // icon: <AiOutlineFileSearch />,
    title: 'Website Review',
    text: 'I ensure that your website is at its best performance by thoroughly inspecting it before releasing it to the World. I look for potential issues a client might face and make suggestions on how to improve the UI and UX of the website.',
  },
  {
    // icon: <IoPulseOutline />,
    title: 'SEO',
    text: 'I ensure that your website is at its best performance by thoroughly inspecting it before releasing it to the World. I look for potential issues a client might face and make suggestions on how to improve the UI and UX of the website.',
  },
  {
    // icon: <AiOutlineFileSearch />,
    title: 'Objective Development',
    text: 'I build your website with your specifications and goals in mind, whether you want a simple flexible website, a multi-page website, an E-commerce website or a custom storefront. I got you covered.',
  },
  {
    // icon: <AiOutlineFileSearch />,
    title: 'Testing',
    text: 'I ensure that your website is of excellent quality by thoroughly testing it with multiple tools so that it works as expected and is consistent across multiple browsers and responsive to every screen size.',
  },
];

export const procedureData = [
  {
    num: '01',
    title: 'Project Request',
    text: "At the beginning of our collaboration that's when the project request takes place. Your information about the project will help me understand if I am the right person for your project. If I am the right person for your project then we will arrange a video call as we talk about your next big project so that I can learn more about it.",
  },
  {
    num: '02',
    title: 'First Meeting',
    text: 'On our first meeting we get to know each other more and check if we are compatible and a perfect fit. Trust is extremely important to me when I am working with my clients. We also talk about the goals, process and requirements that need to be fulfilled for the project to become a huge success.',
  },
  {
    num: '03',
    title: 'UI Design Phase',
    text: 'With my in-depth knowledge of design concepts I take the information that I have learnt from you and design an exquisite website that is tailored to meet your required needs and standards, all while accurately representing your company and brand and keeping things aesthetically pleasing and useable for your clients.',
  },
  {
    num: '04',
    title: 'Development Phase',
    text: 'Once you are convinced and satisfied with the design your design or the one I created, I then proceed to build your website making sure everything is optimised to meet the the modern day web practices such as speed, responsive design, security, reliability, user experience and reachability.',
  },
  {
    num: '05',
    title: 'Testing Phase',
    text: 'After creating your website, I ensure that your website is of excellent quality by thoroughly going through multiple checklists and testing it with multiple tools so that it works as expected and is consistent across multiple browsers and devices.',
  },
  {
    num: '06',
    title: 'Deployment Phase',
    text: 'Before launching your website, I make sure to add SEO to your website so that your website becomes more visible, searchable and reachable thus making your website gain more traffic, retention and more opportunities to convert prospects into clients.',
  },
];

export const inTouchData = [
  {
    img: gmail,
    name: 'Gmail',
    link: 'mailto:usheddy07@gmail.com',
    text: 'You can connect with me by sending me an email at usheddy07@gmail.com, come say hi.',
  },
  {
    img: twitter,
    name: 'Twitter',
    link: 'https://twitter.com/shedrackcoding',
    text: 'You can write to me and follow me on Twitter to read my latest educative threads.',
  },
  {
    img: github,
    name: 'Github',
    link: 'https://github.com/shedrack-prog',
    text: 'You can check out and test my latest amazing open source projects on Github.',
  },
  {
    img: instagram,
    name: 'Instagram',
    link: 'https://instagram.com/shedrach_coding',
    text: 'You can reach out or follow me on Instagram to get in touch with me, I will reply you ASAP',
  },
  {
    img: whatsapp,
    name: 'WhatsApp',
    link: 'https://wa.me/08125511252',
    text: 'You can also chat me up on whatsapp at any time! just Hi me.',
  },
];
