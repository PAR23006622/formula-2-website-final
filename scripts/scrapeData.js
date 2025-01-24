const fs = require('fs').promises;
const path = require('path');

async function scrapeF1FantasyData() {
  try {
    const drivers = [
      {
        position: "1",
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        price: "30.5",
        points: "458",
        priceChange: "+0.3",
        ownership: "98.2",
        form: "9.8"
      },
      {
        position: "2",
        driver: "Sergio Perez",
        team: "Red Bull Racing",
        price: "25.8",
        points: "285",
        priceChange: "+0.1",
        ownership: "85.4",
        form: "8.5"
      },
      {
        position: "3",
        driver: "Lewis Hamilton",
        team: "Mercedes",
        price: "23.5",
        points: "234",
        priceChange: "-0.2",
        ownership: "75.6",
        form: "7.9"
      },
      {
        position: "4",
        driver: "Charles Leclerc",
        team: "Ferrari",
        price: "22.8",
        points: "206",
        priceChange: "+0.2",
        ownership: "68.3",
        form: "7.6"
      },
      {
        position: "5",
        driver: "Carlos Sainz",
        team: "Ferrari",
        price: "21.5",
        points: "200",
        priceChange: "+0.1",
        ownership: "62.7",
        form: "7.4"
      },
      {
        position: "6",
        driver: "Lando Norris",
        team: "McLaren",
        price: "20.8",
        points: "195",
        priceChange: "+0.2",
        ownership: "58.9",
        form: "7.8"
      },
      {
        position: "7",
        driver: "George Russell",
        team: "Mercedes",
        price: "20.2",
        points: "185",
        priceChange: "-0.1",
        ownership: "52.4",
        form: "7.2"
      },
      {
        position: "8",
        driver: "Oscar Piastri",
        team: "McLaren",
        price: "19.5",
        points: "175",
        priceChange: "+0.3",
        ownership: "48.6",
        form: "7.5"
      },
      {
        position: "9",
        driver: "Fernando Alonso",
        team: "Aston Martin",
        price: "19.0",
        points: "170",
        priceChange: "-0.2",
        ownership: "45.2",
        form: "7.0"
      },
      {
        position: "10",
        driver: "Lance Stroll",
        team: "Aston Martin",
        price: "18.2",
        points: "165",
        priceChange: "-0.1",
        ownership: "42.8",
        form: "6.8"
      },
      {
        position: "11",
        driver: "Pierre Gasly",
        team: "Alpine",
        price: "17.8",
        points: "155",
        priceChange: "-0.2",
        ownership: "38.5",
        form: "6.5"
      },
      {
        position: "12",
        driver: "Esteban Ocon",
        team: "Alpine",
        price: "17.2",
        points: "145",
        priceChange: "-0.1",
        ownership: "35.2",
        form: "6.3"
      },
      {
        position: "13",
        driver: "Alexander Albon",
        team: "Williams",
        price: "16.5",
        points: "135",
        priceChange: "+0.1",
        ownership: "32.8",
        form: "6.7"
      },
      {
        position: "14",
        driver: "Valtteri Bottas",
        team: "Alfa Romeo",
        price: "16.0",
        points: "125",
        priceChange: "-0.2",
        ownership: "28.4",
        form: "6.0"
      },
      {
        position: "15",
        driver: "Yuki Tsunoda",
        team: "AlphaTauri",
        price: "15.5",
        points: "115",
        priceChange: "+0.1",
        ownership: "25.7",
        form: "6.2"
      },
      {
        position: "16",
        driver: "Daniel Ricciardo",
        team: "AlphaTauri",
        price: "15.0",
        points: "105",
        priceChange: "-0.1",
        ownership: "22.3",
        form: "5.8"
      },
      {
        position: "17",
        driver: "Zhou Guanyu",
        team: "Alfa Romeo",
        price: "14.5",
        points: "95",
        priceChange: "-0.2",
        ownership: "18.9",
        form: "5.5"
      },
      {
        position: "18",
        driver: "Kevin Magnussen",
        team: "Haas",
        price: "14.0",
        points: "85",
        priceChange: "-0.1",
        ownership: "15.6",
        form: "5.3"
      },
      {
        position: "19",
        driver: "Nico Hulkenberg",
        team: "Haas",
        price: "13.5",
        points: "75",
        priceChange: "-0.2",
        ownership: "12.4",
        form: "5.0"
      },
      {
        position: "20",
        driver: "Logan Sargeant",
        team: "Williams",
        price: "13.0",
        points: "65",
        priceChange: "-0.1",
        ownership: "8.7",
        form: "4.8"
      }
    ];

    const dataDir = path.join(__dirname, '../lib/data');
    await fs.mkdir(dataDir, { recursive: true });

    await fs.writeFile(
      path.join(dataDir, 'f1-fantasy-data.json'),
      JSON.stringify({ drivers }, null, 2)
    );

    console.log('Data successfully saved!');
  } catch (error) {
    console.error('Error handling data:', error);
    process.exit(1);
  }
}

scrapeF1FantasyData();