import{j as e,m as p,L as h,r as l,d as j}from"./index-DVAzSIT1.js";import{I as u,a as b}from"./web-project-2-dTgnvWoM.js";const m=({title:a,category:t,image:n})=>e.jsx(p.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:e.jsx(h,{to:"/projects/single-project","aria-label":"Single Project",children:e.jsxs("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[e.jsx("div",{children:e.jsx("img",{src:n,className:"rounded-t-xl border-none",alt:"Single Project"})}),e.jsxs("div",{className:"text-center px-4 py-6",children:[e.jsx("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:a}),e.jsx("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:t})]})]})})}),k="/myportfolio/assets/dsa-project-ajDGnkZT.png",P="/myportfolio/assets/ai-project-Bj6zQRM9.png",f="/myportfolio/assets/MLImage-UCTVNxGy.png",N="/myportfolio/assets/MLImage-2-6HE2lnfS.png",S=[{id:1,title:"Career Upskilling Web Application",category:"Web Application",img:u,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Cryptocurrency Application",category:"Web Application",img:b},{id:3,title:"Unbeatable Tic Tac Toe",category:"Artificial Intelligence",img:P},{id:4,title:"Multiclass Handwritten Digit Classification",category:"Machine Learning",img:f},{id:5,title:"Predicting the Reusability of Falcon 9 First Stage",category:"Machine Learning",img:N},{id:6,title:"Words frequency alalyser (.txt file) using Custom made Hash Table Dictionary",category:"Data Structures and Algorithms",img:k}],g=l.createContext(),L=a=>{const[t,n]=l.useState(S),[i,o]=l.useState(""),[c,d]=l.useState(""),r=t.filter(s=>s.title.toLowerCase().includes(i.toLowerCase())||i===""?s:""),x=t.filter(s=>(s.category.charAt(0).toUpperCase()+s.category.slice(1)).includes(c));return e.jsx(g.Provider,{value:{projects:t,setProjects:n,searchProject:i,setSearchProject:o,searchProjectsByTitle:r,selectProject:c,setSelectProject:d,selectProjectsByCategory:x},children:a.children})},v=["Web Application","Artificial Intelligence","Machine Learning","Data Structures and Algorithms"],C=({setSelectProject:a})=>e.jsxs("select",{onChange:t=>{a(t.target.value)},className:`font-general-medium \r
                px-4\r
                sm:px-6\r
                py-2\r
                border\r
                dark:border-secondary-dark\r
                rounded-lg\r
                text-sm\r
                sm:text-md\r
                dark:font-medium\r
                bg-secondary-light\r
                dark:bg-ternary-dark\r
                text-primary-dark\r
                dark:text-ternary-light\r
            `,children:[e.jsx("option",{value:a,className:"text-sm sm:text-md",children:"All Projects"}),v.map(t=>e.jsx("option",{className:"text-normal sm:text-md",children:t},t))]}),M=()=>{const{projects:a,searchProject:t,setSearchProject:n,searchProjectsByTitle:i,selectProject:o,setSelectProject:c,selectProjectsByCategory:d}=l.useContext(g);return e.jsxs("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),e.jsxs("div",{className:"mt-10 sm:mt-16",children:[e.jsx("h3",{className:`font-general-regular \r
                        text-center text-secondary-dark\r
                        dark:text-ternary-light\r
                        text-md\r
                        sm:text-xl\r
                        mb-3\r
                        `,children:"Search projects by title or filter by category"}),e.jsxs("div",{className:`\r
                        flex\r
                        justify-between\r
                        border-b border-primary-light\r
                        dark:border-secondary-dark\r
                        pb-3\r
                        gap-3\r
                        `,children:[e.jsxs("div",{className:"flex justify-between gap-2",children:[e.jsx("span",{className:`\r
                                hidden\r
                                sm:block\r
                                bg-primary-light\r
                                dark:bg-ternary-dark\r
                                p-2.5\r
                                shadow-sm\r
                                rounded-xl\r
                                cursor-pointer\r
                                `,children:e.jsx(j,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),e.jsx("input",{onChange:r=>{n(r.target.value)},className:`font-general-medium \r
                                pl-3\r
                                pr-1\r
                                sm:px-4\r
                                py-2\r
                                border \r
                            border-gray-200\r
                                dark:border-secondary-dark\r
                                rounded-lg\r
                                text-sm\r
                                sm:text-md\r
                                bg-secondary-light\r
                                dark:bg-ternary-dark\r
                                text-primary-dark\r
                                dark:text-ternary-light\r
                                `,id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),e.jsx(C,{setSelectProject:c})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:o?d.map(r=>e.jsx(m,{title:r.title,category:r.category,image:r.img},r.id)):t?i.map(r=>e.jsx(m,{title:r.title,category:r.category,image:r.img},r.id)):a.map(r=>e.jsx(m,{title:r.title,category:r.category,image:r.img},r.id))})]})};export{L as P,M as a};
