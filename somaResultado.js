export default function somaResultado()
{
    let i = 13;
    let soma = 0;
    let k = 0;
  
    while (k < i)
    {
        k = k + 1;
        soma = soma + k;
    }

    document.getElementById( 'somaResultado' ).innerText = soma;
}