import './style.css'
import { createRandomGroups } from './utils'

document.querySelector('#groupBtn').addEventListener('click', handlerGroup)

function handlerGroup(){
  let elements = document.querySelector('#elements').value.split('\n')
  elements = elements.filter(e=>e!='')
  const numOfItems = parseInt(document.querySelector("numOfItems").value)
  const data = createRandomGroups(elements, numOfItems)
  //const inGroups = data.inGroups
  //const noGroups = data.noGroups
  const {inGroups, noGroups} = data //los de arriba son lo mismo, pero este es en solo un paso
  console.log(inGroups, noGroups)

  let msg = ''
  inGroups.forEach((group, i) => msg += `Grupo ${i}: ${group.join(',')} <br/>`)
  msg += 'No estan en el grupo: ' + noGroups.join(',')
  document.querySelector('#finalGroups').innerHTML=msg
}