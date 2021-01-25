import Sector from './Sector';

let tickets = [
  {
  sector: "A",
  seat:1,
  active:false
},{
  sector: "A",
  seat:2,
  active:false
},{
  sector: "A",
  seat:3,
  active:true
},{
  sector: "A",
  seat:4,
  active:false
},{
  sector: "A",
  seat:5,
  active:true
},{
  sector: "A",
  seat:6,
  active:false
},{
  sector: "A",
  seat:7,
  active:true
},{
  sector: "A",
  seat:8,
  active:false
},{
  sector: "A",
  seat:9,
  active:true
},{
  sector: "A",
  seat:10,
  active:false
},{
  sector: "A",
  seat:11,
  active:true
},{
  sector: "A",
  seat:12,
  active:false
},{
  sector: "A",
  seat:13,
  active:true
},  {
  sector: "B",
  seat:1,
  active:true
},{
  sector: "B",
  seat:2,
  active:false
},{
  sector: "B",
  seat:3,
  active:true
},{
  sector: "B",
  seat:4,
  active:true
},{
  sector: "B",
  seat:5,
  active:true
},{
  sector: "B",
  seat:6,
  active:true
},{
  sector: "B",
  seat:7,
  active:false
},{
  sector: "B",
  seat:8,
  active:false
},{
  sector: "B",
  seat:9,
  active:true
},{
  sector: "B",
  seat:10,
  active:false
},{
  sector: "B",
  seat:11,
  active:true
},{
  sector: "B",
  seat:12,
  active:false
},{
  sector: "B",
  seat:13,
  active:true
},  {
  sector: "C",
  seat:1,
  active:true
},{
  sector: "C",
  seat:2,
  active:true
},{
  sector: "C",
  seat:3,
  active:false
},{
  sector: "C",
  seat:4,
  active:true
},{
  sector: "C",
  seat:5,
  active:false
},{
  sector: "C",
  seat:6,
  active:true
},{
  sector: "C",
  seat:7,
  active:false
},{
  sector: "C",
  seat:8,
  active:false
},{
  sector: "C",
  seat:9,
  active:true
},{
  sector: "C",
  seat:10,
  active:true
},{
  sector: "C",
  seat:11,
  active:true
},{
  sector: "C",
  seat:12,
  active:false
},{
  sector: "C",
  seat:13,
  active:false
},
{
  sector: "D",
  seat:1,
  active:false
},{
  sector: "D",
  seat:2,
  active:true
},{
  sector: "D",
  seat:3,
  active:false
},{
  sector: "D",
  seat:4,
  active:true
},{
  sector: "D",
  seat:5,
  active:true
},{
  sector: "D",
  seat:6,
  active:false
},{
  sector: "D",
  seat:7,
  active:false
},{
  sector: "D",
  seat:8,
  active:true
},{
  sector: "D",
  seat:9,
  active:false
},{
  sector: "D",
  seat:10,
  active:true
},{
  sector: "D",
  seat:11,
  active:false
},{
  sector: "D",
  seat:12,
  active:false
},{
  sector: "D",
  seat:13,
  active:true
},
{
  sector: "E",
  seat:1,
  active:false
},{
  sector: "E",
  seat:2,
  active:false
},{
  sector: "E",
  seat:3,
  active:false
},{
  sector: "E",
  seat:4,
  active:true
},{
  sector: "E",
  seat:5,
  active:false
},{
  sector: "E",
  seat:6,
  active:false
},{
  sector: "E",
  seat:7,
  active:true
},{
  sector: "E",
  seat:8,
  active:false
},{
  sector: "E",
  seat:9,
  active:true
},{
  sector: "E",
  seat:10,
  active:true
},{
  sector: "E",
  seat:11,
  active:false
},{
  sector: "E",
  seat:12,
  active:true
},{
  sector: "E",
  seat:13,
  active:false
},  {
  sector: "F",
  seat:1,
  active:true
},{
  sector: "F",
  seat:2,
  active:false
},{
  sector: "F",
  seat:3,
  active:false
},{
  sector: "F",
  seat:4,
  active:false
},{
  sector: "F",
  seat:5,
  active:false
},{
  sector: "F",
  seat:6,
  active:true
},{
  sector: "F",
  seat:7,
  active:true
},{
  sector: "F",
  seat:8,
  active:false
},{
  sector: "F",
  seat:9,
  active:true
},{
  sector: "F",
  seat:10,
  active:false
},{
  sector: "F",
  seat:11,
  active:false
},{
  sector: "F",
  seat:12,
  active:false
},{
  sector: "F",
  seat:13,
  active:true
},
    
]

function App() {
  return (
    <div>
      <Sector tickets={tickets}>
      </Sector>
    </div>
  );
}

export default App;
