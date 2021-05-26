create table relatorio(
    id bigint not null auto_increment,
    data_inicial date not null,
    data_final date not null,
    media_geral int(2) not null,
    admin_id bigint not null,
    avaliacao_id bigint not null,

    primary key(id)
);

alter table relatorio add constraint fk_relatorio_admin
foreign key (admin_id) references admin (id);

alter table relatorio add constraint fk_relatorio_avaliacao
foreign key (avaliacao_id) references avaliacao (id);