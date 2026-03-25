import type { TGalleryImage, TNavigationItemProps, TSocials } from "../types/types"
import type { ListItem } from "../types/types"
import type { TSystemRequirmentItem } from "../types/types"
import twitter from "../assets/icons/socials/twitter.svg";
import youtube from "../assets/icons/socials/youtube.svg";
import twitch from "../assets/icons/socials/twitch.svg";
import facebook from "../assets/icons/socials/facebook.svg";
import { v4 as uuidv4 } from 'uuid';
import img1 from "../assets/images/sliderImages/img1.png";
import img2 from "../assets/images/sliderImages/img2.png";
import img3 from "../assets/images/sliderImages/img3.png";



export const HeaderData:TNavigationItemProps[]=[{
    id:0,
    name:"Main",
    path:"hero"
},{
    id:1,
    name:"About",
    path:"about"
},{
    id:2,
    name:"Game Features",
    path:"game features"
}, {
    id:3,
    name:"System Requirments",
    path:"system"
}, {
    id:4,
    name:"Subscribe",
    path:"subscribe"
}]


export const FeaturesList:ListItem[]=[{
    id:0,
    title:'SURVIVE AT ALL COSTS',
    text:'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.'
},{
    id:1,
    title:'CREATE ALLIES AND ENEMIES',
    text:''
},{
    id:2,
    title:'IMPRESS THE AUDIENCE',
    text:''
},]


export const SystemRequirements:TSystemRequirmentItem[]=[{
    id:0,
    name:'OS',
    value:'Windows 7 64-bit only (No OSX support at this time)'
},{
    id:1,
     name:'pROCESSOR',
    value:'Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ'
},{
    id:2,
     name:'mEMORY',
    value:'8 GB RAM',
   
},{
    id:3,
    name:'storage:',
    value:'8 GB available space'
},{
    id:4,
    name:'GRAPHICS',
    value:'NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)'
}
]

export const socials:TSocials[]=[{
    id:'asd1231sd4',
    icon:facebook,
    path:'facebook.com'
},{
    id:'jshfkjh324123',
    icon:twitter,
    path:'facebook.com'
},{
    id:'xcvnmnzxcpo33412',
    icon:youtube,
    path:'facebook.com'
},{
    id:'czcnbad13532',
    icon:twitch,
    path:'facebook.com'
},]

export const slidesImages:TGalleryImage[]=[{
    id:uuidv4(),
    alt:'img1',
    img:img1,
},{
    id:uuidv4(),
    alt:'img2',
    img:img2,
},{
    id:uuidv4(),
    alt:'img3',
    img:img3,
},]