import pg from 'pg'

async function connect (){
    if(global.connection){
        return global.connection.connect()
    }

const pool = new pg.Pool({
    // const client = new pg.Client('postgres://postgres:postgres@localhost:5432/postgres')
    user: 'postgres',          
    host: 'localhost',            
    database: 'petshop-api',
    password: '123456',        
    port: 5432,                   // Porta padrão do PostgreSQL
    max: 10,                      // Número máximo de conexões no pool
    idleTimeoutMillis: 30000,     // Tempo ocioso antes de fechar a conexão
    connectionTimeoutMillis: 2000,// Tempo de espera para obter uma conexão
  });

global.connection = pool

return pool.connect()
}

export {
    connect
}