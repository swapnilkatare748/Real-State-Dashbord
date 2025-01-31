import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { BsChatSquareQuote } from "react-icons/bs";
import {profile2,profile3,profile4,profile5,
        profile6,profile7,profile8
}

from './assets/images'
import agent1 from "./assets/agent-1.jpeg";
import agent2 from "./assets/agent-2.jpeg";
import agent3 from "./assets/agent-3.jpeg";
import agent4 from "./assets/agent-4.jpeg";
import agent5 from "./assets/agent-5.jpeg";
import agent6 from "./assets/agent-6.jpeg";
// import { profile7 } from "./assets/images/index";

export const AddminProfile = [
  { 
    photo : profile7,
    name : "Admine Name",
    Email : "Admine@gmail.com",
    Position : "Admine",
    description : "this ia an About section  tempor incididunt ut labore et dolore magna aliqua.",
    
  }
];


export const sidebar = [
  {
    name: "Dashboard",
    route: "dashboard",
    activeRoutes: ["/admin/dashboard", "/user/dashboard"],
    icon: <MdSpaceDashboard />,
  },
  {
    name: "Users",
    route: "profile",
    activeRoutes: ["/profile"],
    icon: <FiUsers />,
  },
  {
    name: "Properties",
    route: "properties",
    activeRoutes: ["/admin/properties", "/user/properties"],
    icon: <BsBuildings />,
  },
  {
    name: "Analytics",
    route: "analytics",
    activeRoutes: ["/admin/analytics"],
    icon: <TbBrandGoogleAnalytics />,
  },
  {
    name: "Inbox",
    route: "inbox",
    activeRoutes: ["/admin/inbox", "/user/inbox"],
    icon: <BsChatSquareQuote />,
  },
  {
    name: "Reports",
    route: "reports",
    activeRoutes: ["/admin/reports"],
    icon: <MdOutlineReport />,
  },
  {
    name: "Requests",
    route: "requests",
    activeRoutes: ["/admin/requests"],
    icon: <VscGitPullRequestNewChanges />,
  },
  {
    name: "Notifications",
    route: "notifications",
    activeRoutes: ["/admin/notifications", "/user/notifications"],
    icon: <IoMdNotificationsOutline />,
  },
  {
    name: "Settings",
    route: "settings",
    activeRoutes: ["/admin/settings"],
    icon: <IoSettingsOutline />,
  },
];

export const navTabs = [
    {name:"Overview", route:"/",activeRoutes:['/'],},
    {name:"Profile", route:"profile",activeRoutes:['/Home/profile'],},
    {name:"Settings", route:"settings",activeRoutes:['/Home/settings'],},
    {name:"Properties", route:"properties",activeRoutes:['/Home/properties'],},
]



export const propertyRequest = [
    {   id :"1",
        customerName:"Ngozi Eze",
        customerProfile:profile2,
        customerAddress: "Enugu",
        productName: "Smartwatch",
        purchaseDate: new Date("January 10, 2024"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$10.5",
    },
    {   
        id :"2",
        customerName:"Sam Onyi",
        customerProfile:profile3,
        customerAddress: "Lagos",
        productName: "Smartphone",
        purchaseDate: new Date("December 15, 2023"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$205",
    },
    {   
        id :"3",
        customerName:"Amara Praise",
        customerProfile:profile4,
        customerAddress: "Abia Town",
        productName: "Smart Thermostat",
        purchaseDate: new Date("July 20, 2023"),
        status:2,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$9.9",
    },
    {   
        id :"4",
        customerName:"Emmanuel",
        customerProfile:profile5,
        customerAddress: "FCT Abuja",
        productName: "Robot Vacuum Cleaner",
        purchaseDate: new Date("May 1, 2023"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$101.9",
    },
    {   id :"5",
        customerName:"Kwame Jow",
        customerProfile:profile6,
        customerAddress: "Accra",
        productName: "Electric Toothbrush",
        purchaseDate: new Date("January 2, 2023"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$11.6",
    },
    {   id:"6",
        customerName:"Eze",
        customerProfile:profile7,
        customerAddress: "Enugu",
        productName: "Portable Printer",
        purchaseDate: new Date("November 11, 2022"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$300.9",
    },
    {   
        id:"7",
        customerName:"Patrick",
        customerProfile:profile8,
        customerAddress: "Niger",
        productName: "Digital Voice Recorder",
        purchaseDate: new Date("August 16, 2022"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$8.9",
    },
]

export const properties = [
    { id :"1", 
      title:"Spectacular Oceanfront Villa with Private Beach Access",
      image:"https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg",
      description:` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$35,000",
      bedrooms:"2",
      bathrooms:"3",
      location:"Abuja, Nigeria",
      type:'Sale',
    },
    {
      id :"2",
      title:"Chic Downtown Loft with Panoramic City Views",
      image:"https://www.bankrate.com/2022/09/21122002/Residential-real-estate.jpg",
      description:` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Animi atque fugiat doloremque similique, magnam`,
      price:"$90,500",
      bedrooms:"4",
      bathrooms:"6",
      location:"Lagos, Nigeria",
      type:'Rent',
    },
    {
      id :"3",
      title:"Majestic Napa Valley Estate with Vineyard and Winery",
      image:"https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$120,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Enugu, Nigeria",
      type:'Sale',
    },
    {
      id :"4",
      title:"Luxury Real Estate Specialists - Abuja Nigeria",
      image:"https://www.lps-china.com/wp-content/uploads/2020/09/shutterstock1-1-890x615.png",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$97,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Abuja, Nigeria",
      type:'Sale',
    },
    {
      id :"5",
      title:"Luxury Real Estate and Homes for Sale Sotheby's International Realty",
      image:"https://www.villaafrika.com/wp-content/uploads/2021/04/galadimawa-terraced-house-7722.jpg",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$77,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Port harcourt",
      type:'Rent',
    },
    {
      id :"6",
      title:"43 Carson Circuit, Enugu - Property Details",
      image:"https://i2.au.reastatic.net/800x600/cf472da40f51e0910d542cfb7826b950a2fa255292814838e1825f4d6effebaf/image.jpg",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$65,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Enugu, Nigeria",
      type:'Rent',
    },
]

export const agents = [
    {
      id:'1',
      name:"Mary Arum",
      profile:agent1,
      position:'Top Agent',
      email:'User@gmail.com',
      Status:'Active',

    },
    {
      id:'2',
      name:"Kelvin Dan",
      profile:agent2,
      position:'Top Agent',
      email:'User@gmail.com',
      Status:'Active',
    },
    {
      id:'3',
      name:"Joy Eze",
      profile:agent3,
      position:'Top Agent',
      email:'User@gmail.com',
      Status:'Active',

    },
    {
      id:'4',
      name:"Sunday Oga",
      profile:agent4,
      position:'Top Agent',
      email:'User@gmail.com',
      Status:'Active',

    },
    {
      id:'5',
      name:"Chisom Precious",
      profile:agent5,
      position:'Top Agent',
      email:'User@gmail.com',
      Status:'Active',

    },
    {
      id:'6',
      name:"Jennifer Williams",
      profile:agent6,
      position:'Top Agent',
      email:'User@gmail.com',
      Status:'Active',

    },
  ]


  // messages 

 export const messages = [
    {
      id: 1,
      senderName: "John Doe",
      fileLink: "https://example.com/documents/report.pdf",
      subject: "Quarterly Report Submission",
      description: "Please review the attached report for the last quarter.",
      timestamp: "2025-01-12 10:30 AM",
    },
    {
      id: 2,
      senderName: "Jane Smith",
      fileLink: "https://example.com/images/bug_screenshot.png",
      subject: "Bug Report",
      description: "Found a bug in the UI. Please check the attached screenshot for details.",
      timestamp: "2025-01-11 4:20 PM",
    },
    {
      id: 3,
      senderName: "System Notification",
      fileLink: null, // No file in this case
      subject: "Maintenance Scheduled",
      description: "The system will be under maintenance from 12:00 AM to 4:00 AM.",
      timestamp: "2025-01-10 8:00 PM",
    },
    {
      id: 4,
      senderName: "Emily Carter",
      fileLink: "https://example.com/forms/feedback_form.docx",
      subject: "Feedback Form",
      description: "Kindly fill out the attached feedback form for the recent workshop.",
      timestamp: "2025-01-09 3:15 PM",
    },
  ];
  