export function changeColor () {
    var r = document.querySelector(':root')

    var rs = getComputedStyle(r);

    if (rs.getPropertyValue('--background-color') === 'white'){
      r.style.setProperty('--background-color', 'hsl(207, 26%, 17%)')
      r.style.setProperty('--secondary-background-color', 'hsl(209, 23%, 22%)')
      r.style.setProperty('--color', 'white')
      r.style.setProperty('--input-background-color', 'hsl(209, 23%, 22%)')
    } else {
      r.style.setProperty('--background-color', 'white')
      r.style.setProperty('--secondary-background-color', 'rgb(216, 216, 216)')
      r.style.setProperty('--color', 'hsl(207, 26%, 17%)')
      r.style.setProperty('--input-background-color', 'white')
    }
  }