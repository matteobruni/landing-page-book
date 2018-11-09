webpackJsonp([0xd6e1e370e0fc],{1016:function(e,t){e.exports={description:"",displayName:"Backers",methods:[{name:"formatData",docblock:null,modifiers:[],params:[{name:"{ backers }",type:null}],returns:null}],props:{className:{type:{name:"string"},required:!1,description:"CSS class name for custom styles",defaultValue:{value:"''",computed:!1}},imageRounded:{type:{name:"bool"},required:!1,description:"If true the image will be rounded as a circle",defaultValue:{value:"true",computed:!1}},imageBordered:{type:{name:"bool"},required:!1,description:"If true the image will have a solid border",defaultValue:{value:"true",computed:!1}},imageGray:{type:{name:"bool"},required:!1,description:"If true the image doesn't show colors",defaultValue:{value:"false",computed:!1}},backers:{type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!1},profile:{name:"string",required:!1},image:{name:"string",required:!1},contributionAmount:{name:"number",required:!1}}}},required:!1,description:"List of backers",defaultValue:{value:"[]",computed:!1}}},filename:"/components/Backers/Backers.jsx"}},409:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=o(1),u=n(s),c=o(5),m=n(c),l=o(6),p=n(l),f=o(464),d=n(f),g=o(1016),b=n(g),h=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement(m.default,{pagePushedFunction:this.handlepushedPageLayout},d.default&&u.default.createElement(p.default,{name:d.default.name,linkGithub:"https://github.com/front10/landing-page-book/tree/master/src/components/Backers",description:d.default.summary,stories:d.default.stories,importCode:d.default.import,withStyles:d.default.withStyles,extractProps:d.default.extractProps,propsDescription:b.default.props}))},t}(u.default.Component);t.default=h,e.exports=t.default},459:function(e,t){"use strict";t.__esModule=!0,t.default=[{name:"Neil",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/astronaut.svg",contributionAmount:125},{name:"Leonardo",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/ninja.svg",contributionAmount:47},{name:"Van Gogh",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/bohemian.svg",contributionAmount:200},{name:"Tom",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/footballist.svg",contributionAmount:300},{name:"Hacker",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/hacker.svg",contributionAmount:21},{name:"Superheroe",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/superheroe.svg",contributionAmount:1e3},{name:"Doctor",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/doctor.svg",contributionAmount:584},{name:"Nurse",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/nurse.svg",contributionAmount:584},{name:"Nun",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/nun.svg",contributionAmount:91},{name:"Woman",profile:"https://front10.com",image:"https://front10.com/landing-page-book/images/backers/woman.svg",contributionAmount:916}],e.exports=t.default},464:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=o(459),a=n(r);t.default={name:"Backers",summary:"A person, institution, or country that supports something, especially financially. Its important show the people who support your idea.",import:"",withStyles:!0,stories:[{name:"Basic",summary:"",code:"<Backers\n    backers={"+JSON.stringify(a.default,null,8)+"}\n/>",tabsActive:["code"]}]},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-backers-js-9f35e9807c0173abd89c.js.map