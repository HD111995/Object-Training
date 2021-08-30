//objects lev-1-2
console.log('**************lev-1-2*********************')
let person = {
    name : "Hisham",
    age : 27,
    sayNameAge(){
        alert(this.name+this.age)
    }
}
console.log(person.name)
console.log(person.age)
//person.sayNameAge()

//lev-1-4
console.log('**************lev-1-4*********************')
let unsereHaustiere = [
    {
      tiertyp: "Katze",
  
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ],
      changeName(){
        this.names = ["Blau","Snoopy"];
      }
    }
  ];
unsereHaustiere.names;
console.log(unsereHaustiere[0].names[1])
console.log(unsereHaustiere[1].names[2])
unsereHaustiere[1].changeName()
console.log(unsereHaustiere[1].names)

//lev-1-5
console.log('**************lev-1-5*********************')
let unserLager = {
    schreibtisch: {
      schublade: "Hefter"
    },
    schrank: {
      "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
      },
      "Untere Schublade": "Cola"
    }
  };
console.log(unserLager.schrank['Obere Schublade'].Ordner2)  
console.log(unserLager.schrank['Untere Schublade'])
console.log(unserLager.schreibtisch.schublade)

//lev 1-6 Object Arrays Accessing
console.log('**************lev-1-6*********************')
let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
  ];
  myMusic.push({
      artist : "Queen",
      title : "Bohemian Rhapsody",
      release_year: 1975,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
  })
  console.log(myMusic[0].artist)
  console.log(myMusic[1].medium[3])
  console.log(myMusic[1].gold)
  console.log(myMusic[2].release_year," und ",myMusic[3].release_year)
  console.log(myMusic[3].medium[2])
  myMusic[3].title.split(' ')
  console.log(myMusic[3].title.split(' ')[4])
  console.log(myMusic[2].title.split(' ')[2])
  console.log(myMusic[1].artist.split(' ')[1])


//lev-1-7
console.log('**************lev-1-7*********************')
myMusic.forEach(element => {
   document.write(element.artist +"<br>"+ element.title+"<br>"+element.medium+"<br>"+(element.release_year=1975)+"<br><br>")
})


//lev-1-8
console.log('**************lev-1-8*********************')
let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
  ];
  studentData.forEach(element =>{
      console.log(element.name)
      console.log(element.coop)
      console.log(element.address.city)
      console.log(element.emails)
  })
  


//lev-2-1
console.log('**************lev-2-1*********************')
let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
  ];
  let arrayNames = []
  edelMetallPreise.forEach(element =>{
      arrayNames.push(element.name)
  })
  console.log(arrayNames)
  let arrayPreis = [];
  edelMetallPreise.map(element =>{
      arrayPreis.push(element.preiseGramEuro)
  })
  console.log(arrayPreis)
  let arrayChanges = [];
  edelMetallPreise.map(element =>{
      arrayChanges.push(element.veraenderung)
  })
  console.log(arrayChanges)
  edelMetallPreise.map(element =>{
      if (element.preiseGramEuro > 50){
        console.log(element)
      }
      
  })
  let  i = 0; 
  edelMetallPreise.forEach(element => {
      i++;
      document.getElementById("t"+i).innerHTML += element.name
      document.getElementById("t1"+i).innerHTML += element.preiseGramEuro
      document.getElementById("t11"+i).innerHTML += element.veraenderung

  })


//lev-2-2
console.log('**************lev-2-2*********************')
const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
  ];
  function sorter(a,b){
    if (a.name < b.name){
      return -1
    }else{
      return 1
    }
  }
  console.log(singers.sort(sorter))


//lev-2-3
console.log('**************lev-2-3*********************')
