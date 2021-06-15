create table relatorio(
    id bigint not null auto_increment,
    id_relatorio binary(36) not null,
   	pergunta int(2) not null,
   	total_perguntas int(2) not null,
    media_total decimal(5,2) not null,
    menor_resposta int(2) not null,
    maior_resposta int(2) not null,

    primary key(id)
);