// This file contains the state data including paths that match the India map image

interface ClientFeedback {
  client: string
  comment: string
}

interface StateData {
  id: string
  name: string
  path: string
  clientFeedback: ClientFeedback[]
}

export const stateData: Record<string, StateData> = {
  jammuKashmir: {
    id: "jammuKashmir",
    name: "Jammu & Kashmir",
    path: "M250,120 L220,140 L200,180 L230,200 L270,190 L290,160 L280,130 L250,120 Z",
    clientFeedback: [
      {
        client: "Kashmir Handicrafts",
        comment:
          "The tourism promotion campaign increased our visibility significantly. Very satisfied with the results.",
      },
      {
        client: "Jammu Textiles",
        comment: "The digital transformation initiative helped us reach new markets. Excellent service.",
      },
    ],
  },
  himachalPradesh: {
    id: "himachalPradesh",
    name: "Himachal Pradesh",
    path: "M270,200 L240,210 L230,240 L260,260 L290,250 L300,220 L280,200 L270,200 Z",
    clientFeedback: [
      {
        client: "Shimla Resorts",
        comment: "The marketing strategy developed for our eco-tourism initiative was spot on. Great results!",
      },
      {
        client: "Kullu Valley Farms",
        comment: "The supply chain optimization project increased our efficiency by 40%. Highly recommended.",
      },
    ],
  },
  punjab: {
    id: "punjab",
    name: "Punjab",
    path: "M220,240 L200,260 L210,290 L240,300 L260,280 L250,250 L220,240 Z",
    clientFeedback: [
      {
        client: "Amritsar Food Products",
        comment: "The branding refresh helped us appeal to a younger demographic. Sales have increased by 25%.",
      },
      {
        client: "Ludhiana Textiles",
        comment: "The e-commerce platform implementation was smooth and effective. Our online sales have doubled.",
      },
    ],
  },
  uttarakhand: {
    id: "uttarakhand",
    name: "Uttarakhand",
    path: "M310,230 L290,250 L300,280 L330,290 L350,270 L340,240 L310,230 Z",
    clientFeedback: [
      {
        client: "Dehradun Tourism",
        comment: "The digital marketing campaign for adventure tourism exceeded our expectations. Bookings up by 60%.",
      },
      {
        client: "Nainital Hospitality",
        comment: "The customer experience redesign has resulted in significantly higher guest satisfaction scores.",
      },
    ],
  },
  haryana: {
    id: "haryana",
    name: "Haryana",
    path: "M240,270 L220,290 L230,320 L260,330 L280,310 L270,280 L240,270 Z",
    clientFeedback: [
      {
        client: "Gurgaon Tech Solutions",
        comment: "The IT infrastructure upgrade was completed ahead of schedule and under budget. Excellent work.",
      },
      {
        client: "Faridabad Manufacturing",
        comment: "The process optimization project has increased our production efficiency by 35%. Great ROI.",
      },
    ],
  },
  delhi: {
    id: "delhi",
    name: "Delhi",
    path: "M255,295 L245,305 L250,315 L260,320 L270,315 L275,305 L270,295 L255,295 Z",
    clientFeedback: [
      {
        client: "Delhi Metro Corporation",
        comment: "The smart city solutions implemented have improved our operational efficiency significantly.",
      },
      {
        client: "NCR Business Hub",
        comment: "The digital transformation initiative has modernized our entire workflow. Highly satisfied.",
      },
    ],
  },
  rajasthan: {
    id: "rajasthan",
    name: "Rajasthan",
    path: "M150,280 L120,310 L130,370 L180,400 L230,380 L250,330 L220,290 L150,280 Z",
    clientFeedback: [
      {
        client: "Jaipur Tourism Board",
        comment: "The heritage conservation and promotion campaign has increased tourist footfall by 45%.",
      },
      {
        client: "Jodhpur Handicrafts",
        comment: "The international market expansion strategy has opened new revenue streams for our artisans.",
      },
    ],
  },
  uttarPradesh: {
    id: "uttarPradesh",
    name: "Uttar Pradesh",
    path: "M320,280 L290,310 L300,370 L350,400 L400,380 L410,320 L380,290 L320,280 Z",
    clientFeedback: [
      {
        client: "Lucknow Heritage Foundation",
        comment: "The cultural preservation project has successfully digitized our historical archives.",
      },
      {
        client: "Varanasi Tourism",
        comment: "The visitor experience enhancement program has received overwhelmingly positive feedback.",
      },
    ],
  },
  bihar: {
    id: "bihar",
    name: "Bihar",
    path: "M420,320 L400,340 L410,380 L440,390 L460,370 L450,330 L420,320 Z",
    clientFeedback: [
      {
        client: "Patna Agricultural Cooperative",
        comment: "The farm-to-market digital platform has reduced middlemen and increased farmer profits.",
      },
      {
        client: "Bihar Education Initiative",
        comment: "The e-learning implementation has reached over 100,000 students in rural areas.",
      },
    ],
  },
  gujarat: {
    id: "gujarat",
    name: "Gujarat",
    path: "M100,350 L80,380 L90,430 L130,460 L170,440 L180,390 L150,360 L100,350 Z",
    clientFeedback: [
      {
        client: "Ahmedabad Textiles Association",
        comment: "The industry modernization program has helped our members compete in global markets.",
      },
      {
        client: "Surat Diamond Merchants",
        comment: "The blockchain implementation for supply chain tracking has improved transparency and trust.",
      },
    ],
  },
  madhyaPradesh: {
    id: "madhyaPradesh",
    name: "Madhya Pradesh",
    path: "M220,380 L190,410 L210,470 L270,490 L330,470 L350,410 L320,380 L220,380 Z",
    clientFeedback: [
      {
        client: "Bhopal Tourism Development",
        comment: "The eco-tourism initiative has created sustainable livelihoods in tribal areas.",
      },
      {
        client: "Indore Business Council",
        comment: "The smart city infrastructure project has transformed urban mobility and reduced congestion.",
      },
    ],
  },
  jharkhand: {
    id: "jharkhand",
    name: "Jharkhand",
    path: "M430,380 L410,400 L420,440 L450,450 L470,430 L460,390 L430,380 Z",
    clientFeedback: [
      {
        client: "Ranchi Mining Corporation",
        comment: "The sustainable mining practices program has improved both efficiency and environmental compliance.",
      },
      {
        client: "Jharkhand Tribal Crafts",
        comment: "The e-commerce platform has connected our artisans directly to international buyers.",
      },
    ],
  },
  westBengal: {
    id: "westBengal",
    name: "West Bengal",
    path: "M470,370 L450,400 L460,450 L490,470 L510,450 L500,400 L470,370 Z",
    clientFeedback: [
      {
        client: "Kolkata Heritage Trust",
        comment: "The cultural preservation initiative has successfully restored five historical landmarks.",
      },
      {
        client: "Bengal Handloom Association",
        comment: "The digital marketplace has increased our weavers' income by connecting them to global buyers.",
      },
    ],
  },
  maharashtra: {
    id: "maharashtra",
    name: "Maharashtra",
    path: "M180,440 L150,470 L170,530 L230,550 L290,530 L310,470 L280,440 L180,440 Z",
    clientFeedback: [
      {
        client: "Mumbai Financial Services",
        comment: "The fintech implementation has streamlined our operations and improved customer satisfaction.",
      },
      {
        client: "Pune IT Cluster",
        comment: "The innovation hub has fostered collaboration between startups and established companies.",
      },
    ],
  },
  telangana: {
    id: "telangana",
    name: "Telangana",
    path: "M300,470 L280,500 L290,540 L320,550 L340,530 L330,490 L300,470 Z",
    clientFeedback: [
      {
        client: "Hyderabad Tech Park",
        comment: "The smart campus initiative has reduced energy consumption by 30% while improving productivity.",
      },
      {
        client: "Telangana Healthcare Alliance",
        comment: "The telemedicine platform has provided healthcare access to over 200 remote villages.",
      },
    ],
  },
  odisha: {
    id: "odisha",
    name: "Odisha",
    path: "M380,450 L360,480 L370,530 L410,550 L440,530 L450,480 L420,450 L380,450 Z",
    clientFeedback: [
      {
        client: "Bhubaneswar Urban Development",
        comment: "The smart city implementation has transformed public services and citizen engagement.",
      },
      {
        client: "Odisha Handicrafts Promotion",
        comment: "The artisan skills development program has preserved traditional crafts while creating livelihoods.",
      },
    ],
  },
  karnataka: {
    id: "karnataka",
    name: "Karnataka",
    path: "M220,550 L190,580 L210,640 L270,660 L320,640 L340,580 L310,550 L220,550 Z",
    clientFeedback: [
      {
        client: "Bangalore Tech Innovation Hub",
        comment: "The startup ecosystem development program has attracted international investment and talent.",
      },
      {
        client: "Mysore Tourism Board",
        comment:
          "The heritage tourism initiative has increased visitor numbers by 50% while preserving cultural sites.",
      },
    ],
  },
  andhrapradesh: {
    id: "andhrapradesh",
    name: "Andhra Pradesh",
    path: "M320,530 L300,560 L310,610 L350,630 L390,610 L400,560 L370,530 L320,530 Z",
    clientFeedback: [
      {
        client: "Visakhapatnam Port Trust",
        comment: "The digital transformation of port operations has reduced processing times by 60%.",
      },
      {
        client: "Andhra Pradesh Farmers' Cooperative",
        comment: "The agricultural technology implementation has increased crop yields while reducing water usage.",
      },
    ],
  },
  tamilnadu: {
    id: "tamilnadu",
    name: "Tamil Nadu",
    path: "M290,640 L270,670 L290,720 L340,740 L380,720 L390,670 L360,640 L290,640 Z",
    clientFeedback: [
      {
        client: "Chennai Manufacturing Association",
        comment: "The Industry 4.0 implementation has modernized production lines and increased output quality.",
      },
      {
        client: "Coimbatore Tech Startups",
        comment: "The innovation incubator has successfully launched 15 new technology ventures in the past year.",
      },
    ],
  },
  kerala: {
    id: "kerala",
    name: "Kerala",
    path: "M250,670 L230,700 L240,740 L270,760 L300,740 L310,700 L290,670 L250,670 Z",
    clientFeedback: [
      {
        client: "Kerala Tourism Development",
        comment: "The sustainable tourism initiative has balanced environmental preservation with economic growth.",
      },
      {
        client: "Kochi Smart City",
        comment: "The urban technology implementation has created a model for sustainable urban development.",
      },
    ],
  },
}
