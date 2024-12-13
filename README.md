# Aplicativo

- Aplicação no estilo GymPass.

# Requisitos Funcionais (RFs)
[x] Usuários devem poder se registrar;
[x] Usuários devem poder se autenticar;
[x] Usuários devem poder recuperar o perfil autenticado;
[x] Usuários devem poder ver o total de check-ins realizados;
[x] Usuários devem poder visualizar o histórico de check-ins;
[x] Usuários devem poder buscar academias próximas (dentro de um raio de 10 km);
[x] Usuários devem poder buscar academias pelo nome;
[x] Usuários devem poder fazer check-in em uma academia;
[x] Administradores devem poder validar o check-in de um usuário;
[x] Administradores devem poder cadastrar novas academias.
# Regras de Negócio (RNs)
[x] Usuários não podem se registrar com e-mails duplicados;
[x] Usuários não podem realizar dois check-ins no mesmo dia;
[x] Usuários só podem fazer check-in se estiverem a no máximo 100 metros da academia;
[x] Check-ins só podem ser validados em até 20 minutos após a criação;
[x] Somente administradores podem validar check-ins;
[x] Somente administradores podem cadastrar academias.
# Requisitos Não Funcionais (RNFs)
[x] Senhas de usuários devem ser criptografadas;
[x] Os dados da aplicação devem ser armazenados em um banco de dados PostgreSQL;
[x] Todas as listas de dados devem ser paginadas, exibindo 20 itens por página;
[x] Usuários devem ser identificados por meio de um JWT (JSON Web Token).
