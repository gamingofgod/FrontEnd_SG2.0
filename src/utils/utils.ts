
export function randomNumber(min:number, max:number) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

