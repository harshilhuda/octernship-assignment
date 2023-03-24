import './Card.scss'
import DeleteIcon from '@mui/icons-material/Delete';
function Card({c,removeChars,index}) {
    const backgroundColors={
        'a':'Aqua',
        'b':'Blue',
        'c':'Coral',
        'd':'rgb(230, 85, 150)',
        'e':'#558de6',
        'f':'#55e6da',
        'g':'Gold',
        'h':'#abc1f5',
        'i':'Indigo',
        'j':'#abd6f5',
        'k':'Khaki',
        'l':'Lavender',
        'm':'Magenta',
        'n':'#87c79b',
        'o':'Orange',
        'p':'Purple',
        'q':'#a4c787',
        'r':'rgb(59, 84, 20)',
        's':'#87a4c7',
        't':'Turquoise',
        'u':'#87c2c7',
        'v':'#8798c7',
        'w':'#a887c7',
        'x':'rgb(164, 235, 52)',
        'y':'Yellow',
        'z':'#c7a187',
    }
  return (
    <div className="card" style={{backgroundColor: backgroundColors[c]}}>
        <DeleteIcon className='btn' onClick={()=>removeChars(c,index)} />
        <h1>{c}</h1>
    </div>
  )
}

export default Card