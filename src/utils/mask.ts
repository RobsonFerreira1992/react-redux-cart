export const moeda = (value: string | number | undefined) => {
  let str = value ? value.toString() : '';

  if(typeof value == "number")
    return value
      .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
      .replace("R$", '')
      .trim()

};