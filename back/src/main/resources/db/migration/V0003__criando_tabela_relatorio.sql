create table relatorio(
    id bigint not null auto_increment,
    id_relatorio bigint not null,
   	pergunta int (2) not null,
    media_pergunta int(2) not null,

    primary key(id)
);