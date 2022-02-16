HOOKs
São funções que deixa controlar os estados e ciclo de vida dos componentes 

* useState - estados
* useEffect - efeito executado no momento certo, com callback. tendo como segundo argumento um array que verifica se mudou a dependecia do estado.

* useRef - retorn objeto para se referrir lementos da DOm
* useMemo - memoriza o valor evitando a recriação. recebe um callback e um array de dependecia. Operações lentas
* useCalback
* useContext -permite passra estados entre todos os componentes


Callback -> sempre tem o valor anterior como 1º argumento o retorno um novo valor



CRIAR HOOK:
 Deve começar com a palabra 'use'


REGRAS:
Não utilize os hooks dentro de funções, loops ou condicionais
Utilizar só em componentes e custom hooks

/

*****************************************************************************************/


INPUT :
 onbluer - usado para fazer validação 

useForm- podemos definir um custom hook para o formulario