export function changeColor (setIcon ,primera, setPrimera) {
    var r = document.querySelector(':root')

    var rs = getComputedStyle(r);

    if (rs.getPropertyValue('--background-color') === 'hsl(0, 0%, 98%)' || primera === true){
      setPrimera(false)
      r.style.setProperty('--background-color', 'hsl(207, 26%, 17%)')
      r.style.setProperty('--secondary-background-color', 'hsl(209, 23%, 22%)')
      r.style.setProperty('--color', 'white')
      r.style.setProperty('--input-background-color', 'hsl(209, 23%, 22%)')
      r.style.setProperty('--outline', 'hsl(207, 26%, 18%)')
      setIcon(true)
    } else {
      r.style.setProperty('--background-color', 'hsl(0, 0%, 98%)')
      r.style.setProperty('--secondary-background-color', 'white')
      r.style.setProperty('--color', 'hsl(207, 26%, 17%)')
      r.style.setProperty('--input-background-color', 'white')
      r.style.setProperty('--outline', 'hsl(0, 0%, 97%)')
      setIcon(false)
    }
  }