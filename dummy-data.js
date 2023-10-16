const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Summare',
      description:
        'AI powered sourcing and summarization of the latest technology news and discoveries.',
      image: 'images/summare.jpg',
      url:'https://summare.ai'
    },
    {
      id: 'e2',
      title: 'SmartEMR',
      description:
        "Electronic medical records, inventory and collections management for small clinics. Login credetiials - Username: genericuser, password: secure123",
      image: 'images/emr.jpg',
      url: 'http://ec2-54-161-101-243.compute-1.amazonaws.com/'
    },
    {
      id: 'e3',
      title: 'DYDX pairs trading bot',
      description:
        'Pairs trading bot utilizing co-integration and statistical arbitrage.',
      image: 'images/dydx.jpg',
      url: 'https://github.com/chuboyo/dydx-trading-bot'
    },
    {
        id: 'e4',
        title: 'Image classifier',
        description:
          'CNN powered image classifier with 1000 classes for classifying different entities.',
        image: 'images/imageclass.jpg',
        url:'https://github.com/chuboyo/imageclassifierproject'
      },
  ];
  
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  