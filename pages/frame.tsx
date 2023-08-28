import React from 'react'
import Image from 'next/image'

export default function frame() {
  return (
    <>
    <div className="flex my-20 mx-10 leading-7 flex-wrap">
    <div>
        <h1 className="font-semibold text-3xl pb-7">5 Best Web Development Frameworks To Use In 2021</h1>
        <p className="pr-9">The framework industry is already congested, with a variety of frameworks accessible, and new ones are being released all the time. This makes it difficult for businesses to settle on a single framework that meets all of their requirements. As a result, we&rsquo;ve prepared a list of the top 5 web development frameworks for your app development project in this blog. </p>
    </div>
    <Image src="/The Little Things - Working.png" alt="logo" height="300" width="300"></Image>
    </div>
   <ol className="ml-9 mr-56 leading-7 list-decimal">
    <li className="font-semibold pb-7 pt-7 text-3xl ml-10 ">CODEIGNITER</li>
    <p>CodeIgniter is a popular PHP web app framework created by EllisLab for web developers wishing to construct interactive sites. This approach differs from the others in that it does not require any setup. It comprises a huge number of monolithic libraries.</p>
    <br></br>
    <br></br>
    <p>The CodeIgniter web application development framework is also a lightweight system, making it a good choice if you want great results and reliable security. Furthermore, thanks to its simple documentation and &lsquo;how-to&rsquo; guides, you can learn the ins and outs in no time.</p>
    <br></br>
    <br></br>
    <p> Popular websites built on this platform include Bufferapp, The Mail, and The Guardian.</p>
    <li className="font-semibold  pb-7 pt-7 text-3xl ml-10">React</li>
    <p>React is one of the most well known front-end web development frameworks. Technically, it&rsquo;s a frontend library, but many developers consider it a front-end framework, and it&rsquo;s often compared as such. It has been utilised and maintained by Facebook and Instagram since it was invented by Facebook.</p>
    <br></br>
    <br></br>
    <p>This framework was the first to adopt the component-based architecture, which was later followed by Angular, Vue, and a slew of other frameworks. The virtual DOM in React makes dom manipulation much easier, and the JSX syntax makes it simple to take up a JVM-based programme.</p>
    <br></br>
    <br></br>
    <p>Another distinct advantage of React Native programming is that it is simple to grasp even if you are unfamiliar with HTML and CSS building components.</p>
    <li className="font-semibold  pb-7 pt-7 text-3xl ml-10">VUE</li>
    <p>Vuejs is a popular JavaScript framework for constructing a highly interactive front-end. This free and open-source framework is mostly used to create user interfaces and single-page apps. This framework employs “high decoupling” to make it easier for developers to construct appealing and convenient user interfaces (UI).</p>
    <br></br>
    <br></br>
    <p>If you already know HTML, CSS, and JavaScript web, you can start constructing your applications practically immediately. A wide range of video courses, manuals, and publications are also available to assist you. Vue.js can be used to construct progressive web apps (PWAs) or web apps that are smaller in scale, such as single-page web apps.</p>
    <br></br>
    <br></br>
    <p>The Vue.js framework is used to create apps like TaskList, ProjectHelios, and FullStack.
</p>
<li className="font-semibold  pb-7 pt-7 text-3xl ml-10">EMBER</li>
<p>This well-known web framework was first released in 2011 among seasoned programmers. It comes with a powerful combination of features and tools that make developing mobile apps a breeze. This component architecture, like Angular, is focused on two-way data binding, which enables for rapid web development.</p>
<br></br>
<br></br>
<p>Ember also has a good reputation when it comes to building sophisticated applications, having been used by companies such as Google, Microsoft, Netflix, and Heroku.</p>
<br></br>
<br></br>
<p>It has a sizable and supportive community of dedicated developers who are enthusiastic about their capacity to increase productivity.</p>
   <li className="font-semibold  pb-7 pt-7 text-3xl ml-10">ANGULAR</li>
   <p>Angular is a popular web development framework based on the open source JavaScript language. Google and a team of developers collaborated to create it. This open-source web app framework is ideal for creating large-scale, high-performance web pages and websites.</p>
   <br></br>
   <br></br>
   <p>While Angular isn&rsquo;t a full stack platform, it&rsquo;s one of the best frontend frameworks for developing client-side applications and web pages for single applications (for both mobile and desktop).</p>
   <br></br>
   <br></br>
   <p>In addition to HTML and CSS, Angular uses Typescript frontend technology, which is a JavaScript framework superset. It also includes web development tools to help you complete your responsibilities and achieve clean coding.</p>
   <br></br>
   <br></br>
   <p>YouTube and Google Translate are two examples of effective Angular applications.

</p>
   </ol>
    </>
  )
}
