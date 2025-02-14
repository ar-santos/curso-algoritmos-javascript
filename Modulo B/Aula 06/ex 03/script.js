var nome = prompt('Qual é seu nome?')

document.writeln(`Olá, ${nome}! Seu nome tem ${nome.length} letras. <br/>`);

document.writeln(`Já seu nome em letras maiúculas é ${nome.toUpperCase()}. <br/>`);

document.writeln(`È minúsculas é ${nome.toLowerCase()}.`);