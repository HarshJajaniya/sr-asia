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
    path: "M350,80 L320,100 L300,140 L330,160 L370,150 L390,120 L380,90 L350,80 Z",
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
    path: "M410,210 L390,230 L400,260 L430,270 L450,250 L440,220 L410,210 Z",
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
    path: "M320,270 L300,290 L310,320 L340,330 L360,310 L350,280 L320,270 Z",
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
    path: "M190,280 L160,310 L170,370 L220,400 L270,380 L290,330 L260,290 L190,280 Z",
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
    path: "M400,280 L370,310 L380,370 L430,400 L480,380 L490,320 L460,290 L400,280 Z",
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
    path: "M580,320 L560,340 L570,380 L600,390 L620,370 L610,330 L580,320 Z",
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
    path: "M340,380 L310,410 L330,470 L390,490 L450,470 L470,410 L440,380 L340,380 Z",
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
    path: "M720,370 L700,400 L710,450 L740,470 L760,450 L750,400 L720,370 Z",
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
    path: "M290,520 L180,550 L200,610 L260,630 L320,610 L340,550 L310,520 L210,520 Z",
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
    path: "M500,450 L480,480 L490,530 L530,550 L560,530 L570,480 L540,450 L500,450 Z",
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
    path: "M250,670 L220,700 L240,760 L300,780 L350,760 L370,700 L340,670 L250,670 Z",
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
    path: "M290,790 L270,820 L290,870 L340,890 L380,870 L390,820 L360,790 L290,790 Z",
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
