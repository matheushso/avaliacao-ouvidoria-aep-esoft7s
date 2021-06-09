create table avaliacao(
	id bigint not null auto_increment,
	protocolo int(10) not null,
	pergunta int (2) not null,
    resposta int(2) not null,
    
    primary key(id)
);