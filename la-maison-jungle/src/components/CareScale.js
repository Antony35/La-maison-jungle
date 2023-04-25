import sun from '../assets/sun.svg'
import water from '../assets/water.svg'


const quantityLabel = {
  1: 'peu',
  2: 'modérément',
  3: 'beacoup'
}

const CareScale = ({scaleValue, careType}) => {

  const range = [1, 2, 3]
  const scaleType = careType === 'light' ? (
    <img className='lmj-sun' src={sun} alt='sun'/>
  ) : (
    <img className='lmj-water' src={water} alt='water'/>
  )

  return <div onClick={() => {alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${
                              careType === 'light' ? 'lumière' : 'd\'arrosage'}
                              `)}}>
    {range.map(rangeElem =>
      scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)}
  </div>
}
  
export default CareScale
